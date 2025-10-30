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
         <div class="image-placeholder">
            <img style="width: 100%;" src="@/assets/img/p17.png" alt="SIVACON 8PT">
          </div>
           <div class="image-placeholder">
            <img style="width: 100%;" src="@/assets/img/p18.png" alt="SIVACON 8PT">
          </div>
      </section>

    </main>
  </div>
</template>

<script>
export default {
  name: 'Sivacon',
  data() {
    return {
      product: {
        name: 'BlokSET 5000',
        subtitleCn: '智能低压成套系统',
        subtitleEn: 'Intelligent Low-Voltage Switchgear System'
      },
      sections: {
        intro: {
          titleCn: '产品介绍',
          titleEn: 'Product Introduction',
          paragraphsCn: [
            "1.BlokSeT 5000 高可靠性低压成套系统","（1）延续了施耐德电气在低压电气及低压成套领域的先进技术经验","（2）遵循中国市场需求及客户使用习惯，量身打造","（3）适用于配电保护、电动机启动 & 保护及无功补偿等应用场合","2. 固定柜","固定分隔式柜体：","（1）固定分隔式结构，结构简单可靠","（2）固定式接线，电气连接质量更高","抽出式和插拨式断路器：","（1）具有明显的可视断点，保护维修人员","（2）操作简单，互换性强","模块化结构：","（1）易于选型配置","（2）简化加工、装配等生产过程","3. 抽屉式","经典的双夹头设计：","（1）避免配电母排磨损，减少维护成本","（2）精简一次插件数量，优化装配效率","（3）无需断电，系统升级简便","充分考虑客户需求：","（1）多种抽屉尺寸，可根据需要量身选配","（2）优化的抽屉内部空间，可容纳更多二次元件","（3）三位置指示清晰明了，防止误操作","4. 电容柜","标准无功功率补偿方案：","（1）遵循中国客户使用习惯量身打造",
            "（2）经过严苛实验验证","（3）充分考虑电容、电抗等元件对通风散热的需求","施耐德电气全新一代 EasyCAN 系列电容器产品："
            ,"（1）平均寿命高达 100,000 小时","（2）外形紧凑，尺寸小巧，便于安装","（3）优秀的接线端子设计，充分保证用电安全","5. 电源转换开关柜"
            ,"标准双电源解决方案：","（1）为建筑、住宅、工业行业量身打造的双电源方案","（2）一种尺寸，保持简约设计理念","（3）灵活的接线方案，满足不同情况下的负载需求"
            ,"WATSN 系列 PC 级自动转换开关：",
            "（1）小巧精质，大有可为","（2）节能增效，稳定安全","（3）全能搭载 TIDE2.0 智能控制系统平台"
          ],
          paragraphsEn:[
             "1. BlokSeT 5000 High Reliability Low-Voltage Switchgear System",
            "(1) Continues Schneider Electric's advanced technical experience in low-voltage electrical and low-voltage switchgear fields"
            ,"(2) Tailored to Chinese market demands and customer usage habits","(3) Suitable for power distribution protection, motor starting & protection, and reactive power compensation applications"
            ,"2. Fixed Cabinet","Fixed Partitioned Cabinet:","(1) Fixed partitioned structure, simple and reliable"
            ,"(2) Fixed wiring, higher electrical connection quality","Drawer-type and Plug-in Circuit Breakers:"
            ,"(1) With obvious visible break points, protecting maintenance personnel","(2) Simple operation, strong interchangeability"
            ,"Modular Structure:","(1) Easy for type selection and configuration","(2) Simplifies production processes such as processing and assembly","3. Drawer-Type",
            "Classic Double-Clamp Design:","(1) Avoids power distribution busbar wear, reducing maintenance costs"
            ,"(2) Reduces the number of primary plug-ins, optimizing assembly efficiency",
            "(3) System upgrade is convenient without power outage","Fully Consider Customer Needs:",
            "(1) Multiple drawer sizes, can be tailored as needed","(2) Optimized internal drawer space, can accommodate more secondary elements",
            "(3) Three-position indication is clear, preventing misoperation","4. Capacitor Cabinet","Standard Reactive Power Compensation Solution:",
            "(1) Tailored to Chinese customers' usage habits","(2) Verified by rigorous experiments"
            ,"(3) Fully considers the ventilation and heat dissipation requirements of components such as capacitors and reactors",
            "Schneider Electric's New Generation EasyCAN Series Capacitor Products:","(1) Average service life up to 100,000 hours","(2) Compact shape, small size, easy to install","(3) Excellent terminal design, fully ensuring electrical safety","5. Power Transfer Switch Cabinet","Standard Dual Power Solution:","(1) Dual power solution tailored for building, residential, and industrial industries","(2) One size, maintaining a minimalist design concept","(3) Flexible wiring solution, meeting load demands under different situations","WATSN Series PC-Class Automatic Transfer Switch:","(1) Small and exquisite, yet capable","(2) Energy-saving and efficiency-increasing, stable and safe"
            ,"(3) Fully compatible with TIDE2.0 intelligent control system platform"
          ]
        },
        // structure: {
        //   titleCn: 'SIVACON 特点',
        //   titleEn: 'Structure',
        //   paragraphsCn: [
        //     '通过型式实验的低压开关柜（TTA）水平母线统一布置在开关柜的上方 3 极和 4 极水平母线系统其额定电流可至 7400A 额定峰值耐受电流 Ipk 可至 375kA 器件隔室的深度尺寸大，适用于各种安装器件隔室按模数结构分隔成不同的单元开关柜可串面安装，也可以背靠背安装进线可采用上进线或下进线出线电缆可在柜体前部连接或后部连接'
        //   ],
        //   paragraphsEn: [
        //     'The type experiment (TTA) low voltage switch cabinets arranged above the horizontal bus unified switch cabinet 3 poles and 4 poles horizontal bus system its rated current to 7400A, Ipk rated peak withstand current to 375kA, The device compartment is deep enough for various mounting dimensions，The device compartment can be divided into multiple units according to modular structure. The switchgear can be installed on one side or back to back. The incoming cable can be arranged from the top or bottom, The outgoing cable can be connected in the front or on the back.'
        //   ]
        // }
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