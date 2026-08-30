<template>
  <div id="hero">
    <LinkList />
    <hr />

    <div class="herocontainer container">
      <div class="">
        <div class="herotitle">WHO IS Beatrix Ducz?</div>
        <div class="intro">
          An expert problem solver. A mid-level, full-stack developer. A life
          long learner. A fan of Agile Methodologies. A valuable member of your
          team?
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkList from "@/components/LinkList.vue";
</script>

<style scoped>
.herocontainer {
  padding-block: 2em;
  column-gap: 10px;
}
.herotitle {
  font-family: "Roboto Condensed", sans-serif;
  font-size: clamp(2rem, 8vw, 70px);
  line-height: 1.15;
  color: var(--six);
  text-align: right;
  text-shadow: -2px -1px 2px #ccc;
}
.intro {
  font-size: clamp(1.85rem, 7vw, 44px);
  font-family: "Waterfall", cursive;
  color: var(--five);
  margin-top: 2.5rem;
  line-height: 1.3;
}
.profile_image_mobile {
  display: none;
  width: 60px;
  height: 60px;
}
@media (max-width: 768px) {
  .profile_image {
    display: none;
  }
  .profile_image_mobile {
    display: block;
  }
  .herocontainer {
    display: block;
    padding-block: 40px;
  }
}
</style>
