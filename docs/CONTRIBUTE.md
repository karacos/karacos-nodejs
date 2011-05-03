# Contribute to KaraCos

## Running the tests

    npm install expresso node-jscoverage

KaraCos tests are processed with [expresso](http://visionmedia.github.com/expresso/)

## Theme & templating

Theme is stored in theme attribute of Domain or Node object.

Templates are processed against an object instance, and some optional method and parameters.

KaraCos API comes first, if the request Accepts some application/json or application/xml or any supported application before text/html or xhtml, template won't be rendered.
See the http/processor.js to know more about request dispatching.
If the request has to be rendered, then [jqtpl](https://github.com/kof/node-jqtpl) do the stuff.

* Default themes are registered in directory resources/templates/themes/(theme-dir-name)/

* Static resources for a theme are stored in resources/static/themes/(theme-dir-name)/, they can ba adressed at /_static/themes/(theme-dir-name)/(static-resource-name)

### Template directory organisation/lookup

* resources/template/(theme-dir)/site.html contains the theme of the page

* resources/template/(theme-dir)/(typeName).html contains a template of the object only

If the request has to be rendered, then it can be thrown by :

* browser: then site.html is used as template, and site should include (typeName).html, object instance is passed as arguments to renderer.

* xhr: (typeName).html only is rendered, it should only contain exposition of object instance data.