<template>
  <h2 :id="id" class="text-2xl font-semibold mb-6 scroll-mt-20">{{ title }}</h2>
</template>
<script setup>
defineProps({ title: String, id: String })
</script>
