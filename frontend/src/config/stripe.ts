export const stripeConfig = {
    publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '',
    secretKey: process.env.STRIPE_SECRET_KEY || '',
    currency: 'USD',
    apiVersion: '2024-04-10' as const,
  };