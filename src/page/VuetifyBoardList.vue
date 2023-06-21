<template lang="ts">
  <v-container>
    <h2>안녕 Vue3 TypeScript 기반 Vuetify Board App이야</h2>
    <div style="text-align: left; margin: 15px;">
      <router-link :to="{ name: 'VuetifyBoardRegister' }">
      게시물 작성
      </router-link>
    </div>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headerTitle"
      :items="boards"
      item-value="name"
      class="elevation-1"
      @click:row="readRow"
      item-key="boardId">
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import { RouterLink } from 'vue-router'

const boardModule = 'boardModule'

export default {
    components: { RouterLink },
    computed: {
        ...mapState(boardModule, ['boards']),
    },
    mounted () {
        this.requestBoardListToSpring()
    },
    methods: {
        ...mapActions(
            boardModule, ['requestBoardListToSpring']
        ),
        readRow (e, { item }) {
            const selectedRowBoardId = item.selectable.boardId
            alert('게시물 읽기: ' + JSON.stringify(item.selectable.boardId))

            this.$router.push({
                name: 'VuetifyBoardRead',
                params: { boardId: selectedRowBoardId.toString() }
            })
        }
    },
    data () {
        return {
            itemsPerPage: 5,
            headerTitle: [
                {
                    title: 'No',
                    align: 'start',
                    sortable: false,
                    key: 'boardId',
                },
                { title: '제목', align: 'end', key: 'title' },
                { title: '작성자', align: 'end', key: 'writer' },
                { title: '작성일자', align: 'end', key: 'createDate' },
            ],
        }
    }
}
</script>

<style scoped lang="scss">
</style>