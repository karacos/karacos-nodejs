/**
 * Starter file for KaraCos
 * 
 * By Nicolas Karageuzian
 * 
 * This file is part of KaraCos.
 *
 * KaraCos is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * KaraCos is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KaraCos.  If not, see <http://www.gnu.org/licenses/>.
 */

var http = require('http'),
	fs = require('fs'),
//	nedis = require('nedis'),
	karacos = require('karacos');

server = karacos.http.server.getServer();

server.listen(1337, "127.0.0.1");

console.log('KaraCos HTTP Server running at http://127.0.0.1:1337/');

//var nserver = nedis.createServer().listen(1338, "127.0.0.1");
//
//console.log('Nedis data store Server running at http://127.0.0.1:1338/');