<template>
	<view class="cashDetails">
		<!-- 当前余额 -->
		<view class="balance">
			<text class="content1">当前余额</text>
			<text class="content2">￥180.00</text>

			<!-- 提现 -->
			<view class="cashout" @click="getPage('/pages/cashOut/cashOut')">
				<image src="../../static/imgs/card.png" mode=""></image>
				<text class="content">提现</text>
			</view>
		</view>

		<!-- 明细记录 -->
		<view class="records">
			<text>明细记录</text>
		</view>
		<view class="box">
			<view class="boxitem" v-for="item in tradeList" :key="item.id">
				<!-- 获取数据 -->
				<view class="trade_title">{{item.title}}</view>
				<view class="trade_time">{{item.date}}</view>
				<view class="trade_price">{{item.price}}</view>
				<view class="line"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tradeList: []
			}
		},
		onLoad() {
			this.getTradeList()
		},
		methods: {
			//获取当前交易明细的列表数据
			getTradeList() {
				uni.request({
					url: "http://mock.apifox.cn/m1/2862832-0-default/getTrade",
					method: "GET",
					success: (res) => {
						if (res.data.code == 0) {
							console.log("响应的数据", res.data.data.tradeList)
							// 获取数据成功，把数据存在data的变量里，方便在页面使用
							this.tradeList = res.data.data.tradeList
						}
					}
				})
			},
			getPage(path) {
				uni.navigateTo({
					url: path
				})
			}
		},

	}
</script>

<style>
	page {
		background-color: #fafafa;

	}

	.cashDetails {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.balance {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 240rpx;
		background-image: url(../../static/imgs/bg3.png);
		background-size: 100% 100%;
	}

	.content1 {
		width: 112rpx;
		height: 40rpx;
		color: rgba(255, 255, 255, 1);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-left: 0rpx;
		margin-top: -100rpx;
		white-space: nowrap;
	}

	.content2 {
		width: 246rpx;
		height: 84rpx;
		color: rgba(255, 255, 255, 1);
		font-size: 60rpx;
		font-family: PingFangSC-regular;
		margin-left: -120rpx;
		margin-top: 42rpx;
		white-space: nowrap;
	}

	.cashout {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 160rpx;
		height: 52rpx;
		border-radius: 40rpx;
		margin-top: -10rpx;
		margin-left: 212rpx;
		background-color: rgba(250, 250, 250, 1);
	}

	.cashout image {
		width: 32rpx;
		height: 32rpx;
		margin-top: 12rpx;
		margin-left: 32rpx;
	}

	.content {
		width: 48rpx;
		height: 34rpx;
		margin-top: 12rpx;
		margin-left: 20rpx;
		color: rgba(59, 180, 96, 1);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		white-space: nowrap;
	}

	.records {
		width: 112rpx;
		height: 40rpx;
		margin-top: 36rpx;
		margin-left: -565rpx;
		color: rgba(51, 51, 51, 1);
		font-size: 28rpx;
		font-family: PingFangSC-medium;
		white-space: nowrap;
	}

	.box {
		width: 690rpx;
		/* height: 984rpx; */
		border-radius: 20rpx;
		background-color: #fff;
		margin: 0 auto;
		margin-top: 24rpx;
	}

	.trade_title {
		width: 156rpx;
		height: 36rpx;
		margin-top: 40rpx;
		margin-left: 44rpx;
		color: rgba(16, 16, 16, 1);
		font-size: 26rpx;
		font-family: PingFangSC-medium;
		white-space: nowrap;
	}

	.trade_time {
		width: 256rpx;
		height: 34rpx;
		margin-top: 18rpx;
		margin-left: 46rpx;
		color: rgba(153, 153, 153, 1);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		white-space: nowrap;
	}

	.trade_price {
		width: 66rpx;
		height: 36rpx;
		margin-top: -60rpx;
		margin-left: 560rpx;
		color: rgba(59, 180, 96, 1);
		font-size: 26rpx;
		font-family: PingFangSC-medium;
		white-space: nowrap;
	}

	.line {
		width: 608rpx;
		height: NaNpx;
		margin-top: 50rpx;
		margin-left: 42rpx;
		border: 1px solid rgba(187, 187, 187, 1);
		opacity: 0.22;
	}
</style>