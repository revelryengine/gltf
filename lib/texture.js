import { NamedGLTFProperty } from './gltf-property.js';
import { Image             } from './image.js';
import { Sampler           } from './sampler.js';

/**
 * @typedef {{
 *  sampler?:    number,
 *  source?:     number,
 *  extensions?: Revelry.GLTF.Extensions.texture,
 * } & import('./gltf-property.js').namedGLTFPropertyData} texture
 */

/**
 * A texture and its sampler.
 *
 * @see https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#reference-texture
 */
export class Texture extends NamedGLTFProperty {
    /**
     * Boolean to indicate that texture uses sRGB transfer function
     * @see https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#metallic-roughness-material
     */
    #sRGB = false;


    /**
     * @param {{
     *  sampler?:    Sampler,
     *  source?:     Image,
     *  extensions?: Revelry.GLTF.Extensions.Texture,
     * } & import('./gltf-property.js').NamedGLTFPropertyData} texture
     */
    constructor(texture) {
        super(texture);

        const { sampler, source, extensions } = texture;

        /**
         * The Sampler used by this texture. When undefined, a sampler with repeat wrapping and
         * auto filtering should be used.
         */
        this.sampler = sampler;

        /**
         * The Image used by this texture.
         */
        this.source = source;

        this.extensions = extensions;
    }

    /**
     * Returns the source image of this texture from any extensions that may be present or falls back to the default source.
     */
    getSource() {
        return this.extensions?.EXT_texture_webp.source ?? this.source;
    }

    /**
     * @param {texture} texture
     * @param {import('./gltf-property.js').FromJSONOptions} options
     */
    static fromJSON(texture, options) {
        return new this(this.unmarshall(texture, options, {
            sampler: { factory: Sampler, collection: 'samplers' },
            source:  { factory: Image,   collection: 'images'   },
        }, 'Texture'));
    }

    /**
     * Set this to true indicate that texture uses sRGB transfer function
     * @see https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#metallic-roughness-material
     */
    set sRGB(v) {
        this.#sRGB = v;
    }

    get sRGB() {
        return this.#sRGB;
    }
}

