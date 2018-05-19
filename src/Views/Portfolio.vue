<template>
	<div class="projects container text-center">
		<h3 class="projects-title">Recent Work</h3>
		<div class="row d-flex justify-content-center">
			<Thumbnail v-for="n in 6"></Thumbnail>
		</div>
		<Button
			btn-text="Load More.."
			btn-style="btn btn-light"
			class="projects-load"
		></Button>
	</div>
</template>

<script>
	import Thumbnail from 'Components/Thumbnail';
	import Button from 'Components/Button';
	export default {
		components: {
			Thumbnail, Button
		}
	};
</script>