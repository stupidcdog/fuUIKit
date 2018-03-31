<template>
  <div id="app">
    <transition name="page">
      <div class="pageLoading loading-ballswitch" :class="{'active': loadStatus}"></div>
    </transition>
    <transition name="page">
      <div>
        <header>
          <section class="fullPageCWrap">
            <div class="sitename">FU UIKit</div>
          </section>
        </header>
        <div class="fullPageCWrap pageStructWrap">
          <aside>
            <main-menu></main-menu>
          </aside>
          <div class="mainContent">
            <router-view />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import func from '@/library/fu/function'

import prettycode from '@/library/prettycode'
import common from '@/library/fu/common'

import mainMenu from '@/views/components/pageMenu'

export default {
  name: 'app', 
  data(){
    return {
      //頁面載入判斷
      pageLoad: true
    }
  }, 
  computed: {
    loadStatus: {
      get: function() {
        return this.pageLoad
      },
      set: function(status) {
        this.pageLoad = status
      }
    }
  },
  components:{
    mainMenu
  },
  mounted: function (){
    this.pageLoad = false;
    new prettycode();
    common.init();
  }
}
</script>

