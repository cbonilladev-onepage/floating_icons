import { motion } from 'framer-motion'
import React from 'react'
import { ReactComponent as Cloud } from '../../assets/cloud.svg'
import { ReactComponent as Send } from '../../assets/send.svg'
import './IconTwo.css'

const IconTwo = () => {
	const planeVariants = {
		hidden: {scale: 1.8},
		visible: { 
			opacity: 1, 
			y: ["-10vh", '-25vh', '-32vh', '-43vh', '-55vh'], 
			x: ["12vw", '22vw', '35vw', '44vw', '59vw'], 
			rotate: [10, 20, 10, 20, 10],
			scale: [1.5, 1.4, 1.2, 1.0, 0.8],
			transition: {duration: 5, type: "linear", repeat: Infinity}}
	}

	const cloudVariants = {
		hidden: {x: -50},
		visible: {x: '100vw', transition: {duration: 50, type: 'linear', repeat: Infinity}}
	}

	const secondCloudVariants = {
		hidden: {x: "-20vw", y: "40vh", scale: 1.3},
		visible: {x: '100vw', transition: {duration: 80, type: 'linear', repeat: Infinity}}
	}

	const uniqueId = "cloud"
	const secondUniqueId = "cloud2"

	return (
		<div className="second-container">
			<h2>hello world</h2>
			<motion.div variants={cloudVariants} initial="hidden" animate="visible" className="hello">
				<Cloud id={uniqueId}/>
			</motion.div>
			<motion.div variants={secondCloudVariants} initial="hidden" animate="visible" className="hello">
				<Cloud id={secondUniqueId}/>
			</motion.div>
			<motion.div variants={planeVariants} initial="hidden" animate="visible" className="second-svg" id="send">
				<Send />
			</motion.div>
		</div>
	)
}

export default IconTwo
