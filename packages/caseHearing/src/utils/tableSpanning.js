const test='test'
let selectObj={}
let selectedItem=function(newList,OldList,options){
    console.log('tagger')
    console.log(newList,OldList,options)
    if(!OldList||OldList.length<1){
        return newList
    }
    return newList
}

module.exports={
   getItem:function () {
       return test
   },
    set:function (item,target) {
       if(item.length<1){
           return false
       }
       selectObj[target]=item
    },
    get:function (target) {
        return selectObj[target]
    },
    selectedItem:function (newList,OldList,options) { 
        return selectedItem(newList,OldList,options)

    }

}