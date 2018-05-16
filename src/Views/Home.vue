<template>
	<div class="container home">
		<!-- Hero image -->
		<img src="/public/profile.jpg" alt="andhikaribrahim: profile image" class="profile rounded-circle mx-auto d-block">
		<div class="clearfix"></div>
		<Jargon></Jargon>
		<div class="clearfix"></div>
		<br />
		<Skillset></Skillset>
	</div>
</template>

<script>
	import Jargon from 'Components/Home/Jargon';
	import Skillset from 'Components/Home/Skillset';
	export default {
		name: 'Home',
		components: {
			Jargon, Skillset
		}
	};
</script>