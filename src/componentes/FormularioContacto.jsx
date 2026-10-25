import { useState } from 'react';

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    comentario: ''
  });

  const [mensajeError, setMensajeError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const MAX_CARACTERES = 50;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validación del límite de 50 caracteres para el área de comentarios
    if (name === 'comentario' && value.length > MAX_CARACTERES) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeError('');
    setMensajeExito('');

    // Validar que todos los campos estén llenos
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.telefono.trim() || !formData.comentario.trim()) {
      setMensajeError('Todos los campos deben estar llenos.');
      return;
    }

    // Éxito
    setMensajeExito('¡Formulario enviado con éxito!');
    setFormData({ nombre: '', correo: '', telefono: '', comentario: '' });
  };

  return (
    <section className="seccion">
      <h2>Formulario de Contacto</h2>

      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Comentario:</label>
          <textarea
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            rows="3"
          />
          <small className="contador">
            Caracteres restantes: {MAX_CARACTERES - formData.comentario.length}
          </small>
        </div>

        {/* Mensajes en pantalla en lugar de alert() */}
        {mensajeError && <p className="error">{mensajeError}</p>}
        {mensajeExito && <p className="exito">{mensajeExito}</p>}

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}