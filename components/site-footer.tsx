export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <p>© {new Date().getFullYear()} VM AI Solutions LLC</p>
        <p>AI · Data · Software</p>
      </div>
    </footer>
  );
}
