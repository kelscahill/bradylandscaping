# Brandy Stone & Landscaping Grunt Workflow

### Harp / Bootstrap edition

## Installation

First, download and install node.js from http://nodejs.org/

**Important**: Use Node version 0.10. Sometimes newer versions of node can cause installation issues until packages are updated. You may need to click on the link "Other release."

## In terminal:

Go to your root folder where you have your gruntfile.js and type:

    sudo ./install.sh

now from the commandline you can do (from your root folder)

    grunt

to run all the tasks

    grunt start

to start harp and watch for changes.  After running the install, 'grunt start' will be run for you. Hit CTRL-C to quit it at any time.

you can also run individual tasks, such as:

    grunt cssmin

or

    grunt concat:js

## What it does

-   Runs [HARP.js][] static web server for building static markup

-   Has Bootstrap stuff pre-installed and in the correct folders for you
    to start working

-   combines CSS and JS files in the build folder

-   minfies CSS and JS files

-   compiles SASS files in the buildfolder

-   automatically compiles sprite images into one image and creates
    sprites.css

-   minifies PNG's in the build/images folder

-   Automatically creates a sprite sheet and sprite sheet .CSS file out
    of sprites in build/sprites (PNG only)

-   Automatically creates a style guide using KSS using your CSS
    comments (see [dss-node][])

-   Has a task for validating your HTML to check for errors and missing
    stuff

-   Has a task to evaluate the performance of your page and page load

-   Has a task for creating stripped down CSS file that removes unused
    CSS

-   Automatically watches folders for modifications and triggers the
    appropriate tasks to rebuild your assets

-   Has a task to push all files in a folder up to an S3 bucket

## Tasks

    grunt                   - full build - compile all css / js / png assets
    grunt start             - starts harp, begins monitoring build files for changes
    grunt compile           - compiles harp files to static html
    grunt pushlive          - pushes files to s3.. requires setting up grunt-aws.json
    grunt uncss             - Runs uncss against your website urls and final minified style sheet. May require some set up
    grunt test-performance  - Runs yslow and reports the results
    grunt test-html         - Runs HTML validation
    grunt resolve           - Rebuilds files and marks js / css files as resolved to quickly resolve conflicts with those files.

## Some Bootstrap notes

### Overriding Variables

To override any of the default bootstrap variables (see
build/sass/bootstrap/\_variables.scss for the full list), you just need
to copy them out of \_variables.scss and put them in
build/sass/screen.scss at the top. You can easily change colors,
breakpoints, container sizes etc.

### Kitchen Sink

There is a kitchensink page set up in /public. This shows you all the
bootstrap UI elements on one easy to reference page.

### Customizing Bootstrap includes to trim final CSS size

In build/sass/bootstrap.scss, you can see this is where bootstrap
includes all the various components. If you want to trim out stuff
you’re not using, you can comment these out.

### Workflow

Start with bootstrap classes wherever possible. Ideally, you set up a
rough layout first using bootstrap layout classes. Add your own classes
and use those to specify your customizations on top of bootstrap, rather
than making global overrides to bootstrap classes.

  [HARP.js]: http://harpjs.com
  [dss-node]: https://github.com/dss-node/dss-node
