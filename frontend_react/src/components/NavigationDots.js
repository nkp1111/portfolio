import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {["home", "about", "contact", "work", "skills", "testimonials"].map((item, ind) => (
        <a href={`#${item}`} key={item}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        >{item}</a>
      ))}
    </div>
  )
}

export default NavigationDots
