<script></script>

<template>
    <div class="container-fluid" id="comecar">
        <div class="container container_item">
            <div class="row">
                <div class="col-12 text-center">
                    <h3 class="main-title display-6 fw-bold">Como começar</h3>
                    <hr class="opacity-100">
                </div>
                <div v-scroll-to="'#AreaInfo1'" class="col-sm service-box text-center" data-aos="flip-up" data-aos-duration="1000">
                    <fa class="fa" :icon="['fas','book']" />
                    <h4>Modos de jogo</h4>
                    <p>Principais modos de jogo</p>
                </div>
                <div v-scroll-to="'#AreaInfo2'" class="col-sm service-box text-center" data-aos="flip-up" data-aos-duration="1000">
                    <fa class="fa" :icon="['fas','crosshairs']" />
                    <h4>Práticas de mira</h4>
                    <p>Treine sua precisão</p>
                </div>
                <div v-scroll-to="'#AreaInfo3'" class="col-sm service-box text-center" data-aos="flip-up" data-aos-duration="1000">
                    <fa class="fa" :icon="['fas','bomb']" />
                    <h4>Granadas</h4>
                    <p>Dominando o inimigo</p>
                </div>
                <div v-scroll-to="'#AreaInfo4'" class="col-sm service-box text-center" data-aos="flip-up" data-aos-duration="1000">
                    <fa class="fa" :icon="['fas','piggy-bank']" />
                    <h4>Economia</h4>
                    <p>Adquirindo os equipamentos</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    position: relative;
    padding-bottom: 100px;
}

.col-12 {
    margin-top: 100px;
    margin-bottom: 100px;
}

.fa {
    width: 100px;
    height: 60px;
}

.service-box {
    transition: 0.25s;
    cursor: pointer;
}

.service-box:hover {
    transform: scaleY(1.1);
}

hr {
    border-top: 2px solid rgb(53, 53, 53);
    width: 35%;
    position: absolute;
    left: 33%;
}

</style>