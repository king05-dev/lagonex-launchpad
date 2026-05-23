import React from "react";
import { C, MONO, DISPLAY } from "./tokens";

export function Dot({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: 999,
        background: color,
        flexShrink: 0,
      }}
    />
  );
}

export function Label({
  children,
  color = C.mute,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: 10.5,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHead({
  num,
  label,
  title,
  accent,
  dark = false,
}: {
  num: string;
  label: string;
  title: React.ReactNode;
  accent?: string;
  dark?: boolean;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: dark ? "#9c9c9c" : C.mute,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          §{num} · {label}
        </span>
        <span style={{ flex: 1, height: 1, background: dark ? "#3a3a3a" : C.ink }} />
        <Dot color={accent || C.ink} size={10} />
      </div>
      <div
        style={{
          marginTop: 14,
          fontFamily: DISPLAY,
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1.0,
          color: dark ? "#ffffff" : C.ink,
        }}
      >
        {title}
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: 10,
        padding: "2px 8px",
        border: `1px solid ${C.ink}`,
        borderRadius: 3,
        color: C.ink,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
