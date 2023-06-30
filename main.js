// Initialization for ES Users
import { Tab, Collapse, initTE } from 'tw-elements';

initTE({ Collapse });
initTE({ Tab });

// Redirect to https
if (!window.location.host.startsWith('localhost') && !window.location.host.startsWith('127.0.0.1')){
    if (window.location.protocol === 'http:') {
        window.location.replace('https://' + window.location.host + window.location.pathname);
    }

    function isElementEmpty(elementId) {
        var element = document.getElementById(elementId);
        return element.innerHTML.trim() === '';
    }
    
    // Function to reload the page if the element is empty
    window.onload = function reloadPageIfEmpty() {
        if (isElementEmpty('apply-button')) {
                location.reload();
            }
    }
}