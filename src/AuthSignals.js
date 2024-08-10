import { signal, computed } from "@preact/signals-react";

export const user = signal(null); //default state

export const isLoggedIn = computed(() => {
  return !!user.value;
});
//AuthSignals
