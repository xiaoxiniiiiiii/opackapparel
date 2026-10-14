# OPACK Apparel

OPACK is an original React + Vite storefront for unbranded everyday bags and apparel.

## Run locally

```bash
npm.cmd i
npm.cmd run dev
```

Build with `npm.cmd run build`. The 50 catalog images are local WebP assets under `public/products/` and were generated as distinct, watermark-free product photography for bags, tops, and bottoms, then cropped from five generated contact sheets with `npm.cmd run assets`.

## Demo areas

- Add to Cart opens the side cart.
- Buy Now adds the item and opens checkout.
- Checkout includes Credit/Debit Card (VISA) and PayPal visual options. Payment is a frontend demo until a real provider/server is connected.
- Admin demo: `admin@opack.local` / `opack-demo-2026`
- Admin route is available from the account icon or footer. It is a frontend-only dashboard and does not provide production authentication.

## Company data

香港瑞臻國際貿易有限公司  
vtcofopp@outlook.com · 16555178416  
RM03, 24/F, HO KING COMM CTR, 2-16 FAYUEN ST, MONG KOK HONG KONG  
香港旺角花园街 2–16 号豪景商业中心 24 楼 03 室


Before launch, connect a server-side payment processor, real authentication, order storage, and a carrier tracking integration. Policy copy in the demo should also be reviewed for the destination markets where the store will operate.
