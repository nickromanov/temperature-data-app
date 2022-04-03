import { JSONBinResponse } from '@/globalTypes';

import axios, { AxiosResponse } from 'axios'

export type TAPIResp = AxiosResponse<JSONBinResponse>;

/**
 * Load async data from json remote storage
 */
export async function getData(): Promise<TAPIResp | void> {
	return await axios.get('https://api.jsonbin.io/v3/b/624977a51a1b610f084a9181/latest', {
		headers: {
			'X-Master-Key': '$2b$10$shEVfAF.R/H6cdhWSp1Z0uvllLFXmlEkV5bPolXrZwsr8m/l9MwfC'
		}
	});
}
