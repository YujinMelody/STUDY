<template>
    <div class="animation">
        <img src="../assets/constructing.jpeg" alt="" />
        <p>动画分区，正在施工中……</p>
    </div>
</template>

<script>
import FirstScreen from "@/components/FirstScreen.vue";
export default {
    name: "Animation",
    components: { FirstScreen },
};
</script>

<style lang="less" scoped>
.animation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 400px;
        height: 400px;
    }
    p {
        font-size: 20px;
    }
}
</style>