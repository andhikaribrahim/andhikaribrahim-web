<template>
	<div class="projects container">
		<div class="row">
			<transition name="fade"
			 v-for="portfolio in portfolios"
			 v-bind:key="portfolio.id"
			>
				<Thumbnail-Loading 
					v-show="loading"
				 	class="col-4">
				</Thumbnail-Loading>
			</transition>		
			<transition 
				name="fade-in"
				v-for="portfolio in portfolios"
				v-bind:key="portfolio.title"
			>
				<Thumbnail
				 v-show="!loading"
				 v-bind:id="portfolio.id"
				 v-bind:title="portfolio.title"
				 v-bind:previewImage="portfolio.previewImage"
				 v-bind:description="portfolio.description"
				 v-bind:link="portfolio.link"
				 class="col-4"
				></Thumbnail>
			</transition>
		</div>
	</div>
</template>

<script>
	import Thumbnail from 'Components/Thumbnail';
	import ThumbnailLoading from 'Components/ThumbnailLoading';
	export default {
		components: {
			Thumbnail, ThumbnailLoading
		},
		mounted () {
			setTimeout(() => {
				this.loading = false;
			}, 1500);
		},
		data: () => {
			return {
				loading: true,
				portfolios: [
					{
						id: 0,
						title: 'Richard Rain Blog',
						previewImage: '/public/portfolios/richardrain.png',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maxime, fuga dolorem ducimus perspiciatis fugiat obcaecati accusamus inventore voluptates at eius facilis labore, iusto odio voluptas consectetur laborum velit distinctio?',
						link: 'https://richard-rain.com/'
					},
					{
						id: 1,
						title: 'Serenia Hills Landing Page',
						previewImage: '/public/portfolios/sereniahills.png',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maxime, fuga dolorem ducimus perspiciatis fugiat obcaecati accusamus inventore voluptates at eius facilis labore, iusto odio voluptas consectetur laborum velit distinctio?',
						link: 'https://serenia-hills.com/'
					},
					{
						id: 2,
						title: 'Perumperindo Landing Page',
						previewImage: '/public/portfolios/perumperindo.png',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maxime, fuga dolorem ducimus perspiciatis fugiat obcaecati accusamus inventore voluptates at eius facilis labore, iusto odio voluptas consectetur laborum velit distinctio?',
						link: 'https://perumperindo.co.id/'
					},
					{
						id: 3,
						title: 'Kredit Bijak',
						previewImage: '/public/portfolios/kreditbijak.png',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maxime, fuga dolorem ducimus perspiciatis fugiat obcaecati accusamus inventore voluptates at eius facilis labore, iusto odio voluptas consectetur laborum velit distinctio?',
						link: 'https://kreditbijak.com/'
					},
					{
						id: 4,
						title: 'Tryout PDI-P 2018',
						previewImage: '/public/portfolios/pdip.png',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maxime, fuga dolorem ducimus perspiciatis fugiat obcaecati accusamus inventore voluptates at eius facilis labore, iusto odio voluptas consectetur laborum velit distinctio?',
						link: 'http://tryoutpdiperjuangan2018.com/'
					},
				]
			}
		}
	};
</script>