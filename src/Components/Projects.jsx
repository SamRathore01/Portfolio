import styled from 'styled-components';
import React  from 'react';
import img from '../assets/Images/sp.jpg'
import HeaderD from '../SubComponents/HeaderL';
import Home from '../SubComponents/Home';

import p1 from '../assets/Images/rdx.png'
import p2 from '../assets/Images/f.png'
import p3 from '../assets/Images/tax.png'
import p4 from '../assets/Images/pf.png'





const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;

`



const Projects = () => {
    return (
        
        <MainContainer>
            
            <HeaderD/>
            <Home/>
            <section className='portfolio_section' id='portfolio' >
         <h2 className='section_title' > Projects</h2>
      </section> 
      <div className=' portfolio_container container1'>
        <div>
           <div className='portfolio_content grid'>
            <img src={p1} alt=''  className='portfolio_img' ></img>
            <div className='description' >
            <h3 className='portfolio_title' > Daily News</h3>
            <p className='portfolio_description'>Daily news tell's latest news around the world and more :)  </p>
            <ul>
              <span>#React </span>
            <span>#Redux </span>
            <span>#Rapid Api </span>
            </ul>
            <a href='https://ausnews.netlify.app' target="_blank" className='portfolio_button'>
              Demo
            </a>
            </div>
          </div>
        </div>

        <div>  
          <div className='portfolio_content_grid2'>
            <img src={p2} alt=''   className='portfolio_img' ></img>
            <div className='description2' >
            <h3 className='portfolio_title' > Fetch live Weather</h3>
            <p className='portfolio_description'> Fetch tells the user exact location with current Time, Temprature <br/>and more</p>
            <ul>
              <span>#React </span>
            <span>#Axios </span>
            <span>#Open weather </span>
            </ul>
            <a href='https://wdt.netlify.app' target="_blank" className='portfolio_button'>
              Demo
            </a>
            </div>
          </div>
        </div>

        <div>
          <div className='portfolio_content grid'>
            <img src={p3} alt=''  className='portfolio_img' ></img>
            <div className='description' >
            <h3 className='portfolio_title' > Modern Website</h3>
            <p className='portfolio_description'> Want to get best return for your tax. we got you :) </p>
            <ul>
              <span>#React </span>
            <span>#Ant design </span>
            <span>#Node js</span>
            </ul>
            <a href='https://taxsitez.netlify.app' target="_blank" className='portfolio_button'>
              Demo
            </a>
            </div>
          </div>
        </div>

        <div>
          <div className='portfolio_content_grid2'>
            <img src={p4} alt=''   className='portfolio_img'  className='portfolio_img' ></img>
            <div className='description2' >
            <h3 className='portfolio_title' > Portfolio </h3>
            <p className='portfolio_description'> Source code portfolio with CI/CD integrated and live demo</p>
            <ul>
              <span>#React </span>
            <span>#ThreeJs </span>
            <span>#styled components</span>
            </ul>
            <a href='github.com/SamRathore01/portfolio' target="_blank" className='portfolio_button'>
              Source Code
            </a>
            </div>
          </div>
        </div>

      </div>
            
        </MainContainer>
    )
}

export default Projects;
