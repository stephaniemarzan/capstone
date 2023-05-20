import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, shoppingitem, setShoppingitem}) => {
  
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };

    const onFormSubmit = (event) =>{
        event.preventDefault();
        setShoppingitem([...shoppingitem, {id: uuidv4(), title: input, completed:false}]);
        setInput("");
    };
    return (
    <form onSubmit={onFormSubmit}>
        <div className="shopping-item-entry">
            <input type="text" placeholder="We need to buy..." className="shopping-list-item-input" value={input} required onChange={onInputChange}/>
            <button className="btn" type="submit">Add Shopping Item</button>
        </div>
    </form>
  );
};

export default Form;
