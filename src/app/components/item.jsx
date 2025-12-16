'use client'
import { motion } from 'motion/react'

export default function Item() {
    return (
        <motion.div 
            initial={{opacity: 0, translateY: 30, filter: "blur(7px)" }} 
            whileInView={{opacity: 1, translateY: 0, filter: "blur(0px)"}} 
            transition={{ duration: 2, type: "spring", bounce: 0.8 }} 
            className="item w-fit p-5 bg-amber-800 border-2 border-amber-500 border-rounded-lg"
        >
   
            <h2>Item Title</h2>
            <p>Item Description</p>
        </motion.div>
    )
}
// quick fix