<template>
	<vue-content-loading :width="400" :height="280" :primary="'#d1d1d1'" :secondary="'#c4c4c4'">
    <rect x="0" y="0" rx="4" ry="4" width="286" height="90" />
    <rect x="0" y="110" rx="4" ry="4" width="280" height="12" />
    <rect x="0" y="140" rx="4" ry="4" width="262" height="8" />
    <rect x="0" y="155" rx="4" ry="4" width="234" height="8" />
    <rect x="0" y="170" rx="4" ry="4" width="185" height="8" />
    <rect x="0" y="220" rx="4" ry="4" width="50" height="8" />
  	<rect x="60" y="220" rx="4" ry="4" width="50" height="8" />
  </vue-content-loading>
</template>

<script>
	import VueContentLoading from 'vue-content-loading';
	export default {
		name: 'ThumbnailLoading',
		components: {
			VueContentLoading
		}
	};
</script>

<style scoped>
	.row svg {
		width: 100%;
		height: 353px;
	}
</style>