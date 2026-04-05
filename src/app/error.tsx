"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">
        Une erreur est survenue
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Quelque chose s'est mal passé. Vous pouvez réessayer ou revenir à la
        page d'accueil.
      </p>
      <div className="mt-8 flex gap-4">
        <Button variant="outline" onClick={reset}>
          Réessayer
        </Button>
        <Button onClick={() => (window.location.href = "/")}>Accueil</Button>
      </div>
    </div>
  );
}
