<template>
    <div id="goods">
        <heads></heads>
        <div id="nav" @click="incrementTotal">
            <a href="#/sifts">上新</a>
            <a href="#">精选</a>
            <a href="#">女装</a>
            <a href="#">包袋</a>
            <a href="#">配饰</a>
            <a href="#">女鞋</a>
        </div>
       
    </div>
</template>

<script>
    import heads from './head.vue';
    
    export default{
        components: {
            heads
        },
        methods:{
            incrementTotal:function(event){
                var item = event.target.parentNode.children;
                for(var i=0;i<item.length;i++){
                    item[i].style.borderBottom="";
                }
                event.target.style.borderBottom = "1px solid red";
            }
        }
    }
</script>