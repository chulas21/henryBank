const server = require("express").Router();
const statisticsController = require('../../controllers/statistics.controller');
const moment = require("moment")


server.get('/', (req, res) => {
  const { cvu, type } = req.body;
  var number = 0
  if(type == "months") {
    number = 6
  } else if(type == "weeks"){
    number = 12
  } else if(type == "days"){
    number = 31
  }
  
  statisticsController.getMonth(cvu, number, type)
    .then(result => {
      if (result) {
          var egresos ={}
          var ingresos ={}
          for (let i = 1; i <= number; i++) {
            egresos[i]=0
            ingresos[i]=0
            var dia = moment().subtract(i, type).toDate()
            var dia1= moment().subtract(i-1, type).toDate()
            result.map(pos => {
              if(pos.origin == cvu && pos.createdAt >= dia && pos.createdAt < dia1){
                egresos[i]= egresos[i] +  parseInt(pos.value)
              }
              if(pos.destination == cvu && pos.createdAt >= dia && pos.createdAt < dia1){
                ingresos[i]= ingresos[i] +  parseInt(pos.value)
              }
            })
          }
          res.status(200).json({egresos, ingresos})
      } else {
        res.status(400).send({msg: 'No data founded'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })

})

server.get('/web/:cvu', (req, res) => {
  const { cvu } = req.params;
  const type = 'months'
  var number = 0
  if(type == "months") {
    number = 6
  } else if(type == "weeks"){
    number = 12
  } else if(type == "days"){
    number = 31
  }
  
  statisticsController.getMonth(cvu, number, type)
    .then(result => {
      if (result) {
          var egresos =[]
          var ingresos = []
          for (let i = 1; i <= number; i++) {
            egresos[i]= {type: `${i}`, Expenses: 0}
            ingresos[i]= {type: `${i}`, Income: 0}
            var dia = moment().subtract(i, type).toDate()
            var dia1= moment().subtract(i-1, type).toDate()
            result.map(pos => {
              if(pos.origin == cvu && pos.createdAt >= dia && pos.createdAt < dia1){
                if(egresos[i]){
                  egresos[i].Expenses += parseInt(pos.value)
                }else{
                  egresos[i]= {type: `${i}`, Expenses: pos.value ? (parseInt(pos.value)): 0}
                }
              }
              if(pos.destination == cvu && pos.createdAt >= dia && pos.createdAt < dia1){
                if(ingresos[i]){
                  ingresos[i].Income += parseInt(pos.value)
                }else{
                  ingresos[i]= {type: `${i}`, Income: pos.value ? (parseInt(pos.value)): 0}
                }
              }
            })
          }
          res.status(200).json([...egresos.slice(1,number+1), ...ingresos.slice(1,number+1)])
      } else {
        res.status(400).send({msg: 'No data founded'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })

})


module.exports = server;
