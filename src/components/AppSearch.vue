<template>
    <div>
        <div class="mui-content" style="padding:15px">
                <div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="">
                    <router-link tag='a' to='/home' class=' mui-icon  mui-pull-right' style='position:absolute; right:10px; z-index:9999; font-size:14px; color:#999; top:12px'>取消</router-link>
    
                </div>
                <div class="mui-content-padded">
                    <h5>热门搜索</h5>
                    <span class="mui-badge">牛仔裤</span>
                    <span class="mui-badge mui-badge-primary">上衣</span>
                    <span class="mui-badge mui-badge-success">裙子</span>
                    <span class="mui-badge mui-badge-warning">亲子套装</span>
                    <span class="mui-badge mui-badge-danger">省心套组</span>
                    <span class="mui-badge mui-badge-purple">针织衫</span>
                    <span class="mui-badge">牛仔裤</span>
                    <span class="mui-badge mui-badge-primary">亲子套装</span>
                    <span class="mui-badge mui-badge-success">最新上架</span>
                    <span class="mui-badge mui-badge-warning">亲子套装</span>
                    <span class="mui-badge mui-badge-danger">省心套组</span>
                    <span class="mui-badge mui-badge-purple">针织衫</span>
                    <span class="mui-badge mui-badge-purple">针织衫</span>
                    <span class="mui-badge mui-badge-purple">针织衫</span>
                    <span class="mui-badge mui-badge-purple">针织衫</span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
            mui.init({
                swipeBack: true //启用右滑关闭功能
            });
            //语音识别完成事件
            // document.getElementById("search").addEventListener('recognized', function(e) {
            //     console.log(e.detail.value);
            // });

            var nativeWebview, imm, InputMethodManager;
            var initNativeObjects = function() {
                if (mui.os.android) {
                    var main = plus.android.runtimeMainActivity();
                    var Context = plus.android.importClass("android.content.Context");
                    InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager");
                    imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);
                } else {
                    nativeWebview = plus.webview.currentWebview().nativeInstanceObject();
                }
            };
            var showSoftInput = function() {
                if (mui.os.android) {
                    imm.toggleSoftInput(0, InputMethodManager.SHOW_FORCED);
                } else {
                    nativeWebview.plusCallMethod({
                        "setKeyboardDisplayRequiresUserAction": false
                    });
                }
                setTimeout(function() {
                    var inputElem = document.querySelector('input');
                    inputElem.focus();
                    inputElem.parentNode.classList.add('mui-active'); //第一个是search，加上激活样式
                }, 200);
            };
            mui.plusReady(function() {
                initNativeObjects();
                showSoftInput();
            });
    }
}
</script>

<style>

</style>

