import React from "react";

const VeiculoInfo = ({ veiculo }) => {
  return (
    <div className="container">
      <figure class="fotoVeiculo">
        <img class="img-fluid fotoVeiculo__img" src="assets/img/factor.jpg" />
        <figcaption class="fotoVeiculo__caption">Yamaha Factor 2017</figcaption>
      </figure>
      <div className="row">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Active
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VeiculoInfo;
