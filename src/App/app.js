console.clear()

import { Loader } from '/src/App/UI/Components/Loader.js'
import { Engine } from '/src/Lib/Engine.js'

Loader.load().then(() => {
    new Vue({
        el: "#app",
        data() {
            return {
                message: 'It works!',
            };
        },
        mounted() {
            this.message = 'It really works!'
        },
        methods: {
          clickOnMessage() {
            const engine = new Engine('!oot dohtem a morf skrow tI')
            this.message = engine.getInvertedMessage()
          }
        },
    });
})