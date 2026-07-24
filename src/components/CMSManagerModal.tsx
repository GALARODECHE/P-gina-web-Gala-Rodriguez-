import React, { useState } from 'react';
import { X, Settings, Plus, Edit2, Trash2, Save, BookOpen, Smartphone, DollarSign, User, CheckCircle2, Palette } from 'lucide-react';
import { NutritionistProfile, NutritionService, NutritionApp, BlogPost } from '../types';

interface CMSManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: NutritionistProfile;
  services: NutritionService[];
  apps: NutritionApp[];
  posts: BlogPost[];
  onSaveProfile: (profile: NutritionistProfile) => void;
  onSaveServices: (services: NutritionService[]) => void;
  onSaveApps: (apps: NutritionApp[]) => void;
  onSavePosts: (posts: BlogPost[]) => void;
}

export const CMSManagerModal: React.FC<CMSManagerModalProps> = ({
  isOpen,
  onClose,
  profile,
  services,
  apps,
  posts,
  onSaveProfile,
  onSaveServices,
  onSaveApps,
  onSavePosts,
}) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'apps' | 'services' | 'profile'>('posts');
  
  // Local state for editing Profile
  const [editableProfile, setEditableProfile] = useState<NutritionistProfile>(profile);
  
  // Local state for Posts
  const [editablePosts, setEditablePosts] = useState<BlogPost[]>(posts);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    category: 'Nutrición Clínica',
    summary: '',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    publishDate: 'Hoy',
    readTime: '5 min de lectura',
    substackUrl: '',
  });

  // Local state for Apps
  const [editableApps, setEditableApps] = useState<NutritionApp[]>(apps);
  const [editingAppId, setEditingAppId] = useState<string | null>(null);
  const [newApp, setNewApp] = useState<Partial<NutritionApp>>({
    name: '',
    tagline: '',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    iconName: 'Calculator',
    tags: ['React', 'TypeScript'],
    features: ['Escaner de alimentos', 'Seguimiento de macros'],
  });

  // Local state for Services / Rates
  const [editableServices, setEditableServices] = useState<NutritionService[]>(services);

  const [savedSuccessMsg, setSavedSuccessMsg] = useState('');

  if (!isOpen) return null;

  const showSaveSuccess = (msg: string) => {
    setSavedSuccessMsg(msg);
    setTimeout(() => setSavedSuccessMsg(''), 2500);
  };

  // Profile Save
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(editableProfile);
    showSaveSuccess('¡Perfil profesional actualizado correctamente!');
  };

  // Posts Add / Save
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.summary) return;

    const created: BlogPost = {
      id: `post-${Date.now()}`,
      title: newPost.title || 'Nuevo Artículo',
      category: (newPost.category as any) || 'Nutrición Clínica',
      summary: newPost.summary || '',
      content: newPost.content || newPost.summary || '',
      coverImage: newPost.coverImage || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      publishDate: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      readTime: '4 min de lectura',
      substackUrl: newPost.substackUrl || profile.substackUrl,
      isFeatured: true,
      likesCount: 1,
    };

    const updated = [created, ...editablePosts];
    setEditablePosts(updated);
    onSavePosts(updated);
    setNewPost({
      title: '',
      category: 'Nutrición Clínica',
      summary: '',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      substackUrl: '',
    });
    showSaveSuccess('¡Nueva entrada de blog/Substack publicada!');
  };

  const handleDeletePost = (id: string) => {
    const updated = editablePosts.filter((p) => p.id !== id);
    setEditablePosts(updated);
    onSavePosts(updated);
    showSaveSuccess('Artículo eliminado');
  };

  // Apps Add / Save
  const handleAddApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApp.name) return;

    const created: NutritionApp = {
      id: `app-${Date.now()}`,
      name: newApp.name || 'Nueva App',
      tagline: newApp.tagline || 'App móvil desarrollada para pacientes',
      description: newApp.description || '',
      fullDescription: newApp.description || '',
      imageUrl: newApp.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      iconName: newApp.iconName || 'Smartphone',
      tags: newApp.tags || ['E-Health', 'Nutrición'],
      usersCount: '+1,000 Pacientes',
      rating: 5.0,
      features: newApp.features || ['Seguimiento personalizado'],
    };

    const updated = [...editableApps, created];
    setEditableApps(updated);
    onSaveApps(updated);
    setNewApp({
      name: '',
      tagline: '',
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    });
    showSaveSuccess('¡Nueva aplicación añadida al catálogo!');
  };

  const handleDeleteApp = (id: string) => {
    const updated = editableApps.filter((a) => a.id !== id);
    setEditableApps(updated);
    onSaveApps(updated);
    showSaveSuccess('Aplicación eliminada');
  };

  // Rates / Services Update
  const handleServiceChange = (id: string, field: keyof NutritionService, val: any) => {
    const updated = editableServices.map((s) => (s.id === id ? { ...s, [field]: val } : s));
    setEditableServices(updated);
  };

  const handleSaveAllServices = () => {
    onSaveServices(editableServices);
    showSaveSuccess('¡Tarifas y servicios de consulta actualizados!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="font-bold text-base sm:text-lg">Gestor de Contenidos & Tarifas</h2>
              <p className="text-xs text-slate-400">Edita en tiempo real tu web de nutrición</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 ${
              activeTab === 'posts'
                ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Blog & Substack ({editablePosts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 ${
              activeTab === 'services'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Tarifas & Planes ({editableServices.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('apps')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 ${
              activeTab === 'apps'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Apps Desarrolladas ({editableApps.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Perfil & Redes</span>
          </button>
        </div>

        {/* Saved Success Toast */}
        {savedSuccessMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>{savedSuccessMsg}</span>
          </div>
        )}

        {/* Tab Contents Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          
          {/* TAB 1: BLOG & SUBSTACK */}
          {activeTab === 'posts' && (
            <div className="space-y-6">
              
              {/* Form to Add New Post */}
              <form onSubmit={handleAddPost} className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                  <Plus className="w-4 h-4 text-amber-500" />
                  <span>Añadir Nueva Entrada de Blog / Substack</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Título del Artículo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Mitos sobre las frutas de noche"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Categoría</label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    >
                      <option value="Nutrición Clínica">Nutrición Clínica</option>
                      <option value="Mitos Alimentarios">Mitos Alimentarios</option>
                      <option value="Recetas Saludables">Recetas Saludables</option>
                      <option value="E-Health & Apps">E-Health & Apps</option>
                      <option value="Rendimiento Deportivo">Rendimiento Deportivo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Resumen Corto *</label>
                  <input
                    type="text"
                    required
                    placeholder="Breve descripción para la tarjeta..."
                    value={newPost.summary}
                    onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Contenido Extenso del Artículo</label>
                  <textarea
                    rows={4}
                    placeholder="Escribe el artículo aquí..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">URL Imagen de Portada</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={newPost.coverImage}
                      onChange={(e) => setNewPost({ ...newPost, coverImage: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Enlace a Substack (Opcional)</label>
                    <input
                      type="url"
                      placeholder="https://tu-substack.substack.com/p/..."
                      value={newPost.substackUrl}
                      onChange={(e) => setNewPost({ ...newPost, substackUrl: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publicar Artículo</span>
                </button>
              </form>

              {/* Existing Posts List */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">Artículos Actuales:</h4>
                {editablePosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <img src={post.coverImage} alt="" className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <span className="text-[10px] font-bold uppercase text-amber-600">{post.category}</span>
                        <h5 className="font-bold text-slate-900 dark:text-white line-clamp-1">{post.title}</h5>
                        <p className="text-xs text-slate-500 line-clamp-1">{post.summary}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                      title="Eliminar artículo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 2: RATES & SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Edición de Tarifas & Planes</h3>
                  <p className="text-xs text-slate-500">Ajusta los precios y textos que ven tus pacientes online</p>
                </div>

                <button
                  onClick={handleSaveAllServices}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar Tarifas</span>
                </button>
              </div>

              <div className="space-y-4">
                {editableServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Título Servicio</label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => handleServiceChange(service.id, 'title', e.target.value)}
                          className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Precio</label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => handleServiceChange(service.id, 'price', e.target.value)}
                          className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-extrabold text-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Período / Duración</label>
                        <input
                          type="text"
                          value={service.period}
                          onChange={(e) => handleServiceChange(service.id, 'period', e.target.value)}
                          className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Descripción</label>
                      <input
                        type="text"
                        value={service.description}
                        onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)}
                        className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                        <input
                          type="checkbox"
                          checked={service.isPopular}
                          onChange={(e) => handleServiceChange(service.id, 'isPopular', e.target.checked)}
                          className="rounded text-indigo-600"
                        />
                        <span>Destacar como "Más Popular / Recomendado"</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: APPS */}
          {activeTab === 'apps' && (
            <div className="space-y-6">
              
              {/* Form to Add New App */}
              <form onSubmit={handleAddApp} className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                  <Plus className="w-4 h-4 text-indigo-500" />
                  <span>Añadir Nueva Aplicación al Catálogo</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Nombre de la App *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: NutriFit Pro"
                      value={newApp.name}
                      onChange={(e) => setNewApp({ ...newApp, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Slogan / Tagline *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Tu diario de alimentos..."
                      value={newApp.tagline}
                      onChange={(e) => setNewApp({ ...newApp, tagline: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Descripción Completa</label>
                  <textarea
                    rows={3}
                    placeholder="Explicación del propósito de la app..."
                    value={newApp.description}
                    onChange={(e) => setNewApp({ ...newApp, description: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Guardar Aplicación</span>
                </button>
              </form>

              {/* Apps List */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">Apps Registradas:</h4>
                {editableApps.map((app) => (
                  <div
                    key={app.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white">{app.name}</h5>
                      <p className="text-xs text-slate-500">{app.tagline}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteApp(app.id)}
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: PROFILE & SOCIAL */}
          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">Tu Nombre Profesional *</label>
                  <input
                    type="text"
                    required
                    value={editableProfile.name}
                    onChange={(e) => setEditableProfile({ ...editableProfile, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Nº Colegiado/a *</label>
                  <input
                    type="text"
                    required
                    value={editableProfile.colegiadorNumber}
                    onChange={(e) => setEditableProfile({ ...editableProfile, colegiadorNumber: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Biografía Corta (Hero)</label>
                <textarea
                  rows={2}
                  value={editableProfile.bio}
                  onChange={(e) => setEditableProfile({ ...editableProfile, bio: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">URL Instagram</label>
                  <input
                    type="text"
                    value={editableProfile.instagramUrl}
                    onChange={(e) => setEditableProfile({ ...editableProfile, instagramUrl: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">URL Facebook</label>
                  <input
                    type="text"
                    value={editableProfile.facebookUrl}
                    onChange={(e) => setEditableProfile({ ...editableProfile, facebookUrl: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">URL Substack</label>
                  <input
                    type="text"
                    value={editableProfile.substackUrl}
                    onChange={(e) => setEditableProfile({ ...editableProfile, substackUrl: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Palette className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Personalización Estética (Color de Fondo & Estilo Web)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">
                      Color de Fondo de la Web
                    </label>
                    <select
                      value={editableProfile.bgTheme || 'default'}
                      onChange={(e) => setEditableProfile({ ...editableProfile, bgTheme: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-semibold text-xs"
                    >
                      <option value="default">Gris Neutro Clínico (Por defecto)</option>
                      <option value="pure-white">Blanco Puro Luminoso</option>
                      <option value="warm-cream">Crema & Marfil Cálido</option>
                      <option value="soft-mint">Verde Salvia Fresco</option>
                      <option value="cool-sky">Azul Hielo / Sanitario</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">
                      Color de Botones y Destacados
                    </label>
                    <select
                      value={editableProfile.themeColor || 'teal'}
                      onChange={(e) => setEditableProfile({ ...editableProfile, themeColor: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-semibold text-xs"
                    >
                      <option value="teal">Teal Clínico Lindo & Luminoso</option>
                      <option value="navy">Azul Sanitario Luminoso</option>
                      <option value="slate">Gris Platino Elegante</option>
                      <option value="sage">Menta & Salvia Clara</option>
                      <option value="amber">Cálido Coral & Melocotón</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar Cambios de Perfil & Estilo</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
