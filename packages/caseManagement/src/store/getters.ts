export default {
  sidebar : state => state.$app.sidebar,
  visitedViews : state => state.$tagsView.visitedViews,
  cachedViews : state => state.$tagsView.cachedViews,
  routers : state => state.$permission.routers,
  permissionRouters : state => state.$permission.permissionRouters
}
