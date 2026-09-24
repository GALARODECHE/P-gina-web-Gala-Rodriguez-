import { BlogPost } from '../types';
import { initialPosts } from '../data/initialNutritionData';

const CACHE_KEY = 'galanutricion_substack_feed_v2';
const CACHE_TTL_MS = 60 * 1000; // 1 minute fresh cache for continuous real-time sync

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200',
];

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8212;/g, '—')
    .replace(/&#8211;/g, '–')
    .replace(/&#160;/g, ' ');
}

function detectCategory(title: string, summary: string): string {
  const lower = (title + ' ' + summary).toLowerCase();
  if (lower.includes('soja') || lower.includes('mujer') || lower.includes('mama') || lower.includes('hormon') || lower.includes('piel') || lower.includes('embarazo')) {
    return 'Salud de la Mujer';
  }
  if (lower.includes('mito') || lower.includes('light') || lower.includes('zero') || lower.includes('gurú') || lower.includes('kombucha') || lower.includes('tostadas')) {
    return 'Mitos y Ciencia';
  }
  if (lower.includes('inflama') || lower.includes('digest') || lower.includes('descongelar') || lower.includes('alimento') || lower.includes('hidratación') || lower.includes('microbiota')) {
    return 'Salud Digestiva';
  }
  if (lower.includes('tunutrilens') || lower.includes('inteligencia artificial') || lower.includes('app')) {
    return 'Innovación';
  }
  if (lower.includes('prevención') || lower.includes('equilibrio') || lower.includes('desgaste') || lower.includes('energía') || lower.includes('hábito')) {
    return 'Hábitos y Bienestar';
  }
  return 'Nutrición Clínica';
}

export function parseSubstackRssXml(xml: string): BlogPost[] {
  const items: BlogPost[] = [];
  const itemMatches = xml.split('<item>');
  itemMatches.shift();

  for (let i = 0; i < itemMatches.length; i++) {
    const itemXml = itemMatches[i];
    const titleMatch = itemXml.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || itemXml.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const descMatch = itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || itemXml.match(/<description>([\s\S]*?)<\/description>/);
    const enclosureMatch = itemXml.match(/<enclosure[^>]+url="([^"]+)"/);
    const contentMatch = itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);

    const title = decodeHtmlEntities(titleMatch ? titleMatch[1].trim() : 'Publicación de Nutrición');
    const link = linkMatch ? linkMatch[1].trim() : 'https://galanutricion.substack.com';
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : '';

    let coverImage = enclosureMatch ? enclosureMatch[1] : '';
    const contentHtml = contentMatch ? contentMatch[1] : (descMatch ? descMatch[1] : '');

    if (!coverImage || coverImage.endsWith('.mp3') || (!coverImage.match(/\.(png|jpe?g|webp|gif)/i) && !coverImage.includes('/image/'))) {
      const imgMatch = contentHtml.match(/https%3A%2F%2Fsubstack-post-media\.s3\.amazonaws\.com%2Fpublic%2Fimages%2F[^"&\s]+/) ||
                       contentHtml.match(/https:\/\/substack-post-media\.s3\.amazonaws\.com\/public\/images\/[^"&\s]+/) ||
                       contentHtml.match(/src="([^"]+)"/);
      if (imgMatch) {
        coverImage = decodeURIComponent(imgMatch[0]);
      } else {
        coverImage = FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];
      }
    }

    let summary = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    if (!summary || summary.length < 20) {
      summary = contentHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 180);
    }
    summary = decodeHtmlEntities(summary);
    if (summary.length > 200) {
      summary = summary.slice(0, 197) + '...';
    }

    const category = detectCategory(title, summary);
    const wordCount = contentHtml.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
    const readTime = Math.max(2, Math.ceil(wordCount / 200)) + ' min de lectura';

    let formattedDate = 'Reciente';
    let rawTimestamp = 0;
    if (pubDate) {
      try {
        const parsedTime = Date.parse(pubDate);
        if (!isNaN(parsedTime)) {
          rawTimestamp = parsedTime;
        }
        formattedDate = new Date(pubDate).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        });
      } catch {
        formattedDate = 'Reciente';
      }
    }

    items.push({
      id: `substack-live-${i + 1}`,
      title,
      summary,
      content: contentHtml,
      coverImage,
      publishDate: formattedDate,
      rawTimestamp,
      readTime,
      category,
      substackUrl: link
    });
  }

  // Sort strictly by newest date first
  items.sort((a, b) => (b.rawTimestamp || 0) - (a.rawTimestamp || 0));

  // Flag the newest entries
  if (items.length > 0) {
    items[0].isLatest = true;
    if (items.length > 1) {
      items[1].isLatest = true;
    }
  }

  return items;
}

export function parseRss2JsonItems(jsonItems: any[]): BlogPost[] {
  const items: BlogPost[] = jsonItems.map((item, idx) => {
    const title = decodeHtmlEntities(item.title || 'Publicación en Substack');
    let summary = decodeHtmlEntities((item.description || '').replace(/<[^>]+>/g, '').trim());
    if (summary.length > 200) summary = summary.slice(0, 197) + '...';

    let coverImage = item.thumbnail || (item.enclosure && item.enclosure.link);
    if (!coverImage || coverImage.endsWith('.mp3')) {
      const match = (item.content || item.description || '').match(/src="([^"]+)"/);
      coverImage = match ? match[1] : FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length];
    }

    let formattedDate = 'Reciente';
    let rawTimestamp = 0;
    if (item.pubDate) {
      try {
        const parsedTime = Date.parse(item.pubDate);
        if (!isNaN(parsedTime)) {
          rawTimestamp = parsedTime;
        }
        formattedDate = new Date(item.pubDate).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        });
      } catch {
        formattedDate = 'Reciente';
      }
    }

    return {
      id: `substack-live-r2j-${idx + 1}`,
      title,
      summary,
      content: item.content || item.description || `<p>${summary}</p>`,
      coverImage,
      publishDate: formattedDate,
      rawTimestamp,
      readTime: '3 min de lectura',
      category: detectCategory(title, summary),
      substackUrl: item.link || 'https://galanutricion.substack.com'
    };
  });

  items.sort((a, b) => (b.rawTimestamp || 0) - (a.rawTimestamp || 0));
  if (items.length > 0) {
    items[0].isLatest = true;
    if (items.length > 1) {
      items[1].isLatest = true;
    }
  }

  return items;
}

export async function fetchLiveSubstackPosts(forceRefresh = false): Promise<{ posts: BlogPost[]; fromCache: boolean; timestamp: number }> {
  // Check local cache
  if (!forceRefresh && typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
          return { posts: data, fromCache: true, timestamp };
        }
      }
    } catch (e) {
      console.warn('Could not read cached Substack posts:', e);
    }
  }

  // 1. First strategy: Local / Vercel API proxy
  try {
    const res = await fetch('/api/feed', {
      headers: { Accept: 'application/xml, text/xml, */*' }
    });
    if (res.ok) {
      const xml = await res.text();
      const parsed = parseSubstackRssXml(xml);
      if (parsed.length > 0) {
        saveToCache(parsed);
        return { posts: parsed, fromCache: false, timestamp: Date.now() };
      }
    }
  } catch (err) {
    console.info('Proxy /api/feed not available, attempting direct client fallback...', err);
  }

  // 2. Second strategy: rss2json public endpoint
  try {
    const r2jRes = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgalanutricion.substack.com%2Ffeed');
    if (r2jRes.ok) {
      const json = await r2jRes.json();
      if (json.status === 'ok' && Array.isArray(json.items) && json.items.length > 0) {
        const parsed = parseRss2JsonItems(json.items);
        saveToCache(parsed);
        return { posts: parsed, fromCache: false, timestamp: Date.now() };
      }
    }
  } catch (err) {
    console.warn('rss2json fallback failed:', err);
  }

  // 3. Third strategy: Use local cached fallback or bundled real posts
  return { posts: initialPosts, fromCache: true, timestamp: Date.now() };
}

function saveToCache(posts: BlogPost[]) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data: posts,
          timestamp: Date.now()
        })
      );
    } catch (e) {
      console.warn('Could not save Substack posts to cache:', e);
    }
  }
}
