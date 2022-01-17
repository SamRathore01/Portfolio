import { Route, Routes } from 'react-router-dom';

import GlobalStyle  from "./globalStyles";
import './App.css';

import Main from './Components/Main';
import AboutPage from './Components/AboutPage';
import WorkPage from './Components/WorkPage';
import MySkillsPage from './Components/MySkillsPage';

import SoundBar from "./SubComponents/SoundBar";

function App() {
  
  return (
    <>
    
    <GlobalStyle/>

    <SoundBar />
    <Routes>
    <Route  path="/" element={<Main/>} />
     <Route  path="/about" element={<AboutPage/>} />
    <Route  path="/work" element={<WorkPage/>} />
    <Route  path="/skills" element={<MySkillsPage/>} />
    </Routes>
    </>

  );
}

export default App;
