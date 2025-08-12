import { world, system, DimensionLocation } from "@minecraft/server";

function every30Seconds(targetLocation: DimensionLocation) {
  const intervalRunIdentifier = Math.floor(Math.random() * 10000);

  system.runInterval(() => {
    world.sendMessage("这是一个间隔运行 " + intervalRunIdentifier + " 每30秒发送一次消息。");
  }, 600);
}