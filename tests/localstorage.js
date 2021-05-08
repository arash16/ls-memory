import test from 'ava';
import ls from '../dist/main';

test('setItem', (t) => {
  t.is(typeof ls.setItem, 'function');
});
