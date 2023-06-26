import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import profil from '../assets/profil.jpg';

const Splitscreen = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto py-6">

    <div className="flex flex-wrap px-4">
      <div className="w-1/2 bg-gray-100">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-4">KAVA Coffe Shop</h1>
          <p className='text-lg text-justify max-w-lg'>Kava is a famous coffee shop. Initially, they only sold fresh coffee from several regions.
          They provide various types of coffee, tea and other drinks, as well as snacks. Apart from that, 
          Kava is known for its comfortable shop interior design, warm atmosphere, and friendly customer service.
          Over time, Kava continues to grow and become one of the most famous coffee brands in the world.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <div className='flex'>
        <Image
        src={profil} alt='Profil'/>

        </div>
             </div>
    </div>
    </div>
  );
};

export default Splitscreen;
