// import Vue from 'vue'
import { Component, Prop, Vue } from "vue-property-decorator";


// @Component 修饰符注明了此类为一个 Vue 组件
@Component( {
    // 所有的组件选项都可以放在这里
    template: require( './MyFirstTsComp.html' ),
} )
export default class MyFirstTsComponent extends Vue {
    @Prop() text: string;
    @Prop() myModel: { data: Object };
    // 初始数据可以直接声明为实例的属性
    message: string = "Hello!";

    // 组件方法也可以直接声明为实例的方法
    onClick (): void {
        window.alert( this.message + this.text );
    }

    created () {
        console.log( `created` );
    }

    addChildren () {
        Vue.set( this.myModel.data, "children", [ 1, 2, 3 ] );
        // this.myModel.children.push( ...[ 1, 2, 3 ] );
    }
}
