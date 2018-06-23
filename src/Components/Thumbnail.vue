<template>
	<div class="card-deck">
		<div class="card">
			<img :src="previewImage" alt="Card image cap" class="card-img">
			<div class="card-body">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-text">{{ description}}</p>
			</div>
			<div class="card-footer">
				<small class="text-muted"><a href="#">Detail</a></small> |
				<small class="text-muted"><a target="_blank" :href="link">Visit Site</a></small>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Thumbnail",
		props: [
			'title', 'previewImage', 'description', 'link', 'id'
		]
	};
</script>