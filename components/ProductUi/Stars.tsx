import React from 'react'
import ReactStars from 'react-stars'
const Stars = ({stars}:{stars:number}) => {
  return (
    <ReactStars
    count={5}
    size={20}
    value={stars}
    color2={'#ffa500'}
    edit={false} />
  )
}

export default Stars
