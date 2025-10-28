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
            <img style="width: 100%;" src="@/assets/img/p10.png" alt="SIVACON 8PT">
          </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'GSM-I',
  data() {
    return {
      product: {
        name: 'GSM-I',
        subtitleCn: '母线槽系统',
        subtitleEn: 'Busways System'
      },
      sections: {
        intro: {
          titleCn: '产品介绍',
          titleEn: 'Product Introduction',
          paragraphsCn: [
"1. 电流: 400~6300A",
"2. 排之间保持紧凑的“三明治”结构，可有效避免“烟囱效应”。",
"3. 外壳采用优质高强度冷轧钢一次冷轧成波纹结构，不仅外形美观大方，更大大增强母线槽的机械强度和系统的动热稳定性，可彻底解决施工现场大跨距安装的难题。",
"4. 系统选择具有大于相线50%容量的整个外壳障提供可靠的接地路径，当发生高容量的接地故障时，可有效的接地和保护整个系统。",
"5. 母线槽防护等级最高可达IP65。",
"6. 导体采用2#电解铜，原材料从国外进口，纯",
"7. 导体表面整体镀锡，全长包裹美国杜邦公司的聚酯薄膜，该绝缘材料抗老化能力强，达到B级绝缘，耐温130℃。",
"8. 本系列母线槽广泛适用于变配电中心、高层商住楼、综合写字楼、工厂生产线及大型商业中心等高效、安全的输配电场所。"
          ],
          paragraphsEn: [
"1. Rated current: 400-6,300A",
"2. Maintaining compact “sandwich” structure between copper bars may effectively avoid “chimney effect”.",
"3. The shell adopts high-quality and high-strength cold-rolled steel which is cold rolled into a corrugated structure at a single time. with a nice outlook, the structure also greatly enhances the mechanical strength of busway and good dynamic thermal stability of the system. Therefore, it may thoroughly solve the problem of large-span installation at construction site.",
// "4. The shell of busway adopts aluminum magnesium alloy, which enjoys non-magnetism and fast heat dissipation capability, and may avoid magnetic lag and eddy current loss generated during the running of bubar with steel shell.",
"4. The whole enclosure with more than 50% of the capacity of phase line is chosen as grounding system, which guarantees system safety and provide reliable grounding path for ground fault, and can be effectively grounded and protect the entire system when a high-capacity ground fault occurs.",
"5. The protection level of busways is IP65.",
"6. The conductor adopts superior electrolytic copper (2#), the raw material of which is imported abroad and is highly pure.",
"7. The surface of conductor is coated with tin and totally covered with polyester film produced by USA Dupont. Such insulating material has strong anti-oxidant corrosion ability, with insulation grade B and resistance to the temperature of 130.",
"8. This series of busways is applicable to high-efficient and safe PTD occasions, such as power transformation and distribution centers, high-rise commercial and residential buildings, integrated office buildings, factory production lines and large commercial centers, etc."
          ]
        },
        modular: {
          titleCn: '正常使用条件',
          titleEn: 'Normal Service Conditions',
          paragraphsCn: [
            `a. 周围环境温度  -25°C~ +40`,
            `   最热日平均温度 +30°C`,
            `   最高年平均温度 +20°C`,
            `b. 空气相对湿度  在 25℃℃时，相对湿度日平均不超过 95%,月平均值不超过 90%。`,
            `c. 海拔高度不超过 1000m`,
            `d. 户外风速不超过 34m/s`,
            `e. 安装地点  应安装于无火灾、无剧烈震动、无化学腐蚀及无爆炸危险的场所`
          ],
          paragraphsEn: [
            `a. Ambient temperature -25°C~+40°C
Max daily average temperature +30°C
Max yearly average temperature +20°C`,
`b. Relative humidity: at 25'c, the dally average is not higher than 95%; The monthly average is not higher than 90%.`,
`c.Altitude not more than 1000m`,
`d.Outdoor wind speed not more than 34m/s`,
`e. lnstallation location: it shall be installed where there is free of fire, violent vibraions, chemical corrosion or explosion risks.`
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