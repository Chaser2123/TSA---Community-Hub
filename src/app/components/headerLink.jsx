'use client';
import { motion } from 'motion/react';

export default function HeaderLink({ root, to }) {
    return (
        <motion.li 
                  className="px-3 py-2" 
                  initial={{ borderBottom: "solid transparent 2px", borderColor: 'transparent', scale: 1 }} 
                  whileHover={{ borderBottom: "solid 2px black", borderColor: 'black', rotate: ['0deg', '5deg'], scale: [1, 1.05] }}
                  animate={{borderBottom: "solid transparent 2px", borderColor: 'transparent', rotate: '0deg', scale: 1 }} 
                  transition={{ duration: 0.2 }}>
                    <a href={root}>{to}</a>
                </motion.li>
    )
}