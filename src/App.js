import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import Clock from './components/Clock';
import Record from './components/Record';
import './App.css';

function updateRecords(record, time)
{
  record.push(time);
  return record;
}
export default function App() {
  const [record, setRecord] = useState([]);
  const [isActive, setActive] = useState(false);
  const [isInactive, setInactive] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
  
    if (isActive && !isInactive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isInactive]);
  useEffect(()=>{
    console.log(disabled);
  }, [disabled])
  function onStart()
  {
    setActive(true);
    setInactive(false);
  }
  function onStop()
  {
    setActive(false);
    setInactive(true);
    setDisabled(true);
  }
  function onLap()
  {
    setRecord(updateRecords(record, time));
  }
  function onReset()
  {
    setRecord([]);
    setActive(false);
    setInactive(true);
    setDisabled(false);
    setTime(0);
  }

  function handleClick(id){
    if(disabled && id!=="Reset")return;
    console.log('you pressed '+id);
    if(id==="Start") onStart();
    else if(id==="Stop") onStop();
    else if(id==="Lap") onLap();
    else onReset();
  }
  return (
    <div  className='container'>
      <Clock className='timer' time={time}></Clock>
      <div className='btn-group'>
        <Button text={"Start"} handleClick={handleClick} disabled={disabled||isActive}></Button>
        <Button text={"Stop"} handleClick={handleClick} disabled={disabled||!isActive}></Button>
        <Button text={"Lap"} handleClick={handleClick} disabled={disabled||!isActive}></Button>
        <Button text={"Reset"} handleClick={handleClick} disabled={isInactive && time===0}></Button>
      </div>
        <Record record={record}></Record>
    </div>
  );
}
