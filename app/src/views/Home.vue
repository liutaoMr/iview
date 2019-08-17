<template>
  <Layout class="home">
    <headNav></headNav>
    <Content>
      <information-collection></information-collection>
      <barcode-handle></barcode-handle>
    </Content>

  </Layout>
</template>
<script>
  import headNav from './nav/headNav'
  import InformationCollection from './informationCollection/InformationCollection'
  import BarcodeHandle from './barcodeHandle/barcodeHandle'

  export default {
    mounted(){
      // document.onkeydown = function(e) {
      //   var keyCode = e.keyCode || e.which || e.charCode;
      //   var ctrlKey = e.ctrlKey || e.metaKey;
      //   if(ctrlKey && keyCode == 123) {
      //     alert('ctrl+s')
      //   }
      //   e.preventDefault();
      //   return false;
      // }
    },
    data () {
      return {

      }
    },
    components: {
      BarcodeHandle,
      headNav,
      InformationCollection,
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {

    }
  }
</script>
<style scoped>

</style>
