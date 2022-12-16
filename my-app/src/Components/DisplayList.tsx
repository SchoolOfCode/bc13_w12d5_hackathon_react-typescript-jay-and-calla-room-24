import React from 'react'
import { t_DisplayListProps, t_DisplayItemProps} from '../Types'
import DisplayItem from './DisplayItem'

export default function DisplayList({citiesMatch}: t_DisplayListProps){
  console.log(citiesMatch);

  return (
    <div>
      {citiesMatch}
    </div>
  )
}
