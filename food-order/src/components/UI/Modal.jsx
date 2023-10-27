import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({children, open, className = ''}) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            // we want to open it programmatically and not via the open attribute on the dialog element for the gray backgorund to appear, serve as a overlay and prevent interaction
            modal.showModal();
        }
        // cleanup function which will be executed whenever the effect function is about to run again (on change of the open prop)
        return () => modal.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById('modal')
    )
}