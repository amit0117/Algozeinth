import React from 'react'
import Box from './Box'
import RightCard from './RightCard'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="lfooter">
       <div className="ltemp">
        <div className="text">
            Invest in skills, <span className='earn'>earn 10X </span>
            of what you paid.
        </div>
        <div className="lefttxt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos non temporibus ea facere exercitationem numquam esse pariatur expedita consequuntur quod!
        </div>
       </div>
       <div className='hi'><Box/></div>
      
      </div>
      <div className="rfooter">
 <RightCard/>
      </div>
    </div>
  )
}
