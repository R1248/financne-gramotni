import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const charactersRouter = createTRPCRouter({
    getAllCharacters: protectedProcedure.query(({ctx}) => {
        return ctx.db.character.findMany(
            {
                where: {
                    userId: ctx.session.user.id,
                },
            }
        );
    }),

    getSelectedCharacter: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ctx, input}) => {
      return ctx.db.character.findFirst({
        where: {
          id: input.id,
        },
      });
    }),

    createCharacter: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ctx, input}) => {
      return ctx.db.character.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id,
        },
      });
    }),

    transaction: protectedProcedure
    .input(z.object({sum: z.number()}))
    .mutation(async ({ctx, input}) => {
      return ctx.db.character.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          money: { increment: input.sum },
        },
      });
    }),

    changeAge: protectedProcedure
    .mutation(async ({ctx}) => {
      return ctx.db.character.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          age: { increment: 0.25 },
        },
      });
    }),

    updateStandingOrder: protectedProcedure
    .input(z.object({ amount: z.number()}))
    .mutation(async ({ctx, input}) => {
      return ctx.db.character.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          standingOrdersSent: { increment: input.amount },
        },
      });
    }),
});
