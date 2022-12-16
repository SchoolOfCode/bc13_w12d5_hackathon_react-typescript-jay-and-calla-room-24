import React from 'react'
import { t_DisplayListProps, t_DisplayItemProps} from '../Types'
import DisplayItem from './DisplayItem'

export default function DisplayList({citiesMatch}: t_DisplayListProps){
  console.log("DisplayList: ", citiesMatch);

  if(citiesMatch !== undefined) {
    return (
      <>
        {
            citiesMatch.map(({resolvedAddress, description, days, sunrise, sunset}: any) => {
              return (<div>
                        <h1>{resolvedAddress}</h1>
                        <p>{description}</p>
                        <p>🌅 Sunrise: {days[0].sunrise}</p>
                        <p>🌇 Sunset: {days[0].sunset}</p>
                        <p>🌡 Temperature today: {days[0].temp}°C</p>
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
