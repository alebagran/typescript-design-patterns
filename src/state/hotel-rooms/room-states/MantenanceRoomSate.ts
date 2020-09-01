import RoomState from "./RoomState";
import Room from "../Room";
import AvailableRoomState from "./AvailableRoomState";

export default class MantenanceRoomSate implements RoomState {
  available(room: Room): void {
    room.defineRoomState(new AvailableRoomState());
  }
  checkin(room: Room): void {
    throw new Error("Quarto em Manutenção, impossivel checkin");
  }
  checkout(room: any) {
    throw new Error("Quarto em Manutenção, impossivel chekout");
  }
  maintenance(room: Room): void {
    throw new Error("O Quarto já está em Manutenção");
  }
  getState(room: Room): string {
    return `O quarto ${room.number} se encontra em manutenção`
  }
}