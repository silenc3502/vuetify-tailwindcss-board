<template>
  <v-container>
    <v-app>
      <router-view/>
    </v-app>
  </v-container>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import VuetifyBoardList from './page/VuetifyBoardList.vue';

export default defineComponent({
  name: 'App',
  components: {
    VuetifyBoardList
  },
})

</script>