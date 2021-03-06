import React from "react";
import Input from "../Utils/Input";
import FormSection from "../Utils/FormSection";

const Personal = () => {
  return (
    <FormSection title="Personal Information">
      <Input type="text" name="" placeholder="First name" />
      <Input type="text" name="" placeholder="Last name" />
      <Input type="text" name="" placeholder="Title" />
      <Input type="text" name="" placeholder="Photo" />
      <Input type="text" name="" placeholder="Email" />
      <Input type="text" name="" placeholder="Phone number" />
    </FormSection>
  );
};

export default Personal;
