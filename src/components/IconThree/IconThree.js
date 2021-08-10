import { motion } from 'framer-motion';
import React from 'react';
import { ReactComponent as Apple } from '../../assets/apple.svg';
import { ReactComponent as Banana } from '../../assets/bananas.svg';
import { ReactComponent as Bowl } from '../../assets/bowl.svg';
import { ReactComponent as Orange } from '../../assets/fruit.svg';
import { ReactComponent as Lime } from '../../assets/lime.svg';
import { ReactComponent as Mango } from '../../assets/mango.svg';
import './IconThree.scss';

const IconThree = () => {
	const bowlClass = "Bowl"
	const bananaClass = "Banana"
	const appleClass = "Apple"
	const orangeClass = "Orange"
	const mangoClass = "Mango"
	const limeClass = "Lime"

	return (
		<div class="third-container">
			<motion.div className="bowl_container">
				<Bowl className={bowlClass} />
			</motion.div>
			<motion.div drag className="banana_container">
				<Banana className={bananaClass} />
			</motion.div>
			<motion.div drag className="apple_container">
				<Apple className={appleClass} />
			</motion.div>
			<motion.div drag className="orange_container">
				<Orange className={orangeClass} />
			</motion.div>
			<motion.div drag className="mango_container">
				<Mango className={mangoClass} />
			</motion.div>
			<motion.div drag className="lime_container">
				<Lime className={limeClass} />
			</motion.div>
		</div>
	)
}

export default IconThree

