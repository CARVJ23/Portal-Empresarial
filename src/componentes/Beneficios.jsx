export default function Beneficios() {
  const beneficios = [
    "Atención personalizada 24/7",
    "Alta escalabilidad y rendimiento",
    "Seguridad de nivel empresarial",
    "Soporte y mantenimiento continuo",
    "Precios competitivos y transparentes"
  ];

  return (
    <section className="seccion">
      <h2>Beneficios de Elegirnos</h2>
      <ul>
        {beneficios.map((beneficio, index) => (
          <li key={index}>✓ {beneficio}</li>
        ))}
      </ul>
    </section>
  );
}