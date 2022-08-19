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
              <p>Hola. Soy Juan José, es un placer conocerlo.</p>
            </div>
            <div>
              <p>
                Soy un desarrollador de Front-end apasionado por mejorar mis Habilidades
                y desarrollarme tanto como profesional como integramente. Me especializo en
                crear aplicaciones web Front-end y me estoy desarrollando en el area de
                machine learning. Soy un aficionado de la cultura geek, las películas, series
                y las artés marciales.
                <br />
                Soy un egresado de Ingenieria civil en informática y telecomunicaciones 
                por lo que estoy ansioso de poder ingresar al mundo laboral y aprender lo que mas pueda de él.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
