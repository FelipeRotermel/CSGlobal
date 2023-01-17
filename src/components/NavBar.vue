<script></script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
        <div class="container-fluid justify-content-between">
            <a class="navbar-brand text-light" href="#" aria-current="page">
                <router-link to="/"><img src="@/assets/csgo_icon.png" class="logo">CS Global</router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <img src="@/assets/bars-solid.png" class="bars" alt="">
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                <ul class="navbar-nav mb-3 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#navbar'">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#sobreCS'">Sobre o CS:GO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#comecar'">Como começar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/login">Login</router-link></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.navbar {
    background-image: linear-gradient(#000000, transparent);
    transition: background-color 0.1s linear;
    transition: 0.4s;
    padding: 15px;
}

.navbar.solid {
    background-color: #212731;
    transition: background-color 0.7s ease 0s;
    transition: 0.4s;
    padding: 0;
}

ul {
    margin-right: 11%;
}

.logo {
    height: 50px;
    width: 40px;
    transition: 0.4s;
}

.logo.solid {
    height: 35px;
    margin-left: 10px;
    width: 30px;
    margin-bottom: 5px;
    transition: 0.4s;
}

a {
    color: white;
    margin-top: 5px;
    transition: 0.25s;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}

a:hover {
    color: rgb(174, 174, 174);
}

.bars{
    width: 35px;
    height: 35px;
}
</style>