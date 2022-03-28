import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
      {['Inicio', 'Sobre mi', 'Proyectos', 'Tecnologías', 'Testimonio', 'Contáctame'].map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#F0A500' } : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots