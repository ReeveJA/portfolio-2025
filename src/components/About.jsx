import { ABOUT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='container mx-auto' id='about'>
        <motion.h2 
          className="mt-20 text-center text-4xl font-semibold"
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}> 
            About
        </motion.h2>
        <motion.h3 
          className="p-4 text-5xl uppercase lg:text-[6rem]"
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          viewport={{once: true}}>
            {ABOUT.text1}
        </motion.h3>
        <motion.p 
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          viewport={{once: true}}
          className="mr-24 pl-4 text-lg leading-10">
            {/* {ABOUT.text2} */}
            {/* I thrive on crafting experiences that are not only visually stunning but also highly functional and user-friendly. */}
            Hello! I'm Reeve, a <span className='font-semibold text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text'>designer</span> and full-stack <span className='font-semibold text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text'>developer</span> that brings modern functionality with a touch of creativity to your projects. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of cultures, cusines, and music, and love to connect with people while sharing in these interests. I posess a varied background in <span className='font-semibold text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text'>Digital Marketing, Business Administration and Computer Science</span> which helps me bring innovative and practical solutions to every challenge. Whether I'm designing posts and ads for social media, creating a full-stack web app, or developing a sleek website, I am dedicated to working with my clients to see their visions become a reality.
        </motion.p>
    </div>
  )
}

export default About
