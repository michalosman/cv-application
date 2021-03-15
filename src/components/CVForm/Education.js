import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Education = ({ education, onChange, onAdd, onDelete }) => {
  return (
    <Section title="Education" titlePadding="0.5rem" direction="column">
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="universityName"
        placeholder="University name"
        value={education.universityName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={education.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={education.subject}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={education.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={education.to}
      />
      <Button text="Delete" onClick={onDelete}></Button>
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Education;
