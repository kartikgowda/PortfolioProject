import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../Wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: `easeInOut`
    }

  }
}
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      {/* //? Animation for the header Sliding in */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* //? 👋 Logo Emoji */}
            <span>👋</span>
            {/* //? Header Main Content */}
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Kartik</h1>
            </div>
          </div>
          {/* //? Tag for Profession */}
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            {/* //TODO : Adding background color to Hireable (RED/GREEN) */}
            <p className="p-text">Hireable</p>
          </div>
        </div>
      </motion.div>
      {/* //? Adding  Profile Image */}
      <motion.div whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
        <img src={images.profile} alt="profile_bg" />

        <motion.img whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: `easeInOut` }}
          src={images.circle} alt="profile_circle"
          className="overlay_circle" />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">{
          [images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circles-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))
        }
      </motion.div>
    </div >
  );
};

export default Header;
