## What is KaraCos?

An application server which exposes resources in a tree.

It's structured as a tree of Nodes and files (as leafs) in a domain (the root), nodes carries properties (like name, ACL, owner, and many more...) and can contain Nodes or files. Each Node is a couchDB document, as well as a object instance in your vm.

A node can be exposed over HTTP, node's instance and method can then be queried via JSON/REST (first), XML-RPC, SOAP (later), or even WEBDAV (and that would be lovely)...

Writing an application for KaraCos will consist of subclassing node or domain object and writing functions. 


## But KaraCos is already written in Python, why move it to JavaScript?

* Mastering javascript, css, and html should be enough to develop webapps, even for server-side code.

* nodejs rocks!

* Google's V8 vm rocks! 

* <a href="http://bergie.iki.fi/blog/the_universal_runtime/">The @bergie 's post</a> finished to convince me about pertinence of javascript, event for server-side scripting.

## KaraCos's Python is using CouchDB, why moving to Redis?

* As we want karacos to be able to run on a desktop, a minimal dependencies deployement would be fair.

* As nedis exists, and is a drop replacement for redis, it will allows to have a single nodejs instance for a single user instance.

## Will the python version stop?

Once features of the karacos-nodejs impl will reach sufficient level, the KaraCos python impl will stall and certainly die or eventually find a new maintainer...
