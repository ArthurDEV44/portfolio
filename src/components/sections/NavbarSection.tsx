import { NavbarWrapper } from "@/components/motion/NavbarWrapper";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/site.config";

export function NavbarSection() {
  return (
    <NavbarWrapper>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-pixel-grid text-gray-900 dark:text-white">
            arthurjean.com
          </span>
        </a>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            render={
              // biome-ignore lint/a11y/useAnchorContent: content injected by Base UI render prop
              <a
                href={siteConfig.links.cal}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prendre RDV"
              />
            }
          >
            Prendre RDV
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </NavbarWrapper>
  );
}
