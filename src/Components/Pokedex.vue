<template>
    <div id="wrapper">
        <div class="list" v-if="pokes.length === 0">
            Nenhum item a exibir
        </div>

        <table class="poke-list" v-if="pokes.length > 0">
            <tbody>
                <tr v-for="poke in pokes">
                    <td>{{ poke.name }}</td>
                </tr>
            </tbody>
        </table>
        <a href="" @click.prevent="getPokes()">listar</a>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function () {
        return {
            pokes: []
        }
    },
    methods: {
        getPokes: function () {
            axios.get('/poke/alasdasdl')
                .then((res) => {
                    this.pokes = res.data.pokes
                })
        }
    }
}
</script>
