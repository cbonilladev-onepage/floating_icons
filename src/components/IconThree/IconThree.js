import { motion } from 'framer-motion';
import React from 'react';
import { ReactComponent as Banana } from '../../assets/bananas.svg';
// import Bowl from '../../assets/bowl.png'
import { ReactComponent as Bowl } from '../../assets/bowl.svg';
import './IconThree.scss';

const IconThree = () => {
	const bowlClass = "Bowl"
	const bananaClass = "Banana"

	const bananaVariant = {
		hidden: {
			x: "50px",
			y: "-70px"
		}
	}

	return (
		<div class="third-container">
			{/* <img className="Bowl" src={Bowl} alt="a bowl"/> */}
			<motion.div className="icon_container">
				<Bowl className={bowlClass} />
			</motion.div>
			<motion.div variants={bananaVariant} initial="hidden" className="icon_container">
				<Banana className={bananaClass} />
			</motion.div>
		</div>
	)
}

export default IconThree

