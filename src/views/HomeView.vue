<script>
import BGintro from '@/components/BGintro.vue';
import AboutCs from '@/components/AboutCs.vue';
import Start from '@/components/Start.vue';
import AreaInfo1 from '@/components/AreaInfo1.vue';
import AreaInfo2 from '@/components/AreaInfo2.vue';
import AreaInfo3 from '@/components/AreaInfo3.vue';
import AreaInfo4 from '@/components/AreaInfo4.vue';
import NavBar from '@/components/NavBar.vue';
import HomeView from '@/views/HomeView.vue';
import Footer from '@/components/Footer.vue';


export default {
    components: {NavBar, BGintro, AboutCs, Start, AreaInfo1, AreaInfo2, AreaInfo3, AreaInfo4, Footer },
}
</script>

<template>
  <NavBar/>
  <BGintro/>
  <AboutCs/>
  <Start/>
  <AreaInfo1/>
  <AreaInfo2/>
  <AreaInfo3/>
  <AreaInfo4/>
  <Footer/>
</template>

<style scoped>

</style>
