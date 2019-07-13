<template>
    <div>
        <a-form layout="horizontal" :form=form>
            <a-form-item
              label="付款密码"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              >
              {{step.payAccount}}
            </a-form-item>
            <a-form-item
              label="付款密码"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              >
                <a-input type="password"
                  v-decorator="[
                  'password',
                   {
                       initialValue: step.payAccount,
                       rules: [{ required: true, message: '请输入付款密码'}]
                   }
                  ]"
                  playholder="请输入付款密码"
                />
            </a-form-item>
            <a-form-item>
                <a-button style="margin-right:8px" @click="onPrev">上一步</a-button>
                <a-button type="primary" @click="handleSummit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    data() {
        this.form = this.$form.createForm(this);
        return {
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 }
            }
        }
    },
    computed: {
        step() {
            return this.$store.state.form.step;
        }
    },
    methods: {
        handleSummit() {
            const { form, $store, step } = this;
            form.validateFields((err,values) => {
                if(!err) {
                    $store.dispatch({
                        type: "form/submitStepForm",
                        payload: {...step, ...values}
                    });
                }
            })
        },
        onPrev() {
            this.$router.push('/form/step-form/info')
        }
    }

}
</script>

<style>

</style>
