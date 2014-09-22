# grunt-fixindent

A grunt task to change the indentation of files.

[![Build Status](https://travis-ci.org/anton164/grunt-fixindent.svg?branch=master)](https://travis-ci.org/anton164/grunt-fixindent)[![NPM version](https://badge.fury.io/js/grunt-fixindent.png)](https://badge.fury.io/js/grunt-fixindent.png)

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fixindent --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fixindent');
```

## The "fixindent" task

### Overview
This task will let you set the indentation to a specific setting in your files. It simply walks all of the lines in the specified files, detects the current style of indentation, replaces it with your specified indenation settings and saves the modified files to the location you want.

**It is assumed that the files are properly indented in some style, it does currently not fix broken indentation, but simply changes from one style of indentation (or several mixed up) to a chosen style.**
__Properly indenting files is a WIP.__

This is useful for projects with mixed indentation where you want to set the indentation to a standard in one go.

### Options

#### options.style
Type: `String`
Default value: `space`

The type of indentation you would like to use. The options are `tab` or `space`.

#### options.size
Type: `Number`
Default value: `2`

The number of `options.style` characters in an indent. For example, if you use 2 spaces per indent then you would set `options.style` to `space`, and this to `2`.

### Usage Examples

#### Set indentation to 2 spaces
In this example the fixindent task will set the indentation of all .js files in the src directory to 2 spaces and save the modified files in the dist directory.

```js
grunt.initConfig({
  fixindent: {
    scripts: {
      src: [
        'src/*.js'
      ],
      dest: 'dist/',
      options: {
        style: 'space',
        size: 2,
        change: 1
      }
    }
  }
});
```

#### Set indentation to 1 tab
In this example the fixindent task will set the indentation of all .css files in the src directory to 1 tab and save the modified files in the dist directory.

```js
grunt.initConfig({
  fixindent: {
    stylesheets: {
      src: [
        'css/*.css'
      ],
      dest: 'dist/',
      options: {
        style: 'tab',
        size: 1,
      }
    }
  }
});
```

## Release History
 * 2014-22-09    v0.1.3    Replaced all instances of 'indent' to 'fixindent'    
 * 2014-07-09    v0.1.2    Updated readme and package.json
 * 2014-06-09    v0.1.1    Hotfix for initial release.
 * 2014-05-09    v0.1.0    Initial release.
