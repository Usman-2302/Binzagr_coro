import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

// RNS Sanz Font Family - Official Binzagr-Coro Typography
export const rnsSans = localFont({
    src: [
        {
            path: '../public/fonts/RNSSanz-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-Normal.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-rns-sans',
    display: 'swap',
    fallback: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Helvetica Neue',
        'sans-serif',
    ],
});
