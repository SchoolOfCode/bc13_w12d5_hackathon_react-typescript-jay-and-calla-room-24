import React from 'react'
import { t_DisplayListProps, t_DisplayItemProps} from '../Types'
import DisplayItem from './DisplayItem'

export default function DisplayList({citiesMatch}: t_DisplayListProps){
  console.log("DisplayList: ", citiesMatch);

  if(citiesMatch !== undefined) {
    return (
      <>
        {
            citiesMatch.map(({resolvedAddress, description}: any) => {
              return (<div>
                        <p><h1>{resolvedAddress}</h1></p>
                        <p>{description}</p>
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
