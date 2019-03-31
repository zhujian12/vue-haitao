<template>
    <div>
        <header class="mui-bar mui-bar-nav aui-header b-line">
            <router-link to='/home' class='mui-icon mui-icon-arrowleft mui-pull-left'></router-link>
            
            <h1 class="mui-title">注册</h1>
            <a class="mui-icon mui-icon-paperplane mui-pull-right"></a>
        </header>
        <div class="mui-content">
            <div class="devider b-line"></div>
            <form class="mui-input-group">
                <div class="mui-input-row b-line">
                    <label>用户名：</label>
                    <input type="text" placeholder="请输入您的用户名" class='username' v-model="username">
                </div>
                <div class="mui-input-row b-line">
                    <label>密码：</label>
                    <input type="password" class="mui-input-clear password" placeholder="请输入您的密码" data-input-clear="5" v-model="password"><span class="mui-icon mui-icon-clear mui-hidden"></span>
                </div>
                <div class="mui-input-row b-line">
                    <label>确认密码：</label>
                    <input type="text" placeholder="请输入您的用户名">
                </div>
                <div class="mui-input-row b-line">
                    <label>昵称：</label>
                    <input type="text" class="mui-input-clear" placeholder="请输入您的昵称" data-input-clear="5" v-model="nikename"><span class="mui-icon mui-icon-clear mui-hidden"></span>
                </div>

                <div class="mui-button-row" style="padding-top:20px; padding-bottom:10px; height:auto">
                    <a type="button" class="mui-btn mui-btn-primary" style="width:90%; padding:10px 0" @click="reg">立即注册</a>
                    <div>{{ this.error }}</div>
                </div>
                <div style="padding-bottom:10px; text-align:right; padding-right:15px">
                    <router-link to='/login'>已有账号 登录</router-link>
                    
                </div>
            </form>


        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            username:'',
            password:'',
            nikename:'',
            error:''
        }
    },
    methods:{
        reg(){
                    axios({
                    url:'/api/reg',
                    method:'post',
                    data:{username:this.username,password:this.password,nikename:this.nikename}
                }).then((res)=>{
                    this.error = res.data.msg
                    if(res.data.error == 0){
                        setTimeout(()=>{
                            console.log(1)
                            this.$router.push("/login")
                        },2000)
                    }
                })
        }
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