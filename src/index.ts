import { toShort } from "emojione";
const EMOJI_SHORTCODES = /:[a-zA-Z1-9_]+:/g;

export function findEmojis(str: string): string[] {
  // add runtime check for use in JavaScript
  if (typeof str !== "string") {
    return [];
  }

  return toShort(str).match(EMOJI_SHORTCODES) || [];
}
