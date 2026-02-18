<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Hire Me - Nur Sawaluddin',
  meta: [
    { name: 'description', content: 'Get in touch for project inquiries and collaborations.' }
  ]
})

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
    
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
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
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
    <!-- Page Header -->
    <section class="pt-32 pb-12 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent dark:from-primary/10 dark:to-transparent relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 dark:bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center max-w-6xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mb-4">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Projects
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Let's Build Something <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Amazing</span>
          </h1>
          
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Tell me about your project and I will get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-12 pb-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Success Message -->
          <div v-if="showSuccess" class="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
            <div class="flex items-center gap-3">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 class="font-bold text-green-900 dark:text-green-100">Message Sent Successfully!</h3>
                <p class="text-sm text-green-700 dark:text-green-300">I'll get back to you soon.</p>
              </div>
            </div>
          </div>

          <!-- Form Card -->
          <div class="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-700">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Name</label>
                <input 
                  v-model="contactName" 
                  type="text" 
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="Your Name" 
                  required 
                />
              </div>

              <div>
                <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Email</label>
                <input 
                  v-model="contactEmail" 
                  type="email" 
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="your@email.com" 
                  required 
                />
              </div>

              <div>
                <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Project Details</label>
                <textarea 
                  v-model="contactMessage" 
                  rows="6" 
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                :disabled="isLoading"
              >
                <span v-if="!isLoading">Send Project Inquiry</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>

            <!-- Additional Contact Info -->
            <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Other Ways to Connect</h3>
              <div class="space-y-3">
                <a href="mailto:contact@nursawaluddin.my.id" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="font-medium">contact@nursawaluddin.my.id</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
