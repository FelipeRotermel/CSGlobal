<script></script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 aos-init aos-animate" data-aos="zoom-out" data-aos-duration="3000">
                <h4 class="text-uppercase">CS Global</h4>
                <p class="text-light">
                    Projeto desenvolvido por Felipe Rotermel, usando técnicas totalmente legais (mentira).
                </p>
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.steamcommunity.com/id/XDfelipe" role="button">
                    <fa :icon="['fab','steam']" />
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UCZ440GbTz-HWIRZjVqZVi3w" role="button">
                    <fa :icon="['fab','youtube']" />
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/FelipeRotermel" role="button">
                    <fa :icon="['fab','github']" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    position: relative;
    background-image: url(@/assets/footercs.jpg);
    color: white;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-top: 20px;
    padding-bottom: 20px;
}

</style>