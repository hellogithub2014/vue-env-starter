// import Vue from 'vue'
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex';
import { Component, Prop, Vue } from "vue-property-decorator";
import MUTATION_TYPE from '../../store/mutation-types';


// @Component 修饰符注明了此类为一个 Vue 组件
@Component( {
    // 所有的组件选项都可以放在这里
    template: require( './MyFirstTsComp.html' ),
    computed: {
        ...mapState( [ 'todos' ] ),
        ...mapGetters( [ 'doneTodos', 'doneTodoCount' ] )
    },
    methods: {
        ...mapMutations( {
            addTodo: MUTATION_TYPE.ADD_TODO
        } ),
        ...mapActions( [ 'addTodoAsync' ] )
    }
} )
export default class MyFirstTsComponent extends Vue {
    @Prop() text: string;
    // 初始数据可以直接声明为实例的属性
    message: string = "Hello!";

    // 组件方法也可以直接声明为实例的方法
    onClick (): void {
        window.alert( this.message + this.text );
    }

    created () {
        console.log( `created` );
    }
}
