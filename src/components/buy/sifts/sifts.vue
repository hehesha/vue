<template>
    <div>
        <heads></heads>
        <div id="nav" @click="incrementTotal">
            <a href="#/buy">上新</a>
            <a href="#/sifts">精选</a>
            <a href="#">女装</a>
            <a href="#">包袋</a>
            <a href="#">配饰</a>
            <a href="#">女鞋</a>
        </div>
        <div id="sift">
            <div class="sift_l">
                <span>最新上架</span>
                <mu-icon value="arrow_drop_down" :size="42" color="#000"/>
            </div>
            <div class="sift_r">
                <span>未售</span>
                <span>筛选</span>
                <span style="margin-right:0.413333rem"><mu-icon value="apps" :size="42" color="#000"/></span>
            </div>
        </div>
    </div> 
</template>

<script>
    import './sifts.scss';
    import heads from '../head.vue';
    export default {
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