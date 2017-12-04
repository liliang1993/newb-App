<template>
  <div style='padding-left:20px;padding-right:15px;'>
    <group class='nb-group_hasMargin vux-1px' >
      <x-input label-width='5.8em' title="姓名" :readonly='true' >
      </x-input>
    </group>
    <group class='nb-group_hasMargin  vux-1px ' >
      <x-input label-width='5.8em' title="身份证号码" >
      </x-input>
    </group>
    <group class='nb-group_hasMargin ' >
      <x-input label-width='5.8em' title="交易账号" >
      </x-input>
    </group>
    <group class='nb-group_hasMargin '> 
      <cell label-width='5.8em' title="支付通道" is-link @click.native='showChannel = true'>
      </cell>
    </group>
    <group class='nb-group_hasMargin' >
      <x-input label-width='5.8em' title="入金金额">
      </x-input>
    </group>
    <group class='nb-group_hasMargin' >
      <x-input label-width='5.8em' title="选择银行卡">
      </x-input>
    </group>
    <x-button  type="primary" style='margin-top:20px;'>确定</x-button> 

    <div v-transfer-dom>
      <popup v-model="showChannel">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <popup-header
        left-text="取消"
        right-text="确定"
        title="请选择支付通道"
        :show-bottom-border="false"
        @on-click-left="showChannel = false"
        @on-click-right="showChannel = false"></popup-header>
        <group gutter="0">
          <radio :options='["支付通道1", "支付通道2", "支付通道3"]'></radio>
        </group>
      </popup>
    </div>
  </div>  
</template>

<script>
import {Group, XInput, Cell, Flexbox, FlexboxItem, TransferDom, XButton, Radio, PopupHeader,
    Popup} from 'vux'
import {nbSelector} from 'components/nbSelector/nbSelector'
export default {
  name:'capital-homePage',
  components: {
    Group, 
    XInput,
    Cell,
    Flexbox, 
    FlexboxItem,
    XButton,
    nbSelector,
    PopupHeader,
    Popup,
    Radio
  },

  directives: {
    TransferDom
  },

  data () {
    return {
        showChannel: false,
    }
  }  
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
.nb-group_hasMargin{
  .weui-label{
    position:relative;
    &::before {
      content: " ";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-right: 1px solid #9f9f9f;
      color: #9f9f9f;
      transform-origin: 100% 0;
      transform: scaleX(0.5);
    }
  }
  .weui-input {
    padding-left:10px;
  }
}
</style>
  