import { world, DimensionLocation } from "@minecraft/server";

function setTitleAndSubtitle(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("第1章", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "方块镇的麻烦",
  });
}