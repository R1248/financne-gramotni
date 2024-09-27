import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const propertyRouter = createTRPCRouter({
    getAllProperties: protectedProcedure
    .input(z.object({characterId: z.string()}))
    .query(({ctx, input}) => {
        return ctx.db.property.findMany(
            {
                where: {
                    characterId: input.characterId,
                },
            }
        );
    }),

    createProperty: protectedProcedure.input(
        z.object({
            characterId: z.string(),
            name: z.string(),
            city: z.string(),
            rooms: z.number(),
            area: z.number(),
            floor: z.number(),
            gardenArea: z.number(),
            balconyArea: z.number(),
            parkingPlaces: z.number(),
            type: z.string(),
            localityBonus: z.number(),
            energyEfficiency: z.number(),
            playerLivesHere: z.boolean(),
        }),
        ).mutation(async ({ ctx, input }) => {
        return ctx.db.property.create({
            data: {
            characterId: input.characterId,
            name: input.name,
            city: input.city,
            rooms: input.rooms,
            area: input.area,
            floor: input.floor,
            gardenArea: input.gardenArea,
            balconyArea: input.balconyArea,
            parkingPlaces: input.parkingPlaces,
            type: input.type,
            localityBonus: input.localityBonus,
            energyEfficiency: input.energyEfficiency,
            playerLivesHere: input.playerLivesHere,
            },
        });
        }),

    deleteProperty: protectedProcedure
    .input(z.object({propertyId: z.string()}))
    .mutation(async ({ctx, input}) => {
        return ctx.db.property.delete({
        where: {
            id: input.propertyId,
        },
        });
    }),

    moveInOut: protectedProcedure
    .input(z.object({propertyId: z.string(), playerLivesHere: z.boolean()}))
    .mutation(async ({ctx, input}) => {
        return ctx.db.property.update(
            {
                where: {
                    id: input.propertyId,
                },
                data: {
                    playerLivesHere: input.playerLivesHere,
                }
            }
        );
    }),

    rentOrSellProperty: protectedProcedure
    .input(z.object({propertyId: z.string(), playerLivesHere: z.boolean(), isForSale: z.boolean(), sellsFor: z.number(), isForRent: z.boolean(), rentsFor: z.number() }))
    .mutation(async ({ctx, input}) => {
        return ctx.db.property.update(
            {
                where: {
                    id: input.propertyId,
                },
                data: {
                    playerLivesHere: input.playerLivesHere,
                    isForSale: input.isForSale,
                    isForRent: input.isForRent,
                    sellsFor: input.sellsFor,
                    rentsFor: input.rentsFor,
                }
            }
        );
    })
});
