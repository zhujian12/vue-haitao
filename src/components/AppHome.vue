<template>
<div>
	<app-header></app-header>
	<app-content></app-content>
	<app-footer></app-footer>
</div>
</template>



<script>
import AppHeader  from '../common/AppHeader.vue';
import AppFooter  from '../common/AppFooter.vue';
import AppContent from '../common/AppContent.vue';

export default {
	

	components:{AppHeader,AppFooter,AppContent},
	mounted(){
		


	mui.init({
        swipeBack:true //启用右滑关闭功能;
    });
    var slider = mui("#slider");
    // document.getElementById("switch").addEventListener('toggle', function(e) {
    //     if (e.detail.isActive) {
    //         slider.slider({
    //             interval: 5000
    //         });
    //     } else {
    //         slider.slider({
    //             interval: 0
    //         });
    //     }
	// });
	mui.init();
	}
}
</script>

<style>

</style>

