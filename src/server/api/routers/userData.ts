import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const userDataRouter = createTRPCRouter({
  getUserData: protectedProcedure
  .query(({ctx}) => {
    return ctx.db.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
    });
  }),

  transaction: protectedProcedure
  .input(z.object({sum: z.number()}))
  .mutation(async ({ctx, input}) => {
    return ctx.db.user.update({
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
    return ctx.db.user.update({
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
    return ctx.db.user.update({
      where: {
        id: ctx.session.user.id,
      },
      data: {
        standingOrdersSent: { increment: input.amount },
      },
    });
  }),
});
