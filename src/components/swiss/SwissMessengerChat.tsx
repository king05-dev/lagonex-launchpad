import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { C, MONO, DISPLAY } from "./tokens";
import { Dot, Label } from "./primitives";

const MESSENGER_URL = "https://m.me/61582189371156";

const SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };

function MessengerIcon({ size = 24, color = C.paper }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0C5.24 0 0 4.95 0 11.64c0 3.499 1.434 6.522 3.769 8.61.196.175.315.421.323.684l.065 2.135a.961.961 0 0 0 1.347.85l2.383-1.053a.96.96 0 0 1 .641-.047c1.095.301 2.26.462 3.472.462 6.76 0 12-4.95 12-11.64C24 4.95 18.76 0 12 0Zm7.207 8.955-3.525 5.593a1.8 1.8 0 0 1-2.604.48l-2.804-2.102a.72.72 0 0 0-.867.001l-3.786 2.874c-.505.383-1.165-.221-.827-.758l3.525-5.592a1.8 1.8 0 0 1 2.604-.48l2.803 2.101a.72.72 0 0 0 .868-.001l3.786-2.874c.505-.384 1.165.22.827.758Z" />
    </svg>
  );
}

export function SwissMessengerChat() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        right: "clamp(16px, 3vw, 28px)",
        bottom: "clamp(16px, 3vw, 28px)",
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12,
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={SPRING}
            style={{
              width: "min(300px, calc(100vw - 40px))",
              backgroundColor: C.card,
              border: `1.5px solid ${C.ink}`,
              boxShadow: `6px 6px 0 ${C.ink}`,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "14px 16px",
                borderBottom: `1px solid ${C.rule}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Label>
                <Dot color={C.green} /> chat · messenger
              </Label>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: MONO,
                  fontSize: 14,
                  color: C.mute,
                  lineHeight: 1,
                  padding: 2,
                }}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: 16 }}>
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 800,
                  fontSize: 16,
                  letterSpacing: "-0.02em",
                  color: C.ink,
                }}
              >
                Lagonex Software Solution
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontFamily: MONO,
                  fontSize: 11,
                  color: C.mute,
                  letterSpacing: "0.04em",
                }}
              >
                typically replies within a day
              </div>

              <div
                style={{
                  marginTop: 14,
                  padding: "12px 14px",
                  backgroundColor: C.paper,
                  border: `1px solid ${C.rule}`,
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: C.ink2,
                }}
              >
                Hi there 👋 Got a project in mind? Message us on Facebook and we'll get back
                to you.
              </div>

              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  backgroundColor: C.blue,
                  color: "#fff",
                  padding: "12px 16px",
                  fontFamily: DISPLAY,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                <MessengerIcon size={16} color="#fff" /> Open Messenger <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us on Messenger"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...SPRING, delay: 0.4 }}
        style={{
          width: 54,
          height: 54,
          backgroundColor: C.ink,
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxShadow: `4px 4px 0 ${C.yellow}`,
        }}
      >
        <MessengerIcon size={24} />
        {/* Online dot */}
        {!open && (
          <span
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: C.green,
              border: `2px solid ${C.paper}`,
            }}
          />
        )}
      </motion.button>
    </div>
  );
}
