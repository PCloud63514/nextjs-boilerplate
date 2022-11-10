import React, {useState} from 'react'
import "./styles.css";

export default function LoginFragment() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    window.android
    return (
        <div id={'App'}>
            <input placeholder={'아이디'} onChange={e => setLoginId(e.target.value)}/>
            <div id="divider" />
            <input type={'password'} placeholder={'패스워드'} onChange={e => setPassword(e.target.value)}/><br/>
            <button
                onClick={()=>{}}>LOGIN</button>
        </div>
    )
}
