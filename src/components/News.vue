<template>
  <article>
    <hr>
    <v-jumbotron :src="jumbotron">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3"><b>Welcome to Area016</b></h3>
            <span class="subheading"><b>Here's to never leaving</b></span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3"><b>Check out our latest drops below!</b></div>
            <v-btn :to="{ name: 'About' }" exact large color="teal" class="mx-0"><b>Read our history</b></v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-divider></v-divider>
    <div v-if="news && news.length">
      <div class="newsfeed" :key="i" v-for="(post, i) of news">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1>
          <v-card :to="post.link">
            <v-card-media :src="post.src || 'https://i.imgur.com/Wu85tce.jpg'"  height="400px"></v-card-media>
            <v-divider></v-divider>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0"><b>{{ post.title }}</b></h3>
                <div>{{ post.description || post.body }}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      </div>
    </div>
    <!-- <div class="text-xs-center">
      <v-pagination :length="news.length/5" circle total-visible prev-icon="fas fa-angle-left" next-icon="fas fa-angle-right" v-model="news">
      </v-pagination>
    </div> -->
    <!-- <v-data-iterator
      content-tag="v-layout"
      row
      wrap
      :items="news"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination">
      <v-flex
        slot="item"
        slot-scope=""
        xs12
        sm6
        md4
        lg3>
      </v-flex>
    </v-data-iterator> -->
  </article>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      jumbotron: 'https://pre00.deviantart.net/a0b0/th/pre/f/2015/071/2/8/anime_background___landscape_final_vers__by_jikanpulvis-d8lgiyb.jpg',
      news:
      [{
        title: 'The Wolf of Wall Street',
        src: 'https://i.imgur.com/GWw5umm.jpg'
      },
      {
        title: 'Akira retro 18',
        description: 'Akira alternative poster!',
        link: '/post/akira18',
        src: 'https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/mumford_akira.jpg'
      },
      {
        title: 'Developer Lifestyle',
        link: '/about',
        src: 'https://i.imgur.com/TFMxitb.jpg'
      },
      {
        title: 'Cthulhu',
        link: '',
        src: 'https://i.imgur.com/MvZVeVe.jpg'
      },
      {
        title: 'Beautiful World',
        src: 'https://images5.alphacoders.com/587/thumb-350-587772.jpg'
      }
      ]
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(resp => {
        this.news = [ ...this.news ] //, resp.data
      })
      .catch(err => {
        this.errors = [ ...this.err ]
      })
  }
}
</script>

<style scoped>
.newsfeed {
  padding: 15px;
}
div.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card__media__background {
  background-size: 100%;
}
.jumbotron__image {
  background-size: 100%;
}
</style>
