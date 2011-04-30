# KaraCos server for node.js

## What is KaraCos ?

An application server which exposes resources in a tree.

It's structured as a tree of Nodes and files (as leafs) in a domain (the root), nodes carries properties (like name, ACL, owner, and many more...) and can contain Nodes or files. Each Node is a couchDB document, as well as a object instance in your vm.

A node can be exposed over HTTP, node's instance and method can then be queried via JSON/REST (first), XML-RPC, SOAP (later), or even WEBDAV (and that would be lovely)...

Writing an application for KaraCos will consist of subclassing node or domain object and writing functions. 

This will give easy acces to data contained in the backed couchdb document, for example, instruction to affect value 'John Doe' to the fullname attribute of the current node will be coded as :

		this['fullname'] = 'John Doe'; //subject to change

More details about KaraCos in it's [FAQ](https://github.com/karacos/karacos-nodejs/blob/master/FAQ.md).

## Dependencies:

* couchdb or redis (historically, Karacos resources were mapped to couchdb documents, at this stage (design an specifications) of karacos-nodejs, i'm wondering about redis pertinence to do the job. As we want KaraCos to be usable with a minimum of requirements, redis's choice sounds pertinent cause several redis clones running in nodejs are existing).

* memcache as an optional feature

## Project stage:

Early dev, structuring project.

## Getting started:

### Install couchdb and memcache

		apt-get install nodejs npm couchdb memcached

### Grab karacos-nodejs dependencies:

		npm install cradle

### Clone karacos:

		git clone https://github.com/karacos/karacos-nodejs
		cd karacos-nodejs

### Start karacos server:

		node server.js [serverName]

### Enjoy browsing:

Browse to [[http://localhost:6543/]], you can log-in with username: admin@sysdomain and password: sysadmin.

Notice: Due to early dev stage, do not consider you can login now, no need to open issues if some errors occurs.

## Contributing:

Of course, knowing more or less about :

* javascript (more more more)

* node.js

* couchdb

And browse the [developer area in wiki]()

But you should also understand <a href="http://www.karacos.org/documentation/model/">the KaraCos object model</a>, and i should write more KaraCos specifications ;)...
Anyway, for warriors, there is a KaraCos spec written in python (:D), or I'm nka_111 on skype, and I would enjoy to share with you my sight of the stuff.
