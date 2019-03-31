<template>
    <div>
        <header class="mui-bar mui-bar-nav aui-header b-line">
            <router-link class=" mui-icon mui-icon-arrowleft mui-pull-left" to='/home'></router-link>
            
            <h1 class="mui-title">热销单品</h1>
            <a class="mui-icon mui-icon-paperplane mui-pull-right"></a>
        </header>
        <div class="mui-content">
            <div class="aui-hots-img b-line"><img src="/assets/images/hots.jpg" alt=""></div>
            <div class="devider b-line"></div>
            <div class="aui-img-clear" >
                <ul class="mui-table-view mui-table-view" id="OA_task_1">
                    <li class="mui-table-view-cell  mui-table-view-cell mui-media b-line">
                        <div class=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox" ></div>
                        <div class="mui-slider-right mui-disabled">
                            <a class="mui-btn mui-btn-red">删除</a>
                        </div>
                        <div class="mui-slider-handle mui-table">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="/assets/images/ad1.jpg">
                                <div class="mui-media-body">
                                    ¥112.50
                                    <p class="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                    <p class="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                    <p class="aui-sml">最热</p>
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
                                <img class="mui-media-object mui-pull-left" src="/assets/images/ad2.jpg">
                                <div class="mui-media-body">
                                    ¥112.50
                                    <p class="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                    <p class="aui-sml">最热</p>
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
                                <img class="mui-media-object mui-pull-left" src="/assets/images/ad3.jpg">
                                <div class="mui-media-body">
                                    ¥112.50
                                    <p class="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                    <p class="aui-sml">最热</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="devider "></div>
            <div class="aui-list t-line">
                <h2>猜你喜欢</h2>
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad1.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad2.jpg">
                            <div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad3.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad4.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad1.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad2.jpg">
                            <div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad3.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad4.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad1.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad2.jpg">
                            <div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad3.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad4.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad1.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad2.jpg">
                            <div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad3.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="/assets/images/ad4.jpg">
                            <div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

