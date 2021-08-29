/*
To actually be able to display anything with three.js, we need three things: 
scene, camera, and renderer

*/

//////////////////////////////////
// CREATE SCENE
//////////////////////////////////
const scene = new THREE.Scene();

//////////////////////////////////
// CREATE CAMERA (perspective camera)

/***

Camera position by default will put the camera and object inside of each other; will basically put the coordinates inside of each other. Must modify camera position.

***/
//////////////////////////////////
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

/*

@param 1 : fov — Camera frustum vertical field of view.
@param 2 : aspect — Camera frustum aspect ratio.
@param 3 : Camera frustum near plane.
@param 4 : far — Camera frustum far plane.

Together these params define the camera's viewing frustum.
https://en.wikipedia.org/wiki/Viewing_frustum

*/

//////////////////////////////////
// CREATE RENDERER webGL

/*

fn renderer
antialias make edges more sharp

*/
//////////////////////////////////
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

// append renderer has an element aka property
document.body.appendChild(renderer.domElement);



//////////////////////////////////
// CREATE CUBOID
//////////////////////////////////
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

// TEXTURES
// const texture = new THREE.textureLoader().load('dist/assets/textures/crate.gif');
// const material = new THREE.MeshBasicMaterial( {map: texture} );


const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;


//////////////////////////////////
// ANIMATE 

/***

Create a loop that makes the renderer draw the scene every time the screen is refreshed
A typical monitor refreshes 60 times per second

***/
//////////////////////////////////
function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;

	renderer.render(scene, camera);
}


function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	// set size of the renderer to the entire width and height
	renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();