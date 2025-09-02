import { motion } from "motion/react"
import './styles/specifications/specifications.css'
import SpecificationsTable from "./SpecificationsTable";

import flare1 from '../assets/img/7.webp'
import flare2 from '../assets/img/8.webp'
import flare3 from '../assets/img/1.webp'

export default function Specification(){
    return(
        <section className="specifications innerSection">
            <motion.div
                    initial={{x: -30, opacity: 0}}
                    transition= {{duration: 0.6, ease: 'linear',}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: false, amount: 1}}
                >  
                    <h2 className="ifx">Specifications</h2>
            </motion.div>
            <motion.div className="tableContainer">
                <SpecificationsTable />
                <motion.div className="video">
                    <iframe
                        width="317"
                        height="564"
                        src="https://www.youtube.com/embed/JOZcjd45WLo"
                        title=" "
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </motion.div>
            </motion.div> 
            <motion.img className='flare left' src={flare1}/>
            <motion.img className='flare bottom' src={flare2}/>
            <motion.img className='flare right' src={flare3}/>
        </section>
    )
}