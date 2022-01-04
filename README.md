# counter ![viewed](https://count.jenkey2011.xyz/badge?id=jenkey2011.count_viewed)

A service that allows you to create simple numeric counters and display as a badge on the page, easy to use and configurable. It is generally used for statistics of blog or page visits. 

## Usage

```html
<!-- or <img src="https://count.jenkey2011.xyz/badge?id=jenkey2011.count"> -->
![viewed](https://count.jenkey2011.xyz/badge?id=jenkey2011.count)
```
![viewed](https://count.jenkey2011.xyz/badge?id=jenkey2011.count)

## Parameters

Img url parameters: `https://count.jenkey2011.xyz/badge?id=$id[&label=$label&labelColor=$labelColor&color=$color&style=$style]`

|  Parameter |  Description | Type | Default Value | Accepted Valuess | Required
| :------------ | :------------ |:------------ |:------------ |:------------ | :------------ |
| `id` | Counter id  | `string`  | - | `$namespace.$key`(e.g. jenkey2011.count)  |  **Yes** |
| `label` | Label of the badge  | `string` | `count` | `any`(e.g. viewed) <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&label=viewed) | **No** |
| `labelColor` | Background to the left of the badge  | `color`  | `555`  | `HEX`(e.g. d8b124)  <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&labelColor=d8b124)| **No** |
| `color` | Background to the right of the badge  | `color`  | `555`  | `HEX`(e.g. d9634d) <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&color=d9634d)| **No** |
| `style` | style of the badge  | `string`  | `flat`  | `plastic | flat | flat-square | for-the-badge | social` (e.g. for-the-badge) <br/>![](https://count.jenkey2011.xyz/badge?id=jenkey2011.count&style=for-the-badge) | **No** |