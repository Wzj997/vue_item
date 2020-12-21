<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
ul{
    display: flex;
    li{
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: white;
    }
}
.active{
    color: red;
    border-bottom: 2px solid red;
}
</style>
