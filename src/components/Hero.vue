<template>
  <section class="container-max pt-14 pb-10">
    <div
      class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div>
        <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ t.hero.name }}</h1>
        <p class="text-primary-400 font-medium mb-3">{{ t.hero.title }}</p>
        <div class="text-sm text-slate-500 dark:text-slate-300 mb-4">
          <span class="mr-3">{{ t.hero.location }}</span>
          <span class="mr-3">•</span>
          <a
            :href="'tel:'+t.hero.phone.replace(/\\s|\\(|\\)|-/g,'')"
            class="hover:underline"
            >{{ t.hero.phone }}</a
          >
          <span class="mx-3">•</span>
          <a
            :href="'mailto:'+t.hero.email"
            class="hover:underline"
            >{{ t.hero.email }}</a
          >
          <span class="mx-3">•</span>
          <a
            :href="'https://' + t.hero.linkedin"
            target="_blank"
            rel="noopener"
            class="hover:underline"
            >LinkedIn</a
          >
        </div>
        <div class="flex gap-3">
          <a
            href="/cv/Ilham_Nait_Mbarek_F.pdf"
            class="px-4 py-2 rounded bg-primary-500 text-white hover:bg-primary-400"
            >{{ t.hero.ctaCvFr }}</a
          >
          <a
            href="/cv/Ilham_Nait_Mbarek_ENG.pdf"
            class="px-4 py-2 rounded border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >{{ t.hero.ctaCvEn }}</a
          >
          <a
            href="#contact"
            class="px-4 py-2 rounded bg-accent-500 text-slate-900 hover:bg-accent-400"
            >{{ t.hero.ctaContact }}</a
          >
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 text-xs">
        <span
          v-for="b in badges"
          :key="b"
          class="px-3 py-2 rounded border border-slate-300/30 bg-slate-100 dark:bg-slate-800"
          >{{ b }}</span
        >
      </div>
    </div>
    <p class="mt-6 text-sm max-w-3xl text-slate-600 dark:text-slate-300">
      {{ t.summary }}
    </p>
  </section>
</template>
<script setup>
import { computed } from 'vue' 
import fr from '../data/fr.json' 
import en from '../data/en.json' 
const props = defineProps({ lang: String }) 
const t = computed(() => (props.lang === 'fr' ? fr : en)) 
const badges = [ 'PHP 7+','Laravel','Symfony','Vue.js','MySQL','MS SQL Server','Docker','Git/GitLab','Jira','PHPUnit','WordPress','Agile' ]
</script>
