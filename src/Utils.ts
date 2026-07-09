import { GlimmrPartialSheet, GlimmrSheet } from './Types';

export function isStyleSheet(obj: unknown): obj is Record<string, number> {
  return (
    !!obj &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.values(obj).every((v) => typeof v === 'number')
  );
}

export function mergeSheet<
  Base extends GlimmrSheet<Base>,
  Override extends GlimmrPartialSheet<Override>,
>(base: Base, override: Override) {
  const finalSheet: GlimmrSheet<Base> = {
    ...base,
  };
  for (const [key, val] of Object.entries(override)) {
    base[key as keyof Base] = {
      ...base[key as keyof Base],
      //@ts-expect-error Stupid typescript.
      ...val,
    };
  }
  return finalSheet;
}
