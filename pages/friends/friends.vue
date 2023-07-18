<template>
	<view>
		<template>
			<u--image src="https://content.skyscnr.com/m/1dbce38654447cf8/original/eyeem_129485062-jpg.jpg?crop=1224px:647px&quality=100&position=attention"  mode="aspectFill" width="100%"></u--image>
		</template>
		<info :list="listData"></info>
	</view>
</template>

<script>
	import info from '../../components/index/info.vue'
	import getList from '../../api/getList.js'
	export default {
		components: { 
			info
			},
		data() {
			return {
				listData:{
					id:'',
					title:'',
					content:'',
					time:''
				}
			}
		},
		onLoad() {
		console.log(this)
		getList(this)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
