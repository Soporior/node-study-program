/*$$
 $ @Author: lxf
 $ @Date: 2023-07-20 14:30:55
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-07-24 17:34:14
 $ @FilePath: \node-study-program\demo\translateYBWG.js
 $*/
const fs = require("fs")
const olddatar = require('./data/wcybwgcopy.json')
const olddata = olddatar.features
const newdata = require('./data/万春镇一般网格.json').features

const temp = newdata.map((x, index) => {
    return {
        attributes: {
            "FID": index + '',
            "村社区": x.properties["村社区"],
            "一般网格": x.properties["服务站"],
            "负责人": x.properties["服务站站长"],
            "联系电话": x.properties["站长电话"],
            "Shape_Area": x.properties["Shape_Area"],
            "X": x.properties["X"],
            "Y": x.properties["Y"]
        },
        geometry: { rings: x.geometry.coordinates.length > 1 ? [...x.geometry.coordinates[0], ...x.geometry.coordinates[1]] : x.geometry.coordinates[0] }
        // geometry: { rings: x.geometry.coordinates }

    }
})

temp.forEach(x => {
    x.geometry.rings.forEach(z => {
        z.forEach(y => {
            y.length == 3 && y.pop()
        })
    })

})
temp.forEach(x => {
    (x.geometry.rings.length > 1) && console.log(x.attributes['负责人'], x.geometry.rings.length)
})

olddatar.features = temp
fs.writeFileSync('./data/一般网格.json', JSON.stringify(olddatar))
