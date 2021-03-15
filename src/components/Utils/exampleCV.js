import examplePhoto from "../../assets/example_photo.png";
import { v4 as uuidv4 } from "uuid";

const exampleCV = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Data engineer",
    photo: examplePhoto,
    address: "Example street 20",
    phoneNumber: "123456789",
    email: "example@gmail.com",
    description: "Description",
  },
  experience: [
    {
      // id: uuidv4(),
      position: "Position",
      company: "Company",
      city: "City",
      from: "From",
      to: "To",
    },
  ],
  education: [
    {
      // id: uuidv4(),
      universityName: "University name",
      city: "City",
      degree: "...",
      subject: "...",
      from: "From",
      to: "To",
    },
  ],
};

export default exampleCV;
