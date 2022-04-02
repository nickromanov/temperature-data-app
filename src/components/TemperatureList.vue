<template>

    <DataTable :value="temperatures"
               v-model:editingRows="editingRows"
               editMode="row"
               dataKey="id"
               @row-edit-save="onRowEditSave"
               class="td-List"
               responsiveLayout="scroll"
               tableClass="td-List__table"
               :rowClass="rowClass"
               bodyStyle="text-align: center"

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
                style="width:40%">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]" placeholder="Enter temperature here"/>
            </template>
        </Column>
        <Column :rowEditor="true" bodyStyle="text-align:right" class="td-List-Column" style="width:20%"></Column>
    </DataTable>

</template>

<script lang="ts">
	import { Vue } from 'vue-class-component';
	import { DataTableCellEditCompleteEvent } from 'primevue/datatable';
	import { appStore } from '@/store';
	import { IListItem, TList } from '@/globalTypes';

	export default class TemperatureList extends Vue {
		private editingRows: [] = [];

		/**
		 *
		 * @param elem
		 */
		private rowClass(elem: IListItem): string {
			const isEven = !(appStore.state.list.indexOf(elem) % 2);
			return `td-List-Row__${isEven ? 'even' : 'odd'}`
		}

		get temperatures(): TList {
			return appStore.state.list;
		}

		onRowEditSave(event: DataTableCellEditCompleteEvent) {
			appStore.actions.updateList({
				idx: event.index,
				newValue: event.newData
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .td-List {
        max-width: 75%;
        margin: auto;
    }

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
