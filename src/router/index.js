import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "@/pages/Home"
import Animation from "@/pages/Animation"
import Bangumi from "@/pages/Bangumi"
import Cinema from "@/pages/Cinema"
import Daily from "@/pages/Daily"
import Dance from "@/pages/Dance"
import Entertainment from "@/pages/Entertainment"
import Fashion from "@/pages/Fashion"
import FilmTV from "@/pages/FilmTV"
import Game from "@/pages/Game"
import Guochuang from "@/pages/Guochuang"
import Guichu from "@/pages/Guichu"
import Knowledge from "@/pages/Knowledge"
import Music from "@/pages/Music"
import News from "@/pages/News"
import Tech from "@/pages/Tech"


export default new VueRouter(
    {
        routes: [
            // 重定向
            {
                path: "*",
                redirect: "/home",
            },
            //注册路由
            {
                path: "/home",
                component: Home,
            },
            {
                path: "/Animation",
                component: Animation,
            },
            {
                path: "/Bangumi",
                component: Bangumi,
            },
            {
                path: "/Cinema",
                component: Cinema,
            },
            {
                path: "/Daily",
                component: Daily,
            },
            {
                path: "/Dance",
                component: Dance,
            },
            {
                path: "/Entertainment",
                component: Entertainment,
            },
            {
                path: "/Fashion",
                component: Fashion,
            },
            {
                path: "/FilmTV",
                component: FilmTV,
            },
            {
                path: "/Game",
                component: Game,
            },
            {
                path: "/Guichu",
                component: Guichu,
            },
            {
                path: "/Guochuang",
                component: Guochuang,
            },
            {
                path: "/Knowledge",
                component: Knowledge,
            },
            {
                path: "/Music",
                component: Music,
            },
            {
                path: "/News",
                component: News,
            },
            {
                path: "/Tech",
                component: Tech,
            },
        ],


    }
)