import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_51R2Wn600OGsG8yPfQdAIZlGdCsl7KecCkR85ZIdfD1pxCnsZbcpTIQNANYG3wcYoOaHKeftAIBjZjYuLIvRGxE9L00mV0jB9uJ';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export async function createPaymentIntent({ amount, currency }: { 
  amount: number;
  currency: string;
}) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || 'usd',
      payment_method_types: ['card'],
    });

    return { 
      paymentIntent, 
      error: null 
    };
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      return {
        paymentIntent: null,
        error: error.message,
      };
    }
    return {
      paymentIntent: null,
      error: 'Failed to create payment intent',
    };
  }
}