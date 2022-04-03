import { IListItem } from '@/globalTypes';

export interface IUpdatePayload {
	idx: number;
	newValue: IListItem;
}