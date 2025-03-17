import packageJSON from "package.json" with { type: "json" }
import type { AppOpenAPI } from "./types"

import { apiReference } from "@scalar/hono-api-reference"

export function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Al-Hira API",
      description:
        "Al-Hira API",
    },
  })

  app.get(
    "/reference",
    apiReference({
      spec: {
        url: "/doc",
      },
    }),
  )
}
