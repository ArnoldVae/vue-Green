import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import home from '@/views/home/store';
import app from './app';
import tagsView from './tagsView';
import permission from './permission';
//线索处置
import leadManagement from '@/views/leadManagement/store';
import leadDispose from '@/views/leadManagement/leadDispose/store';
import dispose from '@/views/leadManagement/dispose/store';
import leadDistributed from '@/views/leadManagement/leadDistributed/store';
import leadAcceptance from '@/views/leadManagement/leadAcceptance/store';
import notificationFeedback from '@/views/leadManagement/notificationFeedback/store';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		$app: app,
		$permission: permission,
		$tagsView: tagsView,
		$home: home,
		//线索处置
		$leadManagement: leadManagement,
		$leadDispose: leadDispose,
		$leadDistributed: leadDistributed,
		$leadAcceptance: leadAcceptance,
		$notificationFeedback: notificationFeedback,
		$dispose: dispose,
	},
	getters
});
