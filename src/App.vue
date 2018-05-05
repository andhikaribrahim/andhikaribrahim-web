<template>
	<div>
		<Navigation></Navigation>
		<div class="clearfix"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Navigation from 'Components/Navigation'
	export default {
		name: 'App',
		components:{
			Navigation
		}
	}
</script>
