import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//Canvas
const canvas = document.querySelector('canvas.webgl')
//Scene
const scene = new THREE.Scene()


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
  width: window.innerWidth,
  height: window.innerHeight
}
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
window.addEventListener('dblclick', () =>
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullscreenElement)
    {
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    }
    else
    {
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.lookAt(new THREE.Vector3(0, - 1, 0))
scene.add(camera)


//Cursor
const cursor = {
  x: 0,
  y: 0
}
window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width -0.5
    cursor.y = - (event.clientY / sizes.height -0.5)
  })

  const tick = () =>
  {
      // ...

      // Update camera
      camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
      camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
      camera.position.y = cursor.y * 3
      camera.lookAt(group.position)



      // ...
  }
  tick()
//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


/**
 * Animate
 */

// //const clock = new THREE.Clock()
// gsap.to(group.position, { duration: 4, delay: 0, x: 1 })
// const tick = () =>
// {
//     //const elapsedTime = clock.getElapsedTime()
//     // Update objects
//     //group.rotation.y = Math.sin(elapsedTime)
//     //group.rotation.x = Math.cos(elapsedTime)
//     //camera.lookAt(group.position)

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()


// Controls
