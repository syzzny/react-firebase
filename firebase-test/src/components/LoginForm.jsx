import React, {useState} from 'react'
import { auth } from '../database/firebase';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";



export default function LoginForm() {
    // input 태그에 있는 값을 가져오는 state
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// react가 실행되는 동안에 저장될 user데이터
// accessToken은 세션이나 브라우저에 저장해서 로그인확인
// { email, uid, displayName }
const [user, setUser] = useState(null);


// 비밀번호 기반 계정 만들기
const onEmailLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 회원가입 성공
            const user = userCredential.user;
            console.log(user)
            setUser(
                {
                    uid : user.uid,
                    email : user.email,
                    displayName : user.displayName
                }
            )
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if(errorCode == "auth/email-already-in-use"){
                alert('동일한 이메일이 있습니다')
            }
            else if(errorCode == "auto/weak-password"){
                alert('비밀번호를 6자리 이상 적어주세요')
            }
        });
}

const onClickLogin = () =>{
    // async와 await 를 이용하여 파이어베이스메소드 사용
        // 비동기함수로 만들기 
        async function getLogin() {
            // 오류가 날 가능성이 있는 모든 코드를 try 에작성
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log(user);
                setUser(
                    {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    }
                )

            }
            // 오류가 났을때 실행할 코드
            // 오류가 나면 화면이 멈추는 것이아니라 
            // catch를 실행하고 다른 아래쪽의 코드를 실행
            catch (error) {
                console.log(error.code, error.message)
                if (error.code == "auth/user-not-found" ||
                    error.code == "auth/wrong-password") {
                    alert("없는 이메일이거나 비밀번호가 잘못되었습니다")
                }
            }
        }
        getLogin();
}
    return (
        <div>
            <h2>로그인 / 회원가입 페이지입니다</h2>
            <form className='info' onSubmit={onEmailLogin}>
                <label className="email">email</label>
                <input type="email" required
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}/>
                <br></br>
                <label className="pw">password</label>
                <input type="password" required
                    onChange={(e) => {setPassword(e.target.value)}}
                    value={password}/>
                <button className='join' type='submit' value= "회원가입">회원가입</button>
                <button className='login' type='button' onClick={onClickLogin}>로그인</button>
            </form>
            <h3>{user ? `${user.email}님 로그인에 성공하였습니다.` : "로그인되지 않았습니다."}</h3>
        </div>
    )
}
