import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function FAQSection() {
	const [faq, setFaq] = useState([
		{
			id: 1,
			question: "What is Steyp?",
			answer: "Steyp is introducing a digital space for students to learn and become the future Engineers and Scientists. Steyp is looking for capable students who stands out, thinks differently, and keeps a spark to shine." 
		  },
		  {
			id: 2,
			question: "Why should i choose Steyp?",
			answer: "Steyp is building a Digital University for students to learn and become Engineers and Future Scientists irrespective of their age or educational background. All that is required is the aptitude for the field."
		  },
		  {
			id: 3,
			question: "Where i'm going to placed in?",
			answer: "Steyp, Tegain, Stickon, Dett ... You'll get places in one of our companies upto your skills."
		  },
		  {
			id: 4,
			question: "Is Steyp more important than other startups?",
			answer: "Definitly,Steyp's engineering program is a comprehensive training program for school students from 5th to 12th class, to mould them into skilled engineers and future scientists."
		  },
		  {
			id: 5,
			question: "What's i'm going to learn from Steyp?",
			answer: "Ui Enginnering, Backend Development, DevOps Engineering, Web Application Developer and so on."
		  },
		  {
			id: 6,
			question: "Who is the brand Ambassador in Steyp?",
			answer: "Megastar Mammooty"
		  },
	]);
	
	const [selectedFaq, setSelectedFaq] = useState("");

	return (
		<Contaniner>
			<Wrapper>
				<Title>Frequently Asked Questions</Title>
				<FaqContainer>
					<FaqUl>
					{faq.map((data) => (
						<FaqCard key={data.id} onClick={() => setSelectedFaq(data.id === selectedFaq ? "" : data.id)}
							className={data.id === selectedFaq && "active"}>
							<FaqQuestionCard>
								<Question className='qstn'>{data.question}</Question>
								<Arrow className={data.id === selectedFaq && "active"}>
									<img src={require("../Assets/plus.png")} />
								</Arrow>
							</FaqQuestionCard>
							<Answer className={data.id === selectedFaq && "active"}>
								{data.answer}
							</Answer>
						</FaqCard>
					))}
					</FaqUl>
				</FaqContainer>
				<FaqH3>Login Now! Enter your email to create or restart your membership.</FaqH3>
          		<FaqInput type={"text"} placeholder={"Email address"} required={"required"} />
          		<FaqButton type={"submit"} value={"Get Started"} />
			</Wrapper>
		</Contaniner>
	);
}

export default FAQSection;






const Wrapper = styled.section``
const Contaniner = styled.section`
	background :#000000;
	color:#fff;
	padding:30px 0px;
	text-align:center;`
const Title = styled.h1`
	text-align:center;
	font-size: 2rem;
	line-height: 1.1;
	margin-bottom:50px;`
const FaqContainer = styled.div`
	max-width: 830px;
	margin: 0 auto;`
const FaqUl = styled.ul``
const FaqCard = styled.li`
	background-color: #303030;
	padding: 0 30px;
	min-height: 20px;
	overflow: hidden;
	margin-bottom: 10px;
	transition: all 0.3s;
	cursor: pointer;
	&.active {
		background-color: #303030;
		padding-bottom: 20px;
	}`
const FaqQuestionCard = styled.div`
	height: 30px;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
    top: 24px;`
const Question = styled.h3`
	font-size: 1.4rem;
	font-weight: 400;
	padding: 10px 0;
	color:#fff;`
const Arrow = styled.span`
	display: block;
	img {
		height: 25px;
		filter:invert(1);
	}
	&.active {
		transform: rotate(45deg);
	}`
const Answer = styled.p`
	font-size: 1.3rem;
	font-weight: 400;
	color:#fff;
	overflow-y: scroll;
	height: 0px;
	white-space: pre-line;
	margin-right: -20px;
	&::-webkit-scrollbar {
		display: none;
	}
	&.active {
		text-align:left;
		height: auto;
		background-color: #303030;
		padding-top:15px;
	}`
const FaqH3 = styled.h3`
	margin:60px 0px 20px 0px;
	font-size:1rem;`
const FaqInput = styled.input`
min-width: 450px;
height: 40px!important;
	padding:10px;
	font-size:16px;
	border:none;
	outline:none;
	border-radius:2px;`
const FaqButton = styled.input`
font-size: 1rem;
min-height: 60px;
background: #e50914;
color: #fff;
border: none;
border-radius: 2px;
min-width: 190px;
cursor: pointer;
position: relative;
top: 0px;
border-left: 1px solid #333;`
// const AnswerLink = styled(Link)``;
