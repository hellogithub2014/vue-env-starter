import { mapMutations, mapGetters, mapState } from 'vuex';
import { Component, Prop, Vue } from "vue-property-decorator";

import MUTATION_TYPE from '../../../store/MyTodoList/mutation-types';


@Component( {
    template: require( `./TodoListFooter.html` ),
    methods: {
        ...mapMutations( "myTodoList", {
            toggleAll: MUTATION_TYPE.TOGGLE_ALL,
            removeAllCompleted: MUTATION_TYPE.REMOVE_ALL_COMPLETED,
        } )
    },
    computed: {
        ...mapGetters( "myTodoList", {
            activeTodoCount: "activeTodoCount",
        } ),
        ...mapState( "myTodoList", {
            allTodoCount: ( state: any ) => state.todos.length,
        } ),
        isRemoveAllCompleteButtonShow () {
            return this.activeTodoCount > 0 && this.activeTodoCount < this.allTodoCount; // 未完成的与已完成的均有一部分
        }
    }
} )
export default class TodoListFooter extends Vue {
    filterKey: string = "";

    changeStatus ( status ) {
        this.$emit( "status-change", status );
    }

    changeFilterKey () {
        this.$emit( "filterkey-change", this.filterKey );
    }
}
