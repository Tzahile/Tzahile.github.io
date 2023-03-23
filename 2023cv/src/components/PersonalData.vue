<template>
  <v-container @mouseover="hover = undefined">
    <v-row v-for="subject in subjects" class="pb-4" no-gutters>
      <v-col class="text-primary text-capitalize text-h6" cols="12">
        {{ subject.title }}
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters class="topic-row" v-for="element in subject.content">
          <v-col @mouseover.stop="hover = element.title" cols="3" class="mt-3  text-xl-h6 font-weight-bold">
            <!-- :key="element.title" -->
            <v-icon v-if="element.icon" :color="hover === element.title ? element.icon.color : ''" small
              class="mb-1 pr-2">
              {{ element.icon.shape }}
            </v-icon>
            {{ element.title }}
          </v-col>
          <v-col @mouseover.stop="hover = element.title" cols="8" class="mt-3 text-xl-h6">
            <!-- :key="'el' + index" -->
            <v-row no-gutters>
              <v-col cols="12" class="text-body-1">
                {{ element.value }}
              </v-col>
              <v-col v-if="element.subvalue" class="font-weight-light" v-html="element.subvalue">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Subject = {
  title: string;
  content: {
    icon?: {
      shape: string;
      color: string;
    };
    title: string;
    value: string;
    subvalue?: string;
  }[];
}

const hover = ref();
const subjects = ref<Subject[]>([
  {
    title: "Personal Information",
    content: [
      {
        icon: {
          shape: "mdi-account-outline",
          color: "#ffc088",
        },
        title: "Full Name",
        value: "Izhak Lehmann",
      },
      {
        icon: {
          shape: "mdi-map-marker-radius-outline",
          color: "green",
        },
        title: "Location",
        value: "Tel Aviv, Israel",
      },
      {
        icon: {
          shape: "mdi-cake-variant-outline",
          color: "orange",
        },
        title: "Age",
        value: "29",
      },
      {
        icon: {
          shape: "mdi-email-outline",
          color: "#D44638",
        },
        title: "E-mail",
        value: "gotenks33@gmail.com",
      },
      {
        icon: {
          shape: "mdi-face-man-outline",
          color: "yellow-darken-2",
        },
        title: "Profile",
        value: `An avid learner with strong problem-solving skills, attention to detail and high sense of responsibility`,
        subvalue: `Seeking a software-engineer position in a fast-growing company where I can contribute and make an impact`,
      },
    ],
  },
  {
    title: "Experience",
    content: [
      {
        title: "Jul '21 - Present",
        value: "Noname Security",
        subvalue: `
              <b class="text-body-2">Fullstack Engineer</b>
              <br />
              <ul>
                <li>
                  Development of a API-security application.<br />
                  Giving wide range of options to allow users to manage risks, track changes, and remediate issues.   <br />
                  Full ownership on features from end to end.<br />
                  Leading tasks that are cross teams.<br />
                  - Frontend: <i>Vue3 (vite) written in TS</i><br />
                  - Backend: <i>Nodejs (Express, Nest) written in TS</i><br />
                  - DB: <i>PostgreSQL, Hasura</i><br />
                </li>
              </ul>
              `,
      },
      {
        title: "Feb '21 - Jul '21",
        value: "Qualcomm",
        subvalue: `
              <b class="text-body-2">Research & Development Software Engineer</b>
              <br />
              <ul>
                <li>
                  Development of an application that enables continuous integration of FW code <br />
                  - Frontend: <i>Vue.js</i><br/>
                </li>
              </ul>
              `,
      },
      {
        title: "April '18 - Feb '21",
        value: "Elbit Systems - Land C4I and Cyber",
        subvalue: `
              <b class="text-body-2">Fullstack Software Engineer</b>
              <br />
              <ul>
                <li>
                  Design and implementation of a client-server web application for a generic solution to support development of radio devices<br />
                  - Frontend: <i>Vue.js</i><br/>
                  - Backend: <i>C#</i>
                </li>
                <li>
                  Development of a generic raw-data analysis distributed infrastructure solution in a form of a web application, designed for handling Big Data with easily configurable analysis environment<br />
                  - Frontend: <i>Vue.js</i><br /> 
                  - Main backend server: <i>Node.js</i><br/>
                  - Analysing micro-service: <i>Python</i><br/>
                </li>
                <li>
                  Participation in Hackathons dedicated to actual problems of society<br/>
                  - Covid-19, Mobile application for measuring user's heartbeat rate<br/>
                  - Python-based software for mapping the inner structure of a building from distance
                </li>
              </ul>
              `,
      },
    ],
  },
  {
    title: "Education",
    content: [
      {
        title: "2015 - 2019",
        value:
          "Tel-Aviv University, Bachelor degree in Electrical Engineering",
        subvalue: "Computers, Energy, Signal Processing",
      },
      {
        title: "2005 - 2011",
        value: "Dror Experimental Educational Campus",
        subvalue: "Physics, Computers",
      },
    ],
  },
  {
    title: "Skills",
    content: [
      {
        icon: {
          shape: "mdi-web",
          color: "blue-darken-3",
        },
        title: "Frontend",
        value: "Vue3, Vue2",
        subvalue: "Vite, Sass, Webpack",
      },
      {
        icon: {
          shape: "mdi-server",
          color: "red-lighten-2",
        },
        title: "Backend",
        value: "Nodejs (JS, TS), Python",
        subvalue: "Express, Nest",
      },
      {
        icon: {
          shape: "mdi-test-tube",
          color: "red-accent-3",
        },
        title: "TDD tools",
        value: "Cypress, Jest",
      },
      {
        icon: {
          shape: "mdi-graph-outline",
          color: "purple-accent-3",
        },
        title: "APIs",
        value: "REST, GraphQL",
      },
      {
        icon: {
          shape: "mdi-database",
          color: "yellow-darken-3",
        },
        title: "Database",
        value: "PostgreSQL, Hasura, MongoDB",
      },
      {
        icon: {
          shape: "mdi-cloud-outline",
          color: "grey-darken-3",
        },
        title: "Cloud",
        value: "AWS",
        subvalue: "EC2"
      },
      // {
      //   icon: {
      //     shape: "mdi-google-circles-extended",
      //     color: "purple-lighten-2",
      //   },
      //   title: "Message Queuing",
      //   value: "Kafka",
      // },
      {
        icon: {
          shape: "mdi-docker",
          color: "blue-lighten-2",
        },
        title: "DevOps",
        value: "Docker, Jenkins",
      },
      {
        icon: {
          shape: "mdi-folder-network",
          color: "amber-lighten-2",
        },
        title: "Workflow",
        value: "Git, Jira",
      },
      {
        icon: {
          shape: "mdi-microsoft-visual-studio-code",
          color: "#1f9cf0",
        },
        title: "IDEs",
        value: "VSCode",
      },
    ],
  },
  {
    title: "Services",
    content: [
      {
        title: "2012 - 2015",
        value: "IDF Navy",
        // subvalue: "Electronic Warefare, honorably discharged",
      },
      {
        title: "2011 - 2012",
        value: "Magen David Adom",
        subvalue: "First Aider",
      },
    ],
  },
  {
    title: "Hobbies",
    content: [
      {
        icon: {
          shape: "mdi-music",
          color: "green-lighten-2",
        },
        title: "Music",
        value: "Playing the piano, singing",
      },
      {
        icon: {
          shape: "mdi-bike",
          color: "purple-darken-1",
        },
        title: "Sports",
        value: "Snowboarding, hiking, biking",
      },
      {
        icon: {
          shape: "mdi-chess-knight",
          color: "#D00020",
        },
        title: "Board Games",
        value: "Chess, Catan",
      },
      // {
      //   icon: {
      //     shape: "mdi-dog-side",
      //     color: "#000",
      //   },
      //   title: "Pet care",
      //   value: "Proud owner of a labrador",
      // },
    ],
  },
  {
    title: "Languages",
    content: [
      {
        title: "Hebrew",
        value: "Native",
      },
      {
        title: "English",
        value: "Fluent",
      },
    ],
  },
])
</script>
<style>
.topic-row {
  min-height: 62px;
}
</style>
