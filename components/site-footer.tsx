function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-horizontal-blanco.svg"
          alt="VM AI Solutions"
          className="h-8 w-auto"
        />
        <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-6 text-xs text-white/70">
          <p>Copyright © {new Date().getFullYear()} VM AI Solutions LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/vm-ai-solutions-llc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VM AI Solutions on LinkedIn"
              className="text-white/70 transition-colors hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <p className="uppercase tracking-[0.08em]">AI · Data · Software</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
