import { world, DimensionLocation } from "@minecraft/server";

function sendBasicMessage(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].sendMessage("你好世界!");
}