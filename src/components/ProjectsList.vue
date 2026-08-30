<template>
  <div id="projectslist" class="container">
    <h2 class="title">how much experience does she have?</h2>
    <div class="projectswrapper">
      <template v-for="(job, index) in jobs" :key="job.title">
        <div
          class="jobblock"
          :class="{ 'jobblock--left': index % 2 === 0 }"
        >
          <div class="block blocktext">
            <div class="br-top">{{ job.title }}</div>
            <div class="stack" v-if="job.stack && job.stack.length">
              <img
                v-for="tech in job.stack"
                :key="tech.src"
                :src="tech.src"
                :alt="tech.alt"
                width="30px"
                height="30px"
              />
            </div>

            <div class="br-content">
              <p>{{ job.description }}</p>
            </div>
            <div class="project-link" v-if="job.link">
              Link to project:
              <a :href="job.link.url" target="_blank">{{ job.link.label }}</a>
            </div>
          </div>
          <div class="block blockimage">
            <div class="br-img">
              <img :src="job.image" alt="" width="100%" height="auto" />
            </div>
          </div>
        </div>
        <hr />
      </template>
    </div>
    <div class="experience_list">
      <hr />
      <h2 class="title">Assets, skills, values</h2>
      <h3>Agile development</h3>
      <p>
        Excellent SCRUM member, know how Agile works, know about ceremonies,
        help the team write, refine and prioritise stories, come up with
        improvement ideas, but keep focus on the current sprint. Keep the
        backlog clean and up to date. Help succeed in the roadmap items. Help
        the team by internal training on the latest tech or knowledge gaps;
        always happy to share knowledge with the team. Working in silo is not my
        thing. Using staging sites to test new functions.
      </p>
      <h3>Data Manipulation</h3>
      <p>
        Collect, analyse, simplify, export or import data into SQL database from
        different data files, such as txt, csv, xls or other worksheets. (MySQL,
        MsSql) Plan and create databases for an exact purpose for complex tasks,
        define API requests, write clean and useful documentations for API
        endpoints.
      </p>
      <h3>Application Planning</h3>
      <p>
        Plan and create user flows, diagrams, charts, UX in Figma (basic). Help
        revisit old code and recommend updates with less code repetition by
        using components and reusable functions. Create plan for new features
        and present them to the team. Do benchmarking and suggest new features.
      </p>
      <h3>Self Management</h3>
      <p>
        Manage work using Jira, creating backlog, setup goals, sprints,
        milestones, create documentation/wiki for application, API or
        development process Learn new technologies, apply them in personal
        projects. Update old project code to new technology (Codeingiter to
        Laravel, updating packages)
      </p>
      <h3>Backend</h3>
      <p>
        Create, maintain and schedule API data connections, with automated
        updating services, Setup LAMP servers on cloud hosting services, virtual
        hosts, connect via ssh authentication or ftp, manage Linux, auto deploy
        from github repositories, setup local Linux servers. (DigitalOcean,
        Netlify). Write clean code with comments, use Pull Requests to keep
        repository clean and secure by using SOLID principles. Write tests for
        new features.
      </p>
      <h3>Frontend</h3>
      <p>
        Create a clear and logical fully responsive frontend using vanilla
        CSS/HTML/JavaScript/jQuery or use templates, Bootstrap, and frameworks
        like Vue.js and other SFC. Create fully responsive, simple browser
        applications for mobile devices, or special content for extreme screen
        sizes, interactive screens. Understand CSS grid and flex layout
        concepts. Working with Php template systems like smarty, twig. Write
        frontend applications for any API data.
      </p>
      <h3>Image manipulation</h3>
      <p>
        Good skills using Gimp, Photoshop, can do simple converting, editing
        tasks.
      </p>
      <h3>Marketing</h3>
      <p>
        Work with analytics data, understand marketing tools, conversions, SEO,
        GA4, cookies, GDPR, privacy policies. ...and so much more.
      </p>
    </div>
    <hr />
    <h2 class="title">OOO hours</h2>

    <p>
      I do indoor climbing, playing music, swimming, cooking. I often spend
      hours on video tutorials or tech podcasts. I love the outdoors and the
      sunshine, I love to travel or just hike in the UK. I like to take photos,
      which Google likes (like this one) so I've got a Local Guide badge.<br />
    </p>

    <div class="">
      <img
        src="images/photo.jpg"
        alt="landscape at Furzton lake"
        style="max-width: 100%"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { loadProjects } from "@/services/projects.js";

const jobs = ref([]);

onMounted(async () => {
  jobs.value = await loadProjects();
});
</script>

<style scoped>
p,
.project-link {
  color: var(--five);
}
.projectswrapper {
  margin: auto;
}

.jobblock {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.jobblock .blockimage {
  flex: 1;
}
.jobblock .blocktext {
  flex: 3;
}
.jobblock--left .blockimage {
  order: -1;
}
@media (max-width: 1028px) {
  .blockimage {
    text-align: center;
  }
}
@media (max-width: 768px) {
  .jobblock {
    flex-direction: column;
  }
  .jobblock .blockimage {
    order: -1;
  }
}
.block {
  padding: 10px;
}
.blockimage {
  text-align: right;
}
.br-top {
  font-size: 45px;
  font-weight: 400;
  color: var(--three);
  font-family: "Roboto Condensed", sans-serif;
  padding-block: 30px;
  line-height: 3rem;
}
.stack img {
  padding: 5px;
}
.br-img {
  width: 350px;
  height: 350px;
  margin: auto;
}
.br-img img {
  box-sizing: border-box;
  border-radius: 50px;
}
hr {
  border: 1px dashed var(--two);
}
</style>
