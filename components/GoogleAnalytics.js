import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-LMKN14H2MW`}
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LMKN14H2MW', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
);

export default GoogleAnalytics;