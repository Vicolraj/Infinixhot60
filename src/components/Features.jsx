import { motion } from "motion/react"
import './styles/features/features.css'

import flare1 from '../assets/img/4.webp'
import flare2 from '../assets/img/5.jpg'
import flare3 from '../assets/img/6.webp'

export default function Features(){
    const features = [ 
        {
            title: 'Adaptive One-Tap',
            details: 'Infinix AI, Folax AI Assistant, Circle to Search and More'
        },

        {
            title: "Gaming & LPDDR5x RAM",
            details: 'Up to 16GB, Supports 90fps gaming, HyperEngine 5.0 Lite, XBoost AI Game Mode'
        },

        {
            title: "Battery Life & Design",
            details: 'Durable (45W 5160mAh), New Ultra-Slim Frame.'
        },

        {
            title: "And More",
            details: ''
        },
    ];
    return(
        <section className="features innerSection">
            <motion.article>
                <motion.div
                    initial={{width: '10%'}}
                    transition= {{duration: 2, ease: 'backInOut'}}
                    whileInView={{width: '100%'}}
                    viewport={{once: false, amount: 0.01}}
                    className="hr"/>
                <motion.p
                    initial={{opacity: 0, x: -3}}
                    transition= {{duration: 1, ease: 'easeInOut'}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false, amount: 0.01}}
                >Powered by</motion.p>
                <motion.div
                    initial={{x: -30, opacity: 0}}
                    transition= {{duration: 0.6, ease: 'linear',}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: false, amount: 0.01}}
                >  
                    <h2>MediaTek</h2><b>Dimensity</b> 7020
                </motion.div>
                <motion.div
                    initial={{width: '10%'}}
                    transition= {{duration: 2, ease: 'backInOut'}}
                    whileInView={{width: '100%'}}
                    viewport={{once: false, amount: 0.01}}
                    className="hr"/>
                <p>The Infinix HOT 60 is powered by the Dimensity 7020 chipset, offering smooth 5G performance, strong AI features, and a fluid 120Hz display, all packed in a sleek design</p>
                <br/><a href="https://ng.infinixmobility.com/find-a-store" target='_blank'>Buy Now</a>
            </motion.article>
            
            <motion.div className="features"
                initial={{x: 70, opacity: 0}}
                transition= {{duration: 1, ease: 'linear',}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: false, amount: 0.2}}>
                <motion.h2>Features</motion.h2>
                {
                    features.map(
                        (item, index) => 
                        <motion.div key={index}>
                            <span>{index + 1}</span>
                            <h4>{item.title}</h4>
                            <p>{item.details}</p>
                        </motion.div>
                    )
                }
            </motion.div>
            <motion.img className='flare left' src={flare1}/>
            <motion.img className='flare bottom' src={flare2}/>
            <motion.img className='flare right' src={flare3}/>
        </section>
    )
}


