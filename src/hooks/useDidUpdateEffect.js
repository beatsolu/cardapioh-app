import {useEffect, useRef} from "react";

export default function useDidUpdateEffect(fn, deps) {
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            fn();
        } else {
            didMountRef.current = true;
        }
    }, deps);
}