import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { drawRoundedSquare } from '@/lib/helpers';

interface Props {
    onAnimationComplete: () => void;
}

// Configuration Values
const CANVAS_WIDTH = 100;
const CANVAS_HEIGHT = 100;
const SQUARE_STROKE_COLOR = '#64ffda';
const A_FILL_COLOR = SQUARE_STROKE_COLOR;
const BACKGROUND_COLOR = '#020c1b';
const STROKE_WIDTH = 5;

const LoadingUI = ({ onAnimationComplete }: Props) => {
    // Hooks
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const aRef = useRef<HTMLDivElement | null>(null);
    const animProps = useRef({
        drawProgress: 0,
    });

    // The main drawing loop
    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(dpr, dpr);
        drawRoundedSquare(ctx, animProps.current.drawProgress, SQUARE_STROKE_COLOR, STROKE_WIDTH);
        ctx.restore();
    }, []);

    // GSAP Timeline setup
    useEffect(() => {
        // Adjust canvas resolution for HiDPI/Retina crispness
        const canvas = canvasRef.current;
        if (canvas) {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = CANVAS_WIDTH * dpr;
            canvas.height = CANVAS_HEIGHT * dpr;
        }

        // Set initial state
        gsap.set(containerRef.current, { opacity: 1 });
        gsap.set(logoRef.current, { scale: 1, opacity: 1 });
        gsap.set(aRef.current, { opacity: 0 });

        // Add the custom 'draw' function to the GSAP ticker
        gsap.ticker.add(draw);

        // Animation timing constants
        const SQUARE_DRAW_DURATION = 1.5;
        const A_FADE_DURATION = 0.8;
        const POST_DRAW_HOLD = 0.4;
        const COLLAPSE_DURATION = 0.1;
        const BACKGROUND_HOLD_DELAY = 0.4;
        const BG_FADE_DURATION = 0.1;

        // The loading timeline
        const tl = gsap.timeline({
            defaults: { ease: 'power2.inOut' },
            onComplete: () => {
                gsap.ticker.remove(draw);
                onAnimationComplete();
            }
        });

        // Draw the square stroke
        tl.to(animProps.current, {
            duration: SQUARE_DRAW_DURATION,
            drawProgress: 1,
        }, 0);

        // Fade the 'A' letter in
        tl.to(aRef.current, {
            duration: A_FADE_DURATION,
            opacity: 1,
            ease: 'power1.inOut'
        }, SQUARE_DRAW_DURATION);

        // Collapse and fade out the logo only
        const collapseStartTime = SQUARE_DRAW_DURATION + A_FADE_DURATION + POST_DRAW_HOLD;

        tl.to(logoRef.current, {
            duration: COLLAPSE_DURATION,
            opacity: 0,
            scale: 0.1,
            ease: 'power1.in'
        }, collapseStartTime);

        // Fade out the background 400ms after the logo collapse ends
        const backgroundFadeStartTime = collapseStartTime + COLLAPSE_DURATION + BACKGROUND_HOLD_DELAY;

        tl.to(containerRef.current, {
            duration: BG_FADE_DURATION,
            opacity: 0,
            ease: 'none'
        }, backgroundFadeStartTime);

        // Cleanup function
        return () => {
            tl.kill();
            if (gsap && gsap.ticker) {
                gsap.ticker.remove(draw);
            }
        };
    }, [draw, onAnimationComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: BACKGROUND_COLOR }}
        >
            <div
                ref={logoRef}
                style={{
                    position: 'relative',
                    width: CANVAS_WIDTH,
                    height: CANVAS_HEIGHT
                }}
            >
                <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    style={{
                        width: CANVAS_WIDTH,
                        height: CANVAS_HEIGHT
                    }}
                    className="block absolute top-0 left-0"
                />

                <div
                    ref={aRef}
                    className="absolute top-1/2 left-1/2 -translate-1/2 font-['Montserrat'] text-[60px] font-semibold pointer-events-none opacity-0"
                    style={{
                        color: A_FILL_COLOR
                    }}
                >
                    A
                </div>
            </div>
        </div>
    );
};

export default LoadingUI;