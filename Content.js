switch (window.location.hostname) {
    case "www.instagram.com":
        window.open(chrome.runtime.getURL('options.html'));
        break;
    case "www.youtube.com":
        window.open(chrome.runtime.getURL('options.html'));
        break;
    case "www.facebook.com":
        window.open(chrome.runtime.getURL('options.html'));
        break;
    case "www.twitter.com":
        window.open(chrome.runtime.getURL('options.html'));
        break;
    case "www.netflix.com":
        window.open(chrome.runtime.getURL('options.html'));
        break;
}