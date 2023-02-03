/* 
Parcel will do -
1. Hot module replacement
2. file watcher algorithmn- c+ +
3. bundling
4. cleaning code
5. no console logs
6. dev and prod buils
7. super fast build algorithm 
8. caching
9. compressing the code
10. compatible with older version of browsers
11. parcel will manages the port number
12. anything will auto generate we will put inside gitignore
*/

import React from "react";
import  ReactDOM from "react-dom/client";

const heading1 = React.createElement('h1', null, 'Heading 1 from parcel');
const heading2 = React.createElement('h2', null, 'Heading 2');
const container = React.createElement('div', { id: 'container'}, heading1, heading2);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
