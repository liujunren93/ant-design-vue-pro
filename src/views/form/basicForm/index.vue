<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper :title="false" :content="$t('form.basic-form.basic.description')">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          :label="$t('form.basic-form.title.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            v-decorator="[
              'name',
              {rules: [{ required: true, message: $t('form.basic-form.title.required') }]}
            ]"
            name="name"
            :placeholder="$t('form.basic-form.title.placeholder')" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.date.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-range-picker
            name="buildTime"
            style="width: 100%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.goal.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea
            rows="4"
            :placeholder="$t('form.basic-form.goal.placeholder')"
            v-decorator="[
              'description',
              {rules: [{ required: true, message: $t('form.basic-form.goal.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.standard.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea
            rows="4"
            :placeholder="$t('form.basic-form.standard.placeholder')"
            v-decorator="[
              'type',
              {rules: [{ required: true, message: $t('form.basic-form.standard.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.client.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            :placeholder="$t('form.basic-form.client.placeholder')"
            v-decorator="[
              'customer',
              {rules: [{ required: true, message: $t('form.basic-form.client.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.invites.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
        >
          <a-input :placeholder="$t('form.basic-form.invites.placeholder')" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.weight.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
        >
          <a-input-number :min="0" :max="100" />
          <span> %</span>
        </a-form-item>
        <a-form-item
          label="sdsadsdsa"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"

        >
          <Editor
            placeholder="afdsa"
            v-decorator="[
              'text',
              {rules: [{ required: true, message: $t('form.basic-form.client.required') }],initialValue:'111111'}
            ]" />
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary">{{ $t('form.basic-form.form.submit') }}</a-button>
          <a-button style="margin-left: 8px">{{ $t('form.basic-form.form.save') }}</a-button>
        </a-form-item>
      </a-form>
    </a-card>

  </page-header-wrapper>
</template>

<script>

import Editor from '@/components/Editor/tinymce/Tinymce'
export default {
  name: 'BaseForm',
  components: { Editor },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        console.log(values)
        if (err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
