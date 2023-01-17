<script></script>

<template>
    <div class="container-fluid">
        <video autoplay muted loop>
            <source src="@/assets/bgvidcs.mp4" type="video/mp4">
        </video>
        <div class="carousel-caption d-flex align-items-center justify-content-center text-center">
            <div>
                <h2><strong>A sua experiencia definitiva</strong></h2>
                <button type="button" class="btn btn-outline-light fs-4" v-scroll-to="'#sobreCS'">Introdução</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    background-color: rgb(232, 232, 232);
    padding: 0;
    margin: 0;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

video {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(0.8);
}

.carousel-caption {
    margin-bottom: 27vh;
}

</style>