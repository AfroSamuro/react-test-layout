import './Geometry.css'
import logo from './img/test.png'

export default function Geometry () {
    return (
        <section className="figures">
            {/* <img src={logo} alt="lol" className='logo' /> */}
            <div className='round_big'></div>
            <div className='round_small'></div>
            <div className='rod_blue'></div>
            <div className='rod_purple'></div>
            <div className='triangle'></div>
        </section>
    )
}