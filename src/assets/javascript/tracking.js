(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

(function(global) {
    global.analytics = {
        trackPageView: trackPageView,
        trackEvent: trackEvent
    };

    function trackPageView() {
       ga('send', 'pageview');
    }

    function trackEvent() {
        var args = [].slice.call(arguments);
        args = ['send', 'event'].concat(args);
        ga.apply(this, args);
    }
})(window);

ga('create', 'UA-99092738-1', 'auto');
ga('send', 'pageview');
