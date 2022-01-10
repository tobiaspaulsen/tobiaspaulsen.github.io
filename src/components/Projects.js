import React from "react";
import "./Projects.css";
import CardItem from "./CardItem";

function Projects() {
  return (
    <div className="cards">
      <h1>My Projects:</h1>
      <div className="cards-container">
        <ul className="card-items">
          <CardItem
            src="images/frontend.png"
            title="This Page!"
            text="First time working frontend."
            label="React"
            path="https://github.com/tobiaspaulsen/tobiaspaulsen.github.io"
          />
          <CardItem
            src="images/sorting.jpg"
            title="Sorting visualiser"
            text="Visualiser for Bubble-, Insertion-, Selection-, Quick-, and Heap Sort. Demonstrates how the different algorithms work."
            label="React"
            path="https://tobiaspaulsen.github.io/sorting"
          />
        </ul>
        <ul className="card-items">
          <CardItem
            src="images/nrk.jpg"
            title="Summer Internship NRK"
            text="Backend for NRK TV, we created an automatically generated page for downloadable content."
            label=".NET + C#"
            path="https://tv.nrk.no/programmer/offline"
          />
          <CardItem
            src="images/tsp.jpg"
            title="Genetic Algorithm for TSP"
            text="Solution of the travelling salesman problem with a genetic algorithm and a hybrid algorithm."
            label="Python"
            path="https://github.com/tobiaspaulsen/TSP-GeneticAlgorithm"
          />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
