import React from 'react'
import Icon from '../Icon/Icon'
import './Card.css'
function Card({player,onPlay,index,gameEnd}) {
    let icon=<Icon/>//no prop is passed hence by default pen icon
    if(player=='X')
    {
        icon=<Icon name="cross"/>
    }
    else if(player=='O')
    {
        icon=<Icon name="circle"/>
    }
  return (
    <div className='card' onClick={()=>{
      !gameEnd &&  player=="" &&onPlay(index)//player="" to assure that the block that has already visited shoudnt be visited again
    }}>
      {icon}
    </div>
  )
}

export default Card
