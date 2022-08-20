import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Acerca de mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola, es un placer conocerlo.</p>
            </div>
            <div>
              <p>
              Soy un desarrollador Front-end apasionado por el desarrollo web, donde constantemente quiero mejorar mis habilidades profesionales. Me especializo en crear aplicaciones web front end y estoy aprendiendo sobre Machine Learning e Inteligencia Artificial.  
                <br />
                Egresé de Ingeniería Civil en Informática y Telecomunicaciones en la Universidad Diego Portales y estoy buscando desarrollarme profesionalmente y adquirir más experiencias en el mundo laboral.
                <br />
                Soy un aficionado de la cultura geek, las películas, series, el dibujo, la fotografía
                y las artés marciales.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
