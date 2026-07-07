export function Contact() {
  return (
    <section id="contact" className="scroll-mt-12 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 sm:py-36">
        <h2 className="text-balance text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-7xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-[#6e6e73] sm:text-xl">
          Have a project in mind or want to explore what AI can do for your
          organization?
        </p>
        <a
          href="mailto:hello@vmaisolutions.me"
          className="mt-10 inline-block rounded-full bg-[#0071e3] px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#0077ed]"
        >
          Get in touch
        </a>
        <p className="mt-4 text-sm text-[#6e6e73]">hello@vmaisolutions.me</p>
      </div>
    </section>
  );
}
