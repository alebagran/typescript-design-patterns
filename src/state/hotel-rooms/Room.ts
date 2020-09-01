import RoomState from "./room-states/RoomState";
import AvailableRoomState from "./room-states/AvailableRoomState";

// Estados: Disponivel, Ocupado
export default class Room {
  protected roomState: RoomState;
  constructor(
    readonly number: string,
    readonly type: string,
    readonly dailyRate: number,
  ) {
    this.roomState = new AvailableRoomState();
  }

  public getRoomSituation(): string {
    return this.roomState.getState(this);
  }

  public checkin(): void {
    this.roomState.checkin(this);
  }

  public mantenance(): void {
    this.roomState.maintenance(this);
  }

  public available(): void {
    this.roomState.available(this);
  }

  public checkout(daysOccupied: number): number {
    this.roomState.checkout(this);

    return daysOccupied * this.dailyRate;
  }

  /**
   * @description Só deve ser utilizada por roomstate
   * @param state
   */
  public defineRoomState(state: RoomState): void {
    this.roomState = state;
  }
}
