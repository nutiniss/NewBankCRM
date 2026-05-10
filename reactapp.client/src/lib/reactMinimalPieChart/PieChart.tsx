import type { CSSProperties } from 'react';

export type PieChartSegment = {
    title: string;
    value: number;
    color: string;
};

type PieChartProps = {
    className?: string;
    data: PieChartSegment[];
    animate?: boolean;
    lineWidth?: number;
    paddingAngle?: number;
    segmentsStyle?: CSSProperties;
};

const chartSize = 100;
const center = chartSize / 2;
const outerRadius = chartSize / 2;

function getPointOnCircle(angle: number, radius: number) {
    const radians = (angle - 90) * (Math.PI / 180);

    return {
        x: center + radius * Math.cos(radians),
        y: center + radius * Math.sin(radians),
    };
}

function getSegmentPath(startAngle: number, endAngle: number, lineWidth: number) {
    const innerRadius = outerRadius * Math.max(0, 1 - lineWidth / 100);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    const startOuter = getPointOnCircle(startAngle, outerRadius);
    const endOuter = getPointOnCircle(endAngle, outerRadius);

    if (innerRadius === 0) {
        return [
            `M ${center} ${center}`,
            `L ${startOuter.x} ${startOuter.y}`,
            `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
            'Z',
        ].join(' ');
    }

    const startInner = getPointOnCircle(startAngle, innerRadius);
    const endInner = getPointOnCircle(endAngle, innerRadius);

    return [
        `M ${startOuter.x} ${startOuter.y}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
        `L ${endInner.x} ${endInner.y}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
        'Z',
    ].join(' ');
}

export function PieChart({
    className,
    data,
    animate = false,
    lineWidth = 100,
    paddingAngle = 0,
    segmentsStyle,
}: PieChartProps) {
    const total = data.reduce((sum, segment) => sum + segment.value, 0);
    let currentAngle = 0;

    return (
        <svg
            className={className}
            viewBox={`0 0 ${chartSize} ${chartSize}`}
            role="presentation"
            focusable="false"
        >
            {data.map((segment) => {
                const sliceAngle = total > 0 ? (segment.value / total) * 360 : 0;
                const startAngle = currentAngle + paddingAngle / 2;
                const endAngle = currentAngle + sliceAngle - paddingAngle / 2;
                currentAngle += sliceAngle;

                if (endAngle <= startAngle) {
                    return null;
                }

                return (
                    <path
                        key={segment.title}
                        d={getSegmentPath(startAngle, endAngle, lineWidth)}
                        fill={segment.color}
                        style={segmentsStyle}
                        className={animate ? 'pie-chart-segment animated' : 'pie-chart-segment'}
                        tabIndex={0}
                        aria-label={`${segment.title}: ${segment.value}%`}
                    />
                );
            })}
        </svg>
    );
}
