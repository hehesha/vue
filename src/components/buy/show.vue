<template>
    <div>
        <div id="show">
            <ul class="show_top">
              <li><mu-icon value="done" :size="18" color="#000"/>专业正品鉴定</li>
              <li><mu-icon value="done" :size="18" color="#000"/>100%实物拍摄</li>
              <li><mu-icon value="done" :size="18" color="#000"/>免费清洗护理</li>
            </ul>
            <ul class="show_bottom clearfix">
              <li>
                  <h3>真人展示</h3>
                  <h4>单品种草推荐</h4>
                  <p><a>去看看></a></p>
                  <span></span>
              </li>
              <li>
                  <h3>真人展示</h3>
                  <h4>单品种草推荐</h4>
                  <p><a>去看看></a></p>
                  <span></span>
              </li>
              <li>
                  <h3>真人展示</h3>
                  <h4>单品种草推荐</h4>
                  <p><a>去看看></a></p>
                  <span></span>
              </li>
              <li>
                  <h3>真人展示</h3>
                  <h4>单品种草推荐</h4>
                  <p><a>去看看></a></p>
                  <span></span>
              </li>
            </ul>
            <div class="show_brand clearfix">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>              
            </div>
            <div class="shopping-board"></div>
            
        </div>
    </div>
</template>

<script>
    import './selected.scss'
    import axios from 'axios'
  export default {
	data(){
		return{
			
		}
	},
	props: ['api'],
  beforeMount(){
              
    axios.get(this.api).then(res => {
                console.log(res);
           })
  },
  mounted(){
      //设置ul的宽度
      var $li=$('.show_brand li');
      console.log('li',$li);
      //var baseWidth=$($li[0]).outWidth(true);
      console.log($($li[0]));
      //$('show_bottom ul').css('Width',baseWidth*$li.length);
  }
}

</script>