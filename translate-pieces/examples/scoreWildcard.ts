import { world, DimensionLocation } from "@minecraft/server";

function scoreWildcard(targetLocation: DimensionLocation) {
  // 显示玩家在"obj"目标上的分数。每个玩家将看到他们自己的分数。
  const rawMessage = { score: { name: "*", objective: "obj" } };
  world.sendMessage(rawMessage);
}