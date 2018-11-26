<template>
  <div class='crud'>
    <div style="padding:20px;text-align:center;">
      <input type='number' v-model='queryParams.EmpID'>
      <input type='text' v-model='queryParams.Name'>
      <input type='text' v-model='queryParams.EmpCode'>
      <input type='number' v-model='queryParams.Salary'>
      <button @click='saveForm'>添加数据</button>
    </div>

    <div style="padding:20px;text-align:center;">
      <input type='number' v-model='EmpID'>
      <button @click='getOneUser(EmpID)'>请输入您想查询的ID</button>
    </div>
    
    <table class='tb'>
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>工牌</th>
          <th>薪水</th>
        </tr>
      </thead>

      <tr v-show='tableData.length == 0'>
        <td colspan='4'>当前列表无数据</td>
      </tr>

      <tr v-for='(item, index) in tableData'>
        <td>{{item.EmpID}}</td>
        <td>{{item.Name}}</td>
        <td>{{item.EmpCode}}</td>
        <td>{{item.Salary}}</td>
        <td>
          <a href='javascript:void(0);' @click='deleteUser(item.EmpID)'>删除</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { getUser, getOneUser, addUser, deleteUser, updateUser } from '@/api/crud/crud.js'

  export default {
      name: 'Crud',
      data () {
        return {
          queryParams: {
            EmpID: 0,
            Name: '',
            EmpCode: '',
            Salary: 0,
          },
          tableData: [],
          EmpID: 0,
          Name: '',
          EmpCode: '',
          Salary: 0
        }
      },
      created() {
        this.fetchData()
      },
      methods: {
        fetchData() {
          getUser(this.queryParams).then(response => {
            this.tableData = response.data.data
          })
        },
        getOneUser(EmpID) {
          if (EmpID != 0) {
            getOneUser(EmpID).then(response => {
              console.log(response)
              this.tableData = response.data.data
            })
          } else {
            this.fetchData()
          }
        },
        deleteUser(EmpID) {
          if (!confirm('是否要删除数据？')) {
            return;
          }
          deleteUser({"EmpID": EmpID}).then(response => {
            this.fetchData()
          }).catch(err => {
            this.fetchData()
          })
        },
        saveForm() {
          var params = {
            EmpID: this.queryParams.EmpID,
            Name: this.queryParams.Name,
            EmpCode: this.queryParams.EmpCode,
            Salary: this.queryParams.Salary
          }
          if (this.queryParams.EmpID == 0) { //新增
            addUser(params).then(response => {
              this.fetchData()
            }).catch(err => {
            this.fetchData()
          })
          } else { //修改
            updateUser(params).then(response => {
              this.fetchData()
            }).catch(err => {
            this.fetchData()
          })
          }
        }
      }
    }

</script>

<style scoped>
  .tb{
    width:800px;
    border-collapse: collapse;
    margin: 20px auto;
  }
  .tb th{
    background-color: #0094ff;
    color: white;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    border: 1px solid black;
  }
  .tb td{
    padding: 5px;
    text-align: center;
    border: 1px solid black;
  }
</style>
