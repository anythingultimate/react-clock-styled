import { FC } from 'react';

interface ClockProps {
    time?: string;
    color?: string;
    border?: string;
    bg?: string;
    size?: any;
    handleColor?: string;
}

declare const Clock: FC<ClockProps>;

export { Clock };
