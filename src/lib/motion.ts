import { useSyncExternalStore } from "react";

export type Motion = "full" | "reduce";

const STORAGE_KEY = "motion";
const systemQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const listeners = new Set<() => void>();

const readOverride = (): Motion | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "full" || value === "reduce" ? value : null;
  } catch {
    return null;
  }
};

const resolve = (): Motion => readOverride() ?? (systemQuery.matches ? "reduce" : "full");

let motion = resolve();
document.documentElement.dataset.motion = motion;

const publish = (next: Motion) => {
  motion = next;
  document.documentElement.dataset.motion = next;
  listeners.forEach((listener) => listener());
};

systemQuery.addEventListener("change", () => publish(resolve()));

// The OS setting is the default; a visitor's explicit choice overrides it.
export const setMotion = (next: Motion) => {
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be blocked; the choice still applies for this visit.
  }
  publish(next);
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const useMotion = () => useSyncExternalStore(subscribe, () => motion);
