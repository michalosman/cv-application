import React from "react";
import Section from "../Utils/Section";
import Button from "../Utils/Button";
import EducationItem from "./EducationItem";

const Education = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    ></EducationItem>
  ));

  return (
    <Section title="Education" titlePadding="0.5rem" direction="column">
      {educationItems}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Education;
