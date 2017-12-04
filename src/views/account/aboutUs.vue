<template>
  <div class='nb-abouUs'>
    <div class='logo-warpper'>
      <div class='logo'>
        <img src="../../assets/global/logo.png" alt="">
      </div>
      
    </div>
    <group>
      <cell title="公司简历"  is-link >
      </cell>
      <cell title="联系客服"  is-link  link='/account/support'>
      </cell>
      <cell title="当前版本"  value='v0.1' >
      </cell>
    </group>
  </div>
</template>

<script>
import {Cell,Group} from 'vux'
export default {
  name: 'nb-aboutUs',
  components: {
    Cell,Group
  }
}
</script>

<style>
.logo-warpper{
  padding-top: 30px;
   padding-bottom: 20px;
}
.logo{
  width:100px;
  height:100px;
  margin:0 auto;
}
</style>

