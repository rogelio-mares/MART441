//vars
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2, cube3, cube4;
var model;

//createbox #1

function createBox() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x95ca0
  });
  cube = new THREE.Mesh(geometry, material);
  cube.position.set(-50, 50, 0);
  scene.add(cube);
  cube.scale.x = 25;
  cube.scale.y = 25;
  cube.scale.z = 25;
  animate();
}
//animate box #1
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.05;
  renderer.render(scene, camera);
}
//create box #2
function createBox3() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x9999ee
  });
  cube3 = new THREE.Mesh(geometry, material);
  cube3.position.set(5, 5, 0);
  cube.add(cube3);
  cube3.scale.x = 3;
  cube3.scale.y = 3;
  cube3.scale.z = 3;
  animate3();
}
//animate box #2
function animate3() {
  requestAnimationFrame(animate3);
  cube3.rotation.x += 0.05;
  cube3.rotation.y += 0.05;
}

//create box #3
function createBox4() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x95ca0
  });
  cube4 = new THREE.Mesh(geometry, material);
  cube4.position.set(3, 3, 0);
  cube.add(cube4);
  cube4.scale.x = .8;
  cube4.scale.y = .8;
  cube4.scale.z = .8;
  animate4();
}
//animate box #3
function animate4() {
  requestAnimationFrame(animate4);
  cube4.rotation.x += 0.05;
  cube4.rotation.y += 0.05;
}

//essential functions
function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  return scene;
}

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 90, -10);
  return camera;
}

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}

function getRenderer() {
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}

//create 3d model
function loadModel() {
  var loader = new THREE.OBJLoader();
  var model = loader.load('models/model.obj', function (object) {
    scene.add(object);
     createBox3();
  });
}

//finishing functions
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();

loadModel()
render();
