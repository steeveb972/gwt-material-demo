$wnd.gwtmaterialdemo.runAsyncCallback16("defineClass(173, 41, $intern_47);\n_.getHref = function getHref(){\n  return $getAttribute(($clinit_DOM() , this.element), 'href');\n}\n;\ndefineClass(84, 41, $intern_68);\n_.getHref = function getHref_0(){\n  return $getAttribute(($clinit_DOM() , this.element), 'href');\n}\n;\ndefineClass(272, 41, $intern_47);\n_.getHref = function getHref_1(){\n  return $getAttribute(($clinit_DOM() , this.element), 'href');\n}\n;\nfunction $applyIndicatorColor(e, color_0){\n  $wnd.jQuery(e).find('.indicator').css('background-color', color_0);\n}\n\nfunction $initialize_4(e){\n  $wnd.jQuery(document).ready(function(){\n    $wnd.jQuery(e).tabs();\n  }\n  );\n}\n\nfunction $selectTab(e, tabId){\n  $wnd.jQuery(e).tabs('select_tab', tabId);\n}\n\nfunction $selectTab_0(this$static, tabId){\n  $selectTab(($clinit_DOM() , this$static.element), tabId);\n}\n\nfunction $setTabIndex_0(this$static){\n  var i, w, w$iterator;\n  i = 0;\n  for (w$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); w$iterator.index_0 < w$iterator.this$01.size_0;) {\n    w = $next_3(w$iterator);\n    if (i == 1) {\n      if (instanceOf(w, 135)) {\n        $selectTab_1(dynamicCast(w, 135));\n        break;\n      }\n    }\n    ++i;\n  }\n}\n\nfunction MaterialTab(){\n  UnorderedList.call(this);\n  this.indicatorColor = 'white';\n  $setClassName(($clinit_DOM() , this.element), 'tabs');\n}\n\ndefineClass(222, 73, {19:1, 9:1, 18:1, 26:1, 17:1, 23:1, 11:1, 16:1, 13:1, 30:1, 28:1, 222:1, 73:1}, MaterialTab);\n_.onLoad = function onLoad_16(){\n  $initialize_4(($clinit_DOM() , this.element));\n  $applyIndicatorColor(this.element, this.indicatorColor);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialTab_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialTab', 222);\nfunction $selectTab_1(this$static){\n  var child, child$iterator, href_0;\n  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); child$iterator.index_0 < child$iterator.this$01.size_0;) {\n    child = $next_3(child$iterator);\n    if (instanceOf(child, 152)) {\n      href_0 = dynamicCast(child, 152).getHref();\n      if (href_0.length) {\n        $selectTab_0(this$static.parent_0, $replaceAll(href_0, '[^a-zA-Z\\\\d\\\\s:]', ''));\n        break;\n      }\n    }\n  }\n}\n\nfunction MaterialTabItem(){\n  ListItem.call(this);\n  $setClassName(($clinit_DOM() , this.element), 'tab');\n}\n\ndefineClass(135, 39, {19:1, 9:1, 18:1, 26:1, 17:1, 23:1, 11:1, 16:1, 13:1, 30:1, 28:1, 135:1, 39:1}, MaterialTabItem);\n_.onLoad = function onLoad_17(){\n  try {\n    this.parent_0 = dynamicCast(this.parent_1, 222);\n  }\n   catch ($e0) {\n    $e0 = wrap($e0);\n    if (instanceOf($e0, 119)) {\n      throw new ClassCastException_0;\n    }\n     else \n      throw unwrap($e0);\n  }\n}\n;\nvar Lgwt_material_design_client_ui_MaterialTabItem_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialTabItem', 135);\nfunction TabsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(521, 51, $intern_39, TabsPresenter);\n_.onReveal = function onReveal_21(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Tabs', 'The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsPresenter', 521);\nfunction TabsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_15(new TabsView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(658, 55, $intern_40, TabsView);\n_.onAttach = function onAttach_10(){\n  $setTabIndex_0(this.tab2);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsView', 658);\nfunction TabsView_BinderImpl(){\n}\n\ndefineClass(852, 1, {}, TabsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsView_BinderImpl', 852);\nfunction $build_f_HTMLPanel1_15(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialRow3, f_MaterialTitle17, f_MaterialRow18, f_MaterialColumn4, tab, f_MaterialColumn11, f_MaterialLabel12, f_MaterialColumn13, f_MaterialLabel14, f_MaterialColumn15, f_MaterialLabel16, f_MaterialColumn19, tab2, f_MaterialColumn26, f_MaterialLabel27, f_MaterialColumn28, f_MaterialLabel29, f_MaterialColumn30, f_MaterialLabel31, f_MaterialTabItem5, f_MaterialLink6, f_MaterialTabItem7, f_MaterialLink8, f_MaterialTabItem9, f_MaterialLink10, f_MaterialTabItem20, f_MaterialLink21, f_MaterialTabItem22, f_MaterialLink23, f_MaterialTabItem24, f_MaterialLink25;\n  f_HTMLPanel1 = new HTMLPanel($html1_16(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Introduction') , $setText_4(f_MaterialTitle2.paragraph, 'You can add a Label as a Tab Item and for contents any Material Widget can be added as a Tab Content (e.g MaterialTopNav)') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (f_MaterialColumn4 = new MaterialColumn , $add_13(f_MaterialColumn4, (tab = new MaterialTab , $add_19(tab, (f_MaterialTabItem5 = new MaterialTabItem , $add_13(f_MaterialTabItem5, (f_MaterialLink6 = new MaterialLink , f_MaterialLink6.span_0.setText('Tab 1') , f_MaterialLink6.span_0.attached || $add_13(f_MaterialLink6, f_MaterialLink6.span_0) , $setTextColor(f_MaterialLink6.colorsMixin, 'white') , $setAttribute(f_MaterialLink6.element, 'href', '#tab1') , f_MaterialLink6)) , $setWaves(f_MaterialTabItem5, ($clinit_WavesType() , YELLOW)) , $setGrid(f_MaterialTabItem5.gridMixin, 's4') , f_MaterialTabItem5)) , $add_19(tab, (f_MaterialTabItem7 = new MaterialTabItem , $add_13(f_MaterialTabItem7, (f_MaterialLink8 = new MaterialLink , f_MaterialLink8.span_0.setText('Tab 2') , f_MaterialLink8.span_0.attached || $add_13(f_MaterialLink8, f_MaterialLink8.span_0) , $setTextColor(f_MaterialLink8.colorsMixin, 'white') , $setAttribute(f_MaterialLink8.element, 'href', '#tab2') , f_MaterialLink8)) , $setWaves(f_MaterialTabItem7, YELLOW) , $setGrid(f_MaterialTabItem7.gridMixin, 's4') , f_MaterialTabItem7)) , $add_19(tab, (f_MaterialTabItem9 = new MaterialTabItem , $add_13(f_MaterialTabItem9, (f_MaterialLink10 = new MaterialLink , f_MaterialLink10.span_0.setText('Tab 3') , f_MaterialLink10.span_0.attached || $add_13(f_MaterialLink10, f_MaterialLink10.span_0) , $setTextColor(f_MaterialLink10.colorsMixin, 'white') , $setAttribute(f_MaterialLink10.element, 'href', '#tab3') , f_MaterialLink10)) , $setWaves(f_MaterialTabItem9, YELLOW) , $setGrid(f_MaterialTabItem9.gridMixin, 's4') , f_MaterialTabItem9)) , tab.indicatorColor = 'yellow' , $applyIndicatorColor(tab.element, 'yellow') , $setBackgroundColor(tab.colorsMixin, 'blue') , $setWaves(tab, YELLOW) , tab)) , $setGrid(f_MaterialColumn4.gridMixin, 's12') , f_MaterialColumn4)) , $add_13(f_MaterialRow3, (f_MaterialColumn11 = new MaterialColumn , $add_13(f_MaterialColumn11, (f_MaterialLabel12 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel12.directionalTextHelper, 'Tab 1 Content') , f_MaterialLabel12)) , $setId_0(f_MaterialColumn11.idMixin, 'tab1') , $setGrid(f_MaterialColumn11.gridMixin, 's12') , f_MaterialColumn11)) , $add_13(f_MaterialRow3, (f_MaterialColumn13 = new MaterialColumn , $add_13(f_MaterialColumn13, (f_MaterialLabel14 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel14.directionalTextHelper, 'Tab 2 Content') , f_MaterialLabel14)) , $setId_0(f_MaterialColumn13.idMixin, 'tab2') , $setGrid(f_MaterialColumn13.gridMixin, 's12') , f_MaterialColumn13)) , $add_13(f_MaterialRow3, (f_MaterialColumn15 = new MaterialColumn , $add_13(f_MaterialColumn15, (f_MaterialLabel16 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel16.directionalTextHelper, 'Tab 3 Content') , f_MaterialLabel16)) , $setId_0(f_MaterialColumn15.idMixin, 'tab3') , $setGrid(f_MaterialColumn15.gridMixin, 's12') , f_MaterialColumn15)) , f_MaterialRow3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle17 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle17.header), 'Set Tab Index Method') , $setText_4(f_MaterialTitle17.paragraph, 'By calling this method, you can easily preselect a tab index. Note the index will start at 1.') , f_MaterialTitle17), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow18 = new MaterialRow , $add_13(f_MaterialRow18, (f_MaterialColumn19 = new MaterialColumn , $add_13(f_MaterialColumn19, (tab2 = new MaterialTab , $add_19(tab2, (f_MaterialTabItem20 = new MaterialTabItem , $add_13(f_MaterialTabItem20, (f_MaterialLink21 = new MaterialLink , f_MaterialLink21.span_0.setText('Tab 1') , f_MaterialLink21.span_0.attached || $add_13(f_MaterialLink21, f_MaterialLink21.span_0) , $setTextColor(f_MaterialLink21.colorsMixin, 'white') , $setAttribute(f_MaterialLink21.element, 'href', '#tab21') , f_MaterialLink21)) , $setWaves(f_MaterialTabItem20, YELLOW) , $setGrid(f_MaterialTabItem20.gridMixin, 's4') , f_MaterialTabItem20)) , $add_19(tab2, (f_MaterialTabItem22 = new MaterialTabItem , $add_13(f_MaterialTabItem22, (f_MaterialLink23 = new MaterialLink , f_MaterialLink23.span_0.setText('Tab 2') , f_MaterialLink23.span_0.attached || $add_13(f_MaterialLink23, f_MaterialLink23.span_0) , $setTextColor(f_MaterialLink23.colorsMixin, 'white') , $setAttribute(f_MaterialLink23.element, 'href', '#tab22') , f_MaterialLink23)) , $setWaves(f_MaterialTabItem22, YELLOW) , $setGrid(f_MaterialTabItem22.gridMixin, 's4') , f_MaterialTabItem22)) , $add_19(tab2, (f_MaterialTabItem24 = new MaterialTabItem , $add_13(f_MaterialTabItem24, (f_MaterialLink25 = new MaterialLink , f_MaterialLink25.span_0.setText('Tab 3') , f_MaterialLink25.span_0.attached || $add_13(f_MaterialLink25, f_MaterialLink25.span_0) , $setTextColor(f_MaterialLink25.colorsMixin, 'white') , $setAttribute(f_MaterialLink25.element, 'href', '#tab23') , f_MaterialLink25)) , $setWaves(f_MaterialTabItem24, YELLOW) , $setGrid(f_MaterialTabItem24.gridMixin, 's4') , f_MaterialTabItem24)) , tab2.indicatorColor = 'yellow' , $applyIndicatorColor(tab2.element, 'yellow') , $setBackgroundColor(tab2.colorsMixin, 'blue') , $setWaves(tab2, YELLOW) , this$static.owner.tab2 = tab2 , tab2)) , $setGrid(f_MaterialColumn19.gridMixin, 's12') , f_MaterialColumn19)) , $add_13(f_MaterialRow18, (f_MaterialColumn26 = new MaterialColumn , $add_13(f_MaterialColumn26, (f_MaterialLabel27 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel27.directionalTextHelper, 'Tab 1 Content') , f_MaterialLabel27)) , $setId_0(f_MaterialColumn26.idMixin, 'tab21') , $setGrid(f_MaterialColumn26.gridMixin, 's12') , f_MaterialColumn26)) , $add_13(f_MaterialRow18, (f_MaterialColumn28 = new MaterialColumn , $add_13(f_MaterialColumn28, (f_MaterialLabel29 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel29.directionalTextHelper, 'Tab 2 Content') , f_MaterialLabel29)) , $setId_0(f_MaterialColumn28.idMixin, 'tab22') , $setGrid(f_MaterialColumn28.gridMixin, 's12') , f_MaterialColumn28)) , $add_13(f_MaterialRow18, (f_MaterialColumn30 = new MaterialColumn , $add_13(f_MaterialColumn30, (f_MaterialLabel31 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel31.directionalTextHelper, 'Tab 3 Content') , f_MaterialLabel31)) , $setId_0(f_MaterialColumn30.idMixin, 'tab23') , $setGrid(f_MaterialColumn30.gridMixin, 's12') , f_MaterialColumn30)) , f_MaterialRow18), $get_0(this$static.domId3Element));\n  return f_HTMLPanel1;\n}\n\nfunction TabsView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n}\n\ndefineClass(853, 1, {}, TabsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsView_BinderImpl/Widgets', 853);\nfunction $html1_16(arg0, arg1, arg2, arg3){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <pre>\\n      <span class='tag'>&lt;m:MaterialTabs<\\/span> <span class='attr'>color<\\/span>=\\\"blue\\\" <span class='attr'>textColor<\\/span>=\\\"white\\\" <span class='attr'>indicatorColor<\\/span>=\\\"yellow\\\" <span class='attr'>waves<\\/span>=\\\"yellow\\\" <span class='tag'>&gt;<\\/span>\\n      <span class='tag'>&lt;m:tab&gt;&lt;g:Label<\\/span> <span class='attr'>text<\\/span>=\\\"sample\\\" <span class='tag'>/&gt;&lt;/m:tab&gt;<\\/span>\\n      <span class='tag'>&lt;m:tab&gt;&lt;g:Label<\\/span> <span class='attr'>text<\\/span>=\\\"sample\\\" <span class='tag'>/&gt;&lt;/m:tab&gt;<\\/span>\\n      <span class='tag'>&lt;m:tab&gt;&lt;g:Label<\\/span> <span class='attr'>text<\\/span>=\\\"sample\\\" <span class='tag'>/&gt;&lt;/m:tab&gt;<\\/span>\\n      <span class='tag'>&lt;m:content&gt;<\\/span>\\n      <span class='tag'>&lt;m:MaterialTopNav<\\/span> <span class='attr'>padding<\\/span>=\\\"5\\\" <span class='attr'>resource<\\/span>=\\\"{res.bg_top_nav}\\\" <span class='attr'>title<\\/span>=\\\"Sample 1\\\" <span class='attr'>description<\\/span>=\\\"This is sample 1\\\" <span class='attr'>color<\\/span>=\\\"blue\\\" <span class='attr'>textColor<\\/span>=\\\"white\\\" <span class='tag'>/&gt;<\\/span>\\n      <span class='tag'>&lt;/m:content&gt;<\\/span>\\n      <span class='tag'>&lt;m:content&gt;<\\/span>\\n      <span class='tag'>&lt;m:MaterialTopNav<\\/span> <span class='attr'>padding<\\/span>=\\\"5\\\" <span class='attr'>resource<\\/span>=\\\"{res.bg_top_nav}\\\" <span class='attr'>title<\\/span>=\\\"Sample 2\\\" <span class='attr'>description<\\/span>=\\\"This is sample 2\\\" <span class='attr'>color<\\/span>=\\\"blue\\\" <span class='attr'>textColor<\\/span>=\\\"white\\\" <span class='tag'>/&gt;<\\/span>\\n      <span class='tag'>&lt;/m:content&gt;<\\/span>\\n      <span class='tag'>&lt;m:content&gt;<\\/span>\\n      <span class='tag'>&lt;m:MaterialTopNav<\\/span> <span class='attr'>padding<\\/span>=\\\"5\\\" <span class='attr'>resource<\\/span>=\\\"{res.bg_top_nav}\\\" <span class='attr'>title<\\/span>=\\\"Sample 3\\\" <span class='attr'>description<\\/span>=\\\"This is sample 3\\\"  <span class='attr'>color<\\/span>=\\\"blue\\\" <span class='attr'>textColor<\\/span>=\\\"white\\\" <span class='tag'>/&gt;<\\/span>\\n      <span class='tag'>&lt;/m:content&gt;<\\/span>\\n      <span class='tag'>&lt;/m:MaterialTabs&gt;<\\/span>\\n    <\\/pre> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <pre>\\n      @UiField MaterialTabs tab;\\n\\n      public MaterialTabsPanel() {\\n        initWidget(uiBinder.createAndBindUi(this));\\n        tab.setTabIndex(1);\\n      }\\n    <\\/pre>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$) {\n    result = new TabsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$) {\n    result = new TabsView(new TabsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$;\n}\n\ndefineClass(472, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_15(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction ClassCastException_0(){\n  RuntimeException_0.call(this, 'MaterialTabItem must be within a MaterialTab widget.');\n}\n\ndefineClass(119, 36, $intern_57, ClassCastException_0);\n$entry(onLoad_0)(16);\n\n//# sourceURL=gwtmaterialdemo-16.js\n")
