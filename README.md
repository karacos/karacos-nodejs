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

* redis.

* memcache (as an optional feature)

## Project stage:

Early dev, structuring project.

## Getting started:

### Grab karacos-nodejs dependencies:

* Install redis:

Ubuntu 11.04:

    apt-get install redis

Windows, ckeck out a redis binary [https://github.com/dmajkic/redis/downloads](https://github.com/dmajkic/redis/downloads) 

[Install nodejs and npm first](http://joyeur.com/2010/12/10/installing-node-and-npm/), then use npm to install utilites :

		npm install async nedis redis rbytes log4js jqtpl

### Clone karacos:

		git clone https://github.com/karacos/karacos-nodejs
		cd karacos-nodejs
		git submodule init
		git submodule update

### Start karacos server:

		node server.js [serverName]

That won't do many things right now	

### Enjoy browsing:

Browse to [[http://localhost:6543/]], you can log-in with username: admin@sysdomain and password: sysadmin.

Notice: Due to early dev stage, do not consider you can login now, no need to open issues if some errors occurs.

### Run testSuite

You'll need nodeunit to run TestSuite:

    npm install nodeunit

and just run nodeunit test in karacos-nodejs dir:

    nodeunit test

That should show more of KaraCos.

## Contributing:

Of course, knowing more or less about :

* javascript (more more more)

* node.js

* redis

But you should also understand <a href="http://www.karacos.org/documentation/model/">the KaraCos object model</a>, and i should write more KaraCos specifications ;)...

Some quick object model explanation:

* a Document contains json data mapped to redis storage - this is an abstract class, it shouldn't be instanciated

* a Parent is a Document who may contain objects of type Child - abstract class

* a Child must have a Parent, a Child is a Parent (a convenience for model design, multi superclass isn't as pretty as it sounds). - abstract class

* a Domain is a Parent, and can be mounted over a service (http)

* a Node is a Child one of it's parent must be a Domain

* An object of type Node or Domain can be requested via a browser HTTP GET request as the KaraCos http service mounts and expose objects of type Domain.

* A Domain's url is /, enabling access for several domains over HTTP can be issued using vhosts and requires only a single http service listening for requests. Exposing several domains over HTTPS will engage one https service for each Domain.

This stack of objects separate features, and enable to reuse them by simply subclassing one of those types in a KaraCos application

Read the [contribute](https://github.com/karacos/karacos-nodejs/blob/master/docs/CONTRIBUTE.md) doc.

And browse the [developer area in wiki](https://github.com/karacos/karacos-nodejs/wiki/KaraCos-nodejs-developer-area)

Anyway, for warriors, there is a KaraCos spec written in python (:D), or I'm nka_111 on skype, and I would enjoy to share with you my sight of the stuff.
