<template>
  <div id="app">

    <editor
      api-key="xwp1jxf1m54e2pl8gxp9s1d4zdjxw0xs6dw21853us0ahbe4"
      :init="editorConf"
      :value="value"
      v-model="contentHtml"
      :placeholder="placeholder"
    />
  </div>
</template>

 <script>
import Editor from '@tinymce/tinymce-vue'
import { upload } from './utils/upload'
export default {
   name: 'Editor',
   components: {
     'editor': Editor
   },
   data () {
       return {
         contentHtml: '',
           editorConf: {
                height: 500,
                 selector: 'textarea',
                // menubar: false,
                menubar: 'insert',
                image_caption: true,
                 images_upload_handler: upload,
                plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
                'image imagetools',
                'fullscreen'

                ],
                fullscreen_native: true,
                toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat |image|fullscreen| help'
            }

       }
   },
   props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' }
   },
   watch: {
     contentHtml (val) {
       console.log(val)
        this.$emit('change', val)
     }
   }
 }
 </script>
