import { world, DimensionLocation } from "@minecraft/server";

function nestedTranslation(targetLocation: DimensionLocation) {
  // 显示"苹果或煤炭"
  const rawMessage = {
    translate: "accessibility.list.or.two",
    with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
  };
  world.sendMessage(rawMessage);
}