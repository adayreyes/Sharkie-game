/**
 * @class Level
 */
class Level{
    /**
     * Array of objects with all enemies.
     * @see {@link JellyFish}
     * @see {@link PufferFish}
     * @type {Array}
     */
    enemies;
    /**
     * @see {@link Endboss}
     * @type {Object}
     */
    endboss;

    /**
     * Array of objects with all items.
     * @see {@link Coin}
     * @see {@link Poison}
     * @see {@link Heart}
     * @type {Array}
     */
    items;

    /**
     * Array of objects with all background objects.
     * @see {@link BackgroundObject}
     * @type {Array}
     */
    background_objects;

    /**
     * Array of objects with all statusbars.
     * @see {@link Healthbar} 
     * @see {@link Coinbar}
     * @see {@link Poisonbar}
     * @type {Array}
     */
    statusbars;

    constructor(enemies,endboss,items,background_objects,statusbars){
        this.enemies = enemies;
        this.endboss = endboss;
        this.items = items;
        this.background_objects = background_objects;
        this.statusbars = statusbars;
    }
}