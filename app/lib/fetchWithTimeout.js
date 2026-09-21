export const NETWORK_ERROR_MESSAGE = "Ivar can't reach the network right now. Check your connection and try again.";

export async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    throw new Error(NETWORK_ERROR_MESSAGE);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return res;
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error(NETWORK_ERROR_MESSAGE);
    }
    if (err instanceof TypeError) {
      throw new Error(NETWORK_ERROR_MESSAGE);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
