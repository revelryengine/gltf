
import { NamedGLTFProperty  } from './gltf-property.js';
import { CameraOrthographic } from './camera-orthographic.js';
import { CameraPerspective  } from './camera-perspective.js';
import { mat4               } from '../deps/gl-matrix.js';

/**
 * @typedef {({
 *  type:          'orthographic'|'perspective',
 *  orthographic?: import('./camera-orthographic.js').cameraOrthographic,
 *  perspective?:  import('./camera-perspective.js').cameraPerspective,
 *  extensions?:   Revelry.GLTF.Extensions.camera,
 * }) & import('./gltf-property.js').namedGLTFPropertyData} camera
 */

/**
 * A camera's projection. A node can reference a camera to apply a transform to place the camera in the scene.
 *
 * @see https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#reference-camera
 */
export class Camera extends NamedGLTFProperty {
    /**
     * @param {({
     *  type:          'orthographic'|'perspective',
     *  orthographic?: CameraOrthographic,
     *  perspective?:  CameraPerspective,
     *  extensions?:   Revelry.GLTF.Extensions.Camera,
     * }) & import('./gltf-property.js').NamedGLTFPropertyData} camera
     */
    constructor(camera) {
        super(camera);

        const { type, extensions } = camera;

        /**
         * Specifies if the camera uses a perspective or orthographic projection.
         * interpolation algorithm to define a keyframe graph (but not its target).
         */
        this.type = type;

        /**
         * An orthographic camera containing properties to create an orthographic
         * projection matrix.
         */
        this.orthographic = camera.orthographic;

        /**
         * A perspective camera containing properties to create a perspective
         * projection matrix.
         */
        this.perspective = camera.perspective;

        this.extensions = extensions;
    }

    /**
     * @param {camera} camera
     * @param {import('./gltf-property.js').FromJSONOptions} options
     */
    static fromJSON(camera, options) {
        return new this(this.unmarshall(camera, options, {
            orthographic: { factory: CameraOrthographic },
            perspective:  { factory: CameraPerspective  },
        }, 'Camera'));
    }

    /**
     * @return {this is { perspective: CameraPerspective }}
     */
    isPerspective() {
        return this.type === 'perspective';
    }

    /**
     * @return {this is { orthographic: CameraOrthographic }}
     */
    isOrthographic() {
        return this.type === 'orthographic';
    }

    getAspectRatio() {
        if(this.isPerspective()) {
            return this.perspective.aspectRatio;
        } else if(this.isOrthographic()) {
            return this.orthographic.xmag / this.orthographic.ymag;
        }
    }

    /**
     * @param {number} aspectRatio
     */
    setAspectRatio(aspectRatio) {
        if(this.isPerspective()) {
            this.perspective.aspectRatio = aspectRatio;
        } else if(this.isOrthographic()) {
            this.orthographic.xmag = this.orthographic.ymag * aspectRatio;
        }
    }

    getDetails() {
        if(this.isPerspective()) {
            return this.perspective;
        } else if(this.isOrthographic()) {
            return this.orthographic;
        }
        throw new Error('Invalid Camera');
    }

    getYFov() {
        if(this.isPerspective()) {
            return this.perspective.yfov;
        } else if(this.isOrthographic()) {
            return this.orthographic.ymag;
        }
        throw new Error('Invalid Camera');
    }
    /**
     * Gets the projection matrix for this camera
     * @param {{
     *   width?: number,
     *   height?: number,
     *   ndcZO?: boolean,
     *   override?: Partial<import('./camera-orthographic.js').cameraOrthographic | import('./camera-perspective.js').cameraPerspective>
     * }} options
     */
    getProjectionMatrix({ width = 1, height = 1, ndcZO, override = {} }) {
        const matrix = mat4.create();

        if (this.isPerspective()) {
            const { aspectRatio = width / height, yfov, znear, zfar } = { ...this.perspective, ...override };
            (ndcZO ? mat4.perspectiveZO : mat4.perspectiveNO)(matrix, yfov, aspectRatio, znear, zfar ?? Infinity);
        } else if(this.isOrthographic()) {
            const { xmag, ymag, znear, zfar } = { ...this.orthographic, ...override };
            (ndcZO ? mat4.orthoZO : mat4.orthoNO)(matrix, -xmag, xmag, -ymag, ymag, znear, zfar);
        }

        return matrix;
    }
}
