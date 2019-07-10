export default {
  sidebar : state => state.$app.sidebar,
  language : state => state.$app.language,
  size : state => state.$app.size,
  device : state => state.$app.device,
  visitedViews : state => state.$tagsView.visitedViews,
  cachedViews : state => state.$tagsView.cachedViews,
  permissionRouters : state => state.$permission.routers,
  addRouters : state => state.$permission.addRouters
}
