import {GET} from '../utils/Api'

export async function getSignInCode() {
    const response = await GET<string>('/v1/auth/sign-code');
    return response.data;
}

// id & password NotBlank Validation Check
// getSignInCode
// encrypt
// send id & password(encryptedPassword)
// response & header check
// accessToken Save To Stores