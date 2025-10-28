<template>
  <div class="sivacon-container">
    <div class="bg-towers"></div>
    
    <!-- 头部区域 -->
    <header class="header">
      <div class="title-section">
        <h1 class="main-title">{{ product.name }}</h1>
        <div class="subtitle-box">
          <div class="subtitle-cn">{{ product.subtitleCn }}</div>
          <div class="subtitle-en">{{ product.subtitleEn }}</div>
        </div>
      </div>
    </header>

    <!-- 内容区域 -->
    <main class="content">
      <!-- 产品简介部分 -->
      <section class="section">
        <h2 class="section-title-cn">{{ sections.intro.titleCn }}</h2>
        <h2 class="section-title-en">{{ sections.intro.titleEn }}</h2>
        <p 
          v-for="(para, index) in sections.intro.paragraphsCn" 
          :key="'cn-' + index"
          class="section-text"
        >
          {{ para }}
        </p>
        <p 
          v-for="(para, index) in sections.intro.paragraphsEn" 
          :key="'en-' + index"
          class="section-text"
        >
          {{ para }}
        </p>
      </section>

      <!-- 模块化设计部分 -->
      <section class="section">
          <div class="text-content">
            <h2 class="section-title-cn">{{ sections.modular.titleCn }}</h2>
            <h2 class="section-title-en">{{ sections.modular.titleEn }}</h2>
            <p 
              v-for="(para, index) in sections.modular.paragraphsCn" 
              :key="'mod-cn-' + index"
              class="section-text"
            >
              {{ para }}
            </p>
            <p 
              v-for="(para, index) in sections.modular.paragraphsEn" 
              :key="'mod-en-' + index"
              class="section-text"
            >
              {{ para }}
            </p>
          </div>
          
          <!-- 设备模拟图 -->
    
              <div class="image-placeholder">
            <img style="width: 100%;" src="@/assets/img/p14.png" alt="SIVACON 8PT">
          </div>
      </section>

    </main>
  </div>
</template>

<script>
export default {
  name: 'DJK',
  data() {
    return {
      product: {
        name: 'DJK',
        subtitleCn: '计量箱（配电板）',
        subtitleEn: 'Distribution Boards'
      },
      sections: {
        intro: {
          titleCn: '产品介绍',
          titleEn: 'Product Introduction',
          paragraphsCn: [
            `DJK系列三相集中计量表箱用于多层住宅和办公用房等场所。箱体分为进线室、计量表室、出线室三部分。箱内相互分割，进线室内装断路器及三相四线导电排，计量室为电业表计或用户表计，出线室内装多个出线小型断路器供用户通断和维修之用，除出线室外其余两室都装有铅封锁。`
          ],
          paragraphsEn: [
            `DJK series three phase Distribution Boards is used for multi - storey residential and oﬃce space. The box body is divided into three parts, the inlet chamber, the Metering chamber, the outlet chamber. The Box has it’s own partition, the inlet chamber installed circuit breaker and three-phase four wire busbar, the Metering chamber for electric meter or user meter, the outlet chamber installed multiple circuit breakers for the user on-oﬀand maintenance purposes, in addition to the outlet chamber, the remaining two outdoor 
rooms are equipped with lead locks.`
          ]
        },
        modular: {
          titleCn: '产品结构',
          titleEn: 'Product Structure',
          paragraphsCn: [
            `集中计量箱根据住宅每单元户数分1、2、4、0、(ö┭ リ、(1υ┭ 1)、(12十 1)表位的计量箱; 计量箱最大设计方案单相为(12 十 1)表位; 三相6表位 ， 单相(10+1)、(12 十 1)表位的计量箱宜用两扇门开启:计量箱设计适用于感应式机械表。全电子式电子表和分时电能表,其中 6、(8十 1)、(10十 1)、(12十 1)表位的计量箱预留装设集抄终端的位置。计量箱箱体采用 2mm 厚镀锌冷轧钢板制作,户外单表箱采用不锈钢材料 ， 箱盖与箱体应方便分卸:电缆进线仓、电能表仓、 用户出线仓隔离、 独自封闭。`
          ],
          paragraphsEn: [
            `Centralized metering box is divided by the number of residential unit 1,2, 4, 6 (8+1), (10+1), (12+1); the maximum design scheme for single-phase metering box (12+1), three phase 6 epitope; single phase (10+1) and (12 +1) should open a metering box with two doors; for metering box design is suitable for induction type mechanical meter, electronic spreadsheet and timeshare Watt-hour meter, of which 6 (8+1), (10+1), (12+1)a meter box for installation of collecting terminal position. The box body is made of 2mm thick galvanized cold rolled steel sheet, the outdoor single box is made of stainless steel, the box cover and the box body should be conveniently divided; the cable inlet chamber , the meter chamber , the user outlet chamber independently.`
          ]
        },
      }
    }
  },
  methods: {
    getSwitchCount(sectionNumber) {
      // 第三个区域显示3个开关，前两个区域显示2个开关
      return sectionNumber === 3 ? 3 : 2;
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.sivacon-container {
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(to bottom right, #e8f0f8 0%, #f5f8fb 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: #333;
}

.bg-towers {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><line x1="100" y1="0" x2="150" y2="600" stroke="%23ccc" stroke-width="2"/><line x1="200" y1="0" x2="250" y2="600" stroke="%23ccc" stroke-width="2"/><line x1="300" y1="0" x2="350" y2="600" stroke="%23ccc" stroke-width="2"/><line x1="400" y1="100" x2="450" y2="600" stroke="%23ccc" stroke-width="3"/><line x1="500" y1="50" x2="550" y2="600" stroke="%23ccc" stroke-width="2"/></svg>') no-repeat center;
  background-size: cover;
  opacity: 0.3;
  z-index: 0;
}

/* 头部样式 */
.header {
  position: relative;
  z-index: 1;
  padding: 40px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.title-section {
  flex: 1;
  min-width: 300px;
}

.main-title {
  font-size: 25px;
  font-weight: 600;
  color: #1a2b4a;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.subtitle-box {
  background: #f39c12;
  padding: 12px 20px;
  display: inline-block;
  margin-bottom: 10px;
}

.subtitle-cn {
  font-size: 15px;
  color: #000;
  font-weight: 500;
}

.subtitle-en {
  font-size: 15px;
  color: #000;
  font-weight: 400;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.logo {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a2b4a;
  letter-spacing: 3px;
}

.logo-cn {
  font-size: 1.5rem;
  color: #1a2b4a;
}

.auth-badge {
  background: #0066b3;
  color: white;
  padding: 4px 12px;
  font-size: 15px;
  border-radius: 2px;
}

/* 内容区域 */
.content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.section {
  background: white;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.section-title-cn {
  font-size: 22px;
  color: #0066b3;
  margin-bottom: 5px;
  font-weight: 500;
}

.section-title-en {
  font-size: 22px;
  color: #0066b3;
  margin-bottom: 20px;
  font-weight: 300;
}

.section-text {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 15px;
}

/* 模块化设计区域 */
.modular-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.text-content {
  /* 文本内容容器 */
}

/* 设备模拟图 */
.image-placeholder {
  width: 100%;
  /* aspect-ratio: 3/4; */
  background: linear-gradient(135deg, #e0e5ea 0%, #c8d0d8 100%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.cabinet-mock {
  width: 80%;
  height: 90%;
  background: linear-gradient(to right, #d4d9de 0%, #e8eaed 50%, #d4d9de 100%);
  border-radius: 8px;
  box-shadow: 
    inset -5px 0 10px rgba(0,0,0,0.1),
    inset 5px 0 10px rgba(255,255,255,0.3);
  position: relative;
}

.cabinet-section {
  position: absolute;
  width: 90%;
  height: 30%;
  left: 5%;
  background: #f0f2f5;
  border: 2px solid #b0b8c0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
}

.cabinet-section:nth-child(1) { 
  top: 5%; 
}

.cabinet-section:nth-child(2) { 
  top: 37%; 
}

.cabinet-section:nth-child(3) { 
  top: 69%; 
}

.switch-indicator {
  width: 40px;
  height: 50px;
  background: #2c5aa0;
  border-radius: 3px;
  position: relative;
}

.switch-indicator::after {
  content: '';
  position: absolute;
  width: 60%;
  height: 40%;
  background: #4a90e2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
}

.control-lights {
  display: flex;
  gap: 8px;
}

.light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #dc3545;
  box-shadow: 0 0 5px rgba(220, 53, 69, 0.5);
}

.light:nth-child(2) { 
  background: #ffc107; 
  box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
}

.light:nth-child(3) { 
  background: #28a745; 
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
}

/* 响应式设计 */
@media (max-width: 968px) {
  .main-title {
    font-size: 2.5rem;
  }

  .modular-section {
    grid-template-columns: 1fr;
  }

  .header {
    padding: 30px 15px 15px;
  }

  .section {
    padding: 20px;
  }
}

@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;
  }

  .logo {
    font-size: 1.8rem;
  }

  .logo-cn {
    font-size: 1.2rem;
  }

  .section-title-cn {
    font-size: 18px;
  }

  .section-title-en {
    font-size: 18px;
  }

  .header {
    flex-direction: column;
  }

  .logo-section {
    align-items: flex-start;
  }
}
</style>