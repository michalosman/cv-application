import React from "react";
import ExperienceItem from "./ExperienceItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <Section title="Experience" titlePadding="0.5rem" direction="column">
      {experienceItems}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Experience;
