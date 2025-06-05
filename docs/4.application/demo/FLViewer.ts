/**
 *@description: Threejs 3D scene initalize
 *@author: 郭江峰
 *@date: 2023-04-05
 */

import {
    AmbientLight,
    BaseEvent,
    Clock,
    Color,
    DirectionalLight,
    EventDispatcher,
    FogExp2,
    Object3DEventMap,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { update as teweenUpdate } from "three/examples/jsm/libs/tween.module.js";

/**
 * GlViewer event map
 */
export interface FLViewerEventMap extends Object3DEventMap {
    update: BaseEvent & { delta: number };
    resize: BaseEvent & { size: { width: number; height: number } };
}

/**
 * GlViewer options
 */
export type FLViewerOptions = {
    /** Whether to use antialiasing. Default is false. */
    antialias?: boolean;
    /** Whether to use stencil buffer. Default is true. */
    stencil?: boolean;
    /** Whether to use logarithmic depth buffer. Default is true. */
    logarithmicDepthBuffer?: boolean;
};

/**
 * Threejs scene initialize class
 */
export class FLViewer extends EventDispatcher<FLViewerEventMap> {
    public readonly scene: Scene;
    public readonly renderer: WebGLRenderer;

    public readonly camera: PerspectiveCamera;
    public readonly controls: FlyControls;
    public readonly ambLight: AmbientLight;
    public readonly dirLight: DirectionalLight;
    public container?: HTMLElement;
    public topScenes: Scene[] = [];
    private readonly _clock: Clock = new Clock();

    /** Container width */
    public get width() {
        return this.container?.clientWidth || 0;
    }

    /** Container height */
    public get height() {
        return this.container?.clientHeight || 0;
    }

    public get autoForward() {
        return this.controls.autoForward;
    }
    public set autoForward(value) {
        this.controls.autoForward = value;
    }

    /**
     * Constructor
     * @param container container element or selector string
     * @param options GLViewer options
     */
    constructor(container?: HTMLElement | string, options: FLViewerOptions = {}) {
        super();

        const { antialias = false, stencil = true, logarithmicDepthBuffer = true } = options;
        this.renderer = this._createRenderer(antialias, stencil, logarithmicDepthBuffer);
        this.scene = this._createScene();
        this.camera = this._createCamera();
        if (container) {
            this.addTo(container);
        }
        this.controls = this._createControls();
        this.ambLight = this._createAmbLight();
        this.scene.add(this.ambLight);
        this.dirLight = this._createDirLight();
        this.scene.add(this.dirLight);
        this.scene.add(this.dirLight.target);

        this.renderer.setAnimationLoop(this.animate.bind(this));
    }

    /**
     * Add the renderer to a container
     * @param container container element or selector string
     * @returns this
     */
    public addTo(container: HTMLElement | string) {
        const el = typeof container === "string" ? document.querySelector(container) : container;
        if (el instanceof HTMLElement) {
            this.container = el;
            el.appendChild(this.renderer.domElement);
            new ResizeObserver(this.resize.bind(this)).observe(el);
        } else {
            throw `${container} not found!}`;
        }
        return this;
    }

    /**
     * Create scene
     * @returns scene
     */
    private _createScene() {
        const scene = new Scene();
        const backColor = 0xdbf0ff;
        scene.background = new Color(backColor);
        scene.fog = new FogExp2(backColor, 0.000005);
        return scene;
    }

    /**
     * Create WebGL renderer
     * @param antialias
     * @param stencil
     * @param logarithmicDepthBuffer
     * @returns renderer
     */
    private _createRenderer(antialias: boolean, stencil: boolean, logarithmicDepthBuffer: boolean) {
        const renderer = new WebGLRenderer({
            antialias,
            logarithmicDepthBuffer,
            stencil,
            alpha: true,
            precision: "highp",
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.domElement.tabIndex = 0;
        return renderer;
    }

    /**
     * Create camera
     * @returns camera
     */
    private _createCamera() {
        const camera = new PerspectiveCamera(70, 1, 100, 5e7);
        camera.position.set(0, 2.8e7, 0);
        return camera;
    }

    /**
     * Create map controls
     * @returns MapControls
     */
    private _createControls() {
        const controls = new FlyControls(this.camera, this.renderer.domElement);
        controls.autoForward = false;
        controls.movementSpeed = 2000;
        controls.rollSpeed = 0.05;
        return controls;
    }

    /**
     * Create ambient light
     * @returns AmbientLight
     */
    private _createAmbLight() {
        const ambLight = new AmbientLight(0xffffff, 1);
        return ambLight;
    }

    /**
     * Create directional light
     * @returns DirectionalLight
     */
    private _createDirLight() {
        const dirLight = new DirectionalLight(0xffffff, 1);
        dirLight.position.set(0, 2e3, 1e3);
        dirLight.target.position.set(0, 0, 0);
        return dirLight;
    }

    /**
     * Container resize
     * @returns this
     */
    public resize() {
        const width = this.width;
        const height = this.height;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        // 防止resize过程中黑屏
        this.update();
        this.dispatchEvent({ type: "resize", size: { width, height } });
        return this;
    }

    protected update() {
        this.renderer.autoClear = false;
        this.renderer.render(this.scene, this.camera);
        this.topScenes.forEach((scene) => {
            this.renderer.clearDepth();
            this.renderer.render(scene, this.camera);
        });
        this.renderer.autoClear = true;
    }

    /**
     * Threejs animation loop
     */
    public animate() {
        this.update();
        const delta = this._clock.getDelta();
        this.controls.update(delta);
        this.dispatchEvent({ type: "update", delta });
        teweenUpdate();
    }
}
