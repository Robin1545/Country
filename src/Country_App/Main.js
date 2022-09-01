import { useEffect, useState } from 'react';
import Countries from './Countries';
import './main.module.css';
import Search from './Search';



export default function Main () {

    const [mainData, setMainData] = useState([]);
    const [duplicateData, setDuplicate] = useState(mainData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => {
            if(!res.ok){
                throw Error ('Failed to fetch data')
            }else{
                return res.json()
            }
        })
        .then(data => {
            setMainData(data);
            setDuplicate(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        })
    },[]);

    function removeCountry (countyrName) {
        let filterCountriesList = mainData.filter((country) => country.name.common !== countyrName)
        setDuplicate(filterCountriesList);  
    };

    function getSearchValue (searchText) {
            let Text = searchText.toLowerCase();
            const newCountries = mainData.filter((country) => {
                const element = country.name.common.toLowerCase();
                return element.startsWith(Text);
            })
            setDuplicate(newCountries);
    };

    

    return (
        <div>
            <h1 style={{textAlign:'center'}}>COUNTRY LIST</h1>
            {loading && <p style={{textAlign:'center'}}>Loading...</p>}
            {!error && !loading && <Search getSearchValue={getSearchValue}/>}
            {error && <p style={{textAlign:'center'}}>{error}</p>}
            {mainData && <Countries countries={duplicateData} removeCountry = {removeCountry}/>}
        </div>
    )
}