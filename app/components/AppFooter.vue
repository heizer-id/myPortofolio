<template>
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
    <div class="container mx-auto px-6">
       <div class="grid md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-1 md:col-span-2">
             <div class="flex items-center gap-2 mb-6">
                <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">N</div>
                <span class="text-xl font-bold text-slate-900 dark:text-white">Nur Sawaluddin</span>
             </div>
             <p class="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
               Backend & WordPress Developer tailored for scalable, high-performance web solutions. Let's build something exceptional together.
             </p>
             <div class="flex gap-4 mt-6">
               <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </a>
               <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
               <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </a>
               <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
               </a>
             </div>
          </div>
          
          <div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Explore</h4>
            <ul class="space-y-4">
               <li><NuxtLink to="/" class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Home</NuxtLink></li>
               <li><NuxtLink to="/about" class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">About</NuxtLink></li>
               <li><NuxtLink to="/projects" class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Projects</NuxtLink></li>
               <li><NuxtLink to="/store" class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Store</NuxtLink></li>
            </ul>
          </div>
          
          <div>
             <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
             <ul class="space-y-4">
                <li class="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                   <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   <span>contact@nursawaluddin.my.id</span>
                </li>
                <li class="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                   <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   <span>Indonesia</span>
                </li>
             </ul>
          </div>
       </div>
       
       <div class="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-slate-500 dark:text-slate-400 text-sm">
             &copy; 2026 Nur Sawaluddin. All rights reserved.
          </div>
          <div class="flex gap-6">
             <a href="#" class="text-sm text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" class="text-sm text-slate-400 hover:text-primary transition-colors">Terms of Service</a>
          </div>
       </div>
    </div>
  </footer>
</template>
