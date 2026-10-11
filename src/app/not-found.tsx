import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <a href={`${SITE.basePath}/`} className="mt-4 text-accent underline">Back to home</a>
    </main>
  );
}
