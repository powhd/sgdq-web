<template>
  <div id="footer" class="container-fluid">
    <div class="footer-content">
      <!-- 公司名称 -->
      <div class="company-name">
        <h2 class="title">宁波市曙光电器设备制造公司</h2>
        <p class="title-en">Ningbo Shuguang Electrical Equipment Manufacturing Company</p>
      </div>

      <!-- 分割线 -->
      <!-- <div class="divider"></div> -->

      <!-- 联系信息 -->
      <div class="contact-info">
        <div class="info-row">
          <div class="info-item">
            <span class="label">地址 Address</span>
            <span class="value">宁波国家高新区晶源路6号</span>
            <span class="value" style="font-size: 12px;">No. 6, Jingyuan Road, Ningbo National High-tech Zone</span>
          </div>
        </div>
        
        <div class="info-row">
          <div class="info-item">
            <span class="label">销售热线 Sales-line</span>
            <span class="value">+86-574-87905766</span>
          </div>
          <div class="info-item">
            <span class="label">技术售后 Tech-line</span>
            <span class="value">+86-574-87907208</span>
          </div>
        </div>

        <div class="info-row">
          <div class="info-item">
            <span class="label">邮箱 E-mail</span>
            <span class="value">nbsq1991@163.com</span>
          </div>
          <div class="info-item">
            <span class="label">传真 Fax</span>
            <span class="value">+86-574-87905766</span>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="copyright">
        <p>© 2025 宁波曙光电器设备制造公司 版权所有</p>
        <p>Ningbo Shuguang Electrical Equipment Manufacturing Co., Ltd.</p>
      </div>
    </div>
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
  color: #fff;
  background: linear-gradient(135deg, #4096ff 0%, #3080e8 100%);
  overflow: hidden;
  text-align: center;
  padding: 40px 20px 30px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* 公司名称 */
.company-name {
  margin-bottom: 30px;
}

.title {
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 10px 0;
  letter-spacing: 2px;
}

.title-en {
  font-size: 18px;
  margin: 0;
  opacity: 0.95;
  font-weight: 300;
  letter-spacing: 0.5px;
}

/* 分割线 */
.divider {
  width: 80px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  margin: 25px auto;
}

/* 联系信息 */
.contact-info {
  margin-bottom: 30px;
}

.info-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 200px;
}

.label {
  font-size: 14px;
  opacity: 0.85;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.value {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}

/* 版权信息 */
.copyright {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 14px;
  opacity: 0.85;
  line-height: 1.8;
}

.copyright p {
  margin: 5px 0;
}

/* 平板适配 */
@media screen and (max-width: 997px) {
  #footer {
    padding: 35px 20px 25px;
  }

  .title {
    font-size: 26px;
    letter-spacing: 1px;
  }

  .title-en {
    font-size: 16px;
  }

  .info-row {
    gap: 30px;
  }

  .info-item {
    min-width: 180px;
  }

  .label {
    font-size: 13px;
  }

  .value {
    font-size: 15px;
  }

  .copyright {
    font-size: 13px;
  }
}

/* 手机适配 */
@media screen and (max-width: 768px) {
  #footer {
    padding: 30px 15px 20px;
  }

  .title {
    font-size: 22px;
    letter-spacing: 0.5px;
  }

  .title-en {
    font-size: 14px;
  }

  .divider {
    width: 60px;
    margin: 20px auto;
  }

  .info-row {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 10px;
  }

  .info-item {
    min-width: auto;
    width: 100%;
  }

  .label {
    font-size: 12px;
  }

  .value {
    font-size: 14px;
  }

  .copyright {
    font-size: 12px;
    margin-top: 25px;
    padding-top: 15px;
  }
}

/* 小屏手机适配 */
@media screen and (max-width: 480px) {
  .title {
    font-size: 20px;
  }

  .title-en {
    font-size: 13px;
  }

  .value {
    font-size: 13px;
  }
}
</style>