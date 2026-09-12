"use strict";

// Run before the stylesheet so each visit opens on a single, settled scene.
(() => {
  const scenes = ["room", "corridor", "atrium"];
  const storageKey = "x0raki:last-scene";
  let previous;
  try {
    previous = sessionStorage.getItem(storageKey);
  } catch {
    // The scene can still be selected when storage is unavailable.
  }
  const choices = scenes.filter((scene) => scene !== previous);
  const scene = choices[Math.floor(Math.random() * choices.length)];
  const root = document.documentElement;
  root.dataset.scene = scene;

  const image = new Image();
  image.onload = () => {
    try {
      sessionStorage.setItem(storageKey, scene);
    } catch {
      // Storage is optional; it only prevents consecutive repeats.
    }
  };
  image.onerror = () => {
    root.dataset.scene = "room";
  };
  image.src = scene === "room"
    ? "assets/threshold-room.png"
    : `assets/threshold-${scene}.jpg`;
})();
