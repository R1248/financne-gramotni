import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getAllProducts: protectedProcedure.query(({ctx}) => {
    return ctx.db.product.findMany(
        {
            where: {
                userId: ctx.session.user.id,
            },
        }
    );
  }),

    createProduct: 
    protectedProcedure.input(
        z.object({
          name: z.string(),
          type: z.string(),
          money: z.number(),
          bank: z.string(),
          duration: z.number().optional(),
          interest: z.number(),
          withdrawFee: z.number(),
          description: z.string(),
          ageCreated: z.number(),
          volatility: z.number(),
          standingOrderPossible: z.boolean(),
          cashManipulationPossible: z.boolean(),
        }),
      ).mutation(async ({ ctx, input }) => {
        return ctx.db.product.create({
          data: {
            name: input.name,
            type: input.type,
            money: input.money,
            bank: input.bank,
            duration: input.duration,
            interest: input.interest,
            withdrawFee: input.withdrawFee,
            description: input.description,
            ageCreated: input.ageCreated,
            volatility: input.volatility,
            standingOrderPossible: input.standingOrderPossible,
            cashManipulationPossible: input.cashManipulationPossible,
            userId: ctx.session.user.id,
          },
        });
      }),

});
