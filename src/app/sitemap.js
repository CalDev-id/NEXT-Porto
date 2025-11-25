export default function sitemap() {
  return [
    {
      url: "https://caldev.my.id/",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    }
  ];
}
