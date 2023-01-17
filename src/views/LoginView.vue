<script></script>

<template>

<div class="container-fluid">
    <video autoplay muted loop>
        <source src="@/assets/bgvidlogin.mp4" type="video/mp4">
    </video>
    <div class="container text-center text-lg-start my-4 card" id="login">
        <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-lg-0" style="z-index: 10">
                <h1 class="my-5 display-5 fw-bold ls-tight text-light">
                    Realizar Login <br />
                    <span style="color: hsl(218, 81%, 75%)">CS Global</span>
                </h1>
                <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
                    O Counter-Strike: Global Offensive (CS:GO) melhora a jogabilidade de ação baseada em equipes na qual foi pioneiro quando lançado há 23 anos. O CS:GO contém novos mapas, personagens e armas, além de contar com versões atualizadas de conteúdos do CS clássico (como de_dust2).
                </p>
            </div>
            <div class="col-lg-6 mb-lg-0 position-relative">
                <div class="card" id="login2">
                    <div class="card-body px-4 py-5 px-md-5">
                        <form>
                            <div class="form-outline mb-4">
                                <input type="user" id="form3Example2" class="form-control" />
                                <label class="form-label" for="form3Example2">Usuário</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="password" id="form3Example4" class="form-control" />
                                <label class="form-label" for="form3Example4">Senha</label>
                            </div>
                            <button type="submit" class="btn form-control btn-block mb-4 text-light">
                                Login
                            </button>
                            <div class="row">
                                <div class="d-flex justify-content-between mb-">
                                    <label class="form-check-label">
                                        <router-link to="/cadastro">Não possui uma conta?</router-link>
                                    </label>
                                    <label class="form-check-label">
                                        <router-link to="/">Voltar para a Home</router-link>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>

.container-fluid {
    margin: 0;
    padding: 0;
}

video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(0.8);
}

a {
    text-decoration: none;
}

#login {
    background: rgba(255, 255, 255, 0);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(4.6px);
    border: 0;
    padding-top: 45px;
}

#login2 {
    background: rgba(255, 255, 255, 0.932);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(4.6px);
    height: 466px;
}

form {
    margin-top: 50px;
}

input {
    background-color: transparent;
}

.btn {
    background-color: #245dbf;
}

.btn:hover {
    background-color: #4f77bb;
}

</style>