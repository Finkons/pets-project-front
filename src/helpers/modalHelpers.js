export const handleBackdropClick = (event, closingFunc) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  closingFunc();
};

export const handleEscClick = closingFunc => {
  const handleCloseOnEsc = event => {
    if (event.code !== "Escape") {
      return;
    }
    closingFunc();
  };

  window.addEventListener("keydown", handleCloseOnEsc);
  const cleanup = () => {
    window.removeEventListener("keydown", handleCloseOnEsc);
  };

  return cleanup;
};
