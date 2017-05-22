import execa from 'execa';
import test from 'ava';

test('dislay ext and mime type', async t => {
	t.is(await execa.stdout('./cli.js', ['foobar.tar']), 'tar\napplication/x-tar');
	t.is(await execa.stdout('./cli.js', ['foobar.gif']), 'gif\nimage/gif');
});

test('dislay ext and mime type using mime type', async t => {
	t.is(await execa.stdout('./cli.js', ['--mime', 'application/x-tar']), 'tar\napplication/x-tar');
	t.is(await execa.stdout('./cli.js', ['--mime', 'image/gif']), 'gif\nimage/gif');
});
