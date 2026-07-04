export function SiteFooter() {
  return (
    <footer className="bg-[#f5f5f7]">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-t border-[#d2d2d7] px-4 py-6 text-xs text-[#6e6e73] sm:px-6">
        <p>Copyright © {new Date().getFullYear()} VM AI Solutions LLC. All rights reserved.</p>
        <p>AI · Data · Software</p>
      </div>
    </footer>
  );
}
