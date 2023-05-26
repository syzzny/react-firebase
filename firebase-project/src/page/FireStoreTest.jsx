import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc, where, query } from 'firebase/firestore';
import { db } from '../database/firebase';
import { current } from '@reduxjs/toolkit';


export default function FireStoreTest() {

    const [users, setUsers] = useState([]);
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [memo, setMemo] = useState('');
    const [done, setDone] = useState('');
    // const [update, setUpdate] = useState('');


    // 수정될 값 
    const [updateMemo, setUpdateMemo] = useState();
    const [updateEndDate, setUpdateEndDate] = useState();

    // 검색된 값
    const [search, setSearch] = useState('');

    // 검색된 user값
    const [searchUser, setSearchUser] = useState();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const querySnapshot = await getDocs(collection(db, 'readingbooks'));
        const dataArray = [];
        querySnapshot.forEach((doc) => {
            dataArray.push({
                id: doc.id,
                ...doc.data()
            });
        });
        setUsers(dataArray);
    }

    const addBook = async () => {
        try {
            const currentDate = new Date().toLocaleString();
            setStartDate(currentDate);
            setStartDate(new Date().toLocaleString());
            const docRef = await addDoc(collection(db, 'readingbooks'), {
                title,
                writer,
                startDate: currentDate,
                endDate,
                memo,
                done
            });
            console.log('Document written with ID:', docRef.id);
            getData();
        } catch (e) {
            console.error('Error adding document:', e);
        }
    };

    const deleteBook = async (id) => {
        await deleteDoc(doc(db, 'readingbooks', id));
        getData();
    };

    const updateBook = async (id) => {
        setUpdateEndDate(new Date().toLocaleString());
        // updateMemo의 값이 존재하는 경우에만 memo 필드 값을 업데이트합니다.
        const updateData = {};
        updateData.memo = updateMemo;

        // updateEndDate의 값이 존재하는 경우에만 endDate 필드 값을 업데이트합니다.
        updateData.endDate = updateEndDate;

        if (updateMemo) {
            await updateDoc(doc(db, 'readingbooks', id), updateData);
            getData();
        }

    };

    const onSearch = async () => {
        const q = query(collection(db, "readingbooks"), where("title", "==", search));

        const querySnapshot = await getDocs(q);
        let dataArray = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            dataArray.push({
                id: doc.id,
                ...doc.data()
            });
        });
        setSearchUser(dataArray);
    };

    return (
        <div>
            <h3>Reading Books Collection</h3>
            <h4>Add book</h4>
            <label className="label-list">Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <label className="label-list">Writer: </label>
            <input type="text" value={writer} onChange={(e) => setWriter(e.target.value)} />
            <br />
            <button className='listbtn' onClick={addBook}>Add</button>
            <br />
            <input placeholder="Enter the title" type="text" onChange={(e) => setSearch(e.target.value)} />
            <button className='searchbtn' onClick={onSearch}>Search</button>
            {
                // 검색결과 출력
                searchUser && searchUser.map((user) => (
                    <div>
                        <p>Title: {user.title}</p>
                        <p>Writer: {user.writer}</p>
                        <p>Start Date: {user.startDate}</p>
                    </div>
                ))
            }
            <h4>Books</h4>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <p>Title: {user.title}</p>
                        <p>Writer: {user.writer}</p>
                        <p>Start Date: {user.startDate}</p>
                        <p>Memo: {user.memo}</p>
                        <p>End Date: {user.endDate}</p>
                        <button className='deletebtn' onClick={() => deleteBook(user.id)}>Delete</button>
                        <br />
                        <input className='memoinput' type="text" onChange={(e) => { setUpdateMemo(e.target.value) }} />
                        <br />
                        <button className='updatebtn' onClick={() => { updateBook(user.id) }}>Update</button>
                    </div>

                ))
            }

        </div>
    )
}
