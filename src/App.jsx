import { useState } from 'react';
import './index.css'
import axios from 'axios';
import FileSaver from 'file-saver';
import Mammoth from 'mammoth';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

  function App() {
      const [mainTopic, setMainTopic] = useState('')
      const [intro, setIntro] = useState('');
      const [exercises, setExercises] = useState('');
      const [image, setImage] = useState('');
      const [questions, setQuestions] = useState('')
      const [generatedContent, setGeneratedContent] = useState('');
      const [generatedImg, setGeneratedImg] =  useState('')
      
      async function generateWord() {
        try {
          const template = 'src/doc/Membrete.docx';
          const response = await axios.get({ responseType: 'arraybuffer' });
          const zip = new PizZip(response.data);
          const doc = new Docxtemplater().loadZip(zip);

          doc.setData({
            contenido: generateWord,
          });

          doc.render();

          // Generar el documento de Word
          const blob = doc.getZip().generate({
            type: 'blob',
            mimeType:
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          });

          // Descargar el archivo
          FileSaver.saveAs(blob, `${mainTopic}.docx`);
        } catch (error) {
          console.error('Error al generar el documento Word:', error);
        }
      };

      const handleGenerate = async () => {
        try {

          const responseImage = await axios.post('https://api.openai.com/v1/images/generations',{
            prompt: `React Native`,
            n: 1,
            size: "256x256",
          }, {
            headers: {
              'Authorization': 'Bearer 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',
            },
          });
          

          const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: `Generar un documento Word con tema principal de ${mainTopic} empezando con una ${intro} luego genera ${exercises} ejercicios practicos y por ultimo
            una bateria de preguntas de ${questions} preguntas variadas cortas, por ejemplo de seleccion multiple o respuesta directa y ordena el texto de forma que sea
            facil para la lectura`,
            max_tokens: 3000, // Número máximo de tokens en la respuesta generada
          }, {
            headers: {
              'Authorization': 'Bearer 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',
            },
          });

          const generatedContent = response.data.choices[0].text;
          const generatedImg = responseImage.data.data[0].url;
          setGeneratedContent(generatedContent);
          setGeneratedImg(generatedImg)
        } catch (error) {
          console.error('Error al generar el contenido:', error);
        }
      };
    return (
      <>

      {/* Banner inicial */}

        <div id="banner">
          <p className="bn_t1">¡ENTRENA CON NOSOTROS!</p>
          <p className="bn_t2"><a href="#">Aplicar aquí</a> y haz realidad tu sueño de ser el Techie o Digital Marketer que has
            soñado.</p>
        </div>

      {/* Navbar Level Up */}
        <section id="menu">
          <a className="logo" href="#">
            <img src="https://levelup.gt/img/logo_negativo.png" />
          </a>
          <section id="nav">
            <a href="#" className="button active">Programas</a>
            <a href="#" className="button">Ser mentor</a>
            <a href="#" className="button">¿Por qué level up?</a>
            <a href="#" className="button">Contacto</a>
            <a href="#" className="button hot">Aplicar</a>
          </section>
        </section>


      {/* Formulario */}

      

        <div className="container text-center">
          <br />
        <header> <strong className='letter-font'> <h1>Generacion Autimatizada de Contenido Académico</h1></strong></header>
        <br />
          <div className="row">
            <div className="col">
              <br />
              <div>
                <label className='letter-font' htmlFor="">¿Que deseas primero?</label> <br />
                <select onChange={({target: {value}}) => setIntro(value)} className='form-select'>
                  <option className='letter-font' value="">Elije una opcion</option>
                  <option className='letter-font' value="introduccion">Introduccion</option>
                  <option className='letter-font' value="resumen">Resumen</option>
                  <option className='letter-font' value="descripcion">Descripcion</option>
                </select> <br />
              </div>
              <br />
              <div>
                <br />
                <label className='letter-font' htmlFor="">¿Que ejemplo ilustrativo deseas?</label> <br />
                <select className='form-select' onChange={({target: {value}}) => setImage(value)}>
                  <option className='letter-font' value="">Elije una opcion</option>
                  <option className='letter-font' value="">Diagrama de flujo</option>
                  <option className='letter-font' value="">Mapa mental</option>
                  <option className='letter-font' value="">Mapa conceptual</option>
                </select>
              </div>
            </div>
            <div className="col">        
              <input type="text" onChange={({target: {value}}) => setMainTopic(value)} className='letter-font form-control' placeholder='Escribe tu tema ...' /> <br />
              <button type="button" onClick={handleGenerate} className="letter-font position-absolute bottom-0 start-50 translate-middle-x generate btn btn-danger">Generar</button>
            </div>
            
            <div className="col">
            <br />
            <label className='letter-font' htmlFor="">¿Cuantos ejercicios practicos desea?</label> <br />
              <select className='form-select'onChange={({target: {value}}) => setExercises(value)}>
                <option className='letter-font' value="">Elije una opcion</option>
                <option className='letter-font' value="1">1</option>
                <option className='letter-font' value="2">2</option>
                <option className='letter-font' value="3">3</option>
                <option className='letter-font' value="4">4</option>
                <option className='letter-font' value="5">5</option>
              </select> <br />
              <br />
              <div>
                <label className='letter-font' htmlFor="">Bateria de Preguntas:</label> <br />            
                <label className='letter-font' htmlFor="">¿Cuantas preguntas necesitas?</label> <br />
                <input type="number" onChange={({target: {value}}) => setQuestions(value)} className='letter-font form-control' placeholder='numero de preguntas ...' />
                <label className='letter-font' htmlFor="">Min: 10      Max: 15</label>
              </div>
              {generatedContent && (
          <div className="generated-content">
            <h2>Contenido Generado:</h2>
            {generatedContent}
            <button onClick={generateWord}>descargar</button>
            {/* Puedes agregar lógica para descargar el contendido como un archivo Word aquí */}
          </div>
        )}
            </div>
          </div>
        </div>
        <footer>
        <figure className="logo_foot">
              <img src="" />
          </figure>
          <section className="info mx-5">
              <section className="secciones grow">
                  <p>SECCIONES</p>
                  <a href="">
                      <p>¿Quiénes somos?</p>
                  </a>
                  <a href="">
                      <p>¿Qué hacemos?</p>
                  </a>
                  <a href="">
                      <p>Términos y condiciones</p>
                  </a>
              </section>
              <section className="informacion grow">
                  <p>INFORMACIÓN</p>
                  <section className="nav-info">
                      <a href="index.html">
                          <p>Level up</p>
                      </a>
                      <a href="index.html#programas">
                          <p>Programas</p>
                      </a>
                      <a href="index.html#contacto">
                          <p>Contacto</p>
                      </a>
                      <a href="form.html">
                          <p>Aplicar</p>
                      </a>
                      <a href="mentor.html">
                          <p>Ser mentor</p>
                      </a>
                      <a href="index.html#vovacion">
                          <p>¿Por qué Level up?</p>
                      </a>
                  </section>
              </section>
              <section className="redes grow">
                  <p>SIGUENOS EN</p>
                  <div className="sm_nav">
                      <a href="https://www.facebook.com/somoslevelup/"><i className="fa-brands fa-facebook"></i></a>
                      <a href="https://www.linkedin.com/company/somoslevelup"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="https://instagram.com/somos_levelup?igshid=YmMyMTA2M2Y="><i className="fa-brands fa-instagram"></i></a>
                  </div>
              </section>
            </section>
        </footer>
      </> 
    )
  }

  export default App
