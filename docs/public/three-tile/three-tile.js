import { Vector3 as H, InstancedBufferGeometry as Dg, Matrix4 as og, Box3 as sg, Frustum as tg, Mesh as tI, MeshStandardMaterial as ag, FrontSide as eg, PlaneGeometry as dA, MathUtils as rA, BufferAttribute as AA, Float16BufferAttribute as hg, BufferGeometry as Rg, Loader as uI, LoadingManager as Ng, Vector2 as V, Box2 as yg, Texture as xI, SRGBColorSpace as fI, Raycaster as pI, Clock as mI, CanvasTexture as OI, MeshBasicMaterial as iI, MeshNormalMaterial as wg, Color as aI, ImageLoader as rg, MeshLambertMaterial as cg, Ray as ng, Plane as Fg, EventDispatcher as WI, MOUSE as sA, TOUCH as hA, Quaternion as rI, Spherical as cI, Scene as Gg, FogExp2 as nI, WebGLRenderer as Sg, PerspectiveCamera as Mg, AmbientLight as Lg, DirectionalLight as dg, ShaderMaterial as kg, UniformsUtils as Ug, UniformsLib as Jg } from "three";
const Kg = "0.8.5", FI = {
  name: "GuoJF",
  email: "hz_gjf@163.com"
};
var DI = /* @__PURE__ */ ((Q) => (Q[Q.none = 0] = "none", Q[Q.create = 1] = "create", Q[Q.remove = 2] = "remove", Q))(DI || {});
const GI = 1.02;
function Yg(Q, A) {
  const g = Q.position.clone().setZ(Q.avgZ).applyMatrix4(Q.matrixWorld);
  return A.distanceTo(g);
}
function lg(Q) {
  const A = Q.scale, g = new H(-A.x, -A.y, 0).applyMatrix4(Q.matrixWorld), I = new H(A.x, A.y, 0).applyMatrix4(Q.matrixWorld);
  return g.sub(I).length();
}
function SI(Q) {
  return Q.distToCamera / Q.sizeInWorld * 0.8;
}
function qg(Q, A, g, I) {
  if (Q.z > A && Q.index === 0 && Q.parent?.isTile) {
    const E = SI(Q.parent);
    if (Q.z > g || E > I * GI || !Q.parent.inFrustum)
      return 2;
  }
  if (Q.z < g && Q.isLeaf && Q.inFrustum) {
    const E = SI(Q);
    if (Q.z < A || E < I / GI)
      return 1;
  }
  return 0;
}
function Hg(Q, A, g, I, E, C) {
  const B = (R, N, y, c) => {
    const F = y < c ? new kA(R, N, y) : Q.load(R, N, y, () => C(F));
    return F;
  }, i = [], o = I + 1, t = A * 2, s = 0, a = 0.25, w = Q.imgSource[0].projectionID === "4326";
  if (I === 0 && w) {
    const R = g, N = new H(0.5, 1, 1), y = B(t, R, o, E), c = B(t, R, o, E);
    y.position.set(-a, 0, s), y.scale.copy(N), c.position.set(a, 0, s), c.scale.copy(N), i.push(y, c);
  } else {
    const R = g * 2, N = new H(0.5, 0.5, 1), y = B(t, R, o, E), c = B(t + 1, R, o, E), F = B(t, R + 1, o, E), n = B(t + 1, R + 1, o, E);
    y.position.set(-a, a, s), y.scale.copy(N), c.position.set(a, a, s), c.scale.copy(N), F.position.set(-a, -a, s), F.scale.copy(N), n.position.set(a, -a, s), n.scale.copy(N), i.push(y, c, F, n);
  }
  return i;
}
const ug = new Dg(), xg = new H(), fg = new og(), pg = new sg(new H(-0.5, -0.5, 0), new H(0.5, 0.5, 9)), MI = new tg();
let kA = class SA extends tI {
  /**
   * Number of download threads.
   */
  static _downloadThreads = 0;
  static get downloadThreads() {
    return SA._downloadThreads;
  }
  /** Coordinate of tile */
  x;
  y;
  z;
  /** Is a tile? */
  isTile = !0;
  /** Tile parent */
  parent = null;
  /** Children of tile */
  children = [];
  _showing = !1;
  /**
   * Gets the showing state of the tile.
   */
  get showing() {
    return this._showing;
  }
  /**
   * Sets the showing state of the tile.
   * @param value - The new showing state.
   */
  set showing(A) {
    this._showing = A, this.material.forEach((g) => g.visible = A);
  }
  _ready = !1;
  /** Max height of tile */
  _maxZ = 0;
  /**
   * Gets the maximum height of the tile.
   */
  get maxZ() {
    return this._maxZ;
  }
  /**
   * Sets the maximum height of the tile.
   * @param value - The new maximum height.
   */
  set maxZ(A) {
    this._maxZ = A;
  }
  /** Min height of tile */
  _minZ = 0;
  /**
   * Gets the minimum height of the tile.
   */
  get minZ() {
    return this._minZ;
  }
  /**
   * Sets the minimum height of the tile.
   * @param value - The new minimum height.
   */
  set minZ(A) {
    this._minZ = A;
  }
  /** Avg height of tile */
  _avgZ = 0;
  /**
   * Gets the average height of the tile.
   */
  get avgZ() {
    return this._avgZ;
  }
  /**
   * Sets the average height of the tile.
   * @param value - The new average height.
   */
  set avgZ(A) {
    this._avgZ = A;
  }
  /** Distance to camera */
  distToCamera = 0;
  /* Tile size in world */
  sizeInWorld = 0;
  /**
   * Gets the index of the tile in its parent's children array.
   * @returns The index of the tile.
   */
  get index() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  _loaded = !1;
  /**
   * Gets the load state of the tile.
   */
  get loaded() {
    return this._loaded;
  }
  _inFrustum = !1;
  /** Is tile in frustum ?*/
  get inFrustum() {
    return this._inFrustum;
  }
  /**
   * Sets whether the tile is in the frustum.
   * @param value - The new frustum state.
   */
  set inFrustum(A) {
    this._inFrustum = A;
  }
  /** Tile is a leaf ?  */
  get isLeaf() {
    return this.children.filter((A) => A.isTile).length === 0;
  }
  /**
   * Constructor for the Tile class.
   * @param x - Tile X-coordinate, default: 0.
   * @param y - Tile Y-coordinate, default: 0.
   * @param z - Tile level, default: 0.
   */
  constructor(A = 0, g = 0, I = 0) {
    super(ug, []), this.x = A, this.y = g, this.z = I, this.name = `Tile ${I}-${A}-${g}`, this.up.set(0, 0, 1), this.matrixAutoUpdate = !1;
  }
  /**
   * Override Object3D.traverse, change the callback param type to "this".
   * @param callback - The callback function.
   */
  traverse(A) {
    A(this), this.children.forEach((g) => {
      g.isTile && g.traverse(A);
    });
  }
  /**
   * Override Object3D.traverseVisible, change the callback param type to "this".
   * @param callback - The callback function.
   */
  traverseVisible(A) {
    this.visible && (A(this), this.children.forEach((g) => {
      g.isTile && g.traverseVisible(A);
    }));
  }
  /**
   * Override Object3D.raycast, only test the tile has loaded.
   * @param raycaster - The raycaster.
   * @param intersects - The array of intersections.
   */
  raycast(A, g) {
    this.showing && this.loaded && this.isTile && super.raycast(A, g);
  }
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
  LOD(A, g, I, E, C, B) {
    const i = qg(this, g, I, E);
    if (SA.downloadThreads < 10 && i === DI.create && (this.showing || this.z < g)) {
      const o = Hg(A, this.x, this.y, this.z, g, (t) => B(t));
      this.add(...o), o.forEach((t) => {
        t.z >= g && SA._downloadThreads++, C(t);
      });
    } else if (i === DI.remove && this.showing) {
      const o = this.parent;
      o?.isTile && (o.showing = !0, o.dispose(!1));
    }
    return this;
  }
  /**
   * Updates the tile.
   * @param params - The update parameters.
   * @returns The current tile.
   */
  update(A) {
    if (!this.parent)
      return this;
    MI.setFromProjectionMatrix(
      fg.multiplyMatrices(A.camera.projectionMatrix, A.camera.matrixWorldInverse)
    );
    const g = A.camera.getWorldPosition(xg);
    return this.traverse((I) => {
      const E = pg.clone().applyMatrix4(I.matrixWorld);
      I.inFrustum = MI.intersectsBox(E), I.distToCamera = Yg(I, g), I.LOD(
        A.loader,
        A.minLevel,
        A.maxLevel,
        A.LODThreshold,
        this._onTileCreate.bind(this),
        this._onTileLoad.bind(this)
      );
    }), this._checkReady(A.minLevel), this;
  }
  /**
   * Checks if the map is ready to render.
   * @param minLevel - The minimum level.
   * @returns The current tile.
   */
  _checkReady(A) {
    return this._ready || (this._ready = !0, this.traverse((g) => {
      if (g.isLeaf && g.loaded && g.z >= A) {
        this._ready = !1;
        return;
      }
    }), this._ready && this.dispatchEvent({ type: "ready" })), this;
  }
  /** Called when tile loaded  */
  _onLoad() {
    this._loaded = !0, this._checkVisible(), this.maxZ = this.geometry.boundingBox?.max.z || 0, this.minZ = this.geometry.boundingBox?.min.z || 0, this.avgZ = (this.maxZ + this.minZ) / 2;
  }
  /**
   * Calculates the elevation of tiles in view.
   * @returns The current tile.
   */
  _calcHeightInView() {
    let A = 0, g = 0;
    return this.maxZ = -1, this.minZ = 10, this.traverseVisible((I) => {
      I.isLeaf && I.inFrustum && I.loaded && (this.maxZ = Math.max(this.maxZ, I.maxZ), this.minZ = Math.min(this.minZ, I.minZ), A += I.avgZ, g++);
    }), g > 0 && (this.avgZ = A / g), this;
  }
  /**
   * Checks the visibility of the tile.
   */
  _checkVisible() {
    const A = this.parent;
    if (A && A.isTile) {
      const g = A.children.filter((E) => E.isTile), I = g.every((E) => E.loaded);
      A.showing = !I, g.forEach((E) => E.showing = I);
    }
  }
  /**
   * Callback function triggered when a tile is created.
   * @param newTile - The newly created tile object.
   */
  _onTileCreate(A) {
    A.updateMatrix(), A.updateMatrixWorld(), A.sizeInWorld = lg(A), A.receiveShadow = this.receiveShadow, A.castShadow = this.castShadow, this.dispatchEvent({ type: "tile-created", tile: A });
  }
  /**
   * Callback function triggered when a tile is loaded completely.
   * @param newTile - The loaded tile object.
   */
  _onTileLoad(A) {
    A._onLoad(), this._calcHeightInView(), this.dispatchEvent({ type: "tile-loaded", tile: A }), SA._downloadThreads--;
  }
  /**
   * Reloads the tile data.
   * @returns The current tile.
   */
  reload() {
    return this.dispose(!0), SA._downloadThreads = 0, this;
  }
  /**
   * Frees the tile resources.
   * @param disposeSelf - Whether to dispose the tile itself.
   * @returns The current tile.
   */
  dispose(A) {
    return A && this.isTile && this.loaded && (this.material.forEach((g) => g.dispose()), this.material = [], this.geometry.groups = [], this.geometry.dispose(), this.dispatchEvent({ type: "dispose" })), this.children.forEach((g) => g.dispose(!0)), this.clear(), this;
  }
};
class TI extends ag {
  constructor(A = {}) {
    super({ transparent: !0, side: eg, ...A });
  }
  setTexture(A) {
    this.map = A, this.needsUpdate = !0;
  }
  dispose() {
    const A = this.map;
    A && (A.image instanceof ImageBitmap && A.image.close(), A.dispose());
  }
}
class UE extends dA {
  build(A, g) {
    this.dispose(), this.copy(new dA(1, 1, g - 1, g - 1));
    const I = this.getAttribute("position");
    for (let E = 0; E < I.count; E++)
      I.setZ(E, A[E]);
  }
  setData(A, g) {
    if (A.length != g * g)
      throw "DEM array size error!";
    return this.build(A, g), this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals(), this;
  }
}
class JE extends dA {
  _min = 0;
  /**
   * Build grid geometry from dem
   * @param dem 2d array of dem
   * @param tileSize tile size
   */
  build(A, g) {
    this.dispose();
    const I = 1, E = 1, C = g - 1, B = g - 1, i = I / 2, o = E / 2;
    let t = Math.floor(C), s = Math.floor(B);
    const a = I / t, w = E / s;
    t += 2, s += 2;
    const R = t + 1, N = s + 1, y = R * N, c = new Uint16Array(y * 6), F = new Float32Array(y * 3), n = new Float32Array(y * 2);
    let d = 0;
    this._min = Math.min(...Array.from(A));
    for (let S = 0; S < N; S++)
      for (let M = 0; M < R; M++) {
        let q = (M - 1) * a - i, L = (S - 1) * w - o, U = (M - 1) / (t - 2), Y = 1 - (S - 1) / (s - 2);
        q = rA.clamp(q, -0.5, 0.5), L = rA.clamp(L, -0.5, 0.5), U = rA.clamp(U, 0, 1), Y = rA.clamp(Y, 0, 1);
        let l = 0;
        S === 0 || S === N - 1 || M === 0 || M === R - 1 ? l = this._min - 0.03 : (l = A[d], d++);
        const J = M + R * S;
        F[J * 3] = q, F[J * 3 + 1] = -L, F[J * 3 + 2] = l, n[J * 2] = U, n[J * 2 + 1] = Y;
      }
    for (let S = 0; S < s; S++)
      for (let M = 0; M < t; M++) {
        const q = M + R * S, L = M + R * (S + 1), U = M + 1 + R * (S + 1), Y = M + 1 + R * S, l = M + R * S;
        c[l * 6] = q, c[l * 6 + 1] = L, c[l * 6 + 2] = Y, c[l * 6 + 3] = L, c[l * 6 + 4] = U, c[l * 6 + 5] = Y;
      }
    return this.setIndex(new AA(c, 1)), this.setAttribute("position", new AA(F, 3)), this.setAttribute("normal", new hg(new Float32Array(y * 3), 3)), this.setAttribute("uv", new AA(n, 2)), this;
  }
  /**
   * set the tile dem data
   * @param dem 2d dem array
   * @param tileSize dem size
   * @returns this
   */
  setData(A) {
    const g = Math.floor(Math.sqrt(A.length));
    return this.build(A, g), this.computeVertexNormals(), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  // set normal on edge(skrit)
  // 瓦片边缘法向量计算比较复杂，需要根据相邻瓦片高程计算，暂未完美实现
  // 考虑使用Mapbox Terrain-DEM v1格式地形 https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/
  computeVertexNormals() {
    const A = this.index, g = this.getAttribute("position");
    if (g !== void 0) {
      let I = this.getAttribute("normal");
      if (I === void 0)
        I = new AA(new Float32Array(g.count * 3), 3), this.setAttribute("normal", I);
      else
        for (let w = 0, R = I.count; w < R; w++)
          I.setXYZ(w, 0, 0, 0);
      const E = new H(), C = new H(), B = new H(), i = new H(), o = new H(), t = new H(), s = new H(), a = new H();
      if (A)
        for (let w = 0, R = A.count; w < R; w += 3) {
          const N = A.getX(w + 0), y = A.getX(w + 1), c = A.getX(w + 2);
          E.fromBufferAttribute(g, N), C.fromBufferAttribute(g, y), B.fromBufferAttribute(g, c), E.z < this._min || C.z < this._min || B.z < this._min ? (I.setXYZ(N, 0, 0, 1), I.setXYZ(y, 0, 0, 1), I.setXYZ(c, 0, 0, 1)) : (s.subVectors(B, C), a.subVectors(E, C), s.cross(a), i.fromBufferAttribute(I, N), o.fromBufferAttribute(I, y), t.fromBufferAttribute(I, c), i.add(s), o.add(s), t.add(s), I.setXYZ(N, i.x, i.y, i.z), I.setXYZ(y, o.x, o.y, o.z), I.setXYZ(c, t.x, t.y, t.z));
        }
      else
        for (let w = 0, R = g.count; w < R; w += 3)
          E.fromBufferAttribute(g, w + 0), C.fromBufferAttribute(g, w + 1), B.fromBufferAttribute(g, w + 2), s.subVectors(B, C), a.subVectors(E, C), s.cross(a), I.setXYZ(w + 0, s.x, s.y, s.z), I.setXYZ(w + 1, s.x, s.y, s.z), I.setXYZ(w + 2, s.x, s.y, s.z);
      this.normalizeNormals(), I.needsUpdate = !0;
    }
  }
}
function jA(...Q) {
  const A = Q, g = A && A.length > 1 && A[0].constructor || null;
  if (!g)
    throw new Error(
      '"concatenateTypedArrays" - incorrect quantity of arguments or arguments have incompatible data types'
    );
  const I = A.reduce((B, i) => B + i.length, 0), E = new g(I);
  let C = 0;
  for (const B of A)
    E.set(B, C), C += B.length;
  return E;
}
function AI(Q, A, g, I) {
  const E = I ? Og(I, Q.position.value) : mg(A), C = E.length, B = new Float32Array(C * 6), i = new Float32Array(C * 4), o = new A.constructor(C * 6), t = new Float32Array(C * 6);
  for (let a = 0; a < C; a++)
    Wg({
      edge: E[a],
      edgeIndex: a,
      attributes: Q,
      skirtHeight: g,
      newPosition: B,
      newTexcoord0: i,
      newTriangles: o,
      newNormals: t
    });
  Q.position.value = jA(Q.position.value, B), Q.texcoord.value = jA(Q.texcoord.value, i), Q.normal.value = jA(Q.normal.value, t);
  const s = jA(A, o);
  return {
    attributes: Q,
    indices: s
  };
}
function mg(Q) {
  const A = [], g = Array.isArray(Q) ? Q : Array.from(Q);
  for (let E = 0; E < g.length; E += 3) {
    const C = g[E], B = g[E + 1], i = g[E + 2];
    A.push([C, B], [B, i], [i, C]);
  }
  A.sort(([E, C], [B, i]) => {
    const o = Math.min(E, C), t = Math.min(B, i);
    return o !== t ? o - t : Math.max(E, C) - Math.max(B, i);
  });
  const I = [];
  for (let E = 0; E < A.length; E++)
    E + 1 < A.length && A[E][0] === A[E + 1][1] && A[E][1] === A[E + 1][0] ? E++ : I.push(A[E]);
  return I;
}
function Og(Q, A) {
  const g = (E, C) => {
    E.sort(C);
  };
  g(Q.westIndices, (E, C) => A[3 * E + 1] - A[3 * C + 1]), g(Q.eastIndices, (E, C) => A[3 * C + 1] - A[3 * E + 1]), g(Q.southIndices, (E, C) => A[3 * C] - A[3 * E]), g(Q.northIndices, (E, C) => A[3 * E] - A[3 * C]);
  const I = [];
  return Object.values(Q).forEach((E) => {
    if (E.length > 1)
      for (let C = 0; C < E.length - 1; C++)
        I.push([E[C], E[C + 1]]);
  }), I;
}
function Wg({
  edge: Q,
  edgeIndex: A,
  attributes: g,
  skirtHeight: I,
  newPosition: E,
  newTexcoord0: C,
  newTriangles: B,
  newNormals: i
}) {
  const o = g.position.value.length, t = A * 2, s = t + 1;
  E.set(g.position.value.subarray(Q[0] * 3, Q[0] * 3 + 3), t * 3), E[t * 3 + 2] = E[t * 3 + 2] - I, E.set(g.position.value.subarray(Q[1] * 3, Q[1] * 3 + 3), s * 3), E[s * 3 + 2] = E[s * 3 + 2] - I, C.set(g.texcoord.value.subarray(Q[0] * 2, Q[0] * 2 + 2), t * 2), C.set(g.texcoord.value.subarray(Q[1] * 2, Q[1] * 2 + 2), s * 2);
  const a = A * 2 * 3;
  B[a] = Q[0], B[a + 1] = o / 3 + s, B[a + 2] = Q[1], B[a + 3] = o / 3 + s, B[a + 4] = Q[0], B[a + 5] = o / 3 + t, i[a] = 0, i[a + 1] = 0, i[a + 2] = 1, i[a + 3] = 0, i[a + 4] = 0, i[a + 5] = 1;
}
function Tg(Q, A = !0) {
  if (Q.length < 4)
    throw new Error(`DEM array must > 4, got ${Q.length}!`);
  const g = Math.floor(Math.sqrt(Q.length)), I = g, E = g, C = bI(E, I), B = bg(Q, E, I);
  return A ? AI(B, C, 1) : { attributes: B, indices: C };
}
function bg(Q, A, g) {
  const I = g * A, E = new Float32Array(I * 3), C = new Float32Array(I * 2);
  let B = 0;
  for (let i = 0; i < A; i++)
    for (let o = 0; o < g; o++) {
      const t = o / (g - 1), s = i / (A - 1);
      C[B * 2] = t, C[B * 2 + 1] = s, E[B * 3] = t - 0.5, E[B * 3 + 1] = s - 0.5, E[B * 3 + 2] = Q[(A - i - 1) * g + o], B++;
    }
  return {
    // 顶点位置属性
    position: { value: E, size: 3 },
    // UV坐标属性
    texcoord: { value: C, size: 2 },
    // 法线属性
    normal: { value: ZI(E, bI(A, g)), size: 3 }
  };
}
function bI(Q, A) {
  const g = 6 * (A - 1) * (Q - 1), I = new Uint16Array(g);
  let E = 0;
  for (let C = 0; C < Q - 1; C++)
    for (let B = 0; B < A - 1; B++) {
      const i = C * A + B, o = i + 1, t = i + A, s = t + 1, a = E * 6;
      I[a] = i, I[a + 1] = o, I[a + 2] = t, I[a + 3] = t, I[a + 4] = o, I[a + 5] = s, E++;
    }
  return I;
}
function ZI(Q, A) {
  const g = new Float32Array(Q.length);
  for (let I = 0; I < A.length; I += 3) {
    const E = A[I] * 3, C = A[I + 1] * 3, B = A[I + 2] * 3, i = Q[E], o = Q[E + 1], t = Q[E + 2], s = Q[C], a = Q[C + 1], w = Q[C + 2], R = Q[B], N = Q[B + 1], y = Q[B + 2], c = s - i, F = a - o, n = w - t, d = R - i, S = N - o, M = y - t, q = F * M - n * S, L = n * d - c * M, U = c * S - F * d, Y = Math.sqrt(q * q + L * L + U * U), l = [0, 0, 1];
    if (Y > 0) {
      const J = 1 / Y;
      l[0] = q * J, l[1] = L * J, l[2] = U * J;
    }
    for (let J = 0; J < 3; J++)
      g[E + J] = g[C + J] = g[B + J] = l[J];
  }
  return g;
}
class PI extends Rg {
  type = "TileGeometry";
  /**
   * set attribute data to geometry
   * @param geometryData geometry data
   * @returns this
   */
  setData(A) {
    this.setIndex(new AA(A.indices, 1));
    const { attributes: g } = A;
    return this.setAttribute("position", new AA(g.position.value, g.position.size)), this.setAttribute("uv", new AA(g.texcoord.value, g.texcoord.size)), this.setAttribute("normal", new AA(g.normal.value, g.normal.size)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  /**
   * set DEM data to geometry
   *
   * @param dem Float32Array类型，表示地形高度图数据
   * @returns 返回设置地形高度图数据后的对象
   */
  setDEM(A) {
    const g = Tg(A, !0);
    return this.setData(g);
  }
}
class _A {
  static enabled = !0;
  static size = 200;
  static files = /* @__PURE__ */ new Map();
  static add(A, g) {
    if (!this.enabled || this.files.has(A))
      return;
    this.files.set(A, g);
    const I = Array.from(this.files.keys()), E = this.files.size - this.size;
    for (let C = 0; C < E; C++)
      this.remove(I[C]);
    console.assert(this.files.size <= this.size);
  }
  static get(A) {
    if (this.enabled)
      return this.files.get(A);
  }
  static remove(A) {
    this.files.delete(A);
  }
  static clear() {
    this.files.clear();
  }
}
class Zg extends Error {
  response;
  constructor(A, g) {
    super(A), this.response = g;
  }
}
class eI extends uI {
  mimeType;
  responseType;
  constructor(A) {
    super(A);
  }
  load(A, g, I, E, C) {
    this.path !== void 0 && (A = this.path + A), A = this.manager.resolveURL(A);
    const B = _A.get(A);
    if (B)
      return this.manager.itemStart(A), setTimeout(() => {
        g && g(B), this.manager.itemEnd(A);
      }), B;
    if (C?.aborted) {
      console.log("aborted befor load");
      return;
    }
    const i = new Request(A, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin",
      // An abort controller could be added within a future PR
      signal: C
    }), o = this.mimeType, t = this.responseType;
    fetch(i).then((s) => {
      if (s.status === 200 || s.status === 0)
        return s.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), s;
      throw new Zg(
        `fetch for "${s.url}" responded with ${s.status}: ${s.statusText}`,
        s
      );
    }).then((s) => {
      switch (t) {
        case "arraybuffer":
          return s.arrayBuffer();
        case "blob":
          return s.blob();
        case "document":
          return s.text().then((a) => new DOMParser().parseFromString(a, o));
        case "json":
          return s.json();
        default:
          if (o === void 0)
            return s.text();
          {
            const w = /charset="?([^;"\s]*)"?/i.exec(o), R = w && w[1] ? w[1].toLowerCase() : void 0, N = new TextDecoder(R);
            return s.arrayBuffer().then((y) => N.decode(y));
          }
      }
    }).then((s) => {
      _A.add(A, s), g && g(s);
    }).catch((s) => {
      E && E(s), s.name != "AbortError" && this.manager.itemError(A);
    }).finally(() => {
      this.manager.itemEnd(A);
    }), this.manager.itemStart(A);
  }
  setResponseType(A) {
    return this.responseType = A, this;
  }
  setMimeType(A) {
    return this.mimeType = A, this;
  }
}
console.log(`====================three-tile V${Kg}==============================`);
class Pg extends Ng {
  onParseStart = void 0;
  onParseEnd = void 0;
  parseStart(A) {
    this.onParseStart && this.onParseStart(A);
  }
  parseEnd(A) {
    setTimeout(() => this.onParseEnd && this.onParseEnd(A));
  }
}
const p = {
  manager: new Pg(),
  // Dict of dem loader
  demLoaderMap: /* @__PURE__ */ new Map(),
  // Dict of img loader
  imgLoaderMap: /* @__PURE__ */ new Map(),
  /**
   * Register material loader
   * @param loader material loader
   */
  registerMaterialLoader(Q) {
    p.imgLoaderMap.set(Q.dataType, Q), console.log(`* Register imageLoader: '${Q.dataType}', Author: '${Q.author || FI.name}'`);
  },
  /**
   * Register geometry loader
   * @param loader geometry loader
   */
  registerGeometryLoader(Q) {
    p.demLoaderMap.set(Q.dataType, Q), console.log(`* Register terrainLoader: '${Q.dataType}', Author: '${Q.author || FI.name}'`);
  },
  /**
   * Get material loader from datasource
   * @param source datasource
   * @returns material loader
   */
  getMaterialLoader(Q) {
    const A = p.imgLoaderMap.get(Q.dataType);
    if (A)
      return A;
    throw `Source dataType "${Q.dataType}" is not support!`;
  },
  /**
   * Get geometry loader from datasource
   * @param source datasouce
   * @returns geometry loader
   */
  getGeometryLoader(Q) {
    const A = p.demLoaderMap.get(Q.dataType);
    if (A)
      return A;
    throw `Source dataType "${Q.dataType}" is not support!`;
  }
}, Xg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
class hI extends uI {
  loader = new eI(p.manager);
  constructor(A) {
    super(A), this.loader.setResponseType("blob");
  }
  /**
   * load image
   * @param url imageurl
   * @param onLoad callback when loaded and abort and error
   * @param onProgress callback when progress
   * @param onError callback when error
   * @param abortSignal signal of abort loading
   * @returns image
   */
  load(A, g, I, E, C) {
    const B = new Image(), i = (s) => {
      t(), g && g(B);
    }, o = (s) => {
      t(), E && E(s), B.src = Xg;
    }, t = () => {
      B.removeEventListener("load", i, !1), B.removeEventListener("error", o, !1);
    };
    return B.addEventListener("load", i, !1), B.addEventListener("error", o, !1), this.crossOrigin, this.requestHeader, this.loader.load(
      A,
      (s) => {
        g && (B.src = URL.createObjectURL(s));
      },
      I,
      E,
      C
    ), B;
  }
}
function XI(Q, A) {
  const g = Math.floor(Q[0] * A), I = Math.floor(Q[1] * A), E = Math.floor((Q[2] - Q[0]) * A), C = Math.floor((Q[3] - Q[1]) * A);
  return { sx: g, sy: I, sw: E, sh: C };
}
function RI(Q, A, g, I) {
  if (I < Q.minLevel)
    return {
      url: void 0
    };
  if (I <= Q.maxLevel)
    return {
      url: Q._getTileUrl(A, g, I),
      bounds: [0, 0, 1, 1]
    };
  const E = jg(A, g, I, Q.maxLevel);
  return { url: Q._getTileUrl(
    E.parentNO.x,
    E.parentNO.y,
    E.parentNO.z
  ), bounds: E.bounds };
}
function jg(Q, A, g, I) {
  const E = g - I, C = { x: Q >> E, y: A >> E, z: g - E }, B = Math.pow(2, E), i = Math.pow(0.5, E), o = Q % B / B - 0.5 + i / 2, t = A % B / B - 0.5 + i / 2, s = new V(o, t), a = new yg().setFromCenterAndSize(s, new V(i, i)), w = [
    a.min.x + 0.5,
    a.min.y + 0.5,
    a.max.x + 0.5,
    a.max.y + 0.5
  ];
  return { parentNO: C, bounds: w };
}
class Vg {
  /** Get loader cache size of file  */
  get cacheSize() {
    return _A.size;
  }
  /** Set loader cache size of file  */
  set cacheSize(A) {
    _A.size = A;
  }
  _imgSource = [];
  /** Get image source */
  get imgSource() {
    return this._imgSource;
  }
  /** Set image source */
  set imgSource(A) {
    this._imgSource = A;
  }
  _demSource;
  /** Get DEM source */
  get demSource() {
    return this._demSource;
  }
  /** Set DEM source */
  set demSource(A) {
    this._demSource = A;
  }
  _useWorker = !0;
  /** Get use worker */
  get useWorker() {
    return this._useWorker;
  }
  /** Set use worker */
  set useWorker(A) {
    this._useWorker = A;
  }
  /** Loader manager */
  manager = p.manager;
  /**
   * Load a tile by x, y and z coordinate.
   *
   * @param x x coordinate of tile
   * @param y y coordinate of tile
   * @param z z coordinate of tile
   * @param onLoad tile loaded callback
   * @returns tile instance
   */
  load(A, g, I, E) {
    const C = new kA(A, g, I), B = new AbortController(), i = () => {
      C.loaded || B.abort();
    };
    return C.addEventListener("dispose", () => {
      i(), C.removeEventListener("dispose", i);
    }), this.doLoad(C, E, B.signal), C;
  }
  /**
   * Load Geometry and meterial
   */
  doLoad(A, g, I) {
    const E = () => {
      const B = this.loadMaterial(A.x, A.y, A.z, () => i(), I), i = () => {
        for (let o = 0; o < B.length; o++)
          C.addGroup(0, 1 / 0, o);
        A.geometry = C, A.material = B, g();
      };
    }, C = this.loadGeometry(A.x, A.y, A.z, E, I);
  }
  /**
   * Load geometry
   * @param tile tile to load
   * @param onLoad loaded callback
   * @param onError error callback
   * @returns geometry
   */
  loadGeometry(A, g, I, E, C) {
    let B;
    if (this.demSource && I >= this.demSource.minLevel && this._tileInBounds(A, g, I, this.demSource)) {
      const i = p.getGeometryLoader(this.demSource);
      i.useWorker = this.useWorker, B = i.load(this.demSource, A, g, I, E, C);
    } else
      B = new dA(), E();
    return B;
  }
  /**
   * Load material
   * @param tile tile to load
   * @param onLoad loaded callback
   * @param onError error callback
   * @returns material
   */
  loadMaterial(A, g, I, E, C) {
    const B = this.imgSource.filter((t) => I >= t.minLevel && this._tileInBounds(A, g, I, t));
    if (B.length === 0)
      return E(), [];
    let i = 0;
    return B.map((t) => {
      const s = p.getMaterialLoader(t);
      return s.useWorker = this.useWorker, s.load(
        t,
        A,
        g,
        I,
        () => {
          i++, i >= B.length && E();
        },
        C
      );
    });
  }
  /**
   * Check the tile is in the bounds
   *
   * @param x x coordinate
   * @param y y coordinate
   * @param z z coordinate
   * @returns true in the bounds,else false
   */
  _tileInBounds(A, g, I, E) {
    const C = E._projectionBounds, B = E._getTileBounds(A, g, I);
    return !(B[2] < C[0] || // minx
    B[3] < C[1] || // miny
    B[0] > C[2] || // maxx
    B[1] > C[3]);
  }
}
class zg {
  // image loader
  loader = new hI(p.manager);
  /**
   * load the tile texture
   * @param tile tile to load
   * @param source datasource
   * @param onLoad callback
   * @returns texture
   */
  load(A, g, I, E, C, B, i) {
    const o = new xI(new Image(1, 1));
    o.colorSpace = fI;
    const { url: t, bounds: s } = RI(A, g, I, E);
    return t ? this.loader.load(
      t,
      // onLoad
      (a) => {
        E > A.maxLevel ? o.image = vg(a, s) : o.image = a, o.needsUpdate = !0, C();
      },
      // onProgress
      void 0,
      // onError
      B,
      i
    ) : C(), o;
  }
}
function vg(Q, A) {
  const g = Q.width, I = new OffscreenCanvas(g, g), E = I.getContext("2d"), { sx: C, sy: B, sw: i, sh: o } = XI(A, Q.width);
  return E.drawImage(Q, C, B, i, o, 0, 0, g, g), I;
}
class jI {
  dataType = "";
  useWorker = !0;
  /**
   * load tile's data from source
   * @param source
   * @param tile
   * @param onLoad
   * @param onError
   * @returns
   */
  load(A, g, I, E, C, B) {
    const i = new PI(), { url: o, bounds: t } = RI(A, g, I, E);
    return o ? this.doLoad(
      o,
      (s) => {
        s && (p.manager.parseStart(o), this.doPrase(s, g, I, E, t, (a) => {
          a instanceof Float32Array ? i.setDEM(a) : i.setData(a), p.manager.parseEnd(o), C();
        }));
      },
      C,
      B
    ) : C(), i;
  }
}
class Z {
  dataType = "image";
  attribution = "ThreeTile";
  minLevel = 0;
  maxLevel = 19;
  projectionID = "3857";
  url = "";
  subdomains = [];
  s = "";
  opacity = 1;
  isTMS = !1;
  // public bounds: [number, number, number, number] = [60, 10, 140, 60];
  //public bounds: [number, number, number, number] = [-180, -85.05112877980659, 180, 85.05112877980659];
  bounds = [-180, -85, 180, 85];
  _projectionBounds = [0, 0, 0, 0];
  useData = {};
  /**
   * constructor
   * @param options
   */
  constructor(A) {
    Object.assign(this, A);
  }
  /**
   * Get url from tile coordinate, protected, overwrite to custom generation tile url from xyz
   * @param x
   * @param y
   * @param z
   * @returns url
   */
  getUrl(A, g, I) {
    const E = Object.assign({}, this, { x: A, y: g, z: I });
    return _g(this.url, E);
  }
  /**
   * Get url from tile coordinate, public，called by TileLoader
   * @param x
   * @param y
   * @param z
   * @returns url
   */
  _getTileUrl(A, g, I) {
    const E = this.subdomains.length;
    if (E > 0) {
      const B = Math.floor(Math.random() * E);
      this.s = this.subdomains[B];
    }
    let C = g;
    return this.isTMS && (C = Math.pow(2, I) - 1 - g), this.getUrl(A, C, I);
  }
  _getTileBounds(A, g, I) {
    return [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
  }
  /**
   * source factory function, create source directly through factoy functions.
   * @param options
   * @returns ISource
   */
  static create(A) {
    return new Z(A);
  }
}
function _g(Q, A) {
  const g = /\{ *([\w_-]+) *\}/g;
  return Q.replace(g, (I, E) => {
    const C = A[E] ?? (() => {
      throw new Error(`source url template error, No value provided for variable: ${I}`);
    })();
    return typeof C == "function" ? C(A) : C;
  });
}
class VA extends Z {
  _source;
  _projection;
  get projection() {
    return this._projection;
  }
  set projection(A) {
    this._projection = A, this._projectionBounds = this.projection.getProjBounds(this._source.bounds);
  }
  constructor(A, g) {
    super(), Object.assign(this, A), this._source = A, this.projection = g;
  }
  _getTileBounds(A, g, I) {
    return this.projection.getTileBounds(A, g, I);
  }
  /**
   * 根据给定的瓦片坐标（x, y, z）获取瓦片的URL。
   *
   * @param x 瓦片的x坐标。
   * @param y 瓦片的y坐标。
   * @param z 瓦片的层级（zoom level）。
   * @returns 返回瓦片的URL
   */
  _getTileUrl(A, g, I) {
    const E = this.projection.getTileXWithCenterLon(A, I);
    return this._source._getTileUrl(E, g, I);
  }
}
class VI {
  _lon0 = 0;
  /** 中央经线 */
  get lon0() {
    return this._lon0;
  }
  /**
   * 构造函数
   * @param centerLon 中央经线
   */
  constructor(A = 0) {
    this._lon0 = A;
  }
  /**
   * 根据中央经线取得变换后的瓦片X坐标
   * @param x
   * @param z
   * @returns
   */
  getTileXWithCenterLon(A, g) {
    const I = Math.pow(2, g);
    let E = A + Math.round(I / 360 * this._lon0);
    return E >= I ? E -= I : E < 0 && (E += I), E;
  }
  /**
   * 取得瓦片左下角投影坐标
   * @param x
   * @param y
   * @param z
   * @returns
   */
  getTileXYZproj(A, g, I) {
    const E = this.mapWidth, C = this.mapHeight / 2, B = A / Math.pow(2, I) * E - E / 2, i = C - g / Math.pow(2, I) * C * 2;
    return { x: B, y: i };
  }
  /**
   * 取得经纬度范围的投影坐标
   * @param bounds 经纬度边界
   * @returns 投影坐标
   */
  getProjBounds(A) {
    const g = A[0] === -180 && A[2] === 180, I = this.project(A[0] + (g ? this._lon0 : 0), A[1]), E = this.project(A[2] + (g ? this._lon0 : 0), A[3]);
    return [Math.min(I.x, E.x), Math.min(I.y, E.y), Math.max(I.x, E.x), Math.max(I.y, E.y)];
  }
  /**
  	 * 取得瓦片边界投影坐标范围
  
  	 * @param x 瓦片X坐标
  	 * @param y 瓦片Y坐标
  	 * @param z  瓦片层级
  	 * @returns 
  	 */
  getTileBounds(A, g, I) {
    const E = this.getTileXYZproj(A, g, I), C = this.getTileXYZproj(A + 1, g + 1, I);
    return [Math.min(E.x, C.x), Math.min(E.y, C.y), Math.max(E.x, C.x), Math.max(E.y, C.y)];
  }
}
const HA = 6378;
class zI extends VI {
  ID = "3857";
  // projeciton ID
  mapWidth = 2 * Math.PI * HA;
  //E-W scacle Earth's circumference(km)
  mapHeight = this.mapWidth;
  //S-N scacle Earth's circumference(km)
  mapDepth = 1;
  //Height scale
  /**
   * Latitude and longitude to projected coordinates
   * @param lon longitude
   * @param lat Latitude
   * @returns projected coordinates
   */
  project(A, g) {
    const I = (A - this.lon0) * (Math.PI / 180), E = g * (Math.PI / 180), C = HA * I, B = HA * Math.log(Math.tan(Math.PI / 4 + E / 2));
    return { x: C, y: B };
  }
  /**
   * Projected coordinates to latitude and longitude
   * @param x projection x
   * @param y projection y
   * @returns latitude and longitude
   */
  unProject(A, g) {
    let I = A / HA * (180 / Math.PI) + this.lon0;
    return I > 180 && (I -= 360), { lat: (2 * Math.atan(Math.exp(g / HA)) - Math.PI / 2) * (180 / Math.PI), lon: I };
  }
}
class $g extends VI {
  ID = "4326";
  mapWidth = 36e3;
  //E-W scacle (*0.01°)
  mapHeight = 18e3;
  //S-N scale (*0.01°)
  mapDepth = 1;
  //height scale
  project(A, g) {
    return { x: (A - this.lon0) * 100, y: g * 100 };
  }
  unProject(A, g) {
    return { lon: A / 100 + this.lon0, lat: g / 100 };
  }
}
const LI = {
  /**
   * create projection object from projection ID
   *
   * @param id projeciton ID, default: "3857"
   * @returns IProjection instance
   */
  createFromID: (Q = "3857", A) => {
    let g;
    switch (Q) {
      case "3857":
        g = new zI(A);
        break;
      case "4326":
        g = new $g(A);
        break;
      default:
        throw new Error(`Projection ID: ${Q} is not supported.`);
    }
    return g;
  }
};
function vI(Q, A) {
  const g = A.intersectObjects([Q.rootTile]);
  for (const I of g)
    if (I.object instanceof kA) {
      const E = Q.worldToLocal(I.point.clone()), C = Q.pos2geo(E);
      return Object.assign(I, {
        location: C
      });
    }
}
function dI(Q, A) {
  const g = new H(0, -1, 0), I = new H(A.x, 10, A.z), E = new pI(I, g);
  return vI(Q, E);
}
function AQ(Q, A, g) {
  const I = new pI();
  return I.setFromCamera(g, Q), vI(A, I);
}
function IQ(Q) {
  const A = Q.loader.manager, g = (I, E) => {
    Q.dispatchEvent({ type: I, ...E });
  };
  A.onStart = (I, E, C) => {
    g("loading-start", { url: I, itemsLoaded: E, itemsTotal: C });
  }, A.onError = (I) => {
    g("loading-error", { url: I });
  }, A.onLoad = () => {
    g("loading-complete");
  }, A.onProgress = (I, E, C) => {
    g("loading-progress", { url: I, itemsLoaded: E, itemsTotal: C });
  }, A.onParseStart = (I) => {
    g("parsing-start", { url: I });
  }, A.onParseEnd = (I) => {
    g("parsing-end", { url: I });
  }, Q.rootTile.addEventListener("ready", () => g("ready")), Q.rootTile.addEventListener("tile-created", (I) => {
    g("tile-created", { tile: I.tile });
  }), Q.rootTile.addEventListener("tile-loaded", (I) => {
    g("tile-loaded", { tile: I.tile });
  });
}
function gQ(Q) {
  let A = 0, g = 0, I = 0, E = 0, C = 0;
  return Q.rootTile.traverse((B) => {
    B.isTile && (A++, B.isLeaf && B.inFrustum && g++, B.isLeaf && E++, I = Math.max(I, B.z), C = kA.downloadThreads);
  }), { total: A, visible: g, leaf: E, maxLevle: I, downLoading: C };
}
function QQ(Q) {
  const A = [];
  if ((Array.isArray(Q.imgSource) ? Q.imgSource : [Q.imgSource]).forEach((I) => {
    const E = I.attribution;
    E && A.push(E);
  }), Q.demSource) {
    const I = Q.demSource.attribution;
    I && A.push(I);
  }
  return [...new Set(A)];
}
class _I extends tI {
  // 渲染时钟计时器
  _clock = new mI();
  // 是否为LOD模型（LOD模型，当autoUpdate为真时渲染时会自动调用update方法）
  isLOD = !0;
  /**
   * Whether the LOD object is updated automatically by the renderer per frame or not.
   * If set to false, you have to call LOD.update() in the render loop by yourself. Default is true.
   * 瓦片是否在每帧渲染时自动更新，默认为真
   */
  autoUpdate = !0;
  /**
   * Root tile, it is the root node of tile tree.
   * 根瓦片
   */
  rootTile;
  /**
   * Map data loader, it used for load tile data and create tile geometry/Material
   * 地图数据加载器
   */
  loader;
  _minLevel = 1;
  /**
   * Get min level of map
   * 地图最小缩放级别，小于这个级别瓦片树不再更新
   */
  get minLevel() {
    return this._minLevel;
  }
  /**
   * Set max level of map
   * 设置地图最小缩放级别，小于这个级别瓦片树不再更新
   */
  set minLevel(A) {
    this._minLevel = A;
  }
  _maxLevel = 18;
  /**
   * Get max level of map
   * 地图最大缩放级别，大于这个级别瓦片树不再更新
   */
  get maxLevel() {
    return this._maxLevel;
  }
  /**
   * Set max level of map
   * 设置地图最大缩放级别，大于这个级别瓦片树不再更新
   */
  set maxLevel(A) {
    this._maxLevel = A;
  }
  _autoPosition = !1;
  /**
   * Get whether to adjust z of map automatically.
   * 是否自动根据视野内地形高度调整地图坐标
   */
  get autoPosition() {
    return this._autoPosition;
  }
  /**
   * Set whether to adjust z of map automatically.
   * 设置是否自动调整地图坐标，如果设置为true，将在每帧渲染中将地图坐标调整可视区域瓦片的平均高度
   */
  set autoPosition(A) {
    this._autoPosition = A;
  }
  /**
   * Get the number of download cache files.
   * 下载缓存文件数量
   */
  get loadCacheSize() {
    return this.loader.cacheSize;
  }
  /**
   * Set the number of  download cache files.
   * 设置瓦片下载缓存文件数量。使用该属性限制缓存瓦片数量，较大的缓存能加快数据下载速度，但会增加内存使用量，一般取<1000。
   */
  set loadCacheSize(A) {
    this.loader.cacheSize = A;
  }
  /**
   * Get max height in view
   * 可视范围内瓦片的最高海拔高度
   */
  get maxZInView() {
    return this.rootTile.maxZ;
  }
  /**
   * Set min height in view
   * 取得可视范围内瓦片的最低海拔高度
   */
  get minZInView() {
    return this.rootTile.minZ;
  }
  /**
   * Get avg hegiht in view
   * 取得可视范围内瓦片的平均海拔高度
   */
  get avgZInView() {
    return this.rootTile.avgZ;
  }
  /**
   * Get central Meridian latidute
   * 取得中央子午线经度
   */
  get lon0() {
    return this.projection.lon0;
  }
  /**
   * Set central Meridian latidute, default:0
   * 设置中央子午线经度，中央子午线决定了地图的投影中心经度，可设置为-90，0，90
   */
  set lon0(A) {
    this.projection.lon0 !== A && (A != 0 && this.minLevel < 1 && console.warn(`Map centralMeridian is ${this.lon0}, minLevel must > 0`), this.projection = LI.createFromID(this.projection.ID, A), this.reload());
  }
  _projection = new zI(0);
  /**
   * Set the map projection object
   * 取得地图投影对象
   */
  get projection() {
    return this._projection;
  }
  /**
   * Get the map projection object
   * 设置地图投影对象
   */
  set projection(A) {
    (A.ID != this.projection.ID || A.lon0 != this.lon0) && (this.rootTile.scale.set(A.mapWidth, A.mapHeight, A.mapDepth), this.imgSource.forEach((g) => g.projection = A), this.demSource && (this.demSource.projection = A), this._projection = A, this.reload(), this.dispatchEvent({
      type: "projection-changed",
      projection: A
    }));
  }
  _imgSource = [];
  /**
   * Get the image data source object
   * 取得影像数据源
   */
  get imgSource() {
    return this._imgSource;
  }
  /**
   * Set the image data source object
   * 设置影像数据源
   */
  set imgSource(A) {
    const g = Array.isArray(A) ? A : [A];
    if (g.length === 0)
      throw new Error("imgSource can not be empty");
    this.projection = LI.createFromID(g[0].projectionID, this.projection.lon0);
    const I = g.map((E) => E instanceof VA ? E : new VA(E, this.projection));
    this._imgSource = I, this.loader.imgSource = I, this.dispatchEvent({ type: "source-changed", source: A });
  }
  _demSource;
  /**
   * Get the terrain data source
   * 设置地形数据源
   */
  get demSource() {
    return this._demSource;
  }
  /**
   * Set the terrain data source
   * 取得地形数据源
   */
  set demSource(A) {
    A ? A instanceof VA ? this._demSource = A : this._demSource = new VA(A, this.projection) : this._demSource = void 0, this.loader.demSource = this._demSource, this.dispatchEvent({ type: "source-changed", source: A });
  }
  _LODThreshold = 1;
  /**
   * Get LOD threshold
   * 取得LOD阈值
   */
  get LODThreshold() {
    return this._LODThreshold;
  }
  /**
   * Set LOD threshold
   * 设置LOD阈值，LOD阈值越大，瓦片细化，但耗费资源越高，建议取1-2之间
   */
  set LODThreshold(A) {
    this._LODThreshold = A;
  }
  /** get use worker */
  get useWorker() {
    return this.loader.useWorker;
  }
  /** set use worker */
  set useWorker(A) {
    this.loader.useWorker = A;
  }
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
  static create(A) {
    return new _I(A);
  }
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
  constructor(A) {
    super(), this.up.set(0, 0, 1), this.loader = A.loader ?? new Vg(), this.rootTile = A.rootTile ?? new kA(), this.rootTile.matrixAutoUpdate = !0, this.minLevel = A.minLevel ?? 1, this.maxLevel = A.maxLevel ?? 19, this.imgSource = A.imgSource, this.demSource = A.demSource, this.lon0 = A.lon0 ?? 0, this.rootTile.scale.set(this.projection.mapWidth, this.projection.mapHeight, this.projection.mapDepth), IQ(this), this.add(this.rootTile), this.rootTile.updateMatrix();
  }
  /**
   * Update the map, It is automatically called after mesh adding a scene
   * 模型更新回调函数，地图加入场景后会在每帧更新时被调用，该函数调用根瓦片实现瓦片树更新和数据加载
   * @param camera
   */
  update(A) {
    const g = this._clock.getElapsedTime();
    if (g > 1 / 5 && (this.rootTile.update({
      camera: A,
      loader: this.loader,
      minLevel: this.minLevel,
      maxLevel: this.maxLevel,
      LODThreshold: this.LODThreshold
    }), this._clock.start(), this.dispatchEvent({ type: "update", delta: g })), this.autoPosition) {
      const I = this.localToWorld(this.up.clone().multiplyScalar(this.avgZInView)), E = this.position.clone().add(I).multiplyScalar(0.01);
      this.position.sub(E);
    }
  }
  /**
   * reload the map data，muse called after the source has changed
   * 重新加载地图，在改变地图数据源后调用它才能生效
   */
  reload() {
    this.rootTile.reload();
  }
  /**
   * dispose map.
   * todo: remve event.
   * 释放地图资源，并移出场景
   */
  dispose() {
    this.removeFromParent(), this.reload();
  }
  /**
   * Geo coordinates converted to map model coordinates
   * 地理坐标转换为地图模型坐标(与geo2map同功能)
   * @param geo 地理坐标（经纬度）
   * @returns 模型坐标
   */
  geo2pos(A) {
    const g = this.projection.project(A.x, A.y);
    return new H(g.x, g.y, A.z);
  }
  /**
   * Geo coordinates converted to map model coordinates
   * 地理坐标转换为地图模型坐标(与geo2pos同功能)
   * @param geo 地理坐标（经纬度）
   * @returns 模型坐标
   */
  geo2map(A) {
    return this.geo2pos(A);
  }
  /**
   * Geo coordinates converted to world coordinates
   * 地理坐标转换为世界坐标
   *
   * @param geo 地理坐标（经纬度）
   * @returns 世界坐标
   */
  geo2world(A) {
    return this.localToWorld(this.geo2pos(A));
  }
  /**
   * Map model coordinates converted to geo coordinates
   * 地图模型坐标转换为地理坐标(与map2geo同功能)
   * @param pos 模型坐标
   * @returns 地理坐标（经纬度）
   */
  pos2geo(A) {
    const g = this.projection.unProject(A.x, A.y);
    return new H(g.lon, g.lat, A.z);
  }
  /**
   * Map model coordinates converted to geo coordinates
   * 地图模型坐标转换为地理坐标(与pos2geo同功能)
   * @param map 模型坐标
   * @returns 地理坐标（经纬度）
   */
  map2geo(A) {
    return this.pos2geo(A);
  }
  /**
   * World coordinates converted to geo coordinates
   * 世界坐标转换为地理坐标
   *
   * @param world 世界坐标
   * @returns 地理坐标（经纬度）
   */
  world2geo(A) {
    return this.pos2geo(this.worldToLocal(A.clone()));
  }
  /**
   * Get the ground infomation from latitude and longitude
   * 获取指定经纬度的地面信息（法向量、高度等）
   * @param geo 地理坐标
   * @returns 地面信息
   */
  getLocalInfoFromGeo(A) {
    const g = this.geo2world(A);
    return dI(this, g);
  }
  /**
   * Get loacation infomation from world position
   * 获取指定世界坐标的地面信息
   * @param pos 世界坐标
   * @returns 地面信息
   */
  getLocalInfoFromWorld(A) {
    return dI(this, A);
  }
  /**
   * Get loacation infomation from screen pointer
   * 获取指定屏幕坐标的地面信息
   * @param camera 摄像机
   * @param pointer 点的屏幕坐标（-0.5~0.5）
   * @returns 位置信息（经纬度、高度等）
   */
  getLocalInfoFromScreen(A, g) {
    return AQ(A, this, g);
  }
  /**
   * Get map source attributions information
   * 取得地图数据归属版权信息
   */
  get attributions() {
    return QQ(this);
  }
  /**
   * Get map tiles statistics to debug
   * 取得瓦片统计信息，用于调试性能
   */
  get tileCount() {
    return gQ(this);
  }
  /**
   * Get the number of currently downloading tiles
   * 取得当前正在下载的瓦片数量
   */
  get downloading() {
    return kA.downloadThreads;
  }
}
class EQ {
  dataType = "image";
  load(A, g, I, E, C, B) {
    const i = new TI();
    i.opacity = A.opacity;
    const t = new zg().load(
      A,
      g,
      I,
      E,
      () => {
        i.setTexture(t), C();
      },
      C,
      B
    );
    return i;
  }
}
p.registerMaterialLoader(new EQ());
function CQ(Q) {
  return BQ(Q.data);
}
function BQ(Q) {
  function A(E, C) {
    const B = C * 4, [i, o, t, s] = E.slice(B, B + 4);
    return s === 0 ? 0 : (i << 16 | o << 8 | t) / 1e4 - 10;
  }
  const g = Q.length >>> 2, I = new Float32Array(g);
  for (let E = 0; E < g; E++)
    I[E] = A(Q, E);
  return I;
}
const $I = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGModCl7cmV0dXJuIGEodC5kYXRhKX1mdW5jdGlvbiBhKHQpe2Z1bmN0aW9uIG4oZSx1KXtjb25zdCByPXUqNCxbZixpLGcsbF09ZS5zbGljZShyLHIrNCk7cmV0dXJuIGw9PT0wPzA6KGY8PDE2fGk8PDh8ZykvMWU0LTEwfWNvbnN0IHM9dC5sZW5ndGg+Pj4yLG89bmV3IEZsb2F0MzJBcnJheShzKTtmb3IobGV0IGU9MDtlPHM7ZSsrKW9bZV09bih0LGUpO3JldHVybiBvfXNlbGYub25tZXNzYWdlPXQ9Pntjb25zdCBuPWModC5kYXRhLmltZ0RhdGEpO3NlbGYucG9zdE1lc3NhZ2Uobiksc2VsZi5jbG9zZSgpfX0pKCk7Cg==", iQ = (Q) => Uint8Array.from(atob(Q), (A) => A.charCodeAt(0)), kI = typeof self < "u" && self.Blob && new Blob([iQ($I)], { type: "text/javascript;charset=utf-8" });
function DQ(Q) {
  let A;
  try {
    if (A = kI && (self.URL || self.webkitURL).createObjectURL(kI), !A) throw "";
    const g = new Worker(A, {
      name: Q?.name
    });
    return g.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(A);
    }), g;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + $I,
      {
        name: Q?.name
      }
    );
  } finally {
    A && (self.URL || self.webkitURL).revokeObjectURL(A);
  }
}
class oQ extends jI {
  // 数据类型标识
  dataType = "terrain-rgb";
  // 使用imageLoader下载
  imageLoader = new hI(p.manager);
  // 下载数据
  doLoad(A, g, I, E) {
    this.imageLoader.load(
      A,
      (C) => g(C),
      // onLoad, 加载完成
      void 0,
      // onProgress, 加载进度，不支持
      I,
      // onError, 加载错误
      E
      // 下载中止信号
    );
  }
  // 解析数据
  doPrase(A, g, I, E, C, B) {
    const i = rA.clamp((E + 2) * 3, 2, 64), o = sQ(A, C, i);
    if (this.useWorker) {
      const t = new DQ();
      t.onmessage = (s) => {
        B(s.data);
      }, t.postMessage({ imgData: o }, o);
    } else
      B(CQ(o));
  }
}
function sQ(Q, A, g) {
  const I = XI(A, Q.width);
  g = Math.min(g, I.sw);
  const C = new OffscreenCanvas(g, g).getContext("2d");
  return C.imageSmoothingEnabled = !1, C.drawImage(Q, I.sx, I.sy, I.sw, I.sh, 0, 0, g, g), C.getImageData(0, 0, g, g);
}
p.registerGeometryLoader(new oQ());
class tQ {
  dataType = "debug";
  useWorker = !1;
  load(A, g, I, E, C) {
    const B = new OI(this.drawTile(g, I, E));
    B.needsUpdate = !0;
    const i = new TI({
      transparent: !0,
      map: B,
      opacity: A.opacity
    });
    return C(), i;
  }
  /**
   * draw a box and coordiante
   * @param tile
   * @returns bitmap
   */
  drawTile(A, g, I) {
    const C = new OffscreenCanvas(256, 256), B = C.getContext("2d");
    return B.scale(1, -1), B.translate(0, -256), B && (B.strokeStyle = "#ccc", B.lineWidth = 4, B.strokeRect(5, 5, 246, 246), B.fillStyle = "white", B.shadowColor = "black", B.shadowBlur = 5, B.shadowOffsetX = 1, B.shadowOffsetY = 1, B.font = "bold 20px arial", B.textAlign = "center", B.fillText(`Tile Test - level: ${I}`, 256 / 2, 50), B.fillText(`[${A}, ${g}]`, 256 / 2, 80)), C.transferToImageBitmap();
  }
}
p.registerMaterialLoader(new tQ());
class aQ {
  dataType = "logo";
  _texture = null;
  // = new CanvasTexture(this.drawLogo(source.attribution));
  /**
   * 加载材质
   * @param source 数据源
   * @param tile 瓦片
   * @param onLoad 加载完成回调
   * @returns 材质
   */
  load(A, g, I, E, C) {
    if (E < 4)
      return C(), new iI();
    this._texture || (this._texture = new OI(this.drawLogo(A.attribution)), this._texture.needsUpdate = !0);
    const B = new iI({
      transparent: !0,
      map: this._texture,
      opacity: A.opacity
    });
    return C(), B;
  }
  /**
   * draw LOGO
   * @param logo text
   * @returns bitmap
   */
  drawLogo(A) {
    const I = new OffscreenCanvas(256, 256), E = I.getContext("2d");
    return E && (E.scale(1, -1), E.translate(0, -256), E.fillStyle = "white", E.shadowColor = "black", E.shadowBlur = 5, E.shadowOffsetX = 1, E.shadowOffsetY = 1, E.font = "bold 14px arial", E.textAlign = "center", E.translate(256 / 2, 256 / 2), E.rotate(30 * Math.PI / 180), E.fillText(`${A}`, 0, 0)), I.transferToImageBitmap();
  }
}
p.registerMaterialLoader(new aQ());
class eQ {
  dataType = "normal";
  load(A, g, I, E, C) {
    const B = new wg({
      // transparent: true,
      opacity: A.opacity,
      flatShading: !0
    });
    return C(), B;
  }
}
p.registerMaterialLoader(new eQ());
class hQ {
  dataType = "wireframe";
  load(A, g, I, E, C) {
    const B = new aI(`hsl(${E * 14}, 100%, 50%)`), i = new iI({
      transparent: !0,
      wireframe: !0,
      color: B,
      opacity: A.opacity,
      depthTest: !1
    });
    return C(), i;
  }
}
p.registerMaterialLoader(new hQ());
/*! Lerc 4.0
Copyright 2015 - 2023 Esri
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
A local copy of the license and additional notices are located with the
source distribution at:
http://github.com/Esri/lerc/
Contributors:  Thomas Maurer, Wenxue Ju
*/
var RQ = (() => {
  var Q = import.meta.url;
  return function(g) {
    g = g || {};
    var g = typeof g < "u" ? g : {}, I, E;
    g.ready = new Promise(function(e, h) {
      I = e, E = h;
    });
    var C = Object.assign({}, g), B = typeof window == "object", i = typeof importScripts == "function", o = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", t = "";
    function s(e) {
      return g.locateFile ? g.locateFile(e, t) : t + e;
    }
    var a, w, R, N, y, c;
    o ? (i ? t = require("path").dirname(t) + "/" : t = __dirname + "/", c = () => {
      y || (N = require("fs"), y = require("path"));
    }, a = function(h, K) {
      return c(), h = y.normalize(h), N.readFileSync(h, K ? void 0 : "utf8");
    }, R = (e) => {
      var h = a(e, !0);
      return h.buffer || (h = new Uint8Array(h)), h;
    }, w = (e, h, K) => {
      c(), e = y.normalize(e), N.readFile(e, function(m, D) {
        m ? K(m) : h(D.buffer);
      });
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(e) {
      if (!(e instanceof EI))
        throw e;
    }), process.on("unhandledRejection", function(e) {
      throw e;
    }), g.inspect = function() {
      return "[Emscripten Module object]";
    }) : (B || i) && (i ? t = self.location.href : typeof document < "u" && document.currentScript && (t = document.currentScript.src), Q && (t = Q), t.indexOf("blob:") !== 0 ? t = t.substr(0, t.replace(/[?#].*/, "").lastIndexOf("/") + 1) : t = "", a = (e) => {
      var h = new XMLHttpRequest();
      return h.open("GET", e, !1), h.send(null), h.responseText;
    }, i && (R = (e) => {
      var h = new XMLHttpRequest();
      return h.open("GET", e, !1), h.responseType = "arraybuffer", h.send(null), new Uint8Array(h.response);
    }), w = (e, h, K) => {
      var m = new XMLHttpRequest();
      m.open("GET", e, !0), m.responseType = "arraybuffer", m.onload = () => {
        if (m.status == 200 || m.status == 0 && m.response) {
          h(m.response);
          return;
        }
        K();
      }, m.onerror = K, m.send(null);
    }), g.print || console.log.bind(console);
    var F = g.printErr || console.warn.bind(console);
    Object.assign(g, C), C = null, g.arguments, g.thisProgram, g.quit;
    var n;
    g.wasmBinary && (n = g.wasmBinary), g.noExitRuntime, typeof WebAssembly != "object" && gA("no native wasm support detected");
    var d, S = !1, M = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function q(e, h, K) {
      for (var m = h + K, D = h; e[D] && !(D >= m); ) ++D;
      if (D - h > 16 && e.buffer && M)
        return M.decode(e.subarray(h, D));
      for (var r = ""; h < D; ) {
        var G = e[h++];
        if (!(G & 128)) {
          r += String.fromCharCode(G);
          continue;
        }
        var k = e[h++] & 63;
        if ((G & 224) == 192) {
          r += String.fromCharCode((G & 31) << 6 | k);
          continue;
        }
        var O = e[h++] & 63;
        if ((G & 240) == 224 ? G = (G & 15) << 12 | k << 6 | O : G = (G & 7) << 18 | k << 12 | O << 6 | e[h++] & 63, G < 65536)
          r += String.fromCharCode(G);
        else {
          var X = G - 65536;
          r += String.fromCharCode(55296 | X >> 10, 56320 | X & 1023);
        }
      }
      return r;
    }
    function L(e, h) {
      return e ? q(l, e, h) : "";
    }
    var U, Y, l, J, x;
    function u(e) {
      U = e, g.HEAP8 = Y = new Int8Array(e), g.HEAP16 = new Int16Array(e), g.HEAP32 = J = new Int32Array(e), g.HEAPU8 = l = new Uint8Array(e), g.HEAPU16 = new Uint16Array(e), g.HEAPU32 = x = new Uint32Array(e), g.HEAPF32 = new Float32Array(e), g.HEAPF64 = new Float64Array(e);
    }
    g.INITIAL_MEMORY;
    var f, T = [], W = [], P = [];
    function j() {
      if (g.preRun)
        for (typeof g.preRun == "function" && (g.preRun = [g.preRun]); g.preRun.length; )
          z(g.preRun.shift());
      FA(T);
    }
    function CA() {
      FA(W);
    }
    function IA() {
      if (g.postRun)
        for (typeof g.postRun == "function" && (g.postRun = [g.postRun]); g.postRun.length; )
          tA(g.postRun.shift());
      FA(P);
    }
    function z(e) {
      T.unshift(e);
    }
    function BA(e) {
      W.unshift(e);
    }
    function tA(e) {
      P.unshift(e);
    }
    var v = 0, QA = null;
    function nA(e) {
      v++, g.monitorRunDependencies && g.monitorRunDependencies(v);
    }
    function _(e) {
      if (v--, g.monitorRunDependencies && g.monitorRunDependencies(v), v == 0 && QA) {
        var h = QA;
        QA = null, h();
      }
    }
    function gA(e) {
      g.onAbort && g.onAbort(e), e = "Aborted(" + e + ")", F(e), S = !0, e += ". Build with -sASSERTIONS for more info.";
      var h = new WebAssembly.RuntimeError(e);
      throw E(h), h;
    }
    var aA = "data:application/octet-stream;base64,";
    function RA(e) {
      return e.startsWith(aA);
    }
    function NA(e) {
      return e.startsWith("file://");
    }
    var b;
    g.locateFile ? (b = "lerc-wasm.wasm", RA(b) || (b = s(b))) : b = new URL("data:application/wasm;base64,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Tg0AA0AgCiACQQN0ai8BAEUNASACQQFqIgIgA0cNAAsgAyECDAELIAIhBSACIANODQEDQCAKIAVBA3RqLwEADQIgBUEBaiIFIANHDQALCyADIAJrIgUgCSAFIAlKIgUbIQkgAiAIIAUbIQgMAgsgBSACayILIAkgCSALSCILGyEJIAIgCCALGyEIIAMgBSICSg0ACwsgAyAJayAAIARrSARAIAYgCCAJajYCFCAGIAMgCGoiADYCECAGKAIUIQQLQQAhAiAAIARMDQAgACAEayIFQQFxIQkCQCAEQQFqIABGBEBBACEADAELIAVBfnEhBUEAIQADQCAAIAogBEEAIAMgAyAEShtrQQN0ai8BACIIIAAgCEobIgAgCiAEQQFqIghBACADIAMgCEoba0EDdGovAQAiCCAAIAhKGyEAIARBAmohBCACQQJqIgIgBUcNAAsLIAkEQCAAIAogBEEAIAMgAyAEShtrQQN0ai8BACICIAAgAkobIQALIABBIWsiAkFgTwRAIAYgADYCDAsgAkFfSyECCwJAIAIiCkUNACAHKAIIIQwgBygCBCENIAEgBigCDCILIAcoAhwiDiALIA5IGyIANgIAIAcgBygCEDYCFCAGQX82AhhBACEFQQAhCAJAQQEgAHQiAyAHKAIYIgAgBygCECICa0ECdU0EQAJAIAcoAhQiBSACa0ECdSIJIAMgAyAJSxsiBEUNACAEQQFrIQ8CQCAEQQNxIhBFBEAgAiEADAELIAIhAANAIAAgBi8BGDsBACAAIAYvARo7AQIgBEEBayEEIABBBGohACAIQQFqIgggEEcNAAsLIA9BA0kNAANAIAAgBi8BGDsBACAAIAYvARo7AQIgACAGLwEYOwEEIAAgBi8BGjsBBiAAIAYvARg7AQggACAGLwEaOwEKIAAgBi8BGDsBDCAAIAYvARo7AQ4gAEEQaiEAIARBBGsiBA0ACwsgAyAJSwRAIAUgAyAJa0ECdGohAANAIAUgBigBGDYBACAFQQRqIgUgAEcNAAsgByAANgIUDAILIAcgAiADQQJ0ajYCFAwBCyACBEAgByACNgIUIAIQBiAHQQA2AhggB0IANwIQQQAhAAsCQCADQYCAgIAETw0AIABBAXUiAiADIAIgA0sbQf////8DIABB/P///wdJGyIAQYCAgIAETw0AIAcgAEECdCIAEAki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QYCAgHxxakGAgIB8cXIiCDYCACADIAQgB2oiB0ECdGoiASAJIAEoAgAiAWpB////A3EgCCABQYCAgHxxakGAgIB8cXIiATYCACAEIAdqIQcgD0ECaiIPIBZHDQALCyAQRQ0AIAMgB0ECdGoiByABIAcoAgAiB2pB////A3EgASAHQYCAgHxxakGAgIB8cXI2AgALIANBBGohAyARQQFqIhEgBEcNAAsLIAVFDQIgBEEBayIBQX5xIRIgAUEBcSEJQQAhESAEQQJJIQgDQAJAIAgNACAAKAIAIQNBACEPQQEhASAEQQJHBEADQCAAIAFBAnRqIgogCigCACIHQYCAgHxxIANqQYCAgHxxIAMgB2oiB0H///8DcXIiAzYCACAKIAMgCigCBCIDQYCAgHxxakGAgIB8cSADIAdqQf///wNxciIDNgIEIAFBAmohASAPQQJqIg8gEkcNAAsLIAlFDQAgACABQQJ0aiIBIAEoAgAiAUGAgIB8cSADakGAgIB8cSABIANqQf///wNxcjYCAAsgACAEQQJ0aiEAIBFBAWoiESAFRw0ACwwCC0GTDEH/CEGaB0GUCBAAAAsgBARAIAVBAmshECAFQQFrIgFBfnEhCiABQQFxIRIgBUECSSEJIAAhAwNAAkAgCQ0AIARBAUcEQEEAIQcgBCEBIBAEQANAIAMgAUEDdGoiCCADIAEgBGtBA3RqKQMAIiMgCCkDACIkfCIlQv////////8HgyAjICRCgICAgICAgHiDfEKAgICAgICAeIOEIiM3AwAgAyABIARqIghBA3RqIgEgJSABKQMAIiR8Qv////////8HgyAjICRCgICAgICAgHiDfEKAgICAgICAeIOENwMAIAQgCGohASAHQQJqIgcgCkcNAAsLIBJFDQEgAyABQQN0aiIHIAMgASAEa0EDdGopAwAiIyAHKQMAIiR8Qv////////8HgyAjICRCgICAgICAgHiDfEKAgICAgICAeIOENwMADAELIAMpAwAhI0EAIQcgBCEBIBAEQANAIAMgAUEDdGoiCCAjIAgpAwAiJHwiJUL/////////B4MgIyAkQoCAgICAgIB4g3xCgICAgICAgHiDhCIjNwMAIAMgASAEaiIIQQN0aiIBICUgASkDACIkfEL/////////B4MgIyAkQoCAgICAgIB4g3xCgICAgICAgHiDhCIjNwMAIAQgCGohASAHQQJqIgcgCkcNAAsLIBJFDQAgAyABQQN0aiIBICMgASkDACIkfEL/////////B4MgIyAkQoCAgICAgIB4g3xCgICAgICAgHiDhDcDAAsgA0EIaiEDIA9BAWoiDyAERw0ACwsgBUUNACAEQQFrIgFBfnEhEiABQQFxIQlBACEPIARBAkkhCANAAkAgCA0AIAApAwAhI0EAIQdBASEDIARBAkcEQANAIAAgA0EDdGoiASABKQMAIiRCgICAgICAgHiDICN8QoCAgICAgIB4gyAjICR8IiVC/////////weDhCIjNwMAIAEgIyABKQMIIiRCgICAgICAgHiDfEKAgICAgICAeIMgJCAlfEL/////////B4OEIiM3AwggA0ECaiEDIAdBAmoiByASRw0ACwsgCUUNACAAIANBA3RqIgEgASkDACIkQoCAgICAgIB4gyAjfEKAgICAgICAeIMgIyAkfEL/////////B4OENwMACyAAIARBA3RqIQAgD0EBaiIPIAVHDQALCyAfQQVGBEAgBiAaEFALIBgEQCAYIAY2AgAMAQsgBhAGCyAGQQBHDAILQY4LQbwIQfIEQZQIEAAACwwECyEeDAELAn8gDEEMaiEVQQAhDiAAQQJJBEAgDCgCFCIKIAwoAhAiEmsiA0EDdSIPIB8QLEYEQEEBIABBAkZBAXQgAEEBRhshHgJAIA8gBCAFbCIYbBASIgFFDQAgGARAIA9BASAPQQFLGyIAQX5xIQkgAEEBcSEIIAwoAhAhFkEAIREgA0EQSSEHA0ACQCAKIBJGDQBBACEAQQAhECAHRQRAA0AgASAWIABBA3QiBmoiAygCACAOamogAygCBCARai0AADoAACABIBYgBkEIcmoiAygCACAOamogAygCBCARai0AADoAACAAQQJqIQAgEEECaiIQIAlHDQALCyAIRQ0AIAEgFiAAQQN0aiIAKAIAIA5qaiAAKAIEIBFqLQAAOgAACyAOIA9qIQ4gEUEBaiIRIBhHDQALCyABIQBBACERAkAgHkUNAAJAAkACQCAfQQVrDgIAAgELAkAgHkECRw0AIAVFDQAgBEEBcSEWIARBAmtBfnEhECAEQQNJIQogACEDA0ACQCAKDQAgAygCBCEOQQAhD0ECIQYgBEEDRwRAA0AgAyAGQQJ0IhJqIgcgBygCACIHQYCAgHxxIA5qQYCAgHxxIAcgDmoiCUH///8DcXIiCDYCACADIBJBBHJqIgcgBygCACIHQYCAgHxxIAhqQYCAgHxxIAcgCWpB////A3FyIg42AgAgBkECaiEGIA9BAmoiDyAQRw0ACwsgFkUNACADIAZBAnRqIgYgBigCACIGQYCAgHxxIA5qQYCAgHxxIAYgDmpB////A3FyNgIACyADIARBAnRqIQMgEUEBaiIRIAVHDQALCyAeQQBMDQIgBUUNAiAEQQFrIgNBfnEhCiADQQFxIRJBACERIARBAkkhCQNAAkAgCQ0AIAAoAgAhDkEAIQ9BASEGIARBAkcEQANAIAAgBkECdGoiECAQKAIAIgNBgICAfHEgDmpBgICAfHEgAyAOaiIIQf///wNxciIHNgIAIBAgByAQKAIEIgNBgICAfHFqQYCAgHxxIAMgCGpB////A3FyIg42AgQgBkECaiEGIA9BAmoiDyAKRw0ACwsgEkUNACAAIAZBAnRqIgMgAygCACIDQYCAgHxxIA5qQYCAgHxxIAMgDmpB////A3FyNgIACyAAIARBAnRqIQAgEUEBaiIRIAVHDQALDAILQZMMQf8IQYEGQasLEAAACwJAIB5BAkcNACAFRQ0AIARBAXEhCiAEQQJrQX5xIRIgBEEDSSEJIAAhBgNAAkAgCQ0AIAYpAwghI0EAIQNBAiEOIARBA0cEQANAIAYgDkEDdCIIaiIHIAcpAwAiJEKAgICAgICAeIMgI3xCgICAgICAgHiDICMgJHwiJUL/////////B4OEIiM3AwAgBiAIQQhyaiIHICMgBykDACIkQoCAgICAgIB4g3xCgICAgICAgHiDICQgJXxC/////////weDhCIjNwMAIA5BAmohDiADQQJqIgMgEkcNAAsLIApFDQAgBiAOQQN0aiIDIAMpAwAiJEKAgICAgICAeIMgI3xCgICAgICAgHiDICMgJHxC/////////weDhDcDAAsgBiAEQQN0aiEGIBFBAWoiESAFRw0ACwsgHkEATA0AIAVFDQAgBEEBayIDQX5xIQkgA0EBcSEIQQAhBiAEQQJJIQcDQAJAIAcNACAAKQMAISNBACEDQQEhDiAEQQJHBEADQCAAIA5BA3RqIhIgEikDACIkQoCAgICAgIB4gyAjfEKAgICAgICAeIMgIyAkfCIlQv////////8Hg4QiIzcDACASICMgEikDCCIkQoCAgICAgIB4g3xCgICAgICAgHiDICQgJXxC/////////weDhCIjNwMIIA5BAmohDiADQQJqIgMgCUcNAAsLIAhFDQAgACAOQQN0aiIDIAMpAwAiJEKAgICAgICAeIMgI3xCgICAgICAgHiDICMgJHxC/////////weDhDcDAAsgACAEQQN0aiEAIAZBAWoiBiAFRw0ACwsgH0EFRgRAIAEgGBBQCyAVBEAgFSABNgIADAELIAEQBgsgAUEARwwCCwsMAwshHgsgDCgCECIAIAtHBEBBACEDIAAhCwNAIAsgA0EDdGooAgQQBiADQQFqIgMgDCgCFCAMKAIQIgtrQQN1SQ0ACwsgDCALNgIUIAwoAgwiAARAIAIgACAaICBsEAgaIAAQBgsgHgshASAMKAIQIgAEQCAAEAYLIAxBIGokACABDwtBBBACIgBB0As2AgAgAEG8EkEAEAEAC9cBAQV/AkAgAUUNACABQQFHBEAgAUF+cSEFA0AgACADQQJ0IgZqIgIgAigCACICQQF2QYCAgPwHcSACQf///wNxciACQQh0QYCAgIB4cXI2AgAgACAGQQRyaiICIAIoAgAiAkEBdkGAgID8B3EgAkH///8DcXIgAkEIdEGAgICAeHFyNgIAIANBAmohAyAEQQJqIgQgBUcNAAsLIAFBAXFFDQAgACADQQJ0aiIAIAAoAgAiAEEBdkGAgID8B3EgAEH///8DcXIgAEEIdEGAgICAeHFyNgIACwsLACAAEFIaIAAQBgsxAQJ/IABB7BU2AgAgACgCBEEMayIBIAEoAghBAWsiAjYCCCACQQBIBEAgARAGCyAAC90BAQR/IABBADYCCCAAQgA3AgACQCABBEAgAUGAgICABE8NASAAIAFBAnQiBBAJIgM2AgAgACADIARqIgQ2AgggAUEBa0H/////A3EhBSACKAIAIQIgAUEHcSIGBEBBACEBA0AgAyACNgIAIANBBGohAyABQQFqIgEgBkcNAAsLIAVBB08EQANAIAMgAjYCHCADIAI2AhggAyACNgIUIAMgAjYCECADIAI2AgwgAyACNgIIIAMgAjYCBCADIAI2AgAgA0EgaiIDIARHDQALCyAAIAQ2AgQLIAAPCxAKAAuaAQAgAEEBOgA1AkAgACgCBCACRw0AIABB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QmxvY2tTZXF1ZW5jZQByZXN0b3JlU2VxdWVuY2UAQXNzZXJ0aW9uIGZhaWxlZABzdGQ6OmJhZF9hbGxvYwBwcEJ5dGVbMF0gPT0gSFVGRk1BTl9OT1JNQUwAc2l6ZSA+IDAAUHVyZSB2aXJ0dWFsIGZ1bmN0aW9uIGNhbGxlZCEAQ250WkltYWdlIABMZXJjMiAAAAAAAAAAAHAGAAABAAAAAgAAAE42TGVyY05TMTBCaXRTdHVmZmVyRQAAALQJAABYBgAAAAAAAOgGAAAFAAAABgAAAAcAAAAIAAAACQAAAE42TGVyY05TOUNudFpJbWFnZUUATjZMZXJjTlM2VEltYWdlSU5TXzRDbnRaRUVFAE42TGVyY05TNUltYWdlRQC0CQAAxAYAANwJAACoBgAA1AYAANwJAACUBgAA3AYAAAAAAADcBgAACgAAAAsAAAAMAAAACAAAAAkAAAAAAAAAMAcAAA0AAAAOAAAATjZMZXJjTlM1TGVyYzJFALQJAAAgBwAAAAAAAGAHAAAPAAAAEAAAAE42TGVyY05TMTFCaXRTdHVmZmVyMkUAALQJAABIBwAAAAAAAIwHAAARAAAAEgAAAE42TGVyY05TN0JpdE1hc2tFAAAAtAkAAHgHAABOMTBfX2N4eGFiaXYxMTZfX3NoaW1fdHlwZV9pbmZvRQAAAADcCQAAlAcAAFgLAABOMTBfX2N4eGFiaXYxMTdfX2NsYXNzX3R5cGVfaW5mb0UAAADcCQAAxAcAALgHAABOMTBfX2N4eGFiaXYxMTdfX3BiYXNlX3R5cGVfaW5mb0UAAADcCQAA9AcAALgHAABOMTBfX2N4eGFiaXYxMTlfX3BvaW50ZXJfdHlwZV9pbmZvRQDcCQAAJAgAABgIAABOMTBfX2N4eGFiaXYxMjBfX2Z1bmN0aW9uX3R5cGVfaW5mb0UAAAAA3AkAAFQIAAC4BwAATjEwX19jeHhhYml2MTI5X19wb2ludGVyX3RvX21lbWJlcl90eXBlX2luZm9FAAAA3AkAAIgIAAAYCAAAAAAAAAgJAAATAAAAFAAAABUAAAAWAAAAFwAAAE4xMF9fY3h4YWJpdjEyM19fZnVuZGFtZW50YWxfdHlwZV9pbmZvRQDcCQAA4AgAALgHAAB2AAAAzAgAABQJAABEbgAAzAgAACAJAABjAAAAzAgAACwJAABQS2MAOAoAADgJAAABAAAAMAkAAGgAAADMCAAATAkAAGEAAADMCAAAWAkAAHMAAADMCAAAZAkAAHQAAADMCAAAcAkAAGkAAADMCAAAfAkAAGoAAADMCAAAiAkAAGYAAADMCAAAlAkAAGQAAADMCAAAoAkAAAAAAADoBwAAEwAAABgAAAAVAAAAFgAAABkAAAAaAAAAGwAAABwAAAAAAAAAJAoAABMAAAAdAAAAFQAAABYAAAAZAAAAHgAAAB8AAAAgAAAATjEwX19jeHhhYml2MTIwX19zaV9jbGFzc190eXBlX2luZm9FAAAAANwJAAD8CQAA6AcAAAAAAABICAAAEwAAACEAAAAVAAAAFgAAACIAAAAAAAAAsAoAAAQAAAAjAAAAJAAAAAAAAADYCgAABAAAACUAAAAmAAAAAAAAAJgKAAAEAAAAJwAAACgAAABTdDlleGNlcHRpb24AAAAAtAkAAIgKAABTdDliYWRfYWxsb2MAAAAA3AkAAKAKAACYCgAAU3QyMGJhZF9hcnJheV9uZXdfbGVuZ3RoAAAAANwJAAC8CgAAsAoAAAAAAAAICwAAAwAAACkAAAAqAAAAU3QxMWxvZ2ljX2Vycm9yANwJAAD4CgAAmAoAAAAAAAA8CwAAAwAAACsAAAAqAAAAU3QxMmxlbmd0aF9lcnJvcgAAAADcCQAAKAsAAAgLAABTdDl0eXBlX2luZm8AAAAAtAkAAEgLAEHgFgsDYA1Q", import.meta.url).toString();
    function fA(e) {
      try {
        if (e == b && n)
          return new Uint8Array(n);
        if (R)
          return R(e);
        throw "both async and sync fetching of the wasm failed";
      } catch (h) {
        gA(h);
      }
    }
    function pA() {
      if (!n && (B || i)) {
        if (typeof fetch == "function" && !NA(b))
          return fetch(b, { credentials: "same-origin" }).then(function(e) {
            if (!e.ok)
              throw "failed to load wasm binary file at '" + b + "'";
            return e.arrayBuffer();
          }).catch(function() {
            return fA(b);
          });
        if (w)
          return new Promise(function(e, h) {
            w(
              b,
              function(K) {
                e(new Uint8Array(K));
              },
              h
            );
          });
      }
      return Promise.resolve().then(function() {
        return fA(b);
      });
    }
    function mA() {
      var e = { a: JA };
      function h(G, k) {
        var O = G.exports;
        g.asm = O, d = g.asm.g, u(d.buffer), f = g.asm.m, BA(g.asm.h), _();
      }
      nA();
      function K(G) {
        h(G.instance);
      }
      function m(G) {
        return pA().then(function(k) {
          return WebAssembly.instantiate(k, e);
        }).then(function(k) {
          return k;
        }).then(G, function(k) {
          F("failed to asynchronously prepare wasm: " + k), gA(k);
        });
      }
      function D() {
        return !n && typeof WebAssembly.instantiateStreaming == "function" && !RA(b) && !NA(b) && !o && typeof fetch == "function" ? fetch(b, { credentials: "same-origin" }).then(function(G) {
          var k = WebAssembly.instantiateStreaming(G, e);
          return k.then(K, function(O) {
            return F("wasm streaming compile failed: " + O), F("falling back to ArrayBuffer instantiation"), m(K);
          });
        }) : m(K);
      }
      if (g.instantiateWasm)
        try {
          var r = g.instantiateWasm(e, h);
          return r;
        } catch (G) {
          return F("Module.instantiateWasm callback failed with error: " + G), !1;
        }
      return D().catch(E), {};
    }
    function FA(e) {
      for (; e.length > 0; ) {
        var h = e.shift();
        if (typeof h == "function") {
          h(g);
          continue;
        }
        var K = h.func;
        typeof K == "number" ? h.arg === void 0 ? OA(K)() : OA(K)(h.arg) : K(h.arg === void 0 ? null : h.arg);
      }
    }
    var GA = [];
    function OA(e) {
      var h = GA[e];
      return h || (e >= GA.length && (GA.length = e + 1), GA[e] = h = f.get(e)), h;
    }
    function WA(e, h, K, m) {
      gA(
        "Assertion failed: " + L(e) + ", at: " + [
          h ? L(h) : "unknown filename",
          K,
          m ? L(m) : "unknown function"
        ]
      );
    }
    function UA(e) {
      return KA(e + 24) + 24;
    }
    function yA(e) {
      this.excPtr = e, this.ptr = e - 24, this.set_type = function(h) {
        x[this.ptr + 4 >> 2] = h;
      }, this.get_type = function() {
        return x[this.ptr + 4 >> 2];
      }, this.set_destructor = function(h) {
        x[this.ptr + 8 >> 2] = h;
      }, this.get_destructor = function() {
        return x[this.ptr + 8 >> 2];
      }, this.set_refcount = function(h) {
        J[this.ptr >> 2] = h;
      }, this.set_caught = function(h) {
        h = h ? 1 : 0, Y[this.ptr + 12 >> 0] = h;
      }, this.get_caught = function() {
        return Y[this.ptr + 12 >> 0] != 0;
      }, this.set_rethrown = function(h) {
        h = h ? 1 : 0, Y[this.ptr + 13 >> 0] = h;
      }, this.get_rethrown = function() {
        return Y[this.ptr + 13 >> 0] != 0;
      }, this.init = function(h, K) {
        this.set_adjusted_ptr(0), this.set_type(h), this.set_destructor(K), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
      }, this.add_ref = function() {
        var h = J[this.ptr >> 2];
        J[this.ptr >> 2] = h + 1;
      }, this.release_ref = function() {
        var h = J[this.ptr >> 2];
        return J[this.ptr >> 2] = h - 1, h === 1;
      }, this.set_adjusted_ptr = function(h) {
        x[this.ptr + 16 >> 2] = h;
      }, this.get_adjusted_ptr = function() {
        return x[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        var h = PA(this.get_type());
        if (h)
          return x[this.excPtr >> 2];
        var K = this.get_adjusted_ptr();
        return K !== 0 ? K : this.excPtr;
      };
    }
    function II(e, h, K) {
      var m = new yA(e);
      throw m.init(h, K), e;
    }
    function gI() {
      gA("");
    }
    function TA(e, h, K) {
      l.copyWithin(e, h, h + K);
    }
    function QI() {
      return 2147483648;
    }
    function bA(e) {
      try {
        return d.grow(e - U.byteLength + 65535 >>> 16), u(d.buffer), 1;
      } catch {
      }
    }
    function ZA(e) {
      var h = l.length;
      e = e >>> 0;
      var K = QI();
      if (e > K)
        return !1;
      let m = (O, X) => O + (X - O % X) % X;
      for (var D = 1; D <= 4; D *= 2) {
        var r = h * (1 + 0.2 / D);
        r = Math.min(r, e + 100663296);
        var G = Math.min(K, m(Math.max(e, r), 65536)), k = bA(G);
        if (k)
          return !0;
      }
      return !1;
    }
    var JA = {
      a: WA,
      c: UA,
      b: II,
      d: gI,
      f: TA,
      e: ZA
    };
    mA(), g.___wasm_call_ctors = function() {
      return (g.___wasm_call_ctors = g.asm.h).apply(null, arguments);
    }, g._lerc_getBlobInfo = function() {
      return (g._lerc_getBlobInfo = g.asm.i).apply(null, arguments);
    }, g._lerc_getDataRanges = function() {
      return (g._lerc_getDataRanges = g.asm.j).apply(null, arguments);
    }, g._lerc_decode = function() {
      return (g._lerc_decode = g.asm.k).apply(null, arguments);
    }, g._lerc_decode_4D = function() {
      return (g._lerc_decode_4D = g.asm.l).apply(null, arguments);
    };
    var KA = g._malloc = function() {
      return (KA = g._malloc = g.asm.n).apply(null, arguments);
    };
    g._free = function() {
      return (g._free = g.asm.o).apply(null, arguments);
    };
    var PA = g.___cxa_is_pointer_type = function() {
      return (PA = g.___cxa_is_pointer_type = g.asm.p).apply(
        null,
        arguments
      );
    }, wA;
    function EI(e) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
    }
    QA = function e() {
      wA || YA(), wA || (QA = e);
    };
    function YA(e) {
      if (v > 0 || (j(), v > 0))
        return;
      function h() {
        wA || (wA = !0, g.calledRun = !0, !S && (CA(), I(g), g.onRuntimeInitialized && g.onRuntimeInitialized(), IA()));
      }
      g.setStatus ? (g.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          g.setStatus("");
        }, 1), h();
      }, 1)) : h();
    }
    if (g.run = YA, g.preInit)
      for (typeof g.preInit == "function" && (g.preInit = [g.preInit]); g.preInit.length > 0; )
        g.preInit.pop()();
    return YA(), g.ready;
  };
})();
const Ag = [
  {
    pixelType: "S8",
    size: 1,
    ctor: Int8Array,
    range: [-128, 128]
  },
  {
    pixelType: "U8",
    size: 1,
    ctor: Uint8Array,
    range: [0, 255]
  },
  {
    pixelType: "S16",
    size: 2,
    ctor: Int16Array,
    range: [-32768, 32767]
  },
  {
    pixelType: "U16",
    size: 2,
    ctor: Uint16Array,
    range: [0, 65536]
  },
  {
    pixelType: "S32",
    size: 4,
    ctor: Int32Array,
    range: [-2147483648, 2147483647]
  },
  {
    pixelType: "U32",
    size: 4,
    ctor: Uint32Array,
    range: [0, 4294967296]
  },
  {
    pixelType: "F32",
    size: 4,
    ctor: Float32Array,
    range: [-34027999387901484e22, 34027999387901484e22]
  },
  {
    pixelType: "F64",
    size: 8,
    ctor: Float64Array,
    range: [-17976931348623157e292, 17976931348623157e292]
  }
];
let zA = null, Ig = !1;
function NQ(Q = {}) {
  if (zA)
    return zA;
  const A = Q.locateFile || ((g, I) => `${I}${g}`);
  return zA = RQ({ locateFile: A }).then(
    (g) => g.ready.then(() => {
      rQ(g), Ig = !0;
    })
  ), zA;
}
function yQ() {
  return Ig;
}
const $A = {
  getBlobInfo: null,
  decode: null
};
function wQ(Q) {
  return (Q >> 3 << 3) + 16;
}
function eA(Q, A, g) {
  g.set(Q.slice(A, A + g.length));
}
function rQ(Q) {
  const { _malloc: A, _free: g, _lerc_getBlobInfo: I, _lerc_getDataRanges: E, _lerc_decode_4D: C, asm: B } = Q;
  let i;
  const o = Object.values(B).find((s) => s && "buffer" in s && s.buffer === Q.HEAPU8.buffer), t = (s) => {
    const a = s.map((y) => wQ(y)), w = a.reduce((y, c) => y + c), R = A(w);
    i = new Uint8Array(o.buffer);
    let N = a[0];
    a[0] = R;
    for (let y = 1; y < a.length; y++) {
      const c = a[y];
      a[y] = a[y - 1] + N, N = c;
    }
    return a;
  };
  $A.getBlobInfo = (s) => {
    const R = new Uint8Array(48), N = new Uint8Array(3 * 8), [y, c, F] = t([s.length, R.length, N.length]);
    i.set(s, y), i.set(R, c), i.set(N, F);
    let n = I(y, s.length, c, F, 12, 3);
    if (n)
      throw g(y), `lerc-getBlobInfo: error code is ${n}`;
    i = new Uint8Array(o.buffer), eA(i, c, R), eA(i, F, N);
    const d = new Uint32Array(R.buffer), S = new Float64Array(N.buffer), [
      M,
      q,
      L,
      U,
      Y,
      l,
      J,
      x,
      u,
      f,
      T
    ] = d, W = {
      version: M,
      dimCount: L,
      width: U,
      height: Y,
      validPixelCount: J,
      bandCount: l,
      blobSize: x,
      maskCount: u,
      depthCount: f,
      dataType: q,
      minValue: S[0],
      maxValue: S[1],
      maxZerror: S[2],
      statistics: [],
      bandCountWithNoData: T
    };
    if (T)
      return g(y), W;
    if (f === 1 && l === 1)
      return g(y), W.statistics.push({
        minValue: S[0],
        maxValue: S[1]
      }), W;
    const P = f * l * 8, j = new Uint8Array(P), CA = new Uint8Array(P);
    let IA = y, z = 0, BA = 0, tA = !1;
    if (i.byteLength < y + P * 2 ? (g(y), tA = !0, [IA, z, BA] = t([s.length, P, P]), i.set(s, IA)) : [z, BA] = t([P, P]), i.set(j, z), i.set(CA, BA), n = E(IA, s.length, f, l, z, BA), n)
      throw g(IA), tA || g(z), `lerc-getDataRanges: error code is ${n}`;
    i = new Uint8Array(o.buffer), eA(i, z, j), eA(i, BA, CA);
    const v = new Float64Array(j.buffer), QA = new Float64Array(CA.buffer), nA = W.statistics;
    for (let _ = 0; _ < l; _++)
      if (f > 1) {
        const gA = v.slice(_ * f, (_ + 1) * f), aA = QA.slice(_ * f, (_ + 1) * f), RA = Math.min.apply(null, gA), NA = Math.max.apply(null, aA);
        nA.push({
          minValue: RA,
          maxValue: NA,
          dimStats: { minValues: gA, maxValues: aA },
          depthStats: { minValues: gA, maxValues: aA }
        });
      } else
        nA.push({
          minValue: v[_],
          maxValue: QA[_]
        });
    return g(IA), tA || g(z), W;
  }, $A.decode = (s, a) => {
    const { maskCount: w, depthCount: R, bandCount: N, width: y, height: c, dataType: F, bandCountWithNoData: n } = a, d = Ag[F], S = y * c, M = new Uint8Array(S * N), q = S * R * N * d.size, L = new Uint8Array(q), U = new Uint8Array(N), Y = new Uint8Array(N * 8), [l, J, x, u, f] = t([
      s.length,
      M.length,
      L.length,
      U.length,
      Y.length
    ]);
    i.set(s, l), i.set(M, J), i.set(L, x), i.set(U, u), i.set(Y, f);
    const T = C(
      l,
      s.length,
      w,
      J,
      R,
      y,
      c,
      N,
      F,
      x,
      u,
      f
    );
    if (T)
      throw g(l), `lerc-decode: error code is ${T}`;
    i = new Uint8Array(o.buffer), eA(i, x, L), eA(i, J, M);
    let W = null;
    if (n) {
      eA(i, u, U), eA(i, f, Y), W = [];
      const P = new Float64Array(Y.buffer);
      for (let j = 0; j < U.length; j++)
        W.push(U[j] ? P[j] : null);
    }
    return g(l), {
      data: L,
      maskData: M,
      noDataValues: W
    };
  };
}
function cQ(Q, A, g, I, E) {
  if (g < 2)
    return Q;
  const C = new I(A * g);
  for (let B = 0, i = 0; B < A; B++)
    for (let o = 0, t = B; o < g; o++, t += A)
      C[t] = Q[i++];
  return C;
}
function nQ(Q, A = {}) {
  var g, I;
  const E = (g = A.inputOffset) !== null && g !== void 0 ? g : 0, C = Q instanceof Uint8Array ? Q.subarray(E) : new Uint8Array(Q, E), B = $A.getBlobInfo(C), { data: i, maskData: o } = $A.decode(C, B), { width: t, height: s, bandCount: a, dimCount: w, depthCount: R, dataType: N, maskCount: y, statistics: c } = B, F = Ag[N], n = new F.ctor(i.buffer), d = [], S = [], M = t * s, q = M * R, L = (I = A.returnInterleaved) !== null && I !== void 0 ? I : A.returnPixelInterleavedDims;
  for (let u = 0; u < a; u++) {
    const f = n.subarray(u * q, (u + 1) * q);
    if (L)
      d.push(f);
    else {
      const T = cQ(f, M, R, F.ctor);
      d.push(T);
    }
    S.push(o.subarray(u * q, (u + 1) * q));
  }
  const U = y === 0 ? null : y === 1 ? S[0] : new Uint8Array(M);
  if (y > 1) {
    U.set(S[0]);
    for (let u = 1; u < S.length; u++) {
      const f = S[u];
      for (let T = 0; T < M; T++)
        U[T] = U[T] & f[T];
    }
  }
  const { noDataValue: Y } = A, l = Y != null && F.range[0] <= Y && F.range[1] >= Y;
  if (y > 0 && l)
    for (let u = 0; u < a; u++) {
      const f = d[u], T = S[u] || U;
      for (let W = 0; W < M; W++)
        T[W] === 0 && (f[W] = Y);
    }
  const J = y === a && a > 1 ? S : null, { pixelType: x } = F;
  return {
    width: t,
    height: s,
    pixelType: x,
    statistics: c,
    pixels: d,
    mask: U,
    dimCount: w,
    depthCount: R,
    bandMasks: J
  };
}
class gg {
  /**
   * Size of the grid to be generated.
   */
  gridSize;
  /**
   * Number of triangles to be used in the tile.
   */
  numTriangles;
  /**
   * Number of triangles in the parent node.
   */
  numParentTriangles;
  /**
   * Indices of the triangles faces.
   */
  indices;
  /**
   * Coordinates of the points composing the mesh.
   */
  coords;
  /**
   * Constructor for the generator.
   *
   * @param gridSize - Size of the grid.
   */
  constructor(A = 257) {
    this.gridSize = A;
    const g = A - 1;
    if (g & g - 1)
      throw new Error(`Expected grid size to be 2^n+1, got ${A}.`);
    this.numTriangles = g * g * 2 - 2, this.numParentTriangles = this.numTriangles - g * g, this.indices = new Uint32Array(this.gridSize * this.gridSize), this.coords = new Uint16Array(this.numTriangles * 4);
    for (let I = 0; I < this.numTriangles; I++) {
      let E = I + 2, C = 0, B = 0, i = 0, o = 0, t = 0, s = 0;
      for (E & 1 ? i = o = t = g : C = B = s = g; (E >>= 1) > 1; ) {
        const w = C + i >> 1, R = B + o >> 1;
        E & 1 ? (i = C, o = B, C = t, B = s) : (C = i, B = o, i = t, o = s), t = w, s = R;
      }
      const a = I * 4;
      this.coords[a + 0] = C, this.coords[a + 1] = B, this.coords[a + 2] = i, this.coords[a + 3] = o;
    }
  }
  createTile(A) {
    return new FQ(A, this);
  }
}
class FQ {
  /**
   * Pointer to the martini generator object.
   */
  martini;
  /**
   * Terrain to generate the tile for.
   */
  terrain;
  /**
   * Errors detected while creating the tile.
   */
  errors;
  constructor(A, g) {
    const I = g.gridSize;
    if (A.length !== I * I)
      throw new Error(
        `Expected terrain data of length ${I * I} (${I} x ${I}), got ${A.length}.`
      );
    this.terrain = A, this.martini = g, this.errors = new Float32Array(A.length), this.update();
  }
  update() {
    const { numTriangles: A, numParentTriangles: g, coords: I, gridSize: E } = this.martini, { terrain: C, errors: B } = this;
    for (let i = A - 1; i >= 0; i--) {
      const o = i * 4, t = I[o + 0], s = I[o + 1], a = I[o + 2], w = I[o + 3], R = t + a >> 1, N = s + w >> 1, y = R + N - s, c = N + t - R, F = (C[s * E + t] + C[w * E + a]) / 2, n = N * E + R, d = Math.abs(F - C[n]);
      if (B[n] = Math.max(B[n], d), i < g) {
        const S = (s + c >> 1) * E + (t + y >> 1), M = (w + c >> 1) * E + (a + y >> 1);
        B[n] = Math.max(B[n], B[S], B[M]);
      }
    }
  }
  getGeometryData(A = 0) {
    const { gridSize: g, indices: I } = this.martini, { errors: E } = this;
    let C = 0, B = 0;
    const i = g - 1;
    let o, t, s = 0;
    I.fill(0);
    function a(n, d, S, M, q, L) {
      const U = n + S >> 1, Y = d + M >> 1;
      Math.abs(n - q) + Math.abs(d - L) > 1 && E[Y * g + U] > A ? (a(q, L, n, d, U, Y), a(S, M, q, L, U, Y)) : (o = d * g + n, t = M * g + S, s = L * g + q, I[o] === 0 && (I[o] = ++C), I[t] === 0 && (I[t] = ++C), I[s] === 0 && (I[s] = ++C), B++);
    }
    a(0, 0, i, i, i, 0), a(i, i, 0, 0, 0, i);
    let w = C * 2, R = B * 3;
    const N = new Uint16Array(w), y = new Uint32Array(R);
    let c = 0;
    function F(n, d, S, M, q, L) {
      const U = n + S >> 1, Y = d + M >> 1;
      if (Math.abs(n - q) + Math.abs(d - L) > 1 && E[Y * g + U] > A)
        F(q, L, n, d, U, Y), F(S, M, q, L, U, Y);
      else {
        const l = I[d * g + n] - 1, J = I[M * g + S] - 1, x = I[L * g + q] - 1;
        N[2 * l] = n, N[2 * l + 1] = d, N[2 * J] = S, N[2 * J + 1] = M, N[2 * x] = q, N[2 * x + 1] = L, y[c++] = l, y[c++] = J, y[c++] = x;
      }
    }
    return F(0, 0, i, i, i, 0), F(i, i, 0, 0, 0, i), {
      attributes: this._getMeshAttributes(this.terrain, N, y),
      indices: y
    };
  }
  _getMeshAttributes(A, g, I) {
    const E = Math.floor(Math.sqrt(A.length)), C = E - 1, B = g.length / 2, i = new Float32Array(B * 3), o = new Float32Array(B * 2);
    for (let s = 0; s < B; s++) {
      const a = g[s * 2], w = g[s * 2 + 1], R = w * E + a;
      i[3 * s + 0] = a / C - 0.5, i[3 * s + 1] = 0.5 - w / C, i[3 * s + 2] = A[R], o[2 * s + 0] = a / C, o[2 * s + 1] = 1 - w / C;
    }
    const t = ZI(i, I);
    return {
      position: { value: i, size: 3 },
      texcoord: { value: o, size: 2 },
      normal: { value: t, size: 3 }
    };
  }
}
const GQ = {
  0: 7e3,
  1: 6e3,
  2: 5e3,
  3: 4e3,
  4: 3e3,
  5: 2500,
  6: 2e3,
  7: 1500,
  8: 800,
  9: 500,
  10: 200,
  11: 100,
  12: 40,
  13: 12,
  14: 5,
  15: 2,
  16: 1,
  17: 0.5,
  18: 0.2,
  19: 0.1,
  20: 0.05
};
function SQ(Q, A, g) {
  let I = Q;
  g[2] - g[0] < 1 && (I = MQ(Q, g));
  const { demArray: E, width: C } = I, i = new gg(C).createTile(E), o = GQ[A] / 1e3 || 0, t = i.getGeometryData(o);
  return AI(t.attributes, t.indices, 1);
}
function MQ(Q, A) {
  function g(i, o, t, s, a, w, R, N) {
    const y = new Float32Array(a * w);
    for (let F = 0; F < w; F++)
      for (let n = 0; n < a; n++) {
        const d = (F + s) * o + (n + t), S = F * a + n;
        y[S] = i[d];
      }
    const c = new Float32Array(N * R);
    for (let F = 0; F < N; F++)
      for (let n = 0; n < R; n++) {
        const d = F * N + n, S = Math.round(n * w / N), q = Math.round(F * a / R) * a + S;
        c[d] = y[q];
      }
    return c;
  }
  const I = LQ(A, Q.width), E = I.sw + 1, C = I.sh + 1;
  return { demArray: g(
    Q.demArray,
    Q.width,
    I.sx,
    I.sy,
    I.sw,
    I.sh,
    E,
    C
  ), width: E, height: C };
}
function LQ(Q, A) {
  const g = Math.floor(Q[0] * A), I = Math.floor(Q[1] * A), E = Math.floor((Q[2] - Q[0]) * A), C = Math.floor((Q[3] - Q[1]) * A);
  return { sx: g, sy: I, sw: E, sh: C };
}
const Qg = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIFMoLi4uZSl7Y29uc3QgdD1lLG89dCYmdC5sZW5ndGg+MSYmdFswXS5jb25zdHJ1Y3Rvcnx8bnVsbDtpZighbyl0aHJvdyBuZXcgRXJyb3IoJyJjb25jYXRlbmF0ZVR5cGVkQXJyYXlzIiAtIGluY29ycmVjdCBxdWFudGl0eSBvZiBhcmd1bWVudHMgb3IgYXJndW1lbnRzIGhhdmUgaW5jb21wYXRpYmxlIGRhdGEgdHlwZXMnKTtjb25zdCBzPXQucmVkdWNlKChpLHIpPT5pK3IubGVuZ3RoLDApLG49bmV3IG8ocyk7bGV0IGM9MDtmb3IoY29uc3QgaSBvZiB0KW4uc2V0KGksYyksYys9aS5sZW5ndGg7cmV0dXJuIG59ZnVuY3Rpb24gRChlLHQsbyxzKXtjb25zdCBuPU8odCksYz1uLmxlbmd0aCxpPW5ldyBGbG9hdDMyQXJyYXkoYyo2KSxyPW5ldyBGbG9hdDMyQXJyYXkoYyo0KSxoPW5ldyB0LmNvbnN0cnVjdG9yKGMqNiksdT1uZXcgRmxvYXQzMkFycmF5KGMqNik7Zm9yKGxldCBhPTA7YTxjO2ErKykkKHtlZGdlOm5bYV0sZWRnZUluZGV4OmEsYXR0cmlidXRlczplLHNraXJ0SGVpZ2h0Om8sbmV3UG9zaXRpb246aSxuZXdUZXhjb29yZDA6cixuZXdUcmlhbmdsZXM6aCxuZXdOb3JtYWxzOnV9KTtlLnBvc2l0aW9uLnZhbHVlPVMoZS5wb3NpdGlvbi52YWx1ZSxpKSxlLnRleGNvb3JkLnZhbHVlPVMoZS50ZXhjb29yZC52YWx1ZSxyKSxlLm5vcm1hbC52YWx1ZT1TKGUubm9ybWFsLnZhbHVlLHUpO2NvbnN0IGw9Uyh0LGgpO3JldHVybnthdHRyaWJ1dGVzOmUsaW5kaWNlczpsfX1mdW5jdGlvbiBPKGUpe2NvbnN0IHQ9W10sbz1BcnJheS5pc0FycmF5KGUpP2U6QXJyYXkuZnJvbShlKTtmb3IobGV0IG49MDtuPG8ubGVuZ3RoO24rPTMpe2NvbnN0IGM9b1tuXSxpPW9bbisxXSxyPW9bbisyXTt0LnB1c2goW2MsaV0sW2kscl0sW3IsY10pfXQuc29ydCgoW24sY10sW2kscl0pPT57Y29uc3QgaD1NYXRoLm1pbihuLGMpLHU9TWF0aC5taW4oaSxyKTtyZXR1cm4gaCE9PXU/aC11Ok1hdGgubWF4KG4sYyktTWF0aC5tYXgoaSxyKX0pO2NvbnN0IHM9W107Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspbisxPHQubGVuZ3RoJiZ0W25dWzBdPT09dFtuKzFdWzFdJiZ0W25dWzFdPT09dFtuKzFdWzBdP24rKzpzLnB1c2godFtuXSk7cmV0dXJuIHN9ZnVuY3Rpb24gJCh7ZWRnZTplLGVkZ2VJbmRleDp0LGF0dHJpYnV0ZXM6byxza2lydEhlaWdodDpzLG5ld1Bvc2l0aW9uOm4sbmV3VGV4Y29vcmQwOmMsbmV3VHJpYW5nbGVzOmksbmV3Tm9ybWFsczpyfSl7Y29uc3QgaD1vLnBvc2l0aW9uLnZhbHVlLmxlbmd0aCx1PXQqMixsPXUrMTtuLnNldChvLnBvc2l0aW9uLnZhbHVlLnN1YmFycmF5KGVbMF0qMyxlWzBdKjMrMyksdSozKSxuW3UqMysyXT1uW3UqMysyXS1zLG4uc2V0KG8ucG9zaXRpb24udmFsdWUuc3ViYXJyYXkoZVsxXSozLGVbMV0qMyszKSxsKjMpLG5bbCozKzJdPW5bbCozKzJdLXMsYy5zZXQoby50ZXhjb29yZC52YWx1ZS5zdWJhcnJheShlWzBdKjIsZVswXSoyKzIpLHUqMiksYy5zZXQoby50ZXhjb29yZC52YWx1ZS5zdWJhcnJheShlWzFdKjIsZVsxXSoyKzIpLGwqMik7Y29uc3QgYT10KjIqMztpW2FdPWVbMF0saVthKzFdPWgvMytsLGlbYSsyXT1lWzFdLGlbYSszXT1oLzMrbCxpW2ErNF09ZVswXSxpW2ErNV09aC8zK3UsclthXT0wLHJbYSsxXT0wLHJbYSsyXT0xLHJbYSszXT0wLHJbYSs0XT0wLHJbYSs1XT0xfWZ1bmN0aW9uIFUoZSx0KXtjb25zdCBvPW5ldyBGbG9hdDMyQXJyYXkoZS5sZW5ndGgpO2ZvcihsZXQgcz0wO3M8dC5sZW5ndGg7cys9Myl7Y29uc3Qgbj10W3NdKjMsYz10W3MrMV0qMyxpPXRbcysyXSozLHI9ZVtuXSxoPWVbbisxXSx1PWVbbisyXSxsPWVbY10sYT1lW2MrMV0seT1lW2MrMl0sTT1lW2ldLGc9ZVtpKzFdLHY9ZVtpKzJdLHc9bC1yLGY9YS1oLGQ9eS11LG09TS1yLHg9Zy1oLHA9di11LEE9ZipwLWQqeCx6PWQqbS13KnAsRT13KngtZiptLEk9TWF0aC5zcXJ0KEEqQSt6KnorRSpFKSxGPVswLDAsMV07aWYoST4wKXtjb25zdCBUPTEvSTtGWzBdPUEqVCxGWzFdPXoqVCxGWzJdPUUqVH1mb3IobGV0IFQ9MDtUPDM7VCsrKW9bbitUXT1vW2MrVF09b1tpK1RdPUZbVF19cmV0dXJuIG99Y2xhc3MgcXtncmlkU2l6ZTtudW1UcmlhbmdsZXM7bnVtUGFyZW50VHJpYW5nbGVzO2luZGljZXM7Y29vcmRzO2NvbnN0cnVjdG9yKHQ9MjU3KXt0aGlzLmdyaWRTaXplPXQ7Y29uc3Qgbz10LTE7aWYobyZvLTEpdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBncmlkIHNpemUgdG8gYmUgMl5uKzEsIGdvdCAke3R9LmApO3RoaXMubnVtVHJpYW5nbGVzPW8qbyoyLTIsdGhpcy5udW1QYXJlbnRUcmlhbmdsZXM9dGhpcy5udW1UcmlhbmdsZXMtbypvLHRoaXMuaW5kaWNlcz1uZXcgVWludDMyQXJyYXkodGhpcy5ncmlkU2l6ZSp0aGlzLmdyaWRTaXplKSx0aGlzLmNvb3Jkcz1uZXcgVWludDE2QXJyYXkodGhpcy5udW1UcmlhbmdsZXMqNCk7Zm9yKGxldCBzPTA7czx0aGlzLm51bVRyaWFuZ2xlcztzKyspe2xldCBuPXMrMixjPTAsaT0wLHI9MCxoPTAsdT0wLGw9MDtmb3IobiYxP3I9aD11PW86Yz1pPWw9bzsobj4+PTEpPjE7KXtjb25zdCB5PWMrcj4+MSxNPWkraD4+MTtuJjE/KHI9YyxoPWksYz11LGk9bCk6KGM9cixpPWgscj11LGg9bCksdT15LGw9TX1jb25zdCBhPXMqNDt0aGlzLmNvb3Jkc1thKzBdPWMsdGhpcy5jb29yZHNbYSsxXT1pLHRoaXMuY29vcmRzW2ErMl09cix0aGlzLmNvb3Jkc1thKzNdPWh9fWNyZWF0ZVRpbGUodCl7cmV0dXJuIG5ldyBMKHQsdGhpcyl9fWNsYXNzIEx7bWFydGluaTt0ZXJyYWluO2Vycm9ycztjb25zdHJ1Y3Rvcih0LG8pe2NvbnN0IHM9by5ncmlkU2l6ZTtpZih0Lmxlbmd0aCE9PXMqcyl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHRlcnJhaW4gZGF0YSBvZiBsZW5ndGggJHtzKnN9ICgke3N9IHggJHtzfSksIGdvdCAke3QubGVuZ3RofS5gKTt0aGlzLnRlcnJhaW49dCx0aGlzLm1hcnRpbmk9byx0aGlzLmVycm9ycz1uZXcgRmxvYXQzMkFycmF5KHQubGVuZ3RoKSx0aGlzLnVwZGF0ZSgpfXVwZGF0ZSgpe2NvbnN0e251bVRyaWFuZ2xlczp0LG51bVBhcmVudFRyaWFuZ2xlczpvLGNvb3JkczpzLGdyaWRTaXplOm59PXRoaXMubWFydGluaSx7dGVycmFpbjpjLGVycm9yczppfT10aGlzO2ZvcihsZXQgcj10LTE7cj49MDtyLS0pe2NvbnN0IGg9cio0LHU9c1toKzBdLGw9c1toKzFdLGE9c1toKzJdLHk9c1toKzNdLE09dSthPj4xLGc9bCt5Pj4xLHY9TStnLWwsdz1nK3UtTSxmPShjW2wqbit1XStjW3kqbithXSkvMixkPWcqbitNLG09TWF0aC5hYnMoZi1jW2RdKTtpZihpW2RdPU1hdGgubWF4KGlbZF0sbSkscjxvKXtjb25zdCB4PShsK3c+PjEpKm4rKHUrdj4+MSkscD0oeSt3Pj4xKSpuKyhhK3Y+PjEpO2lbZF09TWF0aC5tYXgoaVtkXSxpW3hdLGlbcF0pfX19Z2V0R2VvbWV0cnlEYXRhKHQ9MCl7Y29uc3R7Z3JpZFNpemU6byxpbmRpY2VzOnN9PXRoaXMubWFydGluaSx7ZXJyb3JzOm59PXRoaXM7bGV0IGM9MCxpPTA7Y29uc3Qgcj1vLTE7bGV0IGgsdSxsPTA7cy5maWxsKDApO2Z1bmN0aW9uIGEoZCxtLHgscCxBLHope2NvbnN0IEU9ZCt4Pj4xLEk9bStwPj4xO01hdGguYWJzKGQtQSkrTWF0aC5hYnMobS16KT4xJiZuW0kqbytFXT50PyhhKEEseixkLG0sRSxJKSxhKHgscCxBLHosRSxJKSk6KGg9bSpvK2QsdT1wKm8reCxsPXoqbytBLHNbaF09PT0wJiYoc1toXT0rK2MpLHNbdV09PT0wJiYoc1t1XT0rK2MpLHNbbF09PT0wJiYoc1tsXT0rK2MpLGkrKyl9YSgwLDAscixyLHIsMCksYShyLHIsMCwwLDAscik7bGV0IHk9YyoyLE09aSozO2NvbnN0IGc9bmV3IFVpbnQxNkFycmF5KHkpLHY9bmV3IFVpbnQzMkFycmF5KE0pO2xldCB3PTA7ZnVuY3Rpb24gZihkLG0seCxwLEEseil7Y29uc3QgRT1kK3g+PjEsST1tK3A+PjE7aWYoTWF0aC5hYnMoZC1BKStNYXRoLmFicyhtLXopPjEmJm5bSSpvK0VdPnQpZihBLHosZCxtLEUsSSksZih4LHAsQSx6LEUsSSk7ZWxzZXtjb25zdCBGPXNbbSpvK2RdLTEsVD1zW3Aqbyt4XS0xLEM9c1t6Km8rQV0tMTtnWzIqRl09ZCxnWzIqRisxXT1tLGdbMipUXT14LGdbMipUKzFdPXAsZ1syKkNdPUEsZ1syKkMrMV09eix2W3crK109Rix2W3crK109VCx2W3crK109Q319cmV0dXJuIGYoMCwwLHIscixyLDApLGYocixyLDAsMCwwLHIpLHthdHRyaWJ1dGVzOnRoaXMuX2dldE1lc2hBdHRyaWJ1dGVzKHRoaXMudGVycmFpbixnLHYpLGluZGljZXM6dn19X2dldE1lc2hBdHRyaWJ1dGVzKHQsbyxzKXtjb25zdCBuPU1hdGguZmxvb3IoTWF0aC5zcXJ0KHQubGVuZ3RoKSksYz1uLTEsaT1vLmxlbmd0aC8yLHI9bmV3IEZsb2F0MzJBcnJheShpKjMpLGg9bmV3IEZsb2F0MzJBcnJheShpKjIpO2ZvcihsZXQgbD0wO2w8aTtsKyspe2NvbnN0IGE9b1tsKjJdLHk9b1tsKjIrMV0sTT15Km4rYTtyWzMqbCswXT1hL2MtLjUsclszKmwrMV09LjUteS9jLHJbMypsKzJdPXRbTV0saFsyKmwrMF09YS9jLGhbMipsKzFdPTEteS9jfWNvbnN0IHU9VShyLHMpO3JldHVybntwb3NpdGlvbjp7dmFsdWU6cixzaXplOjN9LHRleGNvb3JkOnt2YWx1ZTpoLHNpemU6Mn0sbm9ybWFsOnt2YWx1ZTp1LHNpemU6M319fX1jb25zdCBWPXswOjdlMywxOjZlMywyOjVlMywzOjRlMyw0OjNlMyw1OjI1MDAsNjoyZTMsNzoxNTAwLDg6ODAwLDk6NTAwLDEwOjIwMCwxMToxMDAsMTI6NDAsMTM6MTIsMTQ6NSwxNToyLDE2OjEsMTc6LjUsMTg6LjIsMTk6LjEsMjA6LjA1fTtmdW5jdGlvbiBZKGUsdCxvKXtsZXQgcz1lO29bMl0tb1swXTwxJiYocz1rKGUsbykpO2NvbnN0e2RlbUFycmF5Om4sd2lkdGg6Y309cyxyPW5ldyBxKGMpLmNyZWF0ZVRpbGUobiksaD1WW3RdLzFlM3x8MCx1PXIuZ2V0R2VvbWV0cnlEYXRhKGgpO3JldHVybiBEKHUuYXR0cmlidXRlcyx1LmluZGljZXMsMSl9ZnVuY3Rpb24gayhlLHQpe2Z1bmN0aW9uIG8ocixoLHUsbCxhLHksTSxnKXtjb25zdCB2PW5ldyBGbG9hdDMyQXJyYXkoYSp5KTtmb3IobGV0IGY9MDtmPHk7ZisrKWZvcihsZXQgZD0wO2Q8YTtkKyspe2NvbnN0IG09KGYrbCkqaCsoZCt1KSx4PWYqYStkO3ZbeF09clttXX1jb25zdCB3PW5ldyBGbG9hdDMyQXJyYXkoZypNKTtmb3IobGV0IGY9MDtmPGc7ZisrKWZvcihsZXQgZD0wO2Q8TTtkKyspe2NvbnN0IG09ZipnK2QseD1NYXRoLnJvdW5kKGQqeS9nKSxBPU1hdGgucm91bmQoZiphL00pKmEreDt3W21dPXZbQV19cmV0dXJuIHd9Y29uc3Qgcz1HKHQsZS53aWR0aCksbj1zLnN3KzEsYz1zLnNoKzE7cmV0dXJue2RlbUFycmF5Om8oZS5kZW1BcnJheSxlLndpZHRoLHMuc3gscy5zeSxzLnN3LHMuc2gsbixjKSx3aWR0aDpuLGhlaWdodDpjfX1mdW5jdGlvbiBHKGUsdCl7Y29uc3Qgbz1NYXRoLmZsb29yKGVbMF0qdCkscz1NYXRoLmZsb29yKGVbMV0qdCksbj1NYXRoLmZsb29yKChlWzJdLWVbMF0pKnQpLGM9TWF0aC5mbG9vcigoZVszXS1lWzFdKSp0KTtyZXR1cm57c3g6byxzeTpzLHN3Om4sc2g6Y319c2VsZi5vbm1lc3NhZ2U9ZT0+e2NvbnN0IHQ9ZS5kYXRhLG89WSh0LmRlbURhdGEsdC56LHQuY2xpcEJvdW5kcyk7c2VsZi5wb3N0TWVzc2FnZShvKSxzZWxmLmNsb3NlKCl9fSkoKTsK", dQ = (Q) => Uint8Array.from(atob(Q), (A) => A.charCodeAt(0)), UI = typeof self < "u" && self.Blob && new Blob([dQ(Qg)], { type: "text/javascript;charset=utf-8" });
function kQ(Q) {
  let A;
  try {
    if (A = UI && (self.URL || self.webkitURL).createObjectURL(UI), !A) throw "";
    const g = new Worker(A, {
      name: Q?.name
    });
    return g.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(A);
    }), g;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Qg,
      {
        name: Q?.name
      }
    );
  } finally {
    A && (self.URL || self.webkitURL).revokeObjectURL(A);
  }
}
const UQ = "data:application/wasm;base64,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Tg0AA0AgCiACQQN0ai8BAEUNASACQQFqIgIgA0cNAAsgAyECDAELIAIhBSACIANODQEDQCAKIAVBA3RqLwEADQIgBUEBaiIFIANHDQALCyADIAJrIgUgCSAFIAlKIgUbIQkgAiAIIAUbIQgMAgsgBSACayILIAkgCSALSCILGyEJIAIgCCALGyEIIAMgBSICSg0ACwsgAyAJayAAIARrSARAIAYgCCAJajYCFCAGIAMgCGoiADYCECAGKAIUIQQLQQAhAiAAIARMDQAgACAEayIFQQFxIQkCQCAEQQFqIABGBEBBACEADAELIAVBfnEhBUEAIQADQCAAIAogBEEAIAMgAyAEShtrQQN0ai8BACIIIAAgCEobIgAgCiAEQQFqIghBACADIAMgCEoba0EDdGovAQAiCCAAIAhKGyEAIARBAmohBCACQQJqIgIgBUcNAAsLIAkEQCAAIAogBEEAIAMgAyAEShtrQQN0ai8BACICIAAgAkobIQALIABBIWsiAkFgTwRAIAYgADYCDAsgAkFfSyECCwJAIAIiCkUNACAHKAIIIQwgBygCBCENIAEgBigCDCILIAcoAhwiDiALIA5IGyIANgIAIAcgBygCEDYCFCAGQX82AhhBACEFQQAhCAJAQQEgAHQiAyAHKAIYIgAgBygCECICa0ECdU0EQAJAIAcoAhQiBSACa0ECdSIJIAMgAyAJSxsiBEUNACAEQQFrIQ8CQCAEQQNxIhBFBEAgAiEADAELIAIhAANAIAAgBi8BGDsBACAAIAYvARo7AQIgBEEBayEEIABBBGohACAIQQFqIgggEEcNAAsLIA9BA0kNAANAIAAgBi8BGDsBACAAIAYvARo7AQIgACAGLwEYOwEEIAAgBi8BGjsBBiAAIAYvARg7AQggACAGLwEaOwEKIAAgBi8BGDsBDCAAIAYvARo7AQ4gAEEQaiEAIARBBGsiBA0ACwsgAyAJSwRAIAUgAyAJa0ECdGohAANAIAUgBigBGDYBACAFQQRqIgUgAEcNAAsgByAANgIUDAILIAcgAiADQQJ0ajYCFAwBCyACBEAgByACNgIUIAIQBiAHQQA2AhggB0IANwIQQQAhAAsCQCADQYCAgIAETw0AIABBAXUiAiADIAIgA0sbQf////8DIABB/P///wdJGyIAQYCAgIAETw0AIAcgAEECdCIAEAki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QYCAgHxxakGAgIB8cXIiCDYCACADIAQgB2oiB0ECdGoiASAJIAEoAgAiAWpB////A3EgCCABQYCAgHxxakGAgIB8cXIiATYCACAEIAdqIQcgD0ECaiIPIBZHDQALCyAQRQ0AIAMgB0ECdGoiByABIAcoAgAiB2pB////A3EgASAHQYCAgHxxakGAgIB8cXI2AgALIANBBGohAyARQQFqIhEgBEcNAAsLIAVFDQIgBEEBayIBQX5xIRIgAUEBcSEJQQAhESAEQQJJIQgDQAJAIAgNACAAKAIAIQNBACEPQQEhASAEQQJHBEADQCAAIAFBAnRqIgogCigCACIHQYCAgHxxIANqQYCAgHxxIAMgB2oiB0H///8DcXIiAzYCACAKIAMgCigCBCIDQYCAgHxxakGAgIB8cSADIAdqQf///wNxciIDNgIEIAFBAmohASAPQQJqIg8gEkcNAAsLIAlFDQAgACABQQJ0aiIBIAEoAgAiAUGAgIB8cSADakGAgIB8cSABIANqQf///wNxcjYCAAsgACAEQQJ0aiEAIBFBAWoiESAFRw0ACwwCC0GTDEH/CEGaB0GUCBAAAAsgBARAIAVBAmshECAFQQFrIgFBfnEhCiABQQFxIRIgBUECSSEJIAAhAwNAAkAgCQ0AIARBAUcEQEEAIQcgBCEBIBAEQANAIAMgAUEDdGoiCCADIAEgBGtBA3RqKQMAIiMgCCkDACIkfCIlQv////////8HgyAjICRCgICAgICAgHiDfEKAgICAgICAeIOEIiM3AwAgAyABIARqIghBA3RqIgEgJSABKQMAIiR8Qv////////8HgyAjICRCgICAgICAgHiDfEKAgICAgICAeIOENwMAIAQgCGohASAHQQJqIgcgCkcNAAsLIBJFDQEgAyABQQN0aiIHIAMgASAEa0EDdGopAwAiIyAHKQMAIiR8Qv////////8HgyAjICRCgICAgICAgHiDfEKAgICAgICAeIOENwMADAELIAMpAwAhI0EAIQcgBCEBIBAEQANAIAMgAUEDdGoiCCAjIAgpAwAiJHwiJUL/////////B4MgIyAkQoCAgICAgIB4g3xCgICAgICAgHiDhCIjNwMAIAMgASAEaiIIQQN0aiIBICUgASkDACIkfEL/////////B4MgIyAkQoCAgICAgIB4g3xCgICAgICAgHiDhCIjNwMAIAQgCGohASAHQQJqIgcgCkcNAAsLIBJFDQAgAyABQQN0aiIBICMgASkDACIkfEL/////////B4MgIyAkQoCAgICAgIB4g3xCgICAgICAgHiDhDcDAAsgA0EIaiEDIA9BAWoiDyAERw0ACwsgBUUNACAEQQFrIgFBfnEhEiABQQFxIQlBACEPIARBAkkhCANAAkAgCA0AIAApAwAhI0EAIQdBASEDIARBAkcEQANAIAAgA0EDdGoiASABKQMAIiRCgICAgICAgHiDICN8QoCAgICAgIB4gyAjICR8IiVC/////////weDhCIjNwMAIAEgIyABKQMIIiRCgICAgICAgHiDfEKAgICAgICAeIMgJCAlfEL/////////B4OEIiM3AwggA0ECaiEDIAdBAmoiByASRw0ACwsgCUUNACAAIANBA3RqIgEgASkDACIkQoCAgICAgIB4gyAjfEKAgICAgICAeIMgIyAkfEL/////////B4OENwMACyAAIARBA3RqIQAgD0EBaiIPIAVHDQALCyAfQQVGBEAgBiAaEFALIBgEQCAYIAY2AgAMAQsgBhAGCyAGQQBHDAILQY4LQbwIQfIEQZQIEAAACwwECyEeDAELAn8gDEEMaiEVQQAhDiAAQQJJBEAgDCgCFCIKIAwoAhAiEmsiA0EDdSIPIB8QLEYEQEEBIABBAkZBAXQgAEEBRhshHgJAIA8gBCAFbCIYbBASIgFFDQAgGARAIA9BASAPQQFLGyIAQX5xIQkgAEEBcSEIIAwoAhAhFkEAIREgA0EQSSEHA0ACQCAKIBJGDQBBACEAQQAhECAHRQRAA0AgASAWIABBA3QiBmoiAygCACAOamogAygCBCARai0AADoAACABIBYgBkEIcmoiAygCACAOamogAygCBCARai0AADoAACAAQQJqIQAgEEECaiIQIAlHDQALCyAIRQ0AIAEgFiAAQQN0aiIAKAIAIA5qaiAAKAIEIBFqLQAAOgAACyAOIA9qIQ4gEUEBaiIRIBhHDQALCyABIQBBACERAkAgHkUNAAJAAkACQCAfQQVrDgIAAgELAkAgHkECRw0AIAVFDQAgBEEBcSEWIARBAmtBfnEhECAEQQNJIQogACEDA0ACQCAKDQAgAygCBCEOQQAhD0ECIQYgBEEDRwRAA0AgAyAGQQJ0IhJqIgcgBygCACIHQYCAgHxxIA5qQYCAgHxxIAcgDmoiCUH///8DcXIiCDYCACADIBJBBHJqIgcgBygCACIHQYCAgHxxIAhqQYCAgHxxIAcgCWpB////A3FyIg42AgAgBkECaiEGIA9BAmoiDyAQRw0ACwsgFkUNACADIAZBAnRqIgYgBigCACIGQYCAgHxxIA5qQYCAgHxxIAYgDmpB////A3FyNgIACyADIARBAnRqIQMgEUEBaiIRIAVHDQALCyAeQQBMDQIgBUUNAiAEQQFrIgNBfnEhCiADQQFxIRJBACERIARBAkkhCQNAAkAgCQ0AIAAoAgAhDkEAIQ9BASEGIARBAkcEQANAIAAgBkECdGoiECAQKAIAIgNBgICAfHEgDmpBgICAfHEgAyAOaiIIQf///wNxciIHNgIAIBAgByAQKAIEIgNBgICAfHFqQYCAgHxxIAMgCGpB////A3FyIg42AgQgBkECaiEGIA9BAmoiDyAKRw0ACwsgEkUNACAAIAZBAnRqIgMgAygCACIDQYCAgHxxIA5qQYCAgHxxIAMgDmpB////A3FyNgIACyAAIARBAnRqIQAgEUEBaiIRIAVHDQALDAILQZMMQf8IQYEGQasLEAAACwJAIB5BAkcNACAFRQ0AIARBAXEhCiAEQQJrQX5xIRIgBEEDSSEJIAAhBgNAAkAgCQ0AIAYpAwghI0EAIQNBAiEOIARBA0cEQANAIAYgDkEDdCIIaiIHIAcpAwAiJEKAgICAgICAeIMgI3xCgICAgICAgHiDICMgJHwiJUL/////////B4OEIiM3AwAgBiAIQQhyaiIHICMgBykDACIkQoCAgICAgIB4g3xCgICAgICAgHiDICQgJXxC/////////weDhCIjNwMAIA5BAmohDiADQQJqIgMgEkcNAAsLIApFDQAgBiAOQQN0aiIDIAMpAwAiJEKAgICAgICAeIMgI3xCgICAgICAgHiDICMgJHxC/////////weDhDcDAAsgBiAEQQN0aiEGIBFBAWoiESAFRw0ACwsgHkEATA0AIAVFDQAgBEEBayIDQX5xIQkgA0EBcSEIQQAhBiAEQQJJIQcDQAJAIAcNACAAKQMAISNBACEDQQEhDiAEQQJHBEADQCAAIA5BA3RqIhIgEikDACIkQoCAgICAgIB4gyAjfEKAgICAgICAeIMgIyAkfCIlQv////////8Hg4QiIzcDACASICMgEikDCCIkQoCAgICAgIB4g3xCgICAgICAgHiDICQgJXxC/////////weDhCIjNwMIIA5BAmohDiADQQJqIgMgCUcNAAsLIAhFDQAgACAOQQN0aiIDIAMpAwAiJEKAgICAgICAeIMgI3xCgICAgICAgHiDICMgJHxC/////////weDhDcDAAsgACAEQQN0aiEAIAZBAWoiBiAFRw0ACwsgH0EFRgRAIAEgGBBQCyAVBEAgFSABNgIADAELIAEQBgsgAUEARwwCCwsMAwshHgsgDCgCECIAIAtHBEBBACEDIAAhCwNAIAsgA0EDdGooAgQQBiADQQFqIgMgDCgCFCAMKAIQIgtrQQN1SQ0ACwsgDCALNgIUIAwoAgwiAARAIAIgACAaICBsEAgaIAAQBgsgHgshASAMKAIQIgAEQCAAEAYLIAxBIGokACABDwtBBBACIgBB0As2AgAgAEG8EkEAEAEAC9cBAQV/AkAgAUUNACABQQFHBEAgAUF+cSEFA0AgACADQQJ0IgZqIgIgAigCACICQQF2QYCAgPwHcSACQf///wNxciACQQh0QYCAgIB4cXI2AgAgACAGQQRyaiICIAIoAgAiAkEBdkGAgID8B3EgAkH///8DcXIgAkEIdEGAgICAeHFyNgIAIANBAmohAyAEQQJqIgQgBUcNAAsLIAFBAXFFDQAgACADQQJ0aiIAIAAoAgAiAEEBdkGAgID8B3EgAEH///8DcXIgAEEIdEGAgICAeHFyNgIACwsLACAAEFIaIAAQBgsxAQJ/IABB7BU2AgAgACgCBEEMayIBIAEoAghBAWsiAjYCCCACQQBIBEAgARAGCyAAC90BAQR/IABBADYCCCAAQgA3AgACQCABBEAgAUGAgICABE8NASAAIAFBAnQiBBAJIgM2AgAgACADIARqIgQ2AgggAUEBa0H/////A3EhBSACKAIAIQIgAUEHcSIGBEBBACEBA0AgAyACNgIAIANBBGohAyABQQFqIgEgBkcNAAsLIAVBB08EQANAIAMgAjYCHCADIAI2AhggAyACNgIUIAMgAjYCECADIAI2AgwgAyACNgIIIAMgAjYCBCADIAI2AgAgA0EgaiIDIARHDQALCyAAIAQ2AgQLIAAPCxAKAAuaAQAgAEEBOgA1AkAgACgCBCACRw0AIABBAToANAJAIAAoAhAiAkUEQCAAQQE2AiQgACADNgIYIAAgATYCECADQQFHDQIgACgCMEEBRg0BDAILIAEgAkYEQCAAKAIYIgJBAkYEQCAAIAM2AhggAyECCyAAKAIwQQFHDQIgAkEBRg0BDAILIAAgACgCJEEBajYCJAsgAEEBOgA2CwtLAQF/AkAgAUUNACABQbgREA8iAUUNACABKAIIIAAoAghBf3NxDQAgACgCDCABKAIMQQAQC0UNACAAKAIQIAEoAhBBABALIQILIAIL+gQBBH8jAEFAaiIGJAACQCABQaQSQQAQCwRAIAJBADYCAEEBIQQMAQsCQCAAIAEgAC0ACEEYcQR/QQEFIAFFDQEgAUGYEBAPIgNFDQEgAy0ACEEYcUEARwsQCyEFCyAFBEBBASEEIAIoAgAiAEUNASACIAAoAgA2AgAMAQsCQCABRQ0AIAFByBAQDyIFRQ0BIAIoAgAiAQRAIAIgASgCADYCAAsgBSgCCCIDIAAoAggiAUF/c3FBB3ENASADQX9zIAFxQeAAcQ0BQQEhBCAAKAIMIAUoAgxBABALDQEgACgCDEGYEkEAEAsEQCAFKAIMIgBFDQIgAEH8EBAPRSEEDAILIAAoAgwiA0UNAEEAIQQgA0HIEBAPIgEEQCAALQAIQQFxRQ0CAn8gBSgCDCEAQQAhAgJAA0BBACAARQ0CGiAAQcgQEA8iA0UNASADKAIIIAEoAghBf3NxDQFBASABKAIMIAMoAgxBABALDQIaIAEtAAhBAXFFDQEgASgCDCIARQ0BIABByBAQDyIBBEAgAygCDCEADAELCyAAQbgREA8iAEUNACAAIAMoAgwQVSECCyACCyEEDAILIANBuBEQDyIBBEAgAC0ACEEBcUUNAiABIAUoAgwQVSEEDAILIANB6A8QDyIBRQ0BIAUoAgwiAEUNASAAQegPEA8iA0UNASAGQQhqIgBBBHJBAEE0EAcaIAZBATYCOCAGQX82AhQgBiABNgIQIAYgAzYCCCADIAAgAigCAEEBIAMoAgAoAhwRBQACQCAGKAIgIgBBAUcNACACKAIARQ0AIAIgBigCGDYCAAsgAEEBRiEEDAELQQAhBAsgBkFAayQAIAQLMQAgACABKAIIQQAQCwRAIAEgAiADEC4PCyAAKAIIIgAgASACIAMgACgCACgCHBEFAAsYACAAIAEoAghBABALBEAgASACIAMQLgsLngEBAn8jAEFAaiIDJAACf0EBIAAgAUEAEAsNABpBACABRQ0AGkEAIAFB6A8QDyIBRQ0AGiADQQhqIgRBBHJBAEE0EAcaIANBATYCOCADQX82AhQgAyAANgIQIAMgATYCCCABIAQgAigCAEEBIAEoAgAoAhwRBQAgAygCICIAQQFGBEAgAiADKAIYNgIACyAAQQFGCyEAIANBQGskACAACwoAIAAgAUEAEAsLBQAQAwALdAEBf0ECIQwCQCAHQQBMDQAgBkEATA0AIAVBAEwNACAEQQBMDQAgCEEHSw0AIABFDQAgAUUNACAJRQ0AIAIgB0cgAkECT3ENAEEAIAJBAEogAxsNACAAIAEgAiADIAQgBSAGIAcgCCAJIAogCxA2IQwLIAwLdAEBf0ECIQoCQCAHQQBMDQAgBkEATA0AIAVBAEwNACAEQQBMDQAgCEEHSw0AIABFDQAgAUUNACAJRQ0AIAIgB0cgAkECT3ENAEEAIAJBAEogAxsNACAAIAEgAiADIAQgBSAGIAcgCCAJQQBBABA2IQoLIAoLUgECfyMAQUBqIgYkAEECIQcCQCADQQBMDQAgAkEATA0AIABFDQAgAUUNACAERQ0AIAVFDQAgACABIAYgBCAFIAIgA2wQFCEHCyAGQUBrJAAgBwvLBAECfyMAQUBqIgYkAEECIQcCQCAARQ0AIAFFDQAgAiADckUNACAEQQBMIAVBAExxDQAgACABIAZBAEEAQQAQFCIHDQACQCACRQ0AQQEhAAJAIARBAEwEQEEAIQAMAQsgAkEAIARBAnQQByAGKAIANgIACyAAIARIBEAgAiAAQQJ0aiAGKAIkNgIAIABBAWohAAsgACAESARAIAIgAEECdGogBigCBDYCACAAQQFqIQALIAAgBEgEQCACIABBAnRqIAYoAgg2AgAgAEEBaiEACyAAIARIBEAgAiAAQQJ0aiAGKAIMNgIAIABBAWohAAsgACAESARAIAIgAEECdGogBigCFDYCACAAQQFqIQALIAAgBEgEQCACIABBAnRqIAYoAhA2AgAgAEEBaiEACyAAIARIBEAgAiAAQQJ0aiAGKAIYNgIAIABBAWohAAsgACAESARAIAIgAEECdGogBigCHDYCACAAQQFqIQALIAAgBEgEQCACIABBAnRqIAYoAgQ2AgAgAEEBaiEACyAAIARODQAgAiAAQQJ0aiAGKAIgNgIACyADRQ0AQQAhAAJAIAVBAEwEQCAGKAIEQQFKIAYoAiBBAEpxIQEMAQtBASEAIANBACAFQQN0EAdEAAAAAAAA8L8gBisDKCAGKAIEQQFKIAYoAiBBAEpxIgEbOQMACyAAIAVIBEAgAyAAQQN0akQAAAAAAADwvyAGKwMwIAEbOQMAIABBAWohAAsgACAFTg0AIAMgAEEDdGogBisDODkDAAsgBkFAayQAIAcLEgAgAEHwDjYCACAAEBAgABAGC08BAX8gAEHADjYCACAAKAIcIgEEQCAAIAE2AiAgARAGCyAAKAIQIgEEQCAAIAE2AhQgARAGCyAAKAIEIgEEQCAAIAE2AgggARAGCyAAEAYLCAAgABAREAYLEAAgAEHwDjYCACAAEBAgAAsDAAALIQAgAEH8DTYCACAAKAIQEAYgAEIANwIIIABBADYCECAACxcAIAAoAhAQBiAAQgA3AgggAEEANgIQC6kBAQR/AkAgACABRg0AIAEoAggiA0EATA0AIAEoAgwiBEEATA0AIAAoAhAhAgJAAkAgACgCCCADRw0AIAAoAgwgBEcNACACDQELIAIQBiAAQgA3AgggACADIARsQQN0EBIiAjYCECACRQ0BIAAgBDYCDCAAIAM2AggLIAEoAhAiBUUNACACIAUgAyAEbEEDdBAIGiAAIAEoAgw2AgwgACABKQIENwIECyAACyYAIABBCjoACyAAQbMMKQAANwAAIABBuwwvAAA7AAggAEEAOgAKCzQBAX8gAEGADTYCACAAKAJIIgEEQCAAIAE2AkwgARAGCyAAQfwNNgIAIAAoAhAQBiAAEAYLQAEBfyAAQYANNgIAIAAoAkgiAQRAIAAgATYCTCABEAYLIABB/A02AgAgACgCEBAGIABCADcDCCAAQQA2AhAgAAslAQF/IABB0Aw2AgAgACgCBCIBBEAgACABNgIIIAEQBgsgABAGCyMBAX8gAEHQDDYCACAAKAIEIgEEQCAAIAE2AgggARAGCyAACwcAIAAoAgQLBQBB7AoLBQBB4QsLBQBBzwoLFQAgAEUEQEEADwsgAEHIEBAPQQBHCxoAIAAgASgCCCAFEAsEQCABIAIgAyAEEFQLCzcAIAAgASgCCCAFEAsEQCABIAIgAyAEEFQPCyAAKAIIIgAgASACIAMgBCAFIAAoAgAoAhQRCgALpwEAIAAgASgCCCAEEAsEQAJAIAEoAgQgAkcNACABKAIcQQFGDQAgASADNgIcCw8LAkAgACABKAIAIAQQC0UNAAJAIAIgASgCEEcEQCABKAIUIAJHDQELIANBAUcNASABQQE2AiAPCyABIAI2AhQgASADNgIgIAEgASgCKEEBajYCKAJAIAEoAiRBAUcNACABKAIYQQJHDQAgAUEBOgA2CyABQQQ2AiwLC4gCACAAIAEoAgggBBALBEACQCABKAIEIAJHDQAgASgCHEEBRg0AIAEgAzYCHAsPCwJAIAAgASgCACAEEAsEQAJAIAIgASgCEEcEQCABKAIUIAJHDQELIANBAUcNAiABQQE2AiAPCyABIAM2AiACQCABKAIsQQRGDQAgAUEAOwE0IAAoAggiACABIAIgAkEBIAQgACgCACgCFBEKACABLQA1BEAgAUEDNgIsIAEtADRFDQEMAwsgAUEENgIsCyABIAI2AhQgASABKAIoQQFqNgIoIAEoAiRBAUcNASABKAIYQQJHDQEgAUEBOgA2DwsgACgCCCIAIAEgAiADIAQgACgCACgCGBELAAsLC+4OAgBBgQgL3Q4BAQIBAgIDAQICAwIDAwRyZXQAcmVzdG9yZUNyb3NzQnl0ZXMAdmVjdG9yAGV4dHJhY3RfYnVmZmVyAC9ob21lL2pvaG4vRG9jdW1lbnRzL0NvZGUvbGVyYy1tYXN0ZXIvc3JjL0xlcmNMaWIvZnBsX0xlcmMyRXh0LmNwcAAvaG9tZS9qb2huL0RvY3VtZW50cy9Db2RlL2xlcmMtbWFzdGVyL3NyYy9MZXJjTGliL2ZwbF9Vbml0VHlwZXMuY3BwAC9ob21lL2pvaG4vRG9jdW1lbnRzL0NvZGUvbGVyYy1tYXN0ZXIvc3JjL0xlcmNMaWIvZnBsX0NvbXByZXNzaW9uLmNwcAAvaG9tZS9qb2huL0RvY3VtZW50cy9Db2RlL2xlcmMtbWFzdGVyL3NyYy9MZXJjTGliL2ZwbF9Fc3JpSHVmZm1hbi5jcHAAc3RkOjpleGNlcHRpb24ARGVjb2RlSHVmZm1hbgBiYWRfYXJyYXlfbmV3X2xlbmd0aABiYXNpY19zdHJpbmcAaW5wdXRfaW5fYnl0ZXMgPT0gYmxvY2tfc2l6ZQByZXN0b3JlQmxvY2tTZXF1ZW5jZQByZXN0b3JlU2VxdWVuY2UAQXNzZXJ0aW9uIGZhaWxlZABzdGQ6OmJhZF9hbGxvYwBwcEJ5dGVbMF0gPT0gSFVGRk1BTl9OT1JNQUwAc2l6ZSA+IDAAUHVyZSB2aXJ0dWFsIGZ1bmN0aW9uIGNhbGxlZCEAQ250WkltYWdlIABMZXJjMiAAAAAAAAAAAHAGAAABAAAAAgAAAE42TGVyY05TMTBCaXRTdHVmZmVyRQAAALQJAABYBgAAAAAAAOgGAAAFAAAABgAAAAcAAAAIAAAACQAAAE42TGVyY05TOUNudFpJbWFnZUUATjZMZXJjTlM2VEltYWdlSU5TXzRDbnRaRUVFAE42TGVyY05TNUltYWdlRQC0CQAAxAYAANwJAACoBgAA1AYAANwJAACUBgAA3AYAAAAAAADcBgAACgAAAAsAAAAMAAAACAAAAAkAAAAAAAAAMAcAAA0AAAAOAAAATjZMZXJjTlM1TGVyYzJFALQJAAAgBwAAAAAAAGAHAAAPAAAAEAAAAE42TGVyY05TMTFCaXRTdHVmZmVyMkUAALQJAABIBwAAAAAAAIwHAAARAAAAEgAAAE42TGVyY05TN0JpdE1hc2tFAAAAtAkAAHgHAABOMTBfX2N4eGFiaXYxMTZfX3NoaW1fdHlwZV9pbmZvRQAAAADcCQAAlAcAAFgLAABOMTBfX2N4eGFiaXYxMTdfX2NsYXNzX3R5cGVfaW5mb0UAAADcCQAAxAcAALgHAABOMTBfX2N4eGFiaXYxMTdfX3BiYXNlX3R5cGVfaW5mb0UAAADcCQAA9AcAALgHAABOMTBfX2N4eGFiaXYxMTlfX3BvaW50ZXJfdHlwZV9pbmZvRQDcCQAAJAgAABgIAABOMTBfX2N4eGFiaXYxMjBfX2Z1bmN0aW9uX3R5cGVfaW5mb0UAAAAA3AkAAFQIAAC4BwAATjEwX19jeHhhYml2MTI5X19wb2ludGVyX3RvX21lbWJlcl90eXBlX2luZm9FAAAA3AkAAIgIAAAYCAAAAAAAAAgJAAATAAAAFAAAABUAAAAWAAAAFwAAAE4xMF9fY3h4YWJpdjEyM19fZnVuZGFtZW50YWxfdHlwZV9pbmZvRQDcCQAA4AgAALgHAAB2AAAAzAgAABQJAABEbgAAzAgAACAJAABjAAAAzAgAACwJAABQS2MAOAoAADgJAAABAAAAMAkAAGgAAADMCAAATAkAAGEAAADMCAAAWAkAAHMAAADMCAAAZAkAAHQAAADMCAAAcAkAAGkAAADMCAAAfAkAAGoAAADMCAAAiAkAAGYAAADMCAAAlAkAAGQAAADMCAAAoAkAAAAAAADoBwAAEwAAABgAAAAVAAAAFgAAABkAAAAaAAAAGwAAABwAAAAAAAAAJAoAABMAAAAdAAAAFQAAABYAAAAZAAAAHgAAAB8AAAAgAAAATjEwX19jeHhhYml2MTIwX19zaV9jbGFzc190eXBlX2luZm9FAAAAANwJAAD8CQAA6AcAAAAAAABICAAAEwAAACEAAAAVAAAAFgAAACIAAAAAAAAAsAoAAAQAAAAjAAAAJAAAAAAAAADYCgAABAAAACUAAAAmAAAAAAAAAJgKAAAEAAAAJwAAACgAAABTdDlleGNlcHRpb24AAAAAtAkAAIgKAABTdDliYWRfYWxsb2MAAAAA3AkAAKAKAACYCgAAU3QyMGJhZF9hcnJheV9uZXdfbGVuZ3RoAAAAANwJAAC8CgAAsAoAAAAAAAAICwAAAwAAACkAAAAqAAAAU3QxMWxvZ2ljX2Vycm9yANwJAAD4CgAAmAoAAAAAAAA8CwAAAwAAACsAAAAqAAAAU3QxMmxlbmd0aF9lcnJvcgAAAADcCQAAKAsAAAgLAABTdDl0eXBlX2luZm8AAAAAtAkAAEgLAEHgFgsDYA1Q";
class JQ extends jI {
  dataType = "lerc";
  // 图像加载器
  fileLoader = new eI(p.manager);
  constructor() {
    super(), this.fileLoader.setResponseType("arraybuffer");
  }
  async decode(A) {
    yQ() || await NQ({
      locateFile: () => UQ
    });
    const { height: g, width: I, pixels: E } = nQ(A), C = new Float32Array(g * I);
    for (let B = 0; B < C.length; B++)
      C[B] = E[0][B] / 1e3;
    return { demArray: C, width: I, height: g };
  }
  doLoad(A, g, I, E) {
    this.fileLoader.load(
      A,
      async (C) => {
        const B = await this.decode(C);
        g(B);
      },
      void 0,
      I,
      E
    );
  }
  doPrase(A, g, I, E, C, B) {
    if (this.useWorker) {
      const i = new kQ();
      i.onmessage = (o) => {
        B(o.data);
      }, i.postMessage({ demData: A, z: E, clipBounds: C }, [A.demArray.buffer]);
    } else {
      const i = SQ(A, E, C);
      B(i);
    }
  }
}
p.registerGeometryLoader(new JQ());
const KQ = /* @__PURE__ */ new Map([
  ["centerX", Float64Array.BYTES_PER_ELEMENT],
  ["centerY", Float64Array.BYTES_PER_ELEMENT],
  ["centerZ", Float64Array.BYTES_PER_ELEMENT],
  ["minHeight", Float32Array.BYTES_PER_ELEMENT],
  ["maxHeight", Float32Array.BYTES_PER_ELEMENT],
  ["boundingSphereCenterX", Float64Array.BYTES_PER_ELEMENT],
  ["boundingSphereCenterY", Float64Array.BYTES_PER_ELEMENT],
  ["boundingSphereCenterZ", Float64Array.BYTES_PER_ELEMENT],
  ["boundingSphereRadius", Float64Array.BYTES_PER_ELEMENT],
  ["horizonOcclusionPointX", Float64Array.BYTES_PER_ELEMENT],
  ["horizonOcclusionPointY", Float64Array.BYTES_PER_ELEMENT],
  ["horizonOcclusionPointZ", Float64Array.BYTES_PER_ELEMENT]
]);
function CI(Q) {
  return Q >> 1 ^ -(Q & 1);
}
function YQ(Q) {
  let A = 0;
  const g = {};
  for (const [I, E] of KQ) {
    const C = E === 8 ? Q.getFloat64 : Q.getFloat32;
    g[I] = C.call(Q, A, !0), A += E;
  }
  return { header: g, headerEndPosition: A };
}
function lQ(Q, A) {
  let g = A;
  const I = 3, E = Q.getUint32(g, !0), C = new Uint16Array(E * I);
  g += Uint32Array.BYTES_PER_ELEMENT;
  const B = Uint16Array.BYTES_PER_ELEMENT, i = E * B, o = g, t = o + i, s = t + i;
  let a = 0, w = 0, R = 0;
  for (let N = 0; N < E; N++)
    a += CI(Q.getUint16(o + B * N, !0)), w += CI(Q.getUint16(t + B * N, !0)), R += CI(Q.getUint16(s + B * N, !0)), C[N] = a, C[N + E] = w, C[N + E * 2] = R;
  return g += i * 3, { vertexData: C, vertexDataEndPosition: g };
}
function uA(Q, A, g, I, E = !0) {
  let C;
  const B = structuredClone(Q);
  if (I === 2 ? C = new Uint16Array(B, A, g) : C = new Uint32Array(B, A, g), !E)
    return C;
  let i = 0;
  for (let o = 0; o < C.length; ++o) {
    const t = C[o];
    C[o] = i - t, Math.round(t) === 0 && ++i;
  }
  return C;
}
function qQ(Q, A, g) {
  let I = g;
  const B = A.length / 3 > 65536 ? Uint32Array.BYTES_PER_ELEMENT : Uint16Array.BYTES_PER_ELEMENT;
  I % B !== 0 && (I += B - I % B);
  const i = Q.getUint32(I, !0);
  I += Uint32Array.BYTES_PER_ELEMENT;
  const o = i * 3, t = uA(Q.buffer, I, o, B);
  return I += o * B, {
    triangleIndicesEndPosition: I,
    triangleIndices: t
  };
}
function HQ(Q, A, g) {
  let I = g;
  const B = A.length / 3 > 65536 ? Uint32Array.BYTES_PER_ELEMENT : Uint16Array.BYTES_PER_ELEMENT, i = Q.getUint32(I, !0);
  I += Uint32Array.BYTES_PER_ELEMENT;
  const o = uA(Q.buffer, I, i, B, !1);
  I += i * B;
  const t = Q.getUint32(I, !0);
  I += Uint32Array.BYTES_PER_ELEMENT;
  const s = uA(Q.buffer, I, t, B, !1);
  I += t * B;
  const a = Q.getUint32(I, !0);
  I += Uint32Array.BYTES_PER_ELEMENT;
  const w = uA(Q.buffer, I, a, B, !1);
  I += a * B;
  const R = Q.getUint32(I, !0);
  I += Uint32Array.BYTES_PER_ELEMENT;
  const N = uA(Q.buffer, I, R, B, !1);
  return I += R * B, {
    edgeIndicesEndPosition: I,
    westIndices: o,
    southIndices: s,
    eastIndices: w,
    northIndices: N
  };
}
function uQ(Q) {
  return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength);
}
function xQ(Q) {
  return Q.buffer.slice(
    Q.byteOffset,
    Q.byteOffset + Q.byteLength
  );
}
function fQ(Q, A) {
  const g = {};
  if (Q.byteLength <= A)
    return { extensions: g, extensionsEndPosition: A };
  let I = A;
  for (; I < Q.byteLength; ) {
    const E = Q.getUint8(I);
    I += Uint8Array.BYTES_PER_ELEMENT;
    const C = Q.getUint32(I, !0);
    I += Uint32Array.BYTES_PER_ELEMENT;
    const B = new DataView(Q.buffer, I, C);
    switch (E) {
      case 1: {
        g.vertexNormals = uQ(B);
        break;
      }
      case 2: {
        g.waterMask = xQ(B);
        break;
      }
    }
    I += C;
  }
  return { extensions: g, extensionsEndPosition: I };
}
const xA = {
  header: 0,
  vertices: 1,
  triangleIndices: 2,
  edgeIndices: 3,
  extensions: 4
}, JI = {
  maxDecodingStep: xA.extensions
};
function pQ(Q, A = JI) {
  const g = { ...JI, ...A }, I = new DataView(Q), { header: E, headerEndPosition: C } = YQ(I);
  if (g.maxDecodingStep < xA.vertices)
    return { header: E };
  const { vertexData: B, vertexDataEndPosition: i } = lQ(I, C);
  if (g.maxDecodingStep < xA.triangleIndices)
    return { header: E, vertexData: B };
  const { triangleIndices: o, triangleIndicesEndPosition: t } = qQ(
    I,
    B,
    i
  );
  if (g.maxDecodingStep < xA.edgeIndices)
    return { header: E, vertexData: B, triangleIndices: o };
  const { westIndices: s, southIndices: a, eastIndices: w, northIndices: R, edgeIndicesEndPosition: N } = HQ(
    I,
    B,
    t
  );
  if (g.maxDecodingStep < xA.extensions)
    return {
      header: E,
      vertexData: B,
      triangleIndices: o,
      westIndices: s,
      northIndices: R,
      eastIndices: w,
      southIndices: a
    };
  const { extensions: y } = fQ(I, N);
  return {
    header: E,
    vertexData: B,
    triangleIndices: o,
    westIndices: s,
    northIndices: R,
    eastIndices: w,
    southIndices: a,
    extensions: y
  };
}
class mQ extends dA {
  build(A) {
    if (this.dispose(), A.vertexData && A.triangleIndices) {
      const g = OQ(A), { westIndices: I, northIndices: E, eastIndices: C, southIndices: B } = A, i = I && E && C && B ? { westIndices: I, northIndices: E, eastIndices: C, southIndices: B } : void 0;
      if (g) {
        let o = A.triangleIndices;
        const { attributes: t, indices: s } = AI(
          g,
          o,
          1,
          i
        );
        this.setIndex(new AA(s, 1)), this.setAttribute("position", new AA(t.position.value, 3)), this.setAttribute("uv", new AA(t.texcoord.value, 2)), this.setAttribute("normal", new AA(new Float32Array(g.position.value.length), 3));
      }
    }
  }
  setData(A) {
    const g = pQ(A);
    return g.vertexData && g.triangleIndices && (this.build(g), this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals()), this;
  }
}
function OQ(Q) {
  if (!Q.vertexData || !Q.triangleIndices) return;
  const { minHeight: A, maxHeight: g } = Q.header, [I, E, C, B] = [0, 0, 1, 1], i = C - I, o = B - E, t = g - A, s = Q.vertexData.length / 3, a = new Float32Array(s * 3), w = new Float32Array(s * 2);
  for (let R = 0; R < s; R++) {
    const N = Q.vertexData[R] / 32767, y = Q.vertexData[R + s] / 32767, c = Q.vertexData[R + s * 2] / 32767;
    a[3 * R + 0] = N * i + I - 0.5, a[3 * R + 1] = y * o + E - 0.5, a[3 * R + 2] = (c * t + A) / 1e3, w[2 * R + 0] = N, w[2 * R + 1] = y;
  }
  return {
    position: { value: a, size: 3 },
    texcoord: { value: w, size: 2 },
    normal: { value: new Float32Array(a.length * 2), size: 3 }
  };
}
class WQ {
  dataType = "quantized-mesh";
  _useWorker = !0;
  /** get use worker */
  get useWorker() {
    return this._useWorker;
  }
  /** set use worker */
  set useWorker(A) {
    this._useWorker = A;
  }
  // 图像加载器
  fileLoader = new eI(p.manager);
  constructor() {
    this.fileLoader.setResponseType("arraybuffer");
  }
  load(A, g, I, E, C, B) {
    const i = A._getTileUrl(g, I, E), o = new mQ();
    return i ? (this.fileLoader.load(
      i,
      (t) => {
        o.setData(t), C();
      },
      void 0,
      (t) => {
        C();
      },
      B
    ), o) : (C(), o);
  }
}
p.registerGeometryLoader(new WQ());
class TQ {
  dataType = "single-image";
  _image;
  _imageLoader = new rg(p.manager);
  /**
   * 加载材质
   * @param source 数据源
   * @param tile 瓦片
   * @param onLoad 加载完成回调
   * @returns 材质
   */
  load(A, g, I, E, C) {
    const B = new cg({
      transparent: !0,
      opacity: A.opacity
    });
    B.addEventListener("dispose", () => {
      B.map && B.map.dispose();
    });
    const i = A._getTileUrl(0, 0, 0);
    return E < A.minLevel || E > A.maxLevel || !i ? (C(), B) : this._image?.complete ? (this._setTexture(B, A, g, I, E), C(), B) : (this._loadImage(i, () => {
      this._setTexture(B, A, g, I, E), C();
    }), B);
  }
  _loadImage(A, g) {
    this._image = this._imageLoader.load(A, g, void 0, g);
  }
  _setTexture(A, g, I, E, C) {
    const B = this._getTileTexture(g, I, E, C);
    A.map = B, B.needsUpdate = !0;
  }
  _getTileTexture(A, g, I, E) {
    const C = A, B = 256, i = new OffscreenCanvas(B, B);
    if (this._image) {
      const t = i.getContext("2d"), s = C._projectionBounds, a = C._getTileBounds(g, I, E), w = this._image?.width || 256, R = this._image?.height || 256, N = (s[2] - s[0]) / w, y = (s[3] - s[1]) / R, c = (a[0] - s[0]) / N, F = (s[3] - a[3]) / y, n = (a[2] - a[0]) / N, d = (a[3] - a[1]) / y;
      t.drawImage(this._image, c, F, n, d, 0, 0, B, B);
    }
    const o = new xI(i);
    return o.colorSpace = fI, o;
  }
}
p.registerMaterialLoader(new TQ());
const bQ = {
  0: 7e3,
  1: 6e3,
  2: 5e3,
  3: 4e3,
  4: 3e3,
  5: 2500,
  6: 2e3,
  7: 1500,
  8: 800,
  9: 500,
  10: 200,
  11: 100,
  12: 40,
  13: 12,
  14: 5,
  15: 2,
  16: 1,
  17: 0.5,
  18: 0.2,
  19: 0.1,
  20: 0.05
};
function ZQ(Q, A) {
  const g = PQ(Q), I = Math.floor(Math.sqrt(g.length)), C = new gg(I).createTile(g), B = bQ[A] / 1e3 || 0, i = C.getGeometryData(B);
  return AI(i.attributes, i.indices, 1);
}
function PQ(Q) {
  const A = Q.data, g = Q.width, I = g + 1, E = new Float32Array(I * I);
  for (let C = 0, B = 0; B < g; B++)
    for (let i = 0; i < g; i++, C++) {
      A[C * 4 + 3] === 0 && (E[C + B] = 0);
      const o = C * 4, t = A[o + 0], s = A[o + 1], a = A[o + 2], w = t << 16 | s << 8 | a;
      E[C + B] = w / 1e4 - 10;
    }
  for (let C = I * (I - 1), B = 0; B < I - 1; B++, C++)
    E[C] = E[C - I];
  for (let C = I - 1, B = 0; B < I; B++, C += I)
    E[C] = E[C - 1];
  return E;
}
const Eg = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIEkoLi4uYyl7Y29uc3QgaT1jLGU9aSYmaS5sZW5ndGg+MSYmaVswXS5jb25zdHJ1Y3Rvcnx8bnVsbDtpZighZSl0aHJvdyBuZXcgRXJyb3IoJyJjb25jYXRlbmF0ZVR5cGVkQXJyYXlzIiAtIGluY29ycmVjdCBxdWFudGl0eSBvZiBhcmd1bWVudHMgb3IgYXJndW1lbnRzIGhhdmUgaW5jb21wYXRpYmxlIGRhdGEgdHlwZXMnKTtjb25zdCBzPWkucmVkdWNlKChvLHIpPT5vK3IubGVuZ3RoLDApLHQ9bmV3IGUocyk7bGV0IG49MDtmb3IoY29uc3QgbyBvZiBpKXQuc2V0KG8sbiksbis9by5sZW5ndGg7cmV0dXJuIHR9ZnVuY3Rpb24gTyhjLGksZSxzKXtjb25zdCB0PSQoaSksbj10Lmxlbmd0aCxvPW5ldyBGbG9hdDMyQXJyYXkobio2KSxyPW5ldyBGbG9hdDMyQXJyYXkobio0KSxsPW5ldyBpLmNvbnN0cnVjdG9yKG4qNiksdT1uZXcgRmxvYXQzMkFycmF5KG4qNik7Zm9yKGxldCBhPTA7YTxuO2ErKylxKHtlZGdlOnRbYV0sZWRnZUluZGV4OmEsYXR0cmlidXRlczpjLHNraXJ0SGVpZ2h0OmUsbmV3UG9zaXRpb246byxuZXdUZXhjb29yZDA6cixuZXdUcmlhbmdsZXM6bCxuZXdOb3JtYWxzOnV9KTtjLnBvc2l0aW9uLnZhbHVlPUkoYy5wb3NpdGlvbi52YWx1ZSxvKSxjLnRleGNvb3JkLnZhbHVlPUkoYy50ZXhjb29yZC52YWx1ZSxyKSxjLm5vcm1hbC52YWx1ZT1JKGMubm9ybWFsLnZhbHVlLHUpO2NvbnN0IGg9SShpLGwpO3JldHVybnthdHRyaWJ1dGVzOmMsaW5kaWNlczpofX1mdW5jdGlvbiAkKGMpe2NvbnN0IGk9W10sZT1BcnJheS5pc0FycmF5KGMpP2M6QXJyYXkuZnJvbShjKTtmb3IobGV0IHQ9MDt0PGUubGVuZ3RoO3QrPTMpe2NvbnN0IG49ZVt0XSxvPWVbdCsxXSxyPWVbdCsyXTtpLnB1c2goW24sb10sW28scl0sW3Isbl0pfWkuc29ydCgoW3Qsbl0sW28scl0pPT57Y29uc3QgbD1NYXRoLm1pbih0LG4pLHU9TWF0aC5taW4obyxyKTtyZXR1cm4gbCE9PXU/bC11Ok1hdGgubWF4KHQsbiktTWF0aC5tYXgobyxyKX0pO2NvbnN0IHM9W107Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0KyspdCsxPGkubGVuZ3RoJiZpW3RdWzBdPT09aVt0KzFdWzFdJiZpW3RdWzFdPT09aVt0KzFdWzBdP3QrKzpzLnB1c2goaVt0XSk7cmV0dXJuIHN9ZnVuY3Rpb24gcSh7ZWRnZTpjLGVkZ2VJbmRleDppLGF0dHJpYnV0ZXM6ZSxza2lydEhlaWdodDpzLG5ld1Bvc2l0aW9uOnQsbmV3VGV4Y29vcmQwOm4sbmV3VHJpYW5nbGVzOm8sbmV3Tm9ybWFsczpyfSl7Y29uc3QgbD1lLnBvc2l0aW9uLnZhbHVlLmxlbmd0aCx1PWkqMixoPXUrMTt0LnNldChlLnBvc2l0aW9uLnZhbHVlLnN1YmFycmF5KGNbMF0qMyxjWzBdKjMrMyksdSozKSx0W3UqMysyXT10W3UqMysyXS1zLHQuc2V0KGUucG9zaXRpb24udmFsdWUuc3ViYXJyYXkoY1sxXSozLGNbMV0qMyszKSxoKjMpLHRbaCozKzJdPXRbaCozKzJdLXMsbi5zZXQoZS50ZXhjb29yZC52YWx1ZS5zdWJhcnJheShjWzBdKjIsY1swXSoyKzIpLHUqMiksbi5zZXQoZS50ZXhjb29yZC52YWx1ZS5zdWJhcnJheShjWzFdKjIsY1sxXSoyKzIpLGgqMik7Y29uc3QgYT1pKjIqMztvW2FdPWNbMF0sb1thKzFdPWwvMytoLG9bYSsyXT1jWzFdLG9bYSszXT1sLzMraCxvW2ErNF09Y1swXSxvW2ErNV09bC8zK3UsclthXT0wLHJbYSsxXT0wLHJbYSsyXT0xLHJbYSszXT0wLHJbYSs0XT0wLHJbYSs1XT0xfWZ1bmN0aW9uIFUoYyxpKXtjb25zdCBlPW5ldyBGbG9hdDMyQXJyYXkoYy5sZW5ndGgpO2ZvcihsZXQgcz0wO3M8aS5sZW5ndGg7cys9Myl7Y29uc3QgdD1pW3NdKjMsbj1pW3MrMV0qMyxvPWlbcysyXSozLHI9Y1t0XSxsPWNbdCsxXSx1PWNbdCsyXSxoPWNbbl0sYT1jW24rMV0sZz1jW24rMl0sTT1jW29dLHg9Y1tvKzFdLHY9Y1tvKzJdLEU9aC1yLFM9YS1sLGQ9Zy11LG09TS1yLHo9eC1sLEE9di11LGY9UypBLWQqeix5PWQqbS1FKkEsVD1FKnotUyptLHc9TWF0aC5zcXJ0KGYqZit5KnkrVCpUKSxGPVswLDAsMV07aWYodz4wKXtjb25zdCBwPTEvdztGWzBdPWYqcCxGWzFdPXkqcCxGWzJdPVQqcH1mb3IobGV0IHA9MDtwPDM7cCsrKWVbdCtwXT1lW24rcF09ZVtvK3BdPUZbcF19cmV0dXJuIGV9Y2xhc3Mga3tncmlkU2l6ZTtudW1UcmlhbmdsZXM7bnVtUGFyZW50VHJpYW5nbGVzO2luZGljZXM7Y29vcmRzO2NvbnN0cnVjdG9yKGk9MjU3KXt0aGlzLmdyaWRTaXplPWk7Y29uc3QgZT1pLTE7aWYoZSZlLTEpdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBncmlkIHNpemUgdG8gYmUgMl5uKzEsIGdvdCAke2l9LmApO3RoaXMubnVtVHJpYW5nbGVzPWUqZSoyLTIsdGhpcy5udW1QYXJlbnRUcmlhbmdsZXM9dGhpcy5udW1UcmlhbmdsZXMtZSplLHRoaXMuaW5kaWNlcz1uZXcgVWludDMyQXJyYXkodGhpcy5ncmlkU2l6ZSp0aGlzLmdyaWRTaXplKSx0aGlzLmNvb3Jkcz1uZXcgVWludDE2QXJyYXkodGhpcy5udW1UcmlhbmdsZXMqNCk7Zm9yKGxldCBzPTA7czx0aGlzLm51bVRyaWFuZ2xlcztzKyspe2xldCB0PXMrMixuPTAsbz0wLHI9MCxsPTAsdT0wLGg9MDtmb3IodCYxP3I9bD11PWU6bj1vPWg9ZTsodD4+PTEpPjE7KXtjb25zdCBnPW4rcj4+MSxNPW8rbD4+MTt0JjE/KHI9bixsPW8sbj11LG89aCk6KG49cixvPWwscj11LGw9aCksdT1nLGg9TX1jb25zdCBhPXMqNDt0aGlzLmNvb3Jkc1thKzBdPW4sdGhpcy5jb29yZHNbYSsxXT1vLHRoaXMuY29vcmRzW2ErMl09cix0aGlzLmNvb3Jkc1thKzNdPWx9fWNyZWF0ZVRpbGUoaSl7cmV0dXJuIG5ldyBEKGksdGhpcyl9fWNsYXNzIER7bWFydGluaTt0ZXJyYWluO2Vycm9ycztjb25zdHJ1Y3RvcihpLGUpe2NvbnN0IHM9ZS5ncmlkU2l6ZTtpZihpLmxlbmd0aCE9PXMqcyl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHRlcnJhaW4gZGF0YSBvZiBsZW5ndGggJHtzKnN9ICgke3N9IHggJHtzfSksIGdvdCAke2kubGVuZ3RofS5gKTt0aGlzLnRlcnJhaW49aSx0aGlzLm1hcnRpbmk9ZSx0aGlzLmVycm9ycz1uZXcgRmxvYXQzMkFycmF5KGkubGVuZ3RoKSx0aGlzLnVwZGF0ZSgpfXVwZGF0ZSgpe2NvbnN0e251bVRyaWFuZ2xlczppLG51bVBhcmVudFRyaWFuZ2xlczplLGNvb3JkczpzLGdyaWRTaXplOnR9PXRoaXMubWFydGluaSx7dGVycmFpbjpuLGVycm9yczpvfT10aGlzO2ZvcihsZXQgcj1pLTE7cj49MDtyLS0pe2NvbnN0IGw9cio0LHU9c1tsKzBdLGg9c1tsKzFdLGE9c1tsKzJdLGc9c1tsKzNdLE09dSthPj4xLHg9aCtnPj4xLHY9TSt4LWgsRT14K3UtTSxTPShuW2gqdCt1XStuW2cqdCthXSkvMixkPXgqdCtNLG09TWF0aC5hYnMoUy1uW2RdKTtpZihvW2RdPU1hdGgubWF4KG9bZF0sbSkscjxlKXtjb25zdCB6PShoK0U+PjEpKnQrKHUrdj4+MSksQT0oZytFPj4xKSp0KyhhK3Y+PjEpO29bZF09TWF0aC5tYXgob1tkXSxvW3pdLG9bQV0pfX19Z2V0R2VvbWV0cnlEYXRhKGk9MCl7Y29uc3R7Z3JpZFNpemU6ZSxpbmRpY2VzOnN9PXRoaXMubWFydGluaSx7ZXJyb3JzOnR9PXRoaXM7bGV0IG49MCxvPTA7Y29uc3Qgcj1lLTE7bGV0IGwsdSxoPTA7cy5maWxsKDApO2Z1bmN0aW9uIGEoZCxtLHosQSxmLHkpe2NvbnN0IFQ9ZCt6Pj4xLHc9bStBPj4xO01hdGguYWJzKGQtZikrTWF0aC5hYnMobS15KT4xJiZ0W3cqZStUXT5pPyhhKGYseSxkLG0sVCx3KSxhKHosQSxmLHksVCx3KSk6KGw9bSplK2QsdT1BKmUreixoPXkqZStmLHNbbF09PT0wJiYoc1tsXT0rK24pLHNbdV09PT0wJiYoc1t1XT0rK24pLHNbaF09PT0wJiYoc1toXT0rK24pLG8rKyl9YSgwLDAscixyLHIsMCksYShyLHIsMCwwLDAscik7bGV0IGc9bioyLE09byozO2NvbnN0IHg9bmV3IFVpbnQxNkFycmF5KGcpLHY9bmV3IFVpbnQzMkFycmF5KE0pO2xldCBFPTA7ZnVuY3Rpb24gUyhkLG0seixBLGYseSl7Y29uc3QgVD1kK3o+PjEsdz1tK0E+PjE7aWYoTWF0aC5hYnMoZC1mKStNYXRoLmFicyhtLXkpPjEmJnRbdyplK1RdPmkpUyhmLHksZCxtLFQsdyksUyh6LEEsZix5LFQsdyk7ZWxzZXtjb25zdCBGPXNbbSplK2RdLTEscD1zW0EqZSt6XS0xLEM9c1t5KmUrZl0tMTt4WzIqRl09ZCx4WzIqRisxXT1tLHhbMipwXT16LHhbMipwKzFdPUEseFsyKkNdPWYseFsyKkMrMV09eSx2W0UrK109Rix2W0UrK109cCx2W0UrK109Q319cmV0dXJuIFMoMCwwLHIscixyLDApLFMocixyLDAsMCwwLHIpLHthdHRyaWJ1dGVzOnRoaXMuX2dldE1lc2hBdHRyaWJ1dGVzKHRoaXMudGVycmFpbix4LHYpLGluZGljZXM6dn19X2dldE1lc2hBdHRyaWJ1dGVzKGksZSxzKXtjb25zdCB0PU1hdGguZmxvb3IoTWF0aC5zcXJ0KGkubGVuZ3RoKSksbj10LTEsbz1lLmxlbmd0aC8yLHI9bmV3IEZsb2F0MzJBcnJheShvKjMpLGw9bmV3IEZsb2F0MzJBcnJheShvKjIpO2ZvcihsZXQgaD0wO2g8bztoKyspe2NvbnN0IGE9ZVtoKjJdLGc9ZVtoKjIrMV0sTT1nKnQrYTtyWzMqaCswXT1hL24tLjUsclszKmgrMV09LjUtZy9uLHJbMypoKzJdPWlbTV0sbFsyKmgrMF09YS9uLGxbMipoKzFdPTEtZy9ufWNvbnN0IHU9VShyLHMpO3JldHVybntwb3NpdGlvbjp7dmFsdWU6cixzaXplOjN9LHRleGNvb3JkOnt2YWx1ZTpsLHNpemU6Mn0sbm9ybWFsOnt2YWx1ZTp1LHNpemU6M319fX1jb25zdCBMPXswOjdlMywxOjZlMywyOjVlMywzOjRlMyw0OjNlMyw1OjI1MDAsNjoyZTMsNzoxNTAwLDg6ODAwLDk6NTAwLDEwOjIwMCwxMToxMDAsMTI6NDAsMTM6MTIsMTQ6NSwxNToyLDE2OjEsMTc6LjUsMTg6LjIsMTk6LjEsMjA6LjA1fTtmdW5jdGlvbiBWKGMsaSl7Y29uc3QgZT1iKGMpLHM9TWF0aC5mbG9vcihNYXRoLnNxcnQoZS5sZW5ndGgpKSxuPW5ldyBrKHMpLmNyZWF0ZVRpbGUoZSksbz1MW2ldLzFlM3x8MCxyPW4uZ2V0R2VvbWV0cnlEYXRhKG8pO3JldHVybiBPKHIuYXR0cmlidXRlcyxyLmluZGljZXMsMSl9ZnVuY3Rpb24gYihjKXtjb25zdCBpPWMuZGF0YSxlPWMud2lkdGgscz1lKzEsdD1uZXcgRmxvYXQzMkFycmF5KHMqcyk7Zm9yKGxldCBuPTAsbz0wO288ZTtvKyspZm9yKGxldCByPTA7cjxlO3IrKyxuKyspe2lbbio0KzNdPT09MCYmKHRbbitvXT0wKTtjb25zdCBsPW4qNCx1PWlbbCswXSxoPWlbbCsxXSxhPWlbbCsyXSxnPXU8PDE2fGg8PDh8YTt0W24rb109Zy8xZTQtMTB9Zm9yKGxldCBuPXMqKHMtMSksbz0wO288cy0xO28rKyxuKyspdFtuXT10W24tc107Zm9yKGxldCBuPXMtMSxvPTA7bzxzO28rKyxuKz1zKXRbbl09dFtuLTFdO3JldHVybiB0fXNlbGYub25tZXNzYWdlPWM9Pntjb25zdHtpbWdEYXRhOmksejplfT1jLmRhdGEscz1WKGksZSk7c2VsZi5wb3N0TWVzc2FnZShzKSxzZWxmLmNsb3NlKCl9fSkoKTsK", XQ = (Q) => Uint8Array.from(atob(Q), (A) => A.charCodeAt(0)), KI = typeof self < "u" && self.Blob && new Blob([XQ(Eg)], { type: "text/javascript;charset=utf-8" });
function jQ(Q) {
  let A;
  try {
    if (A = KI && (self.URL || self.webkitURL).createObjectURL(KI), !A) throw "";
    const g = new Worker(A, {
      name: Q?.name
    });
    return g.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(A);
    }), g;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Eg,
      {
        name: Q?.name
      }
    );
  } finally {
    A && (self.URL || self.webkitURL).revokeObjectURL(A);
  }
}
class VQ {
  dataType = "terrain-rgb-martini";
  _useWorker = !0;
  /** get use worker */
  get useWorker() {
    return this._useWorker;
  }
  /** set use worker */
  set useWorker(A) {
    this._useWorker = A;
  }
  imageLoader = new hI(p.manager);
  /**
   * load tile's data from source
   * @param source
   * @param tile
   * @param onLoad
   * @param onError
   * @returns
   */
  load(A, g, I, E, C, B) {
    const i = new PI(), { url: o, bounds: t } = RI(A, g, I, E);
    return o ? this._load(o, g, I, E, i, t, C, B) : C(), i;
  }
  _load(A, g, I, E, C, B, i, o) {
    return this.imageLoader.load(
      A,
      (t) => {
        const s = vQ(t, B);
        if (this.useWorker) {
          const a = new jQ();
          a.onmessage = (w) => {
            C.setData(w.data), i();
          }, a.postMessage({ z: E, imgData: s }, s);
        } else {
          const a = ZQ(s, E);
          C.setData(a), i();
        }
      },
      void 0,
      i,
      o
    ), C;
  }
}
function zQ(Q, A) {
  const g = Math.floor(Q[0] * A), I = Math.floor(Q[1] * A), E = Math.floor((Q[2] - Q[0]) * A), C = Math.floor((Q[3] - Q[1]) * A);
  return { sx: g, sy: I, sw: E, sh: C };
}
function vQ(Q, A) {
  const g = zQ(A, Q.width), I = Math.min(256, g.sw), C = new OffscreenCanvas(I, I).getContext("2d");
  return C.imageSmoothingEnabled = !1, C.drawImage(Q, g.sx, g.sy, g.sw, g.sh, 0, 0, I, I), C.getImageData(0, 0, I, I);
}
p.registerGeometryLoader(new VQ());
const YI = { type: "change" }, BI = { type: "start" }, lI = { type: "end" }, vA = new ng(), qI = new Fg(), _Q = Math.cos(70 * rA.DEG2RAD);
class $Q extends WI {
  constructor(A, g) {
    super(), this.object = A, this.domElement = g, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new H(), this.cursor = new H(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: sA.ROTATE, MIDDLE: sA.DOLLY, RIGHT: sA.PAN }, this.touches = { ONE: hA.ROTATE, TWO: hA.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return i.phi;
    }, this.getAzimuthalAngle = function() {
      return i.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(D) {
      D.addEventListener("keydown", JA), this._domElementKeyEvents = D;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", JA), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      I.target0.copy(I.target), I.position0.copy(I.object.position), I.zoom0 = I.object.zoom;
    }, this.reset = function() {
      I.target.copy(I.target0), I.object.position.copy(I.position0), I.object.zoom = I.zoom0, I.object.updateProjectionMatrix(), I.dispatchEvent(YI), I.update(), C = E.NONE;
    }, this.update = function() {
      const D = new H(), r = new rI().setFromUnitVectors(A.up, new H(0, 1, 0)), G = r.clone().invert(), k = new H(), O = new rI(), X = new H(), $ = 2 * Math.PI;
      return function(ig = null) {
        const yI = I.object.position;
        D.copy(yI).sub(I.target), D.applyQuaternion(r), i.setFromVector3(D), I.autoRotate && C === E.NONE && x(l(ig)), I.enableDamping ? (i.theta += o.theta * I.dampingFactor, i.phi += o.phi * I.dampingFactor) : (i.theta += o.theta, i.phi += o.phi);
        let iA = I.minAzimuthAngle, DA = I.maxAzimuthAngle;
        isFinite(iA) && isFinite(DA) && (iA < -Math.PI ? iA += $ : iA > Math.PI && (iA -= $), DA < -Math.PI ? DA += $ : DA > Math.PI && (DA -= $), iA <= DA ? i.theta = Math.max(iA, Math.min(DA, i.theta)) : i.theta = i.theta > (iA + DA) / 2 ? Math.max(iA, i.theta) : Math.min(DA, i.theta)), i.phi = Math.max(I.minPolarAngle, Math.min(I.maxPolarAngle, i.phi)), i.makeSafe(), I.enableDamping === !0 ? I.target.addScaledVector(s, I.dampingFactor) : I.target.add(s), I.target.sub(I.cursor), I.target.clampLength(I.minTargetRadius, I.maxTargetRadius), I.target.add(I.cursor);
        let lA = !1;
        if (I.zoomToCursor && q || I.object.isOrthographicCamera)
          i.radius = IA(i.radius);
        else {
          const oA = i.radius;
          i.radius = IA(i.radius * t), lA = oA != i.radius;
        }
        if (D.setFromSpherical(i), D.applyQuaternion(G), yI.copy(I.target).add(D), I.object.lookAt(I.target), I.enableDamping === !0 ? (o.theta *= 1 - I.dampingFactor, o.phi *= 1 - I.dampingFactor, s.multiplyScalar(1 - I.dampingFactor)) : (o.set(0, 0, 0), s.set(0, 0, 0)), I.zoomToCursor && q) {
          let oA = null;
          if (I.object.isPerspectiveCamera) {
            const qA = D.length();
            oA = IA(qA * t);
            const XA = qA - oA;
            I.object.position.addScaledVector(S, XA), I.object.updateMatrixWorld(), lA = !!XA;
          } else if (I.object.isOrthographicCamera) {
            const qA = new H(M.x, M.y, 0);
            qA.unproject(I.object);
            const XA = I.object.zoom;
            I.object.zoom = Math.max(I.minZoom, Math.min(I.maxZoom, I.object.zoom / t)), I.object.updateProjectionMatrix(), lA = XA !== I.object.zoom;
            const wI = new H(M.x, M.y, 0);
            wI.unproject(I.object), I.object.position.sub(wI).add(qA), I.object.updateMatrixWorld(), oA = D.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), I.zoomToCursor = !1;
          oA !== null && (this.screenSpacePanning ? I.target.set(0, 0, -1).transformDirection(I.object.matrix).multiplyScalar(oA).add(I.object.position) : (vA.origin.copy(I.object.position), vA.direction.set(0, 0, -1).transformDirection(I.object.matrix), Math.abs(I.object.up.dot(vA.direction)) < _Q ? A.lookAt(I.target) : (qI.setFromNormalAndCoplanarPoint(I.object.up, I.target), vA.intersectPlane(qI, I.target))));
        } else if (I.object.isOrthographicCamera) {
          const oA = I.object.zoom;
          I.object.zoom = Math.max(I.minZoom, Math.min(I.maxZoom, I.object.zoom / t)), oA !== I.object.zoom && (I.object.updateProjectionMatrix(), lA = !0);
        }
        return t = 1, q = !1, lA || k.distanceToSquared(I.object.position) > B || 8 * (1 - O.dot(I.object.quaternion)) > B || X.distanceToSquared(I.target) > B ? (I.dispatchEvent(YI), k.copy(I.object.position), O.copy(I.object.quaternion), X.copy(I.target), !0) : !1;
      };
    }(), this.dispose = function() {
      I.domElement.removeEventListener("contextmenu", wA), I.domElement.removeEventListener("pointerdown", WA), I.domElement.removeEventListener("pointercancel", yA), I.domElement.removeEventListener("wheel", TA), I.domElement.removeEventListener("pointermove", UA), I.domElement.removeEventListener("pointerup", yA), I.domElement.getRootNode().removeEventListener("keydown", bA, { capture: !0 }), I._domElementKeyEvents !== null && (I._domElementKeyEvents.removeEventListener("keydown", JA), I._domElementKeyEvents = null);
    };
    const I = this, E = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let C = E.NONE;
    const B = 1e-6, i = new cI(), o = new cI();
    let t = 1;
    const s = new H(), a = new V(), w = new V(), R = new V(), N = new V(), y = new V(), c = new V(), F = new V(), n = new V(), d = new V(), S = new H(), M = new V();
    let q = !1;
    const L = [], U = {};
    let Y = !1;
    function l(D) {
      return D !== null ? 2 * Math.PI / 60 * I.autoRotateSpeed * D : 2 * Math.PI / 60 / 60 * I.autoRotateSpeed;
    }
    function J(D) {
      const r = Math.abs(D * 0.01);
      return Math.pow(0.95, I.zoomSpeed * r);
    }
    function x(D) {
      o.theta -= D;
    }
    function u(D) {
      o.phi -= D;
    }
    const f = function() {
      const D = new H();
      return function(G, k) {
        D.setFromMatrixColumn(k, 0), D.multiplyScalar(-G), s.add(D);
      };
    }(), T = function() {
      const D = new H();
      return function(G, k) {
        I.screenSpacePanning === !0 ? D.setFromMatrixColumn(k, 1) : (D.setFromMatrixColumn(k, 0), D.crossVectors(I.object.up, D)), D.multiplyScalar(G), s.add(D);
      };
    }(), W = function() {
      const D = new H();
      return function(G, k) {
        const O = I.domElement;
        if (I.object.isPerspectiveCamera) {
          const X = I.object.position;
          D.copy(X).sub(I.target);
          let $ = D.length();
          $ *= Math.tan(I.object.fov / 2 * Math.PI / 180), f(2 * G * $ / O.clientHeight, I.object.matrix), T(2 * k * $ / O.clientHeight, I.object.matrix);
        } else I.object.isOrthographicCamera ? (f(G * (I.object.right - I.object.left) / I.object.zoom / O.clientWidth, I.object.matrix), T(k * (I.object.top - I.object.bottom) / I.object.zoom / O.clientHeight, I.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), I.enablePan = !1);
      };
    }();
    function P(D) {
      I.object.isPerspectiveCamera || I.object.isOrthographicCamera ? t /= D : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), I.enableZoom = !1);
    }
    function j(D) {
      I.object.isPerspectiveCamera || I.object.isOrthographicCamera ? t *= D : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), I.enableZoom = !1);
    }
    function CA(D, r) {
      if (!I.zoomToCursor)
        return;
      q = !0;
      const G = I.domElement.getBoundingClientRect(), k = D - G.left, O = r - G.top, X = G.width, $ = G.height;
      M.x = k / X * 2 - 1, M.y = -(O / $) * 2 + 1, S.set(M.x, M.y, 1).unproject(I.object).sub(I.object.position).normalize();
    }
    function IA(D) {
      return Math.max(I.minDistance, Math.min(I.maxDistance, D));
    }
    function z(D) {
      a.set(D.clientX, D.clientY);
    }
    function BA(D) {
      CA(D.clientX, D.clientX), F.set(D.clientX, D.clientY);
    }
    function tA(D) {
      N.set(D.clientX, D.clientY);
    }
    function v(D) {
      w.set(D.clientX, D.clientY), R.subVectors(w, a).multiplyScalar(I.rotateSpeed);
      const r = I.domElement;
      x(2 * Math.PI * R.x / r.clientHeight), u(2 * Math.PI * R.y / r.clientHeight), a.copy(w), I.update();
    }
    function QA(D) {
      n.set(D.clientX, D.clientY), d.subVectors(n, F), d.y > 0 ? P(J(d.y)) : d.y < 0 && j(J(d.y)), F.copy(n), I.update();
    }
    function nA(D) {
      y.set(D.clientX, D.clientY), c.subVectors(y, N).multiplyScalar(I.panSpeed), W(c.x, c.y), N.copy(y), I.update();
    }
    function _(D) {
      CA(D.clientX, D.clientY), D.deltaY < 0 ? j(J(D.deltaY)) : D.deltaY > 0 && P(J(D.deltaY)), I.update();
    }
    function gA(D) {
      let r = !1;
      switch (D.code) {
        case I.keys.UP:
          D.ctrlKey || D.metaKey || D.shiftKey ? u(2 * Math.PI * I.rotateSpeed / I.domElement.clientHeight) : W(0, I.keyPanSpeed), r = !0;
          break;
        case I.keys.BOTTOM:
          D.ctrlKey || D.metaKey || D.shiftKey ? u(-2 * Math.PI * I.rotateSpeed / I.domElement.clientHeight) : W(0, -I.keyPanSpeed), r = !0;
          break;
        case I.keys.LEFT:
          D.ctrlKey || D.metaKey || D.shiftKey ? x(2 * Math.PI * I.rotateSpeed / I.domElement.clientHeight) : W(I.keyPanSpeed, 0), r = !0;
          break;
        case I.keys.RIGHT:
          D.ctrlKey || D.metaKey || D.shiftKey ? x(-2 * Math.PI * I.rotateSpeed / I.domElement.clientHeight) : W(-I.keyPanSpeed, 0), r = !0;
          break;
      }
      r && (D.preventDefault(), I.update());
    }
    function aA(D) {
      if (L.length === 1)
        a.set(D.pageX, D.pageY);
      else {
        const r = K(D), G = 0.5 * (D.pageX + r.x), k = 0.5 * (D.pageY + r.y);
        a.set(G, k);
      }
    }
    function RA(D) {
      if (L.length === 1)
        N.set(D.pageX, D.pageY);
      else {
        const r = K(D), G = 0.5 * (D.pageX + r.x), k = 0.5 * (D.pageY + r.y);
        N.set(G, k);
      }
    }
    function NA(D) {
      const r = K(D), G = D.pageX - r.x, k = D.pageY - r.y, O = Math.sqrt(G * G + k * k);
      F.set(0, O);
    }
    function b(D) {
      I.enableZoom && NA(D), I.enablePan && RA(D);
    }
    function fA(D) {
      I.enableZoom && NA(D), I.enableRotate && aA(D);
    }
    function pA(D) {
      if (L.length == 1)
        w.set(D.pageX, D.pageY);
      else {
        const G = K(D), k = 0.5 * (D.pageX + G.x), O = 0.5 * (D.pageY + G.y);
        w.set(k, O);
      }
      R.subVectors(w, a).multiplyScalar(I.rotateSpeed);
      const r = I.domElement;
      x(2 * Math.PI * R.x / r.clientHeight), u(2 * Math.PI * R.y / r.clientHeight), a.copy(w);
    }
    function mA(D) {
      if (L.length === 1)
        y.set(D.pageX, D.pageY);
      else {
        const r = K(D), G = 0.5 * (D.pageX + r.x), k = 0.5 * (D.pageY + r.y);
        y.set(G, k);
      }
      c.subVectors(y, N).multiplyScalar(I.panSpeed), W(c.x, c.y), N.copy(y);
    }
    function FA(D) {
      const r = K(D), G = D.pageX - r.x, k = D.pageY - r.y, O = Math.sqrt(G * G + k * k);
      n.set(0, O), d.set(0, Math.pow(n.y / F.y, I.zoomSpeed)), P(d.y), F.copy(n);
      const X = (D.pageX + r.x) * 0.5, $ = (D.pageY + r.y) * 0.5;
      CA(X, $);
    }
    function GA(D) {
      I.enableZoom && FA(D), I.enablePan && mA(D);
    }
    function OA(D) {
      I.enableZoom && FA(D), I.enableRotate && pA(D);
    }
    function WA(D) {
      I.enabled !== !1 && (L.length === 0 && (I.domElement.setPointerCapture(D.pointerId), I.domElement.addEventListener("pointermove", UA), I.domElement.addEventListener("pointerup", yA)), !e(D) && (EI(D), D.pointerType === "touch" ? KA(D) : II(D)));
    }
    function UA(D) {
      I.enabled !== !1 && (D.pointerType === "touch" ? PA(D) : gI(D));
    }
    function yA(D) {
      switch (YA(D), L.length) {
        case 0:
          I.domElement.releasePointerCapture(D.pointerId), I.domElement.removeEventListener("pointermove", UA), I.domElement.removeEventListener("pointerup", yA), I.dispatchEvent(lI), C = E.NONE;
          break;
        case 1:
          const r = L[0], G = U[r];
          KA({ pointerId: r, pageX: G.x, pageY: G.y });
          break;
      }
    }
    function II(D) {
      let r;
      switch (D.button) {
        case 0:
          r = I.mouseButtons.LEFT;
          break;
        case 1:
          r = I.mouseButtons.MIDDLE;
          break;
        case 2:
          r = I.mouseButtons.RIGHT;
          break;
        default:
          r = -1;
      }
      switch (r) {
        case sA.DOLLY:
          if (I.enableZoom === !1) return;
          BA(D), C = E.DOLLY;
          break;
        case sA.ROTATE:
          if (D.ctrlKey || D.metaKey || D.shiftKey) {
            if (I.enablePan === !1) return;
            tA(D), C = E.PAN;
          } else {
            if (I.enableRotate === !1) return;
            z(D), C = E.ROTATE;
          }
          break;
        case sA.PAN:
          if (D.ctrlKey || D.metaKey || D.shiftKey) {
            if (I.enableRotate === !1) return;
            z(D), C = E.ROTATE;
          } else {
            if (I.enablePan === !1) return;
            tA(D), C = E.PAN;
          }
          break;
        default:
          C = E.NONE;
      }
      C !== E.NONE && I.dispatchEvent(BI);
    }
    function gI(D) {
      switch (C) {
        case E.ROTATE:
          if (I.enableRotate === !1) return;
          v(D);
          break;
        case E.DOLLY:
          if (I.enableZoom === !1) return;
          QA(D);
          break;
        case E.PAN:
          if (I.enablePan === !1) return;
          nA(D);
          break;
      }
    }
    function TA(D) {
      I.enabled === !1 || I.enableZoom === !1 || C !== E.NONE || (D.preventDefault(), I.dispatchEvent(BI), _(QI(D)), I.dispatchEvent(lI));
    }
    function QI(D) {
      const r = D.deltaMode, G = {
        clientX: D.clientX,
        clientY: D.clientY,
        deltaY: D.deltaY
      };
      switch (r) {
        case 1:
          G.deltaY *= 16;
          break;
        case 2:
          G.deltaY *= 100;
          break;
      }
      return D.ctrlKey && !Y && (G.deltaY *= 10), G;
    }
    function bA(D) {
      D.key === "Control" && (Y = !0, I.domElement.getRootNode().addEventListener("keyup", ZA, { passive: !0, capture: !0 }));
    }
    function ZA(D) {
      D.key === "Control" && (Y = !1, I.domElement.getRootNode().removeEventListener("keyup", ZA, { passive: !0, capture: !0 }));
    }
    function JA(D) {
      I.enabled === !1 || I.enablePan === !1 || gA(D);
    }
    function KA(D) {
      switch (h(D), L.length) {
        case 1:
          switch (I.touches.ONE) {
            case hA.ROTATE:
              if (I.enableRotate === !1) return;
              aA(D), C = E.TOUCH_ROTATE;
              break;
            case hA.PAN:
              if (I.enablePan === !1) return;
              RA(D), C = E.TOUCH_PAN;
              break;
            default:
              C = E.NONE;
          }
          break;
        case 2:
          switch (I.touches.TWO) {
            case hA.DOLLY_PAN:
              if (I.enableZoom === !1 && I.enablePan === !1) return;
              b(D), C = E.TOUCH_DOLLY_PAN;
              break;
            case hA.DOLLY_ROTATE:
              if (I.enableZoom === !1 && I.enableRotate === !1) return;
              fA(D), C = E.TOUCH_DOLLY_ROTATE;
              break;
            default:
              C = E.NONE;
          }
          break;
        default:
          C = E.NONE;
      }
      C !== E.NONE && I.dispatchEvent(BI);
    }
    function PA(D) {
      switch (h(D), C) {
        case E.TOUCH_ROTATE:
          if (I.enableRotate === !1) return;
          pA(D), I.update();
          break;
        case E.TOUCH_PAN:
          if (I.enablePan === !1) return;
          mA(D), I.update();
          break;
        case E.TOUCH_DOLLY_PAN:
          if (I.enableZoom === !1 && I.enablePan === !1) return;
          GA(D), I.update();
          break;
        case E.TOUCH_DOLLY_ROTATE:
          if (I.enableZoom === !1 && I.enableRotate === !1) return;
          OA(D), I.update();
          break;
        default:
          C = E.NONE;
      }
    }
    function wA(D) {
      I.enabled !== !1 && D.preventDefault();
    }
    function EI(D) {
      L.push(D.pointerId);
    }
    function YA(D) {
      delete U[D.pointerId];
      for (let r = 0; r < L.length; r++)
        if (L[r] == D.pointerId) {
          L.splice(r, 1);
          return;
        }
    }
    function e(D) {
      for (let r = 0; r < L.length; r++)
        if (L[r] == D.pointerId) return !0;
      return !1;
    }
    function h(D) {
      let r = U[D.pointerId];
      r === void 0 && (r = new V(), U[D.pointerId] = r), r.set(D.pageX, D.pageY);
    }
    function K(D) {
      const r = D.pointerId === L[0] ? L[1] : L[0];
      return U[r];
    }
    I.domElement.addEventListener("contextmenu", wA), I.domElement.addEventListener("pointerdown", WA), I.domElement.addEventListener("pointercancel", yA), I.domElement.addEventListener("wheel", TA, { passive: !1 }), I.domElement.getRootNode().addEventListener("keydown", bA, { passive: !0, capture: !0 }), this.update();
  }
}
class AE extends $Q {
  constructor(A, g) {
    super(A, g), this.screenSpacePanning = !1, this.mouseButtons = { LEFT: sA.PAN, MIDDLE: sA.DOLLY, RIGHT: sA.ROTATE }, this.touches = { ONE: hA.PAN, TWO: hA.DOLLY_ROTATE };
  }
}
var LA = Object.freeze({
  Linear: Object.freeze({
    None: function(Q) {
      return Q;
    },
    In: function(Q) {
      return this.None(Q);
    },
    Out: function(Q) {
      return this.None(Q);
    },
    InOut: function(Q) {
      return this.None(Q);
    }
  }),
  Quadratic: Object.freeze({
    In: function(Q) {
      return Q * Q;
    },
    Out: function(Q) {
      return Q * (2 - Q);
    },
    InOut: function(Q) {
      return (Q *= 2) < 1 ? 0.5 * Q * Q : -0.5 * (--Q * (Q - 2) - 1);
    }
  }),
  Cubic: Object.freeze({
    In: function(Q) {
      return Q * Q * Q;
    },
    Out: function(Q) {
      return --Q * Q * Q + 1;
    },
    InOut: function(Q) {
      return (Q *= 2) < 1 ? 0.5 * Q * Q * Q : 0.5 * ((Q -= 2) * Q * Q + 2);
    }
  }),
  Quartic: Object.freeze({
    In: function(Q) {
      return Q * Q * Q * Q;
    },
    Out: function(Q) {
      return 1 - --Q * Q * Q * Q;
    },
    InOut: function(Q) {
      return (Q *= 2) < 1 ? 0.5 * Q * Q * Q * Q : -0.5 * ((Q -= 2) * Q * Q * Q - 2);
    }
  }),
  Quintic: Object.freeze({
    In: function(Q) {
      return Q * Q * Q * Q * Q;
    },
    Out: function(Q) {
      return --Q * Q * Q * Q * Q + 1;
    },
    InOut: function(Q) {
      return (Q *= 2) < 1 ? 0.5 * Q * Q * Q * Q * Q : 0.5 * ((Q -= 2) * Q * Q * Q * Q + 2);
    }
  }),
  Sinusoidal: Object.freeze({
    In: function(Q) {
      return 1 - Math.sin((1 - Q) * Math.PI / 2);
    },
    Out: function(Q) {
      return Math.sin(Q * Math.PI / 2);
    },
    InOut: function(Q) {
      return 0.5 * (1 - Math.sin(Math.PI * (0.5 - Q)));
    }
  }),
  Exponential: Object.freeze({
    In: function(Q) {
      return Q === 0 ? 0 : Math.pow(1024, Q - 1);
    },
    Out: function(Q) {
      return Q === 1 ? 1 : 1 - Math.pow(2, -10 * Q);
    },
    InOut: function(Q) {
      return Q === 0 ? 0 : Q === 1 ? 1 : (Q *= 2) < 1 ? 0.5 * Math.pow(1024, Q - 1) : 0.5 * (-Math.pow(2, -10 * (Q - 1)) + 2);
    }
  }),
  Circular: Object.freeze({
    In: function(Q) {
      return 1 - Math.sqrt(1 - Q * Q);
    },
    Out: function(Q) {
      return Math.sqrt(1 - --Q * Q);
    },
    InOut: function(Q) {
      return (Q *= 2) < 1 ? -0.5 * (Math.sqrt(1 - Q * Q) - 1) : 0.5 * (Math.sqrt(1 - (Q -= 2) * Q) + 1);
    }
  }),
  Elastic: Object.freeze({
    In: function(Q) {
      return Q === 0 ? 0 : Q === 1 ? 1 : -Math.pow(2, 10 * (Q - 1)) * Math.sin((Q - 1.1) * 5 * Math.PI);
    },
    Out: function(Q) {
      return Q === 0 ? 0 : Q === 1 ? 1 : Math.pow(2, -10 * Q) * Math.sin((Q - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(Q) {
      return Q === 0 ? 0 : Q === 1 ? 1 : (Q *= 2, Q < 1 ? -0.5 * Math.pow(2, 10 * (Q - 1)) * Math.sin((Q - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (Q - 1)) * Math.sin((Q - 1.1) * 5 * Math.PI) + 1);
    }
  }),
  Back: Object.freeze({
    In: function(Q) {
      var A = 1.70158;
      return Q === 1 ? 1 : Q * Q * ((A + 1) * Q - A);
    },
    Out: function(Q) {
      var A = 1.70158;
      return Q === 0 ? 0 : --Q * Q * ((A + 1) * Q + A) + 1;
    },
    InOut: function(Q) {
      var A = 2.5949095;
      return (Q *= 2) < 1 ? 0.5 * (Q * Q * ((A + 1) * Q - A)) : 0.5 * ((Q -= 2) * Q * ((A + 1) * Q + A) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(Q) {
      return 1 - LA.Bounce.Out(1 - Q);
    },
    Out: function(Q) {
      return Q < 1 / 2.75 ? 7.5625 * Q * Q : Q < 2 / 2.75 ? 7.5625 * (Q -= 1.5 / 2.75) * Q + 0.75 : Q < 2.5 / 2.75 ? 7.5625 * (Q -= 2.25 / 2.75) * Q + 0.9375 : 7.5625 * (Q -= 2.625 / 2.75) * Q + 0.984375;
    },
    InOut: function(Q) {
      return Q < 0.5 ? LA.Bounce.In(Q * 2) * 0.5 : LA.Bounce.Out(Q * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(Q) {
    return Q === void 0 && (Q = 4), Q = Q < Number.EPSILON ? Number.EPSILON : Q, Q = Q > 1e4 ? 1e4 : Q, {
      In: function(A) {
        return Math.pow(A, Q);
      },
      Out: function(A) {
        return 1 - Math.pow(1 - A, Q);
      },
      InOut: function(A) {
        return A < 0.5 ? Math.pow(A * 2, Q) / 2 : (1 - Math.pow(2 - A * 2, Q)) / 2 + 0.5;
      }
    };
  }
}), MA = function() {
  return performance.now();
}, Cg = (
  /** @class */
  function() {
    function Q() {
      this._tweens = {}, this._tweensAddedDuringUpdate = {};
    }
    return Q.prototype.getAll = function() {
      var A = this;
      return Object.keys(this._tweens).map(function(g) {
        return A._tweens[g];
      });
    }, Q.prototype.removeAll = function() {
      this._tweens = {};
    }, Q.prototype.add = function(A) {
      this._tweens[A.getId()] = A, this._tweensAddedDuringUpdate[A.getId()] = A;
    }, Q.prototype.remove = function(A) {
      delete this._tweens[A.getId()], delete this._tweensAddedDuringUpdate[A.getId()];
    }, Q.prototype.update = function(A, g) {
      A === void 0 && (A = MA()), g === void 0 && (g = !1);
      var I = Object.keys(this._tweens);
      if (I.length === 0)
        return !1;
      for (; I.length > 0; ) {
        this._tweensAddedDuringUpdate = {};
        for (var E = 0; E < I.length; E++) {
          var C = this._tweens[I[E]], B = !g;
          C && C.update(A, B) === !1 && !g && delete this._tweens[I[E]];
        }
        I = Object.keys(this._tweensAddedDuringUpdate);
      }
      return !0;
    }, Q;
  }()
), cA = {
  Linear: function(Q, A) {
    var g = Q.length - 1, I = g * A, E = Math.floor(I), C = cA.Utils.Linear;
    return A < 0 ? C(Q[0], Q[1], I) : A > 1 ? C(Q[g], Q[g - 1], g - I) : C(Q[E], Q[E + 1 > g ? g : E + 1], I - E);
  },
  Bezier: function(Q, A) {
    for (var g = 0, I = Q.length - 1, E = Math.pow, C = cA.Utils.Bernstein, B = 0; B <= I; B++)
      g += E(1 - A, I - B) * E(A, B) * Q[B] * C(I, B);
    return g;
  },
  CatmullRom: function(Q, A) {
    var g = Q.length - 1, I = g * A, E = Math.floor(I), C = cA.Utils.CatmullRom;
    return Q[0] === Q[g] ? (A < 0 && (E = Math.floor(I = g * (1 + A))), C(Q[(E - 1 + g) % g], Q[E], Q[(E + 1) % g], Q[(E + 2) % g], I - E)) : A < 0 ? Q[0] - (C(Q[0], Q[0], Q[1], Q[1], -I) - Q[0]) : A > 1 ? Q[g] - (C(Q[g], Q[g], Q[g - 1], Q[g - 1], I - g) - Q[g]) : C(Q[E ? E - 1 : 0], Q[E], Q[g < E + 1 ? g : E + 1], Q[g < E + 2 ? g : E + 2], I - E);
  },
  Utils: {
    Linear: function(Q, A, g) {
      return (A - Q) * g + Q;
    },
    Bernstein: function(Q, A) {
      var g = cA.Utils.Factorial;
      return g(Q) / g(A) / g(Q - A);
    },
    Factorial: /* @__PURE__ */ function() {
      var Q = [1];
      return function(A) {
        var g = 1;
        if (Q[A])
          return Q[A];
        for (var I = A; I > 1; I--)
          g *= I;
        return Q[A] = g, g;
      };
    }(),
    CatmullRom: function(Q, A, g, I, E) {
      var C = (g - Q) * 0.5, B = (I - A) * 0.5, i = E * E, o = E * i;
      return (2 * A - 2 * g + C + B) * o + (-3 * A + 3 * g - 2 * C - B) * i + C * E + A;
    }
  }
}, NI = (
  /** @class */
  function() {
    function Q() {
    }
    return Q.nextId = function() {
      return Q._nextId++;
    }, Q._nextId = 0, Q;
  }()
), oI = new Cg(), sI = (
  /** @class */
  function() {
    function Q(A, g) {
      g === void 0 && (g = oI), this._object = A, this._group = g, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = LA.Linear.None, this._interpolationFunction = cA.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = NI.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1;
    }
    return Q.prototype.getId = function() {
      return this._id;
    }, Q.prototype.isPlaying = function() {
      return this._isPlaying;
    }, Q.prototype.isPaused = function() {
      return this._isPaused;
    }, Q.prototype.getDuration = function() {
      return this._duration;
    }, Q.prototype.to = function(A, g) {
      if (g === void 0 && (g = 1e3), this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      return this._valuesEnd = A, this._propertiesAreSetUp = !1, this._duration = g < 0 ? 0 : g, this;
    }, Q.prototype.duration = function(A) {
      return A === void 0 && (A = 1e3), this._duration = A < 0 ? 0 : A, this;
    }, Q.prototype.dynamic = function(A) {
      return A === void 0 && (A = !1), this._isDynamic = A, this;
    }, Q.prototype.start = function(A, g) {
      if (A === void 0 && (A = MA()), g === void 0 && (g = !1), this._isPlaying)
        return this;
      if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed) {
        this._reversed = !1;
        for (var I in this._valuesStartRepeat)
          this._swapEndStartRepeatValues(I), this._valuesStart[I] = this._valuesStartRepeat[I];
      }
      if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = A, this._startTime += this._delayTime, !this._propertiesAreSetUp || g) {
        if (this._propertiesAreSetUp = !0, !this._isDynamic) {
          var E = {};
          for (var C in this._valuesEnd)
            E[C] = this._valuesEnd[C];
          this._valuesEnd = E;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, g);
      }
      return this;
    }, Q.prototype.startFromCurrentValues = function(A) {
      return this.start(A, !0);
    }, Q.prototype._setupProperties = function(A, g, I, E, C) {
      for (var B in I) {
        var i = A[B], o = Array.isArray(i), t = o ? "array" : typeof i, s = !o && Array.isArray(I[B]);
        if (!(t === "undefined" || t === "function")) {
          if (s) {
            var a = I[B];
            if (a.length === 0)
              continue;
            for (var w = [i], R = 0, N = a.length; R < N; R += 1) {
              var y = this._handleRelativeValue(i, a[R]);
              if (isNaN(y)) {
                s = !1, console.warn("Found invalid interpolation list. Skipping.");
                break;
              }
              w.push(y);
            }
            s && (I[B] = w);
          }
          if ((t === "object" || o) && i && !s) {
            g[B] = o ? [] : {};
            var c = i;
            for (var F in c)
              g[B][F] = c[F];
            E[B] = o ? [] : {};
            var a = I[B];
            if (!this._isDynamic) {
              var n = {};
              for (var F in a)
                n[F] = a[F];
              I[B] = a = n;
            }
            this._setupProperties(c, g[B], a, E[B], C);
          } else
            (typeof g[B] > "u" || C) && (g[B] = i), o || (g[B] *= 1), s ? E[B] = I[B].slice().reverse() : E[B] = g[B] || 0;
        }
      }
    }, Q.prototype.stop = function() {
      return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this;
    }, Q.prototype.end = function() {
      return this._goToEnd = !0, this.update(1 / 0), this;
    }, Q.prototype.pause = function(A) {
      return A === void 0 && (A = MA()), this._isPaused || !this._isPlaying ? this : (this._isPaused = !0, this._pauseStart = A, this._group && this._group.remove(this), this);
    }, Q.prototype.resume = function(A) {
      return A === void 0 && (A = MA()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = !1, this._startTime += A - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this);
    }, Q.prototype.stopChainedTweens = function() {
      for (var A = 0, g = this._chainedTweens.length; A < g; A++)
        this._chainedTweens[A].stop();
      return this;
    }, Q.prototype.group = function(A) {
      return A === void 0 && (A = oI), this._group = A, this;
    }, Q.prototype.delay = function(A) {
      return A === void 0 && (A = 0), this._delayTime = A, this;
    }, Q.prototype.repeat = function(A) {
      return A === void 0 && (A = 0), this._initialRepeat = A, this._repeat = A, this;
    }, Q.prototype.repeatDelay = function(A) {
      return this._repeatDelayTime = A, this;
    }, Q.prototype.yoyo = function(A) {
      return A === void 0 && (A = !1), this._yoyo = A, this;
    }, Q.prototype.easing = function(A) {
      return A === void 0 && (A = LA.Linear.None), this._easingFunction = A, this;
    }, Q.prototype.interpolation = function(A) {
      return A === void 0 && (A = cA.Linear), this._interpolationFunction = A, this;
    }, Q.prototype.chain = function() {
      for (var A = [], g = 0; g < arguments.length; g++)
        A[g] = arguments[g];
      return this._chainedTweens = A, this;
    }, Q.prototype.onStart = function(A) {
      return this._onStartCallback = A, this;
    }, Q.prototype.onEveryStart = function(A) {
      return this._onEveryStartCallback = A, this;
    }, Q.prototype.onUpdate = function(A) {
      return this._onUpdateCallback = A, this;
    }, Q.prototype.onRepeat = function(A) {
      return this._onRepeatCallback = A, this;
    }, Q.prototype.onComplete = function(A) {
      return this._onCompleteCallback = A, this;
    }, Q.prototype.onStop = function(A) {
      return this._onStopCallback = A, this;
    }, Q.prototype.update = function(A, g) {
      var I = this, E;
      if (A === void 0 && (A = MA()), g === void 0 && (g = !0), this._isPaused)
        return !0;
      var C, B = this._startTime + this._duration;
      if (!this._goToEnd && !this._isPlaying) {
        if (A > B)
          return !1;
        g && this.start(A, !0);
      }
      if (this._goToEnd = !1, A < this._startTime)
        return !0;
      this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), this._onEveryStartCallbackFired === !1 && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0);
      var i = A - this._startTime, o = this._duration + ((E = this._repeatDelayTime) !== null && E !== void 0 ? E : this._delayTime), t = this._duration + this._repeat * o, s = function() {
        if (I._duration === 0 || i > t)
          return 1;
        var c = Math.trunc(i / o), F = i - c * o, n = Math.min(F / I._duration, 1);
        return n === 0 && i === I._duration ? 1 : n;
      }, a = s(), w = this._easingFunction(a);
      if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, w), this._onUpdateCallback && this._onUpdateCallback(this._object, a), this._duration === 0 || i >= this._duration)
        if (this._repeat > 0) {
          var R = Math.min(Math.trunc((i - this._duration) / o) + 1, this._repeat);
          isFinite(this._repeat) && (this._repeat -= R);
          for (C in this._valuesStartRepeat)
            !this._yoyo && typeof this._valuesEnd[C] == "string" && (this._valuesStartRepeat[C] = // eslint-disable-next-line
            // @ts-ignore FIXME?
            this._valuesStartRepeat[C] + parseFloat(this._valuesEnd[C])), this._yoyo && this._swapEndStartRepeatValues(C), this._valuesStart[C] = this._valuesStartRepeat[C];
          return this._yoyo && (this._reversed = !this._reversed), this._startTime += o * R, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1, !0;
        } else {
          this._onCompleteCallback && this._onCompleteCallback(this._object);
          for (var N = 0, y = this._chainedTweens.length; N < y; N++)
            this._chainedTweens[N].start(this._startTime + this._duration, !1);
          return this._isPlaying = !1, !1;
        }
      return !0;
    }, Q.prototype._updateProperties = function(A, g, I, E) {
      for (var C in I)
        if (g[C] !== void 0) {
          var B = g[C] || 0, i = I[C], o = Array.isArray(A[C]), t = Array.isArray(i), s = !o && t;
          s ? A[C] = this._interpolationFunction(i, E) : typeof i == "object" && i ? this._updateProperties(A[C], B, i, E) : (i = this._handleRelativeValue(B, i), typeof i == "number" && (A[C] = B + (i - B) * E));
        }
    }, Q.prototype._handleRelativeValue = function(A, g) {
      return typeof g != "string" ? g : g.charAt(0) === "+" || g.charAt(0) === "-" ? A + parseFloat(g) : parseFloat(g);
    }, Q.prototype._swapEndStartRepeatValues = function(A) {
      var g = this._valuesStartRepeat[A], I = this._valuesEnd[A];
      typeof I == "string" ? this._valuesStartRepeat[A] = this._valuesStartRepeat[A] + parseFloat(I) : this._valuesStartRepeat[A] = this._valuesEnd[A], this._valuesEnd[A] = g;
    }, Q;
  }()
), IE = "23.1.1", gE = NI.nextId, EA = oI, QE = EA.getAll.bind(EA), EE = EA.removeAll.bind(EA), CE = EA.add.bind(EA), BE = EA.remove.bind(EA), iE = EA.update.bind(EA), HI = {
  Easing: LA,
  Group: Cg,
  Interpolation: cA,
  now: MA,
  Sequence: NI,
  nextId: gE,
  Tween: sI,
  VERSION: IE,
  getAll: QE,
  removeAll: EE,
  add: CE,
  remove: BE,
  update: iE
};
class DE extends WI {
  scene;
  renderer;
  camera;
  controls;
  ambLight;
  dirLight;
  container;
  _clock = new mI();
  _fogFactor = 1;
  get fogFactor() {
    return this._fogFactor;
  }
  set fogFactor(A) {
    this._fogFactor = A, this.controls.dispatchEvent({ type: "change" });
  }
  get width() {
    return this.container.clientWidth;
  }
  get height() {
    return this.container.clientHeight;
  }
  constructor(A, g = {}) {
    super();
    const I = typeof A == "string" ? document.querySelector(A) : A;
    if (I instanceof HTMLElement) {
      const {
        centerPosition: E = new H(0, 0, -3e3),
        cameraPosition: C = new H(0, 3e4, 0),
        antialias: B = !1,
        stencil: i = !0,
        logarithmicDepthBuffer: o = !0
      } = g;
      this.container = I, this.renderer = this._createRenderer(B, i, o), this.scene = this._createScene(), this.camera = this._createCamera(C), this.controls = this._createControls(E), this.ambLight = this._createAmbLight(), this.scene.add(this.ambLight), this.dirLight = this._createDirLight(E), this.scene.add(this.dirLight), this.container.appendChild(this.renderer.domElement), window.addEventListener("resize", this.resize.bind(this)), this.resize(), this.renderer.setAnimationLoop(this.animate.bind(this));
    } else
      throw new Error(`${A} not found!`);
  }
  _createScene() {
    const A = new Gg(), g = 14414079;
    return A.background = new aI(g), A.fog = new nI(g, 0), A;
  }
  _createRenderer(A, g, I) {
    const E = new Sg({
      antialias: A,
      logarithmicDepthBuffer: I,
      stencil: g,
      alpha: !0,
      precision: "highp"
    });
    return E.setPixelRatio(window.devicePixelRatio), E;
  }
  _createCamera(A) {
    const g = new Mg(70, 1, 0.1, 5e4);
    return g.position.copy(A), g;
  }
  _createControls(A) {
    const B = new AE(this.camera, this.container);
    return B.target.copy(A), B.screenSpacePanning = !1, B.minDistance = 0.1, B.maxDistance = 3e4, B.maxPolarAngle = 1.2, B.enableDamping = !0, B.dampingFactor = 0.05, B.keyPanSpeed = 5, this.container.tabIndex = 0, B.listenToKeyEvents(this.container), B.addEventListener("change", () => {
      const i = Math.max(this.controls.getPolarAngle(), 0.1), o = Math.max(this.controls.getDistance(), 0.1);
      B.zoomSpeed = Math.max(Math.log(o), 0) + 0.5, this.camera.far = rA.clamp(o / i * 8, 100, 5e4), this.camera.near = this.camera.far / 1e3, this.camera.updateProjectionMatrix(), this.scene.fog instanceof nI && (this.scene.fog.density = i / (o + 5) * this.fogFactor * 0.25);
      const t = o > 8e3;
      B.minAzimuthAngle = t ? 0 : -1 / 0, B.maxAzimuthAngle = t ? 0 : 1 / 0, B.maxPolarAngle = Math.min(Math.pow(1e4 / o, 4), 1.2);
    }), B;
  }
  _createAmbLight() {
    return new Lg(16777215, 1);
  }
  _createDirLight(A) {
    const g = new dg(16777215, 1);
    return g.position.set(0, 2e3, 1e3), g.target.position.copy(A), g;
  }
  resize() {
    const A = this.width, g = this.height;
    return this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(A, g), this.camera.aspect = A / g, this.camera.updateProjectionMatrix(), this;
  }
  animate() {
    this.controls.update(), this.renderer.render(this.scene, this.camera), HI.update(), this.dispatchEvent({ type: "update", delta: this._clock.getDelta() });
  }
  /**
   * 飞行到某世界坐标
   * @param centerPos 目标地图中心世界坐标
   * @param cameraPos 目标摄像机世界坐标
   */
  flyTo(A, g) {
    this.controls.target.copy(A);
    const I = this.camera.position;
    new sI(I).to({ y: 1e4, z: 0 }, 500).chain(new sI(I).to(g, 2e3).easing(HI.Easing.Quintic.Out)).start();
  }
}
class oE extends Z {
  token = "";
  format = "webp";
  style = "mapbox.satellite";
  attribution = "MapBox";
  maxLevel = 19;
  url = "https://api.mapbox.com/v4/{style}/{z}/{x}/{y}.{format}?access_token={token}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class sE extends Z {
  dataType = "image";
  attribution = "ArcGIS";
  style = "World_Imagery";
  url = "https://services.arcgisonline.com/arcgis/rest/services/{style}/MapServer/tile/{z}/{y}/{x}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class tE extends Z {
  dataType = "lerc";
  attribution = "ArcGIS";
  minLevel = 7;
  maxLevel = 13;
  url = "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer/tile/{z}/{y}/{x}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class aE extends Z {
  dataType = "image";
  attribution = "Bing[GS(2021)1731号]";
  style = "A";
  mkt = "zh-CN";
  subdomains = "123";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
  getUrl(A, g, I) {
    const E = eE(I, A, g);
    return `https://t${this.s}.dynamic.tiles.ditu.live.com/comp/ch/${E}?mkt=${this.mkt}&ur=CN&it=${this.style}&n=z&og=804&cstl=vb`;
  }
}
function eE(Q, A, g) {
  let I = "";
  for (let E = Q; E > 0; E--) {
    const C = 1 << E - 1;
    let B = 0;
    A & C && B++, g & C && (B += 2), I += B;
  }
  return I;
}
class hE extends Z {
  dataType = "image";
  attribution = "高德[GS(2021)6375号]";
  style = "8";
  subdomains = "1234";
  maxLevel = 18;
  url = "https://webst0{s}.is.autonavi.com/appmaptile?style={style}&x={x}&y={y}&z={z}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class RE extends Z {
  dataType = "image";
  maxLevel = 16;
  attribution = "GeoQ[GS(2019)758号]";
  style = "ChinaOnlineStreetPurplishBlue";
  url = "https://map.geoq.cn/ArcGIS/rest/services/{style}/MapServer/tile/{z}/{y}/{x}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class NE extends Z {
  dataType = "image";
  attribution = "Google";
  maxLevel = 20;
  style = "y";
  subdomains = "0123";
  // 已失效
  // public url = "https://gac-geo.googlecnapps.cn/maps/vt?lyrs={style}&x={x}&y={y}&z={z}";
  // 2024年新地址，不知道能坚持多久。 续：坚持不到10天就挂了。
  // public url = "https://gac-geo.googlecnapps.club/maps/vt?lyrs={style}&x={x}&y={y}&z={z}";
  // 访问原版google，你懂的
  url = "http://mt{s}.google.com/vt/lyrs={style}&src=app&x={x}&y={y}&z={z}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class yE extends Z {
  attribution = "MapTiler";
  token = "get_your_own_key_QmavnBrQwNGsQ8YvPzZg";
  format = "jpg";
  style = "satellite-v2";
  url = "https://api.maptiler.com/tiles/{style}/{z}/{x}/{y}.{format}?key={token}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class wE extends Z {
  dataType = "image";
  attribution = "Stadia";
  url = "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}.jpg";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class rE extends Z {
  dataType = "image";
  attribution = "天地图[GS(2023)336号]";
  token = "";
  style = "img_w";
  subdomains = "01234";
  url = "https://t{s}.tianditu.gov.cn/DataServer?T={style}&x={x}&y={y}&l={z}&tk={token}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class cE extends Z {
  dataType = "quantized-mesh";
  attribution = "天地图[GS(2023)336号]";
  token = "";
  subdomains = "01234";
  url = "https://t{s}.tianditu.gov.cn/mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class nE extends Z {
  dataType = "image";
  style = "sateTiles";
  attribution = "腾讯[GS(2023)1号]";
  subdomains = "0123";
  maxLevel = 18;
  isTMS = !0;
  // public url = "https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}";
  sx = 0;
  sy = 0;
  url = "https://p{s}.map.gtimg.com/{style}/{z}/{sx}/{sy}/{x}_{y}.jpg";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
  _getTileUrl(A, g, I) {
    return this.sx = A >> 4, this.sy = (1 << I) - g >> 4, super._getTileUrl(A, g, I);
  }
}
class FE extends Z {
  attribution = "中科星图[GS(2022)3995号]";
  token = "";
  style = "img";
  format = "webp";
  subdomains = "12";
  url = "https://tiles{s}.geovisearth.com/base/v1/{style}/{z}/{x}/{y}?format={format}&tmsIds=w&token={token}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
class GE extends Z {
  dataType = "quantized-mesh";
  attribution = "中科星图[GS(2022)3995号]";
  token = "";
  subdomains = "012";
  url = "https://tiles{s}.geovisearth.com/base/v1/terrain/{z}/{x}/{y}.terrain&token={token}";
  constructor(A) {
    super(A), Object.assign(this, A);
  }
}
const SE = `
varying vec2 vUv;
uniform vec3 bkColor;
uniform vec3 airColor;

void main() {  
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
}  
`, ME = `
varying vec2 vUv;
uniform vec3 bkColor;
uniform vec3 airColor;

void main() {   

    // 当前点距中点的距离
    float d = distance(vUv, vec2(0.5f)); 
    d = d * d * 100.0f;
    
    if(d<0.98f){
        // 球体颜色
        float a = smoothstep(0.0f,1.0f,d);     
        gl_FragColor = vec4(vec3(0.0f), a);               
    } else if(d<=1.0f){
        float c = (d-0.98f)/(1.0f-0.98f);        
        gl_FragColor =vec4(mix(vec3(0.0f),airColor,c),1.0f);        
    } else if(d<=1.1f){        
        float c = (d-1.0f)/(1.1f-1.0f);
        gl_FragColor = vec4(mix(airColor,bkColor,sqrt(c)),1.0f);
    } else{
        // 球体外颜色
        gl_FragColor = vec4(bkColor,1.0f);
    }
    
    // #include <tonemapping_fragment>
    // #include <encodings_fragment>    
    // #include <colorspace_fragment>
    
}  
`;
class Bg extends kg {
  constructor(A) {
    super({
      uniforms: Ug.merge([
        Jg.fog,
        {
          bkColor: {
            value: A.bkColor
          },
          airColor: {
            value: A.airColor
          }
        }
      ]),
      transparent: !0,
      depthTest: !1,
      vertexShader: SE,
      fragmentShader: ME,
      lights: !1
    });
  }
}
class LE extends tI {
  get bkColor() {
    return this.material.uniforms.bkColor.value;
  }
  set bkColor(A) {
    this.material.uniforms.bkColor.value.set(A);
  }
  constructor(A, g = new aI(6724044)) {
    super(new dA(5, 5), new Bg({ bkColor: A, airColor: g })), this.renderOrder = 999;
  }
}
const KE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArcGisDemSource: tE,
  ArcGisSource: sE,
  BingSource: aE,
  EarthMaskMaterial: Bg,
  FakeEarth: LE,
  GDSource: hE,
  GLViewer: DE,
  GeoqSource: RE,
  GoogleSource: NE,
  MapBoxSource: oE,
  MapTilerSource: yE,
  StadiaSource: wE,
  TDTQMSource: cE,
  TDTSource: rE,
  TXSource: nE,
  ZKXTQMSource: GE,
  ZKXTSource: FE
}, Symbol.toStringTag, { value: "Module" }));
export {
  eI as FileLoaderEx,
  hI as ImageLoaderEx,
  p as LoaderFactory,
  kA as Tile,
  JE as TileDEMGeometry,
  PI as TileGeometry,
  jI as TileGeometryLoader,
  Vg as TileLoader,
  Pg as TileLoadingManager,
  _I as TileMap,
  TI as TileMaterial,
  UE as TileSimpleGeometry,
  Z as TileSource,
  zg as TileTextureLoader,
  AI as addSkirt,
  FI as author,
  jA as concatenateTypedArrays,
  XI as getBoundsCoord,
  Tg as getGeometryDataFromDem,
  bI as getGridIndices,
  ZI as getNormals,
  RI as getSafeTileUrlAndBounds,
  KE as plugin,
  Kg as version
};
