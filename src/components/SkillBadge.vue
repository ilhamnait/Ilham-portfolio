<template>
  <span
    class="px-3 py-1 rounded border border-slate-300/30 bg-slate-100 dark:bg-slate-800 text-sm"
    >{{ label }}</span
  >
</template>

<script setup>
defineProps({ label: String })
</script>
