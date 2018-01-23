<template>
    <div>
      <div class="car_main">
        <div class="c_header">
            <div class="c_title">
              <span>
                  <a href="#">
                      <mu-icon value="navigate_before" :size="42" color="#000"  @click='$router.go(-1)'/>
                  </a>
              </span>
              <h2>购物车</h2>
              <span>编辑</span>
            </div>
            <div class="c_sell">
              <p>满￥299包邮，还差￥299</p>
            </div>
        </div>
        <ul class="c_goods">
            <li  @click="" v-for="(value,key) in dataset">
              <mu-checkbox class="demo-checkbox"/>
                <img :src="value.goods_pto" class="pic">
              </span>
              <a href="#">
                <div class="c_content">
                  <h3>{{value.goods_trademark}}</h3>
                  <h4>{{value.goods_name}}</h4>
                  <p>{{value.title_name}}<span>{{value.size}}</span></p>
                  <h5><b>{{value.sell_price}}</b><s>{{value.sell_prices}}</s></h5>
                </div>
              </a>
            </li>
        </ul>
          <div class="c_footer">
              <div class="c_total">
                <p>总计<b>￥0</b><span>节省 ￥0</span></p>
              </div>
              <div class="c_pay clearfix">
                <mu-checkbox label="全选" class="demo-checkbox"/>
                <button>结算</button>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import './car.scss'
    import axios from 'axios'
  export default {
    data(){
        return{
            dataset:[],
        }
    },
    methods:{

    },
    beforeMount(){
      var self = this;
      axios.get('http://10.3.136.62:88/getorder').then(function (response) {
          var item = response.data.data.results;
          item.forEach(function(ss){
            var bb = JSON.parse(ss.goods_detail)
            self.dataset.push(bb);
          })
      })
    }
}

</script>