import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';

function placeTranslatedSign(location: DimensionLocation, text: string) {
    const signBlock = location.dimension.getBlock(location);

    if (!signBlock) {
        console.warn('无法在指定位置找到方块。');
        return;
    }
    const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
    signBlock.setPermutation(signPerm);

    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
    if (signComponent) {
        signComponent.setText({ translate: 'item.skull.player.name', with: [text] });
    } else {
        console.error('无法在方块上找到告示牌组件。');
    }
}

placeTranslatedSign(
    {
        dimension: world.getDimension('overworld'),
        x: 0,
        y: 0,
        z: 0,
    },
    'Steve',
);