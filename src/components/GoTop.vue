<template>
  <div
    id="GoTop"
    v-show="visible"
    @click="goTop"
    role="button"
    aria-label="Back to Top"
    tabindex="0"
  >
    <span class="chev">▲</span>
  </div>
</template>

<script>
export default {
  name: "GoTop",
  data() {
    return {
      visible: false,
      rafId: null,
      isAnimating: false,
    };
  },
  mounted() {
    // 根据滚动位置显示/隐藏按钮
    this.onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.visible = scrollTop > 200; // 距离顶部200px 显示
    };
    window.addEventListener("scroll", this.onScroll, { passive: true });
    // 初始检测一次
    this.onScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.isAnimating = false;
  },
  methods: {
    goTop() {
      // 如果浏览器支持原生平滑滚动，优先使用它（不会导致脚本一直占用帧）
      try {
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      } catch (e) {
        // 某些环境可能抛错，继续使用回退实现
      }

      // 回退实现（可取消）
      if (this.isAnimating) return; // 如果已经在动画中，忽略重复触发
      this.isAnimating = true;

      const step = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (currentScroll > 0) {
          // 逐步减少距离
          const next = Math.max(0, currentScroll - currentScroll / 8);
          window.scrollTo(0, next);
          this.rafId = requestAnimationFrame(step);
        } else {
          // 到顶了，清理
          if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
          }
          this.isAnimating = false;
        }
      };

      step();
    },
  },
};
</script>

<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  user-select: none;
  /* 确保不阻止页面其他区域的交互 */
  pointer-events: auto;
}
#GoTop .chev {
  font-size: 20px;
  color: rgb(8, 162, 233);
  line-height: 1;
}
</style>
