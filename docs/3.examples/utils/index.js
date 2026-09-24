import * as THREE from "https://unpkg.com/three@0.183.1/build/three.module.js";
import * as plugin from "https://unpkg.com/three-tile@0.12.1/dist/plugin";

/**
 * 显示鼠标位置的经纬度和海拔高度
 * @param viewer 三维查看器
 * @param map 地图实例
 * @param id 显示信息的元素选择器（如 "#local-info"）
 */
export function showLocation(viewer, map, id) {
    viewer?.container?.addEventListener("pointermove", (evt) => {
        const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);
        if (lonlat) {
            const el = document.querySelector(id);
            if (el) {
                el.innerHTML = `经度:${lonlat.x.toFixed(6)}° 纬度:${lonlat.y.toFixed(6)}° 海拔:${lonlat.z.toFixed(1)}m`;
            }
        }
    });
}

/**
 * 显示地图瓦片加载进度
 * @param map 地图实例
 * @param id 显示进度的元素 id（默认 "loading"），也支持 "#xxx" 形式的 CSS 选择器
 */
export function showLoading(map, id = "loading") {
    const el = id?.startsWith("#") ? document.querySelector(id) : document.getElementById(id ?? "loading");
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
        map.addEventListener("loading-error", (evt) => {
            el.innerHTML = "There was an error loading " + evt?.url;
        });
    }
}

/**
 * 添加指南针控件
 * @param viewer 三维查看器
 * @param id 指南针容器元素选择器（默认 "#compass-container"）
 * @returns 指南针控件实例
 */
export function addCompass(viewer, id = "#compass-container") {
    const compass = plugin.createCompass(viewer.controls);
    const compassContainer = document.querySelector(id);
    compassContainer && compassContainer.appendChild(compass.dom);
    return compass;
}

/**
 * 添加天空盒背景
 * @param viewer 三维查看器
 * @param path 天空盒贴图目录路径（默认 "../../skybox/"）
 */
export function addSkyBox(viewer, path = "../../skybox/") {
    const skybox = new THREE.CubeTextureLoader()
        .setPath(path)
        .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
    viewer.scene.background = skybox;
}
