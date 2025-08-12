import { world, DimensionLocation } from "@minecraft/server";

function sendPlayerMessages(targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    // 显示"First 或 Second"
    const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
    player.sendMessage(rawMessage);

    // 显示"Hello, world!"
    player.sendMessage("Hello, world!");

    // 显示"Welcome, Amazing Player 1!"
    player.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });

    // 显示玩家在"obj"目标上的分数。每个玩家将看到他们自己的分数。
    const rawMessageWithScore = { score: { name: "*", objective: "obj" } };
    player.sendMessage(rawMessageWithScore);

    // 显示"Apple 或 Coal"
    const rawMessageWithNestedTranslations = {
      translate: "accessibility.list.or.two",
      with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
    };
    player.sendMessage(rawMessageWithNestedTranslations);
  }
}