<template>
    
    <nav class="mui-bar mui-bar-tab">
        <div class="t-line">
            <router-link to='/home' class='aui-tab-item mui-active'>
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            
                
            <router-link to='/category' class='aui-tab-item'>
                <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                <span class="mui-tab-label">分类</span>
            </router-link>
            
            <router-link to='/car' class='aui-tab-item'>
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            
            <router-link to='/me' class="aui-tab-item">
                <span class="mui-icon mui-icon-extra mui-icon-extra-people"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
                
            
        </div>
    </nav>
    
</template>
