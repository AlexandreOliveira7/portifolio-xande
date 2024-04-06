<template class="bg-white">
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center pt-7">
        <div class="d-md-none">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="ml-n12 text-primaria"></v-app-bar-nav-icon>
            <v-navigation-drawer v-model="drawer" location="left" temporary>
              <v-img class="mx-auto my-5" max-width="160" height="auto" cover src=""></v-img>
              <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Início</v-btn>
              <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Quem somos</v-btn>
              <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Parceiros</v-btn>
              <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Segurança</v-btn>
              <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Soluções</v-btn>
              <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Módulos</v-btn>
              <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Ajuda</v-btn>
              <div>            
                <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize" density="comfortable"><p class="text-subtitle-1">Entrar</p></v-btn>
              </div>
              <div class="d-flex justify-center">               
                <v-btn class="w-75 bg-primary rounded-xl elevation-0 text-transf ">
                  Acesse a Plataforma
                </v-btn>
              </div>
            </v-navigation-drawer>
        </div>
        <v-col cols="5" class="d-none d-md-block">
          <v-img width="auto" max-width="100" height="auto" class=" ml-16" cover src="@/assets/X.png" @click="$router.push({ path: '/' })"></v-img>
        </v-col>     
        <v-col cols="7" class="d-flex align-center justify-end">
          <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Início</p></a>
          <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Sobre</p></a>    
          <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Habilidades</p></a>  
          <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Projetos</p></a>
          <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Contatos</p></a>
        </v-col>
      </v-col>
    </v-row> 
    <v-row class="bg-gelo py-16">
      <v-container>     
        <v-row>
            <v-col cols="12" class="d-flex justify-center align-itens-center text-center">
              <div>
                <p class="text-h5 text-md-h4 text-lg-h3 font-weight-bold">Olá, eu sou Alexandre Oliveira</p><br>
                <p class="text-h6 text-md-h5 text-lg-h4 font-weight-bold mt-n4">Desenvolvedor <span class="text-h6 text-md-h5 text-lg-h4 font-weight-bold text-primaria">Frontend</span></p>
                <p class="text-subtitle-1 text-md-h6 text-lg-h5 font-weight-bold text-cinza mt-1">crie com propósito</p>
                <div class=" d-flex justify-center align-center">
                    <v-col cols="3">
                        <v-btn block class="bg-primaria rounded">Github</v-btn>
                    </v-col>
                    <v-col cols="3">
                        <v-btn block class="bg-primaria rounded">Linkedin</v-btn>
                    </v-col>
                    
                    
                </div>
              </div>          
            </v-col>
        </v-row>     
      </v-container>
    </v-row>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data(){
      return {
        drawer: false,
      }   
    },
  })
   
  </script>
