import RoomState from "./room-states/RoomState";
import AvailableRoomState from "./room-states/AvailableRoomState";

// Estados: Disponivel, Ocupado
export default class Room {
  private roomState: RoomState;
  constructor(
    private number: string,
    private type: string,
    private dailyRate: number,
  ) {
    this.roomState = new AvailableRoomState();
  }

  public checkin(): void {
    this.roomState.checkin(this);
  }

  public checkout(daysOccupied: number): number {
    this.roomState.checkout(this);

    return daysOccupied * this.dailyRate;
  }

  public defineRoomState(state: RoomState): void {
    this.roomState = state
  }
}
