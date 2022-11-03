import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import LeftSection from './leftSection/LeftSection'
import RightSection from './rightSection/RightSection'
import "../../styles/mainPage/MainPage.scss"
import { useEffect } from 'react'
function MainPage() {

  useEffect(() => {
  }, [])
  
  
  return (
    <div className='body-container'>
      <div className="body-leftSection">
        <LeftSection />
      </div>
      <div className="body-rightSection">
        <RightSection />
      </div>
    </div>
  )
}

export default MainPage