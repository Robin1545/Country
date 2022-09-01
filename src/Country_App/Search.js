import { useEffect, useState } from "react";
import style from './search.module.css';


export default function Search (props) {
    const [searchText, setSearchText] = useState('');

    function handleChange (e) {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        props.getSearchValue(searchText);
    },[searchText]);

    return (
        <div className= {style.div}>
            <input className= {style.input} type="text" placeholder="Search Country" onChange={handleChange} value={searchText} />
        </div>
    )
}