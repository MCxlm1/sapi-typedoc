import { world, DimensionLocation } from "@minecraft/server";

function customCommand(targetLocation: DimensionLocation) {
  const chatCallback = world.beforeEvents.chatSend.subscribe((eventData) => {
    if (eventData.message.includes("cancel")) {
      // 如果消息包含"cancel"则取消事件
      eventData.cancel = true;
    } else {
      const args = eventData.message.split(" ");

      if (args.length > 0) {
        switch (args[0].toLowerCase()) {
          case "echo":
            // 发送修改后的聊天消息
            world.sendMessage(`回声 '${eventData.message.substring(4).trim()}'`);
            break;
          case "help":
            world.sendMessage(`可用命令: echo <消息>`);
            break;
        }
      }
    }
  });
}