<template>
  <div>
    <el-button type="primary" @click="showAddUser" class="btn-add-user">新增用户</el-button>

    <el-dialog title="添加用户" v-model="userDialogVisible" size="tiny">
      <el-form :model="userForm" ref="userForm" :rules="userRules">
        <el-form-item label=" 邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="userForm.email" auto-complete="off" placeholder="请填写  邮箱前缀"></el-input>
        </el-form-item>
        <el-form-item label="组群" :label-width="formLabelWidth">
          <el-input v-model="userForm.group" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth" prop="role">
          <el-select v-model="userForm.role" filterable placeholder="请选择用户角色">
            <el-option v-for="role in allRoles" :label="role.roleName" :value="role.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="babel">
  const EMPTY_USER_FORM = { email: '', group: '', role: '' }

  export default {
    name: 'permissionSetting',
    data () {
      return {
        // user tab
        allRoles: [],

        // user dialog
        userDialogVisible: false,
        userForm: Object.assign({}, EMPTY_USER_FORM),
        userRules: {
          email: [
            { required: true, message: '请输入用户  邮箱前缀', trigger: 'blur' },
            { min: 1, max: 50, message: '长度不得超过50个字符', trigger: 'blur' }
          ],
          role: [{ required: true, type: 'integer', message: '请选择用户角色', trigger: 'change' }]
        },

        // common
        formLabelWidth: '120px'
      }
    },
    methods: {
      // user tab
      showAddUser () {
        let _vm = this
        setTimeout(function () {
          let arr = JSON.parse('[{"id":1,"roleName":"test1"},{"id":2,"roleName":"test18"},{"id": 3,"roleName":"test158"},{"id":4,"roleName":"test1458"},{"id":5,"roleName":"test15458"}]')

          _vm.allRoles = arr
          _vm.userDialogVisible = true
        }, 100)
      },
      addUser () {
        let _vm = this

        this.$refs['userForm'].validate((valid) => {
          if (valid) {
            setTimeout(function () {
              _vm.userDialogVisible = false
              _vm.userForm = Object.assign({}, EMPTY_USER_FORM)
            }, 100)
          } else {
            _vm.$message.error('请检查所有字段填写正确后再提交')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
