<template>
    <div>
        <div class="Jsection" v-for="(itema,val) in activityData" >
            <dl>
              <h3>{{itema.activity}}</h3>
              <h2>{{itema.second_title}}</h2>
              <dt>
                    <img :src=itema.carousel_img_large />
              </dt>
              <dd class="clearfix" >
                <ul class="clearfix">
                    <li v-for="(itemb) in goodsData" v-if="itemb.activity==itema.activity">
                        <img :src=itemb.goods_pto />
                        <h3>{{itemb.goods_trademark}}</h3>
                        <h4>{{itemb.goods_name}}</h4>
                        <span>{{itemb.size}}</span>
                        <p><b>￥{{itemb.sell_price}}</b><s>￥{{itemb.sell_prices}}</s></p>
                    </li>
                    
                </ul>
              </dd>
            </dl>
        </div>
    </div>
</template>

<script>

    import './selected.scss'
    import axios from 'axios'
export default {
    data(){
    return {
        activityData:[],
        goodsData:[]
    }
    },
    props: ['a_api','g_api'],
    beforeMount(){
                  
        axios.get(this.a_api).then(res => {
                    console.log(res.data.data.results);
                    this.activityData=res.data.data.results;
                    console.log(this.activityData);
               });
        axios.get(this.g_api).then(res => {
                    console.log(res.data.data.results);
                    this.goodsData=res.data.data.results;
               });

    },
}
  



</script>