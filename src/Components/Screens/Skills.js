import React from 'react'
import Styled from 'styled-components'
import Helmet from 'react-helmet'

export default function Skills() {
  return (
    <>
     <Helmet>
        <title>Steyp | Skills</title>
    </Helmet>
      <Ui>
        <Wrapper className='Wrapper'>
          <Cont>
            <Ul1>
              <Li1><HDiv><Img src={require("../Assets/HTML.jpg")} /></HDiv></Li1>
              <Li1><HDiv><Img src={require("../Assets/css.jpg")} /></HDiv></Li1>
              <Li1><HDiv><Img src={require("../Assets/gitlab.png")} /></HDiv></Li1>
              <Li1><HDiv><Img src={require("../Assets/js.jpg")} /></HDiv></Li1>
              <Li1><HDiv><Img src={require("../Assets/jq.jpg")} /></HDiv></Li1>
              <Li1><HDiv><Img src={require("../Assets/bs.jpg")} /></HDiv></Li1>
              <Li1><HDiv><Img src={require("../Assets/ss.jpg")} /></HDiv></Li1>
              <Li1><HDiv><Img src={require("../Assets/react.jpg")} /></HDiv></Li1>
            </Ul1>
          </Cont>
        </Wrapper>
      </Ui>
    </>
  )
}


const Ui = Styled.section``
const Wrapper = Styled.section``
const Cont = Styled.div``
const Ul1 = Styled.ul`
display:flex;
flex-wrap:wrap;`
const Li1 = Styled.li`
list-style:none;
margin-bottom:30px;
margin-right:36px;
&:hover{
  background:none;
}`
const HDiv = Styled.div``
const Img = Styled.img`
display:block;
width:100%;`
const P1 = Styled.p``






