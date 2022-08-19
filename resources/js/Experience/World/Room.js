import * as THREE from "three";
import Experience from "@/Experience/Experience";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        this.setModel();
    }

    setModel() {
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((grupochild) => {
                    grupochild.castShadow = true;
                    grupochild.receiveShadow = true;
                })
            }

            if (child.name === "Screen") {
                console.log('teste');
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen
                })
            }
        });
        this.scene.add(this.actualRoom);
        // this.actualRoom.scale.set(0.11, 0.11, 0.11);
        this.actualRoom.rotation.y = Math.PI;
    }

    resize() {

    }

    update() {

    }
}