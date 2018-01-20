<template>
    <div>
        <div id="head">
            <div class="head_l">
                <mu-icon value="notifications_none" :size="42" color="#000"/>
            </div>
            <div class="head_c">
                <span>只</span>
                <span>二</span>
            </div>
            <div class="head_r">
                <mu-icon value="search" :size="42"/>
                <mu-icon value="shopping_cart" :size="42"/>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import './buy.scss'
export default {

    methods:{
        incrementTotal:function(event){
            if(event.target.tagName.toLowerCase()=='a'){
                var a = event.target.parentNode.children;
                event.target.style.borderBottom = '1px solid #ccc';

            }
    }
  }
}
</script>