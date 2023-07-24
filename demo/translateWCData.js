/*$$
 $ @Author: lxf
 $ @Date: 2023-07-20 14:30:55
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-07-24 17:19:55
 $ @FilePath: \node-study-program\demo\translateWCData.js
 $*/
const fs = require("fs")
const olddatar = require('./data/wcMicrogrid.json')
const olddata = olddatar.features
const newdata = require('./data/万春镇微网格总.json').features

const temp = newdata.map((x, index) => {
    return {
        attributes: {
            "FID": index + '',
            "村社区": x.properties["村社区"],
            "一般网格": x.properties["一般网格"],
            "微网格": x.properties["所辖区"],
            "责任人": x.properties["姓名"],
            "联系电话": x.properties["联系方式"],
            "X": x.properties["X"],
            "Y": x.properties["Y"]
        },
        geometry: { rings: x.geometry.coordinates.length > 1 ? [...x.geometry.coordinates[0], ...x.geometry.coordinates[1]] : x.geometry.coordinates[0] }
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
    (x.geometry.rings.length > 1) && console.log(x.attributes['责任人'], x.geometry.rings.length)
})

olddatar.features = temp
fs.writeFileSync('./data/new.json', JSON.stringify(olddatar))
