<template>
    <div class="home-first-screen warp">
        <div class="first-screen">
            <div class="shower-warp"></div>
            <div class="rcmd-box-warp">
                <div class="rcmd-box">
                    <div class="video-card rcmd-card">
                        <div class="rcmd-info">
                            <p>
                                这是视频的标题!这是视频的标题! 这是视频的标题!
                                这是视频的标题!
                            </p>
                            <div class="up-info">
                                <svg
                                    t="1661005835833"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="3436"
                                    width="16"
                                    height="16"
                                >
                                    <path
                                        d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"
                                        p-id="3437"
                                        fill="#999999"
                                    ></path>
                                    <path
                                        d="M419.2 544c0 51.2-3.2 108.8-83.2 108.8S252.8 595.2 252.8 544v-217.6H192v243.2c0 96 51.2 140.8 140.8 140.8 89.6 0 147.2-48 147.2-144v-240h-60.8V544zM710.4 326.4h-156.8V704h60.8v-147.2h96c102.4 0 121.6-67.2 121.6-115.2 0-44.8-19.2-115.2-121.6-115.2z m-3.2 179.2h-92.8V384h92.8c32 0 60.8 12.8 60.8 60.8 0 44.8-32 60.8-60.8 60.8z"
                                        p-id="3438"
                                        fill="#999999"
                                    ></path>
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
                    <div
                        class="content-title"
                        v-show="this.$route.path == '/home'"
                    >
                        <div style="width: 36px; height: 36px">
                            <img src="../assets/extension/ex.png" alt="" />
                        </div>
                        <p><slot name="title-name"></slot></p>
                    </div>
                    <div>
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
                            <i class="fa-solid fa-u"></i>
                            陈林陈林陈林</a
                        >
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
                            <i class="fa-solid fa-u"></i>
                            沙一丁</a
                        >
                    </div>
                </div>
            </div>
            <div class="right-report-box">
                <div class="online">
                    <a
                        href="https://www.bilibili.com/video/online.html"
                        class="active-blue"
                        >观看列表</a
                    >
                </div>
                <a href="" class="ex-air">
                    <img src="../assets/extension/ex-air.webp" alt="" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>