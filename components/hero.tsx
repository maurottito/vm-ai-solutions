export function Hero() {
  return (
    <section className="bg-white px-4 py-28 text-center sm:py-40">
      <p className="mb-5 text-lg font-medium text-[#6e6e73]">VM AI Solutions</p>
      <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-7xl">
        AI-powered software.
        <br />
        Built for impact.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-[#6e6e73] sm:text-2xl">
        Custom AI systems, analytics platforms, and modern software for
        businesses and the public sector.
      </p>
      <div className="mt-10 flex items-center justify-center gap-6">
        <a
          href="#contact"
          className="rounded-full bg-[#0071e3] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#0077ed]"
        >
          Start a project
        </a>
        <a
          href="#services"
          className="text-base font-medium text-[#0066cc] hover:underline"
        >
          Explore services <span aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  );
}
