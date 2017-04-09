import test from 'ava';
import ness from './index'

test('test', t => {
  
  const n = new ness

  const a = n.add(1)

  const b = a.before(2)

  const c = b.after(3)

  c.add(4) 
  
  t.deepEqual(n.arr, [2, 3, 1, 4])

})
