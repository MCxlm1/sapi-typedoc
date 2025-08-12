import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showActionForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const playerList = world.getPlayers();

  if (playerList.length >= 1) {
    const form = new ActionFormData()
      .title("测试标题")
      .body("这里是正文！")
      .button("按钮 1")
      .button("按钮 2")
      .button("按钮 3")
      .button("按钮 4")
      .button("按钮 5");

    form.show(playerList[0]).then((result: ActionFormResponse) => {
      if (result.canceled) {
        log("玩家退出了对话框。请注意，如果聊天窗口打开，对话框会自动取消。");
        return -1;
      } else {
        log("你的结果是: " + result.selection);
      }
    });
  }
}