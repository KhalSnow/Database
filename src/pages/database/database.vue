<template>
  <div id='app'>
    <input type='number' v-model='EmpID'>
    <input type='text' v-model='Name'>
    <input type='text' v-model='EmpCode'>
    <input type='number' v-model='Salary'>
    <button @click='addData'>添加数据</button>
    <br />

    <input type="text/number" v-model='Query' placeholder="Query Condition">
    <button @click='queryData'>查询</button>

    <table id='tb'>
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>工牌</th>
          <th>薪水</th>
        </tr>
      </thead>

      <tr v-show='list.length == 0'>
        <td colspan='4'>当前列表无数据</td>
      </tr>

      <tr v-for='(item, index) in cache'>
        <td>{{item.EmpID}}</td>
        <td>{{item.Name}}</td>
        <td>{{item.EmpCode}}</td>
        <td>{{item.Salary}}</td>
        <td>
          <a href='javascript:void(0);' @click='modifyData(item, index)'>修改</a> | <a href='javascript:void(0);' @click='delData(item, index)'>删除</a>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: 'Database',
  data: {
    list: [
      { EmpID: '1', Name: 'Gavin Cortez', EmpCode: 'EMP90', Salary: 265400 }
    ],
    cache: [],
    EmpID: 0,
    Name: '',
    EmpCode: '',
    Salary: 0,
    Query: '',
    isActive: false,
    selected: -1,
    selectedlist: {}
    },
    created() {
      this.showList(this.list);
    },
    methods: {
      //输出数据
      showList(arr) {
        this.cache = JSON.parse(JSON.stringify(arr));
      },
      //添加数据
      addData: function () {
        var info = { EmpID: this.EmpID, Name: this.Name, EmpCode: this.EmpCode, Salary: this.Salary };
        this.list.push(info);
        this.cache.push(info);
        this.EmpID = 0,
        this.Name = '',
        this.EmpCode = '',
        this.Salary = 0,
        this.Query = ''
      },
      //删除数据
      delData: function (item, index) {
        if (!confirm('是否要删除数据？')) {
          return;
        }
        this.cache.splice(index, 1);
        this.showList(this.cache);
      },
      //查询数据
      queryData: function () {
        self = this;
        if (self.Query) {
          var arr = [];
          this.cache.forEach (function (item) {
            if (item.EmpID.indexOf(self.Query) != -1) {
              arr.push(item)
            } else if (item.Name.indexOf(self.Query) != -1) {
              arr.push(item);
            } else if (item.EmpCode.indexOf(self.Query) != -1) {
              arr.push(item);
            }
          });
          this.showList(arr);
        } else {
          this.showList(this.list);
        }
      }
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