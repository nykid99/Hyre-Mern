

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'

import {Logo} from '../components'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
  <Wrapper>
    <nav>
        <Logo />
    </nav>
    <div className = 'container page'>
        {/*info page*/}
        <div className = 'info'>
            <h1>
                job <span> tracking</span> app
            </h1>
            <p>
                I'm baby xOXO microdosing gastropub listicle humblebrag. Cloud bread JOMO polaroid skateboard. Shaman ugh VHS, single-origin coffee wayfarers unicorn pug tousled tilde drinking vinegar ethical tote bag enamel pin chia. Yuccie subway tile glossier polaroid cold-pressed tumeric succulents. Polaroid wolf lyft pug air plant 8-bit, twee bicycle rights DIY wayfarers poutine gatekeep raclette echo park.
            </p>
            <Link to='/register' className = "btn btn-hero">Login/Register</Link>
        </div>
        <img src = {main} alt = "job hunt" className = "img main-img"/>
    </div>
  </Wrapper>
  )
}



export default Landing