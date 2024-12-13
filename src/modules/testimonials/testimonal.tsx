import React from "react";
const testimonials = [
  {
    quote:
      "Working with Brandmode has been transformative for our business. Their strategic approach and creative solutions have delivered exceptional results.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "The team's attention to detail and innovative thinking has helped us achieve our marketing goals and exceed our expectations.",
    author: "Michael Chen",
    position: "Marketing Director, InnovateCo",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "Their expertise in digital marketing and brand development has been invaluable to our growth and success in the market.",
    author: "Emma Williams",
    position: "Founder, StartupX",
    image: "/placeholder.svg?height=64&width=64",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
