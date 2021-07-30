import { motion } from 'framer-motion'
import React from 'react'
import { ReactComponent as Diamond } from '../../assets/diamond.svg'
import { ReactComponent as Sparkles } from '../../assets/sparkles.svg'
import './IconOne.css'

const IconOne = () => {
	const floatVariant = {
		hidden: {
			opacity: 1
		},
		show: {
			opacity: 1,
			y: "-5vh",
			transition: {
				yoyo: Infinity,
				type: "ease",
				stiffness: 20,
				duration: 2,
				bounce: 0.3,
				staggerChildren: 0.3
			}
		}
	}

	const subFloatVariant = {
		hidden: {
			opacity: 0
		},
		show: {
			opacity: 1,
			y: "-3vh",
			transition: {
				yoyo: Infinity,
				type: "ease",
				stiffness: 20,
				duration: 2,
				bounce: 1,
			}
		}
	}

	return (
		<div className="container">
			<motion.div className="view-container" variants={floatVariant} initial="hidden" animate="show">
				<motion.svg id="diamond" className="svg">
					<Diamond/>
				</motion.svg>
				<motion.svg variants={subFloatVariant} id="sparkles" className="svg">
					<Sparkles/>
				</motion.svg>
				<motion.svg variants={subFloatVariant} id="second_sparkles" className="svg">
					<Sparkles/>
				</motion.svg>
			</motion.div>
		</div>
	)
}

export default IconOne
