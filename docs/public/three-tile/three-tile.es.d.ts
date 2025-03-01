import { AmbientLight } from 'three';
import { author } from '../package.json';
import { BaseEvent } from 'three';
import { BufferGeometry } from 'three';
import { Camera } from 'three';
import { Color } from 'three';
import { DirectionalLight } from 'three';
import { EventDispatcher } from 'three';
import { Intersection } from 'three';
import { Loader } from 'three';
import { LoadingManager } from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls';
import { Material } from 'three';
import { Mesh } from 'three';
import { MeshStandardMaterial } from 'three';
import { MeshStandardMaterialParameters } from 'three';
import { Object3DEventMap } from 'three';
import { PerspectiveCamera } from 'three';
import { PlaneGeometry } from 'three';
import { Raycaster } from 'three';
import { Scene } from 'three';
import { ShaderMaterial } from 'three';
import { Texture } from 'three';
import { Vector2 } from 'three';
import { Vector3 } from 'three';
import { version } from '../package.json';
import { WebGLRenderer } from 'three';

/**
 * Add skirt to existing mesh
 * @param attributes - POSITION and TEXCOOD_0 attributes data
 * @param  triangles - indices array of the mesh geometry
 * @param  skirtHeight - height of the skirt geometry
 * @param  outsideIndices - edge indices from quantized mesh data
 * @returns - geometry data with added skirt
 */
export declare function addSkirt(attributes: AttributesType, triangles: Uint16Array | Uint32Array, skirtHeight: number, outsideIndices?: EdgeIndices): GeometryDataType;

/**
 * ArcGis terrain datasource
 */
declare class ArcGisDemSource extends TileSource {
    dataType: string;
    attribution: string;
    minLevel: number;
    maxLevel: number;
    url: string;
    constructor(options?: SourceOptions);
}

/**
 *  ArcGis datasource
 */
declare class ArcGisSource extends TileSource {
    dataType: string;
    attribution: string;
    style: string;
    url: string;
    constructor(options?: ArcGisSourceOptions);
}

declare type ArcGisSourceOptions = SourceOptions & {
    style?: string;
};

/**
 *@description: Define geometry data type
 *@author: 郭江峰
 *@date: 2023-04-06
 */
/**
 * Geometry Attributes type
 */
export declare type AttributesType = {
    position: {
        value: Float32Array;
        size: number;
    };
    texcoord: {
        value: Float32Array;
        size: number;
    };
    normal: {
        value: Float32Array;
        size: number;
    };
};

export { author }

/**
 * Bing datasource
 */
declare class BingSource extends TileSource {
    dataType: string;
    attribution: string;
    style: string;
    mkt: string;
    subdomains: string;
    constructor(options?: BingSourceOptions);
    getUrl(x: number, y: number, z: number): string;
}

/**
 - A：卫星图像图层（Aerial）。
 - R：道路图层（Road）。
 - H：高度图层（Height）。
 - O：鸟瞰图图层（Oblique）。
 - B：建筑物图层（Building）。
 - P：地形图层（Terrain）。
 - G：地理特征图层（Geography）。
 - T：交通图层（Traffic）。
 - L：标签图层（Label）。
 */
declare type BingSourceOptions = SourceOptions & {
    style?: string;
};

export declare function concatenateTypedArrays<T>(...typedArrays: T[]): T;

/**
 * a fake ball Material
 */
declare class EarthMaskMaterial extends ShaderMaterial {
    constructor(parameters: {
        bkColor: Color;
        airColor: Color;
    });
}

export declare type EdgeIndices = {
    westIndices: Uint16Array | Uint32Array;
    southIndices: Uint16Array | Uint32Array;
    eastIndices: Uint16Array | Uint32Array;
    northIndices: Uint16Array | Uint32Array;
};

/**
 * A Earth ball mask
 */
declare class FakeEarth extends Mesh<BufferGeometry, EarthMaskMaterial> {
    get bkColor(): Color;
    set bkColor(value: Color);
    constructor(bkColor: Color, airColor?: Color);
}

/**
 * overwriter threejs.FileLoader，add abortSignal to abort load
 */
export declare class FileLoaderEx extends Loader {
    mimeType?: string;
    responseType?: string;
    constructor(manager: LoadingManager);
    load(url: string, onLoad?: (response: any) => void, _onProgress?: (request: ProgressEvent) => void, onError?: (event: ErrorEvent | DOMException) => void, abortSignal?: AbortSignal): any;
    setResponseType(value: string): this;
    setMimeType(value: string): this;
}

/**
 * GaoDe datasource
 */
declare class GDSource extends TileSource {
    dataType: string;
    attribution: string;
    style: Style;
    subdomains: string;
    maxLevel: number;
    url: string;
    constructor(options?: GDSourceOptions);
}

declare type GDSourceOptions = SourceOptions & {
    style?: Style;
};

/**
 * Geometry Attributes and indices type
 */
export declare type GeometryDataType = {
    attributes: AttributesType;
    indices: Uint16Array | Uint32Array;
};

/**
 * Geoq datasource
 */
declare class GeoqSource extends TileSource {
    dataType: string;
    maxLevel: number;
    attribution: string;
    style: string;
    url: string;
    constructor(options?: GeoqSourceOptions);
}

declare type GeoqSourceOptions = SourceOptions & {
    style?: string;
};

/**
 * Get bounds to clip image
 * @param clipBounds bounds [minx,miny,maxx,maxy],0-1
 * @param targetSize size to scale
 * @returns startX,StarY,width,height
 */
export declare function getBoundsCoord(clipBounds: [number, number, number, number], targetSize: number): {
    sx: number;
    sy: number;
    sw: number;
    sh: number;
};

/**
 * 根据DEM数组计算瓦片gemetry的顶点、UV、法向量和三角形索引
 * @param dem - DEM
 * @param skirt - 是否加裙边
 * @returns - 顶点、UV、法向量和索引
 */
export declare function getGeometryDataFromDem(dem: Float32Array, skirt?: boolean): GeometryDataType;

/**
 * 获取网格索引数组
 *
 * @param height 高度
 * @param width 宽度
 * @returns 网格索引数组
 */
export declare function getGridIndices(height: number, width: number): Uint16Array;

/**
 * 根据顶点、索引计算法向量
 * @param vertices
 * @param indices
 * @param skirtIndex
 * @returns
 */
export declare function getNormals(vertices: Float32Array, indices: Uint16Array | Uint32Array): Float32Array;

/**
 * Get url and rect for max level tile
 * to load greater than max level from source,  had to load from max level.
 * 因为瓦片数据并未覆盖所有级别瓦片，如MapBox地形瓦片最高只到15级，如果要显示18级以上瓦片，不能从17级瓦片中获取，只能从15级瓦片里截取一部分
 * @param source
 * @param tile
 * @returns max tile url and rect in  in maxTile
 */
export declare function getSafeTileUrlAndBounds(source: ISource, x: number, y: number, z: number): {
    url: undefined;
    bounds?: undefined;
} | {
    url: string | undefined;
    bounds: [number, number, number, number];
};

/**
 * threejs scene viewer initialize class
 */
declare class GLViewer extends EventDispatcher<GLViewerEventMap> {
    readonly scene: Scene;
    readonly renderer: WebGLRenderer;
    readonly camera: PerspectiveCamera;
    readonly controls: MapControls;
    readonly ambLight: AmbientLight;
    readonly dirLight: DirectionalLight;
    readonly container: HTMLElement;
    private readonly _clock;
    private _fogFactor;
    get fogFactor(): number;
    set fogFactor(value: number);
    get width(): number;
    get height(): number;
    constructor(container: HTMLElement | string, options?: GLViewerOptions);
    private _createScene;
    private _createRenderer;
    private _createCamera;
    private _createControls;
    private _createAmbLight;
    private _createDirLight;
    resize(): this;
    private animate;
    /**
     * 飞行到某世界坐标
     * @param centerPos 目标地图中心世界坐标
     * @param cameraPos 目标摄像机世界坐标
     */
    flyTo(centerPos: Vector3, cameraPos: Vector3): void;
}

/**
 * GlViewer event map
 */
declare interface GLViewerEventMap extends Object3DEventMap {
    update: BaseEvent & {
        delta: number;
    };
}

/**
 * GlViewer options
 */
declare type GLViewerOptions = {
    centerPosition?: Vector3;
    cameraPosition?: Vector3;
    antialias?: boolean;
    stencil?: boolean;
    logarithmicDepthBuffer?: boolean;
};

/**
 * Google datasource, can not uese in CN
 */
declare class GoogleSource extends TileSource {
    dataType: string;
    attribution: string;
    maxLevel: number;
    style: Style_2;
    protected subdomains: string;
    url: string;
    constructor(options?: GoogleSourceOptions);
}

declare type GoogleSourceOptions = SourceOptions & {
    style?: Style_2;
};

/**
 *  Image load with abording
 *
 * orverwrite threejs.ImageLoader，load using fetch，added abortSignal to abort load.
 *
 * https://github.com/mrdoob/three.js/issues/10439#issuecomment-275785639
 * 因fetch下载图像有一些问题，threej在r83回滚，使用Image加载图像，Image无法中止，故重新该类添加中止下载标志。
 */
export declare class ImageLoaderEx extends Loader {
    private loader;
    constructor(manager: LoadingManager);
    /**
     * load image
     * @param url imageurl
     * @param onLoad callback when loaded and abort and error
     * @param onProgress callback when progress
     * @param onError callback when error
     * @param abortSignal signal of abort loading
     * @returns image
     */
    load(url: string, onLoad?: (image: HTMLImageElement) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent | DOMException | Event) => void, abortSignal?: AbortSignal): HTMLImageElement;
}

/**
 * Porjection interface
 */
declare interface IProjection {
    readonly ID: ProjectionType_2;
    readonly mapWidth: number;
    readonly mapHeight: number;
    readonly mapDepth: number;
    readonly lon0: number;
    project(lon: number, lat: number): {
        x: number;
        y: number;
    };
    unProject(x: number, y: number): {
        lon: number;
        lat: number;
    };
    getTileXWithCenterLon(x: number, z: number): number;
    getProjBounds(bounds: [number, number, number, number]): [number, number, number, number];
    getTileBounds(x: number, y: number, z: number): [number, number, number, number];
}

/**
 * Source interface
 * all source implements ISource get url from x/y/z coordinate to url
 */
export declare interface ISource {
    /** A string identifies the source data type, it requires the support of the loader. */
    dataType: string;
    /** Source attribution info, it allows you to display attribution*/
    attribution: string;
    /** Data max level */
    minLevel: number;
    /** Data min level */
    maxLevel: number;
    /** Data projection */
    projectionID: ProjectionType;
    /** Display opacity */
    opacity: number;
    /** is TMS scheme */
    isTMS: boolean;
    bounds: [number, number, number, number];
    /** Data bounds in Proejction, internal use */
    _projectionBounds: [number, number, number, number];
    /** Get url from xyz, internal use */
    _getTileUrl: (x: number, y: number, z: number) => string | undefined;
    /** Get the tile bounds , internal use*/
    _getTileBounds(x: number, y: number, z: number): [number, number, number, number];
    useData: {
        [key: string]: any;
    };
}

/** geometry loader interface */
export declare interface ITileGeometryLoader {
    dataType: string;
    useWorker?: boolean;
    author?: string;
    load(source: ISource, x: number, y: number, z: number, onLoad: () => void, abortSignal: AbortSignal): BufferGeometry;
}

/** Tile loader interface */
export declare interface ITileLoader {
    manager: TileLoadingManager;
    imgSource: ISource[];
    demSource: ISource | undefined;
    cacheSize: number;
    useWorker: boolean;
    load(x: number, y: number, z: number, onLoad: () => void): Tile;
}

/**  Material loader interface */
export declare interface ITileMaterialLoader {
    dataType: string;
    useWorker?: boolean;
    author?: string;
    load(source: ISource, x: number, y: number, z: number, onLoad: () => void, abortSignal: AbortSignal): Material;
}

/**
 * Factory for loader
 */
export declare const LoaderFactory: {
    manager: TileLoadingManager;
    demLoaderMap: Map<string, ITileGeometryLoader>;
    imgLoaderMap: Map<string, ITileMaterialLoader>;
    /**
     * Register material loader
     * @param loader material loader
     */
    registerMaterialLoader(loader: ITileMaterialLoader): void;
    /**
     * Register geometry loader
     * @param loader geometry loader
     */
    registerGeometryLoader(loader: ITileGeometryLoader): void;
    /**
     * Get material loader from datasource
     * @param source datasource
     * @returns material loader
     */
    getMaterialLoader(source: ISource): ITileMaterialLoader;
    /**
     * Get geometry loader from datasource
     * @param source datasouce
     * @returns geometry loader
     */
    getGeometryLoader(source: ISource): ITileGeometryLoader;
};

/**
 * ground location inifo type
 */
export declare interface LocationInfo extends Intersection {
    location: Vector3;
}

/**
 * MapBox datasource
 */
declare class MapBoxSource extends TileSource {
    protected token: string;
    protected format: string;
    protected style: string;
    attribution: string;
    maxLevel: number;
    url: string;
    constructor(options?: MapBoxSourceOptions);
}

declare type MapBoxSourceOptions = SourceOptions & {
    style?: string;
    token: string;
};

/**
 * Type of map create parameters
 * 地图创建参数
 */
export declare type MapParams = {
    loader?: ITileLoader;
    rootTile?: Tile;
    imgSource: ISource[] | ISource;
    demSource?: ISource;
    minLevel?: number;
    maxLevel?: number;
    lon0?: ProjectCenterLongitude;
};

/**
 * MapTiler data source
 */
declare class MapTilerSource extends TileSource {
    attribution: string;
    token: string;
    format: string;
    style: string;
    url: string;
    constructor(options?: MapTilerSourceOptins);
}

declare type MapTilerSourceOptins = SourceOptions & {
    style?: string;
    token: string;
    format: string;
};

declare namespace plugin {
    export {
        GLViewerEventMap,
        GLViewer,
        MapBoxSourceOptions,
        MapBoxSource,
        ArcGisSourceOptions,
        ArcGisSource,
        ArcGisDemSource,
        BingSourceOptions,
        BingSource,
        GDSourceOptions,
        GDSource,
        GeoqSourceOptions,
        GeoqSource,
        GoogleSourceOptions,
        GoogleSource,
        MapTilerSourceOptins,
        MapTilerSource,
        StadiaSource,
        TDTSourceOptins,
        TDTSource,
        TDTQMSource,
        TXSourceOptins,
        TXSource,
        ZKXTSourceOptions,
        ZKXTSource,
        ZKXTQMSource,
        EarthMaskMaterial,
        FakeEarth
    }
}
export { plugin }

/**
 * Map projection center longitude type
 * 地图投影中心经度类型
 */
declare type ProjectCenterLongitude = 0 | 90 | -90;

/**
 *@description: Interface of map source
 *@author: 郭江峰
 *@date: 2023-04-05
 */
/** Project ID */
export declare type ProjectionType = "3857" | "4326";

/**
 *@description: Map projection interface
 *@author: 郭江峰
 *@date: 2023-04-06
 */
declare type ProjectionType_2 = "3857" | "4326";

/**
 * source construtor params type
 */
export declare interface SourceOptions {
    /** A string identifies the source data type, it requires the support of the loader. */
    dataType?: string;
    /** Source attribution info, it allows you to display attribution*/
    attribution?: string;
    /** Data max level */
    minLevel?: number;
    /** Data min level */
    maxLevel?: number;
    /** Data projection */
    projectionID?: ProjectionType;
    /** Display opacity */
    opacity?: number;
    bounds?: [number, number, number, number];
    /** Data Url template */
    url?: string;
    /** Url subdomains array or string */
    subdomains?: string[] | string;
}

/**
 * 地图数据源代理，增加投影功能
 */
declare class SourceWithProjection extends TileSource {
    private _source;
    private _projection;
    get projection(): IProjection;
    set projection(value: IProjection);
    constructor(source: ISource, projection: IProjection);
    _getTileBounds(x: number, y: number, z: number): [number, number, number, number];
    /**
     * 根据给定的瓦片坐标（x, y, z）获取瓦片的URL。
     *
     * @param x 瓦片的x坐标。
     * @param y 瓦片的y坐标。
     * @param z 瓦片的层级（zoom level）。
     * @returns 返回瓦片的URL
     */
    _getTileUrl(x: number, y: number, z: number): string | undefined;
}

/**
 * Stadia data source
 */
declare class StadiaSource extends TileSource {
    dataType: string;
    attribution: string;
    url: string;
    constructor(options?: SourceOptions);
}

/**  6卫星（st），7简图（st rd），8详图（不透明rd，透明图st）*/
declare type Style = "6" | "7" | "8";

/**
 m 标准路线图 lyrs=m
 r 某种改变的路线图（路线不明显） lyrs=r
 s 影像层（卫星图） lyrs=s
 y 带标签的卫星图 lyrs=y
 h 标签层（路名、地名等） lyrs=h
 t 地形图 lyrs=t
 p 带标签的地形图 lyrs=p
 */
declare type Style_2 = "s" | "m" | "r" | "y" | "h" | "t" | "p";

declare type Style_3 = "img_w" | "cia_w" | "cva_w" | "ibo_w" | "ter_w" | "vec_w" | "cta_w" | "img_c" | "cia_c";

declare type Style_4 = "img" | "cia" | "terrain_rgb";

declare class TDTQMSource extends TileSource {
    dataType: string;
    attribution: string;
    token: string;
    subdomains: string;
    url: string;
    constructor(options?: TDTSourceOptins);
}

/**
 * TianDiTu datasource
 */
declare class TDTSource extends TileSource {
    dataType: string;
    attribution: string;
    token: string;
    style: Style_3;
    subdomains: string;
    url: string;
    constructor(options?: TDTSourceOptins);
}

declare type TDTSourceOptins = SourceOptions & {
    style?: Style_3;
    token: string;
};

/**
 * Class Tile, inherit of Mesh
 */
/**
 * Represents a tile in a 3D scene.
 * Extends the Mesh class with BufferGeometry and Material.
 */
export declare class Tile extends Mesh<BufferGeometry, Material[], TTileEventMap> {
    /**
     * Number of download threads.
     */
    static _downloadThreads: number;
    static get downloadThreads(): number;
    /** Coordinate of tile */
    readonly x: number;
    readonly y: number;
    readonly z: number;
    /** Is a tile? */
    readonly isTile = true;
    /** Tile parent */
    readonly parent: this | null;
    /** Children of tile */
    readonly children: this[];
    private _showing;
    /**
     * Gets the showing state of the tile.
     */
    get showing(): boolean;
    /**
     * Sets the showing state of the tile.
     * @param value - The new showing state.
     */
    set showing(value: boolean);
    private _ready;
    /** Max height of tile */
    private _maxZ;
    /**
     * Gets the maximum height of the tile.
     */
    get maxZ(): number;
    /**
     * Sets the maximum height of the tile.
     * @param value - The new maximum height.
     */
    protected set maxZ(value: number);
    /** Min height of tile */
    private _minZ;
    /**
     * Gets the minimum height of the tile.
     */
    get minZ(): number;
    /**
     * Sets the minimum height of the tile.
     * @param value - The new minimum height.
     */
    protected set minZ(value: number);
    /** Avg height of tile */
    private _avgZ;
    /**
     * Gets the average height of the tile.
     */
    get avgZ(): number;
    /**
     * Sets the average height of the tile.
     * @param value - The new average height.
     */
    protected set avgZ(value: number);
    /** Distance to camera */
    distToCamera: number;
    sizeInWorld: number;
    /**
     * Gets the index of the tile in its parent's children array.
     * @returns The index of the tile.
     */
    get index(): number;
    private _loaded;
    /**
     * Gets the load state of the tile.
     */
    get loaded(): boolean;
    private _inFrustum;
    /** Is tile in frustum ?*/
    get inFrustum(): boolean;
    /**
     * Sets whether the tile is in the frustum.
     * @param value - The new frustum state.
     */
    protected set inFrustum(value: boolean);
    /** Tile is a leaf ?  */
    get isLeaf(): boolean;
    /**
     * Constructor for the Tile class.
     * @param x - Tile X-coordinate, default: 0.
     * @param y - Tile Y-coordinate, default: 0.
     * @param z - Tile level, default: 0.
     */
    constructor(x?: number, y?: number, z?: number);
    /**
     * Override Object3D.traverse, change the callback param type to "this".
     * @param callback - The callback function.
     */
    traverse(callback: (object: this) => void): void;
    /**
     * Override Object3D.traverseVisible, change the callback param type to "this".
     * @param callback - The callback function.
     */
    traverseVisible(callback: (object: this) => void): void;
    /**
     * Override Object3D.raycast, only test the tile has loaded.
     * @param raycaster - The raycaster.
     * @param intersects - The array of intersections.
     */
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    /**
     * LOD (Level of Detail).
     * @param loader - The tile loader.
     * @param minLevel - The minimum level.
     * @param maxLevel - The maximum level.
     * @param threshold - The threshold.
     * @param onCreate - The callback function when a tile is created.
     * @param onLoad - The callback function when a tile is loaded.
     * @returns The current tile.
     */
    protected LOD(loader: ITileLoader, minLevel: number, maxLevel: number, threshold: number, onCreate: (tile: Tile) => void, onLoad: (tile: Tile) => void): this;
    /**
     * Updates the tile.
     * @param params - The update parameters.
     * @returns The current tile.
     */
    update(params: TileUpdateParames): this;
    /**
     * Checks if the map is ready to render.
     * @param minLevel - The minimum level.
     * @returns The current tile.
     */
    private _checkReady;
    /** Called when tile loaded  */
    private _onLoad;
    /**
     * Calculates the elevation of tiles in view.
     * @returns The current tile.
     */
    private _calcHeightInView;
    /**
     * Checks the visibility of the tile.
     */
    private _checkVisible;
    /**
     * Callback function triggered when a tile is created.
     * @param newTile - The newly created tile object.
     */
    private _onTileCreate;
    /**
     * Callback function triggered when a tile is loaded completely.
     * @param newTile - The loaded tile object.
     */
    private _onTileLoad;
    /**
     * Reloads the tile data.
     * @returns The current tile.
     */
    reload(): this;
    /**
     * Frees the tile resources.
     * @param disposeSelf - Whether to dispose the tile itself.
     * @returns The current tile.
     */
    dispose(disposeSelf: boolean): this;
}

/**
 * create geomety from rules grid dem and it has a skrit,  废弃
 */
export declare class TileDEMGeometry extends PlaneGeometry {
    private _min;
    /**
     * Build grid geometry from dem
     * @param dem 2d array of dem
     * @param tileSize tile size
     */
    protected build(dem: ArrayLike<number>, tileSize: number): this;
    /**
     * set the tile dem data
     * @param dem 2d dem array
     * @param tileSize dem size
     * @returns this
     */
    setData(dem: ArrayLike<number>): this;
    computeVertexNormals(): void;
}

/**
 * Inherit of PlaneGeometry, add setData and setDEM method
 */
export declare class TileGeometry extends BufferGeometry {
    readonly type = "TileGeometry";
    /**
     * set attribute data to geometry
     * @param geometryData geometry data
     * @returns this
     */
    setData(geometryData: GeometryDataType): this;
    /**
     * set DEM data to geometry
     *
     * @param dem Float32Array类型，表示地形高度图数据
     * @returns 返回设置地形高度图数据后的对象
     */
    setDEM(dem: Float32Array): this;
}

/**
 * Terrain loader basecalss
 */
export declare abstract class TileGeometryLoader<TBuffer = any> implements ITileGeometryLoader {
    dataType: string;
    useWorker: boolean;
    /**
     * load tile's data from source
     * @param source
     * @param tile
     * @param onLoad
     * @param onError
     * @returns
     */
    load(source: ISource, x: number, y: number, z: number, onLoad: () => void, abortSignal: AbortSignal): BufferGeometry;
    /**
     * Download terrain data
     * @param url url
     * @param onLoad callback on loaded
     * @param onError callback on error
     * @param abortSignal donwnload abort signal
     */
    protected abstract doLoad(url: string, onLoad: (buffer: TBuffer) => void, onError: (event: ErrorEvent | Event | DOMException) => void, abortSignal: AbortSignal): void;
    /**
     * Parse the buffer data to geometry data
     * @param buffer the data of download
     * @param x tile x condition
     * @param y tile y condition
     * @param z tile z condition
     * @param clipBounds the bounds of it parent
     * @param onParse callback when parsed
     */
    protected abstract doPrase(buffer: TBuffer, x: number, y: number, z: number, clipBounds: [number, number, number, number], onParse: (GeometryData: GeometryDataType | Float32Array, dem?: Uint8Array) => void): void;
}

/**
 * Tile loader
 */
export declare class TileLoader implements ITileLoader {
    /** Get loader cache size of file  */
    get cacheSize(): number;
    /** Set loader cache size of file  */
    set cacheSize(value: number);
    private _imgSource;
    /** Get image source */
    get imgSource(): ISource[];
    /** Set image source */
    set imgSource(value: ISource[]);
    private _demSource;
    /** Get DEM source */
    get demSource(): ISource | undefined;
    /** Set DEM source */
    set demSource(value: ISource | undefined);
    private _useWorker;
    /** Get use worker */
    get useWorker(): boolean;
    /** Set use worker */
    set useWorker(value: boolean);
    /** Loader manager */
    manager: TileLoadingManager;
    /**
     * Load a tile by x, y and z coordinate.
     *
     * @param x x coordinate of tile
     * @param y y coordinate of tile
     * @param z z coordinate of tile
     * @param onLoad tile loaded callback
     * @returns tile instance
     */
    load(x: number, y: number, z: number, onLoad: () => void): Tile;
    /**
     * Load Geometry and meterial
     */
    protected doLoad(tile: Tile, onLoad: () => void, abortSignal: AbortSignal): void;
    /**
     * Load geometry
     * @param tile tile to load
     * @param onLoad loaded callback
     * @param onError error callback
     * @returns geometry
     */
    protected loadGeometry(x: number, y: number, z: number, onLoad: () => void, abortSignal: AbortSignal): BufferGeometry;
    /**
     * Load material
     * @param tile tile to load
     * @param onLoad loaded callback
     * @param onError error callback
     * @returns material
     */
    protected loadMaterial(x: number, y: number, z: number, onLoad: () => void, abortSignal: AbortSignal): Material[];
    /**
     * Check the tile is in the bounds
     *
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate
     * @returns true in the bounds,else false
     */
    private _tileInBounds;
}

export declare class TileLoadingManager extends LoadingManager {
    onParseStart?: (url: string) => void;
    onParseEnd?: (url: string) => void;
    parseStart(url: string): void;
    parseEnd(url: string): void;
}

/**
 * Map Mesh
 * 地图模型
 */
export declare class TileMap extends Mesh<BufferGeometry, Material, TileMapEventMap> {
    private readonly _clock;
    readonly isLOD = true;
    /**
     * Whether the LOD object is updated automatically by the renderer per frame or not.
     * If set to false, you have to call LOD.update() in the render loop by yourself. Default is true.
     * 瓦片是否在每帧渲染时自动更新，默认为真
     */
    autoUpdate: boolean;
    /**
     * Root tile, it is the root node of tile tree.
     * 根瓦片
     */
    readonly rootTile: Tile;
    /**
     * Map data loader, it used for load tile data and create tile geometry/Material
     * 地图数据加载器
     */
    readonly loader: ITileLoader;
    private _minLevel;
    /**
     * Get min level of map
     * 地图最小缩放级别，小于这个级别瓦片树不再更新
     */
    get minLevel(): number;
    /**
     * Set max level of map
     * 设置地图最小缩放级别，小于这个级别瓦片树不再更新
     */
    set minLevel(value: number);
    private _maxLevel;
    /**
     * Get max level of map
     * 地图最大缩放级别，大于这个级别瓦片树不再更新
     */
    get maxLevel(): number;
    /**
     * Set max level of map
     * 设置地图最大缩放级别，大于这个级别瓦片树不再更新
     */
    set maxLevel(value: number);
    private _autoPosition;
    /**
     * Get whether to adjust z of map automatically.
     * 是否自动根据视野内地形高度调整地图坐标
     */
    get autoPosition(): boolean;
    /**
     * Set whether to adjust z of map automatically.
     * 设置是否自动调整地图坐标，如果设置为true，将在每帧渲染中将地图坐标调整可视区域瓦片的平均高度
     */
    set autoPosition(value: boolean);
    /**
     * Get the number of download cache files.
     * 下载缓存文件数量
     */
    get loadCacheSize(): number;
    /**
     * Set the number of  download cache files.
     * 设置瓦片下载缓存文件数量。使用该属性限制缓存瓦片数量，较大的缓存能加快数据下载速度，但会增加内存使用量，一般取<1000。
     */
    set loadCacheSize(value: number);
    /**
     * Get max height in view
     * 可视范围内瓦片的最高海拔高度
     */
    get maxZInView(): number;
    /**
     * Set min height in view
     * 取得可视范围内瓦片的最低海拔高度
     */
    get minZInView(): number;
    /**
     * Get avg hegiht in view
     * 取得可视范围内瓦片的平均海拔高度
     */
    get avgZInView(): number;
    /**
     * Get central Meridian latidute
     * 取得中央子午线经度
     */
    get lon0(): number;
    /**
     * Set central Meridian latidute, default:0
     * 设置中央子午线经度，中央子午线决定了地图的投影中心经度，可设置为-90，0，90
     */
    set lon0(value: number);
    private _projection;
    /**
     * Set the map projection object
     * 取得地图投影对象
     */
    get projection(): IProjection;
    /**
     * Get the map projection object
     * 设置地图投影对象
     */
    private set projection(value);
    private _imgSource;
    /**
     * Get the image data source object
     * 取得影像数据源
     */
    get imgSource(): SourceWithProjection[];
    /**
     * Set the image data source object
     * 设置影像数据源
     */
    set imgSource(value: ISource | ISource[]);
    private _demSource;
    /**
     * Get the terrain data source
     * 设置地形数据源
     */
    get demSource(): SourceWithProjection | undefined;
    /**
     * Set the terrain data source
     * 取得地形数据源
     */
    set demSource(value: ISource | undefined);
    private _LODThreshold;
    /**
     * Get LOD threshold
     * 取得LOD阈值
     */
    get LODThreshold(): number;
    /**
     * Set LOD threshold
     * 设置LOD阈值，LOD阈值越大，瓦片细化，但耗费资源越高，建议取1-2之间
     */
    set LODThreshold(value: number);
    /** get use worker */
    get useWorker(): boolean;
    /** set use worker */
    set useWorker(value: boolean);
    /**
     * Create a map using factory function
     * 地图创建工厂函数
     @param params 地图参数 {@link MapParams}
     @returns map mesh 地图模型
     @example
     ``` typescript
     TileMap.create({
     // 影像数据源
     imgSource: [Source.mapBoxImgSource, new TestSource()],
     // 高程数据源
     demSource: source.mapBoxDemSource,
     // 地图投影中心经度
     lon0: 90,
     // 最小缩放级别
     minLevel: 1,
     // 最大缩放级别
     maxLevel: 18,
     });
     ```
     */
    static create(params: MapParams): TileMap;
    /**
     * Map mesh constructor
     *
     * 地图模型构造函数
     * @param params 地图参数 {@link MapParams}
     * @example
     * ``` typescript

     const map = new TileMap({
     // 加载器
     loader: new TileLoader(),
     // 影像数据源
     imgSource: [Source.mapBoxImgSource, new TestSource()],
     // 高程数据源
     demSource: source.mapBoxDemSource,
     // 地图投影中心经度
     lon0: 90,
     // 最小缩放级别
     minLevel: 1,
     // 最大缩放级别
     maxLevel: 18,
     });;
     * ```
     */
    constructor(params: MapParams);
    /**
     * Update the map, It is automatically called after mesh adding a scene
     * 模型更新回调函数，地图加入场景后会在每帧更新时被调用，该函数调用根瓦片实现瓦片树更新和数据加载
     * @param camera
     */
    update(camera: Camera): void;
    /**
     * reload the map data，muse called after the source has changed
     * 重新加载地图，在改变地图数据源后调用它才能生效
     */
    reload(): void;
    /**
     * dispose map.
     * todo: remve event.
     * 释放地图资源，并移出场景
     */
    dispose(): void;
    /**
     * Geo coordinates converted to map model coordinates
     * 地理坐标转换为地图模型坐标(与geo2map同功能)
     * @param geo 地理坐标（经纬度）
     * @returns 模型坐标
     */
    geo2pos(geo: Vector3): Vector3;
    /**
     * Geo coordinates converted to map model coordinates
     * 地理坐标转换为地图模型坐标(与geo2pos同功能)
     * @param geo 地理坐标（经纬度）
     * @returns 模型坐标
     */
    geo2map(geo: Vector3): Vector3;
    /**
     * Geo coordinates converted to world coordinates
     * 地理坐标转换为世界坐标
     *
     * @param geo 地理坐标（经纬度）
     * @returns 世界坐标
     */
    geo2world(geo: Vector3): Vector3;
    /**
     * Map model coordinates converted to geo coordinates
     * 地图模型坐标转换为地理坐标(与map2geo同功能)
     * @param pos 模型坐标
     * @returns 地理坐标（经纬度）
     */
    pos2geo(pos: Vector3): Vector3;
    /**
     * Map model coordinates converted to geo coordinates
     * 地图模型坐标转换为地理坐标(与pos2geo同功能)
     * @param map 模型坐标
     * @returns 地理坐标（经纬度）
     */
    map2geo(pos: Vector3): Vector3;
    /**
     * World coordinates converted to geo coordinates
     * 世界坐标转换为地理坐标
     *
     * @param world 世界坐标
     * @returns 地理坐标（经纬度）
     */
    world2geo(world: Vector3): Vector3;
    /**
     * Get the ground infomation from latitude and longitude
     * 获取指定经纬度的地面信息（法向量、高度等）
     * @param geo 地理坐标
     * @returns 地面信息
     */
    getLocalInfoFromGeo(geo: Vector3): LocationInfo | undefined;
    /**
     * Get loacation infomation from world position
     * 获取指定世界坐标的地面信息
     * @param pos 世界坐标
     * @returns 地面信息
     */
    getLocalInfoFromWorld(pos: Vector3): LocationInfo | undefined;
    /**
     * Get loacation infomation from screen pointer
     * 获取指定屏幕坐标的地面信息
     * @param camera 摄像机
     * @param pointer 点的屏幕坐标（-0.5~0.5）
     * @returns 位置信息（经纬度、高度等）
     */
    getLocalInfoFromScreen(camera: Camera, pointer: Vector2): LocationInfo | undefined;
    /**
     * Get map source attributions information
     * 取得地图数据归属版权信息
     */
    get attributions(): string[];
    /**
     * Get map tiles statistics to debug
     * 取得瓦片统计信息，用于调试性能
     */
    get tileCount(): {
        total: number;
        visible: number;
        leaf: number;
        maxLevle: number;
        downLoading: number;
    };
    /**
     * Get the number of currently downloading tiles
     * 取得当前正在下载的瓦片数量
     */
    get downloading(): number;
}

/**
 * TileMap Event Map
 * 地图事件
 */
/**
 * Interface representing the event map for a TileMap.
 * Extends the Object3DEventMap interface.
 *
 * @interface TileMapEventMap
 *
 * @property {BaseEvent} ready - Event triggered when the TileMap is ready.
 * @property {BaseEvent & { delta: number }} update - Event triggered when the TileMap is updated, with a delta value.
 *
 * @property {BaseEvent & { tile: Tile }} "tile-created" - Event triggered when a tile is created, with the created tile.
 * @property {BaseEvent & { tile: Tile }} "tile-loaded" - Event triggered when a tile is loaded, with the loaded tile.
 *
 * @property {BaseEvent & { projection: IProjection }} "projection-changed" - Event triggered when the projection changes, with the new projection.
 * @property {BaseEvent & { source: ISource | ISource[] | undefined }} "source-changed" - Event triggered when the source changes, with the new source(s).
 *
 * @property {BaseEvent & { itemsLoaded: number; itemsTotal: number }} "loading-start" - Event triggered when loading starts, with the number of items loaded and total items.
 * @property {BaseEvent & { url: string }} "loading-error" - Event triggered when there is a loading error, with the URL of the failed resource.
 * @property {BaseEvent} "loading-complete" - Event triggered when loading is complete.
 * @property {BaseEvent & { url: string; itemsLoaded: number; itemsTotal: number }} "loading-progress" - Event triggered during loading progress, with the URL, items loaded, and total items.
 *
 * @property {BaseEvent & { url: string }} "parsing-start" - Event triggered when parsing starts, with the URL of the resource being parsed.
 * @property {BaseEvent & { url: string }} "parsing-end" - Event triggered when parsing ends, with the URL of the parsed resource.
 */
export declare interface TileMapEventMap extends Object3DEventMap {
    ready: BaseEvent;
    update: BaseEvent & {
        delta: number;
    };
    "tile-created": BaseEvent & {
        tile: Tile;
    };
    "tile-loaded": BaseEvent & {
        tile: Tile;
    };
    "projection-changed": BaseEvent & {
        projection: IProjection;
    };
    "source-changed": BaseEvent & {
        source: ISource | ISource[] | undefined;
    };
    "loading-start": BaseEvent & {
        itemsLoaded: number;
        itemsTotal: number;
    };
    "loading-error": BaseEvent & {
        url: string;
    };
    "loading-complete": BaseEvent;
    "loading-progress": BaseEvent & {
        url: string;
        itemsLoaded: number;
        itemsTotal: number;
    };
    "parsing-start": BaseEvent & {
        url: string;
    };
    "parsing-end": BaseEvent & {
        url: string;
    };
}

/**
 * Tile material
 */
export declare class TileMaterial extends MeshStandardMaterial {
    constructor(params?: MeshStandardMaterialParameters);
    setTexture(texture: Texture): void;
    dispose(): void;
}

/**
 * Geomety from DEM, it has gap between tiles，未加裙边的瓦片几何体，仅实验未使用
 */
export declare class TileSimpleGeometry extends PlaneGeometry {
    protected build(dem: ArrayLike<number>, tileSize: number): void;
    setData(dem: ArrayLike<number>, tileSize: number): this;
}

/**
 * base source class, custom source can inherit from it
 */
export declare class TileSource implements ISource {
    dataType: string;
    attribution: string;
    minLevel: number;
    maxLevel: number;
    projectionID: ProjectionType;
    url: string;
    protected subdomains: string[] | string;
    protected s: string;
    opacity: number;
    isTMS: boolean;
    bounds: [number, number, number, number];
    _projectionBounds: [number, number, number, number];
    useData: {
        [key: string]: any;
    };
    /**
     * constructor
     * @param options
     */
    constructor(options?: SourceOptions);
    /**
     * Get url from tile coordinate, protected, overwrite to custom generation tile url from xyz
     * @param x
     * @param y
     * @param z
     * @returns url
     */
    protected getUrl(x: number, y: number, z: number): string | undefined;
    /**
     * Get url from tile coordinate, public，called by TileLoader
     * @param x
     * @param y
     * @param z
     * @returns url
     */
    _getTileUrl(x: number, y: number, z: number): string | undefined;
    _getTileBounds(_x: number, _y: number, _z: number): [number, number, number, number];
    /**
     * source factory function, create source directly through factoy functions.
     * @param options
     * @returns ISource
     */
    static create(options: SourceOptions): TileSource;
}

/**
 * texture loader
 */
export declare class TileTextureLoader {
    private loader;
    /**
     * load the tile texture
     * @param tile tile to load
     * @param source datasource
     * @param onLoad callback
     * @returns texture
     */
    load(source: ISource, x: number, y: number, z: number, onLoad: () => void, onError: (err: ErrorEvent | DOMException | Event) => void, abortSignal: AbortSignal): Texture;
}

/**
 * Tile update parameters
 */
export declare type TileUpdateParames = {
    camera: Camera;
    loader: ITileLoader;
    minLevel: number;
    maxLevel: number;
    LODThreshold: number;
};

/**
 * Tile event map
 */
export declare interface TTileEventMap extends Object3DEventMap {
    dispose: BaseEvent;
    ready: BaseEvent;
    "tile-created": BaseEvent & {
        tile: Tile;
    };
    "tile-loaded": BaseEvent & {
        tile: Tile;
    };
}

/** Tencent datasource */
declare class TXSource extends TileSource {
    dataType: string;
    style: string;
    attribution: string;
    subdomains: string;
    maxLevel: number;
    isTMS: boolean;
    sx: number;
    sy: number;
    url: string;
    constructor(options?: TXSourceOptins);
    _getTileUrl(x: number, y: number, z: number): string | undefined;
}

declare type TXSourceOptins = SourceOptions & {
    style?: string;
};

export { version }

declare class ZKXTQMSource extends TileSource {
    dataType: string;
    attribution: string;
    token: string;
    subdomains: string;
    url: string;
    constructor(options?: ZKXTSourceOptions);
}

/**
 * ZhongkeXingTu datasource
 */
declare class ZKXTSource extends TileSource {
    readonly attribution = "\u4E2D\u79D1\u661F\u56FE[GS(2022)3995\u53F7]";
    token: string;
    style: Style_4;
    format: string;
    subdomains: string;
    url: string;
    constructor(options?: ZKXTSourceOptions);
}

declare type ZKXTSourceOptions = SourceOptions & {
    style?: Style_4;
    token: string;
    format?: string;
};

export { }
