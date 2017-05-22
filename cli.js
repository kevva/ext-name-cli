#!/usr/bin/env node
'use strict';
const meow = require('meow');
const extName = require('ext-name');

const cli = meow(`
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
`, {
	boolean: ['mime']
});

if (cli.input.length === 0) {
	console.error('Specify a file');
	process.exit(1);
}

const ext = cli.flags.mime ? extName.mime(cli.input[0]) : extName(cli.input[0]);

console.log(`${ext.ext}\n${ext.mime}`);
