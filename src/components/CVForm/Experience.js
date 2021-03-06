import React from "react";
import Input from "../Utils/Input";
import FormSection from "../Utils/FormSection";

const Experience = () => {
  return (
    <FormSection title="Experience">
      <Input type="text" name="" placeholder="Company" />
      <Input type="text" name="" placeholder="City" />
      <Input type="text" name="" placeholder="Position" />
      <Input type="text" name="" placeholder="From" />
      <Input type="text" name="" placeholder="To" />
    </FormSection>
  );
};

export default Experience;
