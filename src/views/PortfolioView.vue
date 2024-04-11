<template>
<div class="container" id="app">
    <div><h1>Work History and Projects</h1></div>
    
    <ul id="geAcc">
      <li v-for="(tab, index) in tabs" :key="tab.label"
          :class="['geAcc__tile', {'geAccT--active': activeTab==index}]"
          :style="`background: ${tab.bg} url('${tab.img}') no-repeat 0 0; background-size: cover;`"
          @click="activeTab=index"
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==">
        <div class="geAcc__tile__content">
          <h4 class="geAcc__tile__title" style="color:#fff;">{{tab.label}}</h4>
          <h4 class="geAcc__tile__url" v-if="tab.url1" style="color:#fff;"><a href="tab.url1" target="_blank">{{tab.url1}}</a></h4>
          <h4 class="geAcc__tile__url" v-if="tab.url2" style="color:#fff;"><a href="tab.url2" target="_blank">{{tab.url2}}</a></h4>
          <div class="geAcc__tile__excerpt" style="color: #fff;">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
          <a href="index.html" class="geAcc__tile__button" style="color: #fff;">read more</a>
        </div>
        <div class="geAcc__tile__bar" :style="`background:${tab.bg}`"><span>{{tab.label}}</span></div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const tabs = ref([
  { label: 'UMBICORD LTD', bg: '#990000' ,},
  { label: 'MEDIAHAWK LTD', bg: '#005268',url1: 'https://www.mediahawk.co.uk/' },
  { label: 'BEAVER TRISON', bg: '#a49c85',url1: 'https://trison.uk/' },
  { label: 'PERSONAL PROJECTS', bg: '#d25d00',url1: 'https://talentexploit.com/' , url2:'https://dailydriver.info/'}
]);

const activeTab = ref(0);
</script>

<style>

</style>