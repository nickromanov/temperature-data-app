import { TList, IMessageState } from '@/globalTypes';

export default class State {
	msgTimer: number | undefined;
	list: TList = [];
	editingRows: TList = [];
	isLoading: boolean = true;
	messageState: IMessageState = {
		isVisible: false,
		severity: 'info',
		message: 'Data is required'
	}
}
