<template>
    <div class="container" id="app">
        <div>
            <h1>Work History and Projects</h1>
        </div>

        <ul id="geAcc">
            <li v-for="(tab, index) in tabs" :key="tab.label" :class="['geAcc__tile', { 'geAccT--active': activeTab == index }]" :style="`background: ${tab.bg} url('${tab.img}') no-repeat 0 0; background-size: cover;`" @click="activeTab = index">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==">
                <div class="geAcc__tile__content">
                    <h4 class="geAcc__tile__title" style="color:#fff;">{{ tab.label }}</h4>
                    <h4 class="geAcc__tile__url" v-if="tab.url1" style="color:#fff;"><a href="tab.url1" target="_blank">{{ tab.url1 }}</a></h4>
                    <h4 class="geAcc__tile__url" v-if="tab.url2" style="color:#fff;"><a href="tab.url2" target="_blank">{{ tab.url2 }}</a></h4>
                    <br>
                    <div class="geAcc__tile__excerpt" style="color: #fff;">
                        <h4 class="geAcc__tile__url" v-if="tab.bio" style="color:#fff;">{{ tab.bio }}</h4>
                    </div>
                </div>
                <div class="geAcc__tile__bar" :style="`background:${tab.bg}`"><span>{{ tab.label }}</span></div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const tabs = ref([
    {
        label: 'UMBICORD LTD', bg: '#990000',
        bio: "I've worked in a team of three on the backend of the street hubs in Belfast. I worked with Laravel, Codeigniter, Vagrant, Mysql, and some frontend, Node, Html, Css. My task was to develop connection to a weather service, retrieve formatted data and make sure it updates as required. Other task was to allow smarthub users to use their mobile phones to find venues with ongoing events in Belfast by providing them info about current events, showing a qr code, which opened Google maps with directions to the venue location. Fancy. The backend also gave editors ability to edit and approve these contents before it is submitted to the unit. I worked closely supporting the frontend and hardware team to build this device from zero to working within six months. I'm very proud of it. Another project I've worked on parallel was a document management software for a large company. It's a tool which allows 5 departments to communicate and store their status of workflow."
    },
    {
        label: 'MEDIAHAWK LTD', bg: '#005268', url1: 'https://www.mediahawk.co.uk/',
        bio: "The company has a marketing analytics solution product. I've joined a team of six helpful senior, highly qualified developers. My daily tasks were pickup story from JIRA and provide solution. My tasks were mostly to add new functions to existing code such as additional filters, new classes, provide data for the frontend, develop new integrations, do changes on the frontend. In the first quarter, we completely rewrote the frontend design of the product. We have worked in two-week sprints, and by the end of the first quarter, I have delivered solutions on my own./nI worked mainly with LAMP, Php, javascript, jquery, twig, html, and css in Windows and Linux environments. Occasionally, I did tech support in rotation with the team workers. I worked mostly in Codeigniter, but had to do bash file fixes, cron-jobs, and API as well. I did a lot of MySQL querying, building complex reports."
    },
    {
        label: 'BEAVER TRISON', bg: '#a49c85', url1: 'https://trison.uk/',
        bio: "I worked on all kinds of interactive digital media content for mobile, interactive screens, kiosks in Vue.js, Php, I used git, VsCode, Google Teams tools, Asana, Bitbucket. I work for clients like Lego, Merlin Entertainments, Halfords. Some of my work can be seen in some restaurants' menu screens, the interactive basketball game in Footlocker (shorturl.at/ghoB9), and mobile games in theme parks like Alton Towers and Legoland Florida."
    },
    {
        label: 'PERSONAL PROJECTS', bg: '#d25d00', url1: 'https://talentexploit.com/', url2: 'https://dailydriver.info/',
        bio: "I'm working on Laravel/Vue based applications, one is Talentexploit, which is a tool that people can use to find their new career paths based on their current skills and options. Goal is to co-operate with training companies that can offer the right trainings for the selected career path. /nThe other project is dailydriver.info, that is a tool for delivery couriers to manage their incomes and other stuff. This is on discord, where I'd like to monetize it once it is ready for release. I know what they need, because while I was looking for software developer jobs, I often make money by doing deliveries."
    }
]);

const activeTab = ref(0);
</script>

<style scoped>
/* Reset styles */
html {
    box-sizing: border-box;
    overflow-y: scroll;
}

body {
    font-family: sans-serif;
    font-weight: 300;
    font-size: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

a:focus,
button:focus,
input:focus,
textarea:focus,
:focus {
    outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}

/* App container */
#app {
    padding: 2em;
}

/* Accordion styles */
#geAcc {
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

.geAcc__tile {
    background-attachment: fixed !important;
    overflow: hidden;
    position: relative;
    transition: all ease 0.5s;
    width: 100%;
}

.geAcc__tile img {
    height: 85px;
    transition: all ease 0.5s;
    width: auto;
}

.geAccT--active img {
    height: 80vh;
}

.geAcc__tile__content {
    height: 100%;
    left: 0;
    padding: 2em;
    position: absolute;
    top: 0;
    transition-delay: 0.3s;
    width: 100%;
    z-index: 2;
}

.geAcc__tile__title {
    color: #000;
    font-size: 1.7em;
    font-weight: 700;
    margin: 0 0 0.25em 0;
    text-transform: uppercase;
}

.geAcc__tile__excerpt {
    color: #000;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.4em;
    margin: 0 0 2em 0;
    width: 100%;
}

.geAcc__tile__button {
    border: none;
    color: #fff;
    display: block;
    float: left;
    font-size: 1.4em;
    font-weight: 700;
    outline: 0;
    text-decoration: none;
    text-transform: uppercase;
    transform: scale(0.8);
    transform-origin: 0;
}

.geAcc__tile__button:after {
    content: url("https://i.ibb.co/WnYbfZG/arr.png");
    display: block;
    float: right;
    height: 18px;
    padding: 0 0 0 0.25em;
    transform: translateX(0);
    transition: all ease 0.3s;
    width: 35px;
}

.geAcc__tile__button:hover:after {
    transform: translateX(10px);
}

.geAcc__tile__bar {
    font-weight: bold;
    bottom: 0;
    display: block;
    left: 0;
    padding: 2em;
    position: absolute;
    width: 100%;
    z-index: 3;
}

.geAccT--active .geAcc__tile__bar span {
    color: #fff;
    display: block;
    float: left;
    font-size: 1.6em;
    line-height: calc(90px - 4em);
    text-transform: uppercase;
}

.geAccT--active .geAcc__tile__bar span:after {
    content: url("https://i.ibb.co/WnYbfZG/arr.png");
    display: block;
    float: right;
    height: 18px;
    opacity: 1;
    padding: 0 0 0 1em;
    transform: translateX(0);
    transition: all ease 0.3s;
    width: 35px;
}

.geAccT--active .geAcc__tile__bar span:after {
    opacity: 0;
}

/* Media queries */
@media only screen and (min-width: 768px) {
    .geAccT--active img {
        height: 50vh;
    }
}

@media only screen and (min-width: 1024px) {
    .geAcc__tile__content {
        padding: 4em;
    }

    .geAcc__tile__excerpt {
        width: 70%;
    }

    .geAccT--active img {
        height: 80vh;
    }
}

@media only screen and (min-width: 1280px) {
    #geAcc {
        display: flex;
        float: none;
    }

    .geAcc__tile {
        background-attachment: inherit !important;
        width: 16.66667%;
    }

    .geAccT--active {
        width: 50%;
    }

    .geAcc__tile img {
        min-height: 400px;
        height: 70vh;
    }

    .geAcc__tile__content {
        opacity: 0;
        transform: translateX(15vw);
        transition: all ease 0.5s;
        transition-delay: 0.3s;
        width: 1440px;
    }

    .geAccT--active .geAcc__tile__content {
        opacity: 1;
        transform: translateX(0);
        transition: all ease 0.5s;
    }

    .geAcc__tile__excerpt {
        width: 33%;
    }

    .geAcc__tile__button {
        transform: scale(1);
    }

    .geAcc__tile__bar {
        width: 1024px;
    }

    .geAcc__tile__bar span {
        font-size: 1.3em;
        line-height: normal;
    }

    .geAcc__tile__bar span:after {
        opacity: 0;
    }
}
</style>
