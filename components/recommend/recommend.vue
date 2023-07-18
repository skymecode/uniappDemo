<template>
	<view class="u-demo-block">
		<u-tag text="推荐" type="primary" icon="tags-fill"></u-tag>
		<view class="re">
				<uni-card spacing="5px"  v-for="item in list" :key="item.id" class="card">
					
				<image   @click="pre([item.cover])" style="width: 100%;" :src="item.cover"></image>
				<view slot="actions" class="card-actions">
					<view class="mid-crad">
					<u--text type="primary" :text="item.name"></u--text>
					<u--text type="error" :text="item.price"></u--text>
					</view>
							<view class="u-page__button-item">
								<view class="card-actions-item" @click="actionsClick('点赞')">
									
									<u-icon  v-if="!liked" style="height: 110rpx;" size="35" name="/static/空心.png"></u-icon>
									<u-icon  v-else  size="35" style="height: 110rpx;" name="/static/实心.png"></u-icon>
								</view>
											<u-button
											    text="查看详细"
											    size="large"
											    plain
											    shape="circle"
											    type="warning"
												style="width: 100%;"
											></u-button>
										</view>
					
				</view>
			</uni-card>
			</view>
				
		<text class="u-demo-block__title"></text>
	<!-- 	<view class="u-demo-block__content">
			<view class="album" v-for="item in list" :key="item.id">

				<view class="album__content">

					<view :style="{
								marginBottom: '8px',
								width: albumWidth + 'px'
							}">
						<u--text :text="item.content" :customStyle="{
										width: albumWidth + 'px'
									}"></u--text>
					</view>
					<u-album :urls="[item.cover]" singleMode="scaleToFill" ></u-album>
					<u--text :text="item.name" type="primary" bold size="17"></u--text>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		name: 'recommend',
		props: ["list"],
		data() {
			return {
           albumWidth: 0,
		   liked:false

			}
		},
		methods: {
			pre(e){
			uni.previewImage({
				urls:e
			})
			},
			actionsClick(action) {
			    if (action === '点赞') {
			      this.liked = !this.liked; // Toggle the liked property
			    }
			  }
		}

	}
</script>

<style lang="scss">
	.dt {
		display: flex;
	}
.re{
	
	
}
.card{
	 display: inline-block;
	margin-bottom: 20px;

}
.u-page__button-item{
	margin-top: 20rpx;
	display: flex;
}
</style>