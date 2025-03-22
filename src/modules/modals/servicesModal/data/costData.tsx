import { useLanguageContext } from "../../../../provider.tsx";
import { CostAditional } from "../interfaces/costAdicional.tsx";

export const useCostData = () => {
  const { t } = useLanguageContext();

  const cost: CostAditional[] = [
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.0.label",
        "Diseño Moderno"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.1.label",
        "Hosting"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.2.label",
        "Dominio"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.3.label",
        "Publicidad Paga (ADS)"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.4.label",
        "Carrito de compras"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.5.label",
        "Formulario de Registro y Login de usuarios"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.6.label",
        "Pasarela de Pago"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.7.label",
        "Formularios de Contacto"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.8.label",
        "SEO (Posicionamiento Orgánico)"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.9.label",
        "SEM (Posicionamiento Pago)"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.10.label",
        "Reservas y Agendamientos"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.11.label",
        "Comentarios y Reseñas"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.12.label",
        "Encuestas y Feedback"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.13.label",
        "Notificaciones automáticas por email o SMS"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.14.label",
        "Integración con redes sociales"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.15.label",
        "Integración para Google Maps"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.16.label",
        "ChatBox"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.17.label",
        "Botón de Whatsapp"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.18.label",
        "Reporte mensual de análisis de tráfico"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.19.label",
        "Entregas de informes Mensual"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.20.label",
        "ChatBox con Integración a Whatsapp"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.21.label",
        "Dashboard"
      ),
      included: false,
    },
  ];

  return cost;
};
