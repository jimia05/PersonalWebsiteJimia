import React from "react";
import Card from "./Card";

const Contact = () => (
  <Card>
    <h2 className="text-2xl font-bold mb-2">Contact</h2>
    <p>
      Email:{" "}
      <a
        href="mailto:jimiaderele@gmail.com"
        className="text-blue-500 underline"
      >
        jimiaderele@gmail.com
      </a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/fadejimi-aderele-51522b264/"
        className="text-blue-500-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
      Fadejimi Fesojaye Aderele
      </a>
    </p>
  </Card>
);

export default Contact;