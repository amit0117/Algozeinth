import React from 'react'
import pricing from '../Images/pricing.png'
import algozeinth from '../Images/algozeinth_logo.png'
import {Card,Image} from 'react-bootstrap'
export default function RightCard() {
    return (
        <Card className='right' style={{height:'85%'}}>
        <div  style={{display:'flex'}}>
       <Card.Img src={pricing} className='image1'>
       </Card.Img>
       <Card.Img src={algozeinth} className='image2'>
       </Card.Img>
        </div>
            <div className="bottom">
              <div className="bRect">

              </div>
              <div className="btxt">100+ Hrs Live Content</div>
            </div>
            <div className="bottom">
              <div className="bRect">

              </div>
              <div className="btxt">50+ Hrs Contest</div>
            </div>
            <div className="bottom">
              <div className="bRect">

              </div>
              <div className="btxt">500+ Problems</div>
            </div>
            <div className="bottom">
              <div className="bRect">

              </div>
              <div className="btxt">Includes an interview bootcamp and access to a mentor network</div>
            </div>
            <div className="bottom">
              <div className="bRect">

              </div>
              <div className="btxt">Enjoy access to our content for one year (Paid extensions available)</div>
            </div>
            <div className="bottom">
              <div className="bRect">

              </div>
              <div className="btxt">Flexible payment optioins including no-cost EMI are available.</div>
            </div>
            <Card.Body className='joinnow'>
                <button className='bt1 jointxt'>Join Now&nbsp;<i class="fa-solid fa-arrow-right"></i></button>
            </Card.Body>
        </Card>
    )
}
