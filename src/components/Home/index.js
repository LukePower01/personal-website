import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-L.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['u', 'k', 'e']
  const jobArray = ['d','a','t','a','s','c','i','e','n','t','i','s','t']
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          uke
          <br />
          data scientist
        </h1>
        <h2>Front end developer/ java/ lalalala</h2>
        <Link to="/contact" className="flat-button">
          Contact me
        </Link>
      </div>
    </div>
  )
}

export default Home
