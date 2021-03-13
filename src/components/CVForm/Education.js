import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";

const Education = ({ onChange }) => {
  return (
    <Section title="Education" titlePadding="0.5rem" direction="column">
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="universityName"
        placeholder="University name"
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
        name="degree"
        placeholder="Degree"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="subject"
        placeholder="Subject"
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
    </Section>
  );
};

export default Education;
