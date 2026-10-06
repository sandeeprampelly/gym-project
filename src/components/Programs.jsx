
import React from "react";
import { programData } from "../Data/Data";
import "./styles/programes.css";
const Programs = () => {
  return (
    <section className="programs reveal" id="Programs">
      <h2 className="section-title">Our Training Programs</h2>

      <div className="programs-grid">
        {
        programData.map((program) => (
          <div className="card" key={program.id}>
            <img src={program.img} alt="" />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;