import {useState } from "react";

const LinkShortener = ({setLinkValue}) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setLinkValue(value);
        setValue("");
    }

  return (
    <div className="linkEntry">
        <h2>URL entry</h2>
        <div>
            <input 
            type="text" 
            placeholder='Enter a link to shorten it'
            value={value}
            onChange={e => setValue(e.target.value)} />
        <button onClick={handleClick}>Shorten Link</button>
        </div>
    </div>
  )
}

export default LinkShortener
