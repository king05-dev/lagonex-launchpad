import { AnimatePresence, motion } from "framer-motion";
import { C, MONO } from "./tokens";
import { Dot } from "./primitives";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDAR_URL = "https://calendar.app.google/y6BmrogMsgUdxeic9";

export function SwissBookingModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(14,14,14,0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed z-50 flex flex-col"
            style={{
              inset: "clamp(10px, 3vw, 40px)",
              backgroundColor: C.paper,
              border: `1px solid ${C.ink}`,
            }}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "13px 20px",
                borderBottom: `1px solid ${C.ink}`,
                backgroundColor: C.card,
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Dot color={C.green} />
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.ink,
                  }}
                >
                  Schedule a Call · Google Calendar
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  background: "none",
                  border: `1px solid ${C.ink}`,
                  padding: "4px 12px",
                  fontFamily: MONO,
                  fontSize: 11,
                  color: C.ink,
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                }}
              >
                esc · close ×
              </button>
            </div>

            {/* Calendar embed */}
            <div style={{ flex: 1, padding: 12, overflow: "hidden", minHeight: 0 }}>
              <iframe
                src={CALENDAR_URL}
                style={{
                  width: "100%",
                  height: "100%",
                  border: `1px solid ${C.rule}`,
                  backgroundColor: "#fff",
                  display: "block",
                }}
                title="Schedule a call with Jerquin"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
