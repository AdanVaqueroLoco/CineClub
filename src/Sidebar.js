import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <h1 className="menu-item" href="/">
        Películas Anteriores:

      </h1>
      <a className="menu-item" href="/salads">
      El Callejón de la Maldad
      </a>
      <a className="menu-item" href="/pizzas">
      La Villa Tumultuosa
      </a>
      <a className="menu-item" href="/desserts">
      Harry Rivera salva a la Higuera
      </a>

      <a className="menu-item" href="/desserts">
      Las Escalofriantes pero Interesantes Aventuras de Manny el Puerco
      </a>
      <a className="menu-item" href="/desserts">
      Shrek 2
      </a>
    </Menu>
  );
};