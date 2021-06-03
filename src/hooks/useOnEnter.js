import {
    useEffect
} from 'react'

export default function useOnEnter(cb) {
    useEffect(() => {
        const listener = window.addEventListener("keydown", function (event) {
            var handled = false;
            if (event.key !== undefined) {
                // Handle the event with KeyboardEvent.key and set handled true.
                handled = true;
                if (event.key === 13) {
                    cb();
                    return;
                }
            } else if (event.keyIdentifier !== undefined) {
                // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
                handled = true;
                if (event.keyIdentifier === 13) {
                    cb();
                    return;
                }
            } else if (event.keyCode !== undefined) {
                // Handle the event with KeyboardEvent.keyCode and set handled true.
                handled = true;
                if (event.keyCode === 13) {
                    cb();
                }
            }
            if (handled) {
                // Suppress "double action" if event handled
                event.preventDefault();
            }
        }, true);
        return () => {
            window.removeEventListener('keydown', listener)
        }
    }, [])
}