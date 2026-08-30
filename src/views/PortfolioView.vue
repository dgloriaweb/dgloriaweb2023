<template>
    <div class="container" id="app">
        <ul id="accordion">
            <li
                v-for="(tab, index) in tabs"
                :key="tab.label"
                :class="['accordion__item', { 'accordion__item--active': activeTab == index }]"
                @click="activeTab = index"
            >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==">

                <div class="accordion__panel">
                    <h4 class="accordion__url" v-if="tab.url1">
                        <a :href="tab.url1" target="_blank" rel="noopener" @click.stop>
                            {{ tab.url1 }}
                        </a>
                    </h4>

                    <h4 class="accordion__url" v-if="tab.url2">
                        <a :href="tab.url2" target="_blank" rel="noopener" @click.stop>
                            {{ tab.url2 }}
                        </a>
                    </h4>

                    <br>

                    <!-- Rich project content.
                         Beaver Trison currently has projects in portfolio-tabs.json.
                         Other companies remain untouched until you add projects. -->
                    <div
                        v-if="tab.projects && tab.projects.length"
                        class="portfolio-projects"
                        @click.stop
                    >
                        <article
                            v-for="project in tab.projects"
                            :key="project.title"
                            class="portfolio-project"
                        >
                            <div class="portfolio-project__text">
                                <h3>{{ project.title }}</h3>
                                <p v-if="project.description">
                                    {{ project.description }}
                                </p>
                            </div>

                            <div
                                v-if="project.media && project.media.length"
                                class="portfolio-project__media"
                            >
                                <div
                                    v-for="(media, mediaIndex) in project.media"
                                    :key="mediaIndex"
                                    class="portfolio-media"
                                >
                                    <!-- Vimeo -->
                                    <div
                                        v-if="media.type === 'video' && media.provider === 'vimeo'"
                                        class="portfolio-media__video"
                                    >
                                        <iframe
                                            :src="media.url"
                                            :title="media.caption || project.title"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                        <p v-if="media.caption">
                                            {{ media.caption }}
                                        </p>
                                    </div>

                                    <!-- Image -->
                                    <div
                                        v-else-if="media.type === 'image'"
                                        class="portfolio-media__image"
                                    >
                                        <img
                                            :src="media.src"
                                            :alt="media.caption || project.title"
                                        >
                                        <p v-if="media.caption">
                                            {{ media.caption }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div class="accordion__bar">
                    <h1 class="accordion__title">{{ tab.label }}</h1>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { loadPortfolioTabs } from '@/services/portfolioTabs.js';

const tabs = ref([]);
const activeTab = ref(0);

onMounted(async () => {
    tabs.value = await loadPortfolioTabs();
});
</script>

<style scoped>
/* Larimar, sand, coral and jade are all light-to-mid tones: dark grey text stays high-contrast on every tile. */
.accordion__item {
    --tile-text: #2b2b2b;
    --tile-text-soft: rgba(43, 43, 43, 0.75);
}

a:focus,
:focus {
    outline: none;
}

h1,
h3,
h4,
ul,
li,
p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}

/* App container */


/* Accordion styles */
#accordion {
    list-style-type: none;
    display: block;
    float: left;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    position: relative;
    max-width: 1920px;
    padding: 0;
    width: 100%;
}

.accordion__item {
    background-attachment: fixed !important;
    overflow: hidden;
    position: relative;
    transition: all ease 0.5s;
    width: 100%;
}

.accordion__item:nth-child(4n + 1) {
    background: var(--two);
}
.accordion__item:nth-child(4n + 2) {
    background: var(--four);
}
.accordion__item:nth-child(4n + 3) {
    background: var(--three);
}
.accordion__item:nth-child(4n + 4) {
    background: var(--six);
}


.accordion__item img {
    height: 85px;
    transition: all ease 0.5s;
    width: auto;
}

.accordion__item--active img {
    height: 80vh;
}

.accordion__panel {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition-delay: 0.3s;
    width: 100%;
    z-index: 2;
}

.accordion__title,
.accordion__url,
.accordion__url a {
    color: var(--tile-text);
}

.accordion__title {
    font-size: 1.8em;
    font-weight: 700;
    padding: 0 0 0 1.5em;
}

.accordion__bar {
    font-weight: bold;
    top: 0;
    display: block;
    left: 0;
    padding: 1em;
    position: absolute;
    width: 100%;
    z-index: 3;
}

.accordion__item--active .accordion__bar::after {
    content: url("https://i.ibb.co/WnYbfZG/arr.png");
    display: block;
    float: right;
    height: 18px;
    opacity: 0;
    padding: 0 0 0 1em;
    transform: translateX(0);
    transition: all ease 0.3s;
    width: 35px;
}

/* Media queries */
@media only screen and (min-width: 768px) {
    .accordion__item--active img {
        height: 50vh;
    }
}

@media only screen and (min-width: 1024px) {
    .accordion__panel {
        padding: 4em;
    }

    .accordion__item--active img {
        height: 80vh;
    }
}

@media only screen and (min-width: 1280px) {
    #accordion {
        display: flex;
        float: none;
    }

    .accordion__item {
        background-attachment: inherit !important;
        width: 16.66667%;
    }

    .accordion__item--active {
        width: 50%;
    }

    .accordion__item img {
        min-height: 400px;
        height: 70vh;
    }

    .accordion__panel {
        opacity: 0;
        transform: translateX(15vw);
        transition: all ease 0.5s;
        transition-delay: 0.3s;
        width: 1440px;
    }

    .accordion__item--active .accordion__panel {
        opacity: 1;
        transform: translateX(0);
        transition: all ease 0.5s;
    }

    .accordion__bar {
        width: 1024px;
    }

    .accordion__bar::after {
        opacity: 0;
    }
}
/* Rich project presentation */
.portfolio-projects {
    width: 100%;
    max-height: 55vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 2rem;
}

@media (max-width: 768px) {
    .portfolio-projects {
        grid-template-columns: 1fr;
    }
}

.portfolio-project {
    border-top: 1px solid var(--tile-text-soft);
}

.portfolio-project__text h3 {
    color: var(--tile-text);
    font-size: 1.35rem;
}

.portfolio-project__text p,
.portfolio-media p {
    color: var(--tile-text-soft);
    line-height: 1.5;
}

.portfolio-project__media {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
}

.portfolio-media__video {
    width: min(720px, 100%);
}

.portfolio-media__video iframe {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
}

.portfolio-media__image img {
    display: block;
    max-width: 100%;
    max-height: 420px;
}
</style>
