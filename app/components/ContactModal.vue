<script setup>
import { ref } from 'vue'

const { showModal, closeModal } = useModal()

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
      closeModal()
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
</script>

<template>
  <div v-if="showModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity" @click.self="closeModal">
    <div class="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl transform transition-all relative">
      <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" @click="closeModal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      
      <div class="text-center mb-6">
        <div class="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-3">Available for Work</div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Project Inquiry</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Tell me about your project and I will get back to you soon.</p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input 
            v-model="contactName" 
            type="text" 
            class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
            placeholder="Your Name" 
            required 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input 
            v-model="contactEmail" 
            type="email" 
            class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
            placeholder="Email Address" 
            required 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea 
            v-model="contactMessage" 
            rows="4" 
            class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
            placeholder="Explain your project..." 
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          class="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Sending...' : 'Send Inquiry' }}
        </button>
      </form>
    </div>
  </div>
</template>
