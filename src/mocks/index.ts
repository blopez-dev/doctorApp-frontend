export async function enableMocking() {
  if (import.meta.env.VITE_MOCK_ENABLED !== 'true') {
    return;
  }

  if (typeof window === 'undefined') {
    return;
  }

  const { worker } = await import('./browser');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}