import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function findEntitiesHavingPropertyEqualsTo(
    targetLocation: DimensionLocation
) {
  // Minecraft蜜蜂有一个has_nectar布尔属性
  const queryOption: EntityQueryOptions = {
    propertyOptions: [{ propertyId: "minecraft:has_nectar", value: { equals: true } }],
  };

  const entities = targetLocation.dimension.getEntities(queryOption);
}