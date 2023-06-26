// Initialization for ES Users
import { Tab, Collapse, initTE } from 'tw-elements';

initTE({ Collapse });
initTE({ Tab });

// Redirect to https
if (window.location.protocol === 'http:') {
    window.location.href = 'https://' + window.location.host + window.location.pathname;
    window.location.reload(true);
}