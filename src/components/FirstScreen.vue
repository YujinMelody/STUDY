<template>
    <div class="home-first-screen warp">
        <div class="first-screen">
            <div class="shower-warp">
                <Lunbo :lunboData="lunboData"></Lunbo>
            </div>
            <div class="rcmd-box-warp">
                <div class="rcmd-box">
                    <div class="video-card rcmd-card">
                        <div class="rcmd-info">
                            <p>
                                这是视频的标题!这是视频的标题! 这是视频的标题!
                                这是视频的标题!
                            </p>
                            <div class="up-info">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-UPzhu"></use>
                                </svg>
                                <p>up主</p>
                            </div>
                            <p class="play">2.2万播放</p>
                        </div>
                    </div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="video-card"></div>
                    <div class="change-btn">
                        <i class="fa-solid fa-rotate"></i>
                        <span>换一换</span>
                    </div>
                </div>
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
export default {
    name: "FirstScreen",
    components: {
        Lunbo,
    },
    props: ["lunboData"],
};
</script>

<style lang="less" scoped>
.home-first-screen {
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
                background-color: #212121;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-content: space-between;
                cursor: pointer;

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
                    background-color: #f3cb85;

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

                        & svg {
                            margin-right: 3px;
                            font-size: 12px;
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
                    transition: top 0.2s;
                }

                .rcmd-card:hover .rcmd-info p:first-child {
                    height: 36px;
                    // 调整高度来多显示一行
                    white-space: normal;
                    // 取消省略
                }
            }
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