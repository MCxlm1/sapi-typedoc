import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showBasicMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title("消息表单示例")
    .body("这展示了使用 §o§7MessageFormData§r 的简单示例。")
    .button1("按钮 1")
    .button2("按钮 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // 玩家取消了表单，或另一个对话框正在打开。
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`你选择了 ${formData.selection === 0 ? "按钮 1" : "按钮 2"}`);
    })
    .catch((error: Error) => {
      log("显示表单失败: " + error);
      return -1;
    });
}