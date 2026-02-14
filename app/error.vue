<script setup lang="ts">
import type { NuxtError } from '#app'
// Revert to relative import as alias seems to fail
import './assets/css/main.css' 

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
const goHome = () => clearError({ redirect: '/' })
const goToWork = () => clearError({ redirect: '/#projects' })
</script>

<template>
  <div class="error-page-wrapper">
    <div class="app-container error-page">
      
      <!-- Header / Top Label -->
      <div class="error-header">
         <span class="text-muted is-flex items-center gap-2">
            <span class="status-dot" style="background-color: #9CA3AF;"></span>
            Oops! 404
         </span>
      </div>

      <!-- Main Content -->
      <div class="error-content">
        <div class="avatar-container">
           <img src="https://ui-avatars.com/api/?name=Nur+Sawaluddin&background=111827&color=fff&size=200" alt="Nur Sawaluddin" class="avatar-img">
           <div class="avatar-ring"></div>
        </div>

        <h1 class="error-title">Page not found.</h1>
        <p class="error-subtitle">The page does not exist.</p>

        <div class="action-buttons">
          <button @click="goHome" class="btn btn-primary">Back to Home</button>
          <button @click="goToWork" class="btn btn-outline">See My Work &rarr;</button>
        </div>
      </div>

      <!-- Footer / Socials -->
      <div class="error-footer">
         <div class="card-surface social-card">
            <div class="social-header">
               <span class="text-muted is-flex items-center gap-2">
                  <span class="status-dot" style="background-color: #9CA3AF;"></span>
                  Follow Me
               </span>
            </div>
            <div class="social-icons">
               <!-- Placeholder Icons for X, IG, Dribbble, LinkedIn -->
               <a href="#" class="social-icon">X</a>
               <a href="#" class="social-icon">Instagram</a>
               <a href="#" class="social-icon">Dribbble</a>
               <a href="#" class="social-icon">LinkedIn</a>
            </div>
         </div>
         <div class="copyright text-center text-xs text-muted mt-lg">
            &copy; 2026 Nur Sawaluddin • Portofolio
         </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Ensure variables are defined in case main.css fails or is scoped differently */
.error-page-wrapper {
  --color-primary: #111827;
  --color-bg: #F3F5F7;
  --color-surface: #FFFFFF;
  --color-text-muted: #9CA3AF;
  --color-border: #E5E7EB;
  --color-text-secondary: #6B7280;
  --radius-lg: 1rem;
  --radius-sm: 0.5rem;
  
  background-color: var(--color-bg);
  min-height: 100vh;
  font-family: 'Inter', system-ui, sans-serif;
  display: flex;
  justify-content: center;
}

.error-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
  max-width: 800px; /* Fallback for container-width */
  padding: 1rem;
}

.error-header {
  padding: 1rem 0;
  display: flex;
  justify-content: center; /* Center on mobile? No, let's keep left */
}

.error-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
}

.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 2rem;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border: 4px solid var(--color-bg);
  background-color: #E2E8F0;
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  z-index: 1;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.error-subtitle {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.error-footer {
  margin-top: auto;
  width: 100%;
}

.social-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: var(--color-text-secondary);
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
  text-decoration: none;
}

.social-icon:hover {
  background-color: var(--color-bg);
  color: var(--color-primary);
}

.is-flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.gap-2 {
    gap: 0.5rem;
}

.text-muted {
    color: var(--color-text-muted);
}

.text-center {
    text-align: center;
}

.text-xs {
    font-size: 0.75rem;
}

.mt-lg {
    margin-top: 1.5rem;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 6px;
  display: inline-block;
}

/* Button styles fallback */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

.btn-outline {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-primary);
}

.btn-outline:hover {
    background-color: var(--color-bg);
}

@media (max-width: 640px) {
  .social-card {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .social-icons {
      flex-wrap: wrap;
      justify-content: center;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }

  .action-buttons button {
    width: 100%;
  }
}
</style>
