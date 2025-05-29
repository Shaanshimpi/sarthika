import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Tools from './components/Tools';
import Footer from './components/Footer';
import MainFooter from './components/MainFooter';
const App = () => {

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen flex flex-row h-full">
      <div className='hidden md:block basis-1/10'></div>
      <Project className= "w-full md:basis-4/5"/>
      <div className=' hidden pb-20 md:block basis-1/10'>
        <div className="sticky top-32">
          <Tools />
        </div>
      </div>
    </div>
    <MainFooter/>
    <Footer/>
    </>
  );
}

export default App;
