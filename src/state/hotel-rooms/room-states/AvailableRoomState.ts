import RoomState from "./RoomState";
import Room from "../Room";
import OccupiedRoomState from "./OccupiedRoomState";
import MantenanceRoomSate from "./MantenanceRoomSate";

export default class AvailableRoomState implements RoomState {
  available(room: Room): void {
    throw new Error("O Quarto já está disponível");
  }
  maintenance(room: Room): void {
    room.defineRoomState(new MantenanceRoomSate());
  }
  getState(room: Room): string {
    return `O Quarto ${room.number} está Disponivel`
  }
  checkin(room: Room): void {
    room.defineRoomState(new OccupiedRoomState());
  }
  checkout(room: Room): void {
    throw new Error("Não é possivel fazer checkout em um quarto Disponivel");
  }
}
