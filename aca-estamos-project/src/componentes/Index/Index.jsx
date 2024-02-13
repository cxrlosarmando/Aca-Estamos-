import React from "react"

const Index = () => {
return (
  <section>
  <div class="container-fluid">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./Img/carrusel1.png" id="img-carrusel" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="./Img/carrusel2.png" id="img-carrusel" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="./Img/carrusel3.png" id="img-carrusel" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  

  <div class="container-fluid">
    <div class="h2-conecta">
      <h2 class="h3-testimnios">Se parte de nosotros</h2>
    </div>
    <div class="contenido-card">
      <div class="Paso">
        <div class="step">
          <img src="./Img/Nota-registrate.png" alt="Paso 1"></img>
          <div class="contenedor-h3-card">
            <h3 class="h3-card">Regístrate</h3>
          </div>


        </div>
      </div>

      <div class="Paso">
        <div class="step">
          <img src="./Img/Nota-curriculum.png" alt="Paso 2"></img>
          <div class="contenedor-h3-card">
            <h3 class="h3-card">Haz tu CV </h3>
          </div>

        </div>
      </div>

      <div class="Paso">
        <div class="step">
          <img src="./Img/Conecta-Nota3.png" alt="Paso 3"></img>
          <div class="contenedor-h3-card">
            <h3 class="h3-card">Conecta</h3>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="container-fluid">
      <h2 class="h2-empleos text-fluid">¡Colaboradores!</h2>
    </div>

  <div class="contenido-Testimonios">
    <div class="container-testimonios">
      <h4 class="h3-testimnios">Ellos Confian en Nosotros</h4>
      <div class="container-color">
        <div class="color-linea"></div>
    </div>    
    </div>
    </div>
  <div class="contenido-empleos">
    
    <div class="container-my-5">
      <div class="container-fluid">
        
        <div class="row">
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/CCU-empresas.jpg" class="img-fluid" alt="CCU"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/bancochile-empresas.jpg" class="img-fluid" alt="Banco Chile"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/COCACOLA-Empresas.jpg" class="img-fluid" alt="Coca Cola"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/costanera-empresas.jpg" class="img-fluid" alt="Costanera"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/DO_Smart-Empresas.jpg" class="img-fluid" alt="DO Smart"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/HUELLALOCAL-Empresas.png" class="img-fluid" alt="Huella Local"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/SODIMAC-Empresas.png" class="img-fluid" alt="Huella Local"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/SOPROLE-Empresas.png" class="img-fluid" alt="Huella Local"></img>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="img">
              <img src="./Img/Generation-Empresas.png" class="img-fluid" alt="Huella Local"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  
  <div class="contenido-Testimonios">
    <div class="container-testimonios">
      <h2 class="h3-testimnios">Testimonios</h2>
      <div class="container-color">
        <div class="color-linea"></div>
      </div>
    </div>
  
    <div class="contenedor-testis">
      <div class="row">
        <div class="img-testimonios1">
          <div class="over-1">
            <div class="text-over">
              <h3 class="h3-over">Ricardo Caceres</h3>
              <p class="p-1">"Gracias Acá Estamos conseguí el trabajo de mis sueños"</p>
            </div>
  
          </div>
        </div>
        <div class="img-testimonios2">
          <div class="over-2">
            <div class="text-over">
              <h3 class="h3-over">Fernando Reyes</h3>
              <p class="p-2">"Gracias a Esta pagina pude hacer que mi curriculun fuese más visible y atractivo para las
                empresas"</p>
            </div>
          </div>
        </div>
        <div class="img-testimonios3">
          <div class="over-3">
            <div class="text-over">
              <h3 class="h3-over">Dayana Mendoza</h3>
              <p class="p-3">"Pude consenguir una pega mi comuna de algo que me apasiona, su ayuda con el curriculunfue la
                clave para conseguir conectar con la empresa"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    </section>  

)
}