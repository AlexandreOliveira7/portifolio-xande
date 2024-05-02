<template>
    <v-main class="overflow-x-hidden overflow-y-hidden">       
        <v-row class="mb-10" style="height: 500px;">
            <v-col cols="12" class="img-banner">
                         
            </v-col>
        </v-row>
        
    </v-main>
  </template>

<script>

    export default {
        mounted(){
            this.$root.isLoading = false;
        }
    }
</script>

<style>
    .img-banner {
        background-image: url(../assets/xande.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: start;

    }
</style>