<template>
  <article>
    <v-carousel interval="5000" hide-delimiters hide-controls dark>
      <v-carousel-item  v-for="(item, i) in pics" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </article>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      pics: [
        {
          src: 'https://pre00.deviantart.net/9fc3/th/pre/f/2014/260/c/5/godzilla_wallpaper_by_franky4fingersx2-d7zhjfi.jpg'
        },
      // {
      //   src: 'https://i.imgur.com/mypQVKr.jpg'
      // },
        {
          src: 'https://assets.papodehomem.com.br/2016/11/01/15/52/50/07f91723-f52e-4503-ae62-795156ef360c/akira-10.jpg'
        },
      // {
      //   src: 'http://senpuu.com.br/wp-content/uploads/2013/07/Tetsuo-1.jpg'
      // },
        {
          src: 'https://i.ytimg.com/vi/YZ__9f4P3ro/maxresdefault.jpg'
        // https://i.imgur.com/L5SiK3y.png'
        },
        {
          src: 'https://i.imgur.com/xg48nla.jpg'
        },
      ]
    }
  }
}
</script>

<style>
img {
  min-width: 100%;
  max-height: 100%;
  object-fit: fill;
}
</style>
