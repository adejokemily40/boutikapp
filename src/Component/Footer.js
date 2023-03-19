import socialhandle from '../images/facebook_resize.png'
import twitter from '../images/twitter resize.png'


const Footer = () => {

    return(
    <>
         <div className='boxItem'>
                <div className='first'>
                    <h2>Supreme Store</h2>
                   <p> Lorem ipsum dolor sit, amet consectetur adipisicing<br/>
                   quam dolores ipsa, non commodi accusantiu<br/> 
                    distinctio qui officia dolore incidunt!</p>
                </div>
        
                <div className= 'second'>
                  <h2>Site Map</h2>  
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>New arrival</li>
                        <li>Products</li>
                    </ul>
                </div>
            <div className='third'>
                <h2>Connect on Socials</h2>
                <div className= 'socials'>
                    <div>
                    <img src={socialhandle} alt="facebook-logo" width="40px" height="40px"/>
                    </div>
                    <div>
                    <img src={twitter} alt="twitter-logo" width="30px" height="30px" />
                    </div>
                </div>
            </div>
            
        </div>
    </>
    );
}


export default Footer;