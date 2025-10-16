<template>
  <footer class="mt-12 py-8 border-t border-slate-200/10">
    <div
      class="container-max text-sm flex flex-col md:flex-row items-center justify-between gap-3"
    >
      <div>© {{ new Date().getFullYear() }} Ilham Nait Mbarek</div>
      <div class="flex items-center gap-4">
        <a href="https://github.com/" target="_blank" class="hover:underline"
          >GitHub</a
        >
        <a
          href="https://linkedin.com/in/ilham-a-mbarek"
          target="_blank"
          class="hover:underline"
          >LinkedIn</a
        >
        <span class="text-xs text-slate-500"
          >Construit avec Vue + Tailwind</span
        >
      </div>
    </div>
  </footer>
</template>
<script setup></script>
