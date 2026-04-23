import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
});

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }

    const lineItems = items.map((item: { name: string; price: number; emoji: string; quantity: number }) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.emoji} ${item.name}`,
          description: 'Instant digital download. Lifetime access.',
        },
        unit_amount: Math.round(item.price * 100), // convert to cents
      },
      quantity: item.quantity,
    }));

    const origin = req.headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
      shipping_address_collection: undefined,
      metadata: {
        source: 'ProRevenue Shop',
      },
      custom_text: {
        submit: { message: 'Your digital products will be available for instant download after payment.' },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
