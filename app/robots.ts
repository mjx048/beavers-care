import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://beaverscare.co.kr/sitemap.xml",
    host: "https://beaverscare.co.kr",
  };
}
