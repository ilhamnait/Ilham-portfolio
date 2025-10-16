<template>
  <header
    class="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-[#0B0F19]/70 border-b border-slate-200/10"
  >
    <nav class="container-max flex items-center justify-between h-14">
      <a href="#" class="font-semibold">Ilham Nait Mbarek</a>
      <div class="flex items-center gap-3">
        <a
          href="#experience"
          class="text-sm hover:text-primary-400"
          >{{ t.nav.experience }}</a
        >
        <a
          href="#projects"
          class="text-sm hover:text-primary-400"
          >{{ t.nav.projects }}</a
        >
        <a
          href="#skills"
          class="text-sm hover:text-primary-400"
          >{{ t.nav.skills }}</a
        >
        <a
          href="#education"
          class="text-sm hover:text-primary-400"
          >{{ t.nav.education }}</a
        >
        <a
          href="#contact"
          class="text-sm hover:text-primary-400"
          >{{ t.nav.contact }}</a
        >
        <button
          @click="$emit('toggleLang')"
          class="px-2 py-1 rounded border border-slate-300/30 text-xs hover:bg-slate-200/20"
        >
          {{ lang.toUpperCase() }}
        </button>
        <button
          @click="$emit('toggleTheme')"
          class="p-2 rounded hover:bg-slate-200/20"
          aria-label="Toggle theme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M5.929 18.364l-.707.707m12.142 0l.707-.707M5.929 5.636l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { computed } from 'vue' 
import fr from '../data/fr.json' 
import en from '../data/en.json' 
const props = defineProps({ lang: { type: String, default: 'fr' } }) 
const t = computed(() => (props.lang === 'fr' ? fr : en))
</script>
