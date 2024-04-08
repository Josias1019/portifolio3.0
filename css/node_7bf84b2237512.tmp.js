* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #606772; 
  background-size: auto;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
}

/* Início css do menu */
#menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-align: center;
  font-size: 2em;

  top: 0;
  max-height: 150px; height: 100%;
  width: 100%;
  margin-top: 2.5%;
  margin-left: 2.5%;
  z-index: 1000;
}

.main-menu {
  display: flex;
  flex-direction: row;
}

i {
  color: #FFA500;
}

.li-menu {
  
  text-decoration: none;
  margin: 5%;
  list-style: none;
}

.link-menu {
  background-color: #5d4528;
  max-height: 10px;
  height: 100%;
  max-width: 30px;
  width: 100%;
  padding: 20px;
  
  border-radius: 50%;
}

/* inicio css conteúdo principal */

main {
  display: flex;
  align-items: center;
  margin-top: 7%;
  margin-bottom: 250px;
}

#text-apresentation {
  background-color: #5d45285d;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin-left: 3%;
  height: 400px;
  width: 1100px;
  border-radius: 30px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.562);
}

.text-main {
  margin: 50px;
}

.slider {
  margin-left: 100px;
}

.imagem-slider {
  max-height: 520px;
  height: auto;
  max-width: 520px;
  width: auto;
  border-radius: 100%;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.562);
}

/* inicio css rodapé */

footer {
  height: 300px;
  background-color: #282a36;
  position: relative;
}