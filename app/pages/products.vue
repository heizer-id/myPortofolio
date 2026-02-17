<script setup>
definePageMeta({
  layout: 'home'
})

const { products } = useProducts()

useHead({
  title: 'Store - Nur Sawaluddin',
  meta: [
    { name: 'description', content: 'Curated products and desk setup gear recommended by Nur Sawaluddin.' }
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
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Curated Gear
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              My <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gear Store</span>
            </h1>
            
            <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              A carefully selected collection of tech gear, accessories, and tools that I use and recommend.
            </p>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-12 bg-slate-50 dark:bg-slate-800/30">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="product in products" :key="product.id" class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div class="h-56 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center">
                        <img :src="product.image" :alt="product.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <!-- Platform Badge -->
                        <div class="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm"
                             :class="product.platform === 'Shopee' ? 'text-orange-500' : 'text-green-500'">
                            {{ product.platform }}
                        </div>
                    </div>
                    
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span v-for="tag in product.tags" :key="tag" class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-medium text-slate-600 dark:text-slate-400">
                                {{ tag }}
                            </span>
                        </div>
                        
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">{{ product.title }}</h3>
                        <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                            {{ product.description }}
                        </p>
                        
                        <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                            <div class="text-lg font-bold text-primary">{{ product.price }}</div>
                            <a :href="product.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                                Buy Now
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <AppFooter />
  </div>
</template>
