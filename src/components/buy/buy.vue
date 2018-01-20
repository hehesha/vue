<template>
    <div>
        <heads></heads>
        <div id="nav" @click="incrementTotal">
            <a href="#">上新</a>
            <a href="#">精选</a>
            <a href="#">女装</a>
            <a href="#">包袋</a>
            <a href="#">配饰</a>
            <a href="#">女鞋</a>
        </div>
        <div id="banner">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>  
</template>

<script>
    import heads from './head.vue';
    
    export default{
        components: {
            heads
        },
    }
</script>