import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getAllProducts: protectedProcedure
  .input(z.object({characterId: z.string()}))
  .query(({ctx, input}) => {
    return ctx.db.product.findMany(
        {
            where: {
                characterId: input.characterId,
            },
        }
    );
  }),

  createProduct: protectedProcedure.input(
      z.object({
        characterId: z.string(),
        name: z.string(),
        type: z.string(),
        money: z.number(),
        bank: z.string(),
        duration: z.number().optional(),
        interest: z.number(),
        description: z.string(),
        ageCreated: z.number(),
        volatility: z.number(),
        standingOrdersSent: z.number(),
        standingOrdersRec: z.number(),
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
          description: input.description,
          ageCreated: input.ageCreated,
          volatility: input.volatility,
          standingOrdersSent: input.standingOrdersSent,
          standingOrdersRec: input.standingOrdersRec,
          characterId: input.characterId,
        },
      });
    }),

  deleteProduct: protectedProcedure
  .input(z.object({productId: z.string()}))
  .mutation(async ({ctx, input}) => {
    return ctx.db.product.delete({
      where: {
        id: input.productId,
      },
    });
  }),

  editStandingOrder: protectedProcedure
    .input(
      z.object({
        amount: z.number(),        // Amount to be added to standingOrdersSent
        productId: z.string(),     // The ID of the product to be updated
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Find the product by its ID
      const product = await ctx.db.product.findUnique({
        where: { id: input.productId },
      });

      if (!product) {
        throw new Error("Product not found");
      }

      // Update the product's standingOrdersSent field
      return ctx.db.product.update({
        where: { id: input.productId },
        data: {
          standingOrdersSent: {
            increment: input.amount, // Add the input amount to standingOrdersSent
          },
        },
      });
    }),

  transaction: protectedProcedure.input(
    z.object({
      amount: z.number(),
      productId: z.string(),
    })
  ).mutation(async ({ ctx, input }) => {
    const product = await ctx.db.product.findUnique({
      where: { id: input.productId },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    // Update the product's money field
    return ctx.db.product.update({
      where: { id: input.productId },
      data: {
        money:
          input.amount,
      },
    });
    }),

  currentAccountTransaction: protectedProcedure.input(
    z.object({
      amount: z.number(),
      productId: z.string(),
    }),
  ).mutation(async ({ ctx, input }) => {
    // Find the product by its ID
    const product = await ctx.db.product.findUnique({
      where: { id: input.productId },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    // Update the product's money field
    return ctx.db.product.update({
      where: { id: input.productId },
      data: {
        money: {
          increment: input.amount, // Add the input amount to money
        },
      },
    });
  }),

  closeProduct: protectedProcedure.input(
    z.object({
      productId: z.string(),
    }),
  ).mutation(async ({ ctx, input }) => {
    await ctx.db.product.delete({
      where: { id: input.productId },
    });
  }),
});
