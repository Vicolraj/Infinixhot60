import './styles/header/header.css'

import {motion} from 'motion/react'

export default function Header(){
    return(
        <header>
            <div className="logoContainer"></div>
            <nav>
                <a href="https://ng.infinixmobility.com/find-a-store" target='_blank'>Buy Now</a>
            </nav>
        </header>
    )
}