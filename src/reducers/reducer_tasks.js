var taskService = require('./tasks.js');

export default function(){

  return (
   taskService.getAll('filters')
  )
}