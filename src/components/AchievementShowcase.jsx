import { motion } from 'framer-motion'
import codecademyCertif from '../assets/codecademy-certif.png'
import courseraCertif from '../assets/coursera-certif.png'

const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 1, staggerChildren: 0.8}
}
}

const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5}}
}

const AchievementShowcase = () => {
  return (
    <div id="award">
      <h2 className="mb-12 mt-10 text-center text-4xl font-semibold">Certificates</h2>
      <motion.div 
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{once: true}}
        className="mx-auto flex flex-col items-center max-w-6xl flex-wrap">
        <motion.div 
            variants={itemVariants}
            className="w-full p-2 sm:w-1/2">
            <h2 className='text-2xl text-center mt-12 mb-4'>Full-Stack Engineer</h2>
            <img src={codecademyCertif} alt="certificate" className='rounded-sm' />
        </motion.div>
        <motion.div 
            variants={itemVariants}
            className='w-full p-2 sm:w-1/2'>
            <h2 className='text-2xl text-center mt-12 mb-4'>Google Data Analytics</h2>
            <img src={courseraCertif} alt="certificate" className='rounded-sm' /> 
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AchievementShowcase
