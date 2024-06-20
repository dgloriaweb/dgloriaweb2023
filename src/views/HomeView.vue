<template>
  <div>
    <div id="navigation">
      <!-- <a href="#" v-scroll-to="'#hero'">Top</a> -->
    </div>
    <HeroComponent />
    <ProjectsList />
  </div>
  <div class="copy">
    &copy;2023 by
    <a href="https://github.com/dgloriaweb" target="_blank">dGloria Web</a>
  </div>
</template>

<script setup>
import HeroComponent from '@/components/HeroComponent'
import ProjectsList from '@/components/ProjectsList'

</script>

<style >
.copy {
  text-align: right;
  font-size: 16px;
  font-style: italic;
}
</style>