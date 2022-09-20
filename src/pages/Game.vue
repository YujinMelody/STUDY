<template>
    <div class="game">
        <img src="../assets/constructing.jpeg" alt="" />
        <p>游戏分区，正在施工中……</p>
    </div>
</template>

<script>
import FirstScreen from "@/components/FirstScreen.vue";
export default {
    name: "game",
    components: { FirstScreen },
};
</script>

<style lang="less" scoped>
.game {
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