<template>
<div class="q-pa-md">
<q-layout view="lHh Lpr lff"  class="shadow-2 rounded-borders">
    <q-header elevated class="bg-blue-5 text-white" height-hint="64">
        <q-toolbar>
            <q-btn flat dense round @click="leftDrawerOpen!=leftDrawerOpen" icon="menu"/>
            <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
    </q-header>
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above :width="200" :breakpoint="500" bordered class="bg-blue-4"> -->
        <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <!-- <q-item clickable :active="menuItem.label == 'Menu'" v-ripple> -->
                <q-item style="margin: 0 auto" :to="menuItem.to" clickable @click="activate(menuItem)" class="GPL__drawer-item" :class="menuItem.active ? 'active' : ''">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
    </q-drawer>
    <!-- <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container> -->
</q-layout>
</div>
</template>
<script>
// import { ref } from 'vue'
const menuList = [
  {
    icon: 'inbox',
    label: 'Profile',
    to: '/profile',
    separator: false
  },
  {
    icon: 'send',
    label: 'Menu',
    separator: false,
    to: '/profile'
  }
]
export default {
//   components: {
//     profile: require("../components/Profile.vue").default
//     },
  data () {
    return {
      leftDrawerOpen: true,
      //  leftDrawerOpen: ref(false),
      menuList
    }
  }
}
</script>
