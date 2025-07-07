/*
!! Enviar HTML a las alumnas.

1) Utilizando el HTML brindado, realizar lo siguiente:

-Crear archivo .js y linkearlo al HTML.
-Crear una variable y almacenar el h3 del artículo.
-Cambiar el nombre del curso a través de la propiedad necesaria.
-Agregar texto a algún elemento HTML del index.
-Crear una variable y almacenar todos los enlaces existentes.
*/


//1

let titulo = document.querySelector('h3');
let cambio = titulo.innerHTML = 'Front-end Course';

let texto = document.querySelector('h1'); /// lo selecciono y aca modifico
let agregar = texto.innerHTML += ' Academy';

let enlaces = document.querySelectorAll('a');

//  Estoy creando una etiqueta <article> desde JS, la estoy guardando en la variable "crearArticle"
let crearArticle = document.createElement("article");
// Ahora con innerHTML le estoy agregando contentenido de texto del artículo
crearArticle.innerHTML = ' <h2> NotebookLM: qué es, cómo funciona y cómo usar la IA de Google para organizar fuentes de información o crear podcasts en minutos  </h2> ';

crearArticle.innerHTML = '<p> Vamos a explicarte qué es y cómo funciona NotebookLM, una herramienta de Google para organizar tus fuentes utilizando la inteligencia artificial. Se trata de un elemento curioso, en el que podrás subir varios artículos o documentos y luego hacer preguntas sobre ellos o crear un resumen en audio como si fuera un podcast. </p>  <p> Vamos a empezar el artículo explicándote qué es exactamente este programa, de forma que puedas entender su funcionamiento. Luego pasaremos a decirte cómo se utiliza y las opciones que tienes disponibles.</p>'
crearArticle.innerHTML = '<h3>Qué es NotebookLM </h3> '; 
crearArticle.innerHTML += '<p> NotebookLM es un servicio que te permite usar una inteligencia artificial para interactuar con un contenido que tú decidas. Todo lo que preguntes y hagas tendrá que ver con las fuentes que tú hayas añadido manualmente, y no se obtendrá la información de otro sitio.Cuando utilizas ChatGPT, Gemini u otro chatbot de inteligencia artificial, al hacerle una pregunta va a sacar la información de los datos con los que fue entrenado y de Internet.. </p>';
crearArticle.innerHTML += '<p>Sin embargo, con NotebookLM los datos se sacan solo de las fuentes que tú añadas, los artículos o documentos que subas a cada uno de los proyectos, que pueden ser PDF, archivos de texto o páginas web, incluso vídeos de YouTube o diapositivas de Google Slides. Además de eso, también puede crear escritos o resúmenes de audio a partir de estos datos. Estos resúmenes de audio son prácticamente un podcast.. </p>';
crearArticle.innerHTML += '<p>Por lo tanto, este cuaderno mágico es una especie de asistente de investigación y escritura. Te puede ayudar a aprender más de ciertos textos sin tener que leerlos todos, algo que también puede serte útil a la hora de estudiar, puesto que por poder, puedes incluso pedirle que te haga preguntas para luego responderlas.. </p>';
crearArticle.innerHTML += '<p>NotebookLM es una herramienta gratuita, aunque también tiene una versión de pago para quienes tengan suscripción con Google One para acceder a las mejores versiones de la IA de Google. Esta versión de pago incluye opciones de personalización de estilo, cuadernos colaborativos o más cantidad de resúmenes de audio, cuadernos y la posibilidad de añadir más fuentes en cada uno.</p>';
 crearArticle.innerHTML += '<p>Por último, es importante saber que NotebookLM también tiene varios aspectos negativos. Para empezar, a veces le falta precisión a la hora de encontrar datos en tus fuentes, no encontrando datos que sí están ahí. Además, puede cometer errores e inventarse cosas con las clásicas alucinaciones de la inteligencia artificial, y es todavía demasiado lenta con las respuestas. </p>';
 crearArticle.innerHTML += '<div> <img src="https://learnprompting.org/blog/notebooklm/NotebookLM_Image_11.png" alt="Imagen de notebookLM" width="700px" heigt="1000px" align="center"> </div>';

 crearArticle.innerHTML += '<small> Imagen del buscador de Google de la pantlla de NotebookLM </small>'


// Añadir el nodo Element como hijo de body
document.body.appendChild(crearArticle);

// Como selecciono el footer 
let footer = document.querySelector('footer');
console.log(footer);




