import * as THREE from 'three'

//Scene
const scene = new THREE.Scene()

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


// Making a group

const group = new THREE.Group()
scene.add(group)

//Red Cube
const redCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
redCube.position.set(0.3,-0.8,1) //position
redCube.scale.set(2,0.25,0.5) //scale
redCube.rotation.x = Math.PI * 0.25
redCube.rotation.z = Math.PI * 0.75
group.add(redCube)

//Blue Cube
const blueCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x000FF})
)
blueCube.position.set(0.8,-0.8,1) //position
blueCube.scale.set(2,0.25,0.5) //scale
blueCube.rotation.x = Math.PI * 0.25
blueCube.rotation.z = Math.PI * 0.75
group.add(blueCube)

//goldCube
const goldCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffd700})
)
goldCube.position.set(-0.8,-0.8,1) //position
goldCube.rotation.x = Math.PI * 0.25
goldCube.rotation.z = Math.PI * 0.75
group.add(goldCube)


//Sizes
const sizes = {
  width: 800,
  height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
camera.lookAt(new THREE.Vector3(0, - 1, 0))

//Canvas
const canvas = document.querySelector('canvas.webgl')

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/**
 * Animate
 */
const tick = () =>
{
    // Update objects
    mesh.rotation.y += 0.01

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
