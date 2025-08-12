import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log("无法在指定位置找到方块。");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: "item.skull.player.name", with: [players[0].name] });
}