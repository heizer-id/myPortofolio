<script setup>
import { ref } from 'vue'
// Import CSS directly
import '../assets/css/main.css'

useHead({
  title: 'Nur Sawaluddin - Tersedia untuk Proyek',
  meta: [
    { name: 'description', content: 'Portofolio Pengembang Backend & WordPress' }
  ]
})

// Modal State
const showModal = ref(false)
const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')
const isLoading = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isLoading.value = true
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: contactName.value,
        email: contactEmail.value,
        message: contactMessage.value
      }
    })
    
    // Reset form and show success
    contactName.value = ''
    contactEmail.value = ''
    contactMessage.value = ''
    showSuccess.value = true
    alert('Pesan berhasil dikirim!')
    setTimeout(() => {
      showModal.value = false
      showSuccess.value = false
    }, 2000)
    
  } catch (error) {
    if (error.data && error.data.statusMessage) {
       alert(error.data.statusMessage)
    } else {
       alert('Gagal mengirim pesan. Silakan coba lagi. Cek konsol browser untuk detail.')
    }
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

// Project Logic
const showAll = ref(false)

const projects = [
  {
    title: 'Aplikasi KPI Digital',
    tech: 'Next.js, Prisma, PostgreSQL',
    link: '/projects/kpi-digital',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    color: '#111827',
    bgColor: '#ffffff'
  },
  {
    title: 'Inventaris Digital',
    tech: 'Next.js, Google Apps Script',
    link: '/projects/inventaris-digital',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    color: '#111827',
    bgColor: '#ffffff'
  },
  {
    title: 'Perpustakaan Digital',
    tech: 'Next.js, PostgreSQL',
    link: '/projects/perpustakaan-digital',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    color: '#111827',
    bgColor: '#ffffff'
  },
  {
    title: 'Rectangle',
    tech: 'Product design, Icon design',
    link: '#',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`,
    color: '#6366f1',
    bgColor: '#e0e7ff'
  },
  {
    title: 'Morva Labs',
    tech: 'Visual design, Branding',
    link: '#',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12a4 4 0 0 1 8 0"></path></svg>`,
    color: '#111827',
    bgColor: '#f3f4f6'
  },
  {
    title: 'Simply',
    tech: 'Landing page, Illustration design',
    link: '#',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
    color: '#f97316',
    bgColor: '#ffedd5'
  },
  {
    title: 'Glassdoor',
    tech: 'Icon design, Illustration design',
    link: '#',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM9 9h6v6H9z"></path></svg>`,
    color: '#3b82f6',
    bgColor: '#dbeafe'
  },
  {
    title: 'Seven LTD.',
    tech: 'Branding, Landing page',
    link: '#',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="currentColor" font-family="Arial">7</text></svg>`,
    color: '#8b5cf6',
    bgColor: '#ede9fe'
  }
]

const visibleProjects = computed(() => {
  return showAll.value ? projects : projects.slice(0, 3)
})

const toggleProjects = () => {
  showAll.value = !showAll.value
}
</script>

<template>
  <div class="app-container">
    <!-- Navigation Bar -->
    <nav class="nav-bar">
      <div class="nav-links">
        <a href="#" class="nav-icon active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
        <a href="#projects" class="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </a>
        <a href="#" @click.prevent="openModal" class="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
      <div class="nav-cta">
        <button @click="openModal" class="btn btn-primary btn-sm">Rekrut Saya</button>
      </div>
    </nav>

    <!-- Profile Card (Header) -->
    <div class="card-surface">
      <div class="profile-card">
        <div class="profile-content">
          <div class="card-label">
            <span>Backend & WordPress Developer</span>
          </div>
          
          <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.75rem; line-height: 1.1; letter-spacing: -0.02em;">Saya Nur Sawaluddin</h1>
          
          <p class="text-muted" style="font-size: 1.125rem; margin-bottom: 2rem; max-width: 450px;">
            Sebagai Backend & WordPress Developer, saya berfokus pada arsitektur API yang skalabel dan tema kustom yang presisi. Saat ini, saya sedang mengeksplorasi batas baru dalam pengembangan web melalui ekosistem Next.js dan Nuxt.js untuk menghadirkan pengalaman pengguna yang cepat, dinamis, dan berperforma tinggi.
          </p>
          
          <div class="flex gap-2">
            <button @click="openModal" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 4h-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                <line x1="12" y1="11" x2="12" y2="17"></line>
                <line x1="9" y1="14" x2="15" y2="14"></line>
              </svg>
              Rekrut Saya
            </button>
            <button class="btn btn-outline" onclick="navigator.clipboard.writeText('contact@nursawaluddin.my.id'); alert('Email Disalin!')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Salin Email
            </button>
          </div>
        </div>
        <div class="profile-media">
          <div style="margin-bottom: 1rem;">
            <span class="badge badge-green">
              <span class="status-dot"></span>
              TERSEDIA UNTUK KERJA
            </span>
          </div>
          <div class="profile-avatar">
            <!-- Placeholder Memoji/Avatar -->
            <img src="/images/profile-photo.png" alt="Nur Sawaluddin">
          </div>
        </div>
      </div>
    </div>

    <!-- Stats / Availability Row -->
    <div class="grid-2" style="grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; display: none;"> 
       <!-- Reserved for future stats if needed -->
    </div>

    <!-- Projects Section (Full Width) -->
    <div id="projects" style="margin-bottom: 1.5rem;">
      <div class="card-surface" style="padding-bottom: 0.5rem;">
        <div class="card-title">
          <span>Proyek Saat Ini</span>
          <span class="view-all" @click="toggleProjects">
            {{ showAll ? 'Sembunyikan' : 'Lihat Semua' }} &rarr;
          </span>
        </div>
        
        <div class="list-container">
          <NuxtLink 
            v-for="(project, index) in visibleProjects" 
            :key="index"
            :to="project.link" 
            class="list-item"
          >
            <div class="item-icon" :style="{ color: project.color, backgroundColor: project.bgColor }">
              <span v-html="project.icon"></span>
            </div>
            <div class="item-content">
              <div class="item-title">{{ project.title }}</div>
              <div class="item-subtitle">{{ project.tech }}</div>
            </div>
            <div class="item-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </NuxtLink>
        </div>
        <br>
      </div>
    </div>

    <!-- Contact Trigger (Bottom Full Width) -->
    <div id="contact">
      <div class="card-surface contact-card-trigger" @click="openModal" style="min-height: auto; padding: 3rem 2rem;">
        <div class="flex flex-col items-center">
             <div class="pulse-ring" style="margin-bottom: 1rem; width: 60px; height: 60px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem;">Punya Ide?</h2>
            <p class="text-muted" style="margin-bottom: 1.5rem; max-width: 400px; text-align: center;">
              Baik itu platform baru atau tema kustom, mari kita bangun sesuatu yang luar biasa bersama.
            </p>
            <span class="btn btn-primary">
              Mulai Proyek
            </span>
        </div>
      </div>
      
      <div class="text-center text-xs text-muted mt-lg">
         &copy; 2026 Nur Sawaluddin • Portofolio
      </div>
    </div>

    <!-- Modal Form -->
    <div class="modal-overlay" :class="{ 'active': showModal }" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        
        <div class="text-center mb-4">
          <div class="badge badge-green mb-2">Tersedia untuk Kerja</div>
          <h2 style="font-size: 1.5rem; font-weight: 700;">Pertanyaan Proyek</h2>
          <p class="text-sm text-muted">Ceritakan tentang proyek Anda dan saya akan segera menghubungi Anda.</p>
        </div>

        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label class="form-label">Nama</label>
            <input v-model="contactName" type="text" class="form-input" placeholder="Nama Anda" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input v-model="contactEmail" type="email" class="form-input" placeholder="Alamat Email" required />
          </div>
          <div class="form-group">
            <label class="form-label">Pesan</label>
            <textarea v-model="contactMessage" class="form-textarea" placeholder="Jelaskan proyek Anda..." required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary btn-full" :disabled="isLoading">
            {{ isLoading ? 'Mengirim...' : 'Kirim Pertanyaan' }}
          </button>
        </form>
      </div>
    </div>

  </div>
</template>
