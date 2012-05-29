Breaking HTML5 limits on mobile JavaScript
==========================================

Problems/Things to Consider
---------------------------
* speed
* background tabs don't run JS in the background
* silk (Kindle Fire) requires roundtrip to server for JS operating on DOM (!!!) This is because it tries to speed things up with caching/proxying tools
* sooo many browsers, some suck, or don't have debugging tools
* [Emulators](http://www.mobilexweb.com/emulators) aren't always all that accurate
* [Who killed my battery?](http://www.mobilexweb.com/go/battery)
* Remote Web Inspectors - still not that many
    * [Adobe Shadow](http://labs.adobe.com/technologies/shadow/)
        * free (in beta)
        * remote client?
        * remote web inspector: weinre (this is super cool)

Working with UI
---------------
* Use [`<meta name="viewport"...>`](https://developer.mozilla.org/en/Mobile/Viewport_meta_tag) so that device can make smart decisions about layout/rendering
* Always design mobile for width 320px: window.devicePixelRatio will scale things appropriately
* Inline images (data:image/png;base64,iVBORw0Ksdfblah") don't require additional request to server (only use for small images, where lack of compression is counterbalanced by size of headers, etc)
    * Good for `<link rel="apple-touch-icon">` so that image shows up as soon as you try to bookmark (otherwise, there will be a network delay)
* `contenteditable` attribute may replace any need for WYSIWYG editors (yippee)

Core JS Stuff
-------------
* Add to homescreen OS library: [http://cubiq.org/add-to-home-screen](http://cubiq.org/add-to-home-screen)
* Web Workers use `self` to refer to itself (Ruby-esque?)
* JSON.stringify/parse (ECMA 5.1?) is native, much faster than JSON2
* window.performance measures performance without affecting it (works in... iOS5? desktop?)
* working with the session is a non-starter on mobile: no guarantee of consistency. Use localStorage instead!

Assorted
--------
* Materials at [http://firt.mobi/material/](http://firt.mobi/material/)
