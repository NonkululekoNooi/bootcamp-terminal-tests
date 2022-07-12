module.exports = function mostProfitableDepartment(salesData){

    var saleMap = {}
    
    for(var i =0; i<salesData.length; i++){
    var data = salesData[i]
    saleMap[data.department] = 0
      //  console.log(saleMap)
    
    
    }
      
    for(var i =0; i<salesData.length; i++){
    var data = salesData[i]
    var currentDepartmentTotal =saleMap[data.department] 
    
    currentDepartmentTotal += data.sales
      
      saleMap[data.department] = currentDepartmentTotal
       // console.log(saleMap)
     
    }
      var currentMaxSales =0
      var currentSales = ""
      for(const department in saleMap){
        
        const currentDepartmentSales = saleMap[department]
        
        if(currentDepartmentSales > currentMaxSales){
        currentMaxSales = currentDepartmentSales
          currentSales = department
        }
        
      }
      return currentSales
     // console.log(currentMaxSales)
     //    console.log(currentSales)
     
      
      }
      function mostProfitableDepartment(salesData2){

        var saleMap = {}
        
        for(var i =0; i<salesData2.length; i++){
        var data = salesData2[i]
        saleMap[data.department] = 0
          //  console.log(saleMap)
        
        
        }
          
        for(var i =0; i<salesData2.length; i++){
        var data = salesData2[i]
        var currentDepartmentTotal =saleMap[data.department] 
        
        currentDepartmentTotal += data.sales
          
          saleMap[data.department] = currentDepartmentTotal
           // console.log(saleMap)
         
        }
          var currentMaxSales =0
          var currentSales = ""
          for(const department in saleMap){
            
            const currentDepartmentSales = saleMap[department]
            
            if(currentDepartmentSales > currentMaxSales){
            currentMaxSales = currentDepartmentSales
              currentSales = department
            }
            
          }
          return currentSales
      
         
          
          }
    
      