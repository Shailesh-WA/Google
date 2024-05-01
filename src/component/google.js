import React, { useEffect } from "react";

const Google = () => {
  //   useEffect(() => {
  //     if (window && window.adsbygoogle && !window.adsbygoogle.loaded) {
  //       window.adsbygoogle = window.adsbygoogle || [];
  //       window.adsbygoogle.push({});
  //     }
  //   }, []);

  //   useEffect(() => {
  //     const scriptElement = document.querySelector(
  //       'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-google-pub-3940256099942544"]'
  //     );

  //     const handleScriptLoad = async () => {
  //       try {
  //         if (window?.adsbygoogle) {
  //           // console.log("push ads", window);
  //           await window.adsbygoogle.push({});
  //         } else {
  //           scriptElement?.addEventListener("load", handleScriptLoad);
  //         }
  //       } catch (error) {
  //         console.log("Arror in the ads!!!", error);
  //       }
  //     };
  //     handleScriptLoad();

  //     return () => {
  //       if (scriptElement) {
  //         scriptElement.removeEventListener("load", handleScriptLoad);
  //       }
  //     };
  //   }, []);
  useEffect(() => {
    const scriptUrl =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-google-pub-3940256099942544";

    const handleScriptLoad = () => {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
          console.log("add is running");
        }
      } catch (error) {
        console.log("Error in loading ads:", error);
      }
    };

    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.onload = handleScriptLoad;
      document.body.appendChild(script);
    } else {
      handleScriptLoad();
    }

    return () => {
      if (existingScript) {
        existingScript.onload = null;
      }
    };
  }, []);
  return (
    <div>
      <h1>Google Ads</h1>
      {/* <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-google-pub-3940256099942544" // Replace with your AdSense client ID
        data-ad-slot="1234567890" // Use the test ad slot ID here
        data-ad-format="auto"
      ></ins> */}
      <ins
        className="adsbygoogle"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        data-ad-width="160px"
        data-ad-height="600px"
        data-ad-client="ca-google-pub-3940256099942544"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Google;
