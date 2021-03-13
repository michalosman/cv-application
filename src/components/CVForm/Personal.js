import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import TextArea from "../Utils/TextArea";
import FileInput from "../Utils/FileInput";

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
      <FileInput onChange={(e) => onChange(e)} name="photo" label="Photo" />
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
