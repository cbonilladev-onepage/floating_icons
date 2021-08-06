import { motion } from 'framer-motion'
import React from 'react'
import { ReactComponent as Send } from '../../assets/send.svg'
import './IconTwo.css'

const IconTwo = () => {
	const planeVariants = {
		hidden: {scale: 1.5},
		visible: { 
			opacity: 1, 
			y: ["-10vh", '-25vh', '-32vh', '-43vh', '-55vh'], 
			x: ["12vw", '22vw', '35vw', '44vw', '59vw'], 
			rotate: [10, 20, 10, 20, 10],
			scale: [1.5, 1.4, 1.3, 1.2, 1.1],
			transition: {duration: 10, type: "ease", stiffness: 10, repeat: Infinity}}
	}

	return (
		<div className="second-container">
			<h2>hello world</h2>
			<motion.div variants={planeVariants} initial="hidden" animate="visible" className="second-svg" id="send">
				<Send />
			</motion.div>
		</div>
	)
}

export default IconTwo
