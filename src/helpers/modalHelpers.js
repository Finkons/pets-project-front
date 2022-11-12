// expects event and modal closing function as args
// onClick={(e) => handleBackdropClick(e, yourCustomFunc)}
export const handleBackdropClick = (event, closingFunc) => {
        if (event.target !== event.currentTarget) {
            return;
        }
        closingFunc(); 
};
    

// expects modal closing function as arg
// returns cleanup function for useEffect
export const handleEscClick = (closingFunc) => {
        const handleCloseOnEsc = event => {
            if (event.code !== 'Escape') {
                return;
            }
            closingFunc();
        };

        window.addEventListener('keydown', handleCloseOnEsc);
        const cleanup = () => {
            window.removeEventListener('keydown', handleCloseOnEsc);
        };

        return cleanup
}