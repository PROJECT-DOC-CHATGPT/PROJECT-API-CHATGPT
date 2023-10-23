import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de tener instalado axios en tu proyecto
import './index.css'; // Asegúrate de importar tu archivo CSS

function App() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        prompt: `Generar un documento Word sobre ${selectedOption1} utilizando un ${selectedOption2} como ejemplo.`,
        max_tokens: 150, // Número máximo de tokens en la respuesta generada
        // ... otros parámetros de la solicitud según tus necesidades
      }, {
        headers: {
          'Authorization': 'Bearer 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',
        },
      });

      const generatedContent = response.data.choices[0].text;
      setGeneratedContent(generatedContent);
    } catch (error) {
      console.error('Error al generar el contenido:', error);
    }
  };

  return (
    <>
      {/* Tu JSX existente */}
      {/* ... */}
      <button
        type="button"
        className="letter-font position-absolute bottom-0 start-50 translate-middle-x generate btn btn-danger"
        onClick={handleGenerate}
      >
        Generar
      </button>

      {/* Mostrar el contenido generado */}
      {generatedContent && (
        <div className="generated-content">
          <h2>Contenido Generado:</h2>
          <p>{generatedContent}</p>
          {/* Puedes agregar lógica para descargar el contenido como un archivo Word aquí */}
        </div>
      )}

      {/* Tu JSX existente */}
      {/* ... */}
    </>
  );
}

export default App;