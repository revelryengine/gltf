import { NamedGLTFProperty } from './gltf-property.js';

// const _ArrayBuffer = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : ArrayBuffer;

/**
 *
 * @typedef {{
 *  uri?:        string,
 *  byteLength:  number,
 *  extensions?: Revelry.GLTF.Extensions.buffer,
 * } & import('./gltf-property.js').namedGLTFPropertyData} buffer
 */

/**
 * A buffer points to binary geometry, animation, or skins.
 *
 * @see https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffer
 */
export class Buffer extends NamedGLTFProperty {
    #arrayBuffer;

    /**
     * @param {{
     *  uri?:        URL,
     *  byteLength:  number,
     *  extensions?: Revelry.GLTF.Extensions.Buffer,
     * } & import('./gltf-property.js').NamedGLTFPropertyData} buffer - The properties of the buffer.
     */
    constructor(buffer) {
        super(buffer);

        const { uri, byteLength, extensions } = buffer;

        /**
         * The uri of the buffer. Relative paths are relative to the .gltf file. Instead of referencing an external
         * file, the uri can also be a data-uri.
         */
        this.uri = uri;

        /**
         * The length of the buffer in bytes.
         */
        this.byteLength = byteLength;

        this.#arrayBuffer = new ArrayBuffer(this.byteLength);

        this.extensions = extensions;
    }

    /**
     * @param {buffer} buffer
     * @param {import('./gltf-property.js').FromJSONOptions} options
     */
    static fromJSON(buffer, options) {
        return new this(this.unmarshall(buffer, options, {
            uri: { factory: URL }
        }, 'Buffer'));
    }

    /**
     * Fetches the binary data into an array buffer.
     * @param {AbortSignal} [signal]
     */
    async load(signal) {
        if (this.uri) {
            const buffer = await fetch(this.uri, { signal }).then(res => res.arrayBuffer());
            new Uint8Array(this.#arrayBuffer).set(new Uint8Array(buffer, 0, this.byteLength));
        }
        await super.load(signal);

        return this;
    }

    /**
     * Returns the data loaded into memory for this buffer
     */
    getArrayBuffer() {
        return this.#arrayBuffer;
    }
}
