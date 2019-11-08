### JavaScript
To start, we need a weebpack-starter on : wbkd/webpack-starter

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```


### JS fundamentals : let & var
if let is inside of block, let is accessible just in this block
var is accessible outside a block

### IIFE -> Immediately Invoked Function Expression
let app = (function(){
    // TODO
    return;
})();

### Promise 
--> new Promise(
    // TODO
)

### Data Access Using HTTP
# Use Mockapi.io to create an API with ressources
# add Jquery : npm install jquery

### Forms

### Security and Build for production
Use Javascript  obfuscator to hide your code
````
https://javascriptobfuscator.com/
````

To prevent the man in the middle : 
    -> Use SSL
    -> Use HTTP Header : Strict-Transport-Security
    -> Use Cookie attributes : Secure and httpOnly

````
Cross-Site Scripting XSS
````
CSP : Content Security Policy
    -> Use HTTP Header : Content Security Policy
CORS : Cross Origin Ressource Sharing
    -> Use HTTP Header : Access-Control-Allow-Origin

