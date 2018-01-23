<template>
	<div class="sellcontent">
		<p class="pcon" @click="open('bottom')">
			点击[添加宝贝]录入信息吧
		</p>
		<div class="add">

			<p class="pbtn" @click="open('bottom')">
				<mu-icon value="add_circle_outline"></mu-icon>
				<span>添加宝贝</span>
			</p>
			<p class="bottom1">
				<span>共0件</span>
				<span>下一步&nbsp;寄给只二</span>
			</p>
		</div>
		<mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
			<!--<mu-appbar >
				<mu-flat-button slot="left" label="X" color="white" @click="close('bottom')" />
			</mu-appbar>-->
			<mu-content-block>
				<div class="sellhead" >
					<ul class="clearfix " style="display: block;">
						<li style="float: left;">
					
							<mu-icon value="close" @click="close('bottom')"></mu-icon>
							
						</li>
						<li style="float: right;">
							<mu-icon value="help" @click="$router.push('howtosell')"></mu-icon>
			
						</li>
					</ul>
				</div>
				<p>选择宝贝的类别</p>
				
				<ul>
					<li 
					v-for="(list,index) in list"  
					class="item"  
					:class="{'active':ind === index}" 
					@click="active(index,list)">{{list}}</li>
				</ul>
				<button @click="open('right')">下一步</button>
			</mu-content-block>
		</mu-popup>
		
		<!--第二步-->
		<mu-popup position="right" popupClass="demo-popup-right" :open="rightPopup" @close="close('right')">
    		<!--<mu-raised-button label="关闭弹框" @click="close('right')" primary fullWidth/>-->
			<mu-content-block>
				<div class="sellhead" >
					<ul class="clearfix " style="display: block;">
						<li style="float: left;">
					
							<mu-icon value="keyboard_arrow_left" @click="close('right')"></mu-icon>
							
						</li>
						<li style="float: right;">
							<mu-icon value="help" @click="$router.push('howtosell')"></mu-icon>
			
						</li>
					</ul>
				</div>
				<p>填写品牌</p>
				<p id="choosebox">
					<input type="text" placeholder="只二现已接受3000+国内国外知名品牌" style="display: block;" id="choose" v-model="goods_trademark" @blur="trademark()"/>
					
				</p>
				<p class="advice">品牌建议</p>
				<button @click="open('top')">下一步</button>
				
			</mu-content-block>
  		</mu-popup>
  		<!--第三步-->
  		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomPopup: false,
				topPopup: false,
				leftPopup: false,
				rightPopup: false,
				goodlist:{},
				list:['女装','包袋','女鞋','配饰'],
				ind:'',
				goods_trademark:'',
			}
		},
		methods: {
			open(position) {
				this[position + 'Popup'] = true
			},
			close(position) {
				this[position + 'Popup'] = false
			},
			//插入商品类型事件
			active(index,list){
				this.ind = index;
				this.goodlist.type = list;
				console.log(this.goodlist)
			},
			//插入商品名牌事件
			trademark(){
				this.goodlist.goods_trademark = this.goods_trademark;
				console.log(this.goodlist)
				
			}
		},
		mounted:function(){
			

			
		}
	}
</script>

<style lang="scss">
	.sellcontent {
		display: flex;
		flex-direction: column;
		text-align: center;
		.pcon {
			height: 70%;
			padding-top: 50%;
			font-size: 0.433333rem;
			letter-spacing: 0.133333rem;
		}
		.pbtn {
			width: 3.8rem;
			height: 1.8rem;
			line-height: 1.8rem;
			background-color: #FD5C02;
			font-size: 0.513333rem;
			margin-bottom: 0.233333rem;
			margin-left: 50%;
			transform: translateX(-50%);
			i {
				vertical-align: middle;
				font-size: 0.513333rem;
				color: #FFFFFF;
			}
			span {
				vertical-align: middle;
				color: #FFFFFF;
			}
		}
		.add {
			height: 30%;
			display: flex;
			flex-direction: column;
		}
		.bottom1 {
			flex: 1;
			display: flex;
			justify-content: center;
			align-content: center;
			span {
				display: block;
				flex: 1;
				font-size: 0.426666rem;
				box-sizing: border-box;
				margin-top: 0.6rem;
				line-height: 1.933333rem;
			}
			span:nth-child(1) {
				border-right: 0.013333rem solid #ccc;
			}
			span:nth-child(2) {
				background-color: #ccc;
				color: #FFFFFF;
			}
		}
	}
	
.mu-appbar{
	width: 10rem;
	height:1.2rem;
	background: #FFFFFF;
	
}
.mu-content-block{
	width: 10rem;
	p{
		width: 10rem;
	}
}
.mu-appbar-title {
    font-size: 0.426666rem;
    text-align: right;
    .mu-flat-button-label{
    	font-size: 0.56rem;
    }
}
.mu-popup{
	p{
		font-size: 0.56rem;
		text-align: center;
		padding: 0.5rem;
		margin: 0.16rem;
	}
	.item{
		font-size: 0.56rem;
		text-align: center;
		padding: 0.5rem;
		margin: 0.16rem;
		width: auto;
		background: #CCCCCC;
	}
	.active{
		background: #FD5C02;
		color: #FFFFFF;
	}
	button{
		font-size: 0.56rem;
		padding: 0.4rem;
		position: relative;
		left: 70%;
		margin-top: 3.8rem;
		margin-bottom:0.8rem ;
	}
	
	.advice{
		color: #333333;
		border: 0.013333rem solid #333333;
		width: 8.333333rem;
		transform: translateX(0.733333rem);
		margin: 1.333333rem 0rem;
		
	}
	#choose{
		padding: 0.233333rem;
		
		width: 8.333333rem;
		font-size: 0.4rem;
		
	}
	
}
#choosebox{
	border-bottom: 0.013333rem solid #CCCCCC;
	margin: 1.533333rem 0;
	
}
</style>