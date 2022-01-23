import styled from 'styled-components';
import React  from 'react';
import img from '../assets/Images/sp.jpg'
import { Blogs } from '../data/BlogData';
import BlogComponent from './WorkComponent';

import HeaderD from '../SubComponents/HeaderL';
import Home from '../SubComponents/Home';
import BigTitle from '../SubComponents/BigTitle';




const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
height: 100vh;
overflow-x: hidden;
scroll-behavior:smooth;
background-color:black
`
const Container = styled.div`

width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;

`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;

`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);

@media (max-width : 800px){
    display: block;
    
}
`
const BlogPage = () => {
    return (
        
        <MainContainer>
            
            <HeaderD/>
            <Home/>
            <Container>
                <BigTitle text = "WORK" top='5%' right ="5%"  /> 
                           
<Center>
    <Grid>
        {
            Blogs.map(blog =>{
               return <BlogComponent key={blog.id} blog={blog} />

            })
        }

    </Grid>
    
</Center>
            </Container>
        </MainContainer>
    )
}

export default BlogPage;
