import { Component, Prop, Vue } from "vue-property-decorator";

import MUTATION_TYPE from '../../../store/MyTodoList/mutation-types';


@Component( {
    template: require( `./TodoListHeader.html` ),
} )
export default class TodoListHeader extends Vue {
    title: string = "";

    addTodo () {
        if ( this.title.trim() !== "" ) {
            this.$store.commit( `myTodoList/${ MUTATION_TYPE.ADD_TODO }`, { title: this.title } );
            this.title = "";
        }
    }
}
