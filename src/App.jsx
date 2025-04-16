import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';  // Make sure this imports the Tailwind styles

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import profileImg from './profile.jpg'; 

function App() {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Panel */}
      <div className="w-1/3 bg-[#f7f1e1] text-center px-6 py-10 flex flex-col items-center text-[#4b2e2e]">
      <img
      src={profileImg}
      alt="Profile"
      className="w-[120px] h-[120px] rounded-full object-cover mx-auto"
      />

      <h1 className="text-3xl font-bold leading-tight">Robby Santos</h1>
      <p className="text-sm text-gray-600 mb-6">Web Developer | Software Developer</p>
      
        
        <AboutMe />

        <div className="mt-8 text-sm space-y-2">
        <h2 className="text-md font-semibold mb-2">Contact detail</h2>
          <Contact />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 min-h-screen h-full bg-[#d4c1a1] p-10">
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-400 text-[#4b2e2e] mb-2">Experience</h2>
          <Experience />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-400 text-[#4b2e2e] mb-2">Education</h2>
          <Education />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-400 text-[#4b2e2e] mb-2">Skills</h2>
          <Skills />
        </section>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-400 text-[#4b2e2e] mb-2">Projects</h2>
          <ul className="list-disc list-inside text-sm space-y-2 mt-2 text-[#4b2e2e]">
          <li>
            <strong>E-commerce project</strong> – Built an HTML website similar to Shopee and Amazon using HTML, CSS, and JavaScript.
          </li>
          <li>
            Developed a program that functions like an inventory system/cart.
          </li>
          <li>
            Developed a program in Python that functions as a GPU Builder Hub.
          </li>
        </ul>
        </section>
      </div>
    </div>
  );
}

export default App
