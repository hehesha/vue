<template>
	<div class="sellhead">
		<ul class="clearfix">
			<li>
				<mu-icon value="keyboard_arrow_left" @click = "$router.go(-1)"></mu-icon>
				
			</li>
			<li>
				我卖的闲置
			</li>
		</ul>
	</div>
</template>

<script>
	import './../sell.scss';
	export default{
		data(){
			return{}
		}
	}
</script>

<style lang="scss" >
	.sellhead{
		background-color: none;
	}
</style>