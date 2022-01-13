import React from 'react';
import Cutton from 'react-bootstrap/Button';
import PlayLogo from '../images/play.svg';
import StopLogo from '../images/stop.svg';
import ResetLogo from '../images/reload.svg';
import LapLogo from '../images/camera.svg';
import './Button.css';

const Button = (props) => {
    if(props.disabled)return (<div className='invisible'>
                            </div>);
    let class_name = '';
    let Logo = PlayLogo;
    if(props.text==='Start')
    {
        class_name='success';
        Logo = PlayLogo;
    }
    else if(props.text==='Stop')
    {
        class_name='danger';
        Logo = StopLogo;
    }
    else if(props.text==='Lap')
    {
        class_name='primary';
        Logo = LapLogo;
    }
    else{
        class_name='warning';
        Logo = ResetLogo;
    }
    return (
        <p className='butbox'>
            <Cutton variant={class_name}
                    onClick={()=>props.handleClick(props.text)}>
                    <img src={Logo} width="20" alt={props.text}/>
            </Cutton>
        </p>
	);
}
export default Button;