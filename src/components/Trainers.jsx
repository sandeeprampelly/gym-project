import React from 'react';
import { trainerData } from '../Data/Data';
import './styles/trainers.css';

const Trainers = () => {
  return (
    <section className="trainers reveal" id="Trainers">
      <h2 className="section-title">Our Trainers</h2>
      <div className="trainers-grid">
        {
          trainerData.map((trainer) => (
            <div className="card" key={trainer.id}>
              <img src={trainer.img} alt="" />
              <h3>{trainer.name}</h3> 
              <p>{trainer.role}</p>          
            </div>
          ))}
      </div>
    </section>
  )
};

export default Trainers;