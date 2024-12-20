import { CostAditional } from "../interfaces/costAdicional.tsx";

export const cost: CostAditional[] = [
  { label: "Diseño", included: false },
  { label: "Hosting", included: true },
  { label: "Dominio", included: true },
  { label: "Publicidad Paga (ADS)", included: false },
  {
    label: "Carrito de compras",
    included: false,
    required: "Base de Datos",
  },
  {
    label: "Formulario de Registro y Login de usuarios",
    included: false,
    required: "Base de Datos",
  },
  {
    label: "Pasarela de Pago",
    included: false,
    required: "Base de Datos",
  },
  {
    label: "Formularios de Contacto",
    included: false,
    required: "Base de Datos",
  },
  { label: "SEM (Posicionamiento Pago)", included: false },
  { label: "SEO (Posicionamiento Orgánico)", included: false },
  {
    label: "Reservas y Agendamientos",
    included: false,
    required: "Base de datos",
  },
  {
    label: "Comentarios y Reseñas",
    included: false,
    required: "Base de datos",
  },
  {
    label: "Encuestas y Feedback",
    included: false,
    required: "Base de datos",
  },
  {
    label: "Notificaciones automáticas por email o SMS,",
    included: false,
    required: "Base de datos",
  },
  {
    label: "Integración con redes sociales",
    included: false,
    required: "Base de datos",
  },
];
