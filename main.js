// Initialization for ES Users
import { Tab, Collapse, initTE } from 'tw-elements';

initTE({ Collapse });
initTE({ Tab });

// Redirect to https
// if (window.location.protocol === 'http:') {
//     window.location.replace('https://' + window.location.host + window.location.pathname);
// }

// window.addEventListener('load', function() {
//   var script = document.createElement('script');
//   script.src = 'https://apply.devfolio.co/v2/sdk.js';
//   script.async = true;
//   script.defer = true;
//   // Append the script to the <body> section
//   document.body.appendChild(script);
// });