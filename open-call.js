import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";
import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/DRACOLoader.js";
import { RGBELoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/RGBELoader.js";

let object, movementX, movementY;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 140);

const canvas = document.querySelector(".graphic");

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

canvas.appendChild(renderer.domElement);

const loader = new GLTFLoader().setDRACOLoader(
  new DRACOLoader().setDecoderPath("/draco")
);

const rgbeLoader = new RGBELoader();

const light = new THREE.SpotLight();
light.position.set(-20, 15, 120);
scene.add(light);

const texture = await rgbeLoader.loadAsync(
  "https://cdn.glitch.global/8f0c694d-e7c1-48d5-943a-7f049ffe4de3/outdoor_umbrellas_1k.hdr?v=1654882775600"
);

texture.mapping = THREE.EquirectangularReflectionMapping;

scene.background = texture;
scene.environment = texture;

scene.background = new THREE.Color("#5C0CF4");
//scene.background = new THREE.Color("black");

const openCall = await loader.loadAsync(
  "https://cdn.glitch.global/8f0c694d-e7c1-48d5-943a-7f049ffe4de3/open-call-reduced.glb?v=1655157044196"
);
const squiggle = await loader.loadAsync(
  "https://cdn.glitch.global/8f0c694d-e7c1-48d5-943a-7f049ffe4de3/open-call-squiggle-reduced.glb?v=1655157536053"
);

scene.add(openCall.scene);
scene.add(squiggle.scene);

// console.log(scene.children)
// let allLetters = [o,p,e,n,c,a,l1,l2];
// console.log(o.scene.children)

// let letters = {};

let letters = {
  o: {
    range: [-0.5, -0.25],
    rangeY: [0, 0.5],
    movementX: 0,
    movementY: 0,
  },
  p: {
    range: [-0.25, 0],
    rangeY: [0, 0.5],
    movementX: 0,
    movementY: 0,
  },
  e: {
    range: [0, 0.25],
    rangeY: [0, 0.5],
    movementX: 0,
    movementY: 0,
  },
  n: {
    range: [0.25, 0.5],
    rangeY: [0, 0.5],
    movementX: 0,
    movementY: 0,
  },
  c: {
    range: [-0.5, -0.25],
    rangeY: [-0.5, 0],
    movementX: 0,
    movementY: 0,
  },
  A: {
    range: [-0.25, 0],
    rangeY: [-0.5, 0],
    movementX: 0,
    movementY: 0,
  },
  L001: {
    range: [0, 0.25],
    rangeY: [-0.5, 0],
    movementX: 0,
    movementY: 0,
  },
  L002: {
    range: [0.25, 0.5],
    rangeY: [-0.5, 0],
    movementX: 0,
    movementY: 0,
  },
};




// g testing
// let letterArray = {};
// letterArray[0] = scene.getObjectByName("c");




renderer.domElement.addEventListener("mousemove", onPointerMove, false);
//raycasting

// const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {
  // console.log(event.movementX);
  event.preventDefault();

  pointer.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
  pointer.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

//   raycaster.firstHitOnly = true;
//   raycaster.setFromCamera(pointer, camera);

//   const intersects = raycaster.intersectObject(scene, true);

//   if (intersects.length > 0) {
//     object = intersects[0].object;
//     // console.log(object.name)
//     movementX = event.movementX;
//     movementY = event.movementY;

//     letters[object.name] = {
//       movementX: Math.min(movementX, 10),
//       movementY: Math.min(movementY, 10),
// }
//     };
   
  movementX = event.movementX;
  movementY = event.movementY;
  Object.keys(letters).forEach((letter) => {
    const letterData = letters[letter];
    if (
      pointer.x > letterData.range[0] &&
      pointer.x < letterData.range[1] &&
      pointer.y > letterData.rangeY[0] &&
      pointer.y < letterData.rangeY[1]
    ) {
      letters[letter].movementX = Math.min(movementX, 10);
      letters[letter].movementY = Math.min(movementY, 10);
    }
  });

 
}
 
window.addEventListener("resize", onWindowResize);


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

function animate() {


  
  
  // testbench for if we want lightweight alt to raycast
  // var test = scene.getObjectByName("c");
  // test.rotation.x += .01;
//   letterArray[0].rotation.x += 0.01;

//   let pos = new THREE.Vector3();
//   pos = pos.setFromMatrixPosition(letterArray[0].matrixWorld);
//   pos.project(camera);

//   let widthHalf = window.innerWidth / 2;
//   let heightHalf = window.innerHeight / 2;

//   pos.x = pos.x * widthHalf + widthHalf;
//   pos.y = -(pos.y * heightHalf) + heightHalf;
//   pos.z = 0;

//   console.log(pos);

  
  
  
  
  
  
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  //         if (object) {
  //           object.rotation.z += 0.01*Math.min(movementX, 10);
  //           movementX *= 0.99;

  //           object.rotation.y += 0.01*Math.min(movementY, 10);
  //           movementY *= 0.99;

  //           // object.rotation.z *= 0.9;
  //           // object.rotation.y *= 0.9;
  //         }

  Object.keys(letters).forEach((letterName) => {
    let currentLetter = scene.getObjectByName(letterName);
    currentLetter.rotation.z += 0.01 * letters[letterName].movementX;
    letters[letterName].movementX *= 0.99;
    currentLetter.rotation.z *= 0.9;

    currentLetter.rotation.y += 0.01 * letters[letterName].movementY;
    letters[letterName].movementY *= 0.99;
    currentLetter.rotation.y *= 0.9;
  });
}

// function dist(x1, y1, x2, y2) {
//   var a = x1 - x2;
//   var b = y1 - y2;

//   var c = Math.sqrt(a * a + b * b);

//   return c;
// }

animate();
