"use strict";

(function() {
    var amazonMappings = {
        'GB': 'https://www.amazon.co.uk/Sadlands-Alec-Gibson/dp/1520720424',
        'US': 'https://www.amazon.com/Sadlands-Alec-Gibson/dp/1520720424',
        'AU': 'https://www.amazon.com.au/dp/B06XFG7GKM',
        'CA': 'https://www.amazon.ca/Sadlands-Alec-Gibson-ebook/dp/B06XFG7GKM',
        'IN': 'https://www.amazon.in/dp/B06XFG7GKM',
        'DE': 'https://www.amazon.de/dp/B06XFG7GKM',
        'FR': 'https://www.amazon.fr/dp/B06XFG7GKM',
        'ES': 'https://www.amazon.es/dp/B06XFG7GKM',
        'IT': 'https://www.amazon.it/Sadlands-Alec-Gibson/dp/1520720424',
        'NL': 'https://www.amazon.nl/dp/B06XFG7GKM',
        'JP': 'https://www.amazon.co.jp/dp/B06XFG7GKM',
        'BR': 'https://www.amazon.com.br/Sadlands-English-Alec-Gibson-ebook/dp/B06XFG7GKM',
        'MX': 'https://www.amazon.com.mx/Sadlands-English-Alec-Gibson-ebook/dp/B06XFG7GKM'
    };

    var loadingSpinner = document.getElementById('loading-spinner');
    var fallback = document.getElementById('fallback');

    initialise();

    function initialise() {
        hideFallback();
        showSpinner();

        httpGet('http://freegeoip.net/json/', function (response) {
            redirect(response.country_code);
        });
    }

    function showSpinner() {
        loadingSpinner.className = 'loading-spinner';
    }

    function httpGet(url, success) {
        var request = new XMLHttpRequest();
        if (!('withCredentials' in request)) request = new XDomainRequest(); // fix IE8/9
        request.open('GET', url);
        request.onload = function (request) {
            var response = request.currentTarget.response || request.target.responseText;
            success(response);
        };
        request.onerror = onError;
        request.send();
        return request;
    }

    function onError() {
        showFallback();
    }

    function hideFallback() {
        fallback.className = 'hidden';
    }

    function showFallback() {
        fallback.className = '';
        loadingSpinner.className = '';
    }

    function redirect(countryCode) {
        window.location = amazonMappings[countryCode] || amazonMappings['GB'];
    }
})();