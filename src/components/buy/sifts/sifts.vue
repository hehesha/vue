<template>
    <div id="yl_sift">
        <heads></heads>
        <div id="nav" @click="incrementTotal">
            <a href="#/sifts">上新</a>
            <a href="#">精选</a>
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
        <div id="main">
            <ul @click.stop="aa">
                <li v-for="(value,key) in dataset">
                    <img :src="value.imgs">
                    <div style="text-align:center">
                        <p>{{value.brand}}</p>
                        <p>{{value.headlines}}</p>
                        <p>{{value.size}}</p>
                        <p>{{value.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div> 
</template>

<script>
    import axios from 'axios';
    import './sifts.scss';
    import heads from '../head.vue';
    export default {
        data(){
            return {
                dataset: []
            }
        },
        beforeMount(){
        var self = this;
            axios.get('http://localhost:88/sifts').then(function (response) {
                console.log(response.data.data.results);
                self.dataset = (response.data.data.results);
            })
        },
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
            },
            aa:function(event){
                console.log(event.target)
            }
        }
    }
</script>