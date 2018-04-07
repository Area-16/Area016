<template>
  <div id="contact">
    <v-container fluid>
        <h2 class="display-1 padded"><b>Our location</b></h2>
      <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59434.2179948562!2d-48.53109225079776!3d-21.40412923322414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9397251c5addf%3A0x42dfab50d8b2929e!2sTaquaritinga%2C+SP%2C+15900-000!5e0!3m2!1spt-BR!2sbr!4v1521840234577" width="100%" height="450px" frameborder="0" style="border:1px" allowfullscreen></iframe>
        </v-flex>
      </v-layout>
      <h2 class="display-1 padded"><b>Contact us</b></h2>
      <div v-if="completed" :class="result">
        <h1>{{ feedback }}</h1>
      </div>
      <!-- <v-form netlify>  -->
      <v-layout row wrap align-center>
      <v-flex xs12 align-center align-content-center>
        <v-divider></v-divider>
        <v-text-field
          id="name"
          v-model="name"
          @click="check"
          placeholder="Tell us your name"
          single-line
          clearable
          full-width
          hide-details>
        </v-text-field>
        <v-divider></v-divider>
        <v-text-field
          id="email"
          v-model="email"
          @click="check"
          placeholder="Tell us your main e-mail"
          single-line
          clearable
          full-width
          hide-details>
        </v-text-field>
        <v-divider></v-divider>
        <v-text-field
          id="subject"
          v-model="subject"
          @click="check"
          placeholder="What subject your message is about?"
          single-line
          max="75"
          clearable
          full-width
          hide-details>
        </v-text-field>
        <v-divider></v-divider>
        <v-text-field
          id="message"
          v-model="message"
          @click="check"
          placeholder="Finally, here you tell us everything!"
          counter
          clearable
          max="200"
          full-width
          multi-line
          hide-details>
        </v-text-field>
        <v-divider></v-divider>
      </v-flex>
        <v-btn block large color="success" @click="submit"><b>Send</b></v-btn>
    <!-- </v-form> -->
    </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'contact',
  methods: {
    submit: function (e) {
      const { email, name, subject, message } = this
      this.completed = true
      this.feedback = 'Sending your message...'

      e.preventDefault();
      if (!this.email || !this.name || !this.subject || !this.message) {
        console.log('Empty fields')
        return
      }
      axios.post(this.apiUrl + '/contact', { email, name, subject, message })
        .then((data) => {
          // console.log(data)
          this.feedback = 'Your message was sent successfuly!'
          this.result = 'succeeded'
        })
        .catch((err) => {
          this.feedback = 'An error ocurred, try again later!'
          this.result = 'failed'
        })
    },
    check: function (e) {
      this.completed = false
      this.feedback = ''
      this.result = ''
    }
  },
  data () {
    return {
      apiUrl: 'https://area016.herokuapp.com/api',
      result: '',
      completed: false,
      feedback: '',
      email: '',
      name: '',
      subject: '',
      message: '',
    }
  }
}
</script>

<style scoped>
.padded {
  padding-top: 30px;
  padding-bottom: 40px;
}

div.input-group__input {
  margin: 5px;
  border: 1px solid black;
}

hr {
  background-color: black;
}

button, iframe {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button {
  margin: 20px;
}

.failed {
  color: red;
}

.succeeded {
  color: green;
}
</style>
