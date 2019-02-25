import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import History from "@/views/History.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/search",
            name: "search",
            component: Search
        },
        {
            path: "/history",
            name: "history",
            component: History
        },
        {
            path: "/history/:id",
            name: "historyid",
            component: Search
        }
    ]
});
