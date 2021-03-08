import React from "react";
import Input from "../Utils/Input";
import FormSection from "./FormSection";

const Education = () => {
  return (
    <FormSection title="Education">
      <Input type="text" name="" placeholder="University name" />
      <Input type="text" name="" placeholder="City" />
      <Input type="text" name="" placeholder="Degree" />
      <Input type="text" name="" placeholder="Subject" />
      <Input type="text" name="" placeholder="From" />
      <Input type="text" name="" placeholder="To" />
    </FormSection>
  );
};

export default Education;
