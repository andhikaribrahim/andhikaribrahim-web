<template>
	<div>
		<!-- <Navigation></Navigation>
		<div class="clearfix"></div> -->
		<router-view></router-view>
		<div class="clearfix"></div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Navigation from 'Components/Navigation'
	import Footer from 'Components/Footer'
	export default {
		name: 'App',
		components:{
			Navigation, Footer
		}
	}
</script>
