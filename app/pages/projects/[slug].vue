<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

const projects = {
  'kpi-digital': {
    title: 'Aplikasi KPI Digital',
    client: 'Agensi Internal', 
    company: 'Goven Soven',
    type: 'Aplikasi Web',
    year: '2024',
    description: 'Platform inovatif yang memberdayakan bisnis untuk mengelola Key Performance Indicator (KPI) secara efisien, memberikan pengalaman pengguna yang mulus sambil membedakan dirinya dari kompetitor.',
    image: '/images/kpi-digital.png',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: 'https://kpi.stahdnj.ac.id/'
  },
  'inventaris-digital': {
    title: 'Inventaris Digital',
    client: 'Klien Korporat',
    company: 'Rectangle',
    type: 'Sistem Manajemen',
    year: '2025',
    description: 'Sistem manajemen inventaris komprehensif yang dirancang untuk memperlancar pelacakan aset dan pelaporan, menggunakan Google Apps Script untuk integrasi yang mulus.',
    image: '/images/inventaris-digital.png',
    tech: ['Next.js', 'Google Apps Script'],
    link: 'https://inventaris.stahdnj.ac.id/'
  },
  'perpustakaan-digital': {
    title: 'Perpustakaan Digital',
    client: 'Instansi Pendidikan',
    company: 'EduCorp',
    type: 'Sistem Perpustakaan',
    year: '2023',
    description: 'Solusi perpustakaan digital yang menawarkan kemudahan akses bagi mahasiswa dan fakultas ke berbagai sumber daya, dengan fitur pencarian canggih dan manajemen peminjaman.',
    image: 'https://placehold.co/800x600/111827/FFFFFF?text=Preview+Perpustakaan',
    tech: ['Next.js', 'PostgreSQL'],
    link: '#'
  }
}

const project = projects[slug] || {
  title: 'Proyek Tidak Ditemukan',
  description: 'Proyek yang Anda cari tidak dapat ditemukan.',
  image: '',
  tech: []
}

useHead({
  title: `${project.title} - Nur Sawaluddin`,
  meta: [
    { name: 'description', content: project.description }
  ]
})
</script>

<template>
  <div class="app-container">
    <!-- Navigation (Back) -->
    <nav class="nav-bar mb-4">
      <div class="nav-links">
        <NuxtLink to="/" class="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
           <!-- Added margin for spacing -->
          <span style="margin-left: 0.5rem; font-weight: 500;">Kembali ke Beranda</span>
        </NuxtLink>
      </div>
    </nav>

    <div v-if="project.title !== 'Proyek Tidak Ditemukan'" class="project-detail animate-fade-in">
      
      <!-- Meta Grid -->
      <div class="card-surface meta-card">
        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">Klien</span>
            <span class="meta-value">{{ project.client }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Perusahaan</span>
            <span class="meta-value">{{ project.company }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Tipe Proyek</span>
            <span class="meta-value">{{ project.type }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Tahun</span>
            <span class="meta-value">{{ project.year }}</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="main-content mt-lg">
        <!-- Logo/Icon Placeholder -->
        <div class="project-icon mb-4">
            <!-- Using the same icon style as in the design -->
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
           </svg>
        </div>

        <h1 class="project-title">{{ project.title }}</h1>
        
        <p class="project-description">
          {{ project.description }}
        </p>

        <a :href="project.link" target="_blank" class="btn btn-primary visit-btn">
          Kunjungi Website
           <!-- Arrow Right -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.5rem;">
             <line x1="5" y1="12" x2="19" y2="12"></line>
             <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        <!-- Project Image -->
        <div class="project-image-container mt-lg">
          <img :src="project.image" :alt="project.title" class="project-image" />
        </div>
      </div>

    </div>
    
    <div v-else class="text-center mt-lg">
      <div class="card-surface" style="padding: 3rem;">
          <h1>Proyek Tidak Ditemukan</h1>
          <p class="text-muted mb-4">Proyek yang Anda cari tidak ada.</p>
          <NuxtLink to="/" class="btn btn-primary">Kembali ke Beranda</NuxtLink>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Specific Styles for Project Detail Page */

.meta-card {
  padding: 2rem;
  background-color: var(--color-surface); 
  border: 1px solid rgba(0,0,0,0.05);
  margin-bottom: 3rem;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meta-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.meta-value {
  font-size: var(--font-size-sm);
  font-weight: 600; /* Slightly bolder */
  color: var(--color-text-primary);
}

.project-icon {
  width: 64px;
  height: 64px;
  background-color: #4F46E5; /* Indigo/Blurple color from design idea */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);
}

.project-title {
  font-size: 3rem; /* Larger */
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.project-description {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: 2.5rem;
}

.visit-btn {
  padding: 0.875rem 2rem;
  font-size: var(--font-size-sm);
  background-color: #111827; /* Dark black/gray */
  color: white;
  display: inline-flex;
  align-items: center;
}

.visit-btn:hover {
    background-color: #000;
}

.project-image-container {
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: #F3F4F6;
  margin-top: 4rem;
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.project-image:hover {
  transform: scale(1.01);
}

/* Response for smaller screens */
@media (max-width: 768px) {
  .meta-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .project-title {
    font-size: 2.25rem;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
