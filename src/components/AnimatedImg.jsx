import { motion } from "motion/react"
import './styles/animatedImg/animatedImg.css'
import mainImg from '../assets/img/dummy.webp'

export default function AnimatedImg(){
    return(
        <motion.section initial = {{opacity: 0,  }} animate = {{opacity: 1}} transition={{duration: 1, delay: 1.7,  ease: 'easeIn'}} className="animatedImg">
            <motion.img src={mainImg}/>
        </motion.section>
    )
}