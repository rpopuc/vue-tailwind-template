import { MyComponent } from '/src/App/UI/Components/MyComponent/index.js'

export class Loader
{
    static async load() {
        const components = [
            MyComponent,,
        ]

        return Promise.all(components.map(component => component.load()))
    }
}
