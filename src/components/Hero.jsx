import './styles/hero/hero.css'

import {motion} from 'motion/react'
// FOR IMG
import flare from '../assets/img/front.webp'
import flare1 from '../assets/img/1.webp'
import flare2 from '../assets/img/2.webp'
import flare3 from '../assets/img/3.webp'

export default function Header(){
    return(
        <motion.section
            initial = {{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 1.2, ease: 'backIn'}} className='heroSection'>
            <motion.h1 
                initial = {{ scale: 0.4}}
                animate={{ scale: 1}}
                transition={{duration: 1.2, ease: 'backIn', delay: 0.5}}className='ifx'>
                INFINIX<br /> HOT 60
            <motion.img src={flare} alt='main' className="img"/>
            </motion.h1>
            <motion.img className='flare left' src={flare1}/>
            <motion.img className='flare bottom' src={flare2}/>
            <motion.img className='flare right' src={flare3}/>
        </motion.section>
    )
}