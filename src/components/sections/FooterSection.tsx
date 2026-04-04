import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-white/30">
        <p>
          © {currentYear} {siteConfig.name}
        </p>
        <nav className="flex gap-6" aria-label="Liens légaux">
          <Link
            href="/mentions-legales"
            className="hover:text-gray-600 dark:hover:text-white/50 transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            href="/confidentialite"
            className="hover:text-gray-600 dark:hover:text-white/50 transition-colors"
          >
            Confidentialité
          </Link>
          <Link
            href="/cgu"
            className="hover:text-gray-600 dark:hover:text-white/50 transition-colors"
          >
            CGU
          </Link>
        </nav>
      </div>
    </footer>
  );
}
