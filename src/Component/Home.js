import polo from '../images/polo1_evsqam.jpg'
import secondpolo from '../images/polo2_igl2zr.jpg'
import thirdpolo from '../images/polo3_ggueox.png'
import fourthpolo from '../images/polo4_uxfy54.jpg'
import sneakerone from '../images/sneaker1_keogh1.jpg'
import sneakertwo from '../images/sneaker2_hqerll.jpg'



const Home = () => {

return(
    <>
      <div className='flexContainer'>
                <div className='imgBox'>
                    <img src= {polo} alt="red polo" width="300px" height="300px"/>
                </div>
                <div className='imgBox'>
                    <img src= {secondpolo} alt="black polo"  width="300px" height="300px"/>
                </div>
                <div className='imgBox'>
                    <img src={thirdpolo} alt="man on a black polo"  width="300px" height="300px"/>
                </div>  
                <div className='imgBox'>
                    <img src={fourthpolo} alt="roundneck shirts"  width="300px" height="300px"/>
                </div>
                <div className='imgBox'>
                    <img src={sneakerone} alt="white sneaker"  width="300px" height="300px"/>
                </div>
                <div className='imgBox'>
                    <img src={sneakertwo} alt="a pair of white sneaker"  width="300px" height="300px"/>
                </div>
            </div>
            
            
    
    </>

);

}
export default Home;