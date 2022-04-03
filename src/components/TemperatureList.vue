<template>
    <Button label="Click to create"
            class="td-App-Create p-button-raised p-button-rounded"
            @click="create"
            :disabled="editingRows.length"
    />
    <DataTable :value="temperatures"
               ref="table"
               v-model:editingRows="editingRows"
               editMode="row"
               dataKey="$idx"
               @row-edit-save="onRowEditSave"
               class="td-List"
               tableClass="td-List__table"
               :rowClass="rowClass"
               :reorderableColumns="true"
               :loading="loading"
               :lazy="true"
    >
        <Column field="id"
                header="ID"
                class="td-List-Column"
                style="width:40%">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]" placeholder="Enter id here" autofocus/>
            </template>
        </Column>
        <Column field="temperature"
                header="Temperature"
                class="td-List-Column"
                style="width:35%">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]" placeholder="Enter temperature here"/>
            </template>
        </Column>
        <Column :rowEditor="true" bodyStyle="text-align:right" class="td-List-Column" style="width:15%"></Column>
        <Column field="temperature"
                header=""
                class="td-List-Column"
                style="width:10%"
                bodyStyle="text-align:left">
            <template #body="slotProps">
                <Button v-if="slotProps" label="Delete" class="p-button-raised p-button-danger"
                        @click="deleteRow(slotProps.index)"/>
            </template>
        </Column>
    </DataTable>

</template>

<script lang="ts">
	import { Vue } from 'vue-class-component';
	import { DataTableCellEditCompleteEvent } from 'primevue/datatable';
	import { appStore } from '@/store';
	import { IListItem, TList } from '@/globalTypes';

	export default class TemperatureList extends Vue {
		private editingRows: TList = [];

		/**
		 * Add different classes for even and odd rows
		 * @param elem
		 */
		rowClass(elem: IListItem): string {
			const isEven = !(appStore.state.list.indexOf(elem) % 2);
			return `td-List-Row__${isEven ? 'even' : 'odd'}`
		}

		/**
		 * Prop for showing lazy indicator
		 */
		get loading(): boolean {
			return appStore.state.isLoading;
		}

		/**
		 * List of temperatures
		 */
		get temperatures(): TList {
			return appStore.state.list;
		}

		/**
		 * Create a new record
		 */
		private create(): void {
			const idx: number = this.temperatures.length + 1;

			appStore.actions.addToList({
				$idx: idx,
				id: 'Some id',
				temperature: '0'
			});
			this.editingRows = [{
				$idx: idx,
				id: 'Some id',
				temperature: '0'
			}];
		}

		/**
		 * Delete row by index
		 * @param idx
		 */
		deleteRow(idx: number): void {
			appStore.actions.delFromList(idx);
		}

		/**
		 * Update list after editing
		 */
		onRowEditSave(event: DataTableCellEditCompleteEvent): void {
			appStore.actions.updateList({
				idx: event.index,
				newValue: event.newData
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    ::v-deep(.td-List__table) {
        border-collapse: separate;
        border-spacing: 0 8px;
    }

    .td-List-Column {
        text-align: center;
    }

    ::v-deep(.td-List-Row__even) .td-List-Column {
        background: var(--surface-d);
    }
</style>
