import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const NotFound = () => {
  const location = useLocation();
  useScrollToTop();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page Not Found | Zyra Digitals</title>
        <meta name="robots" content="noindex,follow" />
        <meta name="description" content="The page you were looking for could not be found." />
        <link rel="canonical" href={`https://www.zyradigitals.info${location.pathname}`} />
        <meta property="og:title" content="Page Not Found | Zyra Digitals" />
        <meta property="og:description" content="The page you were looking for could not be found." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.zyradigitals.info${location.pathname}`} />
        <meta property="og:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zyradigitals.info/" }
          ]
        })}</script>
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
