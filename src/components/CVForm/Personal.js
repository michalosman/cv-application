import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import TextArea from "../Utils/TextArea";

const Personal = ({ onChange }) => {
  return (
    <Section
      title="Personal Information"
      titlePadding="0.5rem"
      direction="column"
    >
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First name"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="lastName"
        placeholder="Last name"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="Title"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="file"
        name="photo"
        placeholder="Photo"
        aria-label="photo"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Address"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="description"
        placeholder="Description"
      />
    </Section>
  );
};

export default Personal;
