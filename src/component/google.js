import React, { useEffect } from "react";

const Google = () => {
  useEffect(() => {
    if (window && window.adsbygoogle && !window.adsbygoogle.loaded) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, []);
  return (
    <div>
      <h1>Google Ads</h1>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-google-pub-3940256099942544" // Replace with your AdSense client ID
        data-ad-slot="1234567890" // Use the test ad slot ID here
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default Google;
