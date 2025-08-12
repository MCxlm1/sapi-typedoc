import { BlockPermutation, BlockSignComponent, SignSide, DyeColor, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTwoSidedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const signBlock = targetLocation.dimension.getBlock(targetLocation);

  if (!signBlock) {
    log("无法在指定位置找到方块。");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  if (signComponent) {
    signComponent.setText(`派对告示牌！\n这是正面的绿色文字。`);
    signComponent.setText(`派对告示牌！\n这是背面的红色文字。`, SignSide.Back);
    signComponent.setTextDyeColor(DyeColor.Green);
    signComponent.setTextDyeColor(DyeColor.Red, SignSide.Back);

    // 玩家无法编辑告示牌！
    signComponent.setWaxed(true);
  } else {
    log("无法找到告示牌组件。");
  }
}