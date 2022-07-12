let assert = require("assert")
let countAllFromTown = require("../countAllFromTown")

describe ('Check how many registration number is from that town', function(){

it("It should return '3' if the registration is called by the registration number",function(){

 assert.deepEqual(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))


})



   it("It should return '0' if the registration is called by the registration number",function(){

    var fromCapeTown = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341,CF')

    assert.deepEqual(0, fromCapeTown)
   
   
   })
})