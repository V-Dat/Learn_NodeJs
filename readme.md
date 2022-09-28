### learn nodejs

1. What is Node.JS ? ( V8 Engine )

- NodeJs is a platform , runtime environment
- NodeJs là một platform giúp dev viết code javascript ở phía server, ngày xưa chúng ta chỉ có thể viết JS
  ở phía client (browser)
- NodeJs has V8-Engine (google) => Convert JS to C++ to Assembly language (ngôn ngữ máy tính)
- Chat-app : SocketIO (Websocket)
- Web : ExpressJS, EJS
- Read more ... (later)

2. Environment ( IDE / NODE.JS )

- Install NodeJs, NVM
- Npm ( npm -v )

3. Clients / Servers | Request / Response

- Client == Browser : trình duyệt
- Server là máy chủ
- Request là những yêu cầu từ phía Client
- Response là những phản hồi của máy chủ trả về Client
  ![img.png](assets/img.png)

LocalHost
Domain
Port

4. NPM ( Node package manager )

- javascript có Nvm - Trình quản lý gói (Cài cùng với NodeJS)
- Java có maven = porm => jar
- PHP có composer

5. ExpressJS App ( Hello world )

- npm install express framework
- Another framework instead ExpressJS https://expressjs.com/en/resources/frameworks.html

```js
const express = require("express");
const app = express();
const port = 3000;

// routing config app.restfullAPI method
app.get("route", callback);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

6. View Engines (Template Engine)

- Giúp xử lý code javascript trong file HTML
- Hiếm khi sử dụng viewEngines, Vì BE sau này chủ yếu viết API, Sau này phía FE sẽ tự sử dụng FE
  Framework khác để xử lý
-

7. Statics Files

- To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
<!-- express.static(root, [options]) - Link : https://expressjs.com/en/4x/api.html#express.static -->

```js
app.use(express.static("public"));
// Now, you can load the files that are in the public directory:
// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/images/bg.png
// http://localhost:3000/hello.html
```

- To use multiple static assets directories, call the express.static middleware function multiple times:

```js
app.use(express.static("public"));
app.use(express.static("files"));
```

<!-- later : const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))  -->
<!-- http://expressjs.com/en/resources/middleware/serve-static.html -->

8. Routers & MVC

### 8.1 Basic Routing :

- Routing refers to determining how an application responds to a client request to a particular endpoint
- Routing is a URI (or path) and a specific HTTP request method (https://nodejs.org/api/http.html#http_http_methods) (GET, POST, and so on).
- Routung là cách ứng dụng phản hồi cho client khi client yêu cầu từ một Endpoint cụ thể
- Để cấu hình routing cơ bản có thể sử dụng object app của Express và các HTTP method tương ứng (https://expressjs.com/en/4x/api.html#app.METHOD)
- In app.METHOD, These routing methods specify a callback function (sometimes called “handler functions”).
- Trên thực tế Routing method có thể nhân vào nhiều call hơn một callback function. In fact, the routing methods can have more than one callback function as arguments by call next() within the body of the function to hand off control to the next callback.

```js
// Basic structure bellow: https://expressjs.com/en/guide/routing.html
app.METHOD(PATH, HANDLER);
// Respond with Hello World! on the homepage:
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Respond to POST request on the root route (/), the application’s home page:
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

// Respond to a PUT request to the /user route:
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

// Respond to a DELETE request to the /user route:
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

// Use app.all() to handle all HTTP
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});

// using Middleware ( https://expressjs.com/en/guide/using-middleware.html )
```

### 8.2 Routes Path Match :

- Route paths can be strings, string patterns, or regular expressions
- The characters ?, +, \*, and () are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
- If you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]). would be “/data/([\$])book”.

```js
// Here are some examples of route paths based on string patterns
// 1. This route path will match acd and abcd.

app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// 2. This route path will match abcd, abbcd, abbbcd, and so on.
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

// 3. This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

// 4. This route path will match /abe and /abcde.
app.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e");
});

// 5. This route path will match anything with an “a” in it.
app.get(/a/, (req, res) => {
  res.send("/a/");
});

// 6. This route path will match butterfly and dragonfly and *fly*
app.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/");
});
```

### 8.3 Nested Routes - Route parameters

- Route parameters are named ** URL segments **

```javascript
// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }

// 1. To define routes with route parameters
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

// 2. Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.
// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }

// Route path: /plantae/:genus.:species
// Request URL: http://localhost:3000/plantae/Prunus.persica
// req.params: { "genus": "Prunus", "species": "persica" }

// 3. To have more control over the exact string that can be matched by a route parameter
// Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
// req.params: {"userId": "42"}
```

### 8.4 Route handlers

- You can provide multiple callback functions that behave like middleware to handle a request

```js
// 1. More than one callback function can handle a route
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  }
);

// 2. An array of callback functions can handle a route
const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

// 3. A combination of independent functions and arrays of functions can handle a route
const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

app.get(
  "/example/d",
  [cb0, cb1],
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from D!");
  }
);
```

### 8.5 Express.Router

- A Router instance is a complete middleware and routing system
<!-- later https://expressjs.com/en/guide/routing.html -->

9. HTTP Request Method / Database
10. Create Nav / EJS LOOP
11. Detail users / Routers Params
12. Form / POST Method
13. CRUD
14. REST API
15. Upload Files
    Part 1 : upload single filePart
    Part 2: upload multiple files
16. Middleware
17. What’s next ???
