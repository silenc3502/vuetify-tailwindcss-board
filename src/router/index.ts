import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import BoardRegisterPage from '../domain/board/page/BoardRegisterPage.vue';
import BoardReadPage from '../domain/board/page/BoardReadPage.vue';
import BoardModifyPage from '../domain/board/page/BoardModifyPage.vue';
import VuetifyBoardList from "../page/VuetifyBoardList.vue";
import VuetifyBoardRegister from "../page/VuetifyBoardRegister.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'VuetifyBoardList',
        component: VuetifyBoardList
    },
    {
        path: '/vuetify-board-register',
        name: 'VuetifyBoardRegister',
        component: VuetifyBoardRegister,
    },
    // {
    //     path: '/vuetify-board-read/:boardId',
    //     name: 'VuetifyBoardRead',
    //     components: { default: VuetifyBoardRead },
    //     props: { default: true },
    // },
    // {
    //     path: '/vuetify-board-modify/:boardId',
    //     name: 'VuetifyBoardModify',
    //     components: { default: VuetifyBoardModify },
    //     props: { default: true },
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
