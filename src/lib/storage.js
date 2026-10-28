const KEY = 'chocolate-factory-progress-v1';

export function loadProgress() {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed?.solved)) {
      return parsed.solved.filter((id) => typeof id === 'string');
    }
  } catch {
    // Storage can be unavailable (private mode, quota); the challenge still works in memory.
  }
  return [];
}

export function saveProgress(solved) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ solved }));
  } catch {
    // Ignore — progress simply won't survive a reload.
  }
}

export function clearProgress() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // Ignore.
  }
}
