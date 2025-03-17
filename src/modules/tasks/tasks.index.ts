import { createRouter } from "@/lib/create-app"

import * as handlers from "./tasks.handlers"
import * as routes from "./tasks.routes"

export const tasks = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.getOne, handlers.getOne)
  .openapi(routes.patch, handlers.patch)
  .openapi(routes.remove, handlers.remove)
