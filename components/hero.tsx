const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  return (
    <section className="bg-white px-4 py-24 text-center sm:py-36">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/brand/logo-principal.svg`}
        alt="VM AI Solutions"
        className="mx-auto mb-10 w-44 sm:w-52"
      />
      <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight text-navy sm:text-7xl">
        AI-powered software.
        <br />
        Built for impact.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl font-light leading-relaxed text-navy/60 sm:text-2xl">
        Custom AI systems, analytics platforms, and modern software for
        businesses and the public sector.
      </p>
      <div className="mt-10 flex items-center justify-center gap-6">
        <a
          href="#contact"
          className="rounded-full bg-navy px-6 py-3 text-base font-medium text-white transition-colors hover:bg-navy/90"
        >
          Start a project
        </a>
        <a
          href="#services"
          className="text-base font-medium text-navy hover:underline"
        >
          Explore services <span aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  );
}
