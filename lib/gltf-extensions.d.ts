declare namespace Revelry {

    namespace GLTF {

        namespace Extensions {

            interface accessor {}
            interface accessorSparse {}
            interface accessorSparseIndices {}
            interface accessorSparseValues {}
            interface animation {}
            interface animationChannel {}
            interface animationChannelTarget {}
            interface animationSampler {}
            interface asset {}
            interface buffer {}
            interface bufferView {}
            interface camera {}
            interface cameraOrthographic {}
            interface cameraPerspective {}
            interface glTF {}
            interface image {}
            interface material {}
            interface materialNormalTextureInfo {}
            interface materialOcclusionTextureInfo {}
            interface materialPBRMetallicRoughness {}
            interface mesh {}
            interface meshPrimitive {}
            interface meshPrimitiveTarget {}
            interface node {}
            interface sampler {}
            interface scene {}
            interface skin {}
            interface textureInfo {}
            interface texture {}

            interface Accessor {}
            interface AccessorSparse {}
            interface AccessorSparseIndices {}
            interface AccessorSparseValues {}
            interface Animation {}
            interface AnimationChannel {}
            interface AnimationChannelTarget {}
            interface AnimationSampler {}
            interface Asset {}
            interface Buffer {}
            interface BufferView {}
            interface Camera {}
            interface CameraOrthographic {}
            interface CameraPerspective {}
            interface GLTF {}
            interface Image {}
            interface Material {}
            interface MaterialNormalTextureInfo {}
            interface MaterialOcclusionTextureInfo {}
            interface MaterialPBRMetallicRoughness {}
            interface Mesh {}
            interface MeshPrimitive {}
            interface MeshPrimitiveTarget {}
            interface Node {}
            interface Sampler {}
            interface Scene {}
            interface Skin {}
            interface TextureInfo {}
            interface Texture {}

            interface ExtendableProperties {
                Accessor                     : Accessor,
                AccessorSparse               : AccessorSparse,
                AccessorSparseIndices        : AccessorSparseIndices,
                AccessorSparseValues         : AccessorSparseValues,
                Animation                    : Animation,
                AnimationChannel             : AnimationChannel,
                AnimationChannelTarget       : AnimationChannelTarget,
                AnimationSampler             : AnimationSampler,
                Asset                        : Asset,
                Buffer                       : Buffer,
                BufferView                   : BufferView,
                Camera                       : Camera,
                CameraOrthographic           : CameraOrthographic,
                CameraPerspective            : CameraPerspective,
                GLTF                         : GLTF,
                Image                        : Image,
                Material                     : Material,
                MaterialNormalTextureInfo    : MaterialNormalTextureInfo,
                MaterialOcclusionTextureInfo : MaterialOcclusionTextureInfo,
                MaterialPBRMetallicRoughness : MaterialPBRMetallicRoughness,
                Mesh                         : Mesh,
                MeshPrimitive                : MeshPrimitive,
                MeshPrimitiveTarget          : MeshPrimitiveTarget,
                Node                         : Node,
                Sampler                      : Sampler,
                Scene                        : Scene,
                Skin                         : Skin,
                TextureInfo                  : TextureInfo,
                Texture                      : Texture,
            }

            type ExtendablePropertyNames = Extract<keyof Revelry.GLTF.Extensions.ExtendableProperties, string>;

            //KHR_animation_pointer
            interface khrAnimationPointerTarget {}
            interface KHRAnimationPointerTarget {}
            interface ExtendableProperties {
                KHRAnimationPointerTarget: KHRAnimationPointerTarget
            }
            interface animationChannelTarget {
                KHR_animation_pointer?: import('./extensions/KHR_animation_pointer.js').khrAnimationPointerTarget
            }
            interface AnimationChannelTarget {
                KHR_animation_pointer?: import('./extensions/KHR_animation_pointer.js').KHRAnimationPointerTarget
            }

            //KHR_audio
            interface khrAudio {}
            interface khrAudioNode {}
            interface khrAudioScene {}
            interface khrAudioPositional {}
            interface khrAudioData {}
            interface khrAudioSource {}
            interface khrAudioEmitter {}
            interface KHRAudio {}
            interface KHRAudioNode {}
            interface KHRAudioScene {}
            interface KHRAudioPositional {}
            interface KHRAudioData {}
            interface KHRAudioSource {}
            interface KHRAudioEmitter {}
            interface ExtendableProperties {
                KHRAudio           : KHRAnimationPointerTarget,
                KHRAudioNode       : KHRAudioNode,
                KHRAudioScene      : KHRAudioScene,
                KHRAudioPositional : KHRAudioPositional,
                KHRAudioData       : KHRAudioData,
                KHRAudioSource     : KHRAudioSource,
                KHRAudioEmitter    : KHRAudioEmitter,
            }
            interface glTF {
                KHR_audio?: import('./extensions/KHR_audio.js').khrAudio
            }
            interface GLTF {
                KHR_audio?: import('./extensions/KHR_audio.js').KHRAudio
            }
            interface node {
                KHR_audio?: import('./extensions/KHR_audio.js').khrAudioNode
            }
            interface Node {
                KHR_audio?: import('./extensions/KHR_audio.js').KHRAudioNode
            }
            interface scene {
                KHR_audio?: import('./extensions/KHR_audio.js').khrAudioScene
            }
            interface Scene {
                KHR_audio?: import('./extensions/KHR_audio.js').KHRAudioScene
            }

            //KHR_draco_mesh_compression
            interface khrDracoMeshCompressionPrimitive {}
            interface KHRDracoMeshCompressionPrimitive {}
            interface ExtendableProperties {
                KHRDracoMeshCompressionPrimitive : KHRDracoMeshCompressionPrimitive,
            }
            interface meshPrimitive {
                KHR_draco_mesh_compression?: import('./extensions/KHR_draco_mesh_compression.js').khrDracoMeshCompressionPrimitive
            }
            interface MeshPrimitive {
                KHR_draco_mesh_compression?: import('./extensions/KHR_draco_mesh_compression.js').KHRDracoMeshCompressionPrimitive
            }

            //KHR_environment_map
            interface khrEnvironmentMapCubemap {}
            interface khrEnvironmentMapData {}
            interface khrEnvironmentMapGLTF {}
            interface khrEnvironmentMapScene {}
            interface KHREnvironmentMapCubemap {}
            interface KHREnvironmentMapData {}
            interface KHREnvironmentMapGLTF {}
            interface KHREnvironmentMapScene {}
            interface ExtendableProperties {
                KHREnvironmentMapCubemap : KHREnvironmentMapCubemap,
                KHREnvironmentMapData    : KHREnvironmentMapData,
                KHREnvironmentMapGLTF    : KHREnvironmentMapGLTF,
                KHREnvironmentMapScene   : KHREnvironmentMapScene,
            }
            interface glTF  {
                KHR_environment_map?: import('./extensions/KHR_environment_map.js').khrEnvironmentMapGLTF
            }
            interface GLTF  {
                KHR_environment_map?: import('./extensions/KHR_environment_map.js').KHREnvironmentMapGLTF
            }
            interface scene {
                KHR_environment_map?: import('./extensions/KHR_environment_map.js').khrEnvironmentMapScene
            }
            interface Scene {
                KHR_environment_map?: import('./extensions/KHR_environment_map.js').KHREnvironmentMapScene
            }

            //KHR_lights_punctual
            interface khrLightsPunctualSpot {}
            interface khrLightsPunctualLight {}
            interface khrLightsPunctualGLTF {}
            interface khrLightsPunctualNode {}
            interface KHRLightsPunctualSpot {}
            interface KHRLightsPunctualLight {}
            interface KHRLightsPunctualGLTF {}
            interface KHRLightsPunctualNode {}
            interface ExtendableProperties {
                KHRLightsPunctualSpot  : KHRLightsPunctualSpot,
                KHRLightsPunctualLight : KHRLightsPunctualLight,
                KHRLightsPunctualGLTF  : KHRLightsPunctualGLTF,
                KHRLightsPunctualNode  : KHRLightsPunctualNode,
            }
            interface glTF {
                KHR_lights_punctual?: import('./extensions/KHR_lights_punctual.js').khrLightsPunctualGLTF
            }
            interface GLTF {
                KHR_lights_punctual?: import('./extensions/KHR_lights_punctual.js').KHRLightsPunctualGLTF
            }
            interface node {
                KHR_lights_punctual?: import('./extensions/KHR_lights_punctual.js').khrLightsPunctualNode
            }
            interface Node {
                KHR_lights_punctual?: import('./extensions/KHR_lights_punctual.js').KHRLightsPunctualNode
            }

            //KHR_materials_clearcoat
            interface khrMaterialsClearcoatMaterial {}
            interface KHRMaterialsClearcoatMaterial {}
            interface ExtendableProperties {
                KHRMaterialsClearcoatMaterial : KHRMaterialsClearcoatMaterial,
            }

            interface material {
                KHR_materials_clearcoat?: import('./extensions/KHR_materials_clearcoat.js').khrMaterialsClearcoatMaterial
            }
            interface Material {
                KHR_materials_clearcoat?: import('./extensions/KHR_materials_clearcoat.js').KHRMaterialsClearcoatMaterial
            }

            //KHR_materials_emissive_strength
            interface khrMaterialsEmissiveStrengthMaterial {}
            interface KHRMaterialsEmissiveStrengthMaterial {}
            interface ExtendableProperties {
                KHRMaterialsEmissiveStrengthMaterial : KHRMaterialsEmissiveStrengthMaterial,
            }
            interface material {
                KHR_materials_emissive_strength?: import('./extensions/KHR_materials_emissive_strength.js').khrMaterialsEmissiveStrengthMaterial
            }
            interface Material {
                KHR_materials_emissive_strength?: import('./extensions/KHR_materials_emissive_strength.js').KHRMaterialsEmissiveStrengthMaterial
            }

            //KHR_materials_ior
            interface khrMaterialsIORMaterial {}
            interface KHRMaterialsIORMaterial {}
            interface ExtendableProperties {
                KHRMaterialsIORMaterial : KHRMaterialsIORMaterial,
            }
            interface material {
                KHR_materials_ior?: import('./extensions/KHR_materials_ior.js').khrMaterialsIORMaterial
            }
            interface Material {
                KHR_materials_ior?: import('./extensions/KHR_materials_ior.js').KHRMaterialsIORMaterial
            }

            //KHR_materials_iridescence
            interface khrMaterialsIridescenceMaterial {}
            interface KHRMaterialsIridescenceMaterial {}
            interface ExtendableProperties {
                KHRMaterialsIridescenceMaterial : KHRMaterialsIridescenceMaterial,
            }
            interface material {
                KHR_materials_iridescence?: import('./extensions/KHR_materials_iridescence.js').khrMaterialsIridescenceMaterial
            }
            interface Material {
                KHR_materials_iridescence?: import('./extensions/KHR_materials_iridescence.js').KHRMaterialsIridescenceMaterial
            }

            //KHR_materials_sheen
            interface khrMaterialsSheenMaterial {}
            interface KHRMaterialsSheenMaterial {}
            interface ExtendableProperties {
                KHRMaterialsSheenMaterial : KHRMaterialsSheenMaterial,
            }
            interface material {
                KHR_materials_sheen?: import('./extensions/KHR_materials_sheen.js').khrMaterialsSheenMaterial
            }
            interface Material {
                KHR_materials_sheen?: import('./extensions/KHR_materials_sheen.js').KHRMaterialsSheenMaterial
            }

            //KHR_materials_specular
            interface khrMaterialsSpecularMaterial {}
            interface KHRMaterialsSpecularMaterial {}
            interface ExtendableProperties {
                KHRMaterialsSpecularMaterial : KHRMaterialsSpecularMaterial,
            }
            interface material {
                KHR_materials_specular?: import('./extensions/KHR_materials_specular.js').khrMaterialsSpecularMaterial
            }
            interface Material {
                KHR_materials_specular?: import('./extensions/KHR_materials_specular.js').KHRMaterialsSpecularMaterial
            }

            //KHR_materials_transmission
            interface khrMaterialsTransmissionMaterial {}
            interface KHRMaterialsTransmissionMaterial {}
            interface ExtendableProperties {
                KHRMaterialsTransmissionMaterial : KHRMaterialsTransmissionMaterial,
            }
            interface material {
                KHR_materials_transmission?: import('./extensions/KHR_materials_transmission.js').khrMaterialsTransmissionMaterial
            }
            interface Material {
                KHR_materials_transmission?: import('./extensions/KHR_materials_transmission.js').KHRMaterialsTransmissionMaterial
            }

            //KHR_materials_unlit
            interface khrMaterialsUnlitMaterial {}
            interface KHRMaterialsUnlitMaterial {}
            interface ExtendableProperties {
                KHRMaterialsUnlitMaterial : KHRMaterialsUnlitMaterial,
            }
            interface material {
                KHR_materials_unlit?: import('./extensions/KHR_materials_unlit.js').khrMaterialsUnlitMaterial
            }
            interface Material {
                KHR_materials_unlit?: import('./extensions/KHR_materials_unlit.js').KHRMaterialsUnlitMaterial
            }

            //KHR_materials_variants
            interface khrMaterialsVariantsVariant {}
            interface khrMaterialsVariantsGLTF {}
            interface khrMaterialsVariantsMeshPrimitive {}
            interface khrMaterialsVariantsMeshPrimitiveMapping {}
            interface KHRMaterialsVariantsVariant {}
            interface KHRMaterialsVariantsGLTF {}
            interface KHRMaterialsVariantsMeshPrimitive {}
            interface KHRMaterialsVariantsMeshPrimitiveMapping {}
            interface ExtendableProperties {
                KHRMaterialsVariantsVariant              : KHRMaterialsVariantsVariant,
                KHRMaterialsVariantsGLTF                 : KHRMaterialsVariantsGLTF,
                KHRMaterialsVariantsMeshPrimitive        : KHRMaterialsVariantsMeshPrimitive,
                KHRMaterialsVariantsMeshPrimitiveMapping : KHRMaterialsVariantsMeshPrimitiveMapping,
            }
            interface glTF {
                KHR_materials_variants?: import('./extensions/KHR_materials_variants.js').khrMaterialsVariantsGLTF
            }
            interface GLTF {
                KHR_materials_variants?: import('./extensions/KHR_materials_variants.js').KHRMaterialsVariantsGLTF
            }
            interface meshPrimitive {
                KHR_materials_variants?: import('./extensions/KHR_materials_variants.js').khrMaterialsVariantsMeshPrimitive
            }
            interface MeshPrimitive {
                KHR_materials_variants?: import('./extensions/KHR_materials_variants.js').KHRMaterialsVariantsMeshPrimitive
            }

            //KHR_materials_volume
            interface khrMaterialsVolumeMaterial {}
            interface KHRMaterialsVolumeMaterial {}
            interface ExtendableProperties {
                KHRMaterialsVolumeMaterial : KHRMaterialsVolumeMaterial,
            }
            interface material {
                KHR_materials_volume?: import('./extensions/KHR_materials_volume.js').khrMaterialsVolumeMaterial
            }
            interface Material {
                KHR_materials_volume?: import('./extensions/KHR_materials_volume.js').KHRMaterialsVolumeMaterial
            }

            //KHR_texture_basisu
            interface khrTextureBasisuTexture {}
            interface KHRTextureBasisuTexture {}
            interface ExtendableProperties {
                KHRTextureBasisuTexture : KHRTextureBasisuTexture,
            }
            interface texture {
                KHR_texture_basisu?: import('./extensions/KHR_texture_basisu.js').khrTextureBasisuTexture
            }
            interface Texture {
                KHR_texture_basisu?: import('./extensions/KHR_texture_basisu.js').KHRTextureBasisuTexture
            }

            //KHR_texture_transform
            interface khrTextureTransform {}
            interface KHRTextureTransform {}
            interface ExtendableProperties {
                KHRTextureTransform : KHRTextureTransform,
            }
            interface textureInfo {
                KHR_texture_transform?: import('./extensions/KHR_texture_transform.js').khrTextureTransform
            }
            interface TextureInfo {
                KHR_texture_transform?: import('./extensions/KHR_texture_transform.js').KHRTextureTransform
            }
            interface materialNormalTextureInfo {
                KHR_texture_transform?: import('./extensions/KHR_texture_transform.js').khrTextureTransform
            }
            interface MaterialNormalTextureInfo {
                KHR_texture_transform?: import('./extensions/KHR_texture_transform.js').KHRTextureTransform
            }

            interface materialOcclusionTextureInfo {
                KHR_texture_transform?: import('./extensions/KHR_texture_transform.js').khrTextureTransform
            }
            interface MaterialOcclusionTextureInfo {
                KHR_texture_transform?: import('./extensions/KHR_texture_transform.js').KHRTextureTransform
            }

            //KHR_xmp_json_ld
            interface khrXMPJSONLDGLTF {}
            interface khrXMPJSONLDNode {}
            interface KHRXMPJSONLDGLTF {}
            interface KHRXMPJSONLDNode {}
            interface ExtendableProperties {
                KHRXMPJSONLDGLTF : KHRXMPJSONLDGLTF,
                KHRXMPJSONLDNode : KHRXMPJSONLDNode,
            }
            interface glTF {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDGLTF
            }
            interface GLTF {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDGLTF
            }
            interface animation {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDNode
            }
            interface Animation {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDNode
            }
            interface asset {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDNode
            }
            interface Asset {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDNode
            }
            interface image {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDNode
            }
            interface Image {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDNode
            }
            interface material {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDNode
            }
            interface Material {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDNode
            }
            interface mesh {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDNode
            }
            interface Mesh {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDNode
            }
            interface node {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDNode
            }
            interface Node {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDNode
            }
            interface scene {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').khrXMPJSONLDNode
            }
            interface Scene {
                KHR_xmp_json_ld?: import('./extensions/KHR_xmp_json_ld.js').KHRXMPJSONLDNode
            }

            //archived

            //KHR_materials_pbrSpecularGlossiness
            interface khrMaterialsPBRSpecularGlossinessMaterial {}
            interface KHRMaterialsPBRSpecularGlossinessMaterial {}
            interface ExtendableProperties {
                KHRMaterialsPBRSpecularGlossinessMaterial : KHRMaterialsPBRSpecularGlossinessMaterial,
            }
            interface material {
                KHR_materials_pbrSpecularGlossiness?: import('./extensions/archived/KHR_materials_pbrSpecularGlossiness.js').khrMaterialsPBRSpecularGlossinessMaterial
            }
            interface Material {
                KHR_materials_pbrSpecularGlossiness?: import('./extensions/archived/KHR_materials_pbrSpecularGlossiness.js').KHRMaterialsPBRSpecularGlossinessMaterial
            }

            //KHR_xmp
            interface khrXMPGLTF {}
            interface khrXMPNode {}
            interface KHRXMPGLTF {}
            interface KHRXMPNode {}
            interface ExtendableProperties {
                KHRXMPGLTF : KHRXMPGLTF,
                KHRXMPNode : KHRXMPNode,
            }
            interface glTF {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPGLTF
            }
            interface GLTF {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPGLTF
            }
            interface animation {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPNode
            }
            interface Animation {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPNode
            }
            interface asset {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPNode
            }
            interface Asset {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPNode
            }
            interface image {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPNode
            }
            interface Image {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPNode
            }
            interface material {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPNode
            }
            interface Material {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPNode
            }
            interface mesh {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPNode
            }
            interface Mesh {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPNode
            }
            interface node {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPNode
            }
            interface Node {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPNode
            }
            interface scene {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').khrXMPNode
            }
            interface Scene {
                KHR_xmp?: import('./extensions/archived/KHR_xmp.js').KHRXMPNode
            }

            //Non-KHR

            //EXT_texture_webp
            interface extTextureWebP {}
            interface EXTTextureWebP {}
            interface ExtendableProperties {
                EXTTextureWebP: EXTTextureWebP
            }

            interface texture {
                EXT_texture_webp?: import('./extensions/EXT_texture_webp.js').extTextureWebP
            }
            interface Texture {
                EXT_texture_webp?: import('./extensions/EXT_texture_basisu.js').EXT_texture_webp
            }

            //REV_game_object
            interface revGameObjectNode {}
            interface REVGameObjectNode {}
            interface ExtendableProperties {
                REVGameObjectNode : REVGameObjectNode,
            }
            interface node {
                REV_game_object?: import('./extensions/REV_game_object.js').revGameObjectNode
            }
            interface Node {
                REV_game_object?: import('./extensions/REV_game_object.js').REVGameObjectNode
            }

            type Supported = keyof ({ [K in keyof ExtendableProperties as keyof ExtendableProperties[K]]: boolean });
        }
    }
}
