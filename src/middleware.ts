import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "en"],

  // Used when no locale matches
  defaultLocale: "en",

  pathnames: {
    "/about": {
      en: "/about",
      es: "/acerca",
    },
  },
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es)/:path*"],
}
