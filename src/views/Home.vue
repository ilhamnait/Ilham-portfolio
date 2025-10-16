<template>
  <main>
    <Hero :lang="lang" />
    <section class="container-max mt-10">
      <SectionTitle id="experience" :title="t.nav.experience" />
      <div>
        <ExperienceItem v-for="(e,idx) in t.experience" :key="idx" :item="e" />
      </div>
    </section>
    <section class="container-max mt-6">
      <SectionTitle id="projects" :title="t.nav.projects" />
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectCard v-for="(p,idx) in projects" :key="idx" :project="p" />
      </div>
    </section>

    <section class="container-max mt-6">
      <SectionTitle id="skills" :title="t.nav.skills" />
      <div class="grid md:grid-cols-3 gap-2">
        <SkillBadge v-for="s in flatSkills" :key="s" :label="s" />
      </div>
    </section>

    <section class="container-max mt-6">
      <SectionTitle id="education" :title="t.nav.education" />
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li v-for="(e,idx) in t.education" :key="idx">
          {{ e.title }} <span v-if="e.note">— {{ e.note }}</span>
        </li>
      </ul>
    </section>

    <section id="contact" class="container-max mt-10 mb-16">
      <SectionTitle :title="t.nav.contact" />
      <ContactForm :lang="lang" />
    </section>
  </main>
</template>
<script setup>
import { computed } from 'vue' 
import Hero from '../components/Hero.vue' 
import SectionTitle from '../components/SectionTitle.vue' 
import ExperienceItem from '../components/ExperienceItem.vue' 
import ProjectCard from '../components/ProjectCard.vue' 
import SkillBadge from '../components/SkillBadge.vue' 
import ContactForm from '../components/ContactForm.vue' 
import fr from '../data/fr.json' 
import en from '../data/en.json' 
const props = defineProps({ lang: String }) 
const t = computed(() => (props.lang === 'fr' ? fr : en)) 
const flatSkills = computed(() => { 
  const s = t.value.skills 
  return [ ...s.languages, ...s.frameworks, ...s.cms, ...s.testing, ...s.frontend, ...s.systems, ...s.tools, ...s.methods, ...s.other ] 
}) 
const projects = computed(() => t.value.projects || [])
</script>
