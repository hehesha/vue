<template>
    <div>

        <banner></banner>
        <shows></shows>
        <Jsection></Jsection>
    </div>

</template>

<script>
    
    import banner from './banner.vue';
    import shows from './show.vue';
    import Jsection from './Jsection.vue';
    import './selected.scss';
    export default{
        components:{
            banner,
            shows,
            Jsection
        }
    }
</script>