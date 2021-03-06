import { GLTFProperty, NamedGLTFProperty } from './gltf-property.js';

import { Accessor    } from './accessor.js';
import { Animation   } from './animation.js';
import { Asset       } from './asset.js';
import { Buffer      } from './buffer.js';
import { BufferView  } from './buffer-view.js';
import { Camera      } from './camera.js';
import { Image       } from './image.js';
import { Material    } from './material.js';
import { Mesh        } from './mesh.js';
import { Node        } from './node.js';
import { Primitive   } from './primitive.js';
import { Sampler     } from './sampler.js';
import { Scene       } from './scene.js';
import { Skin        } from './skin.js';
import { Texture     } from './texture.js';
import { TextureInfo } from './texture-info.js';

import { extensions } from './extensions.js';

import './extensions/KHR_animation_pointer.js';
import './extensions/KHR_draco_mesh_compression.js';
import './extensions/KHR_lights_environment.js';
import './extensions/KHR_lights_punctual.js';
import './extensions/KHR_materials_clearcoat.js';
import './extensions/KHR_materials_emissive_strength.js';
import './extensions/KHR_materials_ior.js';
import './extensions/KHR_materials_sheen.js';
import './extensions/KHR_materials_specular.js';
import './extensions/KHR_materials_transmission.js';
import './extensions/KHR_materials_unlit.js';
import './extensions/KHR_materials_variants.js';
import './extensions/KHR_materials_volume.js';
import './extensions/KHR_mesh_quantization.js';
import './extensions/KHR_texture_basisu.js';
import './extensions/KHR_texture_transform.js';

import './extensions/KHR_xmp_json_ld.js';

import './extensions/archived/KHR_materials_pbrSpecularGlossiness.js';
import './extensions/archived/KHR_xmp.js';

const SUPPORTED_VERSION = { major: 2, minor: 0 };
const MAGIC_NUMBER_BINARY_FORMAT = 0x46546C67;

function ensureSupport({ asset: { version, minVersion } = {}, extensionsRequired = [] } = {}) {
    const [major, minor] = (minVersion || version).split('.').map(v => Number(v));
    
    if ((major !== SUPPORTED_VERSION.major) || (minVersion && (minor > SUPPORTED_VERSION.minor))) {
        throw new Error(`Unsupported glTF version ${minVersion || version}`);
    }
    
    for(const ext of extensionsRequired) {
        if(!extensions.has(ext)) {
            throw new Error(`Unsupported glTF extension ${ext}`);
        }
    }
}

/**
 * The root object for a glTF asset.
 * @typedef {glTFProperty} glTF
 * @property {String[]} [extensionsUsed] - Names of glTF extensions used somewhere in this asset.
 * @property {String[]} [extensionsRequired] - Names of glTF extensions required to properly load this asset.
 * @property {accessor[]} [accessors] - An array of accessors.
 * @property {animation[]} [animations] - An array of keyframe animations.
 * @property {asset} asset - Metadata about the glTF asset.
 * @property {buffer[]} [buffers] - An array of buffers.
 * @property {bufferView[]} [bufferViews] - An array of bufferViews.
 * @property {camera[]} [cameras] - An array of cameras.
 * @property {image[]} [images] - An array of images.
 * @property {material[]} [materials] - An array of materials.
 * @property {mesh[]} [meshes] - An array of meshes.
 * @property {node[]} [nodes] - An array of nodes.
 * @property {sampler[]} [samplers] - An array of samplers.
 * @property {Number} [scene] - The index of the default scene.
 * @property {scene[]} [scenes] - An array of scenes.
 * @property {skin[]} [skins] - An array of skins.
 * @property {texture[]} [textures] - An array of textures.
 *
 * @see https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#gltf
 * @todo Automate generation of typedefs from spec
 */

/**
 * A class wrapper for a root glTF object. All index references are dereferenced during construction.
 */
export class GLTF extends GLTFProperty {
    /**
     * Creats an instance of GLTF
     * @param {glTF} [glTF={ asset: { version: '2.0', generator: 'Revelry Runtime Generation' } }] - The glTF root Object
     * @param {String|URL} [uri=window.location.href] - The URI of the glTF object. Relative URIs will be based on this.
     */
    constructor(glTF = { asset: { version: '2.0', generator: 'Revelry Runtime Generation' } }, uri = window.location.href) {
        ensureSupport(glTF);
        
        super(glTF);
        
        const {
            extensionsUsed = [], extensionsRequired = [], accessors = [], animations = [],
            asset, buffers = [], bufferViews = [], cameras = [], images = [], materials = [], meshes = [],
            nodes = [], samplers = [], scene, scenes = [], skins = [], textures = [],
        } = glTF;
        
        /**
         * Metadata about the glTF asset.
         * @type {Asset}
         */
        this.asset = new Asset(asset);
        
        /**
         * Names of glTF extensions used somewhere in this asset.
         * @type {String[]}
         */
        this.extensionsUsed = extensionsUsed;
        
        /**
         * Names of glTF extensions required to properly load this asset.
         * @type {String[]}
         */
        this.extensionsRequired = extensionsRequired;
        
        /**
         * An array of Buffers.
         * @type {Buffer[]}
         */
        this.buffers = buffers.map(bufferObj => new Buffer(bufferObj));
        
        /**
         * An array of BufferViews.
         * @type {BufferView[]}
         */
        this.bufferViews = bufferViews.map(bufferViewObj => new BufferView(bufferViewObj));
        
        /**
         * An array of Accessors.
         * @type {Accessor[]}
         */
        this.accessors = accessors.map(accessorObj => new Accessor(accessorObj));
        
        /**
         * An array of Images.
         * @type {Image[]}
         */
        this.images = images.map(imageObj => new Image(imageObj));
        
        /**
         * An array of Samplers.
         * @type {Sampler[]}
         */
        this.samplers = samplers.map(samplerObj => new Sampler(samplerObj));
        
        /**
         * An array of Textures.
         * @type {Texture[]}
         */
        this.textures = textures.map(textureObj => new Texture(textureObj));
        
        /**
         * An array of Materials.
         * @type {Material[]}
         */
        this.materials = materials.map(materialObj => new Material(materialObj));
        
        /**
         * An array of skins.
         * @type {Skin[]}
         */
        this.skins = skins.map(skinObj => new Skin(skinObj));
        
        /**
         * An array of Cameras.
         * @type {Camera[]}
         */
        this.cameras = cameras.map(cameraObj => new Camera(cameraObj));
        
        /**
         * An array of meshes.
         * @type {Mesh[]}
         */
        this.meshes = meshes.map(meshObj => new Mesh(meshObj));
        
        /**
         * An array of nodes.
         * @type {Node[]}
         */
        this.nodes = nodes.map(nodeObj => new Node(nodeObj));
        
        /**
         * An array of scenes.
         * @type {Scene[]}
         */
        this.scenes = scenes.map(sceneObj => new Scene(sceneObj));
        
        /**
         * The default scene.
         * @type {Scene}
         */
        this.scene = this.scenes[scene];
        
        /**
         * An array of keyframe Animations.
         * @type {Animation[]}
         */
        this.animations = animations.map(animationObj => new Animation(animationObj));
        
        Object.defineProperty(this, '$uri', { value: uri });
        this.dereference(this);
    }
    
    static referenceFields = [
        { name: 'asset',       type: 'sub' },
        { name: 'buffers',     type: 'sub' },
        { name: 'bufferViews', type: 'sub' },
        { name: 'accessors',   type: 'sub' },
        { name: 'images',      type: 'sub' },
        { name: 'textures',    type: 'sub' },
        { name: 'materials',   type: 'sub' },
        { name: 'skins',       type: 'sub' },
        { name: 'meshes',      type: 'sub' },
        { name: 'nodes',       type: 'sub' },
        { name: 'scenes',      type: 'sub' },
        { name: 'animations',  type: 'sub' },
        { name: 'scene',       type: 'collection', collection: 'scenes' },
    ];
    
    /**
     * Fetches a glTF file from a URI, then fetches all binary data, and returns a new GLTF instance.
     * @param {string|URL} uri - The URI of the glTF file to be loaded.
     * @see https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#glb-file-format-specification
     */
    static async load(uri, abortCtl) {
        const response = await fetch(uri, abortCtl);
        const buffer = await response.clone().arrayBuffer();
        const header = new Uint32Array(buffer, 0, 4);
        
        let gltf;
        if (header[0] === MAGIC_NUMBER_BINARY_FORMAT) {
            const jsonLength = header[3];
            const decoder = new TextDecoder();
            const json = JSON.parse(decoder.decode(new DataView(buffer, 5 * 4, jsonLength)));
            
            gltf = new this(json, uri);
            //Copy into array buffer
            new Uint8Array(gltf.buffers[0].getArrayBuffer()).set(new Uint8Array(buffer, 7 * 4 + jsonLength, gltf.buffers[0].byteLength));
        } else {
            gltf = new this(await response.json(), uri);
        }
        
        return gltf.load(abortCtl);
    }
    
    /**
     * Fetches all binary data into memory.
     */
    async load(abortCtl) {
        await Promise.all([...extensions.values()].map(ext => ext.load?.(abortCtl)));
        
        const collections = [
            'buffers', 'bufferViews', 'accessors', 'images', 'textures',
            'materials', 'skins', 'meshes', 'nodes', 'scenes', 'animations',
        ];
        
        await Promise.all(collections.map(collection => Promise.all(this[collection].map(item => {
            return item.loadOnce(abortCtl);
        }))));
        
        await super.load(abortCtl);
        return this;
    }
}

export { Accessor    };
export { Animation   };
export { Asset       };
export { Buffer      };
export { BufferView  };
export { Camera      };
export { Image       };
export { Material    };
export { Mesh        };
export { Node        };
export { Primitive   };
export { Sampler     };
export { Scene       };
export { Skin        };
export { Texture     };
export { TextureInfo };

export { extensions, GLTFProperty, NamedGLTFProperty };

export default GLTF;
