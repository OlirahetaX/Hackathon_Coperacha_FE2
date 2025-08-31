// src/app/intercept-console-error.ts
// Intercepta errores de runtime y promesas no manejadas

type ErrorHandler = (ev: ErrorEvent) => void;
type RejectionHandler = (ev: PromiseRejectionEvent) => void;

const onError: ErrorHandler = (ev) => {
  // tu lógica (log, enviar a backend, etc.)
  // ev.message, ev.filename, ev.lineno, ev.colno, ev.error
};

const onUnhandledRejection: RejectionHandler = (ev) => {
  // ev.reason suele ser Error | string | unknown
  // Maneja con type-guard:
  const reason =
    ev.reason instanceof Error ? ev.reason.stack ?? ev.reason.message : String(ev.reason);
  // tu lógica para reportar
};

if (typeof window !== "undefined") {
  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onUnhandledRejection);
}

export {};
