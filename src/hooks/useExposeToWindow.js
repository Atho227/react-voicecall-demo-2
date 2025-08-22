import { useEffect } from "react";

export function useExposeToWindow(handlers = {}) {
    useEffect(() => {
        // Gán tất cả handler ra window
        Object.entries(handlers).forEach(([key, fn]) => {
            window[key] = fn;
        });
        // Cleanup khi component unmount hoặc khi handlers thay đổi
        return () => {
            Object.keys(handlers).forEach((key) => {
                delete window[key];
            });
        };
    }, [handlers]);
}
