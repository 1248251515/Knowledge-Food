/**热门系列轮播图 */
import { Carousel } from 'antd';
import ssdd from '../imgs/CarImg.jpg'
import two from '../imgs/wallhaven-3kl1q6.jpg'
import shere from '../imgs/wallhaven-1j5gwg.jpg'
import four from '../imgs/wallhaven-k73pmd.jpg'
import React from 'react';
class CarouselCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return (
      <div className='Caroutse'>
        <Carousel effect="fade" autoplay>
          <div>
            <img src={ssdd} className="contentStyle"/>
          </div>
          <div>
            <img src={two} className="contentStyle"/>
          </div>
          <div>
            <img src={shere} className="contentStyle"/>
          </div>
          <div>
            <img src={four} className="contentStyle"/>
          </div>
        </Carousel>
      </div>
    )
  }
}
export default CarouselCom;