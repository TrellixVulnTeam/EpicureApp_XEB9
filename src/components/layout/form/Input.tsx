import React, { Fragment, useState } from 'react';
import './Input.scss';

const Input: React.FC<{content: string, type:string, placeholder:string}> = (props) => {
    const [enteredInput, setEnteredInput]= useState('');
    const [notRadioOrCheckbox, setNotRadioOrCheckbox] = useState(props.type !== 'radio' && props.type !== 'checkbox');
    const changeInputHandler= (event:React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setEnteredInput(event.currentTarget.value);
    }
  return (
      <Fragment>
      {notRadioOrCheckbox && (    <><label htmlFor={props.content}>{props.content}</label><><input type={props.type} className="input" value={enteredInput} placeholder={props.placeholder} onChange={changeInputHandler} required></input><br /></></>)}
      {!notRadioOrCheckbox && (<div className='radio-input'><input type={props.type} name="input-name" value={props.content}></input> <label htmlFor="input-name">{props.content}</label><br></br></div>)}      
      </Fragment>
  )
}

export default Input;