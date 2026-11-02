Primary action control for Ventur.City UI — use for any tappable action; lime primary for the main CTA, slate secondary, warm-grey tertiary, ghost for low-emphasis.

```jsx
<Button variant="primary" iconRight={<Icon name="arrow-right" />}>Continue</Button>
<Button variant="secondary" social iconLeft={<Icon name="apple" size={20} color="var(--green-100)" />}>Continue with Apple</Button>
```

- `size`: `sm` (24px) | `lg` (40px, default)
- `variant`: primary · secondary · tertiary · ghost · ghost-light (on dark) · ghost-brand
- `social`: full-width auth button, icon pinned left
- Hover = lighter tint of same hue; disabled = paler surface + black.10 label.
