import { GLTFProperty        } from './gltf-property.js';
import { Accessor            } from './accessor.js';
import { MeshPrimitiveTarget } from './mesh-primitive-target.js';
import { Material            } from './material.js';

/**
 * @typedef {WebGL2RenderingContext} GL
 * @typedef {'POSITION'|'NORMAL'|'TANGENT'|'TEXCOORD_0'|'TEXCOORD_1'|'COLOR_0'|'COLOR_1'|'WEIGHTS_0'|'WEIGHTS_1'|'JOINTS_0'|'JOINTS_1'} AttributeName
 * @typedef {{
 *  attributes:  { [K in AttributeName]?: number }
 *  indices?:    number,
 *  material?:   number,
 *  mode?:       GL['POINTS']|GL['LINES']|GL['LINE_STRIP']|GL['TRIANGLES']|GL['TRIANGLE_STRIP'],
 *  targets?:    import('./mesh-primitive-target.js').meshPrimitiveTarget[],
 *  extensions?: Revelry.GLTF.Extensions.meshPrimitive,
 * } & import('./gltf-property.js').glTFPropertyData} meshPrimitive
 */

let ids = 0;

/**
 * Geometry to be rendered with the given material.
 *
 * @see https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#reference-mesh-primitive
 */
export class MeshPrimitive extends GLTFProperty {

    #id;
    get $id() {
        return this.#id;
    }

    /**
     * @param {{
     *   attributes:  { [K in AttributeName]?: Accessor }
     *   indices?:    Accessor,
     *   material?:   Material,
     *   mode?:       GL['POINTS']|GL['LINES']|GL['LINE_STRIP']|GL['TRIANGLES']|GL['TRIANGLE_STRIP'],
     *   targets?:    MeshPrimitiveTarget[],
     *   extensions?: Revelry.GLTF.Extensions.MeshPrimitive,
     * } & import('./gltf-property.js').GLTFPropertyData} meshPrimitive
     */
    constructor(meshPrimitive) {
        super(meshPrimitive);

        this.#id = ids++;

        const { attributes, indices, material, mode = 4, targets, extensions } = meshPrimitive;

        /**
         * A dictionary object, where each key corresponds to mesh attribute semantic and each value is the Accssor or the
         * index of the Accessor containing attribute's data.
         */
        this.attributes = attributes;

        /**
         * The Accessor that contains the indices.
         */
        this.indices = indices;

        /**
         * The Material to apply to this primitive when rendering.
         */
        this.material = material;

        /**
         * The type of primitives to render.
         */
        this.mode = mode;

        /**
         * An array of Morph Targets, each Morph Target is a dictionary mapping attributes (only
         * `POSITION`, `NORMAL`, `TANGENT`, `TEXCOORD_0`, and `TEXCOORD_1` supported) to their deviations in the Morph Target.
         */
        this.targets = targets;

        this.extensions = extensions;
    }


    /**
     * @param {meshPrimitive} meshPrimitive
     * @param {import('./gltf-property.js').FromJSONOptions} options
     */
    static fromJSON(meshPrimitive, options) {
        return new this({
            ...this.unmarshall(meshPrimitive, options, {
                indices:    { factory: Accessor, collection: 'accessors' },
                material:   { factory: Material, collection: 'materials' },
                targets:    { factory: MeshPrimitiveTarget               },
            }, 'MeshPrimitive'),
            attributes: this.unmarshall(meshPrimitive.attributes, options, {
                POSITION:   { factory: Accessor, collection: 'accessors' },
                NORMAL:     { factory: Accessor, collection: 'accessors' },
                TANGENT:    { factory: Accessor, collection: 'accessors' },
                TEXCOORD_0: { factory: Accessor, collection: 'accessors' },
                TEXCOORD_1: { factory: Accessor, collection: 'accessors' },
                TEXCOORD_2: { factory: Accessor, collection: 'accessors' },
                TEXCOORD_3: { factory: Accessor, collection: 'accessors' },
                COLOR_0:    { factory: Accessor, collection: 'accessors' },
                COLOR_1:    { factory: Accessor, collection: 'accessors' },
                WEIGHTS_0:  { factory: Accessor, collection: 'accessors' },
                WEIGHTS_1:  { factory: Accessor, collection: 'accessors' },
                JOINTS_0:   { factory: Accessor, collection: 'accessors' },
                JOINTS_1:   { factory: Accessor, collection: 'accessors' }
            }),
        });
    }
}
