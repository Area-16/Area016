<template>
  <v-app>
    <header id="menu">
      <div class="hidden-sm-and-up">
      <v-navigation-drawer v-model="sidebar" app>
        <v-toolbar>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                {{ title }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
        <v-list-tile exact v-for="(page, index) of menu" :key="index" :to="page.route">
          <v-list-tile-action >
            <v-icon>{{page.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            <v-list-tile-title>{{page.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </v-navigation-drawer>
      </div>
      <v-toolbar color="grey lighten-4 black--text">
        <v-toolbar-title>
          <v-btn :to="{ name: 'Index' }" id="brand-name" color="red"> <v-icon color="black">fas fa-terminal</v-icon><b> {{ title }} </b></v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" justify-space-around>
          <v-btn exact flat raised v-for="(page, index) of menu" :key="index" :to="page.route"><v-icon :color="page.color">{{ page.icon }}</v-icon></v-btn>
        </v-toolbar-items>
        <span class="hidden-sm-and-up">
          <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
        </span>
      </v-toolbar>
    </header>
    <section id="content">
      <v-container>
        <router-view></router-view>
      </v-container>
    </section>
    <v-footer id="footer" dark height="auto">
      <v-card tile
      class="grey lighten-2 black--text text-xs-center">
      <v-card-text>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          icon
          :href="icon.link"
          target=“_blank”
          class="mx-3 black--text">
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="black--text pt-0">
        The best kind of friends are those that enter your life, and help you to see a blue sky where before there was a cloudy sky. They are the ones that have so much faith in you that you start having faith in yourself.  These are the friends we should be grateful for.
        <v-divider></v-divider>
        — <strong>DougTQ</strong>
      </v-card-text>
      <v-card-text class="black--text">
        &copy;2018 — <strong>Area016</strong>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Area016',
      sidebar: false,
      icons: [
        {
          icon: 'fab fa-github',
          link: 'https://github.com/dougtq'
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/dougtq'
        },
        {
          icon: 'fab fa-npm',
          link: 'https://npmjs.com/~dougtq'
        }
      ],
      menu: [
        {
          icon: 'fas fa-university',
          name: 'Main',
          route: { 'name': 'Index' },
          color: 'green'
        },
        {
          icon: 'far fa-newspaper',
          name: 'News',
          route: { name: 'News' },
          color: 'blue'
        },
        {
          icon: 'far fa-id-badge',
          name: 'About',
          route: { name: 'About' },
          color: 'orange'
        },
        {
          icon: 'far fa-map',
          name: 'Contact',
          route: { name: 'Findus' },
          color: 'teal'
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:200');
@import url('https://fonts.googleapis.com/css?family=Merriweather');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  padding: 10px;
}
.btn__content {
  color: black;
}
#content {
  font-family: 'Raleway', sans-serif;
}
#menu, #footer {
  font-family: 'Merriweather', serif;
}
.hidden-sm-and-down a {
  margin-right: 5px;
}
</style>
