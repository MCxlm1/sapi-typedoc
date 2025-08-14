/* IMPORT */ import { ItemBookComponent, ItemCompostableComponent, ItemCooldownComponent, ItemDurabilityComponent, ItemDyeableComponent, ItemEnchantableComponent, ItemFoodComponent, ItemInventoryComponent, ItemPotionComponent } from '../index';

/**
 * 物品组件类型映射
 * 
 * 定义了物品组件名称与其对应组件类型的映射关系。
 * 包含原生命名空间（minecraft:）和简写形式的组件名称。
 * 
 * @beta
 */
export type ItemComponentTypeMap = {
    // 书籍组件
    "书籍组件 book": ItemBookComponent;
    // 可堆肥组件
    "可堆肥组件 compostable": ItemCompostableComponent;
    // 冷却组件
    "冷却组件 cooldown": ItemCooldownComponent;
    // 耐久组件
    "耐久组件 durability": ItemDurabilityComponent;
    // 可染色组件
    "可染色组件 dyeable": ItemDyeableComponent;
    // 可附魔组件
    "可附魔组件 enchantable": ItemEnchantableComponent;
    // 食物组件
    "食物组件 food": ItemFoodComponent;
    // 物品栏组件
    "物品栏组件 inventory": ItemInventoryComponent;
    // 书籍组件
    "书籍组件 minecraft:book": ItemBookComponent;
    // 可堆肥组件
    "可堆肥组件 minecraft:compostable": ItemCompostableComponent;
    // 冷却组件
    "冷却组件 minecraft:cooldown": ItemCooldownComponent;
    // 耐久组件
    "耐久组件 minecraft:durability": ItemDurabilityComponent;
    // 可染色组件
    "可染色组件 minecraft:dyeable": ItemDyeableComponent;
    // 可附魔组件
    "可附魔组件 minecraft:enchantable": ItemEnchantableComponent;
    // 食物组件
    "食物组件 minecraft:food": ItemFoodComponent;
    // 物品栏组件
    "物品栏组件 minecraft:inventory": ItemInventoryComponent;
    // 药水组件
    "药水组件 minecraft:potion": ItemPotionComponent;
    // 药水组件
    "药水组件 potion": ItemPotionComponent;
};