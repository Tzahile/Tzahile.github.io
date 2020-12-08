<template>
  <v-container @mouseover="hover = undefined">
    <v-row
      v-for="(subject, index) in subjects"
      :key="'subj' + index"
      class="pb-4"
      no-gutters
    >
      <v-col class="accent--text text-capitalize text-xl-h5 text-h6" cols="12">
        {{ subject.title }}
        <v-divider></v-divider>
      </v-col>
      <template v-for="(element, index) in subject.content">
        <v-col
          @mouseover.stop="hover = element.title"
          cols="4"
          class="mt-3 text-xl-h6 font-weight-bold"
          :key="element.title"
        >
          <v-icon
            :color="hover === element.title ? element.icon.color : ''"
            small
            class="mb-1 pr-1"
            v-if="element.icon"
          >
            {{ element.icon.shape }}
          </v-icon>
          {{ element.title }}
        </v-col>
        <v-col
          @mouseover.stop="hover = element.title"
          cols="8"
          class="mt-3 text-xl-h6"
          :key="'el' + index"
        >
          <v-row no-gutters>
            <v-col cols="12">
              {{ element.value }}
            </v-col>
            <v-col
              v-if="element.subvalue"
              class="font-weight-light"
              v-html="element.subvalue"
            >
            </v-col>
          </v-row>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { colors } from "vuetify/lib";

export default {
  data() {
    return {
      hover: undefined,
      subjects: [
        {
          title: "Personal Information",
          content: [
            {
              icon: {
                shape: "mdi-account",
                color: "#ffc088",
              },
              title: "Full Name",
              value: "Izhak Lehmann",
            },
            {
              icon: {
                shape: "mdi-map-marker-radius",
                color: "green",
              },
              title: "Location",
              value: "Tel-Aviv, Israel",
            },
            {
              icon: {
                shape: "mdi-cake-variant",
                color: "orange",
              },
              title: "Age",
              value: "27",
            },
            {
              icon: {
                shape: "mdi-gmail",
                color: "#D44638",
              },
              title: "E-mail",
              value: "Gotenks33@gmail.com",
            },
            {
              icon: {
                shape: "mdi-skype",
                color: "#00aff0",
              },
              title: "Skype",
              value: "tzahi_leh",
            },
            // {
            //   icon: {
            //     shape: "mdi-home-heart",
            //     color: colors.red.darken3,
            //   },
            //   title: "Personal Status",
            //   value: `Married`,
            // },
            {
              icon: {
                shape: "mdi-face-profile",
                color: colors.brown.darken2,
              },
              title: "Profile",
              value: `An avid learner with strong problem-solving skills, attention to detail and high sense of responsibility`,
              // subvalue: `Seeking a software-engineer position in a fast-growing company where I can contribute and make an impact`,
            },
          ],
        },
        {
          title: "Experience",
          content: [
            {
              title: "April '18 - Present",
              value: "Elbit Systems - Land C4I and Cyber",
              subvalue: `
              <b>Fullstack software engineer</b>
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
                color: colors.blue.darken3,
              },
              title: "Frontend",
              value: "Vuejs, HTML5, CSS3",
              subvalue: "Webpack, Sass, Chrome dev-tools",
            },
            {
              icon: {
                shape: "mdi-server",
                color: "red",
              },
              title: "Backend",
              value: "Nodejs (js), Python",
              subvalue: "Deno (ts), C#",
            },
            {
              icon: {
                shape: "mdi-database",
                color: colors.yellow.darken3,
              },
              title: "Database",
              value: "PostgreSQL, MySQL",
            },
            {
              icon: {
                shape: "mdi-google-circles-extended",
                color: colors.purple.lighten2,
              },
              title: "Message Queuing",
              value: "Kafka",
            },
            {
              icon: {
                shape: "mdi-docker",
                color: colors.blue.lighten2,
              },
              title: "DevOps",
              value: "Docker, Containers",
            },
            {
              icon: {
                shape: "mdi-folder-network",
                color: colors.blueGrey.lighten1,
              },
              title: "Version Control and workflow",
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
                color: "#000",
              },
              title: "Music",
              value: "Playing the piano, singing",
            },
            {
              icon: {
                shape: "mdi-bike",
                color: colors.purple.darken1,
              },
              title: "Sports",
              value: "Running, biking, swimming",
            },
            {
              icon: {
                shape: "mdi-chess-knight",
                color: "#D00020",
              },
              title: "Strategy Board Games",
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
      ],
    };
  },
};
</script>

<style lang="scss"></style>
