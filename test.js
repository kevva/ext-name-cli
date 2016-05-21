import execa from 'execa';
import test from 'ava';

test('dislay ext and mime type', async t => {
	t.is(await execa.stdout('cli.js', ['foobar.tar']), 'tar\napplication/x-tar');
	t.is(await execa.stdout('cli.js', ['foobar.gif']), 'gif\nimage/gif');
});

test('show help screen', async t => {
	t.regex(await execa.stdout('cli.js', ['--help']), /Get the file extension and MIME type from a file/);
});

test('show version', async t => {
	t.is(await execa.stdout('cli.js', ['--version']), require('./package').version);
});
