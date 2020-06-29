<template>
  <v-container>
    <v-row
      v-for="(subject, index) in subjects"
      :key="'subj' + index"
      class="pb-4"
      no-gutters
    >
      <v-col class="teal--text text-capitalize text-xl-h5 text-h6" cols="12">
        {{ subject.title }}
        <v-divider></v-divider>
      </v-col>
      <template v-for="(element, index) in subject.content">
        <v-col
          cols="4"
          class="mt-3 text-xl-h6 font-weight-bold"
          :key="element.title"
        >
          <v-icon small class="mb-1 pr-1" v-if="element.icon">
            {{ element.icon }}
          </v-icon>
          {{ element.title }}
        </v-col>
        <v-col cols="8" class="mt-3 text-xl-h6" :key="'el' + index">
          <v-row no-gutters>
            <v-col cols="12">
              {{ element.value }}
            </v-col>
            <v-col v-if="element.subvalue" class="font-weight-light">
              {{ element.subvalue }}
            </v-col>
          </v-row>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      subjects: [
        {
          title: "Personal Information",
          content: [
            {
              icon: "mdi-account",
              title: "Full Name",
              value: "Izhak Lehmann",
            },
            {
              icon: "mdi-map-marker-radius",
              title: "Address",
              value: "Harakefet 46, Pardesia",
            },
            {
              icon: "mdi-cake-variant",
              title: "Date of Birth",
              value: "15.02.1993",
            },
            {
              icon: "mdi-gmail",
              title: "E-mail",
              value: "Gotenks33@gmail.com",
            },
            {
              icon: "mdi-face-profile",
              title: "Profile",
              value: `Self-learner with strong problem-solving skills, attention to detail and high sense of responsibility`,
              subvalue: `Seeking for a position of a software engineer in a fast-growing company`,
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
          title: "Experience",
          content: [
            {
              title: "May '18 - Present",
              value: "Elbit Systems - Land C4I and Cyber",
              subvalue: "Fullstack software engineer",
            },
          ],
        },
        {
          title: "Skills",
          content: [
            {
              icon: "mdi-web",
              title: "Frontend",
              value: "Javascript, HTML5, CSS3",
              subvalue:
                "Vue, Webpack, Babel, Bootstrap, JQuery, Sass, Chrome dev-tools",
            },
            {
              icon: "mdi-server",
              title: "Backend",
              value: "Javascript, C, C#, Python",
              subvalue: "Nodejs, .Net",
            },
            {
              icon: "mdi-linux",
              title: "Operation systems",
              value: "Linux",
              subvalue: "Ubuntu",
            },
            {
              icon: "mdi-folder-network",
              title: "Version Control and workflow",
              value: "Git, SVN, Jira",
              subvalue: "GitHub, GitLab, BitBucket, Trello",
            },
            {
              icon: "mdi-docker",
              title: "DevOps",
              value: "Docker, Kubernetes",
              subvalue: "Azure",
            },
          ],
        },
        {
          title: "Services",
          content: [
            {
              title: "2012 - 2015",
              value: "IDF Navy",
              subvalue: "Electronic Warefare, honorably discharged",
            },
            {
              title: "2011 - 2012",
              value: "Magen David Adom",
              subvalue: "First Aider, finished the course with honors",
            },
          ],
        },
        {
          title: "Hobbies",
          content: [
            {
              icon: "mdi-music",
              title: "Music",
              value: "Playing the piano, singing",
            },
            {
              icon: "mdi-bike",
              title: "Sports",
              value: "Running, biking, swimming",
            },
            {
              icon: "mdi-chess-knight",
              title: "Board Games",
              value: "Chess, Catan",
            },
            {
              icon: "mdi-dog-side",
              title: "Pet care",
              value: "Proud owner of a labrador",
            },
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
