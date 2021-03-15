import React from "react";
import Section from "../Utils/Section";
import Button from "../Utils/Button";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experiences = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <Section title="Experience" titlePadding="0.5rem" direction="column">
      {experiences}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Experience;
