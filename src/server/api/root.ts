import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { productsRouter } from "./routers/products";
import { charactersRouter } from "./routers/characters";
import { propertyRouter } from "./routers/propertyRouter";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    products: productsRouter,
    characters: charactersRouter,
    property: propertyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
