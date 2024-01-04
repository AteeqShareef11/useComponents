import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';

import '../../styles/tailwind.css';
import { Header } from '../../components/Header';

const metadata = {
    title: {
        template: '%s - TaxPal',
        default: 'TaxPal - Accounting made simple for small businesses',
    },
    description:
        'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
};

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend',
});

export default function HomeLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{metadata.title.default}</title>
                <meta name="description" content={metadata.description} />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap"
                />
            </head>
            <body className={clsx('h-full scroll-smooth bg-white antialiased', inter.variable, lexend.variable)}>
                <div className="flex flex-col h-screen">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
