import React, { useState } from "react";
import styled from "styled-components";
import CVForm from "./CVForm";
import CVResult from "./CVResult";
import { v4 as uuidv4 } from "uuid";
import exampleCV from "./Utils/exampleCV";
// import emptyCV from "./Utils/emptyCV";

//TODO
//finish adding and deleting experience & education items
//generating PDF
//validation

const Main = () => {
  const [cv, setCv] = useState(exampleCV);

  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      handleChangeFile(e);
      return;
    }

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    const index = cv.experience.findIndex(
      (experienceItem) => experienceItem.id === id
    );
    // TODO Refactor
    setCv((prevState) => {
      return {
        ...prevState,
        ...prevState.experience.map((experienceItem) => {
          if (experienceItem.id === id) {
            return { ...experienceItem, ...(experienceItem[name] = value) };
          }
        }),
      };
    });
  };

  const getExperienceById = (array, id) => {};

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    // setCv((prevState) => ({
    //   ...prevState,
    //   education: {
    //     ...prevState.education,
    //     [name]: value,
    //   },
    // }));
  };

  const handleAddExperience = (e) => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteExperience = (id) => {
    console.log(id);
  };

  const handleAddEducation = (e) => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };
  const handleDeleteEducation = (e) => {};

  return (
    <MainWrapper>
      <CVForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
      />
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
