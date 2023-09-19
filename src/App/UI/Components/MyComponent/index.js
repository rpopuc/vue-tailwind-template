export class MyComponent
{
    static async load() {
        return fetch('/src/App/UI/Components/MyComponent/template.html').then(response => response.text()).then(text => {
            const template = text.match(/.*?script>(.*)/smi)[1]
            Vue.component('my-component', {
                template,
                props: {
                    message: {type: String, default: 'Hello World!'},
                },
                methods: {
                    onClick() {
                        this.$emit('click')
                    },
                }
            })
        })
    }
}
