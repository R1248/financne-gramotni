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

  createProduct: protectedProcedure.input(
      z.object({
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
        sendingAccountId: z.string(),
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
          userId: ctx.session.user.id,
          sendingAccountId: input.sendingAccountId,
        },
      });
    }),

  createStandingOrder: protectedProcedure
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
      const updatedProduct = await ctx.db.product.update({
        where: { id: input.productId },
        data: {
          standingOrdersSent: {
            increment: input.amount, // Add the input amount to standingOrdersSent
          },
        },
      });
  
      return updatedProduct;
    }),

  getAllCurrentAccounts: protectedProcedure.query(({ctx}) => {
    return ctx.db.product.findMany(
        {
            where: {
                userId: ctx.session.user.id,
                type: 'currentAccount',
            },
        }
    );
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
    const updatedProduct = await ctx.db.product.update({
      where: { id: input.productId },
      data: {
        money: {
          increment: input.amount, // Add the input amount to money
        },
      },
    });

    return updatedProduct;
  }),
});
