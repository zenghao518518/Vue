<template>
   <div class="login">
        <div class="relative">
          <div class="left">
            <el-row>
                <el-col :span="24">
                  <div class="homepageLogo">
                    <ul style="list-style:none">
                      <li >
                        <el-image style="width: 50px; height: 50px" :src="vitelable" fit="fit" />
                     </li>
                     <li><span>Monitor</span></li>
                    </ul>
                  </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-image class="boxbg" :src="url" fit="fit"/>
                    <p class="p1">欢迎使用监控管理系统</p>
                 
                </el-col>
            </el-row>
          </div>
          <div class="right">
            <el-row>
             <el-col :span="24">
                 <h2>登录</h2>
             </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form :model="form" label-width="120px" label-positione="top" size="large" class="form"
                 :rules="rules"  ref="ruleFormRef">
                 <el-form-item label="用户名" prop="userName">
                  <el-input v-model="form.userName"/>                
                </el-form-item>
                 <el-form-item label="密码" prop="passWord">
                     <el-input v-model.number="form.passWord" type="password" show-password
                        @keyup.enter="onSubmit(ruleFormRef)"/>
                 </el-form-item>
                 <el-form-item>
                    <el-button class="submitBtn" type="primary" @click="onSubmit(ruleFormRef)">登录
                    </el-button>
                </el-form-item>

                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
   </div>
</template>
<script lang="ts" setup>
import {reactive,ref} from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import store from '../store/index'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router=useRouter()
const url = ref( '/1.jpg')
const boxbg = ref('/2.jpg')
const vitelable = ref('/vite.svg')
const form=reactive({
    userName:'',
    passWord:''

})
const ruleFormRef=ref<FormInstance>()
const rules=reactive<FormRules>({
    userName:[{required:true,message:"请输入用户名",trigger:'blur'}],
    passWord:[{required:true,message:"请输入密码",trigger:'blur',type:"number"}]

})
const onSubmit=async (ruleFormRef: FormInstance | undefined)=>{
    if(!ruleFormRef) return;
    await ruleFormRef.validate(async(valid,fields)=>{
          if(valid){
            ElMessage.success("登录成功!"),
            store().EditUserId(parseInt(form.passWord)),
            router.push({path:"/home"})
          }else{
            let errors:string=""
            fields?.userName?.forEach(element=>{
                errors +=element.message + ';'
            });   
            fields?.passWord?.forEach(element=>{
                errors +=element.message + ';'
            });   
            ElMessage.error(errors)

          }
    })

}
</script>

<style lang="scss" scoped>
body{
margin: 0;
height: 100%;
#app{height: 100%;}

}



.login {
     width: 100%;
     height: 100%;
     .relative{
        width: 100%;
        height: 100%;
        text-align: center;

        .ul.li {
   display: none;
}

        .left{
            width: 50%;
            height: 100%;
            float: left;
            //background-image: url('/2.jpg');
        .boxbg{
            width: 350px;
            height: 350px;
            margin-top: 100px;
        }
        .homepageLogo
        {
            height: 50px;
            line-height: 50px;
            margin-top: 40px;

        }
       
        .right{
          
            width: 50%;
            height: 100%;
            float: right;
        }
        
        .form{
            padding-top: 100px;
            margin-top: 100px;

        }
        }


     }

}


</style>