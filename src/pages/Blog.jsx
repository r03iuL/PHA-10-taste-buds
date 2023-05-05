import React from "react";
import { Button, Container } from "react-bootstrap";
import html2pdf from "html2pdf.js";

const handleSavePDF = () => {
  const input = document.getElementById("pdf-content");
  html2pdf(input);
};

function Blog() {
  return (
    <Container>
      <div id="pdf-content">
        <div className="border-bottom bg-secondary text-white p-4 rounded m-4">
          <h3>
            1.Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <h4>Answer :</h4>
          <p>
            In React, components can be classified into two types: controlled
            and uncontrolled components. Uncontrolled components manage their
            own state internally, relying on the browser's DOM to handle form
            data. Examples of uncontrolled components include HTML input
            elements like text input, checkboxes, and radio buttons. On the
            other hand, controlled components have their state managed by React
            through the use of component props and event handlers. This allows
            for more precise control over form data and easier manipulation of
            form data before submission. Overall, the choice between using
            controlled and uncontrolled components depends on the specific needs
            of the application and the level of control required over the form
            data.
          </p>
        </div>
        <div className="border-bottom bg-secondary text-white p-4 rounded m-4">
          <h3>2.How to validate React props using PropTypes.</h3>
          <h4>Answer :</h4>
          <p>
            In React, PropTypes is a typechecking library that allows developers
            to validate the data types of props passed to a component. Here are
            the steps to validate React props using PropTypes: <br /> 1.Install PropTypes
            by running "npm install --save prop-types" in your terminal or
            command prompt. <br /> 2.Import PropTypes in your component by adding "import
            PropTypes from 'prop-types';" at the top of your file.<br />3. Define the
            expected data types of your props by adding a propTypes object to
            your component. For example, if you want to validate that a prop
            named "name" is a string, you would add "name: PropTypes.string" to
            your propTypes object.<br /> 4. If a prop is passed to your component that
            does not match the expected data type, a warning will be logged in
            the console. <br />5.You can also set default props for your component by
            adding a defaultProps object. This ensures that your component has a
            fallback value if a prop is not passed to it.
          </p>
        </div>
        <div className="border-bottom bg-secondary text-white p-4 rounded m-4">
          <h3>3.Tell us the difference between nodejs and express js.</h3>
          <h4>Answer :</h4>
          <p>
          Node.js is a JavaScript runtime that enables JavaScript code to be executed outside of a web browser. It provides a platform for creating server-side applications using JavaScript. Express.js is a web framework built on top of Node.js, which provides additional functionality for developing web applications. While Node.js offers a set of core modules for building server-side applications, Express.js offers features such as middleware, routing, and templating engines to simplify the development of web applications. Although Node.js can be used to build a variety of applications such as desktop and command-line tools, Express.js is primarily used for creating web applications.
          </p>
        </div>
        <div className="border-bottom bg-secondary text-white p-4 rounded m-4">
          <h3>
            4.What is a custom hook, and why will you create a custom hook.
          </h3>
          <h4>Answer :</h4>
          <p>
          In React, a custom hook is a function that allows you to extract and reuse logic from a component, making it more modular and easier to maintain. Custom hooks are usually created to handle a specific piece of logic that can be shared across multiple components. For example, you might create a custom hook to handle form validation, or to fetch data from an API. By creating a custom hook, you can separate the logic from the component and reuse it across different components, making your code more efficient and easier to manage. Overall, custom hooks are a powerful tool that allows you to create reusable code and reduce code duplication.
          </p>
        </div>
      </div>

      <Button className="mb-5" onClick={handleSavePDF} variant="info">
        Save as PDF
      </Button>
    </Container>
  );
}

export default Blog;
