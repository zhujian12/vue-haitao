<template>
    <div>
        <header class="mui-bar mui-bar-nav aui-header b-line">
            <a class="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
            <h1 class="mui-title">确认订单</h1>
            <a class="mui-icon mui-icon-paperplane mui-pull-right"></a>
        </header>
        <div class="mui-content">
            <ul class="mui-table-view mui-table-view-radio t-line">
                <li class="mui-table-view-cell b-line">
                    <p>徐萌 18801066666</p>
                    <p>北京市海淀区双榆树东里4号楼3门303</p>
                </li>
                <li class="mui-table-view-cell b-line">
                    <p><a href="#address" style="padding-right:20px"><span class="mui-icon mui-icon-compose"></span>编辑</a> <a href="#"><span class="mui-icon mui-icon-trash"></span>删除</a></p>
                </li>
            </ul>
            <div class="devider"></div>
            <ul class="mui-table-view mui-table-view t-line" id="OA_task_1">
                <li class="mui-table-view-cell  mui-table-view-cell mui-media b-line">
                    <div class=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox"></div>
                    <div class="mui-slider-right mui-disabled">
                        <a class="mui-btn mui-btn-red">删除</a>
                    </div>
                    <div class="mui-slider-handle mui-table">
                        <a href="javascript:;">
                            <img class="mui-media-object aui-ma-d mui-pull-left" src="/assets/images/ad1.jpg">
                            <div class="mui-media-body">¥112.50
                                <p class="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                <p>数量：2</p>
                                <p>颜色：黄色</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="mui-table-view-cell  mui-table-view-cell mui-media b-line">
                    <div class="mui-slider-right mui-disabled">
                        <a class="mui-btn mui-btn-red">删除</a>
                    </div>
                    <div class="mui-slider-handle mui-table">
                        <a href="javascript:;">
                            <img class="mui-media-object aui-ma-d mui-pull-left" src="/assets/images/ad2.jpg">
                            <div class="mui-media-body">¥112.50
                                <p class="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                <p>数量：2</p>
                                <p>颜色：黄色</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <div class="devider b-line"></div>
            <ul class="mui-table-view ">
                <li class="mui-table-view-cell b-line">配送方式: <span class="mui-pull-right">全国包邮</span></li>
                <li class="mui-table-view-cell b-line">快递费用: <span class="mui-pull-right">¥00.00</span></li>
                <li class="mui-table-view-cell b-line">合计: <span class="mui-pull-right">¥112.50</span></li>
            </ul>
            <div class="mui-input-row" style="margin:15px;">
                <textarea id="textarea" rows="5" placeholder="留言..." style="border:none"></textarea>
            </div>


        </div>

        <div style="height:49px"></div>
        <nav class="mui-bar mui-bar-tab" style="">
        <div class="t-line aui-on-cell">

                <div class="aui-onc">
                    <p style="display:inline-block"><span style="color:#fb4545">总计：¥112.50 </span></p>
                    <a href="alipay.html" class="aui-got" style="padding:0 40px">提交订单</a>
                </div>
        </div>
        </nav>
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

