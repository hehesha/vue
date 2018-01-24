<template>
    <div class="a_detail">
        <div>1111111</div>
        <listdatagrid api="http://10.3.136.62:88/classify" :type=bb></listdatagrid>
    </div>
</template>

<script>
    import listdatagrid from '../sifts/listdatagrid.vue';
    import bigimg from './bigimg.vue';
     export default{
        components:{
            listdatagrid,
            bigimg
        },
        data(){
            return {
            bb:""
            }
        },
        beforeMount(){
            var bb = location.hash.split('?')[1].split('=')[1];
            bb=decodeURI(bb);
            console.log(bb);
        }
    }
</script>