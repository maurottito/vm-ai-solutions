import { BotIcon, ChartBarIcon, CodeIcon, BrainIcon } from "lucide-react";

const services = [
  {
    icon: BotIcon,
    title: "AI Solutions",
    description:
      "Custom chatbots, RAG systems, and AI assistants built on state-of-the-art language models — tailored to your data.",
  },
  {
    icon: ChartBarIcon,
    title: "Data Analytics",
    description:
      "Interactive dashboards, policy and impact evaluation, and analytics pipelines that turn raw data into clear insight.",
  },
  {
    icon: CodeIcon,
    title: "Software Development",
    description:
      "Full-stack web applications, APIs, and automation — designed, built, and shipped with modern engineering practices.",
  },
  {
    icon: BrainIcon,
    title: "Machine Learning",
    description:
      "Predictive models, forecasting, and applied machine learning integrated directly into your products and workflows.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-12 bg-[#f5f5f7]">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
          What we do.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[#6e6e73]">
          End-to-end delivery — from problem framing and prototyping to
          production systems.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-10 transition-transform duration-300 hover:scale-[1.015]"
            >
              <service.icon
                className="size-9 text-[#0071e3]"
                strokeWidth={1.6}
              />
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[#6e6e73]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
