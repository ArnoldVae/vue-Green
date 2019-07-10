import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'

import dashboard from '@/views/dashboard/store'
import home from '@/views/home/store'
import archiveFile from '@/views/electronicFiling/archiveFile/store'
import queryanalyze from '@/views/queryanalyze/store'
import app from './app'
import tagsView from './tagsView'
import permission from './permission'
import archiving from '@/views/archivingRead/store'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    $app: app,
    $permission: permission,
    $tagsView: tagsView,
    $dashboard: dashboard,
    $home: home,
    $archiveFile: archiveFile,
    $queryanalyze: queryanalyze,
    $archiving:archiving,
  },
  getters
});
