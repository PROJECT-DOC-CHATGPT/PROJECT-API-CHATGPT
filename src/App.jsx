import './index.css'

function App() {

  return (
    <>

     {/* Banner inicial */}

      <div id="banner">
        <p class="bn_t1">¡ENTRENA CON NOSOTROS!</p>
        <p class="bn_t2"><a href="#">Aplicar aquí</a> y haz realidad tu sueño de ser el Techie o Digital Marketer que has
          soñado.</p>
      </div>

     {/* Navbar Level Up */}
      <section id="menu">
        <a class="logo" href="#">
          <img src="https://levelup.gt/img/logo_negativo.png" />
        </a>
        <section id="nav">
          <a href="#" class="button active">Programas</a>
          <a href="#" class="button">Ser mentor</a>
          <a href="#" class="button">¿Por qué level up?</a>
          <a href="#" class="button">Contacto</a>
          <a href="#" class="button hot">Aplicar</a>
        </section>
      </section>


     {/* Formulario */}

    

      <div class="container text-center">
        <br />
      <header> <strong className='letter-font'> <h1>Generacion Autimatizada de Contenido Académico</h1></strong></header>
      <br />
        <div class="row">
          <div class="col">
            <br />
            <div>
              <label className='letter-font' htmlFor="">¿Que deseas primero?</label> <br />
              <select className='form-select' name="" id="">
                <option className='letter-font' value="">Elije una opcion</option>
                <option className='letter-font' value="">Introduccion</option>
                <option className='letter-font' value="">Resumen</option>
                <option className='letter-font' value="">Descripcion</option>
              </select> <br />
            </div>
            <br />
            <div>
              <br />
              <label className='letter-font' htmlFor="">¿Que ejemplo ilustrativo deseas?</label> <br />
              <select className='form-select' name="" id="">
                <option className='letter-font' value="">Elije una opcion</option>
                <option className='letter-font' value="">Diagrama de flujo</option>
                <option className='letter-font' value="">Mapa mental</option>
                <option className='letter-font' value="">Mapa conceptual</option>
              </select>
            </div>
          </div>
          <div class="col">        
            <input type="text" className='letter-font form-control' placeholder='Escribe tu tema ...' /> <br />
            <button type="button" className="letter-font position-absolute bottom-0 start-50 translate-middle-x generate btn btn-danger">Generar</button>
          </div>
          
          <div class="col">
          <br />
          <label className='letter-font' htmlFor="">¿Cuantos ejercicios practicos desea?</label> <br />
            <select className='form-select' name="" id="">
              <option className='letter-font' value="">Elije una opcion</option>
              <option className='letter-font' value="">1</option>
              <option className='letter-font' value="">2</option>
              <option className='letter-font' value="">3</option>
              <option className='letter-font' value="">4</option>
              <option className='letter-font' value="">5</option>
            </select> <br />
            <br />
            <div>
              <label className='letter-font' htmlFor="">Bateria de Preguntas:</label> <br />            
              <label className='letter-font' htmlFor="">¿Cuantas preguntas necesitas?</label> <br />
              <input type="number" className='letter-font form-control' placeholder='numero de preguntas ...' />
              <label className='letter-font' htmlFor="">Min: 10      Max: 15</label>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default App
