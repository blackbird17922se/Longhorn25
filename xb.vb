.box-menu-ini {
  border-radius: 7px;
  box-shadow: -2px 2px 5px #303030;
  background: #00000096;
  backdrop-filter: blur(2px);
  display: none;
  width: 640px;
  height: 445px;
  position: fixed;
  bottom: 51px;
  left: 0;
  padding: 10px;
  z-index: 10;
}

#box-menu-ini.active {
  display: block;
}

.menu-content {
  display: flex;
  height: 100%;
}

/* Sección Izquierda */
.menu-left-section {
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  color: white;
}

/* Imagen de la parte superior del inicio */
.imgUser {
  width: 59px;
  height: 59px;
  border-radius: 9px;
  margin-bottom: 10px;
  filter: brightness(1);
  -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, rgb(0 0 0 / 28%));
}

.accesos {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.item {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: background 0.2s ease;
}

.item:hover {
  background: #f9f9f92b;
  border-radius: 5px;
  box-shadow: -1px 2px 4px #a5a5a5;
}

.item a {
  text-decoration: none;
  font-size: 13px;
  color: #ffffff;
}

/* Sección Derecha */
.menu-right-section {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pinned-programs {
  background: #ebebeb;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  padding: 10px;
  height: 340px;
  overflow-y: auto;
}

.program-item-menu {
  text-align: left;
  padding: 6px;
  border-radius: 3px;
}

.program-item-menu:hover {
  background: #a0e4ff;
}

.program-item-menu a {
  text-decoration: none;
  font-size: 13px;
  color: #292929;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Opciones del sistema */
.system-actions {
  background-color: #848484;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: white;
}

.opcion-conf, .opcion-conf-sec-2 {
  border: 1px outset #b3b3b3;
  padding: 5px 10px;
  flex: 1;
  text-align: center;
}

.opcion-conf a, .opcion-conf-sec-2 a {
  text-decoration: none;
  font-size: 13px;
  color: white;
}

.opcion-conf-sec-2 a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
