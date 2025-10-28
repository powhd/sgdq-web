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
        <div class="modular-section">
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
        </div>
         <div class="image-placeholder">
            <img style="width: 100%;" src="@/assets/img/p15.png" alt="SIVACON 8PT">
          </div>
                  <div class="image-placeholder">
            <img style="width: 100%;" src="@/assets/img/p16.png" alt="SIVACON 8PT">
          </div>
      </section>
          <section class="section">
        <h2 class="section-title-cn">{{ sections.structure.titleCn }}</h2>
        <h2 class="section-title-en">{{ sections.structure.titleEn }}</h2>
        <p 
          v-for="(para, index) in sections.structure.paragraphsCn" 
          :key="'str-cn-' + index"
          class="section-text"
        >
          {{ para }}
        </p>
        <p 
          v-for="(para, index) in sections.structure.paragraphsEn" 
          :key="'str-en-' + index"
          class="section-text"
        >
          {{ para }}
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'XL-21',
  data() {
    return {
      product: {
        name: 'XL-21',
        subtitleCn: '低压动力配电柜',
        subtitleEn: 'Low-voltage power distribution cabinet'
      },
      sections: {
        intro: {
          titleCn: '产品介绍',
          titleEn: 'Product Introduction',
          paragraphsCn: [
            `户内封闭式低压配电柜
XL-21动力柜是一种用于户内环境的封闭式低压配电设备，采用冷轧钢板或不锈钢壳体制造，防护等级达到IP30标准。该产品额定工作电压380V主母线额定电流覆盖4A至40A范围，可满足低压动力配电和照明总开关控制的场景需求`
          ],
          paragraphsEn: [
            `Indoor enclosed low-voltage distribution cabinet
The XL-21 power distribution cabinet is an enclosed low-voltage distribution
equipment designed for indoor environments. It is constructed from cold-rolled steel plates or stainless steel enclosures, with a protection rating of IP30. This product has a rated operational voltage of 380V, and the rated current of the 
main busbar ranges from 4A to 40A, making it suitable for low-voltage power 
distribution and main switch control in lighting applications.`
          ]
        },
        modular: {
          titleCn: '型号含义',
          titleEn: 'Meaning of Models',
          paragraphsCn: [],
          paragraphsEn: []
        },
        structure: {
          titleCn: '结构特点',
          titleEn: 'Meaning of Models',
          paragraphsCn: [
            `XL-21型低压动力配电柜系封闭式,外壳用钢板压制而成,刀开关操作手柄装于前右柱上部,可以作为切换电源之用。配电箱前面装有一只电压表,指示母线的电压。配电箱前面有门,门打开后配电箱内全部设备敞露、便于检修维护。本配电箱用用国内自行设计的型组件,具有结构紧凑,检修方便,线路方案可以灵活组合等特点。配电箱除装有空气断路器和熔断器作为短路保护外,还装有接触器和热继电器,箱前门可装操作按钮和指示灯。`
          ],
          paragraphsEn: [
            `The XL-21 low-voltage power distribution cabinet is of an enclosed type, with an enclosure pressed from steel plates.The operating handle of the isolation switch is installed on the upper part of the front right column and can be used forswitching power sources. A voltmeter is installed on the front panel to indicate the busbar voltage. The cabinet iseguipped with a front door: when opened, all eculpment inside is exposed for easy inspection and malntenanceThis distribution cabinet utilizes self-developed modular components, featuring a compact structure, convenientmaintenance, and fiexible combination ot circuit schemes, in addlion to belng eaulpped with alr circuit breakers andfuses for short-circuit protection, the cabinet also contains contactors and thermal relavs. Operation buttons andindicator lights can be installed on the front door`
          ]
        }
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
  /* grid-template-columns: 1fr 1fr; */
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