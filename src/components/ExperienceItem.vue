<template>
  <div class="mb-6">
    <div class="flex items-baseline justify-between gap-4">
      <div class="font-medium">
        {{ item.role }} —
        <span class="text-primary-400">{{ item.company }}</span>
      </div>
      <div class="text-sm text-slate-500 dark:text-slate-300">
        {{ item.dates }}
      </div>
    </div>
    <ul class="mt-2 list-disc pl-5 space-y-1 text-sm">
      <li v-for="(p,idx) in item.points" :key="idx">{{ p }}</li>
    </ul>
  </div>
</template>
<script setup>
defineProps({ item: Object })
</script>
