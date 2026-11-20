export interface Point {
    x: number;
    y: number;
}

export const generateRoundedSquarePoints = (
    borderRadius: number = 20,
    x1: number = 5,
    y1: number = 5,
    x2: number = 95,
    y2: number = 95,
    steps: number = 12
): Point[] => {
    const points: Point[] = [];
    const R = borderRadius;

    // Start at top-center
    points.push({ x: 50, y: y1 });

    // Top edge to top-left corner
    points.push({ x: x1 + R, y: y1 });

    // Top-left arc (270° down to 180°)
    for (let i = 1; i <= steps; i++) {
        const angle = 1.5 * Math.PI - (i / steps) * (0.5 * Math.PI);
        points.push({
            x: x1 + R + R * Math.cos(angle),
            y: y1 + R + R * Math.sin(angle),
        });
    }

    // Left edge to bottom-left corner
    points.push({ x: x1, y: y2 - R });

    // Bottom-left arc (180° down to 90°)
    for (let i = 1; i <= steps; i++) {
        const angle = Math.PI - (i / steps) * (0.5 * Math.PI);
        points.push({
            x: x1 + R + R * Math.cos(angle),
            y: y2 - R + R * Math.sin(angle),
        });
    }

    // Bottom edge to bottom-right corner
    points.push({ x: x2 - R, y: y2 });

    // Bottom-right arc (90° down to 0°)
    for (let i = 1; i <= steps; i++) {
        const angle = 0.5 * Math.PI - (i / steps) * (0.5 * Math.PI);
        points.push({
            x: x2 - R + R * Math.cos(angle),
            y: y2 - R + R * Math.sin(angle),
        });
    }

    // Right edge to top-right corner
    points.push({ x: x2, y: y1 + R });

    // Top-right arc (360° down to 270°)
    for (let i = 1; i <= steps; i++) {
        const angle = 2 * Math.PI - (i / steps) * (0.5 * Math.PI);
        points.push({
            x: x2 - R + R * Math.cos(angle),
            y: y1 + R + R * Math.sin(angle),
        });
    }

    // Return to top-center
    points.push({ x: 50, y: y1 });

    return points;
};

export const calculateSegmentMetrics = (points: Point[]) => {
    const segmentLengths: number[] = [];
    let totalLength = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const length = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        segmentLengths.push(length);
        totalLength += length;
    }

    return { segmentLengths, totalLength };
};

// Precomputed default geometry for the 100x100 loading square
export const SQUARE_POINTS = generateRoundedSquarePoints();
export const { segmentLengths: SEGMENT_LENGTHS, totalLength: TOTAL_LENGTH } = calculateSegmentMetrics(SQUARE_POINTS);

export const drawRoundedSquare = (
    ctx: CanvasRenderingContext2D,
    progress: number,
    strokeColor: string = '#64ffda',
    strokeWidth: number = 5,
    points: Point[] = SQUARE_POINTS,
    segmentLengths: number[] = SEGMENT_LENGTHS,
    totalLength: number = TOTAL_LENGTH
) => {
    if (progress <= 0 || points.length < 2) return;

    const targetLength = progress * totalLength;
    let currentLength = 0;

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();

    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const segLen = segmentLengths[i];

        if (currentLength + segLen <= targetLength) {
            ctx.lineTo(p2.x, p2.y);
            currentLength += segLen;
        } else {
            const remainingLength = targetLength - currentLength;
            const ratio = segLen > 0 ? remainingLength / segLen : 0;

            const endX = p1.x + (p2.x - p1.x) * ratio;
            const endY = p1.y + (p2.y - p1.y) * ratio;

            ctx.lineTo(endX, endY);
            break;
        }
    }
    ctx.stroke();
};