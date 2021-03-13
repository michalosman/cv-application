import React, { useState } from "react";
import styled from "styled-components";
import CVForm from "./CVForm";
import CVResult from "./CVResult";
import examplePhoto from "../assets/example_photo.png";

const Main = () => {
  const [cv, setCv] = useState({
    personalInfo: {
      firstName: "John",
      secondName: "Doe",
      titleName: "Data engineer",
      photo: examplePhoto,
      address: "Example street 20",
      phoneNumber: "123456789",
      email: "example@gmail.com",
      description: "Description",
    },
    experience: {
      position: "Position",
      company: "Company",
      city: "City",
      from: "From",
      to: "To",
    },
    education: {
      universityName: "University name",
      city: "City",
      degree: "...",
      subject: "...",
      from: "From",
      to: "To",
    },
  });

  const handleInput = (e) => {
    console.log(e.value);
  };

  return (
    <MainWrapper>
      <CVForm onChange={handleInput} />
      <CVResult cv={cv} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
  padding: 5rem;
  margin-bottom: 4rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export default Main;
