<template>
  <form class="space-y-3" :action="formEndpoint" method="POST">
    <div>
      <label class="block text-sm mb-1">{{ t.contact.name }}</label>
      <input
        type="text"
        name="name"
        required
        class="w-full px-3 py-2 rounded bg-white dark:bg-slate-900 border border-slate-300/30"
      />
    </div>
    <div>
      <label class="block text-sm mb-1">{{ t.contact.email }}</label>
      <input
        type="email"
        name="email"
        required
        class="w-full px-3 py-2 rounded bg-white dark:bg-slate-900 border border-slate-300/30"
      />
    </div>
    <div>
      <label class="block text-sm mb-1">{{ t.contact.message }}</label>
      <textarea
        name="message"
        rows="5"
        required
        class="w-full px-3 py-2 rounded bg-white dark:bg-slate-900 border border-slate-300/30"
      ></textarea>
    </div>
    <label class="flex items-start gap-2 text-xs">
      <input type="checkbox" required class="mt-1" />
      <span>{{ t.contact.consent }}</span>
    </label>
    <button
      class="px-4 py-2 rounded bg-primary-500 text-white hover:bg-primary-400"
    >
      {{ t.contact.submit }}
    </button>
  </form>
</template>
<script setup>
import { computed } from 'vue' 
import fr from '../data/fr.json' 
import en from '../data/en.json' 
const props = defineProps({ lang: String }) 
const t = computed(() => (props.lang === 'fr' ? fr : en)) // Remplace par ton endpoint Formspree si tu en crées un const formEndpoint = 'https://formspree.io/f/your-id'
</script>
