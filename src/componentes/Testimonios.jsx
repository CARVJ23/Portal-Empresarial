export default function Testimonios() {
  const listaTestimonios = [
    {
      id: 1,
      nombre: "Laura Gómez",
      puesto: "Directora de Operaciones",
      comentario: "El equipo transformó por completo nuestra infraestructura digital. ¡Excelente servicio!",
      foto: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      puesto: "CEO en TechCorp",
      comentario: "Resultados increíbles y en tiempo récord. Sin duda volveremos a trabajar juntos.",
      foto: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      puesto: "Gerente de Producto",
      comentario: "La atención al detalle y la calidad técnica superaron nuestras expectativas.",
      foto: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="seccion">
      <h2>Testimonios de Clientes</h2>
      <div className="grid-testimonios">
        {listaTestimonios.map((item) => (
          <div key={item.id} className="card-testimonio">
            <img src={item.foto} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <h4>{item.puesto}</h4>
            <p>"{item.comentario}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}