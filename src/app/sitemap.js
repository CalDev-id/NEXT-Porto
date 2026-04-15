import { projects } from "../data/projects";

export default function sitemap() {
  const lastModified = new Date().toISOString();

  return [
    {
      url: "https://caldev.my.id/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://caldev.my.id/career",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://caldev.my.id/projects",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `https://caldev.my.id/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
