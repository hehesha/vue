<template>
    <div id="yl_sift">
        <heads></heads>
        
        <div id="sift">
            <div class="sift_l">
                <span>最新上架</span>
                <mu-icon value="arrow_drop_down" :size="42" color="#000"/>
            </div>
            <div class="sift_r">
                <span>价格<mu-icon value="arrow_drop_down" :size="42" color="#000"/></span>
                <span>筛选</span>
                <span style="margin-right:0.413333rem"><mu-icon value="apps" :size="42" color="#000"/></span>
            </div>
        </div>
        <div id="main" v-if="dataset">
            <ul>
                <li v-for="(value,key) in dataset" :key="key" @click="aa((value.id)-1)">
                    <img :src="value.goods_pto">
                    <div style="text-align:center">
                        <p>{{value.goods_trademark}}</p>
                        <p>{{value.goods_name}}</p>
                        <p>{{value.size}}</p>
                        <p>
                            <span style="color:#E98345">￥{{value.sell_price}}</span>
                            <span style="text-decoration:line-through">{{value.sell_prices}}</span>
                        </p>
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
                dataset: [],
            }
        },
        props:['api','type'],
        beforeMount(){
        var self = this;
            axios.get(self.api,{params: {type:this.type}}).then(function (response) {
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
            aa:function(key){
                var key = key+1;
                location.href ='http://localhost:8080/#/detail?id='+key;
                
            }
        }
    }
</script>