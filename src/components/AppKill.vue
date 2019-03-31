<template>
    <div>
        <header class="mui-bar mui-bar-nav aui-header b-line">
			<router-link to='a' class=' mui-icon mui-icon-arrowleft mui-pull-left'></router-link>
            
            <h1 class="mui-title">秒杀专场</h1>
            <a class="mui-icon mui-icon-paperplane mui-pull-right"></a>
        </header>
        <div class="mui-content">
            <div class="aui-kill">
                <img src="/assets/images/miao.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
		html,
		body {
			background-color: #efeff4;
		}

		.mui-bar .mui-pull-left .mui-icon {
			padding-right: 5px;
			font-size: 28px;
		}

		.mui-bar .mui-btn {
			font-weight: normal;
			font-size: 17px;
		}

		.mui-bar .mui-btn-link {
			top: 1px;
		}

		.mui-content img{
			width: 100%;
		}
		.hm-description{
			margin: 15px;
		}

		.hm-description>li {
			font-size: 14px;
			color: #8f8f94;
		}


	</style>

