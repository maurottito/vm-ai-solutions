export function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 sm:py-36">
        <h2 className="text-balance text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg font-light text-navy/60 sm:text-xl">
          Have a project in mind or want to explore what AI can do for your
          organization?
        </p>
        <a
          href="mailto:hello@vmaisolutions.me"
          className="mt-10 inline-block rounded-full bg-navy px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy/90"
        >
          Get in touch
        </a>
        <p className="mt-4 text-sm text-navy/60">hello@vmaisolutions.me</p>
      </div>
    </section>
  );
}
