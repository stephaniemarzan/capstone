import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = ({linkValue}) => {
    const [shortenLink, setShortenLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchData = async () => {
        try{
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${linkValue}`);   
            setShortenLink(res.data.result.full_short_link);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
  
    useEffect(() => {
        if(linkValue.length){
            fetchData();
        }

    }, [linkValue]);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Oops! Something went wrong...</p>
    }

 return (
    <>
    {shortenLink && (
        <div>
        <p>{shortenLink}</p>
 
       <CopyToClipboard text={shortenLink}>
       <button>Copy Link</button>
       </CopyToClipboard>
        </div>

    )}
    </>
  )
}

export default LinkResult
