<Script
  id="messenger-tag"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `window.fbAsyncInit = function() {
    FB.init({
      appId            : '238792998887533',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
  };(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));`,
  }}
></Script>;
