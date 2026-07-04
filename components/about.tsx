export function About() {
  return (
    <section id="about" className="scroll-mt-12 bg-black">
      <div className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 sm:py-36">
        <h2 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Engineering depth.
          <br />
          <span className="bg-gradient-to-r from-[#0090f7] via-[#6d5df6] to-[#e64aa9] bg-clip-text text-transparent">
            Research rigor.
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#a1a1a6] sm:text-xl">
          We build systems grounded in data science, applied machine learning,
          and economics research — for startups, enterprises, and public-sector
          organizations. Understand the problem, prototype fast, measure what
          matters, and ship software that holds up in production.
        </p>
      </div>
    </section>
  );
}
