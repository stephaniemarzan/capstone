import React from 'react'

const ShoppingItem = ({shoppingitem, setShoppingitem}) => {
  return (
    <div>
      {shoppingitem.map((shoppingitem)=> (
          <div className="shopping-list-items">
            <li key={shoppingitem.id}>
                <input type="text" value={shoppingitem.title} 
                onChange={(event) => event.preventDefault()}/>

            </li>
          </div>
      )
      )}
    </div>
  );
};

export default ShoppingItem;
