<script setup>
definePageMeta({
  layout: 'home'
})

const { projects } = useProjects()

useHead({
  title: 'Projects - Nur Sawaluddin',
  meta: [
    { name: 'description', content: 'Portfolio of projects by Nur Sawaluddin - Backend & WordPress Developer' }
  ]
})
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
              My Work
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
            </h1>
            
            <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              A collection of projects I've worked on, ranging from web applications to system integrations. 
              Each project represents a unique challenge and solution.
            </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-12 bg-slate-50 dark:bg-slate-800/30">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <NuxtLink v-for="(project, index) in projects" :key="index" :to="project.internal_link" class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                    <div class="h-56 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
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
                       <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
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
                            {{ project.short_desc || project.description }}
                        </p>
                        <div class="inline-flex items-center text-primary font-semibold text-sm">
                            View Case Study 
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
             <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Have a project in mind?</h2>
             <p class="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
               I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
             </p>
             <div class="flex flex-wrap justify-center gap-4">
                 <NuxtLink to="/#contact" class="px-10 py-4 bg-white text-primary rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2">
                   Contact Me
                 </NuxtLink>
             </div>
          </div>
       </div>
    </section>

    <AppFooter />
  </div>
</template>
