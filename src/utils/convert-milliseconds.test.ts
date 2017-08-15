import test from 'ava'
import convertMilliseconds from './convert-milliseconds'

test('convertMilliseconds: invalid type', t => {
  const error = t.throws(() => convertMilliseconds('1000'), TypeError)
  t.is(error.message, 'The value is unexpected. Expect a value with unit.')
});

test('convertMilliseconds: milliseconds', t => {
  t.is(convertMilliseconds('1000ms'), 1000)
})

test('convertMilliseconds: seconds', t => {
  t.is(convertMilliseconds('1s'), 1000)
  t.is(convertMilliseconds('0.5s'), 500)
})

test('convertMilliseconds: minutes', t => {
  t.is(convertMilliseconds('1m'), 60000)
  t.is(convertMilliseconds('0.5m'), 30000)
})

test('convertMilliseconds: hours', t => {
  t.is(convertMilliseconds('1h'), 3600000)
  t.is(convertMilliseconds('0.5h'), 1800000)
})
