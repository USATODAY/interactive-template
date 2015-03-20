#USAT Interactive template

A quick Grunt Init template for creating an interactive, USA TODAY-style. This is an opinionated interactive template that will set up a new project with some basic biolerplate, tools and dependencies for building and deploying an interactive on a usatoday.com static page.

If you have any questions, get in touch with Mitchell Thorson mthorson@usatoday.com.

Happy interactive-building!


Copyright 2015 USA TODAY. All rights reserved. No part of these materials may be reproduced, modified, stored in a retrieval system, or retransmitted, in any form or by any means, electronic, mechanical or otherwise, without prior written permission from USA TODAY.

##Dependencies

This template uses the [Grunt Init](http://gruntjs.com/project-scaffolding) project scaffolding tool. To use it, you'll need NodeJS and Grunt installed.

To install node with Hombrew:
````
brew install node
````

Or head over to the [Node website](http://nodejs.org/) and install from there.
Once Node is installed, install Grunt with
```
npm install -g grunt-cli
```

And then install grunt-init with 
```
npm install -g grunt-init
```

After the project is set up, you'll also need Bower. Install with 
```
npm install -g bower
```


##Installing this template

First clone this repo with: 
```
git clone git@github.com:USATODAY/interactive-template.git 
```

It's a good idea to to this somewhere you'll remember because you'll need to find it again in order to keep the template updated.

Then to get setup to use this, `cd` into this repo, and run 
```
source setup.sh
```

##Keeping this template updated
It is a good idea to make sure you have the most recent version of this template.

`cd` into the directory where you originally cloned this project and `git pull`. You are now good to go.

##Using the template
To start a new project, simple create your project directory, `cd` into that directory, and run `grunt-init interactive-template`. Follow the prompts, and let the magic happen. 
Finally, install depnedencies with `npm install` and you're project should be ready for develpment. 

##What's included?
This template comes packaged with a Gruntfile that defines common development tasks, as well as some opinionated biolerplate that works well with USA TODAY's interactive publishing process.

Also included are some usefull base-level styles and some common libraries and packages.

Javascript dependencies are manages with [RequireJS](http://requirejs.org/). 
Libraries that are available to use by default are: 
- Backbone (module name: `backbone`)
- Underscore (module name: `underscore`)
- D3 (module name: `d3`)
- Mapbox (module name: `mapbox`)
- jQuery (module name: `jquery`)

To use one of these libraries, include them in the RequireJS `define` statement at the top of your JS module.

For example, to include jQuery and Underscore in the app.js file:

```javascript

define(
  [
    'jquery',
    'underscore'
  ],
  function(jQuery, _){

    ...

});

```


Also included is USA TODAY's analytics library. To use this include `api/analytics`.

To track an event with the analytics package, call the `trackEvent` method with the event name as an argument like so:

```javascript

define(
  [
    'jquery',
    'underscore',
    'api/analytics'
  ],
  function(jQuery, _, Analytics){

    ...
    Analytics.trackEvent("Event Name Here");

});

```

##Deploying for a USA TODAY static page
In order to build a deployable version of your css and javascript files, run 

```
grunt build
```

This builds and optimized requireJS module of all your code, and removes and packages that are a part of the USA TODAY platform (such as Backbone, Underscore, JQuery, etc.).
The `main.js` and `project.css` files in the `www` directory are ready to be served for a static page.

In addition to `grunt build`, there is also a `grunt deploy` command available that will automatically upload these static assetts to the Gannett CDN if you have USA TODAY's credentials stored locally on your machine.
