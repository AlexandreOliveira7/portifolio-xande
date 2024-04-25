<template>
    <v-main class="overflow-x-hidden overflow-y-hidden">
        <v-row>
            <v-col cols="12" class="d-flex justify-center align-center pt-7">
                <div class="d-md-none">
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="ml-n12 text-primaria"></v-app-bar-nav-icon>
                    <v-navigation-drawer v-model="drawer" location="left" temporary>
                        <v-img class="mx-auto my-5" max-width="160" height="auto" cover src=""></v-img>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Início</v-btn>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Sobre</v-btn>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Habilidades</v-btn>
                        <v-btn class="cursor-pointer w-100 bg-third elevation-0 text-capitalize">Contato</v-btn>                      
                    </v-navigation-drawer>
                </div>
                <v-col cols="5" class="d-none d-md-block">
                    <v-img width="auto" max-width="100" height="auto" class=" ml-16" cover src="@/assets/X.png" @click="$router.push({ path: '/' })"></v-img>
                </v-col>     
                <v-col cols="7" class="d-flex align-center justify-end mr-16">
                    <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Início</p></a>
                    <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Sobre</p></a>    
                    <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Habilidades</p></a>  
                    <a class="cursor-pointer d-none d-md-flex mr-7" density="comfortable"><p class="text-h6 text-lg-h6">Contato</p></a>
                </v-col>
            </v-col>
        </v-row>
        <v-row class="mb-10">
            <v-col cols="12">
                <v-row class="bg-gelo py-16">    
                    <v-col cols="12" class="d-flex justify-center align-itens-center text-center">
                        <div>
                            <p class="text-h5 text-md-h4 text-lg-h3 font-weight-bold">Olá, eu sou Alexandre Oliveira</p><br>
                            <p class="text-h6 text-md-h5 text-lg-h4 font-weight-bold mt-n4">Desenvolvedor <span class="text-h6 text-md-h5 text-lg-h4 font-weight-bold text-primaria">Frontend</span></p>
                            <p class="text-subtitle-1 text-md-h6 text-lg-h5 font-weight-bold text-cinza mt-1">crie com propósito</p>
                            <div class=" d-flex justify-center align-center">
                                <v-col cols="3">
                                    <v-btn block class="bg-primaria rounded-xl">Github</v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn block class="bg-primaria rounded-xl">Linkedin</v-btn>
                                </v-col>                                      
                            </div>
                        </div>          
                    </v-col> 
                </v-row>
                <v-row>
                    <v-col cols="12" class="d-flex justify-center align-center mt-5">
                        <p class="text-subtitle1 text-md-h6 text-lg-h5 font-weight-bold" style="border-bottom: 3px solid #00008B;">Projetos</p>
                    </v-col>
                </v-row>
                <v-row class="mt-10 mb-5 d-flex start">
                    <v-col cols="12" md="3" class="pl-10 mt-10">
                        <v-col cols="12 mb-10">
                            <p class="font-weight-bold">Filtrar por projeto</p>
                            <v-text-field
                                v-model="queryProjeto"
                                density="compact"
                                variant="solo"
                                label="Pesquisar projeto"
                                append-inner-icon="mdi-magnify"
                                single-line
                                hide-details
                                class="mt-2"
                                @keyup="estaEscrevendo" @keydown="terminouEscrever = false;"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <h4>Filtro por Anos <v-icon :icon="toggleFiltros.includes('Anos') ? 'mdi-chevron-down' : 'mdi-chevron-right'" class="primary-icon-link float-end" @click="toggleFiltros.includes('Anos') ? popIt(toggleFiltros, 'Anos') : toggleFiltros.push('Anos');"></v-icon></h4>
                            <v-row v-if="toggleFiltros.includes('Anos')">
                                <v-col>
                                    <v-text-field
                                        v-model="queryAnos"
                                        density="compact"
                                        variant="solo"
                                        label="Pesquisa Ano"
                                        append-inner-icon="mdi-magnify"
                                        single-line
                                        hide-details
                                        class="mt-2"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>                      
                            <v-row class="ma-0 ms-2 mt-0 mb-0" v-if="toggleFiltros.includes('Anos')">
                                <v-col cols="12" class="ma-0 mt-0 mb-0" v-for="valor in AmostraAnos" :key="'anos__' + valor">
                                    <label :class="matchedQueryAnos.includes(valor) ? 'font-weight-bold' : ''">
                                        <input class="mt-1" type="checkbox" :class="false === filtroTernario['anos'][valor] ? 'chk-red' : (true === filtroTernario['anos'][valor] ? 'chk-green' : 'chk-blue' )"  :indeterminate="false === filtroTernario['anos'][valor]" v-model="filtroTernario['anos'][valor]"> {{ valor }}
                                    </label>
                                </v-col>                              
                            </v-row>
                            <hr class="mt-2">
                        </v-col>   
                        <v-col cols="12 mt-2">
                            <h4>Filtro por Frameworks <v-icon :icon="toggleFiltros.includes('Frame') ? 'mdi-chevron-down' : 'mdi-chevron-right'" class="primary-icon-link float-end" @click="toggleFiltros.includes('Frame') ? popIt(toggleFiltros, 'Frame') : toggleFiltros.push('Frame');"></v-icon></h4>
                            <v-row v-if="toggleFiltros.includes('Frame')">
                                <v-col>
                                    <v-text-field
                                        v-model="queryFrame"
                                        density="compact"
                                        variant="solo"
                                        label="Pesquisa Ano"
                                        append-inner-icon="mdi-magnify"
                                        single-line
                                        hide-details
                                        class="mt-2"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>                      
                            <v-row class="ma-0 ms-2 mt-0 mb-0" v-if="toggleFiltros.includes('Frame')">
                                <v-col cols="12" class="ma-0 mt-0 mb-0" v-for="valor in AmostraFrameWorks" :key="'frame__' + valor">
                                    <label :class="matchedQueryFrame.includes(valor) ? 'font-weight-bold' : ''">
                                        <input class="mt-1" type="checkbox" :class="false === filtroTernario['frameworks'][valor] ? 'chk-red' : (true === filtroTernario['frameworks'][valor] ? 'chk-green' : 'chk-blue' )"  :indeterminate="false === filtroTernario['frameworks'][valor]" v-model="filtroTernario['frameworks'][valor]"> {{ valor }}
                                    </label>
                                </v-col>                              
                            </v-row>
                            <hr class="mt-2">
                        </v-col>
                        <v-col cols="12 mt-2">
                            <h4>Filtro por Linguagens <v-icon :icon="toggleFiltros.includes('Linguagem') ? 'mdi-chevron-down' : 'mdi-chevron-right'" class="primary-icon-link float-end" @click="toggleFiltros.includes('Linguagem') ? popIt(toggleFiltros, 'Linguagem') : toggleFiltros.push('Linguagem');"></v-icon></h4>
                            <v-row v-if="toggleFiltros.includes('Linguagem')">
                                <v-col>
                                    <v-text-field
                                        v-model="queryLinguagem"
                                        density="compact"
                                        variant="solo"
                                        label="Pesquisa Ano"
                                        append-inner-icon="mdi-magnify"
                                        single-line
                                        hide-details
                                        class="mt-2"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>                      
                            <v-row class="ma-0 ms-2 mt-0 mb-0" v-if="toggleFiltros.includes('Linguagem')">
                                <v-col cols="12" class="ma-0 mt-0 mb-0" v-for="valor in AmostraLinguagem" :key="'linguagem__' + valor">
                                    <label :class="matchedQueryLinguagem.includes(valor) ? 'font-weight-bold' : ''">
                                        <input class="mt-1" type="checkbox" :class="false === filtroTernario['linguagens'][valor] ? 'chk-red' : (true === filtroTernario['linguagens'][valor] ? 'chk-green' : 'chk-blue' )"  :indeterminate="false === filtroTernario['linguagens'][valor]" v-model="filtroTernario['linguagens'][valor]"> {{ valor }}
                                    </label>
                                </v-col>                              
                            </v-row>
                            <hr class="mt-2">
                        </v-col>      
                        <v-col cols="12 mt-2">
                            <h4>Filtro por Estilos <v-icon :icon="toggleFiltros.includes('Bibliotecas') ? 'mdi-chevron-down' : 'mdi-chevron-right'" class="primary-icon-link float-end" @click="toggleFiltros.includes('Bibliotecas') ? popIt(toggleFiltros, 'Bibliotecas') : toggleFiltros.push('Bibliotecas');"></v-icon></h4>
                            <v-row v-if="toggleFiltros.includes('Bibliotecas')">
                                <v-col>
                                    <v-text-field
                                        v-model="queryEstilo"
                                        density="compact"
                                        variant="solo"
                                        label="Pesquisa Ano"
                                        append-inner-icon="mdi-magnify"
                                        single-line
                                        hide-details
                                        class="mt-2"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>                      
                            <v-row class="ma-0 ms-2 mt-0 mb-0" v-if="toggleFiltros.includes('Bibliotecas')">
                                <v-col cols="12" class="ma-0 mt-0 mb-0" v-for="valor in AmostraEstilo" :key="'estilo__' + valor">
                                    <label :class="matchedQueryEstilo.includes(valor) ? 'font-weight-bold' : ''" >
                                        <input class="mt-1" type="checkbox" :class="false === filtroTernario['estilos'][valor] ? 'chk-red' : (true === filtroTernario['estilos'][valor] ? 'chk-green' : 'chk-blue' )"  :indeterminate="false === filtroTernario['estilos'][valor]" v-model="filtroTernario['estilos'][valor]"> {{valor}}
                                    </label>
                                </v-col>
                                
                                <!-- <v-col cols="12" class="ma-0 mt-0 mb-0" v-for="valor in filtroAnos" :key="'anos__' + valor">
                                    <label >
                                        <input type="checkbox" > {{ valor }}
                                    </label>
                                </v-col> -->
                            </v-row>
                            <hr class="mt-2">
                        </v-col>      
                        <v-col cols="12">
                            <v-btn class="bg-primaria rounded-xl" @click="geradorProjetos()">Aplicar Filtros</v-btn>
                        </v-col>    
                    </v-col>
                                    
                    <v-col cols="12" md="9" v-if="listagemProjetos.length > 0 && this.terminouEscrever">
                        <v-row class="d-flex justify-center mx-5 mx-md-0">
                            <v-col cols="12" md="10" class="bg-gelo d-md-flex justify-center align-center mr-2 rounded-lg mx-5 mt-2" v-for="projeto in listagemProjetos">
                                    <v-col cols="12" md="4">
                                        <v-img contain src="@/assets/img-projeto.png"></v-img>
                                    </v-col>
                                    <v-col cols="12" md="6" class="pl-md-10">
                                        <p class="text-h6 text-lg-h5 font-weight-bold">{{ projeto.anos }} {{ projeto.frameworks }} {{ projeto.linguagens }} {{ projeto.estilos }} {{ projeto.nome }}</p>
                                        <p class="text-body-2 text-cinza font-weight-bold mt-2">falaaa galera esse aqui é o meu portifólio e eu estou testando a descrição falaaa galera esse aqui é o meu portifólio e eu estou testando a descrição falaaa galera esse aqui é o meu portifólio e eu estou testando a descrição</p>
                                        <v-row class="mt-2">
                                            <v-col cols="2">
                                                <img width="30px" height="30px" src="@/assets/js.png"></img>                                              
                                            </v-col>
                                            <v-col cols="2">
                                                <img width="30px" height="30px" src="@/assets/js.png"></img>                                              
                                            </v-col>
                                            <v-col cols="2">
                                                <img width="30px" height="30px" src="@/assets/js.png"></img>                                              
                                            </v-col>
                                            <v-col cols="2">
                                                <img width="30px" height="30px" src="@/assets/js.png"></img>                                              
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-btn class="rounded-xl bg-primaria mr-2">Deploy</v-btn>
                                                <v-btn class="rounded-xl bg-primaria">Github</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>                             
                            </v-col>                                                                         
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="9" class="d-flex justify-center" v-if="listagemProjetos.length <= 0">
                        <v-row class="d-flex justify-center align-center mt-16 mt-md-0 mb-5 mb-md-0">
                            <v-card class="py-5 px-8 bg-primaria rounded-xl">
                                <p>Não há registros de projetos</p>
                            </v-card>                                                                  
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="9" class="d-flex justify-center" v-if="this.terminouEscrever === false">
                        <v-row class="d-flex justify-center align-center mt-16 mt-md-0 mb-5 mb-md-0">
                            
                                <p class="text-h6 text-primaria">Aplicando critérios de pesquisa...</p>
                                                                                            
                        </v-row>
                    </v-col>
                </v-row>          
            </v-col>
        </v-row>
    </v-main>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import  axios  from 'axios';
  import get_user from '@/files/get-user.json'

  
  export default defineComponent({
    data(){
      return {
        drawer: false,
        queryProjeto: '',
        queryAnos: '',
        queryFrame: '',
        queryLinguagem: '',
        queryEstilo: '',
        matchedQueryAnos: [],
        matchedQueryFrame: [],
        matchedQueryLinguagem: [],
        matchedQueryEstilo: [],
        filtroProjetos: [],
        toggleFiltros: [],
        terminouEscrever: true,
        dataResult: get_user,
        filtroTernario: {
            anos: {               
                "2025": null,
                "2023": null,
                "2024": null,
                "2022": null
            },
            frameworks: {               
                "ReactJS": null,
                "VueJS": null,
                "Angular": null,
                "Django": null,
                "Laravel": null
            },
            linguagens: {               
                "JavaScript": null,
                "TypeScript": null,
                "Python": null,
                "C": null,
                "C#": null,
                "PHP": null,
                "Java": null
            },
            estilos: {               
                "Vuetify": null,
                "Bootstrap": null,
                "TailwindCSS": null,
                "Styled-Components": null
            }

        },
      }   
    },

    computed: {
        AmostraProjeto(){
            let Projeto_amostra = this.filtroProjetos;
            return Projeto_amostra;
        },
        AmostraAnos(){
            let chaves = Object.keys(this.filtroTernario['anos']);
            let chaves_len = chaves.length;
            var query = this.queryAnos.toLowerCase();
            this.matchedQueryAnos = [];
            chaves.sort(function(a, b){
                return (a.toLowerCase() < b.toLowerCase()) ? 1 : -1
            });
            if(query.length > 0){
                for(var x = 0; x < chaves_len; x++){
                    var subject = chaves[x].toLowerCase();
                    var result = subject.match(query);
                    if((result) && result.length > 0){
                        this.matchedQueryAnos.push(chaves[x])
                    }
                }
            }

            chaves.sort(function(a, b){
                if(this.matchedQueryAnos.includes(a)){
                return -1
                }
                return 1
            }.bind(this));

            return chaves
        },
        AmostraFrameWorks(){
            let chaves = Object.keys(this.filtroTernario['frameworks']);
            let chaves_length = chaves.length;
            var query = this.queryFrame.toLowerCase();
            this.matchedQueryFrame = [];
            chaves.sort(function(a, b){
                return (a.toLowerCase() < b.toLowerCase()) ? 1 : -1
            });

            if(query.length > 0){
                for(let x = 0; x < chaves_length; x++){
                    let chave_atual = chaves[x].toLowerCase();
                    var result = chave_atual.match(query);
                    if((result) && result.length > 0){
                        this.matchedQueryFrame.push(chaves[x]);
                    }
                }
            }

            chaves.sort(function(a,b){
                if(this.matchedQueryFrame.includes(a)){
                    return -1
                }
                    return 1
            }.bind(this));

            return chaves;
        },

        AmostraLinguagem(){
            let chaves = Object.keys(this.filtroTernario['linguagens']);
            let chaves_length = chaves.length;
            var query = this.queryLinguagem.toLowerCase();
            this.matchedQueryLinguagem = [];

            chaves.sort(function(a, b){
                return (a.toLowerCase() < b.toLowerCase() ? 1 : -1)
            })

            if(query.length > 0){
                for(let x = 0; x < chaves_length; x++){
                    let chave_atual = chaves[x].toLowerCase();
                    var result = chave_atual.match(query);
                    if((result) && result.length > 0){
                        this.matchedQueryLinguagem.push(chaves[x]);
                    }
                }
            }

            chaves.sort(function(a, b){
                if(this.matchedQueryLinguagem.includes(a)){
                    return -1
                }   
                    return 1
            }.bind(this));

            return chaves
        },

        AmostraEstilo(){
            let chaves = Object.keys(this.filtroTernario['estilos']);
            let chaves_length = chaves.length;
            var query = this.queryEstilo.toLowerCase();
            this.matchedQueryEstilo = [];
            chaves.sort(function(a, b){
                return (a.toLowerCase() < b.toLowerCase() ? 1 : -1)
            });

            if(query.length > 0){
                for(let x = 0; x < chaves_length; x++){
                    var chave_atual = chaves[x].toLowerCase();
                    var result = chave_atual.match(query);
                    if((result) && result.length > 0){
                        this.matchedQueryEstilo.push(chaves[x]);
                    }
                }
            }

            chaves.sort(function(a, b){
                if(this.matchedQueryEstilo.includes(a) ){
                    return ( -1 )
                }
                    1
            }.bind(this))
            return chaves
        },

        listagemProjetos() {
            var projetos = this.filtroProjetos;
            let projetos_lenght = this.filtroProjetos.length;
            
            if(this.queryProjeto.length > 0 && this.terminouEscrever){
                projetos = []
                var regularProjetos = new RegExp(this.queryProjeto, 'i');
                for(let x = 0; x < projetos_lenght; x++){
                    let projeto_atual_nome = this.filtroProjetos[x]['nome'].toLowerCase();
                    var result = projeto_atual_nome.search(regularProjetos);
                    if(result >= 0){
                        projetos.push(this.filtroProjetos[x])
                    }
                    
                }
            }
            
            return projetos;
        }
    },

    watch: {
        
        //Filtro Ano
        'filtroTernario.anos.2022'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['anos']['2022'] = null;
            }
        },
        'filtroTernario.anos.2023'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['anos']['2023'] = null;
            }
        },
        'filtroTernario.anos.2024'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['anos']['2024'] = null;
            }
        },
        'filtroTernario.anos.2025'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['anos']['2025'] = null;
            }
        },
    
        //Filtro FrameWork
        'filtroTernario.frameworks.ReactJS'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['frameworks']['ReactJS'] = null;
            }
        },
        'filtroTernario.frameworks.VueJS'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['frameworks']['VueJS'] = null;
            }
        },
        'filtroTernario.frameworks.Angular'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['frameworks']['Angular'] = null;
            }
        },
        'filtroTernario.frameworks.Django'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['frameworks']['Django'] = null;
            }
        },
        'filtroTernario.frameworks.Laravel'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['frameworks']['Laravel'] = null;
            }
        },

        //Filtro Linguagem
        'filtroTernario.linguagens.JavaScript'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['linguagens']['JavaScript'] = null;
            }
        },
        'filtroTernario.linguagens.TypeScript'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['linguagens']['TypeScript'] = null;
            }
        },
        'filtroTernario.linguagens.Python'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['linguagens']['Python'] = null;
            }
        },
        'filtroTernario.linguagens.C'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['linguagens']['C'] = null;
            }
        },
        'filtroTernario.linguagens.C#'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['linguagens']['C#'] = null;
            }
        },
        'filtroTernario.linguagens.PHP'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['linguagens']['PHP'] = null;
            }
        },
        'filtroTernario.linguagens.Java'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['linguagens']['Java'] = null;
            }
        },
       
        //Filtro Estilo
        'filtroTernario.estilos.Vuetify'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['estilos']['Vuetify'] = null;
            }
        },
        'filtroTernario.estilos.Bootstrap'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['estilos']['Bootstrap'] = null;
            }
        },
        'filtroTernario.estilos.TailwindCSS'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['estilos']['TailwindCSS'] = null;
            }
        },
        'filtroTernario.estilos.Styled-Components'(newValue, oldValue) {
            if (newValue === true && oldValue === false) {
                this.filtroTernario['estilos']['Styled-Components'] = null;
            }
        },
        
    },

    methods: {
        popIt(target, element){
            let index = target.indexOf(element);
            if(index > -1){
                target.splice(index, 1);
            }
        },

        estaEscrevendo(){
            this.terminouEscrever = false;

            this.tempoPesquisa = setTimeout(() => {
                this.terminouEscrever = true;
            }, 1000)
        },

        // async getUser() {
        //     await axios('https://api.github.com/users/AlexandreOliveira7/repos').then(response => {
        //         console.log(response)
        //     })
        // }, 
        
        geradorProjetos(){
            this.$root.isLoading = true;
            this.filtroProjetos = [];
            let ignored_id_projeto = [];
            let arr_keys = Object.keys(this.dataResult);
            let arr_keys_length = arr_keys.length;

            let filtro_ternario_anos = Object.values(this.filtroTernario['anos']);
            let fltro_ternario_frameworks = Object.values(this.filtroTernario['frameworks']);
            let fltro_ternario_linguagens = Object.values(this.filtroTernario['linguagens']);
            let fltro_ternario_estilos = Object.values(this.filtroTernario['estilos']);
         
            let filtro_ternario_anos_includes_true = filtro_ternario_anos.includes(true);
            let filtro_ternario_frameworks_includes_true = fltro_ternario_frameworks.includes(true);
            let filtro_ternario_linguagens_includes_true = fltro_ternario_linguagens.includes(true);
            let filtro_ternario_estilos_includes_true = fltro_ternario_estilos.includes(true);
            
            

            var match_anos;
            var match_frameworks;
            var match_linguagens;
            var match_estilos;
           

            for(let x = 0; x < arr_keys_length; x++){
                var id_atual = arr_keys[x]
                let projeto_atual = this.dataResult[id_atual];
                let projeto =  JSON.parse(JSON.stringify(projeto_atual))

                

                if(ignored_id_projeto.includes(id_atual)){
                    continue;
                }

                match_anos = null;
                match_frameworks = null;
                match_linguagens = null;
                match_estilos = null;

                let filtros_anos_length = projeto['anos'].length;
                for(let y = 0; y < filtros_anos_length; y++){
                    let anos_atual = this.dataResult[id_atual]['anos'][y];
                    if(this.filtroTernario['anos'][anos_atual] === false){
                        match_anos = false;
                        
                        break;
                    } else if(this.filtroTernario['anos'][anos_atual] === true) {
                        match_anos = true;
                    }                  
                }

                let filtro_frameworks_length = projeto['frameworks'].length;
                for(let x = 0; x < filtro_frameworks_length; x++){
                    let framework_atual = this.dataResult[id_atual]['frameworks'][x];
                    if(this.filtroTernario['frameworks'][framework_atual] === false) {
                        match_frameworks = false;
                        break
                    } else if(this.filtroTernario['frameworks'][framework_atual] === true) {
                        match_frameworks = true;
                    }
                }

                let filtro_linguagens_length = projeto['linguagens'].length;
                for(let z = 0; z < filtro_linguagens_length; z++){
                    let linguagem_atual = this.dataResult[id_atual]['linguagens'][z];
                    if(this.filtroTernario['linguagens'][linguagem_atual] === false){
                        match_linguagens = false;
                        break
                    } else if(this.filtroTernario['linguagens'][linguagem_atual] === true) {
                        match_linguagens = true
                    }
                }

                let filtro_estilos_length = projeto['estilos'].length;
                for(let xa = 0; xa < filtro_estilos_length; xa++){
                    let estilo_atual = this.dataResult[id_atual]['estilos'][xa];
                    if(this.filtroTernario['estilos'][estilo_atual] === false){
                        match_estilos = false;
                        break
                    } else if(this.filtroTernario['estilos'][estilo_atual] === true) {
                        match_estilos = true;
                    }
                }
            

                if(match_anos === false || match_frameworks === false || match_linguagens === false || match_estilos === false){
                    if(!ignored_id_projeto.includes(id_atual)){
                        ignored_id_projeto.push(id_atual);
                        continue;
                    }
                }

                if
                (
                    (filtro_ternario_anos_includes_true) && match_anos === null ||
                    (filtro_ternario_frameworks_includes_true) && match_frameworks === null ||
                    (filtro_ternario_linguagens_includes_true) && match_linguagens === null ||
                    (filtro_ternario_estilos_includes_true) && match_estilos === null
                )
                
                {
                    if(!ignored_id_projeto.includes(id_atual)){
                        ignored_id_projeto.push(id_atual);
                        continue;
                    }
                }

                if(!ignored_id_projeto.includes(id_atual)){
                    this.filtroProjetos.push(projeto)
                }
            }

            setTimeout(() => {
            this.$root.isLoading = false;
            }, 800)
        }
    },
    mounted() {
        // this.getUser()
        this.geradorProjetos();
        setTimeout(() => {
            this.$root.isLoading = false;
        }, 2000)
        
    }
  })
   
  </script>

  <style scoped>
    .primary-icon-link {
        background: #00008B;
        color: #f6f6f6;
        border-radius: 10px;
        margin-bottom: 4px;
        margin-left: 6px;
        padding: 12px;
        border: 1px solid #ededed;
        cursor: pointer;
    }
  </style>
