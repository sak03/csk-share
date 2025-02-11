import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../scss/style.scss"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Sartaj Alam | Web Developer", // Page title
    description: "Web developer, ReactJS developer, NextJS developer, Front end developer, Full stack developer, MERN Stack developer.", // Page description
    openGraph: {
        title: "Sartaj Alam | Web Developer", // Title for social media
        description: "A portfolio showcasing my web development journey.", // Description for social media
        url: "https://sak03.github.io/sartaj.dev/", // URL of your portfolio
        siteName: "Sartaj's Portfolio", // Site name
        images: [
            {
                url: "https://sak03.github.io/sartaj.dev/og-image.jpg", // Social media preview image
                width: 1200,
                height: 630,
                alt: "Sartaj Alam Portfolio Preview", // Alt text for the image
            },
        ],
        locale: "en_US", // Locale, e.g., 'en_US' for English (United States)
        type: "website", // Type of content, e.g., 'website', 'article'
    },
    // Twitter Metadata (for Twitter cards)
    twitter: {
        card: "summary_large_image", // Card type: 'summary', 'summary_large_image', 'app', or 'player'
        title: "Sartaj Alam | Web Developer", // Title for Twitter card
        description: "A portfolio showcasing my web development journey.", // Description for Twitter card
        images: ["https://sak03.github.io/sartaj.dev/twitter-image.jpg"], // Image URL for Twitter card
        creator: "@sartaj_03", // Your Twitter handle
    },
    // LinkedIn Metadata
    linkedIn: {
        title: "Sartaj Alam | Web Developer", // Title for LinkedIn preview
        description: "A portfolio showcasing my web development journey.", // Description for LinkedIn preview
        images: ["https://sak03.github.io/sartaj.dev/linkedin-image.jpg"], // Image URL for LinkedIn preview
        url: "https://www.linkedin.com/in/sak03", // Your LinkedIn profile URL
    },

    // GitHub Metadata
    github: {
        title: "Sartaj Alam | Web Developer", // Title for GitHub preview
        description: "A portfolio showcasing my web development journey.", // Description for GitHub preview
        images: ["https://sak03.github.io/sartaj.dev/github-image.jpg"], // Image URL for GitHub preview
        url: "https://github.com/sak03", // Your GitHub profile URL
    },
    // Icons
    icons: {
        icon: "/favicon.ico", // Path to favicon
        shortcut: "/favicon.ico", // Shortcut icon
        apple: "/favicon.png", // Apple touch icon
        other: [
            {
                rel: "manifest",
                url: "/site.webmanifest", // Web app manifest file
            },
        ],
    },
    // Robots Metadata (SEO)
    robots: {
        index: true, // Allow indexing
        follow: true, // Allow following links
        nocache: false, // Prevent caching (optional)
        googleBot: {
            index: true, // Google bot-specific indexing
            follow: true, // Google bot-specific following
            noimageindex: false, // Allow image indexing
            "max-video-preview": -1, // Maximum video preview length (-1 for no limit)
            "max-image-preview": "large", // Maximum image preview size
            "max-snippet": -1, // Maximum snippet length (-1 for no limit)
        },
    },
    // Verification Metadata
    verification: {
        google: "your-google-verification-code", // Google Search Console verification
        bing: "your-bing-verification-code", // Bing Webmaster Tools verification
        yandex: "your-yandex-verification-code", // Yandex verification
        other: {
            name: "custom-verification", // Custom verification name
            content: "your-custom-verification-code", // Custom verification content
        },
    },
    // Other Metadata
    themeColor: "#ffffff", // Theme color for the browser (e.g., mobile browser header)
    viewport: "width=device-width, initial-scale=1.0", // Viewport settings for responsive design

    charset: "utf-8", // Character encoding for the page
    language: "en", // Language of the page content

    author: "Sartaj Alam", // Author of the page
    keywords: ["portfolio", "web developer", "React", "Next.js", "JavaScript", "NodeJS", "MongoDB", "ExpressJS", "Redux", "Redux Toolkit"], // Keywords for SEO
    generator: "Next.js", // The tool used to generate the page
    applicationName: "Sartaj Alam's Portfolio", // Name of your application
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="layout-body">
                    <div className="layout-header">
                        <Header />
                    </div>
                    <div className="layout-section">
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
