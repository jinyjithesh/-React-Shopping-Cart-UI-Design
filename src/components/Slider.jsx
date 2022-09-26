import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from "../data"
const Container= styled.div`
height:100vh;
width:100%;
display:flex;
position:relative;
overflow:hidden;
background-color:;
`
const Arrow =styled.div`width:50px;height:50px;background-color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;position:absolute;
top:0;
bottom:0;
left:${props=>props.direction === "left" && "10px"};
Right:${props=>props.direction === "right" && "10px"};
cursor:pointer;
opacity:0.5;
margin:auto;
z-index:3`

const Wrapper= styled.div
`height:100%;
display:flex;
// transition:all 1.5s
transform:translatex(${props=>props.slideIndex * -100}vw);`

const Slide= styled.div
`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg}`

const ImgContainer= styled.div
`flex:1;`
const Image= styled.img
`height:60%;
// width:500px;
`
const InfoContainer= styled.div
`flex:1;
padding:50px;`
const Title = styled.h1
`font-size:50px;`
const Desc= styled.p
`margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px`
const Button= styled.button
`padding:10px:
font-size:20px;
backgrount-color:transparent;
cursor:pointer;`
const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0);
    const handleClick =(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 :2 )  ;
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 :0 );
        }
    };
  return (
   <Container>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
    <ArrowLeftIcon/>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(
<Slide bg={item.bg}>
<ImgContainer>
<Image src={item.img} style={{height:"600px"}}/>
</ImgContainer>
<InfoContainer>
    <Title>{item.title}</Title>
    <Desc>{item.Desc}</Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>
</Slide>
 ))}
{/* <Slide bg="yellow">
<ImgContainer>
<Image src="https://www.fashiongonerogue.com/wp-content/uploads/2013/09/max-mara-spring-2014-4.jpg" style={{height:"600px"}}/>
</ImgContainer>
<InfoContainer>
    <Title>WINTER SALE</Title>
    <Desc>Dont Compromise On Style Get Flat 30% Off For New Arrivals</Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>
</Slide>
<Slide bg="red"> 
<ImgContainer>
<Image src="https://www.fashiongonerogue.com/wp-content/uploads/2013/09/max-mara-spring-2014-4.jpg" style={{height:"600px"}}/></ImgContainer>
<InfoContainer>
    <Title>POPULAR SALE</Title>
    <Desc>Dont Compromise On Style Get Flat 30% Off For New Arrivals</Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>
</Slide> */}
    </Wrapper>
    <Arrow direction="right"onClick={()=>handleClick("right")}>
    <ArrowRightIcon />
    </Arrow>
   </Container>
  )
}

export default Slider