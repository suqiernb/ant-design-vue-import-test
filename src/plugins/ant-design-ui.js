import {
    Form,
    FormItem,
    Button,
    Checkbox
} from 'ant-design-vue'


export default {
    install: (app, options) => {
        app.use(Form, options)
        app.use(FormItem, options)
        app.use(Button, options)
        app.use(Checkbox, options)
    }
}