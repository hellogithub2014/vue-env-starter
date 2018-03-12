import pluralize from '../../../filters/pluralize';
import Todo from '../../../store/MyTodoList/todo.model';
import { mapState } from 'vuex/types';
import TodoListContent from '../TodoListContent/TodoListContent';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoListFooter from '../TodoListFooter/TodoListFooter';
import { Component, Prop, Vue } from "vue-property-decorator";


@Component( {
    template: require( `./TodoList.html` ),
    components: {
        TodoListHeader,
        TodoListContent,
        TodoListFooter
    }
} )
export default class TodoList extends Vue {
    filterKey = "";
    status: boolean | null = null;

    get filteredTodos (): Todo[] {
        const result = this.$store.state.myTodoList.todos.filter( todo => {
            const title: string = todo.title.toLowerCase();
            const key = this.filterKey.toLowerCase();
            if ( !title.includes( key ) ) {
                return false;
            }
            if ( this.status !== null && todo.complete !== this.status ) {
                return false;
            }
            return true;
        } );
        return result;
    }

    updateStatus ( newStatus ) {
        this.status = newStatus;
    }

    updateFilterKey ( newFilterKey ) {
        this.filterKey = newFilterKey;
    }
}
