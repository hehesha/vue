<template>
    <div>
      <div class="car_main">
        <div class="c_header">
            <div class="c_title">
              <span>
                  <a href="#">
                      <mu-icon value="navigate_before" :size="42" color="#000"/>
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
            <li>
              <mu-checkbox class="demo-checkbox"/>
              <span class="pic">
                  <span class="cover">72小时可退</span>
              </span>
              <div class="c_content">
                <h3>Eifini</h3>
                <h4>低调轻奢名媛范</h4>
                <p>羊毛系腰气质妮子大衣<span>M码</span></p>
                <h5><b>￥968</b><s>￥1980</s></h5>
              </div>
            </li>
            <li>
              <mu-checkbox class="demo-checkbox"/>
              <span class="pic">
                  <span class="cover">72小时可退</span>
              </span>
              <div class="c_content">
                <h3>Eifini</h3>
                <h4>低调轻奢名媛范</h4>
                <p>羊毛系腰气质妮子大衣<span>M码</span></p>
                <h5><b>￥968</b><s>￥1980</s></h5>
              </div>
            </li>
            <li>
              <mu-checkbox class="demo-checkbox"/>
              <span class="pic">
                  <span class="cover">72小时可退</span>
              </span>
              <div class="c_content">
                <h3>Eifini</h3>
                <h4>低调轻奢名媛范</h4>
                <p>羊毛系腰气质妮子大衣<span>M码</span></p>
                <h5><b>￥968</b><s>￥1980</s></h5>
              </div>
            </li>
            <li>
              <mu-checkbox class="demo-checkbox"/>
              <span class="pic">
                  <span class="cover">72小时可退</span>
              </span>
              <div class="c_content">
                <h3>Eifini</h3>
                <h4>低调轻奢名媛范</h4>
                <p>羊毛系腰气质妮子大衣<span>M码</span></p>
                <h5><b>￥968</b><s>￥1980</s></h5>
              </div>
            </li>
            <li>
              <mu-checkbox class="demo-checkbox"/>
              <span class="pic">
                  <span class="cover">72小时可退</span>
              </span>
              <div class="c_content">
                <h3>Eifini</h3>
                <h4>低调轻奢名媛范</h4>
                <p>羊毛系腰气质妮子大衣<span>M码</span></p>
                <h5><b>￥968</b><s>￥1980</s></h5>
              </div>
            </li>
            <li>
              <mu-checkbox class="demo-checkbox"/>
              <span class="pic">
                  <span class="cover">72小时可退</span>
              </span>
              <div class="c_content">
                <h3>Eifini</h3>
                <h4>低调轻奢名媛范</h4>
                <p>羊毛系腰气质妮子大衣<span>M码</span></p>
                <h5><b>￥968</b><s>￥1980</s></h5>
              </div>
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
            
        }
    },
    props: ['api'],
  beforeMount(){
              
    //axios.get(this.api).then(res => {
               // console.log(res);
           //})
  }
}

</script>