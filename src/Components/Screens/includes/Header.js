import React, {useState} from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default function Header() {

    const options = [
        { value: 'English', label: 'English' },
        { value: 'हिन्दी', label: 'हिन्दी' },
      ]
    
      const MyComponent = () => (
        <Select placeholder="Language" options={options} />
      )

  return (
    <>
    <Helmet>
        <title>Steyp</title>
    </Helmet>
        <Dashboard className='Dashboard'>
            <Headerr>
                <DivLeft>
                    <LogoImg src={require("../../Assets/steyp-logo.svg").default} />
                </DivLeft>
                <DivCenter>
                    <Input icon='search' placeholder='Search Contents...' />
                </DivCenter>
                <DivRight>
                    <CoinDiv>
                        <Span1>5 coins</Span1>
                        <PlusDiv>
                            <PlusImg src={require("../../Assets/add.png")} />
                        </PlusDiv>
                    </CoinDiv>
                    <MsgDiv>
                        {MyComponent()}
                    </MsgDiv>
                    <H3>Anfazkk</H3>
                </DivRight>
            </Headerr>
        </Dashboard>
    </>
  )
}

const Select = styled.select``

const Dashboard = styled.section``
const Wrapper = styled.section``
const Headerr = styled.header`
display:flex;
justify-content:space-between;
height:60px;
padding:15px;
align-items:center;
background: rgb(249, 249, 251);`
const DivLeft = styled.div`
width:100px;`
const LogoImg = styled.img`
display:block;
width:100%;`
const DivRight = styled.div`
display:flex;
align-items: center;`
const H3 = styled.h3`
font-size:16px;`
const MsgDiv = styled.div`
width:20px;
margin-right: 30px;
&:hover{

}`
const MsgImg = styled.img`
display:block;
width:100%;`
const CoinDiv = styled.div`
padding: 6px 16px;
    background: linear-gradient(90deg, rgb(255, 235, 59) 0%, rgb(255, 249, 196) 100%);
    border-radius: 26px 5px 5px 26px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    color: rgb(51, 51, 51);
    cursor: pointer;`
const Span1 = styled.span`
margin-right:10px;
font-size: 16px;
font-weight: 500;`
const PlusDiv = styled.div`
width:20px;
border-radius:50%;`
const PlusImg = styled.img`
display:block;
width:100%;`
const Input = styled.input`
width: 270%;
    padding: 8px;
    border-radius: 4px;
    border: dimgray;
    cursor: pointer;
    outline:none;`
const DivCenter = styled.form``


















