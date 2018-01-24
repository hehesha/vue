<template>
    <div>
        <div id="head">
            <ul class="clearfix">
                <li>
                    <mu-icon value="keyboard_arrow_left" @click = "$router.go(-1)" :size='35'></mu-icon>
                </li>
                <li>
                    购买订单
                </li>
            </ul>
        </div>
        <div id="nav">
            <ul>
                <a href="#/all"><li>全部</li></a>
                <li>待支付</li>
                <li>待发货</li>
                <li>待签收</li>
                <li>已签收</li>
            </ul>
        </div>
    </div>    
</template>

<script>
    import './unpaid.scss';
    export default {
        components: {

        },
    }

</script>