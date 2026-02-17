<script setup>
import { useRoute } from 'vue-router'


const route = useRoute()
const slug = route.params.slug

definePageMeta({
  layout: 'home'
})


const { getProjectBySlug } = useProjects()

const project = getProjectBySlug(slug) || {
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
  <div class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
    <!-- Navbar -->
    <AppNavbar class="fixed top-6 w-full z-50" />

    <div v-if="project.title !== 'Proyek Tidak Ditemukan'" class="animate-fade-in relative">
      
      <!-- Hero/Header Section -->
      <section class="relative pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
        <!-- Background elements -->
        <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        <div class="container mx-auto px-6 relative z-10">
           <!-- Back Link -->
           <NuxtLink to="/projects" class="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors font-medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Projects
           </NuxtLink>

           <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 w-fit">
                    <span class="relative flex h-2 w-2">
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {{ project.type }}
                  </div>
                  
                  <h1 class="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                    {{ project.title }}
                  </h1>
                  
                  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8">
                    {{ project.description }}
                  </p>

                  <div class="flex flex-wrap gap-4">
                     <a :href="project.link" target="_blank" class="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/25 hover:-translate-y-1 flex items-center gap-2">
                        Visit Website
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                           <line x1="5" y1="12" x2="19" y2="12"></line>
                           <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                     </a>
                  </div>
              </div>
              
              <!-- Project Meta -->
              <div class="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                  <div class="grid grid-cols-2 gap-8">
                      <div>
                          <div class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Client</div>
                          <div class="text-slate-900 dark:text-white font-medium">{{ project.client }}</div>
                      </div>
                      <div>
                          <div class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Company</div>
                          <div class="text-slate-900 dark:text-white font-medium">{{ project.company }}</div>
                      </div>
                       <div>
                          <div class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Year</div>
                          <div class="text-slate-900 dark:text-white font-medium">{{ project.year }}</div>
                      </div>
                      <div>
                          <div class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Tech Stack</div>
                          <div class="flex flex-wrap gap-2">
                             <span v-for="t in project.tech" :key="t" class="text-sm text-slate-900 dark:text-white font-medium bg-white dark:bg-slate-700 px-2 py-1 rounded border border-slate-200 dark:border-slate-600">{{ t }}</span>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Project Image Section -->
      <section class="py-12 px-6">
         <div class="container mx-auto">
             <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                <img :src="project.image" :alt="project.title" class="w-full h-auto object-cover" />
             </div>
         </div>
      </section>

      <!-- Additional Images / Showcase -->
      <section v-if="project.showcase_images && project.showcase_images.length" class="py-12 px-6">
         <div class="container mx-auto">
             <div class="grid gap-8">
                <div v-for="(img, idx) in project.showcase_images" :key="idx" class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                    <img :src="img" :alt="`${project.title} showcase ${idx + 1}`" class="w-full h-auto object-cover" />
                </div>
             </div>
         </div>
      </section>

      <!-- Content/Details Placeholder (Optional for future expansion) -->
      <section class="py-20 mx-auto px-6 container max-w-4xl text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
         <p>
            More detailed breakdown of the development process, challenges faced, and solutions implemented for this project will be added here.
         </p>
      </section>

    </div>
    
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center p-12 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Proyek Tidak Ditemukan</h1>
          <p class="text-slate-500 mb-6">Proyek yang Anda cari tidak ada.</p>
          <NuxtLink to="/projects" class="px-6 py-2 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Kembali ke Projects
          </NuxtLink>
      </div>
    </div>
    
    <AppFooter />
  </div>
</template>
