/**
 * Subscribe helper for `useSyncExternalStore`, so components can read scroll
 * position without an effect that calls setState on mount — which triggers an
 * extra render pass and is flagged by react-hooks.
 *
 * Pair it with a `getSnapshot` returning a primitive, e.g.
 * `useSyncExternalStore(subscribeToScroll, () => window.scrollY > 12, () => false)`.
 * The server snapshot must be the "top of page" value, since there is no scroll
 * position during SSR.
 */
export function subscribeToScroll(onChange: () => void): () => void {
  window.addEventListener('scroll', onChange, { passive: true });
  window.addEventListener('resize', onChange, { passive: true });
  return () => {
    window.removeEventListener('scroll', onChange);
    window.removeEventListener('resize', onChange);
  };
}
