<script setup>
import { onMounted } from 'vue'

definePageMeta({
  layout: 'home'
})

const { openModal } = useModal()

useHead({
  title: 'About - Nur Sawaluddin',
  meta: [
    { name: 'description', content: 'Tentang Nur Sawaluddin - Backend & WordPress Developer' }
  ]
})

// Project Data
const { projects } = useProjects()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
    <!-- Navbar -->
    <AppNavbar class="fixed top-6 w-full z-50" />

    <!-- Header Section -->
    <section class="relative pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
      <!-- Background elements -->
      <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 w-fit">
              <span class="relative flex h-2 w-2">
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              About Me
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Tentang <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Saya</span>
            </h1>
            
            <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed theme-text-p">
              Saya Nur Sawaluddin, seorang Backend & WordPress Developer dengan pengalaman lebih dari 3 tahun yang berbasis di Indonesia. Saya memiliki passion yang mendalam dalam menciptakan sistem backend yang robust dan tema WordPress yang purposeful. Tujuan utama saya adalah menjembatani kesenjangan antara bisnis dan teknologi, mengubah tantangan kompleks menjadi solusi yang bermakna dan seamless.
            </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 bg-slate-50 dark:bg-slate-800/30">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Lebih Lanjut Tentang Saya</h2>
                        <div class="h-1 w-12 bg-primary rounded-full mb-6"></div>
                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Saya memiliki latar belakang pendidikan di bidang teknologi informasi dan terus bersemangat untuk tetap update dengan teknologi dan tren development terbaru. Aktif terlibat dalam komunitas developer, saya secara rutin berpartisipasi dalam berbagai tech meetup dan conference.
                        </p>
                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ketika tidak sedang coding, saya menemukan ketenangan dalam mengeksplorasi teknologi baru dan berbagi pengetahuan melalui blog. Saya sangat percaya pada work-life balance yang sehat, memastikan untuk mengambil jeda dan mengisi ulang kreativitas. Di waktu luang, saya juga berkontribusi pada proyek open source.
                        </p>
                    </div>
                    <div class="relative">
                        <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500">
                             <!-- Using the same profile image as index.vue or a different one if available. Using the same for consistency -->
                             <img src="/images/profile-photo.png" alt="Nur Sawaluddin" class="w-full h-auto object-cover bg-slate-200 dark:bg-slate-800">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl -z-10 transform scale-110"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Side Projects Section -->
    <section class="py-20">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
               <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Proyek Sampingan</h2>
               <div class="h-1 w-12 bg-primary mx-auto rounded-full mb-4"></div>
               <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Saya mengerjakan passion project di waktu senggang, silakan lihat (semoga Anda menyukainya).
               </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <NuxtLink v-for="(project, index) in projects" :key="index" :to="project.internal_link" class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                    <div class="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                        <!-- Project Thumbnail Image -->
                        <img 
                          v-if="project.image" 
                          :src="project.image" 
                          :alt="project.title"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        >
                        <!-- Fallback placeholder if no image -->
                        <div v-else class="absolute inset-0 flex items-center justify-center">
                          <div class="text-slate-300 dark:text-slate-600">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                          </div>
                        </div>
                        <!-- Tags overlay -->
                        <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                            <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                    
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{{ project.title }}</h3>
                        <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                            {{ project.desc }}
                        </p>
                        <div class="inline-flex items-center text-primary font-semibold text-sm">
                            View Project
                            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 px-6 container mx-auto">
       <div class="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden isolate">
          <div class="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
          <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div class="relative z-10 max-w-3xl mx-auto">
             <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's work together.</h2>
             <p class="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
               Creating user experience and visual appealing design
             </p>
             <div class="flex flex-wrap justify-center gap-4">
                 <button @click="openModal" class="px-10 py-4 bg-white text-primary rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                   Hire Me
                 </button>
                 <button onclick="navigator.clipboard.writeText('contact@nursawaluddin.my.id'); alert('Email Disalin!')" class="px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Copy Email
                 </button>
             </div>
          </div>
       </div>
    </section>
    
    <AppFooter />
  </div>
</template>
