<template>
<div class="bg-img" style="opacity:.9">
<div class="col">
  <q-layout>
    <q-card class="q-pa-lg">
   <img
          src="../assets/bg_img.png"
        />
    <q-card class="fixed-center" style="min-width:500px;height:500px; opacity:9;  text-weight-bold; font-size:90; background-color: transparent;">
        <q-card-section>
            <strong><b><q-input label="Email Id" v-model="email" label-color="black" dark style="text-size:60"></q-input></b></strong>
            <strong><q-input label="Password" v-model="password" label-color="black" dark></q-input></strong><br>
            <div class="row">
              <div class="col-6" align="right">
                <q-btn to="/home" label="Submit" color="green-4" @click="persist()"></q-btn>
              </div>
            </div>
        </q-card-section>
    </q-card>
    </q-card>
    </q-layout>
</div>
</div>
</template>
<script>
import { LocalStorage } from 'quasar'
export default
{
  data () {
    return {
      email: '',
      password: ''
      // framework: {
      //   plugins: [
      //     'LocalStorage'
      //   ]
      // }
    }
  },
  mounted () {
    this.setup()
    if (localStorage.email) {
      this.email = localStorage.email
    }
    if (localStorage.password) {
      this.password = localStorage.password
    }
  },
  methods: {
    persist () {
      localStorage.email = this.email
      localStorage.password = this.password
      // console.log('email------>', this.has('email'))
      // LocalStorage.set('email', this.email)
      // LocalStorage.set('password', this.password)
      console.log('password saved')
      // this.email = null
      // this.password = null
    },
    setup () {
      const item = LocalStorage.has('email')
      console.log('itenos----------->', item, LocalStorage)
      // const $q = useQuasar()
      // $q.localStorage.set(key, value)
      // const value = $q.localStorage.getItem(key)
      // console.log('key val-=----->', value)
    }
  }
}
</script>
