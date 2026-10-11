export const SITE = {
  name: "DeepTech Cloud",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://deeptechcloud.online",
  email: "deep@deeptechcloud.online",
  description:
    "DeepTech Cloud is building an AI troubleshooting assistant that helps engineering and IT support teams find the cause of technical problems faster and write clear incident reports.",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
} as const;

export const NAV = [
  { href: "#platform", label: "Platform" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#solutions", label: "Solutions" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#company", label: "Company" },
] as const;
