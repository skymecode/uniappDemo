<template>
	<view class="user">
		
		<u-toast ref="uToast"></u-toast>
		<view style="display:flex"><u-avatar size="60" mode="aspectFill" :src="src"></u-avatar>
		<view>用户名称:<u--text type="primary" :text="name"></u--text></view></view>
		 <u--input
		    placeholder="token"
		    border="surround"
		    v-model="info"
		    @change="change"
		  ></u--input>
		
		<u-action-sheet :show="show" @close="show = false" title="授权" :actions="actions5"
			@getuserinfo="getuserinfo"></u-action-sheet>
		<u-button type="primary" text="登录" @click="show = true"></u-button>
	</view>
</template>

<script>
	import request from '../../api/login.js';
	
	export default {
		data() {
			return {
				show: true,
				value6: 0,
				actions5: [{
					name: '授权登录',
					openType: 'getUserInfo',
					color: uni.$u.color['success']
				}],
				
				code: '',
				info: null,
				src: '',
				name: '',

			}
		},
		methods: {
			// 登录并获取用户信息
		getuserinfo(res){
			request(this,res);
		}
		}
	}
</script>

<style lang="scss">
	.user{
		margin-top: 100px;
	}
</style>