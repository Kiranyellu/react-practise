import React  from 'react';

const person = (props)=>{
    return (
    <div>
    <p onClick={props.click}>This is my name {props.name} my age is {props.age}</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    
    </div>
)
}
export default person;