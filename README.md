# counter

A service that allows you to create simple numeric counters and display as a badge on the page, easy to use and configurable. It is generally used for statistics of blog or page visits. 

## Usage

```html
<!-- or <img src="http://127.0.0.1:3000/badge?id=jenkey2011.count"> -->
![viewed](http://127.0.0.1:3000/badge?id=jenkey2011.count sdfds)
```
![viewed](http://127.0.0.1:3000/badge?id=jenkey2011.count)

## Parameters

Img url parameters: `http://localhost:3000/badge?id=$id[&label=$label&labelColor=$labelColor&color=$color&style=$style]`

|  Parameter |  Description | Type | Default Value | Accepted Valuess | Required
| :------------ | :------------ |:------------ |:------------ |:------------ | :------------ |
| `id` | Counter id  | `string`  | - | `$namespace.$key`(e.g. jenkey2011.count)  |  **Yes** |
| `label` | Label of the badge  | `string` | `count` | `any`(e.g. viewed) <br/>![](http://127.0.0.1:3000/badge?id=jenkey2011.count&label=viewed) | **No** |
| `labelColor` | Background to the left of the badge  | `color`  | `555`  | `HEX`(e.g. d8b124)  <br/>![](http://127.0.0.1:3000/badge?id=jenkey2011.count&labelColor=d8b124)| **No** |
| `color` | Background to the right of the badge  | `color`  | `555`  | `HEX`(e.g. d9634d) <br/>![](http://127.0.0.1:3000/badge?id=jenkey2011.count&color=d9634d)| **No** |
| `style` | style of the badge  | `string`  | `flat`  | `plastic | flat | flat-square | for-the-badge | social` (e.g. for-the-badge) <br/>![](http://127.0.0.1:3000/badge?id=jenkey2011.count&style=for-the-badge) | **No** |