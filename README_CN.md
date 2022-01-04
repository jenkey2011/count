# counter

一个简单的计数器服务，简单、好用、可配置，一般用于博文或者页面访问统计。

## 使用

```html
<!-- 或者 <img src="https://count.jenkey2011.xyz/badge?id=jenkey2011.count"> -->
![viewed](https://count.jenkey2011.xyz/badge?id=jenkey2011.count sdfds)
```
![viewed](https://count.jenkey2011.xyz/badge?id=jenkey2011.count)

## 参数

图片连接: `https://count.jenkey2011.xyz/badge?id=$id[&label=$label&labelColor=$labelColor&color=$color&style=$style]`

|  参数 |  说明 | 类型 | 默认值 | 允许值 | 是否必选
| :------------ | :------------ |:------------ |:------------ |:------------ | :------------ |
| `id` | 计数ID  | `string`  | - | `$namespace.$key`(例： jenkey2011.count)  |  **是** |
| `label` | 徽章文字  | `string` | `count` | `any`(例： viewed) <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&label=viewed) | **否** |
| `labelColor` | 徽章左侧背景  | `color`  | `555`  | `HEX`(例： d8b124)  <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&labelColor=d8b124)| **否** |
| `color` | 徽章右侧背景 | `color`  | `555`  | `HEX`(例： d9634d) <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&color=d9634d)| **否** |
| `style` | 徽章样式  | `string`  | `flat`  | `plastic | flat | flat-square | for-the-badge | social` (例： for-the-badge) <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&style=for-the-badge) | **否** |