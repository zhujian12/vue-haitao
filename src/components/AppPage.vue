<template>
    <div>
        <header id="header" class="mui-bar mui-bar-transparent">
            <a class="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left" style="color:#666"></a>
            <h1 class="mui-title"></h1>
            <a class="mui-icon mui-icon-paperplane mui-pull-right" style="color:#666"></a>
        </header>
        <div class="mui-content" style="background:#fff">
            <div id="slider" class="mui-slider" >
                <div class="mui-slider-group">
                    <div class="mui-slider-item">
                        <a href="#">
                            <img src="/assets/images/page.jpg">
                        </a>
                    </div>
                    <div class="mui-slider-item">
                        <a href="#">
                            <img src="/assets/images/page1.jpg">
                        </a>
                    </div>
                </div>
                <div class="mui-slider-indicator">
                    <div class="mui-indicator mui-active"></div>
                    <div class="mui-indicator"></div>
                </div>
            </div>
            <div class="aui-title-h b-line">
                <h3>{{ title }}</h3>
                <p>修身九分西装裤小脚高腰休闲西裤女装anna家32176</p>
                <em>¥81.25</em>
                <i>价格 ¥121.25</i>
                <div class="aui-title-sp "><span class="mui-icon-extra mui-icon-extra-heart">销量 34</span>  <span class="mui-icon-extra mui-icon-extra-heart">收藏475人</span>  <span class="mui-icon-extra mui-icon-extra-heart">顺丰快递</span>  </div>
            </div>
            <div class="devider b-line"></div>
            <div class="">
                <div style="padding:0 10px; margin-top:10px" class="">
                    <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
                        <a class="mui-control-item mui-active" href="#item1">商品详情</a>
                        <a class="mui-control-item" href="#item2">规格尺码</a>
                        <a class="mui-control-item" href="#item3">商品评价</a>

                    </div>
                </div>
                <div>
                    <div id="item1" class="mui-control-content mui-active" style="height:1200px">
                        <div class="aui-p">
                            <p>春夏季新款破洞高腰牛仔裤女哈女哈伦铅笔春夏款破洞高腰牛仔裤女哈伦铅笔宽松九分女裤宽松九分女松九分女裤宽裤 S25</p>
                        </div>
                        <div class="aui-kill aui-op"><img src="/assets/images/bd1.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/bd2.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/bd3.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/bd4.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/bd5.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/bd6.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/ad1.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/ad2.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/ad3.jpg" alt=""></div>
                        <div class="aui-kill aui-op"><img src="/assets/images/ad4.jpg" alt=""></div>
                    </div>

                    <div id="item2" class="mui-control-content">
                        <ul class="mui-table-view ">
                            <li class="mui-table-view-cell b-line">尺码: 均码</li>
                            <li class="mui-table-view-cell b-line">腰围： 68 紧身</li>
                            <li class="mui-table-view-cell b-line">裤长：37</li>
                            <li class="mui-table-view-cell b-line">衣长：59</li>
                            <li class="mui-table-view-cell b-line">胸围：109</li>
                            <li class="mui-table-view-cell b-line">裤口：32</li>
                            <li class="mui-table-view-cell b-line">袖长：38</li>
                            <li class="mui-table-view-cell b-line">颜色：黑色/白色/黄色</li>
                            <li class="mui-table-view-cell b-line">风格：基本款</li>
                            <li class="mui-table-view-cell b-line">季节：春季</li>
                            <li class="mui-table-view-cell b-line">领型：连衣</li>
                        </ul>

                    </div>
                    <div id="item3" class="mui-control-content">
                        评价
                    </div>
                </div>
            </div>
            


            <div style="height:900px"></div>
        </div>
        <div style="height:50px"></div>
        <nav class="mui-bar mui-bar-tab">
            <div class="t-line aui-on-cell">
                <div class="aui-ons">
                    <a href="#"><span class="mui-icon-extra mui-icon-extra-addpeople"></span><i>客服</i></a>
                    <a href="#"><span class="mui-icon-extra mui-icon-extra-university"></span><i>店铺</i></a>
                    <a href="#"><span class="mui-icon-extra mui-icon-extra-heart-filled"></span><i>收藏</i></a>
                </div>
                <div class="aui-onc">
                    <a href="#" style="margin-right:-4px">加入购物车</a>
                    <a href="order.html" class="aui-got">立即购买</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:this.$route.query.title
        }
    },
    mounted(){
        console.log(this.title)
         mui.init({
            swipeBack: true //启用右滑关闭功能
        });
        (function($) {
            $('#scroll').scroll({
                indicators: true //是否显示滚动条
            });
            var segmentedControl = document.getElementById('segmentedControl');
            $('.mui-input-group').on('change', 'input', function() {
                if (this.checked) {
                    var styleEl = document.querySelector('input[name="style"]:checked');
                    var colorEl = document.querySelector('input[name="color"]:checked');
                    if (styleEl && colorEl) {
                        var style = styleEl.value;
                        var color = colorEl.value;
                        segmentedControl.className = 'mui-segmented-control' + (style ? (' mui-segmented-control-' + style) : '') + ' mui-segmented-control-' + color;
                    }
                }
            });
        })(mui);
    }
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
