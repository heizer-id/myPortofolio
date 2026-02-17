<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

definePageMeta({
  layout: 'home'
})

// Navbar Visibility Logic
const showNavbar = ref(false)
const heroSection = ref(null)

const handleScroll = () => {
  if (heroSection.value) {
    const rect = heroSection.value.getBoundingClientRect()
    // Show navbar when scrolling past the hero section
    showNavbar.value = rect.bottom < 50
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

useHead({
  title: 'Nur Sawaluddin - Backend & WordPress Developer',
  meta: [
    { name: 'description', content: 'Backend Developer specialized in Laravel, PostgreSQL, and WordPress development.' }
  ]
})

// Skills Data
const skills = [
  { name: 'Laravel', icon: 'SiLaravel', color: 'text-red-600' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', color: 'text-blue-500' },
  { name: 'Vue.js', icon: 'SiVuedotjs', color: 'text-green-500' },
  { name: 'Nuxt', icon: 'SiNuxtdotjs', color: 'text-green-400' },
  { name: 'WordPress', icon: 'SiWordpress', color: 'text-blue-600' },
  { name: 'Docker', icon: 'SiDocker', color: 'text-blue-400' },
  { name: 'Redis', icon: 'SiRedis', color: 'text-red-500' },
  { name: 'Git', icon: 'SiGit', color: 'text-orange-500' },
]

// Project Data
const { projects } = useProjects()

// Experience Data
const experiences = [
  {
    role: 'IT Staff',
    company: 'Universitas Muhammadiyah Sinjai',
    period: '2023 - Present',
    desc: 'Managing university IT infrastructure, developing academic information systems, and maintaining network security.'
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2020 - Present',
    desc: 'Developing custom web solutions for various clients using Laravel and WordPress.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
    <!-- Navbar (Conditional) -->
    <!-- Navbar (Conditional) -->
    <AppNavbar 
      class="transition-transform duration-500 ease-in-out transform fixed top-6 w-full z-50"
      :class="[showNavbar ? 'translate-y-0' : '-translate-y-[200%]']"
    />
    <!-- Hero Section -->
    <section ref="heroSection" class="relative pt-6 pb-12 lg:pt-0 lg:pb-0 min-h-screen flex items-center overflow-hidden">
      <!-- Clean, subtle background elements -->
      <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="space-y-6 lg:space-y-8 animate-fade-in content-center order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 w-fit">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Projects
            </div>
            
            <h1 class="text-4xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Backend & <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WordPress Dev</span>
            </h1>
            
            <p class="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              I build robust, scalable backend systems and custom WordPress solutions. Focused on performance, security, and clean architecture.
            </p>
            
            <div class="flex flex-wrap gap-3 lg:gap-4 pt-2">
              <NuxtLink to="/hire" class="px-6 py-3 lg:px-8 lg:py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/25 hover:-translate-y-1 text-sm lg:text-base">
                Let's Talk
              </NuxtLink>
              <a href="#projects" class="px-6 py-3 lg:px-8 lg:py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 text-sm lg:text-base">
                View Work
              </a>
            </div>

            <div class="flex items-center gap-4 lg:gap-6 pt-2 text-slate-400">
               <div class="flex -space-x-3">
                  <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] lg:text-xs font-bold text-slate-600 dark:text-slate-300">5yr</div>
                  <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] lg:text-xs font-bold text-slate-600 dark:text-slate-300">Exp</div>
               </div>
               <div class="text-xs lg:text-sm font-medium">
                  <span class="block text-slate-900 dark:text-white font-bold">Proven Experience</span>
                  in Web Development
               </div>
            </div>
          </div>
          
          <div class="relative flex items-center justify-center order-1 lg:order-2 mt-8 lg:mt-0">
             <div class="relative z-10 w-64 h-64 lg:w-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 rotate-3 transition-transform hover:rotate-0 duration-500">
                <img src="/images/profile-photo.png" alt="Nur Sawaluddin" class="w-full h-full object-cover bg-slate-200 dark:bg-slate-800">
             </div>
             <!-- Decorative elements -->
             <div class="absolute top-4 right-4 lg:top-10 lg:right-10 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-purple-600 rounded-2xl -z-10 blur-xl opacity-60 animate-pulse"></div>
             <div class="absolute bottom-4 left-4 lg:bottom-10 lg:left-10 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-tr from-secondary to-teal-400 rounded-full -z-10 blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h2>
          <div class="h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          <div v-for="(skill, index) in skills" :key="index" class="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-700 transition-all text-center group">
              <div class="text-3xl mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300" :class="skill.color">
                 <!-- Icon placeholder logic same as before, keeping it simple -->
                 <span class="font-bold font-mono">{{ skill.name.substring(0,2) }}</span>
              </div>
              <div class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ skill.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-24">
      <div class="container mx-auto px-6">
         <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Professional Journey</h2>
            
            <div class="space-y-8">
               <div v-for="(exp, index) in experiences" :key="index" class="relative pl-8 md:pl-0">
                  <!-- Timeline Line -->
                  <div class="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-ml-px"></div>
                  <!-- Timeline Dot -->
                  <div class="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900 md:left-1/2 md:-ml-1"></div>
                  
                  <div class="md:flex justify-between items-start group">
                     <div class="md:w-[45%] md:text-right pr-8 mb-2 md:mb-0">
                        <div class="text-sm font-bold text-primary mb-1">{{ exp.period }}</div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ exp.company }}</h3>
                     </div>
                     <div class="md:w-[45%] md:pl-8">
                         <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{{ exp.role }}</h4>
                         <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ exp.desc }}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-slate-50 dark:bg-slate-800/50">
       <div class="container mx-auto px-6">
          <div class="flex items-end justify-between mb-12">
             <div>
               <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
               <div class="h-1 w-12 bg-primary rounded-full"></div>
             </div>
             <NuxtLink to="/projects" class="hidden md:flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
               View All Projects
               <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
             </NuxtLink>
          </div>

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
          
          <div class="mt-8 text-center md:hidden">
             <NuxtLink to="/projects" class="inline-flex items-center gap-2 text-primary font-medium">
                View All Projects
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
             </NuxtLink>
          </div>
       </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 px-6 container mx-auto">
       <div class="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden isolate">
          <!-- Background noise/pattern -->
          <div class="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
          <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div class="relative z-10 max-w-3xl mx-auto">
             <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to launch your next idea?</h2>
             <p class="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
               I'm available for freelance projects and consulting. Let's discuss how we can build scalable solutions together.
             </p>
             <NuxtLink to="/hire" class="inline-block px-10 py-4 bg-white text-primary rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-1">
               Start a Project
             </NuxtLink>
          </div>
       </div>
    </section>
    <AppFooter />
  </div>
</template>
