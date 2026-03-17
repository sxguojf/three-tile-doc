# 数据源配置

## 内置数据源

### ArcGIS

```typescript
// 影像
new plugin.ArcGisSource()

// 影像（带样式）
new plugin.ArcGisSource({ style: "Reference/World_Boundaries_and_Places" })

// 地形
new plugin.ArcGisDemSource()
```

### Mapbox

```typescript
// 影像（需要 token）
new plugin.MapboxSource({ token: "your-token" })

// 地形
new plugin.MapboxDemSource({ token: "your-token" })
```

### Google

```typescript
new plugin.GoogleSource()
```

### Bing

```typescript
new plugin.BingSource()
```

### 高德

```typescript
new plugin.GDSource()

// 带样式
new plugin.GDSource({ style: "8" })
```

### 腾讯

```typescript
new plugin.TXSource()
```

### 天地图

```typescript
// 影像
new plugin.TDTSource()

// 矢量
new plugin.TDTSource({ type: "vec" })

// 地形
new plugin.TDTDemSource()
```

### 百度/Geoq (智图)

```typescript
new plugin.GeoqSource()
```

### MapTiler

```typescript
new plugin.MapTilerSource({ token: "your-token" })
```

### Stadia

```typescript
new plugin.StadiaSource()
```

### 中科星图

```typescript
new plugin.ZKXTSource()
```

## 多数据源叠加

```typescript
const map = tt.TileMap.create({
    imgSource: [
        new plugin.ArcGisSource(),
        new plugin.GDSource({ style: "8" })
    ],
    demSource: new plugin.ArcGisDemSource(),
});
```

## 自定义数据源

实现 `ISource` 接口：

```typescript
class CustomSource implements tt.ISource {
    getType() { return "CustomSource"; }
    getUrl(x: number, y: number, z: number): string {
        return `https://example.com/${z}/${x}/${y}.png`;
    }
    getTileBounds(x: number, y: number, z: number): [number, number, number, number] {
        // 计算瓦片边界
    }
}
```

详细自定义方式参考官方文档。
