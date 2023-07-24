/*$$
 $ @Author: lxf
 $ @Date: 2023-07-20 15:17:49
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-07-20 15:17:50
 $ @FilePath: \node-study-program\demo\translateWCData copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-07-20 14:30:55
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-07-20 15:12:36
 $ @FilePath: \node-study-program\demo\translateWCData.js
 $*/
const fs = require("fs")
const olddata = require('./data/wcMicrogrid.json').features
const newdata = require('./data/万春镇微网格总.json').features


olddata.forEach(oldd => {
    newdata.forEach(newd => {
        if (oldd.attributes["X"] == newd.properties["X"]) {
            Object.assign(oldd.attributes, newd.properties)
            Object.assign(oldd.geometry.rings, newd.geometry.coordinates[0])

        }
    })
})

fs.writeFileSync('./data/new.json', JSON.stringify(olddata))
