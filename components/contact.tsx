import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 border-t">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Let&apos;s build something
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Have a project in mind or want to explore what AI can do for your
          organization? Get in touch.
        </p>
        <Button
          size="lg"
          className="mt-8"
          render={<a href="mailto:maurottito@gmail.com" />}
        >
          <MailIcon className="size-4" />
          maurottito@gmail.com
        </Button>
      </div>
    </section>
  );
}
