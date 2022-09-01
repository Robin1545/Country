import style from "./country.module.css";

export default function Country (props) {
    const {name,capital,area,population,flags} = props.country;

    function handleClick (CountryName) {
        props.removeCountry(CountryName);
    }

    return (
        <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag} />
            <h3>Name : {name.common}</h3>
            <h4>Capital : {capital}</h4>
            <h4>Area : {area}</h4>
            <h4>Population : {population}</h4>
            <button className={style.btn} onClick={() => {
                handleClick(name.common)
            }}>
                Remove
            </button>
        </div>
        </article>
    )
}