import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const charactersRouter = createTRPCRouter({
  getAllCharacters: protectedProcedure.query(async ({ ctx }) => {
    // Assuming the `userId` is still needed to filter characters
    return ctx.db.character.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  getSelectedCharacter: protectedProcedure
    .input(z.object({ characterId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.character.findFirst({
        where: {
          id: input.characterId,
        },
      });
    }),

  createCharacter: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.character.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id, // Assuming userId is still required
        },
      });
    }),

  transaction: protectedProcedure
    .input(z.object({ characterId: z.string(), sum: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.character.update({
        where: {
          id: input.characterId,
        },
        data: {
          money: { increment: input.sum },
        },
      });
    }),

  changeAge: protectedProcedure
    .input(z.object({ characterId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.character.update({
        where: {
          id: input.characterId,
        },
        data: {
          age: { increment: 0.25 },
        },
      });
    }),

  updateStandingOrder: protectedProcedure
    .input(z.object({ characterId: z.string(), amount: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.character.update({
        where: {
          id: input.characterId,
        },
        data: {
          standingOrdersSent: { increment: input.amount },
        },
      });
    }),
});
