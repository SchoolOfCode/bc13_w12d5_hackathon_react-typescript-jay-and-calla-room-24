import React from 'react'
import { t_DisplayListProps, t_DisplayItemProps} from '../Types'
import DisplayItem from './DisplayItem'

export default function DisplayList({citiesMatch}: t_DisplayListProps){
  console.log("DisplayList: ", citiesMatch);
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
            citiesMatch.map(({resolvedAddress, description, days}: any) => {
              return (<div className="weather-child">
                        <h1>{resolvedAddress}</h1>
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
