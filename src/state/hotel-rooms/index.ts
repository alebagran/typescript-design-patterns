import Room from './Room'

const r = new Room('101', 'single', 25.60)
console.log(r.getRoomSituation());
r.checkin();
console.log(r.getRoomSituation());
console.log(r.checkout(2));
console.log(r.getRoomSituation());