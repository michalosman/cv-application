import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import TextArea from "../Utils/TextArea";

const Personal = () => {
  return (
    <Section
      title="Personal Information"
      titlePadding="0.5rem"
      direction="column"
    >
      <Input type="text" name="" placeholder="First name" />
      <Input type="text" name="" placeholder="Last name" />
      <Input type="text" name="" placeholder="Title" />
      <Input type="text" name="" placeholder="Photo" />
      <Input type="text" name="" placeholder="Address" />
      <Input type="text" name="" placeholder="Phone number" />
      <Input type="text" name="" placeholder="Email" />
      <TextArea name="" placeholder="Description" />
    </Section>
  );
};

export default Personal;
