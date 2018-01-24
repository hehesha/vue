<template>
	<div class="sellcontent">
		<ul class="navbox">


			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container1'">全部</mt-tab-item>
			</li>
			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container2'">待寄出</mt-tab-item> 	
			</li>
			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container3'">已报价</mt-tab-item>  
				
			</li>
			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container4'">待上架</mt-tab-item> 	
			</li>
			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container5'">在售中</mt-tab-item>  
				
			</li>
			
		</ul>
		<div class="page-tab-container">
			<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
				<mt-tab-container-item id="tab-container1">
					组件2
				</mt-tab-container-item>
				
				<mt-tab-container-item id="tab-container2">
					<cadd></cadd>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="tab-container3">
					组件3
				</mt-tab-container-item>
				
				<mt-tab-container-item id="tab-container4">
					组件4
				</mt-tab-container-item>
				
				<mt-tab-container-item id="tab-container5">
					组件5
				</mt-tab-container-item>
			</mt-tab-container>
		</div>

	</div>
</template>

<script>
	import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
	import cadd from './cAdd.vue';
	export default {

		data() {
			return {
				name:'page-tab-container',
				nav: ['全部', '待寄出', '已报价', '待上架', "在售中"],
				active: 'tab-container1',
			};
		},
		methods: {
			change() {

			}
		},
		components: {
			TabContainer,
			TabContainerItem,
			Navbar,
			TabItem,
			cadd,

		}
	};
</script>

<style lang="scss">
	.sellcontent {
		.navbox {
			background-color: #FFFFFF;
			padding: 0.4rem;
			width: 100%;
			li {
				
				color: #333333;
				.mint-tab-item-label {
				    color: #333333;
				    font-size: 0.426666rem;
				    line-height: 1;
				}
				a:active, a:hover {
    				border-bottom: 0.04rem solid #FD5C02;
    				color: #FD5C02;
				}
				
				
			}
		}
	}
</style>