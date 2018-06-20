import React from "react";
import CadastroMoto from "./cadastro_moto";

const CadastroVeiculo = props => {
  const motoCadastro = props.videos.map(video => {
    return (
      <div>
        <ul className="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Carro
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Moto
            </a>
          </li>
        </ul>

        <form>
          <div className="form-group">
            {/* receber componente cadastro carro ou cadastro moto */}
          </div>
        </form>
      </div>
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

//export default VideoList;
