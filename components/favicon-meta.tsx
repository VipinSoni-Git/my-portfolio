import Head from "next/head"

export function FaviconMeta() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffd700" />
      <meta name="msapplication-TileColor" content="#111827" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Head>
  )
}
