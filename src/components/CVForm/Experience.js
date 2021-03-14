import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Experience = ({ onChange }) => {
  return (
    <Section title="Experience" titlePadding="0.5rem" direction="column">
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="position"
        placeholder="Position"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="company"
        placeholder="Company"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
      />
      <Button text="Add"></Button>
    </Section>
  );
};

export default Experience;
