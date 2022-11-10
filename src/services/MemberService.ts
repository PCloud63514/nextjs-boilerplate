import {GET} from '../utils/Api'

export async function getSignUpCode() {
    const response = await GET<string>('/v1/members/sign-code');
    return response.data;
}

