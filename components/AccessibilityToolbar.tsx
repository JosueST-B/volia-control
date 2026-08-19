"use client";

import { useEffect, useState } from "react";
import { readStoredObject, STORAGE_KEYS, writeStoredJson } from "../lib/storage";

export type AccessibilityPreferences = {
  largeText: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
};

const DEFAULTS: AccessibilityPreferences = {
  largeText: true,
  highContrast: false,
  reducedMotion: false,
};

export default function AccessibilityToolbar({ onHelp }: { onHelp: () => void }) {
  const [preferences, setPreferences] = useState(DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPreferences(readStoredObject(STORAGE_KEYS.accessibility, DEFAULTS));
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("large-text", preferences.largeText);
    document.documentElement.classList.toggle("high-contrast", preferences.highContrast);
    document.documentElement.classList.toggle("reduced-motion", preferences.reducedMotion);
    writeStoredJson(STORAGE_KEYS.accessibility, preferences);
  }, [preferences, ready]);

  const toggle = (key: keyof AccessibilityPreferences) =>
    setPreferences((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div className="accessibility-toolbar" aria-label="Opciones de accesibilidad">
      <button className={preferences.largeText ? "active" : ""} onClick={() => toggle("largeText")} title="Aumentar el tamaño de los textos" aria-pressed={preferences.largeText}>Texto grande</button>
      <button className={preferences.highContrast ? "active" : ""} onClick={() => toggle("highContrast")} title="Aumentar el contraste de colores" aria-pressed={preferences.highContrast}>Alto contraste</button>
      <button onClick={onHelp} className="help-button">Guía de uso</button>
    </div>
  );
}
