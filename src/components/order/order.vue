<template>
    <div id="order">
        <div class="o_head">
        <mu-icon value="navigate_before" @click ="$router.go(-1)"/>
        确认订单
        </div>
        <div class="o_main">
            <div class="address">
                <button @click="$router.push('addaddress')">
                    <mu-icon value="add"/> 
                    添加地址
                </button>
            </div>
            <div class="buyList">
                <h3 @click="toggle">购买清单 <mu-icon :value="arrow"/></h3>
                <ul class="g_list">
                    <li v-for="(value,key) in dataset">
                        <img :src="value.goods_pto" class="pic">
                        <div class="c_content">
                            <h3>{{value.goods_trademark}}</h3>
                            <h4>{{value.goods_name}}</h4>
                            <p>{{value.title_name}}<span>{{value.size}}</span></p>
                            <h5><b>{{value.sell_price}}</b><s>{{value.sell_prices}}</s></h5>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="red_paper">
                <li>
                    红包
                    <span>共<b>9</b>个<mu-icon value="chevron_right"/></span>
                </li>
                <li>
                    积分 <mu-icon value="help_outline"/> <b>可抵扣￥0.00</b>
                </li>
                <li>
                    钱包 <mu-icon value="help_outline"/> <b>余额￥0.00</b>
                </li>
            </ul>
            <ul class="total">
                <li>商品总额<span>￥6861.00</span></li>
                <li>运费<span>￥0.00</span></li>
            </ul>
        </div>
        <div class="o_footer clearfix">
            <span>实付<b>￥6861.00</b></span>
            <button>去支付</button>
        </div>
    </div>
</template>

<script>
    import './order.scss'
    import axios from 'axios'
    export default {
      data () {
        return {
          arrow:'arrow_drop_up',
          dataset:[],
        }
     
    },
    methods:{
        toggle(){
            var $g_list=$('.g_list');
            if($g_list.css('display')=='none'){
                $g_list.show();
                this.arrow='arrow_drop_up';
            }else{
                $g_list.hide();
                this.arrow='arrow_drop_down';
            }
        }
    },
    beforeMount(){
      this.totals=0
      var self = this;
      axios.get('http://10.3.136.62:88/getorder').then(function (response) {
          console.log(response)
          var item = response.data.data.results;
          item.forEach(function(ss){
            var bb = JSON.parse(ss.goods_detail)
            self.dataset.push(bb);
          })
      })
    }
}

</script>
