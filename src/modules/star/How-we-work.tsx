"use client";

import { useState } from "react";
import {
  Bug,
  ChevronRight,
  FileCheck,
  MessageSquare,
  PenTool,
  Rocket,
  Target,
} from "lucide-react";
import React from "react";
import { useLanguageContext } from "../../provider";

export default function ComoTrabajamos() {
  const [activeStep, setActiveStep] = useState(1);
  const { t } = useLanguageContext();

  const steps = [
    {
      id: 1,
      icon: <MessageSquare className="h-10 w-10 text-orange-400" />,
      title: t(
        "howWeWork.steps.step1.title",
        "Consulta Inicial y Análisis de Requisitos"
      ),
      description: t(
        "howWeWork.steps.step1.shortDescription",
        "Conversamos sobre tu proyecto para entender tus objetivos y necesidades."
      ),
      details: t(
        "howWeWork.steps.step1.fullDescription",
        "Programamos una reunión para conocer a fondo tu negocio, analizar tu situación actual y definir los objetivos que deseas alcanzar."
      ),
    },
    {
      id: 2,
      icon: <Target className="h-10 w-10 text-orange-400" />,
      title: t(
        "howWeWork.steps.step2.title",
        "Propuesta Estratégica y Planificación"
      ),
      description: t(
        "howWeWork.steps.step2.shortDescription",
        "Desarrollamos un plan personalizado adaptado a tus necesidades."
      ),
      details: t(
        "howWeWork.steps.step2.fullDescription",
        "Basándonos en la información recopilada, diseñamos una estrategia detallada que incluye el alcance del proyecto, metodología, plazos y presupuesto. Te presentamos esta propuesta para su revisión y ajustes."
      ),
    },
    {
      id: 3,
      icon: <PenTool className="h-10 w-10 text-orange-400" />,
      title: t(
        "howWeWork.steps.step3.title",
        "Diseño y Desarrollo del Proyecto"
      ),
      description: t(
        "howWeWork.steps.step3.shortDescription",
        "Implementamos las soluciones acordadas con actualizaciones regulares."
      ),
      details: t(
        "howWeWork.steps.step3.fullDescription",
        "Una vez aprobada la propuesta, comenzamos el proceso de diseño y desarrollo. Mantenemos una comunicación constante con revisiones periódicas para asegurar que el proyecto avanza según lo planeado y cumple con tus expectativas."
      ),
    },
    {
      id: 4,
      icon: <FileCheck className="h-10 w-10 text-orange-400" />,
      title: t(
        "howWeWork.steps.step6.title",
        "Revisión, Ajustes y Refinamiento"
      ),
      description: t(
        "howWeWork.steps.step6.shortDescription",
        "Refinamos el proyecto basándonos en tus comentarios."
      ),
      details: t(
        "howWeWork.steps.step6.fullDescription",
        "Presentamos el proyecto para tu revisión detallada. Recogemos tus comentarios, realizamos los ajustes necesarios."
      ),
    },
    {
      id: 5,
      icon: <Bug className="h-10 w-10 text-orange-400" />,
      title: t("howWeWork.steps.step6.title", "Testeos, Debugs y Optimización"),
      description: t(
        "howWeWork.steps.step6.shortDescription",
        "Identificamos y corregimos errores técnicos."
      ),
      details: t(
        "howWeWork.steps.step6.fullDescription",
        "Realizamos pruebas unitarias, de integración y de rendimiento. Identificamos y corregimos cualquier error encontrado durante las pruebas para asegurar un producto estable y eficiente."
      ),
    },
    {
      id: 6,
      icon: <Rocket className="h-10 w-10 text-orange-400" />,
      title: t("howWeWork.steps.step6.title", "Lanzamiento y Soporte Continuo"),
      description: t(
        "howWeWork.steps.step6.shortDescription",
        "Implementamos la solución final y proporcionamos soporte continuo."
      ),
      details: t(
        "howWeWork.steps.step6.fullDescription",
        "Realizamos el lanzamiento oficial de tu proyecto y te ofrecemos capacitación sobre su uso. Además, proporcionamos soporte técnico continuo y asesoramiento para maximizar los resultados y adaptarnos a nuevas necesidades que puedan surgir."
      ),
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#1a1438] via-[#312760]/50 to-[#1a1438]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{t("howWeWork.title", "Cómo")} </span>
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              {t("howWeWork.title2", "Trabajamos")}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t(
              "howWeWork.subtitle",
              "Nuestro proceso está diseñado para garantizar transparencia, eficiencia y resultados excepcionales en cada proyecto."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative cursor-pointer ${
                activeStep === step.id
                  ? "border-b-2 border-orange-400"
                  : "border-b-2 border-gray-700 opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex flex-col items-center p-4">
                <div className="mb-3">{step.icon}</div>
                <h3 className="text-white text-lg font-medium mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm text-center hidden md:block">
                  {step.description}
                </p>
                {activeStep === step.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <div className="flex max-[425px]:flex-col max-[425px]:text-center max-[425px]:items-center items-start gap-4">
            <div className="bg-gray-500/20 p-5 max-[1024px]:my-4 max-[768px]:py-10 max-[425px]:py-5 rounded-2xl">
              {steps.find((step) => step.id === activeStep).icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeStep}{" "}
                {steps.find((step) => step.id === activeStep).title}
              </h3>
              <p className="text-gray-300">
                {steps.find((step) => step.id === activeStep).details}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-black font-medium transition-transform hover:scale-105"
          >
            {t("howWeWork.cta", "Empieza tu proyecto con nosotros")}
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
