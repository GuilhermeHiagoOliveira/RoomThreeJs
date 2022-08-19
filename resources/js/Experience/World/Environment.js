import * as THREE from "three";
import Experience from "@/Experience/Experience";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.setSunlight();
    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#fcbe03", 1);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 3;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(0.1, 3, 0.7);

        this.scene.add(this.sunLight);

        // this.helperLight = new THREE.DirectionalLightHelper(this.sunLight, 1);
        // this.scene.add(this.helperLight);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.20);
        this.scene.add(this.ambientLight);

        // this.spotLight = new THREE.SpotLight("#fcbe03", 2);
        // this.spotLight.position.set(0.1, 3, 1);
        // this.spotLight.angle = 30;
        // this.spotLight.castShadow = true;
        // this.spotLight.shadow.mapSize.width = 1024;
        // this.spotLight.shadow.mapSize.height = 1024;

        // this.spotLight.shadow.camera.near = 5;
        // this.spotLight.shadow.camera.far = 4;
        // this.spotLight.shadow.camera.fov = 1;

        // this.scene.add(this.spotLight);
    }

    resize() {

    }

    update() {

    }
}