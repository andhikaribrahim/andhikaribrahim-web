<template>
	<a href="#/portfolio" :class="btnStyle">{{ btnText }}</a>
</template>

<script>
	export default {
		name: "Button",
		props: [
			/**
			 * btnText: [Props] [String]
			 * Button Text
			 */
			'btnText',
			/**
			 * btnStyle : [Props] [String]
			 * Bootstrap 4 color schemes
			 * e.g: primary, secondary, success, etc.
			 * See Example: https://getbootstrap.com/docs/4.0/components/buttons/
			 */
			'btnStyle',
			/**
			 * btnOutline: [Props] [Boolean]
			 * Bootstrap 4 Button Outline
			 * default: false
			 */
			'btnOutline',
			/**
			 * btnType: [Props] [String]
			 * Bootstrap 4 Button type
			 * value => link, button, input
			 */
			'btnType',
			/**
			 * btnInputType: [Props] [String]
			 * Button input types required if btnType[input] is selected.
			 * value => button, submit, reset
			 */
			'btnInputType',
			/**
			 * btnSize: [Props] [String],
			 * Bootstrap 4 Button size
			 * value => lg, sm, xs, md
			 */
			'btnSize',
			/**
			 * btnBlock: [Props] [Boolean]
			 * Bootstrap 4 Button block
			 * default: false
			 */
			'btnBlock',
			/**
			 * btnDisabled: [Props] [Boolean]
			 * Set disabled button from props
			 * default: false
			 */
			'btnDisabled',
			/**
			 * to: [Props] [String]
			 * Set link/function target
			 */
			'to',
		]
	};
</script>