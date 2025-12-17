'use client';
import { motion, spring } from "motion/react";

export default function Header() {
  return (
    <header className="header w-full py-5 bg-white text-black flex justify-center items-center "> 
      <div className="wrap flex justify-between items-center" style={{ width: "calc(100% - 100px)" }}>
        <h1 className="font-semibold text-3xl">My Website</h1>
        <nav>
            <ul className="flex w-fit space-x-20">
                <motion.li 
                  className="px-3 py-2" 
                  initial={{ borderBottom: "solid transparent 2px", borderColor: 'transparent', scale: 1 }} 
                  whileHover={{ borderBottom: "solid 2px black", borderColor: 'black', rotate: ['0deg', '5deg'], scale: [1, 1.05] }}
                  animate={{borderBottom: "solid transparent 2px", borderColor: 'transparent', rotate: '0deg', scale: 1 }} 
                  transition={{ duration: 0.2 }}>
                    <a href="/">Home</a>
                </motion.li>
                <motion.li className="px-3 py-2" 
                  initial={{ borderBottom: "solid transparent 2px", borderColor: 'transparent', scale: 1 }} 
                  whileHover={{ borderBottom: "solid 2px black", borderColor: 'black', rotate: ['0deg', '5deg'], scale: [1, 1.05] }} 
                  transition={{ duration: 0.2 }}
                  animate={{borderBottom: "solid transparent 2px", borderColor: 'transparent', rotate: '0deg', scale: 1 }}>
                    <a href="/contact">Contact</a></motion.li>
                <motion.li className="px-3 py-2" 
                  initial={{ borderBottom: "solid transparent 2px", borderColor: 'transparent', scale: 1 }} 
                  whileHover={{ borderBottom: "solid 2px black", borderColor: 'black', rotate: ['0deg', '5deg'], scale: [1, 1.05] }} 
                  transition={{ duration: 0.2 }}
                  animate={{borderBottom: "solid transparent 2px", borderColor: 'transparent', rotate: '0deg', scale: 1 }}>
                    <a href="/about">About</a></motion.li>
            </ul>
        </nav>
      </div>
    </header>
  );
}