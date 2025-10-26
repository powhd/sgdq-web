<template>
  <div id="app">
    <!-- 头部 -->
    <div class="header">
      <h1>{{ company.name }}</h1>
      <h1>{{ company.englishName }}</h1>
      <p class="subtitle">{{ company.slogan }}</p>
      <p class="subtitle">{{ company.sloganEn }}</p>
    </div>

    <div class="container">
      <!-- 公司简介 -->
      <div class="section">
        <h2 class="section-title">公司概况 Company Overview</h2>
        <div class="intro-grid">
          <div class="card">
            <h3>🏢 公司历史</h3>
            <p>{{ company.history }}</p>
            <p>{{ company.historyEn }}</p>
          </div>
          <div class="card">
            <h3>🎯 业务领域</h3>
            <p>{{ company.business }}</p>
            <p>{{ company.businessEn }}</p>
          </div>
          <div class="card">
            <h3>💡 核心优势</h3>
            <p>{{ company.advantage }}</p>
            <p>{{ company.advantageEn }}</p>
          </div>
        </div>
      </div>

      <!-- 资质认证 -->
      <div class="section">
        <h2 class="section-title">资质认证</h2>
        <div class="certification-list">
          <div class="cert-item" v-for="cert in certifications" :key="cert">
            ✓ {{ cert }}
          </div>
        </div>
      </div>

      <!-- 主要产品 -->
      <div class="section">
        <h2 class="section-title">主要产品</h2>
        <div class="products-grid">
          <div class="product-item" v-for="product in products" :key="product">
            {{ product }}
          </div>
        </div>
      </div>

      <!-- 应用领域 -->
      <div class="section">
        <h2 class="section-title">应用领域</h2>
        <div class="intro-grid">
          <div class="card" v-for="field in applicationFields" :key="field">
            <h3>📍 {{ field }}</h3>
          </div>
        </div>
      </div>

      <!-- 合作伙伴 -->
      <div class="section">
        <h2 class="section-title">合作伙伴</h2>
        <div class="partners">
          <div class="partner-badge" v-for="partner in partners" :key="partner">
            {{ partner }}
          </div>
        </div>
      </div>

      <!-- 发展历程 -->
      <div class="section">
        <h2 class="section-title">发展历程</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="milestone in milestones" :key="milestone.year">
            <h3>{{ milestone.year }}</h3>
            <p>{{ milestone.event }}</p>
          </div>
        </div>
      </div>

      <!-- 企业理念 -->
      <div class="section">
        <h2 class="section-title">企业理念</h2>
        <div class="card">
          <h3>🌟 品质方针</h3>
          <p class="philosophy-text">
            {{ company.philosophy }}
          </p>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <!-- <div class="footer">
      <p>&copy; 2025 宁波曙光电器设备制造公司 版权所有</p>
      <p style="margin-top: 10px;">
        Ningbo Shuguang Electrical Equipment Manufacturing Co., Ltd.
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "CompanyProfile",
  data() {
    return {
      company: {
        name: "宁波市曙光电器设备制造公司",
        englishName: "Ningbo Shuguang Electrical Equipment Manufacturing Co., Ltd.",
        slogan: "满足顾客、持续改进、开拓卓越、追求卓越",
        sloganEn: 'To meet customers, continuously improve, expand, and pursue excellence.',
        history:
          "始创于1997年，专注于电气成套领域的专业设备集成制造，是宁波市首批获得机械部、电力部双认证的企业之一。",
          historyEn: 'Founded in 1997, we are a professional device integration manufacturer specializing in the field of electrical sets, and are one of the first enterprises in Ningbo to receive dual certifications from the Mechanical Department and the Power Department.',
        business:
          "专业生产各类高低压开关柜、建筑、城网、农网用各类配电箱、计量电表箱等产品，是国内成套电气行业的领先企业。",
          businessEn: 'We specialize in the production of various high-voltage switchgear, building, city, and agricultural networks used switchgear, distribution boxes, and meter boxes, and are leading players in the country\'s electrical industry.',
        advantage:
          "拥有完备的生产设备、包括从日本引进的全套数控柔性加工柔性流水线及CNC激光切割设备，配合各种软件，由成熟的技术设计研发团队提供完整解决方案。",
        advantageEn: 'We have complete production equipment, including a full set of CNC flexible processing flexible production lines and CNC laser cutting equipment imported from Japan, combined with various software, and a mature technical design and development team to provide complete solutions.',
        philosophy: "满足顾客、持续改进、开拓卓越、追求卓越",
        philosophyEn: 'To meet customers, continuously improve, expand, and pursue excellence.',
      },
      certifications: [
        "ISO9001 质量管理体系国际认证",
        "ISO14001 环境管理体系认证",
        "OHSA S18001 职业健康管理体系认证",
        "ISO10012 测量管理体系认证",
        "中国国家质量认证中心 CQC 认证",
      ],
      products: [
        "高压中置柜",
        "高压开关柜",
        "高压环网柜",
        "MD190",
        "MDmax",
        "8PT",
        "MLS-V",
        "EdisonLSNs",
        "BlokSeT5000",
        "Prisma P",
        "CGZ160",
        "GCS",
        "GCK",
        "GGD",
        "PCL系列低压配电柜",
        "动力箱",
        "分支箱",
        "电表箱",
      ],
      applicationFields: [
        "电力",
        "房产",
        "交通",
        "化工",
        "冶金",
        "纺织",
        "轻纺",
        "港口",
        "钢铁",
        "大型冶金",
        "房地产",
        "交通运输",
        "化工行业",
        "大型商场",
        "轻纺织",
        "港口",
      ],
      partners: [
        "西门子",
        "ABB",
        "通用电气",
        "施耐德",
        "库柏（宁波）电器",
        "常熟开关制造有限公司",
      ],
      milestones: [
        { year: "1997年", event: "公司成立，开始专注电气成套领域" },
        { year: "早期", event: "成为宁波首批获得机械部、电力部双认证企业" },
        { year: "发展期", event: "通过ISO9001、ISO14001、OHSA等多项国际认证" },
        {
          year: "现在",
          event:
            "成为西门子、ABB、GE等国际品牌授权制造商，在宁波地区建立强大的品牌影响力",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.header {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  animation: fadeInDown 1s;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin: 60px 0;
  animation: fadeIn 1s;
}

.section-title {
  font-size: 2em;
  color: #1e3c72;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid #2a5298;
  display: inline-block;
}

.intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card h3 {
  color: #2a5298;
  margin-bottom: 15px;
  font-size: 1.5em;
}

.certification-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.cert-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #2a5298;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.product-item:hover {
  transform: scale(1.05);
}

.partners {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.partner-badge {
  background: white;
  padding: 15px 30px;
  border-radius: 50px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  color: #2a5298;
}

.timeline {
  position: relative;
  padding-left: 40px;
  margin-top: 30px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #2a5298;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 30px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -33px;
  top: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2a5298;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #2a5298;
}

.footer {
  background: #1e3c72;
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-top: 60px;
}

.philosophy-text {
  font-size: 1.3em;
  text-align: center;
  color: #2a5298;
  font-weight: bold;
  padding: 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8em;
  }

  .section-title {
    font-size: 1.5em;
  }
}
</style>
