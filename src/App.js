import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

// * What is the problem?
// Write a program that takes user's input and generates a CV which can be downloaded as a PDF file

// * What interface do we need?
// - Input page
// - Preview & Download page

// * What functionality do we need?
// - Get data
// - Validate data
// - Store data
// - Generate CV preview
// - Generate PDF

// * Which tools may be useful?
//  styled-components
//  react-icons
//  react-to-print
//  jsToPDF
