import React from 'react';
import './Clock.css';
const Clock = (props) => {
    let min = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2);
    let sec = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2);
    let ms  = ("0" + ((props.time / 10) % 100)).slice(-2);
    return (
        <div className='h1'>
            {min} <small>m</small> : {sec} <small>s</small>  : {ms}
        </div>
	);
}
export default Clock;