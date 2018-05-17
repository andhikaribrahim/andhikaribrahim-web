<template>
	<div class="projects container">
		<div class="row d-flex justify-content-center">
			<Thumbnail v-for="n in 6"></Thumbnail>
		</div>
	</div>
</template>

<script>
	import Thumbnail from 'Components/Thumbnail';
	export default {
		components: {
			Thumbnail
		}
	};
</script>