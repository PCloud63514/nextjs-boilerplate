import {GET} from '../utils/Api'

export async function getTimeLineList() {
    const response = await GET<any>('/v1/time-line?target=qwerty123');
    return response.data;
}