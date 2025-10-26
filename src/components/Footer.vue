<template>
  <div id="footer" class="container-fluid">
    <!-- <div class="logo">
      <img src="@/assets/img/logo_white.png" alt="logo图">
    </div> -->
    <p class="title">宁波市曙光电器设备制造公司</p>
    <p class="address_tel_fax">
      <span>地址(Address)：宁波国家高新区晶源路6号</span>
      <span>销售热线(Sales-line):+86-574-87905766</span>
      <span>技术售后 (Tech-line): +86-574-87907208</span>
    </p>
    <p class="email_wx">
      <span>邮箱(E-mail)：nbsq1991@163.com</span>
      <span>传真(Fax)：+86-574-87905766</span>
    </p>
    <p class="email_wx">
      <span>© 2025 宁波曙光电器设备制造公司 版权所有</span>
      <span>Ningbo Shuguang Electrical Equipment Manufacturing Co., Ltd.</span>
    </p>
    <!-- <p class="copy">Copyright &copy; 2018 - {{ new Date().getFullYear() }} 公司名称</p> -->
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #4096ff;
  overflow: hidden;
  text-align: center;
  padding: 20px 0;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 28px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #eee;
  font-size: 16px;
  margin: 10px 0;
}
.email_wx {
  color: #eee;
  font-size: 16px;
}
.copy {
  color: #eee;
  font-size: 16px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

