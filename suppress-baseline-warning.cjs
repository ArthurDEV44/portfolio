const _warn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("[baseline-browser-mapping]")
  )
    return;
  _warn(...args);
};
