import React from 'react';
import './Record.css';
const Clock = (props) => {
    return (
        <div className='list'>
            {props.record.map((item, index)=>{
                let min = ("0" + Math.floor((item / 60000) % 60)).slice(-2);
                let sec = ("0" + Math.floor((item / 1000) % 60)).slice(-2);
                let ms  = ("0" + ((item / 10) % 100)).slice(-2);
                return <p className='h5'>{index+1}. {min} : {sec} : {ms}</p>;
            })}
        </div>
	);
}
export default Clock;