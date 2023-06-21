<template>
  <div style="height: 64px">
      <v-app>
        <VuetifyBoardPage/>
      </v-app>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import VuetifyBoardPage from './components/VuetifyBoardPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    VuetifyBoardPage
  },
})

</script>