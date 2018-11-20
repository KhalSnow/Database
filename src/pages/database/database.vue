<template>
  <div>
    <Header></Header>
    <CRUD></CRUD>
  </div>
</template>

<script>
import Header from './components/header'
import CRUD from './components/crud'
export default {
  name: 'Database',
  components: {
    Header,
    CRUD
  }
}
  
</script>

<style>
#tb{
  width:800px;
  border-collapse: collapse;
  margin: 20px auto;
}
#tb th{
  background-color: #0094ff;
  color: white;
  font-size: 16px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
}
#tb td{
  padding: 5px;
  text-align: center;
  border: 1px solid black;
}
</style>