import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";

const Personal = () => {
  return (
    <Section title="Personal Information">
      <Input type="text" name="" placeholder="First name" />
      <Input type="text" name="" placeholder="Last name" />
      <Input type="text" name="" placeholder="Title" />
      <Input type="text" name="" placeholder="Photo" />
      <Input type="text" name="" placeholder="Email" />
      <Input type="text" name="" placeholder="Phone number" />
    </Section>
  );
};

export default Personal;
