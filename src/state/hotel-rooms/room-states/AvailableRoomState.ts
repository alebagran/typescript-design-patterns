import RoomState from "./RoomState";
import Room from "../Room";
import OccupiedRoomState from "./OccupiedRoomState";

export default class AvailableRoomState implements RoomState {
  getState(room: Room): string {
    return `O Quarto ${room.getRoomNumber()} está Disponivel`
  }
  checkin(room: Room): void {
    room.defineRoomState(new OccupiedRoomState());
  }
  checkout(room: Room): void {
    throw new Error("Não é possivel fazer checkout em um quarto Disponivel");
  }
}
