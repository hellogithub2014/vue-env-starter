import TodoListContentItem from '../TodoListContentItem/TodoListContentItem';
import Todo from '../../../store/MyTodoList/todo.model';
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from 'vuex';

import MUTATION_TYPE from '../../../store/MyTodoList/mutation-types';
import './TodoListContent.scss';

@Component( {
    template: require( `./TodoListContent.html` ),
    computed: {
        ...mapGetters( "myTodoList", [ "activeTodoCount" ] )
    },
    components: {
        TodoListContentItem
    }
} )
export default class TodoListContent extends Vue {
    @Prop() filteredTodos: Todo[];
}

