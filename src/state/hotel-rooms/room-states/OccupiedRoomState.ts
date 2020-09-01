import RoomState from "./RoomState";
import Room from "../Room";
import AvailableRoomState from "./AvailableRoomState";

export default class OccupiedRoomState implements RoomState {
  available(room: Room): void {
    throw new Error("Um quarto ocupado Só pode se tornar disponivel por checkout");
  }
  maintenance(room: Room): void {
    throw new Error("Um quarto Ocupado não pode estar em Manutenção");
  }
  getState(room: Room): string {
    return `O Quarto ${room.number} está Ocupado`;
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
