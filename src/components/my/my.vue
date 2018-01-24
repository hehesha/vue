<template>
    <div class="box">
        
        <div class="header">
            
            <mu-icon value="notifications_none" :size="50" color='black'@click = "$router.push('news')"/>
            <a href="#/setting"><mu-icon value="brightness_low" :size="50" color='black'/></a>
        </div>

        <div class="content">

            <div class="header_b">

                <div>Dainel</div>
            </div>  

            <div class="user_money">

                <div>
                    <p>0.00</p>
                    <p>钱包</p>
                </div>
                <div>
                    <p>9</p>
                    <p>红包</p>
                </div>
                <div>
                    <p>0</p>
                    <p>积分</p>
                </div>
            </div> 

            <div class="shoppingList">
                
                <div class="shoppingList_wz" @click = "$router.push('order')">

                    <span>购买订单</span><span>查看全部<mu-icon value="chevron_right" :size="42" color='#ccc'/></span>
                </div>
            </div>

            <div class="function">

                <a href="#/unpaid"><div @click="unpaid">
                    <mu-icon value="payment" :size="50" color='black'/>
                    <p>待支付</p>
                </div></a>
                <div>
                    <mu-icon value="airport_shuttle" :size="50" color='black'/>
                    <p>代发货</p>
                </div>
                <div>
                    <mu-icon value="mode_edit" :size="50" color='black'/>
                    <p>待签收</p>
                </div>
                <div>
                    <mu-icon value="assignment_turn" :size="50" color='black'/>
                    <p>售后退货</p>
                </div>
            </div>

            <div class="shoppingList1 shoppingList2">
                
                <div class="shoppingList_wz" @click = "$router.push('control')">

                    <span>我卖的闲置</span><span>查看全部<mu-icon value="chevron_right" :size="42" color='#ccc' vertical-align="center"/></span>
                </div>
            </div>

            <div class="shoppingList shoppingList2">
                
                <div class="shoppingList_wz">

                    <span>邀请好友</span><span>领红包<mu-icon value="chevron_right" :size="42" color='#ccc'/></span>
                </div>
            </div>

            <div class="shoppingList shoppingList2">
                
                <div class="shoppingList_wz">

                    <span>账户管理</span><span><mu-icon value="chevron_right" :size="42" color='#ccc'/></span>
                </div>
            </div>

            <div class="shoppingList shoppingList2 shoppingList3">
                
                <div class="shoppingList_wz">

                    <span>在线客服</span><span>9：00 - 18：00<mu-icon value="chevron_right" :size="42" color='#ccc'/></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './my.scss';
    export default {
        methods:{
            unpaid:function(){
                console.log(666)
            }
        }
    }
</script>

