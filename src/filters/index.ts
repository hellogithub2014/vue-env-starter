import Vue from 'vue'
import pluralize from "./pluralize";

export default function registerFilters () {
    Vue.filter( "pluralize", pluralize );
}

