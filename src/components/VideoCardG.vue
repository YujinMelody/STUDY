<template>
    <div class="video-card-g">
        <div class="pic-card">
            <a :href="address" target="_blank">
                <img :src="showImg" alt="" />
                <p>{{ title }}</p>
            </a>
            <div class="count">
                <div class="left">
                    <span>
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 16px; width: 16px"
                        >
                            <use xlink:href="#icon-bofangshu"></use>
                        </svg>
                        159.0万
                    </span>
                    <span>
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="
                                height: 16px;
                                width: 16px;
                                transform: translateY(-1px);
                            "
                        >
                            <use xlink:href="#icon-dianzan"></use>
                        </svg>
                        13.1万
                    </span>
                </div>
                <div class="right"><span>00:31</span></div>
            </div>
            <div class="watch-later"></div>
        </div>
        <a href="" class="ex-up-info">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-UPzhu"></use>
            </svg>
            {{ up }}
        </a>
    </div>
</template>

<script>
export default {
    name: "VideoCardG",
    props: ["up", "title", "showImg", "address"],
};
</script>

<style lang="less" scoped>
.video-card-g {
    width: 206px;

    .pic-card {
        width: 100%;
        height: 116px;
        position: relative;
        .count {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            font-size: 12px;
            width: 100%;
            line-height: 16px;
            padding: 6px 8px;
            color: #fff;
            .left {
                display: flex;
                justify-content: space-between;
                svg {
                    margin-right: 3px;
                }
                span {
                    margin-right: 10px;
                    display: flex;
                    align-items: center;
                    line-height: 16px;
                }
            }
            .right {
                display: none;
                position: absolute;
            }
        }
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
            &::before {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 30px;
                border-radius: 2px;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
                background-size: contain;
                content: "";
            }
        }

        & img {
            width: 100%;
            height: 100%;
            border-radius: 2px;
        }
    }
}
</style>