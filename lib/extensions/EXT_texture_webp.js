import { GLTFProperty     } from '../gltf-property.js';
import { Image            } from '../image.js';
import { extensions       } from '../extensions.js';

/**
 * EXT_texture_webp texture extension
 * @typedef {{
 *  source:      number,
 *  extensions?: Revelry.GLTF.Extensions.extTextureWebP,
 * } & import('../gltf-property.js').glTFPropertyData} extTextureWebP
 */

/**
 * This extension allows glTF assets to use WebP as a valid image format.
 *
 * @see https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/EXT_texture_webp
 */
export class EXTTextureWebP extends GLTFProperty {

    /**
     * @param {{
     *  source:      Image,
     *  extensions?: Revelry.GLTF.Extensions.EXTTextureWebP,
     * } & import('../gltf-property.js').GLTFPropertyData} extTextureWebP
     */
    constructor(extTextureWebP) {
        super(extTextureWebP);

        const { source, extensions } = extTextureWebP;

        /**
         * The images node which points to a WebP image.
         */
        this.source = source;

        this.extensions = extensions;
    }

    /**
     * @param {extTextureWebP} extTextureWebP
     * @param {import('../gltf-property.js').FromJSONOptions} options
     */
    static fromJSON(extTextureWebP, options) {
        return new this(this.unmarshall(extTextureWebP, options, {
            source: { factory: Image, collection: 'images' },
        }, 'EXTTextureWebP'));
    }
}

extensions.add('EXT_texture_webp', {
    schema: {
        Texture: EXTTextureWebP,
    },
});
