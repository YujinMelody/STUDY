<template>
    <div class="video-card-g">
        <div class="pic-card">
            <a
                href="https://www.bilibili.com/video/BV1Zd4y1d7gH"
                target="_blank"
            >
                <img src="../assets/extension/ex1.webp" alt="" />
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
</template>

<script>
export default {
    name: "VideoCardG",
};
</script>

<style lang="less" scoped>
.video-card-g {
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
</style>