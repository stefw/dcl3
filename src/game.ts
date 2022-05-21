
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("3bd7d322-f897-444e-99f1-e4e82fb2c035/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)




/// --- Set up a system ---
// class RotatorSystem {
//   // this group will contain every entity that has a Transform component
//   group = engine.getComponentGroup(Transform)

//   update(dt: number) {
//     // iterate over the entities of the group
//     for (const entity of this.group.entities) {
//       // get the Transform component of the entity
//       const transform = entity.getComponent(Transform)

//       // mutate the rotation
//       transform.rotate(Vector3.Up(), dt * 10)
//     }
//   }
// }

// // Add a new instance of the system to the engine
// engine.addSystem(new RotatorSystem())

///// MM
let soleil = new Entity()
soleil.addComponent(new GLTFShape("models/mm.glb"))
soleil.addComponent(
  new Transform({
    position: new Vector3(50, 8, 100),
   scale: new Vector3(10, 10, 10),
  })
)
engine.addEntity(soleil)

///// CHAMPI
let champi = new Entity()
champi.addComponent(new GLTFShape("models/Soleil.glb"))
champi.addComponent(
  new Transform({
    position: new Vector3(22, 0, 80),
    scale: new Vector3(3, 3, 3),
  })
)
engine.addEntity(champi)


///// VIDEO

// #1
const myVideoClip = new VideoClip(
  'https://player.vimeo.com/external/416426793.m3u8?s=3899572e6b17c4e2c87cbe623238f3ab36c2ba99'
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0


// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(32, 4, 16),
    scale: new Vector3(64, 60, 36),
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)

engine.addEntity(screen)

// #5
myVideoTexture.play()
myVideoTexture.loop = true




// SOUNDS
// Create entity
const cube = new Entity()
// // Create AudioClip object, holding audio file
const clip = new AudioClip("sounds/unlo.mp3")
// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)
// Add AudioSource component to entity
cube.addComponent(source)
cube.addComponent(
  new Transform({
    position: new Vector3(130, 3, 10),
  })
)
// Play sound
source.playing = true
source.loop = true
source.playing = true
engine.addEntity(cube)

