import React from 'react'
import HeroSec from '../../Components/HeroSec/HeroSec'
import Circles from '../../Components/Circles/Circles'
import SecondSlider from '../../Components/SecondSlider/SecondSlider'
import Different from '../../Components/Different/Different'
import CommonQ from '../../Components/CommonQ/CommonQ'
import CounterUp from '../../Components/CounterUp/CounterUp'

const Home = () => {
  return (
    <div>
      <HeroSec/>
      <Circles/>
      <SecondSlider/>
      <Different/>
      <CommonQ/>
      <CounterUp/>
    </div>
  )
}

export default Home