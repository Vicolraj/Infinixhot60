import { motion } from "motion/react"
import './styles/product/product.css'

import product1 from '../assets/img/darkGrey.webp'
import product2 from '../assets/img/green.webp'
import product3 from '../assets/img/grey.webp'
import product4 from '../assets/img/orange.webp'

export default function product(){
     
    const products = [
        {color: "LightGrey", img: product1},
        {color: "Green", img: product2},
        {color: "DeepGrey", img: product3},
        {color: "Orange", img: product4},
    ]
    return(
        <section className="product innerSection">
            <h2>Some Available Colors</h2>
            <div data-type="productsContainer">
                {products.map((product) => 
                <div>
                    <img src={product.img} />
                    <h4 className="color">{product.color}</h4>
                </div>)}
            </div>
        </section>
    )
}