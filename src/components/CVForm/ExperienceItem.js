import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const ExperienceItem = ({ experienceItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="company"
        placeholder="Company"
        value={experienceItem.company}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={experienceItem.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={experienceItem.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={experienceItem.to}
      />
      <Button text="Delete" onClick={onDelete}></Button>
    </>
  );
};

export default ExperienceItem;
