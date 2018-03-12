import Todo from '../../../store/MyTodoList/todo.model';
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapActions, mapMutations, mapGetters } from 'vuex';

import MUTATION_TYPE from '../../../store/MyTodoList/mutation-types';
import './TodoListContentItem.scss';

@Component( {
    template: require( `./TodoListContentItem.html` ),
    methods: {
        ...mapActions( "myTodoList", [ "deleteTodo" ] ),
        ...mapMutations( "myTodoList", {
            "toggleComplete": MUTATION_TYPE.TOGGLE_COMPLETE,
        } )
    },
} )
export default class TodoListContentItem extends Vue {
    @Prop() todo: Todo;
    editingTodo: Todo = null;
    cacheTodoTitle: string = "";

    editTodo ( todo: Todo ) {
        this.editingTodo = todo;
        this.cacheTodoTitle = todo.title;
    }

    getVisibleClass ( todo: Todo ) {
        return {
            hide: todo === this.editingTodo,
            show: todo !== this.editingTodo
        }
    }

    getOppsiteVisibleClass ( todo: Todo ) {
        return {
            hide: todo !== this.editingTodo,
            show: todo === this.editingTodo
        }
    }

    restoreTitle () {
        this.cacheTodoTitle = "";
        this.editingTodo = null;
    }

    changeTitle ( uid: number, newTitle: string ) {
        this.cacheTodoTitle = "";
        this.editingTodo = null;
        // this.$store.commit(
        //     `myTodoList/${ MUTATION_TYPE.EDIT_TODO }`,
        //     { uid, title: newTitle }
        // );
        this.$store.commit( {
            type: `myTodoList/${ MUTATION_TYPE.EDIT_TODO }`,
            uid,
            title: newTitle
        } );
    }
}

