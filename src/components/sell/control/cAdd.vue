<template>
	<div class="databox">
		<h2 style="text-align: right;color: #FD5C02;border-bottom: 0.013333rem solid #DBDBDB;">待寄出</h2>
		<p>
			<img src="../../../assets/accessory.jpg"/>
			<span>这是一只猪</span>
		</p>
		<button>我要寄出</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	h2{
		height: 0.833333rem;
		font-size: 0.426666rem;
		padding-right: 0.4rem;
		font-weight: bold;
		letter-spacing: 0.133333rem;
	}
	.databox{
		padding: 0.266666rem;
		p{
			padding-top: 0.466666rem;
		}
	}
	img{
		width: 4rem;
		vertical-align: middle;
		margin-left: 0.133333rem;
		border: 0.04rem solid #333333;
		margin-right: 0.36rem;
	}
	span{
		vertical-align: middle;
		font-size: 0.426666rem;
	}
	button{
		font-size: 0.533333rem;
		padding: 0.4rem;
		margin-top:0.426666rem ;
		margin-left: 0.426666rem;
	}
	
</style>