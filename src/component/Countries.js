import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(100);
    const [selectedContinent, setSelectedContinent]=useState("");
    const radios = ["Afrique", "Europe", "Asie", "Oceanie","Amérique"];

    useEffect(() => {
        if(playOnce){
            axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag").then((res) => {
                setData(res.data)
                setPlayOnce(false);
                setRangeValue(res.data.length);
            });
            
        }
        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a,b) => {
                return b.population - a.population;
            });
            sortedArray.length = rangeValue;
            setSortedData();
        };
        sortedCountry();

    },[data, rangeValue, playOnce]//pour ne faire la requete qu'une fois on ajoute des les [] vides
    );

    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="{sortedData.length}" value={rangeValue} onChange = {(e) => setRangeValue(e.target.value)} />
                <ul>
                    {radios.map((radio)=>{
                        return(
                            <li key={radio}>
                                <input  type="radio" value={radio} id={radio} checked={radio===selectedContinent} onChange = {e => setSelectedContinent(e.target.value)}/>
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        );
                    }
                    )}
                </ul>
            </div>
            <ul className="countries-list">
                {sortedData
                .filter(country=>country.region.includes(selectedContinent))
                .map((country) => (<Card country={country} key={country.name}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;