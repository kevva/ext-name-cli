#!/usr/bin/env node
'use strict';
const meow = require('meow');
const extName = require('ext-name');

const cli = meow(`
	Usage
	  $ ext-name <input>

	Example
	  $ ext-name file.tar
	  tar
	  application/x-tar
`);

if (cli.input.length === 0) {
	console.error('Specify a file');
	process.exit(1);
}

const ext = extName(cli.input[0]);

console.log(`${ext.ext}\n${ext.mime}`);
