import * as THREE from "https://unpkg.com/three@0.171.0/build/three.module.js";
import * as plugin from "https://unpkg.com/three-tile@0.11.10/dist/plugin";

// 显示鼠标位置经纬度和海拔
export function showLocation(viewer, map, id) {
    const pointer = new THREE.Vector2();
    viewer.container.addEventListener("pointermove", (evt) => {
        const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);
        if (lonlat) {
            const el = document.querySelector(id);
            el.innerHTML = `经度:${lonlat.x.toFixed(6)}° 纬度:${lonlat.y.toFixed(6)}° 海拔:${lonlat.z.toFixed(1)}m`;
        }
    });
}

// 显示地图加载进度
export function showLoading(map, id = "#loading") {
    const el = document.querySelector(id);
    if (el) {
        map.addEventListener("loading-start", (evt) => {
            el.innerHTML = "Started: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";
        });
        map.addEventListener("loading-progress", (evt) => {
            el.innerHTML = "Loading: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";
        });
        map.addEventListener("loading-complete", () => {
            el.innerHTML = "Loading complete!";
        });
        map.addEventListener("loading-error", (url) => {
            el.innerHTML = "There was an error loading " + url;
        });
    }
}

// 添加指南针控件
export function addCompass(viewer, id = "#compass-container") {
    const compass = plugin.createCompass(viewer.controls);
    const compassContainer = document.querySelector(id);
    compassContainer && compassContainer.appendChild(compass.dom);
    return compass;
}

export function addSkyBox(viewer, path = "../../skybox/") {
    const skybox = new THREE.CubeTextureLoader()
        .setPath(path)
        .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
    viewer.scene.background = skybox;
}
