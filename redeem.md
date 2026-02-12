# How to Redeem stTokens

When you want to convert your stTokens back to the original tokens, you have two options: instant redemption via DEX or standard redemption through Stride.

## Option 1: Instant Swap (Recommended)

The fastest way to convert stTokens back to their underlying asset.

### Steps

1. Go to a DEX like Osmosis
2. Select stATOM as the input token
3. Select ATOM as the output token
4. Enter the amount to swap
5. Review the rate and confirm

### Pros & Cons

- **Instant** — no unbonding period
- **Simple** — standard DEX swap
- **Rate may vary** — you might get slightly more or less than the redemption rate depending on market conditions

## Option 2: Standard Redemption via Stride

Redeem directly through the Stride protocol at the exact redemption rate.

### Steps

1. Navigate to the **Liquid Stake** page
2. Toggle to the **Unstake** tab
3. Select the stToken you want to redeem (e.g., stATOM)
4. Enter the amount
5. Click **Unstake** and confirm the transaction
6. Wait for the unbonding period to complete

### Unbonding Period

The standard redemption requires waiting for the host chain's unbonding period:

| Token | Unbonding Period |
|-------|-----------------|
| stATOM | 21 days |
| stOSMO | 14 days |
| stJUNO | 28 days |
| stSTARS | 14 days |

### What Happens During Unbonding

1. Stride undelegates your tokens from validators on the host chain
2. The host chain's unbonding period begins
3. Once complete, tokens are transferred back to your wallet via IBC
4. You'll receive the exact amount based on the redemption rate at time of request

## Which Option Should You Choose?

| Factor | DEX Swap | Stride Redemption |
|--------|----------|-------------------|
| Speed | Instant | 14–28 days |
| Rate | Market rate | Exact redemption rate |
| Best for | Small amounts, urgency | Large amounts, best rate |

## Tips

- For small amounts, DEX swaps are usually more convenient
- For large amounts, compare the DEX rate with the redemption rate
- During market volatility, DEX rates may deviate from redemption rates
- You can partially redeem — you don't need to unstake everything at once
