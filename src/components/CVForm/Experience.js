import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";

const Experience = () => {
  return (
    <Section title="Experience" titlePadding="0.5rem">
      <Input type="text" name="" placeholder="Company" />
      <Input type="text" name="" placeholder="City" />
      <Input type="text" name="" placeholder="Position" />
      <Input type="text" name="" placeholder="From" />
      <Input type="text" name="" placeholder="To" />
    </Section>
  );
};

export default Experience;
