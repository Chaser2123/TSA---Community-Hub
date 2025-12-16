'use client'
import { motion } from 'motion/react'

export default function Item() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 2 }} className="item w-fit p-5 bg-amber-800 border-2 border-amber-500 border-rounded-lg">
            <h2>Item Title</h2>
            <p>Item Description</p>
        </motion.div>
    )
}