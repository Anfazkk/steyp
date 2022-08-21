import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from '../Screens/includes/Header'
import Skills from '../Screens/Skills'
import Faq from '../Screens/Faq'
import Styled from 'styled-components'


export default function Dash() {
  return (
    <>
    <Header />
    <Spotlight>
        <Wrapper className='Wrapper'>
            <Container>
                <DH1>Dashboard</DH1>
                <H3>Professions you gonna specialize</H3>
            </Container>
            <Ul>
               <Li><NavLink to="/Skills"><LDiv><img className='dashimg' src={require("../Assets/ui.jpg")} /></LDiv></NavLink></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/back.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/devops.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/web.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/mobile.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/erp.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/iot.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/vr.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/data.jpg")} /></LDiv></Li>
               <Li><LDiv><img className='dashimg' src={require("../Assets/block.jpg")} /></LDiv></Li>
               
            </Ul>
            <MikeDiv>
              <MikeImg src={require("../Assets/mike.svg").default} />
            </MikeDiv>
        </Wrapper>
    </Spotlight>
    <Faq />
    </>
  )
}


const LDiv = Styled.div`
width: 100%;
margin: 0 auto;
border-radius:5px;
overflow:hidden;`
const MikeDiv = Styled.div`
position: relative;
    right: -98%;
    top: -60px;
    width:20px;
    background: cadetblue;
    padding: 10px;
    border-radius: 24px;
    cursor:pointer;
    &:hover{
      opacity:0.5;
    }`
const MikeImg = Styled.img`
display:block;
width:100%;`



const Spotlight = Styled.section``
const Wrapper = Styled.section``
const Container = Styled.div``
const DH1 = Styled.h1`
font-size:22px;
font-weight:700;
margin:10px 0px 0px 0px;`
const H3 = Styled.h3`
margin:0px;
color: #868686;
font-size:15px;`
const Ul = Styled.ul`
display:flex;
flex-wrap:wrap;`
const Li = Styled.li`
list-style:none;
width: 20%;
height: 150px;
border-radius: 7px;
padding: 15px;
font-size: 15px;
font-weight: 700;
margin:10px;
&:hover{
  background:none;
}`


