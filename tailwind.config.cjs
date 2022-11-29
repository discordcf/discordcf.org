/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bakbak: ["Bakbak One", "cursive"],
        "source-code-pro": ["Source Code Pro", "Menlo", "monospace"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            maxWidth: "100ch",
            margin: "1rem",
            padding: "1rem",
            "div.heading-wrapper": {
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "flex-end",
              alignItems: "baseline",
              marginInlineStart: "-2rem",
            },
            "a.anchor-link": {
              display: "flex",
              position: "relative",
              width: "2rem",
              height: "1.5rem",
              justifyContent: "center",
              verticalAlign: "baseline",
              alignItems: "center",
              opacity: 0,
              "&:hover": {
                opacity: 0.8,
              },
            },
            h1: {
              fontSize: "2.5rem",
            },
            h2: {
              fontSize: "1.875rem",
            },
            "h1, h2, h3": {
              marginTop: "1em",
              scrollMarginTop: "calc(2rem + var(--theme-header-height));",
            },
            pre: {
              borderColor: "#fff",
              border: "2px",
            },
            a: {
              color: "#149ac9",
              textUnderlineOffset: "0.25rem",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            "code::after": {
              content: '""',
            },
            "code::before": {
              content: '""',
            },
            code: {
              backgroundColor: "#ffffff16",
              padding: "0.1rem 0.4rem",
              borderRadius: "4px",
              fontWeight: "400",
              fontSize: "0.85em",
              fontFamily: String(theme("fontFamily.source-code-pro")),
            },
            blockquote: {
              backgroundColor: "#105e79",
              borderLeftColor: "#149ac9",
              padding: "0.1rem 1rem",
              fontStyle: "normal",
              fontWeight: "300",
              "p::before": {
                content: '""',
              },
              "p::after": {
                content: '""',
              },
              "li::marker": {
                color: "#fff",
              },
            },
            p: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            }
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
