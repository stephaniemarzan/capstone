import React, {useState} from "react";
import Header from "./components/header";
import Form from "./components/form";
import ShoppingItem from "./components/ShoppingItem";
import './App.css';
import LinkShortener from "./components/LinkShortener";
import LinkResult from "./components/LinkResult";

const App = () => {
  const [input, setInput] = useState ("");
  const [shoppingitem, setShoppingitem ] = useState ([]);
  const [linkValue, setLinkValue] = useState ("");
  return (
    <div className="container">
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          
          input={input}
          setInput={setInput}
          shoppingitem={shoppingitem}
          setShoppingitem={setShoppingitem}
          />
        </div>
        <div>
          <ShoppingItem
          shoppingitem={shoppingitem}
          setShoppingitem={setShoppingitem}
          />
        </div>
        <div>
          <LinkShortener setLinkValue = {setLinkValue} />
        </div>
         <LinkResult linkValue={linkValue}/>
      </div>
    </div>
  );
};

export default App;
