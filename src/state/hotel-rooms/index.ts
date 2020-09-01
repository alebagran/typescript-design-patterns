import Room from './Room'

const r = new Room('101', 'single', 25.60)

r.checkin();
r.checkout(3);

console.log(r.checkout(2));