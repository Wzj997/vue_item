<template>
    <nav>
        <!-- 声明式导航 -->
        <ul>
            <router-link to="/film" tag="li" active-class="myactive">
            <i class="iconfont icon-zhidupingshen"></i>film</router-link>
            <router-link to="/cinema" tag="li" active-class="myactive">
            <i class="iconfont icon-zhidupingshen"></i>cinema</router-link>
            <router-link to="/center" tag="li" active-class="myactive">
            <i class="iconfont icon-zhidupingshen"></i>center</router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.myactive{
    color: red;
}
nav{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background-color: white;
    ul{
        display: flex;
        li{
            flex: 1;
            line-height: 50px;
            text-align: center;
        }
    }
}
</style>
