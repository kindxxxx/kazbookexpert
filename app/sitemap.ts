import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pechat-knig",
    "/ceny",
    "/pereplety",
    "/formaty",
    "/malyj-tirazh",
    "/bolshoj-tirazh",
    "/marketplejsy",
    "/o-kompanii",
    "/kontakty",
  ];
  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
