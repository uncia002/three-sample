const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.SphereGeometry(2, 8, 6);
const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 30;

for(let i=0; i<geometry.faces.length; i++){
  geometry.faces[i].color.set(Math.random() * 0xCC0000);
}


renderer.render(scene, camera);

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();
