<template>
    <div class="mui-content">
	<div id="slider" class="mui-slider">
		<div class="mui-slider-group mui-slider-loop">
			<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
				<router-link tag="a" to="/page">
					<img src="/assets/images/banner.jpg">
				</router-link>	
			</div>
			<!-- 第一张 -->
			<div class="mui-slider-item">
				<router-link tag="a" to="/page">
					<img src="/assets/images/banner.jpg">
				</router-link>
			</div>
			<!-- 第二张 -->
			<div class="mui-slider-item">
				<router-link tag="a" to="/page">
					<img src="/assets/images/banner1.jpg">
				</router-link>
			</div>
			<!-- 第三张 -->
			<div class="mui-slider-item">
				<router-link tag="a" to="/page">
					<img src="/assets/images/banner1.jpg">
				</router-link>
			</div>
			<!-- 第四张 -->
			<div class="mui-slider-item">
				<router-link tag="a" to="/page">
					<img src="/assets/images/banner1.jpg">
				</router-link>
			</div>
			<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
				<router-link tag='a' to='/page'>
					<img src="/assets/images/banner1.jpg">
				</router-link>
			</div>
		</div>
		<div class="mui-slider-indicator">
			<div class="mui-indicator mui-active"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
		</div>
	</div>
	<div class="aui-nav">
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-sm-3 ">
				<router-link tag='a' to='/hot'>
					<span class="aui-cell-img"><img src="/assets/images/icon/icon-1.png" alt=""></span>
					<div class="mui-media-body">热销单品</div>
				</router-link>
				
					
				
			</li>
			<li class="mui-table-view-cell mui-media mui-col-sm-3 ">
				<router-link to='/new' tag='a'>
					<span class="aui-cell-img"><img src="/assets/images/icon/icon-2.png" alt=""></span>
					<div class="mui-media-body">今日上新</div>
				</router-link>
				
					
				
			</li>
			<li class="mui-table-view-cell mui-media mui-col-sm-3 ">
				<router-link to='/suit'>
					<span class="aui-cell-img"><img src="/assets/images/icon/icon-3.png" alt=""></span>
					<div class="mui-media-body">优惠套装</div>
				</router-link>
				
					
				
			</li>
			<li class="mui-table-view-cell mui-media mui-col-sm-3 ">
				<router-link to='/kill'>
					<span class="aui-cell-img"><img src="/assets/images/icon/icon-4.png" alt=""></span>
					<div class="mui-media-body">秒杀专场</div>
				</router-link>
				
					
				
			</li>
		</ul>
	</div>
	<div class="devider t-line"></div>
	<div class="aui-hot t-line">
		<h2>牛仔蓝不单调不低调</h2>
		<div>
			<router-link to='/news'><img src="/assets/images/hot.jpg" alt=""></router-link>
		</div>
	</div>
	<div class="devider t-line"></div>
	<div class="aui-list t-line">
		<h2>精品优选</h2>
		<ul class="mui-table-view mui-grid-view">
			<li class="mui-table-view-cell mui-media mui-col-xs-6" v-for='item of list' :key="item.id">
				<router-link :to='{name:"page",query:{title:item.detail.title}}' >
					<img class="mui-media-object" :src="item.src">
					<div class="mui-media-body">{{ item.title }}</div>
					<div class="goods_info"> <span class="price_info">{{ item.price }}</span> <span class="fav_num">{{ item.shopnum}}</span> </div>
				</router-link>	
			</li>
		</ul>
	</div>

<!-- ----- 春季百搭列表 begin  --- -->
	<div class="mui-slider aui-slider">
		<div class="devider t-line"></div>
		<div class="t-line"></div>
		<h2>春季百搭</h2>
		<div class="mui-slider-group mui-slider-loop">
			<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一个图文表格) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
				<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd1.jpg">
							<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						</router-link>
						
						
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd2.jpg">
							<div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
					</li>
				</ul>
			</div>

			<div class="mui-slider-item">
				<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd1.jpg">
							<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd2.jpg">
							<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
				</ul>
			</div>
			<div class="mui-slider-item">
				<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd3.jpg">
							<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd4.jpg">
							<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
				</ul>
			</div>
			<div class="mui-slider-item">
				<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd5.jpg">
							<div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd6.jpg">
							<div class="mui-media-body">32017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
				</ul>
			</div>

			<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一个图文表格) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
				<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd5.jpg">
							<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link to='/page'><img class="mui-media-object" src="/assets/images/bd6.jpg">
							<div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
							<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
						
						</router-link>
						
					</li>
				</ul>
			</div>

		</div>
		<div class="mui-slider-indicator" style="position: static;background-color: #fff;">
			<div class="mui-number" style="color:#999">
				<span>1</span>/3
			</div>
		</div>
	</div>
	<!-- ----- 春季百搭列表 End  --- -->

	<div class="devider t-line"></div>
	<div class="aui-list t-line">
		<h2>精品优选</h2>
		<ul class="mui-table-view mui-grid-view">
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad1.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad2.jpg">
					<div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
					<div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad3.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad4.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad1.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad2.jpg">
					<div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
					<div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad3.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad4.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad1.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad2.jpg">
					<div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
					<div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad3.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad4.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad1.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥58.00</span> <span class="fav_num">2889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad2.jpg">
					<div class="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
					<div class="goods_info"> <span class="price_info">￥88.00</span> <span class="fav_num">7889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad3.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥158.00</span> <span class="fav_num">26889人购买</span> </div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link to='/page'>
					<img class="mui-media-object" src="/assets/images/ad4.jpg">
					<div class="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
					<div class="goods_info"> <span class="price_info">￥348.00</span> <span class="fav_num">889人购买</span> </div>
				</router-link>
			</li>
		</ul>
	</div>
</div>
</template>



<script>
export default {
    data(){
        return {
            list:[],
        }
    },
    mounted(){
        axios({
			url: baseUrl.localhost + '/data/homeyouxuan.json'
		}).then(res=>{
			this.list = res.data;
			console.log(this.list);
		})
	
    }
}
</script>

<style>

</style>

