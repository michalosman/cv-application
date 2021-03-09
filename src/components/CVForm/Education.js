import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";

const Education = () => {
  return (
    <Section title="Education" titlePadding="0.5rem" direction="column">
      <Input type="text" name="" placeholder="University name" />
      <Input type="text" name="" placeholder="City" />
      <Input type="text" name="" placeholder="Degree" />
      <Input type="text" name="" placeholder="Subject" />
      <Input type="text" name="" placeholder="From" />
      <Input type="text" name="" placeholder="To" />
    </Section>
  );
};

export default Education;
