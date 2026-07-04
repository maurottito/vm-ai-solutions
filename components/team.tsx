import Image from "next/image";
import { GraduationCapIcon } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

const team = [
  {
    name: "Mauro Ttito",
    initials: "MT",
    photo: "/team-mauro.jpg",
    role: "AI & Software Engineering Specialist",
    bio: "Data scientist and software engineer focused on AI systems, RAG pipelines, and analytics platforms. MS in Computational Analysis and Public Policy, University of Chicago.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maurottito/",
        icon: LinkedinIcon,
      },
      {
        label: "GitHub",
        href: "https://github.com/maurottito",
        icon: GithubIcon,
      },
    ],
  },
  {
    name: "Vanina Vivas",
    initials: "VV",
    photo: "/team-vanina.jpg",
    role: "Research & Strategy Specialist",
    bio: "Behavioral economics researcher at Universidad del Pacífico, with published work on entrepreneurship, strategy, and organizational behavior in emerging economies.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/vanina-vivas-ruiz/",
        icon: LinkedinIcon,
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=kTYT2fUAAAAJ&hl=en&oi=ao",
        icon: GraduationCapIcon,
      },
    ],
  },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-12 bg-[#f5f5f7]">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
          The team.
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl bg-white p-10 text-center"
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="mx-auto size-24 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#1d1d1f] text-2xl font-semibold text-white">
                  {member.initials}
                </div>
              )}
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                {member.name}
              </h3>
              <p className="mt-1 font-medium text-[#0071e3]">{member.role}</p>
              <p className="mt-4 leading-relaxed text-[#6e6e73]">
                {member.bio}
              </p>
              <div className="mt-6 flex justify-center gap-5">
                {member.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0066cc] hover:underline"
                  >
                    <link.icon className="size-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
