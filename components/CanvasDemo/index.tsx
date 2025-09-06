"use client";

import { useEffect, useRef, useState } from "react";

export default function CanvasDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#00ff00");
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Clear and setup initial state
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Animation loop for bouncing ball
    let ballX = 50;
    let ballY = 50;
    let ballVelX = 3;
    let ballVelY = 2;
    const ballRadius = 20;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update ball position
      ballX += ballVelX;
      ballY += ballVelY;

      // Bounce off walls
      if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
        ballVelX = -ballVelX;
      }
      if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
        ballVelY = -ballVelY;
      }

      // Draw bouncing ball
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#ff0080";
      ctx.fill();

      // Draw pulsing text
      const time = Date.now() / 1000;
      const pulseSize = 20 + Math.sin(time * 3) * 5;
      ctx.font = `${pulseSize}px Arial`;
      ctx.fillStyle = "#00ffff";
      ctx.textAlign = "center";
      ctx.fillText("CANVAS CONTROLLED!", canvas.width / 2, canvas.height / 2);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = currentColor;
    ctx.fill();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-n-7 rounded-2xl border border-n-5">
      <h3 className="h4 text-white">Interactive Canvas Demo</h3>
      
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          {["#00ff00", "#ff0080", "#00ffff", "#ffff00", "#ff8000"].map((color) => (
            <button
              key={color}
              className="w-8 h-8 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
              onClick={() => setCurrentColor(color)}
            />
          ))}
        </div>
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear
        </button>
      </div>

      <canvas
        ref={canvasRef}
        className="border border-n-4 rounded cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      
      <p className="body2 text-n-3 text-center max-w-lg">
        Canvas shows: animated bouncing ball, pulsing text, and interactive drawing.
        Click and drag to draw, use color buttons to change brush color.
      </p>
    </div>
  );
}