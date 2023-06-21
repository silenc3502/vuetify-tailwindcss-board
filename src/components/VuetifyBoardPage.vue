<template lang="ts">
  <v-container>
    <v-data-table v-model:items-per-page="itemsPerPage"
                  :headers="headerTitle"
                  :items="desserts"
                  class="elevation-1"
                  item-value="name">
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
//import 'vuetify/dist/vuetify.min.css'
import { VDataTable } from 'vuetify/labs/VDataTable'

export default {
  components: {
    VDataTable,
  },
  data () {
    return {
      itemsPerPage: 5,
      headerTitle: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Calories', align: 'end', key: 'calories' },
        { title: 'Fat (g)', align: 'end', key: 'fat' },
        { title: 'Carbs (g)', align: 'end', key: 'carbs' },
        { title: 'Protein (g)', align: 'end', key: 'protein' },
        { title: 'Iron (%)', align: 'end', key: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0',
        },
      ],
      selectedItems: [],
    }
  },
  methods: {
    clickToggle () {
      alert('토글')
    },
    signUp () {
      alert('회원 가입')
    },
  }
}
</script>

<style scoped lang="scss">
</style>