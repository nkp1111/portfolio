import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { client, urlFor } from '../../client'
import "./About.scss"

const About = () => {

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = `*[ _type == "abouts" ]`
    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span> Good Development</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((item, ind) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={item.title + ind}
          >
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <h2 className="bold-text"
              style={{ marginTop: 20 }}
            >{item.title}</h2>
            <p className="p-text"
              style={{ marginTop: 20 }}
            >{item.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
)
