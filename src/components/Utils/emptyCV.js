import { v4 as uuidv4 } from "uuid";

const exampleCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

export default exampleCV;
