<template>
  <div class="links">
    <router-link class="portfolio-link" to="/portfolio" title="Open Portfolio">
      <img
        src="/images/social_svgs/portfolio-icon.svg"
        alt="Portfolio link"
        width="24px"
        height="24px"
      />
    </router-link>
    <a href="https://github.com/dgloriaweb" target="_blank" title="GitHub">
      <img
        src="/images/social_svgs/github.svg"
        alt="Github link"
        width="24px"
        height="24px"
      />
    </a>
    <a href="https://www.linkedin.com/in/beatrix-d-78482a265" target="_blank" title="LinkedIn">
      <img
        src="/images/social_svgs/linkedin.svg"
        alt="LinkedIn link"
        width="24px"
        height="24px"
      />
    </a>
    <a href="mailto:dgloria.web@gmail.com" target="_blank" title="Email me">
      <img
        src="/images/social_svgs/email.svg"
        alt="email me link"
        width="24px"
        height="24px"
      />
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
.links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
}
.links a,
.links .portfolio-link {
  display: inline-flex;
  padding: 15px;
}
.links a img,
.links .portfolio-link img {
  display: block;
  padding: 3px;
  border: 2px solid #bbb;
  border-radius: 5px;
}
.portfolio-link {
  color: var(--six);
}
.portfolio-link:hover img {
  border-color: var(--four);
}
</style>
