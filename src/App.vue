<template>
  <div>
    <NavBar :lang="lang" @toggleLang="toggleLang" @toggleTheme="toggleTheme" />
    <Home :lang="lang" /> <FooterBar />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue' 
import NavBar from './components/NavBar.vue' 
import Home from './views/Home.vue' 
import FooterBar from './components/FooterBar.vue' 
const lang = ref(localStorage.getItem('lang') || 'fr') 
function toggleLang() { 
  lang.value = lang.value === 'fr' ? 'en' : 'fr' 
  localStorage.setItem('lang', lang.value) 
} 
function toggleTheme() { 
  const html = document.documentElement 
  html.classList.toggle('dark') 
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light') 
} onMounted(() => { 
  const saved = localStorage.getItem('theme') 
  if (saved === 'dark') 
    document.documentElement.classList.add('dark') 
  if (saved === 'light')
    document.documentElement.classList.remove('dark')
  })
</script>
