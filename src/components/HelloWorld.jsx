import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/index'
import style from './helloworld.module.css'
export default function HelloWorld() {
    const dispatch = useDispatch();
    const _msg = useSelector(state => state.msg);
    const ref = useRef();
    const setMsg = () => {
        let msg = ref.current.value;
        dispatch(actions.setMsg(msg))
    }
    useEffect(() => {
        let listener = document.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                let msg = ref.current.value;
                dispatch(actions.setMsg(msg));
            }
        })
        return () => {
            document.removeEventListener('keydown', listener)
        };
    }, []);
    return (
        <div className="container">
            <div className={style.h1}>{_msg}</div>
            <input className={style.input} type="text" ref={ref} />
            <button className={style.btn} onClick={() => setMsg()}>set message</button>
        </div>
    )
}