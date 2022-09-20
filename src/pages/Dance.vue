<template>
    <div class="dance">
        <img src="../assets/constructing.jpeg" alt="" />
        <p>舞蹈分区，正在施工中……</p>
    </div>
</template>

<script>
import FirstScreen from "@/components/FirstScreen.vue";
export default {
    name: "Dance",
    components: { FirstScreen },
};
</script>

<style lang="less" scoped>
.dance {
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