# KaraCos server for node.js

## What is KaraCos ?

An application server which exposes couchdb documents in a tree.
KaraCos uses CouchDB, a no-SQL database for it's data storage.

It's structured as a tree of Nodes and files (as leafs) in a domain (the root), nodes carries properties (like name, ACL, owner, and many more...) and can contain Nodes or files. Each Node is a couchDB document, as well as a object instance in your vm.

A node can be exposed over HTTP, node's instance and method can then be queried via JSON/REST (first), XML-RPC, SOAP (later), or even WEBDAV (and that would be lovely)...

Writing an application for KaraCos will consist of subclassing node or domain object and writing functions. 

This will give easy acces to data contained in the backed couchdb document, for example, instruction to affect value 'John Doe' to the fullname attribute of the current node will be coded as :

		this['fullname'] = 'John Doe';

## Dependencies:

* couchdb

* memcache as an optional feature

* some templating solution (XST , jsontemplate, or other, choice not made already)

* some test framework

## Project stage:

Early dev, structuring project.

## But KaraCos is already written in Python, why move it to JavaScript ?

* Mastering javascript, css, and html should be enough to develop webapps, even for server-side code.

* nodejs rocks!

* Google's V8 vm rocks! 

* <a href="http://bergie.iki.fi/blog/the_universal_runtime/">The @bergie 's post</a> finished to convince me about pertinence of javascript, event for server-side scripting.


## Will the python version stop:

Once features of the karacos-nodejs impl will reach sufficient level, the KaraCos python impl will stall and certainly die or eventually find a new maintainer...

## Contributing:

Of course, knowing more or less about :

* javascript (more more more)

* node.js

* couchdb

But you should also understand <a href="http://www.karacos.org/documentation/model/">the KaraCos object model</a>, and i should write more KaraCos specifications ;)...
Anyway, for warriors, there is a KaraCos spec written in python (:D), or I'm nka_111 on skype, and I would enjoy to share with you my sight of the stuff.