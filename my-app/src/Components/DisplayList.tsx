import React from 'react'
import { t_DisplayListProps, t_DisplayItemProps, t_City} from '../Types'
import DisplayItem from './DisplayItem'
//import Button from './Button';

export default function DisplayList({setAllCities, citiesMatch}: t_DisplayListProps){
  console.log("DisplayList: ", citiesMatch);

  function deleteCity(resolvedAddress: string) {
    setAllCities(citiesMatch.filter((city:any) => { return city.resolvedAddress !== resolvedAddress }));
  }

  //let cName = "weather-child";

  /*
  if(citiesMatch[0].days.temp < 0) cName += " frozen";
  else if(citiesMatch.days[0].temp > 0 && citiesMatch.days[0].temp < 10) cName += " cold";
  else if(citiesMatch.days[0].temp > 0 && citiesMatch.days[0].temp < 10) cName += " cold";
*/
  if(citiesMatch !== undefined) {    
    return (
      <>
        {
            citiesMatch.map(({resolvedAddress, description, days}: any, index) => {
              return (<div className="weather-child">
                        <h1>{resolvedAddress}<button onClick={() => {deleteCity(resolvedAddress)}}>DELETE</button></h1>
                        <h2>{description}</h2>
                        <p>🌅 Sunrise: {days[0].sunrise}</p>
                        <p>🌇 Sunset: {days[0].sunset}</p>
                        <p>🌡 Temperature today: {days[0].temp}°C</p>
                        <hr />
                      </div>)
            })
        }
      </>
    )
  } else {
      return (
        <div>No results</div>
      )
  }
}
