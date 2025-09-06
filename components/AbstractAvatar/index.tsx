/**
 * AbstractAvatar Component
 * 
 * Generates José Parla-inspired abstract art avatars for users without profile photos.
 * Creates unique, AI-style abstract patterns using SVG and CSS.
 * 
 * @param name - User's name to generate consistent colors/patterns
 * @param size - Avatar size (default: 40px)
 * @param className - Additional CSS classes
 */

import { useMemo } from "react";

type AbstractAvatarProps = {
    name: string;
    size?: number;
    className?: string;
};

const AbstractAvatar = ({ name, size = 40, className = "" }: AbstractAvatarProps) => {
    // Generate consistent colors and patterns based on name
    const avatarData = useMemo(() => {
        const hash = name.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);

        // Generate primary and secondary colors
        const hue = Math.abs(hash) % 360;
        const saturation = 65 + (Math.abs(hash) % 20); // 65-85%
        const lightness = 45 + (Math.abs(hash) % 20);  // 45-65%
        
        const primaryColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        const secondaryColor = `hsl(${(hue + 60) % 360}, ${saturation - 10}%, ${lightness + 10}%)`;
        const accentColor = `hsl(${(hue + 180) % 360}, ${saturation + 10}%, ${lightness - 15}%)`;

        // Generate pattern data
        const patterns = [
            // Flowing organic shapes
            `M${size * 0.1},${size * 0.3} Q${size * 0.4},${size * 0.1} ${size * 0.7},${size * 0.4} T${size * 0.9},${size * 0.8} L${size * 0.6},${size * 0.9} Q${size * 0.3},${size * 0.7} ${size * 0.1},${size * 0.5} Z`,
            
            // Abstract brush strokes
            `M${size * 0.2},${size * 0.6} Q${size * 0.5},${size * 0.2} ${size * 0.8},${size * 0.7} L${size * 0.7},${size * 0.8} Q${size * 0.4},${size * 0.9} ${size * 0.1},${size * 0.7} Z`,
            
            // Layered forms
            `M${size * 0.3},${size * 0.1} C${size * 0.6},${size * 0.2} ${size * 0.8},${size * 0.5} ${size * 0.9},${size * 0.8} L${size * 0.5},${size * 0.9} C${size * 0.2},${size * 0.8} ${size * 0.1},${size * 0.4} ${size * 0.3},${size * 0.1} Z`
        ];

        return {
            primaryColor,
            secondaryColor,
            accentColor,
            patterns: patterns.slice(0, 2 + (Math.abs(hash) % 2)), // 2-3 patterns
            rotation: Math.abs(hash) % 360,
            opacity: 0.7 + (Math.abs(hash) % 30) / 100 // 0.7-1.0
        };
    }, [name, size]);

    return (
        <div 
            className={`relative rounded-full overflow-hidden bg-gradient-to-br from-n-6 to-n-5 ${className}`}
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="absolute inset-0"
                style={{ transform: `rotate(${avatarData.rotation}deg)` }}
            >
                {/* Background gradient */}
                <defs>
                    <radialGradient id={`bg-${name.replace(/\s+/g, '')}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={avatarData.primaryColor} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={avatarData.secondaryColor} stopOpacity="0.6" />
                    </radialGradient>
                    
                    {/* Abstract pattern overlays */}
                    <filter id={`blur-${name.replace(/\s+/g, '')}`}>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                    </filter>
                </defs>

                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2}
                    fill={`url(#bg-${name.replace(/\s+/g, '')})`}
                />

                {/* Abstract shapes */}
                {avatarData.patterns.map((path, index) => (
                    <path
                        key={index}
                        d={path}
                        fill={index === 0 ? avatarData.accentColor : avatarData.secondaryColor}
                        opacity={avatarData.opacity - (index * 0.1)}
                        filter={`url(#blur-${name.replace(/\s+/g, '')})`}
                        style={{
                            transform: `rotate(${index * 45}deg)`,
                            transformOrigin: `${size / 2}px ${size / 2}px`
                        }}
                    />
                ))}

                {/* Subtle texture overlay */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2 - 1}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                />
            </svg>

            {/* Optional: Add user initials as fallback */}
            <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                    fontSize: size * 0.35,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
            >
                {name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </div>
        </div>
    );
};

export default AbstractAvatar;