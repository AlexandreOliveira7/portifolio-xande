<template>
    <v-main>
        <v-row>
            <v-col cols="12" class="d-flex justify-center align-center pt-7">
                <div class="d-md-none">
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="text-primaria"></v-app-bar-nav-icon>
                    <v-navigation-drawer v-model="drawer" location="left" temporary>
                        <v-img class="mx-auto my-5" max-width="160" height="auto" cover src=""></v-img>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Início</v-btn>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Sobre</v-btn>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Habilidades</v-btn>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Contato</v-btn>                      
                    </v-navigation-drawer>
                </div>
                <v-col 
                    cols="5" 
                    class="d-none d-md-block"
                    v-motion
                    :initial="{ opacity: 0, x: -100 }"
                    :enter="{ opacity: 1, x: 0,}"
                    :delay="800"
                    :duration="1000"
                >
                    <v-img width="auto" max-width="100" height="auto" class=" ml-16" cover src="@/assets/X.png" @click="$router.push({ path: '/' })"></v-img>
                </v-col>     
                <v-col cols="7" class="d-flex align-center justify-end mr-16"
                    v-motion
                    :initial="{ opacity: 0, x: 100 }"
                    :enter="{ opacity: 1, x: 0,}"
                    :delay="800"
                    :duration="1000"           
                >
                    <a class="cursor-pointer link-rotas d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6 text-primaria">Início</p></a>
                    <a class="cursor-pointer link-rotas d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Sobre</p></a>    
                    <a class="cursor-pointer link-rotas d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Habilidades</p></a>  
                    <a class="cursor-pointer link-rotas d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Contato</p></a>
                </v-col>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            drawer: false,
        }
    }
}
</script>