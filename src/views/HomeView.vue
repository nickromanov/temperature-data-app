<template>
    <TemperatureList/>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';
	import TemperatureList from '@/components/TemperatureList.vue';

	@Options({
		components: {
			TemperatureList
		},
	})
	export default class HomeView extends Vue {
	}
</script>
