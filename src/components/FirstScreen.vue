<template>
    <div class="home-first-screen warp">
        <div class="first-screen">
            <div class="shower-warp">
                <Lunbo :lunboData="lunboData"></Lunbo>
            </div>
            <div class="rcmd-box-warp">
                <div class="rcmd-box">
                    <div
                        class="video-card rcmd-card"
                        v-for="item in recomList.list"
                        :key="item.id"
                        :style="{ backgroundColor: `${item.img}` }"
                    >
                        <div class="rcmd-info">
                            <p>
                                {{ item.title }}
                            </p>
                            <div class="up-info">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-UPzhu"></use>
                                </svg>
                                <p>{{ item.up }}</p>
                            </div>
                            <p class="play">{{ item.play }}播放</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="change-btn" @click="getRecomNew">
                <i class="fa-solid fa-rotate"></i>
                <span>换一换</span>
            </div>
        </div>
        <div class="up-report">
            <div class="left-report-box">
                <div class="extension-title">
                    <div class="content-title">
                        <div style="width: 36px; height: 36px">
                            <img src="../assets/extension/ex.png" alt="" />
                        </div>
                        <p><slot name="title-name"></slot></p>
                    </div>
                    <div v-show="$route.path == '/home'">
                        <a href="" class="active-blue">
                            <img
                                src="../assets/extension/icon-hot.png"
                                alt=""
                                style="width: 16px; height: 16px"
                            />
                            <span>为什么中国狮子都爱烫头？</span>
                        </a>
                    </div>
                </div>
                <div class="extension-box">
                    <div class="ex-video-card">
                        <div class="pic-card">
                            <a
                                href="https://www.bilibili.com/video/BV1Zd4y1d7gH"
                                target="_blank"
                            >
                                <img
                                    src="../assets/extension/ex1.webp"
                                    alt=""
                                />
                                <p>人最擅长的是羡慕，最不擅长的是谦虚</p>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <a href="" class="ex-up-info">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-UPzhu"></use>
                            </svg>
                            陈林陈林陈林
                        </a>
                    </div>
                    <div class="ex-video-card">
                        <div class="pic-card">
                            <a
                                href="https://www.bilibili.com/video/BV1Zd4y1d7gH"
                                target="_blank"
                            >
                                <img src="../assets/extension/ex2.jpg" alt="" />
                                <p>
                                    【沙一汀EL】Hello大家好，今天看我如何闯关毫不费力！
                                </p>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <a href="" class="ex-up-info">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-UPzhu"></use>
                            </svg>
                            沙一丁
                        </a>
                    </div>
                    <div class="ex-video-card">
                        <div class="pic-card">
                            <a
                                href="https://www.bilibili.com/video/BV1Zd4y1d7gH"
                                target="_blank"
                            >
                                <img src="../assets/extension/ex6.jpg" alt="" />
                                <p>你的体育老师是这样的吗？</p>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <a href="" class="ex-up-info">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-UPzhu"></use>
                            </svg>
                            徒手健身-可乐
                        </a>
                    </div>
                    <div class="ex-video-card">
                        <div class="pic-card">
                            <a
                                href="https://www.bilibili.com/video/BV1Zd4y1d7gH"
                                target="_blank"
                            >
                                <img src="../assets/extension/ex5.jpg" alt="" />
                                <p>
                                    在清华大学迎新晚会跳BlackPink新歌是什么体验
                                </p>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <a href="" class="ex-up-info">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-UPzhu"></use>
                            </svg>
                            仙贝Mina
                        </a>
                    </div>
                    <div class="ex-video-card">
                        <div class="pic-card">
                            <a
                                href="https://www.bilibili.com/video/BV1Zd4y1d7gH"
                                target="_blank"
                            >
                                <img src="../assets/extension/ex4.jpg" alt="" />
                                <p>
                                    大学军训操场惊现迈克尔杰克逊！现场燃炸啦！！！
                                </p>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <a href="" class="ex-up-info">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-UPzhu"></use>
                            </svg>
                            迈克尔杰克逊帽子
                        </a>
                    </div>
                    <div class="ex-video-card">
                        <div class="pic-card">
                            <a
                                href="https://www.bilibili.com/video/BV1Zd4y1d7gH"
                                target="_blank"
                            >
                                <img src="../assets/extension/ex3.jpg" alt="" />
                                <p>大家好，我是郭柯宇，也是苏蓉，我来B站啦！</p>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <a href="" class="ex-up-info">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-UPzhu"></use>
                            </svg>
                            演员郭柯宇
                        </a>
                    </div>
                </div>
            </div>
            <div class="right-report-box">
                <div class="online" v-show="$route.path == '/home'">
                    <a
                        href="https://www.bilibili.com/video/online.html"
                        class="active-blue"
                        >观看列表</a
                    >
                </div>
                <div
                    v-show="$route.path != '/home'"
                    class="content-title extension-title"
                    style="font-size"
                >
                    <p>近期热点</p>
                </div>
                <a href="" class="ex-air">
                    <img src="../assets/extension/ex-air.webp" alt="" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Lunbo from "@/components/Lunbo.vue";
import axios from "axios";
export default {
    name: "FirstScreen",
    components: {
        Lunbo,
    },
    props: ["lunboData"],
    data() {
        return {
            recomList: {},
        };
    },
    methods: {
        getRecomNew() {
            async function get() {
                try {
                    return await axios.get(
                        "http://localhost:3000/gApi/recom/change"
                    );
                } catch (err) {
                    console.log(err);
                }
            }
            get().then(
                (value) => {
                    this.$set(this.recomList, "list", value.data);
                },
                (reason) => {
                    console.log(reason);
                }
            );
        },
    },
    mounted() {
        async function getRecom() {
            try {
                let x = await axios.get("http://localhost:3000/gApi/recom");
                return x;
            } catch (err) {
                console.log(err);
            }
        }
        getRecom().then(
            (value) => {
                this.$set(this.recomList, "list", value.data);
            },
            (reason) => {
                console.log(reason);
            }
        );
    },
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 1438px) {
    .extension-box > div:nth-child(n + 5) {
        display: none !important;
    }
}
@media screen and (max-width: 1870px) {
    .extension-box > div:nth-child(n + 6) {
        display: none !important;
    }
}
@media screen and (max-width: 1645px) {
    .extension-box > div:nth-child(n + 5) {
        display: none !important;
    }
}

.home-first-screen {
    position: relative;
    .first-screen {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        .shower-warp {
            height: 242px;
            width: 550px;
        }

        .rcmd-box-warp {
            .rcmd-box {
                position: relative;
                width: 1070px;
                height: 242px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-content: space-between;
                cursor: pointer;
                .play {
                    color: #fff;
                }

                .change-btn {
                    position: absolute;
                    right: -36px;
                    width: 28px;
                    height: 77px;
                    border: 1px solid silver;
                    border-radius: 2px;
                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;
                    align-items: center;
                    padding: 7px 0 0 0;

                    & > span {
                        line-height: 14px;
                        font-size: 12px;
                        width: 12px;
                        display: inline-block;
                    }

                    & > i {
                        font-size: 16px;
                        margin-bottom: 4px;
                        transition: transform 0.5s;
                    }
                }

                .change-btn:hover {
                    background-color: #f4f4f4;
                }

                .change-btn:hover i {
                    transform: rotate(-1turn);
                    transition: transform 0.5s;
                }

                .rcmd-info {
                    position: absolute;
                    padding: 26px 10px 10px;
                    left: 0;
                    top: 64px;
                    width: 100%;
                    box-sizing: border-box;
                    background-image: linear-gradient(
                        rgba(3, 3, 3, 0),
                        rgba(0, 0, 0, 0.8)
                    );

                    & p:first-child {
                        font-size: 14px;
                        height: 18px;
                        white-space: nowrap;
                        line-height: 18px;
                        color: #fff;
                        margin-bottom: 6px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }

                    .up-info {
                        display: flex;
                        margin-bottom: 3px;
                        align-items: center;
                        color: #fff;

                        & svg {
                            margin-right: 3px;
                            font-size: 12px;
                            color: #fff;
                        }
                    }

                    & p:last-child {
                        margin-bottom: 3px;
                    }
                }

                .rcmd-card {
                    overflow: hidden;
                }

                .rcmd-card:hover .rcmd-info {
                    top: 0;
                    z-index: 2;
                    background-image: linear-gradient(
                        rgba(0, 0, 0, 0.7),
                        rgba(0, 0, 0, 0.7)
                    );
                    transition: all 0.2s;
                }

                .rcmd-card:hover .rcmd-info p:first-child {
                    height: 36px;
                    // 调整高度来多显示一行
                    white-space: normal;
                    // 取消省略
                }
            }
        }
        .change-btn {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: -36px;
            width: 28px;
            height: 77px;
            border: 1px solid silver;
            border-radius: 2px;
            color: #505050;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 7px;
            line-height: 14px;
            cursor: pointer;
            i {
                font-size: 14px;
                margin-bottom: 4px;
                transition: all 0.5s;
            }

            span {
                display: inline-block;
                font-size: 12px;
                line-height: 14px;
                width: 12px;
            }
        }
        .change-btn:hover i {
            transform: rotate(1turn);
            transition: all 0.5s;
        }
    }

    .up-report {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;

        .extension-title {
            height: 36px;
            margin-bottom: 16px;
            display: flex;

            & div:not(.content-title) {
                display: flex;
                align-items: center;

                & a {
                    display: flex;
                    align-items: center;
                }
            }
        }

        .extension-box {
            display: flex;
            justify-content: space-between;

            .ex-video-card {
                width: 206px;

                .pic-card {
                    width: 100%;
                    height: 116px;

                    & a {
                        color: #212121;

                        & p {
                            display: -webkit-box;
                            font-size: 14px;
                            height: 40px;
                            margin: 10px 0 8px;
                            line-height: 20px;
                            padding-right: 12px;
                            overflow: hidden;
                            // text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }

                    & img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .online {
            display: flex;
            margin: 3px 0 19px 0;
            border: 1px solid #e7e7e7;
            height: 30px;
            justify-content: space-around;
            align-items: center;
            background-color: #f4f4f4;

            & a {
                color: #212121;
            }
        }

        .ex-air {
            & img {
                width: 100%;
                border-radius: 2px;
            }
        }
    }
}
</style>