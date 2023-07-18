<template>
	<view class="index">
		<template>
			<u-search placeholder="搜索内容" ></u-search>
		</template>
		<u-divider ></u-divider>

		<!-- 	<scroll-view class="scroll" scroll-x="true">
			<view class="box">
				<view class="item">1</view>
				<view class="item">2</view>
				<view class="item">3</view>
				<view class="item">4</view>
				<view class="item">5</view>
				<view class="item">6</view>
				<view class="item">1</view>
				<view class="item">2</view>
				<view class="item">3</view>
				<view class="item">4</view>
				<view class="item">5</view>
				<view class="item">6</view>
			</view>
		</scroll-view> -->
		<swiper class="swiper" autoplay interval="3000" circular indicator-dots>
			<swiper-item class="sw">
				<image src="../../static/2.jpg"></image>
			</swiper-item>
			<swiper-item class="sw">
				<image src="../../static/3.jpg"></image>
			</swiper-item>
			<swiper-item class="sw">
				<image src="../../static/1.jpg"></image>
			</swiper-item>
		</swiper>
		<u-divider ></u-divider>
		<view class="header">
			<swiper :indicator-dots="false" class="swi">
				<swiper-item >
					<u-grid :border="true" class="grid-box" align="center">
						<u-grid-item >
							<u-icon   :size="22"></u-icon>
							<text class="grid-text">我的认养</text>
						</u-grid-item>
						<u-grid-item 
							>
							<u-icon   :size="22"></u-icon>
							<text class="grid-text">暂无</text>
						</u-grid-item>
						<u-grid-item @click="goTocash">
							<u-icon  name="/static/卖家购物车.png" :size="22"></u-icon>
							<text class="grid-text">我的交易 </text>
						</u-grid-item>
					</u-grid>
				</swiper-item>
			<!-- 	<swiper-item>
					<u-grid :border="true" class="grid-box" align="center">
						<u-grid-item :customStyle="{width:220+'rpx',height:220+'rpx'}"
							v-for="(item, index) in swiperList" :index="index + 9" :key="index">
							<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item" :size="22"></u-icon>
							<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
						</u-grid-item>
					</u-grid>
				</swiper-item> -->

			</swiper>
		</view>
		<recommend :list="listData"></recommend>

	</view>
</template>

<script>
	
	import recommend from '../../components/recommend/recommend.vue'
	import getList from '../../api/getList.js'
	import re from '../../api/re.js'
	export default {
		components: {
			recommend
		},
		data() {
			return {
				listData: {
					id: '',
					name: '',
					cover: '',
					price: ''
				},
				swiperList: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle'],

			}
		},
		onLoad() {
			console.log(this)
			
			re(this)


		},
		methods: {
			goTocash(){
				uni.$u.route({
					
					url:'pages/cashDetails/cashDetails'
				})
			}


		}
	}
</script>

<style lang="scss">
	.index {
		
	}

	.scroll {
		box-sizing: border-box;
		border: 1px solid skyblue;
		height: 220rpx;
		.box {
			height: 100rpx;
			white-space: nowrap;

			.item {
				margin-right: 10rpx;
				margin-bottom: 10rpx;
				width: 200rpx;
				height: 200rpx;
				background-color: blue;
				display: inline-block;
			}
		}
	}

	.swiper {
		height: 500rpx;

		.sw {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
	}

	.swi {
		height: 100rpx;
		margin-top: 50rpx;
		margin-bottom: 50rpx;
	}

	.grid-text {
		
		
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
	.grid-box{
	
	}
</style>