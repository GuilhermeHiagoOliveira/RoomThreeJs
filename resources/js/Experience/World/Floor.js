import * as THREE from "three";
import Experience from "@/Experience/Experience";
import GSAP from "gsap";

export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;

    }

    setModel() {
    }


    resize() {

    }

    update() {
    }
}