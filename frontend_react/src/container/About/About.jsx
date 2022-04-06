import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

//TODO : Bracket {} Understanding for Import
// import { images } from '../../constants';

import { AppWrap } from '../../Wrapper';
import './About.scss';

//? Importing Client JS
import { urlFor, client } from '../../client';

//! REPLACED WITH SANITY STUDIO
// const abouts = [
//   //TODO : Title & Description + Images
//   {
//     title: 'Web Development',
//     description: 'Im a batshit Developer.',
//     imgUrl: images.about01,
//   },
//   {
//     title: 'Web Design',
//     description: 'Im a matshit Developer.',
//     imgUrl: images.about02,
//   },
//   {
//     title: 'UI/UX',
//     description: 'Im a ratshit Developer.',
//     imgUrl: images.about03,
//   },
//   {
//     title: 'App Development',
//     description: 'Im a catshit Developer.',
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      {/* //TODO : Changing the Head-text to something more useful
       */}
      <h2 className="head-text">
        I Know That <span>Good Design</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          // // ! FIX ANIMATION TWEEN
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            {/* //TODO : Style In CSS or Not Test
             */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About,'about');
