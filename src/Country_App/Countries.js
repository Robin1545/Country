import { v4 as uuidv4 } from 'uuid';
import style from './countries.module.css';
import Country from './Country';


export default function Countries (props) {
    return (
        <section className={style.countries}>
            {props.countries.map((country) => {
                const countryC = {country, id:uuidv4()}
                return <Country key={countryC.id} {...countryC} removeCountry={props.removeCountry} />
            })}
        </section>
    )
}