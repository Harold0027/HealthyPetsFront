// src/features/GestionServicios/ServiciosList.jsx
import CardServicio from "../../components/CardServicio";

const servicios = [
  { nombre: "Vacunas", descripcion: "Protege a tu mascota con todas las vacunas necesarias.", icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRILcEEPeYeq9WRZ8J-9QtBgkEpnRTdcyioA&s" },
  { nombre: "Baños y peluquería", descripcion: "Mantén a tu mascota limpia y saludable.", icono: "https://imgmedia.larepublica.pe/640x342/larepublica/original/2024/09/21/66eef21db90789431400e49e.webp" },
  { nombre: "Consultas médicas", descripcion: "Diagnóstico y tratamiento de enfermedades comunes.", icono: "https://escuelafarmacia.com/wp-content/uploads/cl%C3%ADnica-veterinaria.jpg" },
  { nombre: "Urgencias", descripcion: "Atención inmediata para cualquier emergencia.", icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOmcm6bePKodVsYvBh8uY2Eh2HNXRsLOiSg&s" },
  { nombre: "Cirugías", descripcion: "Procedimientos quirúrgicos realizados por especialistas.", icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMyBapbORf0cbpmU890tJ52caxpLbjpMbjA&s" },
  { nombre: "Nutrición", descripcion: "Planes de alimentación según la raza y edad de tu mascota.", icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDeCdpgELvg6E88ifE80fEQlq-oB5QvaJGg&s" },
];

export default function ServiciosList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicios.map((s, i) => (
        <CardServicio key={i} {...s} />
      ))}
    </div>
  );
}
