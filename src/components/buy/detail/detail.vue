<template>
    <div id="detail">
        <div id="goods_head">
            <a class="goods_head_l" href="#/sifts"><mu-icon value="keyboard_arrow_left"></mu-icon></a>
            <a class="goods_head_r">
                <mu-icon value="share"></mu-icon>
                <mu-icon value="shopping_cart"></mu-icon>
            </a>
        </div>
        <div id="goods_main" v-if="b[0]">
            <div style="text-align:center;"><img :src="b[0].goods_pto"></div>
            <div id="goods_foot">
            <div class="goods_foot_t">
                <p style="font-size:0.4rem;line-height:1.04rem;">{{b[0].goods_trademark}}</p>
                <p style="font-size:36px;line-height:1.04rem;font-weight:bold">{{b[0].goods_name}}</p>
                <p>{{b[0].title_name}}</p>
                <p>{{b[0].size}}</p>
                <p style="color:#E98345">￥{{b[0].sell_price}}</p>
                <span>{{b[0].sell_prices}}</span>
                <b>{{cc}}折</b>
            </div>
            <div class="goods_foot_c">
                <div><mu-icon value="done"></mu-icon><span>专业正品鉴定</span></div>
                <div><mu-icon value="done"></mu-icon><span>100%实物拍摄</span></div>
                <div><mu-icon value="done"></mu-icon><span>免费清洗护理</span></div>
                </div>
            </div>
            <div class="propertys">
                <span style="border-bottom:1px solid #E6E6E6;">时髦指数</span>
                <span>品牌属性 轻奢品牌</span>
            </div>
            <div class="messages">
                <span>商品信息</span>
                <div style="padding:27px 0  0 32px;">
                    <tr>成色
                        <td>全新</td>
                    </tr>
                    <tr>瑕疵
                        <td>专柜陈列痕迹 细微放置痕迹</td>
                    </tr>
                    <tr>款式
                        <td>单肩包 斜挎包</td>
                    </tr>
                    <tr>材质
                        <td>{{b[0].goods_info}}</td>
                    </tr>
                    <tr>重量
                        <td>585g</td>
                    </tr>
                    <ul>尺寸 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宽 21cm
                        <li>高 12.5cm</li>
                        <li>底边宽 6cm</li>
                        <li>肩带长度 110cm</li>
                        <li>宽 21cm</li>
                    </ul>
                    </dl>
                </div>
            </div>
            <div class="prts"></div>
        </div>
        <div id="goods_foots">
            <div class="shops">
                加入购物车
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import './detail.scss';
    export default {
        data(){
            return {
                b:[]
            }
        },
        computed:{
            cc:function(){
                return ((this.b[0].sell_price/this.b[0].sell_prices)*10).toFixed(1);
            }
        },
        mounted(){
            var self = this;
            var bb = location.hash.split('?')[1].split('=')[1];
            axios.get('http://10.3.136.62:88/detail',{params: {id: bb}}).then(function (response) {
                 self.b = response.data.data.results;
            })
        }
    }
</script>