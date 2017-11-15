export default {
    template: `
        <div>
            <h1>{{count}}</h1>
            <button @click="count++" class="increment">Incrementa</button>
            <button @click="count--" class="decrement">Decrementa</button>
        </div>
    `,
    data: function () {
        return {
            count: 0
        }
    }
}
