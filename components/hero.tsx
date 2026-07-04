import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        AI · Data · Software
      </p>
      <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
        AI-powered software solutions for businesses and the public sector
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
        VM AI Solutions designs and builds custom AI systems, analytics
        platforms, and modern software — turning data into decisions and ideas
        into working products.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Button size="lg" render={<a href="#contact" />}>
          Start a project
        </Button>
        <Button size="lg" variant="outline" render={<a href="#services" />}>
          Our services
        </Button>
      </div>
    </section>
  );
}
