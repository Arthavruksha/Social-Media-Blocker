chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.indexOf("instagram.com") != -1 || details.url.indexOf("web.whatsapp.com") != -1) {
        return {redirectUrl: "https://www.google.com"};
      }
    },
    {urls: ["*://*.instagram.com/*", "*://web.whatsapp.com/*"]},
    ["blocking"]
  );
  
