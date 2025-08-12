import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showFavoriteMonth(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length >= 1) {
    const form = new ActionFormData()
      .title("月份")
      .body("选择你最喜欢的月份！")
      .button("一月")
      .button("二月")
      .button("三月")
      .button("四月")
      .button("五月");

    form.show(players[0]).then((response: ActionFormResponse) => {
      if (response.selection === 3) {
        log("我也喜欢四月！");
        return -1;
      }
    });
  }
}