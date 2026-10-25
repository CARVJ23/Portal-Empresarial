import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaPython, FaDatabase, FaAws 
} from 'react-icons/fa';

export default function Tecnologias() {
  const listaTecnologias = [
    { nombre: "React", icono: <FaReact color="#61dafb" /> },
    { nombre: "JavaScript", icono: <FaJs color="#f7df1e" /> },
    { nombre: "HTML5", icono: <FaHtml5 color="#e34f26" /> },
    { nombre: "CSS3", icono: <FaCss3Alt color="#1572b6" /> },
    { nombre: "Node.js", icono: <FaNodeJs color="#339933" /> },
    { nombre: "Git", icono: <FaGitAlt color="#f05032" /> },
    { nombre: "Docker", icono: <FaDocker color="#2496ed" /> },
    { nombre: "Python", icono: <FaPython color="#3776ab" /> },
    { nombre: "Databases", icono: <FaDatabase color="#4479a1" /> },
    { nombre: "AWS", icono: <FaAws color="#ff9900" /> },
  ];

  return (
    <section className="seccion">
      <h2>Tecnologías que Implementamos</h2>
      <div className="grid-tecnologias">
        {listaTecnologias.map((tech, index) => (
          <div key={index} className="card-tech">
            <div className="icono-tech">{tech.icono}</div>
            <p>{tech.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}