"use client";

import { useState, useCallback, useEffect } from "react";

type DraggableDividerProps = {
    onResize?: (leftWidth: number) => void;
    minLeftWidth?: number;
    maxLeftWidth?: number;
    initialLeftWidth?: number;
};

const DraggableDivider = ({
    onResize,
    minLeftWidth = 240, // 60 in tailwind (w-60)
    maxLeftWidth = 400, // 100 in tailwind (w-100)
    initialLeftWidth = 320 // 80 in tailwind (w-80)
}: DraggableDividerProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [leftWidth, setLeftWidth] = useState(initialLeftWidth);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;

        const newWidth = Math.min(
            Math.max(e.clientX, minLeftWidth),
            maxLeftWidth
        );

        setLeftWidth(newWidth);
        onResize?.(newWidth);
    }, [isDragging, minLeftWidth, maxLeftWidth, onResize]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
    }, []);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mouseleave', handleMouseUp); // Handle mouse leaving window

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('mouseleave', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    return (
        <div
            className={`absolute top-0 bottom-0 w-1 cursor-col-resize transition-all duration-200 z-10 ${
                isDragging 
                    ? 'bg-primary-1/80 w-2' 
                    : 'bg-n-3/10 hover:bg-n-3/30 hover:w-2'
            } dark:bg-n-5/10 dark:hover:bg-n-5/30`}
            style={{ 
                left: `${leftWidth - 1}px`,
                pointerEvents: isDragging ? 'auto' : 'all'
            }}
            onMouseDown={handleMouseDown}
        >
            <div className="absolute inset-y-0 -left-2 -right-2 cursor-col-resize" />
        </div>
    );
};

export default DraggableDivider;