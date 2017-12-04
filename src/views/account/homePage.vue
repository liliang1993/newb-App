<template>
  <div class='nb-account'>
    <div class='nb-account-header'>
        <p class='nb-account-header-container'>
          <span class='nb-account-header_text'>张三</span>
          <label class='nb-account-header_desc'>交易账号: 13325654852</label>
        </p>
    </div>
    <div class='nb-grids-wrapper'>
      <grid class='nb-grids'>
        <grid-item link="/component/cell" label="银行卡">
          <img slot="icon" src="../../assets/account/account-bankCard.png">
        </grid-item>
        <grid-item link="/component/cell" label="银行卡">
          <img slot="icon" src="../../assets/account/account-idCard.png">
        </grid-item>
        <grid-item link="/component/cell" label="银行卡">
          <img slot="icon" style='width:25px; height:32px;' src="../../assets/account/account-telphone.png">
        </grid-item>
      </grid>
    </div>
    <div class='nb-account-cellList'>
      <group>
        <cell title="修改密码"  is-link >
          <div slot='icon'>
            <i class='nb-cell-icon nb-cell-icon_changePassword ' ></i>
          </div>
        </cell>
        <cell title="交易设置"  is-link  link='/account/tradeSetting'>
          <div slot='icon'>
            <i class='nb-cell-icon nb-cell-icon_tradeSetting' ></i>
          </div>
        </cell>
        <cell title="关于我们"  is-link link='/account/aboutUs'>
          <div slot='icon'>
            <i class='nb-cell-icon nb-cell-icon_aboutUs' ></i>
          </div>
        </cell>
        <cell title="清除缓存" value="158" is-link >
          <div slot='icon'>
            <i class='nb-cell-icon nb-cell-icon_clear' ></i>
          </div>
        </cell>
        <cell title="退出"  is-link >
          <div slot='icon'>
            <i class='nb-cell-icon nb-cell-icon_exit' ></i>
          </div>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
import {Grid, GridItem,Group,Cell} from 'vux'
export default {
  name: 'account',
  components: {
    Grid,
    GridItem,
    Cell,
    Group
  }
}
</script>

<style lang='less'>
  .nb-account{
    background-color: #e9e9e9;
    height: 100%;
  }
  .nb-account-header{
    background-color: #48bed4;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
  .nb-account-header_text{
    display: block;
    font-size:26px;
    color: #fff;
  }
  .nb-account-header_desc{
    display: block;
    font-size:20px;
    color: #fff;
  }

  .nb-grids-wrapper{
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
  }
  /*
    nb-grids
  */
  .weui-grids.nb-grids{
    &::before, &::after {
      border-color:transparent;
    }
    .weui-grid {
      padding-top: 5px;
      padding-bottom: 5px;
      &::after{
        border-color:transparent;
      }
    }
  }
  /*
    icon
  */
  .nb-cell-icon{
    display:inline-block;
    width: 30px;
    height: 30px;
    background-size:contain;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-right: 10px;
  }
  .nb-cell-icon_changePassword{
    background-image: url(../../assets/account/icon-changePassword.png);
  }
  .nb-cell-icon_aboutUs{
    background-image: url(../../assets/account/icon-aboutUs.png);
  }
  .nb-cell-icon_clear{
    background-image: url(../../assets/account/icon-clear.png);
  }
  .nb-cell-icon_exit{
    background-image: url(../../assets/account/icon-exit.png);
  } 
  .nb-cell-icon_tradeSetting{
    background-image: url(../../assets/account/icon-tradeSetting.png);
  }
  .nb-cell-icon_messageWarn{
    background-image: url(../../assets/account/icon-messageWarn.png);
  }
</style>
