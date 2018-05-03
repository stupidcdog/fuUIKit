<template>
    <article>
        <div class="header">
            <div class="title">Slider Tabs(RWD)<span class="label label-warning label-sm MA-L-5">script</span></div>
        </div>
        <div class="content">
            <section id="Tabs_Slider">
                <div class="label  label-info label-twins"><span>/fu/sliderTabs.js</span><span>所需套件</span></div>
                <h4 class="MA-T-10">可設定參數</h4>
                <pre class="codeWrap">
                {
                    //control(prev, next)的DOM物件
                    ctrlEL: '.ctrl(預設)',

                    //主選單項目的DOM物件
                    menuEL: '.tabMenuItem(預設)'
                }
                </pre>
                <h4>使用方式</h4>
                <div class="label label-info label-twins"><span>new sliderTabs(document.querySelector(DOM), {...});</span><span>定義方式 new sliderTabs(物件, 參數)</span></div>
                
                <h4>樣式設定</h4>
                <div>
                    <span class="label label-info label-twins"><span>tab-wrapper-rwd</span><span>主樣式</span></span>
                    <span class="label label-info"><span>控制項目加上prev, next</span></span>
                </div>
                <div class="desc">適用版型：device width >= 1200px</div>
                <div class="label label-info label-twins"><span>width:10%</span><span>TABS選項單一寬度</span></div>
                <div class="desc">適用版型：device width &lt; 1200px, device width>= 560px</div>
                <div class="label label-info label-twins"><span>width:25%</span><span>TABS選項單一寬度</span></div>
                <div class="desc">適用版型：device width &lt; 560px</div>
                <div class="label label-info label-twins"><span>width:33%</span><span>TABS選項單一寬度</span></div>
                <pre class="codeWrap MA-T-10">
                    <div class="tab tab-wrapper-rwd">
                        <nav class="tab-menu" data-toggle="_sliderTabs">
                            <div class="ctrl prev"><span class="icon drips-chevron-left"></span></div>
                            <div class="menuItem">
                                <div class="tabMenuItem">
                                    <div class="jTab active" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
                                    ...
                                </div>
                            </div>
                            <div class="ctrl next"><span class="icon drips-chevron-right"></span></div>
                        </nav>
                        <div class="tab-content">
                            <section id="rwd_tab1" class="jTab active">TAB1</section>
                            ...
                        </div>
                    </div>

                    document.querySelectorAll("[data-toggle='_sliderTabs']").forEach(function (obj, inx){
                        new sliderTabs(obj);
                    })
                </pre>

                <div class="styleWrap MA-T-20">
                    <div class="tab tab-wrapper-rwd">
                        <nav class="tab-menu" data-toggle="sliderTabs">
                            <div class="ctrl prev"><span class="icon drips-chevron-left"></span></div>
                            <div class="menuItem">
                                <div class="tabMenuItem">
                                    <div class="jTab active" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab4"><a href="javascript:;"><span>TAB4</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab5"><a href="javascript:;"><span>TAB5</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab6"><a href="javascript:;"><span>TAB6</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab7"><a href="javascript:;"><span>TAB7</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab8"><a href="javascript:;"><span>TAB8</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab9"><a href="javascript:;"><span>TAB9</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab10"><a href="javascript:;"><span>TAB10</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab11"><a href="javascript:;"><span>TAB11</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab12"><a href="javascript:;"><span>TAB12</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab13"><a href="javascript:;"><span>TAB13</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab14"><a href="javascript:;"><span>TAB14</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab15"><a href="javascript:;"><span>TAB15</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab16"><a href="javascript:;"><span>TAB16</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab17"><a href="javascript:;"><span>TAB17</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab18"><a href="javascript:;"><span>TAB18</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab19"><a href="javascript:;"><span>TAB19</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab20"><a href="javascript:;"><span>TAB20</span></a></div>
                                    <div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#rwd_tab21"><a href="javascript:;"><span>TAB21</span></a></div>
                                </div>
                            </div>
                            <div class="ctrl next"><span class="icon drips-chevron-right"></span></div>
                        </nav>
                        <div class="tab-content">
                            <section id="rwd_tab1" class="jTab active">TAB1</section>
                            <section id="rwd_tab2" class="jTab">TAB2</section>
                            <section id="rwd_tab3" class="jTab">TAB3</section>
                            <section id="rwd_tab4" class="jTab">TAB4</section>
                            <section id="rwd_tab5" class="jTab">TAB5</section>
                            <section id="rwd_tab6" class="jTab">TAB6</section>
                            <section id="rwd_tab7" class="jTab">TAB7</section>
                            <section id="rwd_tab8" class="jTab">TAB8</section>
                            <section id="rwd_tab9" class="jTab">TAB9</section>
                            <section id="rwd_tab10" class="jTab">TAB10</section>
                            <section id="rwd_tab11" class="jTab">TAB11</section>
                            <section id="rwd_tab12" class="jTab">TAB12</section>
                            <section id="rwd_tab13" class="jTab">TAB13</section>
                            <section id="rwd_tab14" class="jTab">TAB14</section>
                            <section id="rwd_tab15" class="jTab">TAB15</section>
                            <section id="rwd_tab16" class="jTab">TAB16</section>
                            <section id="rwd_tab17" class="jTab">TAB17</section>
                            <section id="rwd_tab18" class="jTab">TAB18</section>
                            <section id="rwd_tab19" class="jTab">TAB19</section>
                            <section id="rwd_tab20" class="jTab">TAB20</section>
                            <section id="rwd_tab21" class="jTab">TAB21</section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </article>
</template>

<script>
import sliderTabs from '@/library/fu/sliderTabs'
export default{
    data(){
        return {}
    },
    components:{
        sliderTabs
    },
    mounted(){
        document.querySelectorAll("[data-toggle='sliderTabs']").forEach(function (obj, inx){
            new sliderTabs(obj);
        })
    }
}
</script>