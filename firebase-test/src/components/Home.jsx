import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import css from './style.css'

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>로그인에 실패하면 HOME으로 돌아옵니다.</p>
            <Link to='./loginform'>로그인</Link>
        </div>
    )
}
