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

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

### Stubs functions
A strub function is proxy function that allow us to replace the functionality completely. The original function won't run anymore, but rather our new stub that simply returns a result.
Stubs Function : --- rename original function
                --- create new function stub
                --- legacy code calls stub
                --- new code calls new function name
                --- confusing inteface for new team memebrs


### Advanced techniques in JS & JQuery
 ```
 Shorthand methods
 ```
 .blur() -- .change() -- .click() -- .dbclick() -- .focus(),focusin(),focusout()
 .hover() -- .keydown(),keypress(),keyup() -- .load()
 .mousedown(), .mouseenter(), .mouseleave(), mousemove(), mouseout(), mouseover(), mouseup()

 ### Use JQuery
 Download jquery-3.1.1.js and add it in script :     <script src="../jquery/jquery-3.1.1.js"></script>

 ### Named functions
 ```
 Use a named function as the event handler
 ```
 Easy to remove
 Can be centralized in a library
 Updating one handler function has global impact
  ```
 Be aware of the order handler functions are added and removed
 ```
```
 Be careful of process order assumptions
 ```

  ### Event Namespace
 ```
 Namespace
 ```
 Allows grouping of events
 Provides ability to norrowly target removal of event
 Multiple namespaces can be included
 Namespaces are not hierarchical

  ### Delegation
 ```
 Bind event handlers higher in the DOM
 ```
 Efficiency
 Centralized processing

 * List Header <ul>
 * * List Item 1 <li>
 * * List Item * <li>
 $('ul').on('click','li', function(event){})

 ### Custom Events
 ```
 Create new events for DOM elements
 Create events for regular objects
 Initiate a custom event with .trigger()
 ```

  ### JQuery Defered object
 ```
 jQuery provides an alternate to callbacks for asynchronous processing
 ```
 - Defered
 ```
 Deferreds allow for
 ```
 - Grouping multiple asynchronous processes
 - Attaching multiple success and failure handlers
 - Postpone logic flow until all asynchronous complete - in any order
 - Integration of AJAX and custom functions into asynchronous processing

 ```
 Implements the JavaScript promise
 ```
 ```
 AJAX calls
 ```
 -  Open a connection to an external resource
 -  Begin transfer of the resource
 -  Upon completion, execution success or failure callbacks
 -  Resolve or reject a promise
 ```
 Many developers just pass success or failure callback functions
 ```
 ```
 The retruned promise is mostly ignored
 ```

### Deferred Methods
```
Some Methods available on deferred objects
```
- Return deferred object for a process flow
    -   when 
    -   promise
- Attach handler functions to deferred object
    -   then
    -   done
    -   fail
    -   progress
    -   always
- Change state of deferred object
    -   resolve
    -   reject
