### 1 Document

Slice : https://docs.google.com/presentation/d/19QTZTiyeEo4mDy_yZuS5Id6afGaoI2OLfYOgRjT_YKo/edit#slide=id.g5c08ef55c9_0_287
API : https://swapi.dev
Document : https://restfulapi.net/http-methods/
HTTP Status : https://httpstatuses.com/

https://en.wikipedia.org/wiki/Web_cache#Cache_control
https://restfulapi.net/http-status-201-created/
https://en.wikipedia.org/wiki/HTTP_location

### 2 What is API ?

- Api is aplication programming interface
- it's not visual interface ( like what you see in front of you ), it is a programming interface
- Basically any language that supports Internet communication will support APIs and restful APIs.

### 3 APIs and Restful APIs

- There are so many different forms of APIs. But Restful APIs are the most common API. The reason they're so popular, it is simple.
- APIs is the ability for 1 computer or 1 software to talk to another computer. ability for 1 software to talk to you, another software ... It's two systems of some variety talking to each other.
- APIs Is no different than me picking up the phone, calling you. You picking up your phone and us having a conversation.

#### APIs

- Computers use APIs to talk to each other over the Internet. That's incorrect.
- They can talk to other over different services, different softwares:
  - It can be basically you plug your MacBook into your Windows computer. That might be considered an API. It's not considered a restful API, but that would be considered some sort of API integration or interface.

#### RestfullAPI

Rest : Representation state transfer
Simply put: - Client computer is any computer that is making a request to the server.
Simply put: An API is a client computer asking another computer for data, or maybe to take a particular action to modify data, delete data, create data, something like that.

REST APIs enable you to develop all kinds of web applications having all possible CRUD (create, retrieve, update, delete) operations.

#### JSON

Javascript object nontation or JSON for short

### 4. HTTP Request

Main : CRUD : Create - Read - update - delete

#### - Get Request : Read

> As GET requests do not change the resource’s state, these are said to be safe methods.

#### - Post Request : Create

https://en.wikipedia.org/wiki/Web_cache#Cache_control
https://restfulapi.net/http-status-201-created/

> HTTP PATCH requests are to make a partial update on a resource.
> Strictly about REST, POST methods are used to create a new resource into the collection of resources.
> Responses to this method are not cacheable unless the response includes appropriate Cache-Control or Expires header fields.

#### - Put Request : Update

> Update and replace

- Ask another computer to update an entire resource
- If the resource doesn’t exist, the API might decide to CREATE (CRUD) the resource
  Use PUT APIs primarily to update an existing resource (if the resource does not exist, then API may decide to create a new resource or not).Responses to PUT method are not cacheable.

  https://restfulapi.net/rest-put-vs-post/

#### - Patch Request : Update

> Partial update/modify

- Ask another computer to update a piece of a resource
- Are not fully supported by all browsers or frameworks, so we typically fall back on PUT

#### - Delete Request : Delete

- DELETE APIs delete the resources (identified by the Request-URI).

Responses to this method are not cacheable

#### APIs Response

APIs can be written in any language as long as that language can accept HTTP protocol requests. It will generally return one of two data structures, either JSON or XML

Một API có thể viết được bằng nhiều loại ngôn ngữ lập trình miễn là ngôn ngữ đó có hỗ trợ hoàn toàn HTTP protocol request. Api trả về 2 loại response dưới đây

- JSON : Nhẹ hơn
- XML : XML comes with this idea of contracts and JSON does not

> Response always go with status code

    - 200 - ok          : Request accepter
    - 201 - Created     : ofter return when a resource is created
    - 202 - Accepted    : Accepted but no done processing
    - 301 - Moved Permanently : When endpoint has permannently changed.
    - 302 - Found       : The endpoint you’re accessing is temporarily moved to somewhere else
    - 400 - Bad Request : Server cannot or will not process your request. Often this is due to malformed API keys or an invalid payload.
    - 401 - Unauthorized : You’re not allowed here. Usually this is because you’re missing authentication credentials (API keys)
    - 403 - Forbidden : The servers understands your request but won’t execute it. Your API keys might not have the right permissions or your trying to use an endpoint that you don’t have access to.
    - 404 - Not Found : There’s nothing here. Move along, move along.
    - 405 - Method Not Allowed : You’re using the wrong HTTP Method. The endpoint might only accept GET requests and you might be POSTing to it, for example.
    - 500 - Internal Server Error : The server had a problem and couldn’t process the request

> a

#### - API Security


