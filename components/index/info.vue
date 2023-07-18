<template>
	<view class="u-demo-block">

		<u-tag text="动态" type="primary" icon="tags-fill"></u-tag>
		
		<text class="u-demo-block__title"></text>
		<view class="u-demo-block__content">
			<view class="album" v-for="item in list" :key="item.id">
				<view class="album__avatar">
					<image src="../../static/选中我的.png" mode="" style="width: 32px;height: 32px;margin-bottom: 350px; margin-right: 30px;"></image>
				</view>
				<view class="album__content">
					<u--text :text="item.title" type="primary" bold size="17"></u--text>
					<view :style="{
								marginBottom: '8px',
								width: albumWidth + 'px'
							}">
						<u--text :text="item.content" :customStyle="{
										width: albumWidth + 'px'
									}"></u--text>
					</view>
					<u-album :urls="urls2" @albumWidth="width => albumWidth = width" multipleSize="68"></u-album>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'info',
		props: ["list"],
		data(){
			return{
				albumWidth: 0,
				urls2: [
									'https://cdn.uviewui.com/uview/album/1.jpg',
									'https://cdn.uviewui.com/uview/album/2.jpg',
									'https://cdn.uviewui.com/uview/album/3.jpg',
									'https://cdn.uviewui.com/uview/album/4.jpg',
									'https://cdn.uviewui.com/uview/album/5.jpg',
									'https://cdn.uviewui.com/uview/album/6.jpg',
									'https://cdn.uviewui.com/uview/album/7.jpg',
									'https://cdn.uviewui.com/uview/album/8.jpg',
									'https://cdn.uviewui.com/uview/album/9.jpg',
									'https://cdn.uviewui.com/uview/album/10.jpg',
								],
			}
		}

	}
</script>

<style lang="scss">
	.dt{
		display: flex;
	}
	.album{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 50px;
	}
</style>