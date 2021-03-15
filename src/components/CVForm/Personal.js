import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import TextArea from "../Utils/TextArea";
import FileInput from "../Utils/FileInput";

const Personal = ({ personalInfo, onChange }) => {
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
        value={personalInfo.firstName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="lastName"
        placeholder="Last name"
        value={personalInfo.lastName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
      />
      <FileInput
        onChange={(e) => onChange(e)}
        name="photo"
        label="Photo"
        value={personalInfo.photo}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Address"
        value={personalInfo.address}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        value={personalInfo.phoneNumber}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="description"
        placeholder="Description"
        value={personalInfo.description}
      />
    </Section>
  );
};

export default Personal;
