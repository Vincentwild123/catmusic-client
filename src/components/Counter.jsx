import React from 'react'
import * as actions from '../actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import style from './counter.module.css'
import testNet from '../api/myapis/testNet.js';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
    return (
        <div className={style.container}>
            <div className={style.count}>{count}</div>
            <button className={style.btn} onClick={() => dispatch(actions.incCount())}>ADD</button>
            <button className={style.btn} onClick={() => dispatch(actions.decCount())}>DEC</button>
            <button className={style.btn} onClick={() => testNet('http://localhost:3000/')}>test axios</button>
        </div>
    )
}