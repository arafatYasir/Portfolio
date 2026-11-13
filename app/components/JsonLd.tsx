const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Yasir Arafat",
            url: SITE_URL,
            image: `${SITE_URL}/images/Yasir_Arafat.jpg`,
            jobTitle: "MERN Stack Developer",
            description: "Yasir Arafat is a MERN stack developer and competitive programmer from Dhaka, Bangladesh.",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "BD",
            },
            nationality: { "@type": "Country", name: "Bangladesh" },
            knowsAbout: [
                "MERN Stack",
                "MongoDB",
                "Express.js",
                "React",
                "Node.js",
                "Next.js",
                "TypeScript",
                "Data Structures and Algorithms",
                "Competitive Programming",
            ],
            sameAs: [
                "https://github.com/arafatYasir",
                "https://www.linkedin.com/in/arafatYasir01",
                "https://leetcode.com/u/arafatYasir01",
                "https://codeforces.com/profile/iamyasir.arafat01",
            ],
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "Yasir Arafat Portfolio",
            inLanguage: "en",
            publisher: { "@id": `${SITE_URL}/#person` },
        },
        {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/#profilepage`,
            url: SITE_URL,
            name: "Yasir Arafat | MERN Stack Developer & Competitive Programmer",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            mainEntity: { "@id": `${SITE_URL}/#person` },
        },
    ],
};

export default function JsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
        />
    );
}