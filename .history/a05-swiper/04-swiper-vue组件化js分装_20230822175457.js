Vue.component("swiperItem",{
    template: 
    `
        <div class="swiper-slide"> 
            <slot></slot>
        </div>
       
    `
  })
  
  Vue.component("swiper", {
    data() {
      return {
        time: 1000,
      };
    },
    mounted() {
        new Swiper(".zenghao", {
          //   direction: "vertical",
          pagination: {
            el: ".swiper-pagination",
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
    },
    beforeDestroy() {
      console.log("beforeDestroy", "清除定时器，事件解绑，,..");
    },
    destroyed() {},
    template: `
    <div class="swiper zenghao">
       <div class="swiper-wrapper">
          <slot></slot>
       </div>
    
    <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>`,
  });
