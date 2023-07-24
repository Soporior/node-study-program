/*$$
 $ @Author: lxf
 $ @Date: 2023-07-20 14:30:55
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-07-20 16:57:29
 $ @FilePath: \node-study-program\demo\translateWCData.js
 $*/
const fs = require("fs")
const olddatar = require('./data/wcMicrogrid.json')
const olddata = olddatar.features
const newdata = require('./data/万春镇微网格总.json').features

const tempArr = []
olddata.forEach(oldd => {
    let flag = true
    let newdtemp
    newdata.forEach(newd => {
        if (oldd.attributes["微网格"] == newd.properties["所辖区"]) {
            oldd.attributes["村社区"] = newd.properties["村社区"],
                oldd.attributes["一般网格"] = newd.properties["一般网格"],
                oldd.attributes["责任人"] = newd.properties["姓名"],
                oldd.attributes["联系电话"] = newd.properties["联系方式"],
                oldd.attributes["X"] = newd.properties["X"],
                oldd.attributes["Y"] = newd.properties["Y"]
            oldd.geometry.rings = newd.geometry.coordinates[0]
            flag = false
        }
        newdtemp = newd

    })
    if (flag) {
        tempArr.push({
            attributes: newdtemp.properties,
            geometry: {
                rings: newdtemp.geometry.coordinates[0]
            }
        })
    }
})
// olddata.push(...tempArr)
olddata.forEach(x => {
    x.geometry.rings[0].forEach(y => {
        y.length == 3 && y.pop()
    })
})

olddatar.features = olddata
fs.writeFileSync('./data/new.json', JSON.stringify(olddatar))
