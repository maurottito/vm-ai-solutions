import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BotIcon, ChartBarIcon, CodeIcon, BrainIcon } from "lucide-react";

const services = [
  {
    icon: BotIcon,
    title: "AI Solutions",
    description:
      "Custom chatbots, retrieval-augmented generation (RAG) systems, and AI assistants built on state-of-the-art language models and tailored to your data.",
  },
  {
    icon: ChartBarIcon,
    title: "Data Analytics",
    description:
      "Interactive dashboards, policy and impact evaluation, and analytics pipelines that turn raw data into clear, actionable insight.",
  },
  {
    icon: CodeIcon,
    title: "Software Development",
    description:
      "Full-stack web applications, APIs, and automation — designed, built, and shipped with modern engineering practices.",
  },
  {
    icon: BrainIcon,
    title: "Machine Learning Applications",
    description:
      "Predictive models, forecasting, and applied machine learning integrated directly into your products and workflows.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-14 border-t bg-muted/40">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          End-to-end delivery: from problem framing and prototyping to
          production systems.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="mb-2 size-8 text-primary" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
