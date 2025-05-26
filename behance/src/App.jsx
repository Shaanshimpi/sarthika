import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Tools from './components/Tools';
import Footer from './components/Footer';
const App = () => {

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen flex flex-row h-full">
      <div className='hidden md:block basis-1/10'></div>
      <Project className= "w-full md:basis-4/5"/>
      <div className=' hidden md:block basis-1/10'>
      <Tools/>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
