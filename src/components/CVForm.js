import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

function CVForm() {
  return (
    <form>
      <Personal />
      <br />
      <br />
      <Education />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <button>Create CV</button>
    </form>
  );
}

export default CVForm;
