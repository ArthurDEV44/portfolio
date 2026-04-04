import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24">
      <article className="prose prose-sm dark:prose-invert prose-headings:font-pixel-circle prose-headings:tracking-tight prose-h1:text-2xl prose-h1:sm:text-3xl prose-h2:text-lg prose-p:text-gray-500 prose-p:dark:text-white/50 prose-li:text-gray-500 prose-li:dark:text-white/50 prose-strong:text-gray-700 prose-strong:dark:text-white/70 prose-a:text-gray-900 prose-a:dark:text-white prose-a:underline-offset-4 max-w-[800px] mx-auto px-4 sm:px-6">
        {children}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
          <Link
            href="/"
            className="text-sm text-gray-400 dark:text-white/30 no-underline hover:text-gray-600 dark:hover:text-white/50 transition-colors"
          >
            &larr; Retour
          </Link>
        </div>
      </article>
    </div>
  );
}
