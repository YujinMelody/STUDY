<template>
    <div>
        <FirstScreen>
            <template slot="title-name">前方高能</template>
        </FirstScreen>
        <h1>动画</h1>
    </div>
</template>

<script>
import FirstScreen from "@/components/FirstScreen.vue";
export default {
    name: "Animation",
    components: { FirstScreen },
};
</script>

<style>
</style>