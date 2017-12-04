<template>
  <div>
    <group>
        <x-switch title="快速下单"  :value-map="['false', 'true']" >    
        </x-switch>
    </group>
    <group>
        <x-switch title="快速平仓" :value-map="['false', 'true']"></x-switch>
      </group>
      <group>
        <x-switch title="快速启动快讯速递" :value-map="['false', 'true']"></x-switch>
      </group>
      <group>
        <x-switch title="启动交易音效" :value-map="['false', 'true']"></x-switch>
      </group>
  </div>
</template>

<script>
import { XSwitch, Group } from 'vux'

export default {
  name:'account-tradeSetting',
  components: {
    XSwitch, 
    Group
  },
}
</script>

<style>

</style>
