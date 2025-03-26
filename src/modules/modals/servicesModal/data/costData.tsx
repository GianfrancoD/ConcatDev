import { useLanguageContext } from "../../../../provider.tsx";
import { CostAditional } from "../interfaces/costAdicional.tsx";

export const useCostData = () => {
  const { t } = useLanguageContext();

  const cost: CostAditional[] = [
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "Leading Page"
      ),
      included: false,
      price: 300,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "Pagina Web Corporativa"
      ),
      included: false,
      price: 400,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "E-commerce"
      ),
      included: false,
      price: 600,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "Software"
      ),
      included: false,
      price: 800,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "Diseño Moderno (UX/UI)"
      ),
      included: false,
      price: 50,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "1-4 Paginas"
      ),
      included: false,
      price: 20,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "4-6 Paginas"
      ),
      included: false,
      price: 30,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "4-8 Paginas"
      ),
      included: false,
      price: 40,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.0.label",
        "5-10 Paginas"
      ),
      included: false,
      price: 50,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.1.label",
        "Hosting"
      ),
      price: 0,
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.2.label",
        "Dominio"
      ),
      price: 0,
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.3.label",
        "Publicidad Paga (ADS)"
      ),
      price: 200,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.4.label",
        "Carrito de compras"
      ),
      price: 800,
      included: false,
    },
    {
      label: t(
        // "services.servicesData.webDev.CostAddicional.4.label",
        "Gestión de Inventario"
      ),
      price: 600,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.5.label",
        "Formulario de Registro y Login de usuarios"
      ),
      price: 300,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.6.label",
        "Pasarela de Pago"
      ),
      price: 1750,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.7.label",
        "Formularios de Contacto"
      ),
      price: 10,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.8.label",
        "SEO (Posicionamiento Orgánico)"
      ),
      price: 150,
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.9.label",
        "SEM (Posicionamiento Pago)"
      ),
      price: 300,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.10.label",
        "Reservas y Agendamientos"
      ),
      price: 500,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.11.label",
        "Comentarios y Reseñas"
      ),
      price: 100,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.12.label",
        "Encuestas y Feedback"
      ),
      price: 100,
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
      price: 50,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.15.label",
        "Integración para Google Maps"
      ),
      price: 50,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.16.label",
        "ChatBox"
      ),
      price: 150,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.17.label",
        "Botón de Whatsapp"
      ),
      price: 50,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.18.label",
        "Reporte mensual de análisis de tráfico"
      ),
      price: 0,
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.19.label",
        "Entregas de informes Mensual"
      ),
      price: 0,
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.20.label",
        "ChatBox con Integración a Whatsapp"
      ),
      price: 1300,
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.21.label",
        "Dashboard"
      ),
      price: 1000,
      included: false,
    },
  ];

  return cost;
};
