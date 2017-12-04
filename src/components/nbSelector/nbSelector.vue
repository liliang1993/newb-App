<template>
  <div>
    <group>
      <cell
        is-link
        :border-intent="false"
        :arrow-direction="showOptions ? 'up' : 'down'"
         @click.native="showOptions = !showOptions"
      >
        
      </cell>
    </group>
  </div>
</template>

<script>
import {Group, Cell} from 'vux'
export default {
  name:'nbInput',
  components: {
    Group,
    Cell
  },
  data () {
    return {
      showOptions: false
    }
  }
}
</script>

<style>

</style>
