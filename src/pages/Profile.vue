<template>
<div class="fixed-center text-h6">Edit Profile</div>
<q-card class="fixed-center" style="width:400px;height:550px;">
    <div class="q-ml-lg text-h6">Edit Profile</div>
    <q-card-section>
        <div class="row q-ma-md" align="center">
            <div class="profile-img col-md-4 col-sm-12 col-sm-12 col-xs-12 q-mt-md"
            align="center">
            <q-avatar rounded size="130px">
                <img :src="img" />
            </q-avatar>
        </div></div>
        <div class="row" align="center">
            <div class="col">
                <q-input label="Name" v-model="name"></q-input>
            </div></div>
            <div class="row" align="center">
                <div class="col">
                <q-input label="Email" v-model="email"></q-input>
            </div></div>
            <div class="row" align="center">
            <div class="col">
                <q-input label="Phone" v-model="phone"></q-input>
            </div></div>
            <div class="row" align="center">
            <div class="col">
                <q-input label="Address" v-model="address"></q-input>
            </div></div>
            <div class="row" align="center">
            <div class="col">
                <q-input label="Pincode" v-model="pincode"></q-input>
            </div></div>
    </q-card-section>
</q-card>
</template>
<script>
export default {
  data () {
    return {
      img: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      pincode: ''
    }
  }
}
</script>
