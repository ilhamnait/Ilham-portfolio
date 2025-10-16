<template>
  <div
    class="p-4 rounded border border-slate-200/20 bg-white dark:bg-slate-900"
  >
    <div class="font-semibold mb-1">{{ project.title }}</div>
    <div class="text-sm text-slate-600 dark:text-slate-300 mb-2">
      {{ project.context }}
    </div>
    <div class="text-xs text-slate-500 mb-2">
      <strong>Stack:</strong> {{ project.stack }}
    </div>
    <ul class="list-disc pl-5 text-sm space-y-1">
      <li v-for="(r,idx) in project.results" :key="idx">{{ r }}</li>
    </ul>
  </div>
</template>
<script setup>
defineProps({ project: Object })
</script>
