export default {
    template: `
        <div>
            <h1>Hello World, <strong>{{name}}</strong></h1>
            <form @submit="changeName()">
                <input type="text" v-model="newName">
                <input type="submit" value="alterar">
            </form>
        </div>
    `,
    data() {
        return {
            name: 'Erik',
            newName: ''
        }
    },
    methods: {
        changeName() {
            this.name = this.newName;
        }
    }
}
