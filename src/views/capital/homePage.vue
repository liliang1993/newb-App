<template>
  <div class='nb-capital'>
    <div class='nb-capital-header'>
        <div class='nb-capital-header-hd'>
          <span class='nb-capital-header-hd_value'>
            <label class='nb-capital-header-hd_text'>账户资金</label>
            <small class='nb-capital-header-hd_desc'>200.00k</small>
          </span>
        </div>
        <div class='nb-capital-header-bd'>
          <span class='nb-capital-header-bd_value'>
            <span class='nb-capital-header-bd_text'>账户资金</span>
            <label class='nb-capital-header-bd_desc'>200.00k</label>
          </span>
          <span class='nb-capital-header-bd_value'>
            <span class='nb-capital-header-bd_text'>账户资金</span>
            <label class='nb-capital-header-bd_des'>200.00k</label>
          </span>
           <span class='nb-capital-header-bd_value'>
            <span class='nb-capital-header-bd_text'>账户资金</span>
            <label class='nb-capital-header-bd_desc'>200.00k</label>
          </span>
        </div>
    </div>
    
    <group>
      <cell title="净值" value="0.01" >
        <div slot='icon'>
          <i class='nb-cell-icon nb-cell-icon-equity' ></i>
        </div>
      </cell>
      <cell title="浮动盈亏" value="0.01" >
        <div slot='icon'>
          <i class='nb-cell-icon nb-cell-icon-profit' ></i>
        </div>
      </cell>
      <cell title="我的投资" value="0.01" is-link>
        <div slot='icon'>
          <i class='nb-cell-icon nb-cell-icon-myInvest' ></i>
        </div>
      </cell>
      <cell title="出入金明细" value="我是谁" is-link >
        <div slot='icon'>
          <i class='nb-cell-icon nb-cell-icon-accessDetail' ></i>
        </div>
      </cell>
    </group>
    <div class="nb-capital-ft">
      <flexbox justify='space-around' >
      <flexbox-item><x-button plain type="primary" style="border-color:#48bed4;color:#48bed4;" link="/capital/deposit">入金</x-button></flexbox-item>
      <flexbox-item><x-button type="primary" link="/capital/withdraw" style="border:1px solid #48bed4;">出金</x-button></flexbox-item>
    </flexbox>
       
        
    </div> 
  </div>
</template>

<script>
import {Group, Cell,XButton,Flexbox, FlexboxItem} from 'vux'
export default {
  name:'capital-homePage',
  components: {
    Group,
    Cell,
    XButton,
    Flexbox, FlexboxItem
  }
}
</script>

<style lang='less'>
  .nb-capital-header {
    background: url(../../assets/capital/capital-header-bg.png) no-repeat center;
    background-size: cover;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  /*
    header
  */
  .nb-capital-header-hd{
      padding-bottom: 10px;
  }
  .nb-capital-header-hd_value {

  }
  .nb-capital-header-hd_text {
    display: block;
    font-size: 24px;
    color: #fff;
  }
  .nb-capital-header-hd_desc {
     display: block;
    font-size: 28px;
    color: #fff;
  }
  .nb-capital-header-bd{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .nb-capital-header-bd_value {
   
  }
  .nb-capital-header-bd_value {
      color: #fff;
      font-size: 28px;
  }
  .nb-capital-header-bd_text {
      color: #fff;
      font-size: 18px;
  }
  .nb-capital-header-bd_label {
      color: #c2fbff;
      font-size: 20px;
  }
  /*
    cell
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
  .nb-cell-icon-equity{
      background-image: url(../../assets/capital/icon-equity.png);
  }
  .nb-cell-icon-profit{
      background-image: url(../../assets/capital/icon-profit.png);
  }
  .nb-cell-icon-myInvest{
      background-image: url(../../assets/capital/icon-myInvest.png);
  }
  .nb-cell-icon-accessDetail{
       background-image: url(../../assets/capital/icon-accessDetail.png);
  }

  .nb-capital-ft{
    margin-top: 20px;
  }
</style>
  