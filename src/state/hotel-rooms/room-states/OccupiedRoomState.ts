import RoomState from "./RoomState";
import Room from "../Room";
import AvailableRoomState from "./AvailableRoomState";

export default class OccupiedRoomState implements RoomState {
  getState(room: Room): string {
    return `O Quarto ${room.getRoomNumber()} está Ocupado`;
  }
  checkin(room: Room): void {
    throw new Error(
      "Não é possivel fazer checkin em um quarto que ja esta ocupado",
    );
  }
  checkout(room: Room): void {
    room.defineRoomState(new AvailableRoomState());
  }
}
