import * as THREE from "three";
import Experience from "@/Experience/Experience";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000);
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.x = 1.14;
        this.perspectiveCamera.position.y = 5.57;
        this.perspectiveCamera.position.z = -15;
        // this.helper2 = new THREE.CameraHelper(this.perspectiveCamera);
        // this.scene.add(this.helper2);
        // this.perspectiveCamera.position.x = 0;
        // this.perspectiveCamera.position.y = 2;
        // this.perspectiveCamera.position.z = -7;
    }

    createOrthographicCamera() {

        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 0.8,
            (this.sizes.aspect * this.sizes.frustrum) / 0.8,
            this.sizes.frustrum / 0.8,
            -this.sizes.frustrum / 0.8,
            -50,
            50
        );
        
        this.orthographicCamera.position.x = 0;
        this.orthographicCamera.position.y = 0.1;
        this.orthographicCamera.position.z = -12;
        this.orthographicCamera.rotation.x = Math.PI / 1;

        this.scene.add(this.orthographicCamera);

        // this.helper = new THREE.CameraHelper(this.orthographicCamera);
        // this.scene.add(this.helper);

        // const size = 20;
        // const divisions = 20;

        // const gridHelper = new THREE.GridHelper(size, divisions);
        // this.scene.add(gridHelper);

        // const axesHelper = new THREE.AxesHelper(10);
        // this.scene.add(axesHelper);
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.orthographicCamera, this.canvas);
        this.controls.enableDamping = false;
        this.controls.enableZoom = false;
    }

    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // Updating Orthographic Camera on Resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 0.8;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 0.8;
        this.orthographicCamera.top = this.sizes.frustrum / 0.8;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 0.8;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update() {
        this.controls.update();
        // console.log(this.orthographicCamera.position)
        // this.helper.matrixWorldNeedsUpdate = true;
        // this.helper.update();
        // this.helper.position.copy(this.orthographicCamera.position);
        // this.helper.rotation.copy(this.orthographicCamera.rotation);
    }
}