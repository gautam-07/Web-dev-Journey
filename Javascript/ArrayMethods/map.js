// Map array method


const Names = [" timothee", "   darth_hater", "sassyfrassy   ", " elton john   "]

const cleanNames = Names.map(function(str){
    return str.trim();
})

console.log(cleanNames)

