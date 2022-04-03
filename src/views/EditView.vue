<template>
    <div class="td-AddPage">
        <Button label="Click to create" class="td-App-Create p-button-raised p-button-rounded" @click="create"/>
        <form class="td-AddForm__wrapper">
            <InputText class="td-AddForm__input" placeholder="Enter id here" v-model="id"></InputText>
            <InputText class="td-AddForm__input" placeholder="Enter temperature here" v-model="tempData"></InputText>
        </form>
    </div>
</template>
<script lang="ts">
	import { Vue } from 'vue-class-component';
	import { appStore } from '@/store'

	export default class About extends Vue {
		protected id: string = '';
		protected tempData: string = '';

		/**
		 * Saves data to storage.list
		 */
		create(): void {
			appStore.actions.addToList({
				$idx: appStore.state.list.length + 1,
				id: this.id,
				temperature: this.tempData
			});
		}
	}
</script>
<style lang="scss" scoped>

    .td-AddForm__wrapper {
        display: flex;
        flex-direction: column;
        margin: 7px auto;
    }

    .td-AddForm__input {
        margin-bottom: 1rem;
    }

</style>