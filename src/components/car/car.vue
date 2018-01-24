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
              <span @click="compile">编辑</span>
            </div>
            <div class="c_sell">
              <p>满￥299包邮，还差￥299</p>
            </div>
        </div>
        <ul class="c_goods" @click="checks">
            <li v-for="(value,key) in dataset">
              <mu-icon value="delete_forever" color="red" class="delete" :size="32"/>
              <input type=checkbox class="demo-checkbox"/>
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
                <p>总计<b>￥{{totals}}</b><span>节省 ￥0</span></p>
              </div>
              <div class="c_pay clearfix">
              <label @click= "checkall"><input type="checkbox" class="demo-checkbox"/><span style="font-size:40px;margin-left:50px">全选</span></label>
              <a href="#/order"><button>结算</button></a>
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
            total:[],
            totals:[],
        }
    },
    methods:{
        checks:function(event){
          if(event.target.tagName.toLowerCase() =='input'){
            var li =event.target.parentNode;
              //获取event所在的price
              
            var money = (li.lastChild.firstChild.lastChild.firstChild.innerText)*1;
            if(event.target.checked){

              //将所有选中的价格存到数组
              this.total.push(money);

              var item = 0;
              for(var i=0;i<(this.total).length;i++){
                item = item + (this.total)[i];
                this.totals = item;
              }
              event.target.parentNode.style.background = '#fefbec';
            }else{
              this.totals = this.totals-money;
              event.target.parentNode.style.background = '';
            }

          }
        },
        checkall:function(){
          if(event.target.tagName.toLowerCase() =='input'){
            if(event.target.checked){
              console.log(event.target.find('li'))
            }
          }
        },
        compile:function(){
          
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