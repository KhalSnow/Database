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

</style>