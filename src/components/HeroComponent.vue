<template>
  <div id="hero">
    <!-- links: dev.to, github, twitter -->
    <div class="links">
      <a href="https://dev.to/dgloriaweb" target="_blank">
        <img
          src="images/devto.png"
          alt="Dev.to link"
          width="30px"
          height="26px"
        />
      </a>
      <a href="https://github.com/dgloriaweb" target="_blank">
        <img
          src="images/github.png"
          alt="Dev.to link"
          width="30px"
          height="26px"
        />
      </a>
      <a href="https://my.indeed.com/p/beatrixd-r2c2nb8" target="_blank">
        <img
          src="images/indeed.png"
          alt="Dev.to link"
          width="30px"
          height="26px"
        />
      </a>
    </div>
    <hr />

    <div class="herocontainer container">
      <div class="">
        <div class="herotitle">WHO IS dGLORIA?</div>
        <div class="intro">
          An expert problem solver. A mid-level, full-stack developer. A wife. A
          great cook. A life long learner. A patient teacher. A fan of Agile. A
          valuable member of your team?
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style  scoped>
#hero {
  background-color: #191919;
}
.links {
  padding-top: 20px;
}
.links a {
  padding: 15px;
}
.links a img {
  border: 2px solid #bbb;
  border-radius: 5px;
}
.herocontainer {
  padding-block: 100px;
  column-gap: 10px;
}
.herotitle {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 70px;
  color: var(--six);
  text-align: right;
  text-shadow: -2px -1px 2px #ccc;
}
.intro {
  font-size: 44px;
  font-family: "Waterfall", cursive;
  color: var(--five);
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
  }
}
</style>