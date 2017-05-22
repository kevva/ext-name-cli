# ext-name-cli [![Build Status](https://travis-ci.org/kevva/ext-name-cli.svg?branch=master)](https://travis-ci.org/kevva/ext-name-cli)

> Get the file extension and MIME type from a file


## Install

```
$ npm install --global ext-name-cli
```


## Usage

```
$ ext-name --help

  Usage
    $ ext-name <input>

  Options
    --mime Get extension and MIME type from a MIME type

  Example
    $ ext-name file.tar
    tar
    application/x-tar

    $ ext-name --mime application/x-tar
    tar
    application/x-tar
```


## Related

* [ext-name](https://github.com/kevva/ext-name) - API for this module


## License

MIT © [Kevin Martensson](http://github.com/kevva)
