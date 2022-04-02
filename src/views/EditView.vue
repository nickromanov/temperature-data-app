<template>
    <div class="td-AddPage">
        <form class="td-AddForm__wrapper">
            <InputText class="td-AddForm__input" placeholder="Enter id here" v-model="id"></InputText>
            <InputText class="td-AddForm__input" placeholder="Enter temperature here" v-model="tempData"></InputText>
        </form>

        <Button label="Add" class="p-button-raised p-button-rounded" @click="saveData"/>
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
		saveData(): void {
			appStore.actions.addToList({id: this.id, temperature: this.tempData});
		}
	}
</script>
<style lang="scss" scoped>

    .td-AddForm__wrapper {
        display: flex;
        flex-direction: column;
        max-width: 75%;
        margin: 7px auto;
    }

    .td-AddForm__input {
        margin-bottom: 8px;
    }

</style>