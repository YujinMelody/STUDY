<template>
    <div class="right-static-ad">
        <header>
            <span><slot name="ad-title"></slot></span>
        </header>
        <div class="st-ad">
            <a href="">
                <slot name="ad-img"></slot>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "RightStaticAd",
};
</script>

<style lang="less" scoped>
.right-static-ad {
    display: block;
    header {
        display: flex;
        margin-bottom: 16px;
        height: 36px;
        justify-content: space-between;
        align-items: center;
        span {
            font-size: 20px;
            color: #212121;
            line-height: 28px;
        }
    }
    .st-ad {
        width: 100%;
        height: 100%;
    }
}
</style>