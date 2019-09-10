(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ECMAScript = Package.ecmascript.ECMAScript;
var Random = Package.random.Random;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var check = Package.check.check;
var Match = Package.check.Match;
var DDPRateLimiter = Package['ddp-rate-limiter'].DDPRateLimiter;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var JsonRoutes = Package['simple:json-routes'].JsonRoutes;
var RestMiddleware = Package['simple:json-routes'].RestMiddleware;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var Tabular = Package['aldeed:tabular'].Tabular;
var Template = Package['meteorhacks:ssr'].Template;
var SSR = Package['meteorhacks:ssr'].SSR;
var ServerSession = Package['steedos:base'].ServerSession;
var Selector = Package['steedos:base'].Selector;
var Steedos = Package['steedos:base'].Steedos;
var AjaxCollection = Package['steedos:base'].AjaxCollection;
var SteedosDataManager = Package['steedos:base'].SteedosDataManager;
var SteedosOffice = Package['steedos:base'].SteedosOffice;
var billingManager = Package['steedos:base'].billingManager;
var WebhookQueue = Package['steedos:webhookqueue'].WebhookQueue;
var _i18n = Package['universe:i18n']._i18n;
var i18n = Package['universe:i18n'].i18n;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var HTML = Package.htmljs.HTML;
var Collection2 = Package['aldeed:collection2-core'].Collection2;
var FS = Package['steedos:cfs-base-package'].FS;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var __coffeescriptShare, WorkflowManager, flow, havePermissionUsers, spaceUser, organizations, uuflowManager, pushManager, steedosExport, steedosImport;

var require = meteorInstall({"node_modules":{"meteor":{"steedos:app-workflow":{"i18n":{"en.i18n.json.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/i18n/en.i18n.json.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Package['universe:i18n'].i18n.addTranslations('en','',{"categories_in_use":"Category is in use and cannot be deleted","process_delegation_rules_start_must_lt_end":"Strat time must less than end time","process_delegation_rules_only_one":"You already set process delegation rule","distribute_edit_flow_select_users":"users options","distribute_edit_flow_select_flows":"flows options","flow_list_title_set_distribute":"Set Distribute","distribute_to_self":"can distribute to self","distribute_end_notification":"notificate user after distributed end","instance_approve_modal_modificationsave":"saved"});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"zh-CN.i18n.json.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/i18n/zh-CN.i18n.json.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Package['universe:i18n'].i18n.addTranslations('zh-CN','',{"categories_in_use":"分类在使用中，不能删除","process_delegation_rules_start_must_lt_end":"开始时间应小于结束时间","process_delegation_rules_only_one":"您已设置委托规则，修改即可","distribute_edit_flow_select_users":"流程被分发时分发对象选择范围","distribute_edit_flow_select_flows":"搜索此步骤可分发流程","flow_list_title_set_distribute":"设置分发","distribute_to_self":"分发时可分发给自己","distribute_end_notification":"分发结束后提醒发起人","instance_approve_modal_modificationsave":"您的修改保存成功"});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkNpm.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/checkNpm.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let checkNpmVersions;
module.link("meteor/tmeasday:check-npm-versions", {
  checkNpmVersions(v) {
    checkNpmVersions = v;
  }

}, 0);
checkNpmVersions({
  cookies: "^0.6.2",
  mkdirp: "^0.3.5"
}, 'steedos:app-workflow');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"core.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/core.coffee                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.WorkflowCore = {};

if (Meteor.isClient) {
  WorkflowCore.openFlowDesign = function (locale, space, flow, companyId) {
    var url;
    url = "/applications/designer/current/?locale=" + locale + "&space=" + space;

    if (flow) {
      url = url + ("&flow=" + flow);
    }

    if (companyId && !Creator.isSpaceAdmin(space, Meteor.userId())) {
      url = url + ("&companyId=" + companyId);
    }

    return Steedos.openWindow(Steedos.absoluteUrl(url));
  };

  WorkflowCore.openFormDesign = function (locale, space, form, companyId) {
    return Modal.show('formDesign', {
      formId: form
    }, {
      keyboard: false,
      backdrop: "static"
    });
  };

  Meteor.startup(function () {
    return $(document).keydown(function (e) {
      if (e.keyCode === "13" || e.key === "Enter") {
        if ($(".flow-modal").length !== 1) {
          return;
        }

        if (e.target.tagName !== "TEXTAREA" || $(e.target).closest("div").hasClass("bootstrap-tagsinput")) {
          if ($(".flow-modal").length === 1) {
            return $(".flow-modal .btn-confirm").click();
          }
        }
      }
    });
  });
}

if (Meteor.isServer) {
  WorkflowCore.checkCreatePermissions = function (spaceId, uid, company_id) {
    if (company_id) {
      if (db.organizations.find({
        _id: company_id,
        space: spaceId
      }).count() === 0) {
        return false;
      }
    }

    return true;
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server":{"methods":{"flow_copy.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/server/methods/flow_copy.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  flow_copy: function (spaceId, flowId, options) {
    if (!this.userId) {
      return;
    }

    if (!WorkflowCore.checkCreatePermissions(spaceId, this.userId, options != null ? options.company_id : void 0)) {
      throw Meteor.Error("No permission");
    }

    return db.flows.copy(this.userId, spaceId, flowId, options, false);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"distribute.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/server/methods/distribute.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  get_distribute_flows: function (options) {
    var flows, opts, pinyin, query, searchText, spaceId, uid, values;

    if (!options.params) {
      return [];
    }

    this.unblock;
    uid = this.userId;
    searchText = options.searchText;
    values = options.values;
    spaceId = JSON.parse(options.params).spaceId;
    opts = new Array();
    flows = new Array();

    if (searchText) {
      pinyin = /^[a-zA-Z\']*$/.test(searchText);

      if (pinyin && searchText.length > 8 || !pinyin && searchText.length > 1) {
        query = {
          space: spaceId,
          state: 'enabled',
          name: {
            $regex: searchText
          }
        };
        flows = db.flows.find(query, {
          limit: 10,
          fields: {
            name: 1,
            space: 1
          }
        }).fetch();
      }
    } else if (values.length) {
      flows = db.flows.find({
        _id: {
          $in: values
        }
      }, {
        fields: {
          name: 1,
          space: 1
        }
      }).fetch();
    }

    flows.forEach(function (f) {
      var space;
      space = db.spaces.findOne({
        _id: f.space
      }, {
        fields: {
          name: 1
        }
      });
      return opts.push({
        label: "[" + space.name + "]" + f.name,
        value: f._id
      });
    });
    return opts;
  },
  update_distribute_settings: function (flow_id, distribute_optional_users_id, step_flows, distribute_to_self, distribute_end_notification) {
    var distribute_optional_users, flow, setObj;
    check(flow_id, String);
    check(distribute_optional_users_id, Array);
    check(step_flows, Array);
    check(distribute_to_self, Boolean);
    check(distribute_end_notification, Boolean);
    flow = db.flows.findOne(flow_id);

    if (!flow) {
      throw new Meteor.Error('error', 'flow not found!');
    }

    setObj = new Object();

    _.each(flow.current.steps, function (s) {
      if (s.allowDistribute === true) {
        return _.each(step_flows, function (sf) {
          if (sf._id === s._id) {
            return s.distribute_optional_flows = sf.distribute_optional_flows;
          }
        });
      }
    });

    distribute_optional_users = new Array();
    db.users.find({
      _id: {
        $in: distribute_optional_users_id
      }
    }, {
      fields: {
        name: 1
      }
    }).forEach(function (u) {
      return distribute_optional_users.push({
        id: u._id,
        name: u.name
      });
    });
    setObj.distribute_optional_users = distribute_optional_users;

    if (!_.isEmpty(step_flows)) {
      setObj['current.steps'] = flow.current.steps;
    }

    setObj['distribute_to_self'] = distribute_to_self;
    setObj['distribute_end_notification'] = distribute_end_notification;
    db.flows.update({
      _id: flow_id
    }, {
      $set: setObj
    });
    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"workflow_manager.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/server/lib/workflow_manager.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
WorkflowManager = {};

WorkflowManager.getPositionsFilterByUsers = function (spaceId, orgId, roleId) {
  if (!spaceId || !orgId || !roleId) return [];
  return db.flow_positions.find({
    space: spaceId,
    role: roleId,
    org: orgId
  }, {
    fields: {
      users: 1
    }
  }).fetch();
};

WorkflowManager.uniqUsers = function (users) {
  if (_.isEmpty(users)) return [];
  var users_str = [],
      users_obj = [];

  _.each(users, function (u) {
    users_str.push(JSON.stringify(u));
  });

  users_str = _.uniq(users_str);

  _.each(users_str, function (us) {
    users_obj.push(JSON.parse(us));
  });

  return users_obj;
};
/*
 返回指定部门下的角色成员,如果指定部门没有找到对应的角色，则会继续找部门的上级部门直到找到为止。
 return [{spaceUser}]
 */


WorkflowManager.getRoleUsersbyOrgAndRole = function (spaceId, orgId, roleId) {
  var roleUsers = new Array();
  var orgPositions = WorkflowManager.getPositionsFilterByUsers(spaceId, orgId, roleId);
  orgPositions.forEach(function (orgPosition) {
    var roleUserIds = orgPosition.users;
    roleUsers = roleUsers.concat(WorkflowManager.getUsers(spaceId, roleUserIds, true));
  });

  if (orgPositions.length == 0) {
    var organization = WorkflowManager.getOrganization(orgId);
    if (organization && organization.parent != '') roleUsers = roleUsers.concat(WorkflowManager.getRoleUsersbyOrgAndRole(spaceId, organization.parent, roleId));
  }

  return roleUsers;
};

WorkflowManager.getRoleUsersByOrgAndRoles = function (spaceId, orgId, roleIds) {
  var roleUsers = new Array();
  roleIds.forEach(function (roleId) {
    roleUsers = roleUsers.concat(WorkflowManager.getRoleUsersbyOrgAndRole(spaceId, orgId, roleId));
  });
  return roleUsers;
};

WorkflowManager.getRoleUsersByOrgsAndRoles = function (spaceId, orgIds, roleIds) {
  var roleUsers = new Array();
  if (!orgIds || !roleIds) return roleUsers;
  orgIds.forEach(function (orgId) {
    roleUsers = roleUsers.concat(WorkflowManager.getRoleUsersByOrgAndRoles(spaceId, orgId, roleIds));
  });
  return roleUsers;
};
/*
 返回用户所在部门下的角色成员.
 return [{spaceUser}]
 */


WorkflowManager.getRoleUsersByUsersAndRoles = function (spaceId, userIds, roleIds) {
  var roleUsers = new Array();
  if (!userIds || !roleIds) return roleUsers;
  var users = WorkflowManager.getUsers(spaceId, userIds, true);
  users.forEach(function (user) {
    roleUsers = roleUsers.concat(WorkflowManager.getRoleUsersByOrgsAndRoles(spaceId, user.organizations, roleIds));
  });
  return roleUsers;
};

WorkflowManager.getSpaceRoles = function (spaceId) {
  if (!spaceId) {
    return;
  }

  return db.flow_roles.find({
    space: spaceId
  }).fetch();
};

WorkflowManager.getRole = function (spaceId, roleId) {
  if (!roleId || !spaceId) {
    return;
  }

  return db.flow_roles.findOne({
    _id: roleId,
    space: spaceId
  });
};

WorkflowManager.getSpacePositions = function (spaceId) {
  return db.flow_positions.find({
    space: spaceId
  }).fetch();
}; //获取用户岗位


WorkflowManager.getUserRoles = function (spaceId, orgId, userId) {
  var userRoles = new Array(); // var spacePositions = WorkflowManager.getSpacePositions(spaceId);
  //orgRoles = spacePositions.filterProperty("org", orgId); ？？？
  // var userPositions = spacePositions.filterProperty("users", userId);

  var userPositions = db.flow_positions.find({
    space: spaceId,
    users: userId
  }, {
    fields: {
      role: 1
    }
  });
  userPositions.forEach(function (userPosition) {
    userRoles.push(WorkflowManager.getRole(spaceId, userPosition.role));
  });
  return userRoles;
};

WorkflowManager.getOrganizationsUsers = function (spaceId, orgs) {
  var orgUsers = new Array();
  orgs.forEach(function (org) {
    orgUsers = orgUsers.concat(WorkflowManager.getUsers(spaceId, org.users, true));
  });
  return orgUsers;
}; //获取space下的所有部门


WorkflowManager.getSpaceOrganizations = function (spaceId) {
  return db.organizations.find({
    space: spaceId
  }).fetch();
};

WorkflowManager.getOrganizationChildrens = function (spaceId, orgId) {
  return db.organizations.find({
    space: spaceId,
    parents: orgId
  }).fetch();
};

WorkflowManager.getOrganizationsChildrens = function (spaceId, orgIds) {
  var chidrenOrgs = new Array();
  orgIds.forEach(function (orgId) {
    chidrenOrgs = chidrenOrgs.concat(WorkflowManager.getOrganizationChildrens(spaceId, orgId));
  });
  return chidrenOrgs;
};

WorkflowManager.getOrganization = function (orgId) {
  if (!orgId) {
    return;
  }

  return db.organizations.findOne(orgId, {
    fields: {
      created: 0,
      created_by: 0,
      modified: 0,
      modified_by: 0
    }
  });
};

WorkflowManager.getOrganizations = function (orgIds) {
  if (!orgIds) {
    return [];
  }

  if ("string" == typeof orgIds) {
    return [WorkflowManager.getOrganization(orgIds)];
  }

  return db.organizations.find({
    _id: {
      $in: orgIds
    }
  }, {
    fields: {
      created: 0,
      created_by: 0,
      modified: 0,
      modified_by: 0
    }
  }).fetch();
};

WorkflowManager.getUser = function (spaceId, userId, notNeedDetails) {
  if (!userId || !spaceId) {
    return;
  }

  if (typeof userId != "string") {
    return WorkflowManager.getUsers(spaceId, userId);
  }

  var spaceUser = db.space_users.findOne({
    space: spaceId,
    user: userId
  }, {
    fields: {
      created: 0,
      created_by: 0,
      modified: 0,
      modified_by: 0
    }
  });

  if (!spaceUser) {
    return;
  }

  if (notNeedDetails == true) {
    spaceUser.id = spaceUser.user;
  } else {
    spaceUser.id = spaceUser.user;
    spaceUser.organization = WorkflowManager.getOrganization(spaceUser.organization);

    if (!spaceUser.organization) {
      return;
    }

    spaceUser.roles = WorkflowManager.getUserRoles(spaceId, spaceUser.organization.id, spaceUser.id);
  }

  return spaceUser;
};

WorkflowManager.getUsers = function (spaceId, userIds, notNeedDetails) {
  if ("string" == typeof userIds) {
    return [WorkflowManager.getUser(spaceId, userIds, notNeedDetails)];
  }

  var users = new Array();

  if (userIds && spaceId) {
    var spaceUsers = db.space_users.find({
      space: spaceId,
      user: {
        $in: userIds
      }
    }, {
      fields: {
        created: 0,
        created_by: 0,
        modified: 0,
        modified_by: 0
      }
    });

    if (notNeedDetails == true) {
      spaceUsers.forEach(function (spaceUser) {
        spaceUser.id = spaceUser.user;
        users.push(spaceUser);
      });
    } else {
      spaceUsers.forEach(function (spaceUser) {
        spaceUser.id = spaceUser.user;
        spaceUser.organization = WorkflowManager.getOrganization(spaceUser.organization);
        spaceUser.organizations = WorkflowManager.getOrganizations(spaceUser.organizations);

        if (spaceUser.organization) {
          spaceUser.roles = WorkflowManager.getUserRoles(spaceId, spaceUser.organization.id, spaceUser.id);
          users.push(spaceUser);
        }
      });
    }
  }

  return users;
};

WorkflowManager.getFormulaUsers = function (spaceId, userIds) {
  var spaceUsers = [];
  var users = WorkflowManager.getUsers(spaceId, userIds);
  users.forEach(function (user) {
    var userObject = {};
    userObject['id'] = user.id;
    userObject['name'] = user.name;
    userObject['organization'] = {
      'id': user.organization._id,
      'name': user.organization.name,
      'fullname': user.organization.fullname
    };
    userObject["organizations"] = {
      'id': user.organizations.getProperty("_id"),
      'name': user.organizations.getProperty("name"),
      'fullname': user.organizations.getProperty("fullname")
    };
    userObject.hr = {};

    if (user.hr) {
      userObject.hr = user.hr;
    }

    userObject.sort_no = user.sort_no;
    userObject.mobile = user.mobile;
    userObject.work_phone = user.work_phone;
    userObject.position = user.position;
    userObject["roles"] = user.roles ? user.roles.getProperty('name') : [];
    spaceUsers.push(userObject);
  });
  return spaceUsers;
};

WorkflowManager.getFormulaUserObjects = function (spaceId, userIds) {
  if (!userIds) return {
    organization: {},
    hr: {}
  };
  return WorkflowManager.getFormulaUserObject(spaceId, userIds);
};

WorkflowManager.getFormulaUserObject = function (spaceId, userId) {
  if (!userId) return {
    organization: {},
    hr: {}
  };

  if (userId instanceof Array) {
    return WorkflowManager.getFormulaUsers(spaceId, userId);
  } else {
    return WorkflowManager.getFormulaUsers(spaceId, [userId])[0];
  }
};

WorkflowManager.getFormulaOrgObjects = function (orgIds) {
  if (!orgIds) return;
  return WorkflowManager.getFormulaOrgObject(orgIds);
};

WorkflowManager.getFormulaOrgObject = function (orgId) {
  if (orgId instanceof Array) {
    var orgArray = new Array();
    var orgs = WorkflowManager.getOrganizations(orgId);
    orgs.forEach(function (org) {
      var orgObject = {};
      orgObject['id'] = org._id;
      orgObject['name'] = org.name;
      orgObject['fullname'] = org.fullname;
      orgArray.push(orgObject);
    });
    return orgArray;
  } else {
    var orgObject = {};
    var org = WorkflowManager.getOrganization(orgId);
    if (!org) return null;
    orgObject['id'] = orgId;
    orgObject['name'] = org.name;
    orgObject['fullname'] = org.fullname;
    return orgObject;
  }
};

WorkflowManager.getInstanceFormVersion = function () {
  var instance = Template.instance().view.template.steedosData.instance;
  var form, form_fields, form_version;
  form = db.forms.findOne(instance.form);
  form_version = {};
  form_fields = [];

  if (form.current._id === instance.form_version) {
    form_version = form.current;
  } else {
    form_version = _.where(form.historys, {
      _id: instance.form_version
    })[0];
  }

  form_version.fields.forEach(function (field) {
    if (field.type === 'section') {
      form_fields.push(field);

      if (field.fields) {
        return field.fields.forEach(function (f) {
          return form_fields.push(f);
        });
      }
    } else if (field.type === 'table') {
      field['sfields'] = field['fields'];
      delete field['fields'];
      return form_fields.push(field);
    } else {
      return form_fields.push(field);
    }
  });
  form_version.fields = form_fields;
  return form_version;
};

WorkflowManager.getFormVersion = function (id, versionId) {
  var form = db.forms.findOne({
    _id: id
  });
  var form_version = form.current;

  if (form_version._id != versionId) {
    form_version = form.historys.findPropertyByPK("_id", versionId);
  }

  var form_fields = [];
  form_version.fields.forEach(function (field) {
    if (field.type == 'section') {
      form_fields.push(field);

      if (field.fields) {
        field.fields.forEach(function (f) {
          form_fields.push(f);
        });
      }
    } else {
      form_fields.push(field);
    }
  });
  form_version.fields = form_fields;
  return form_version;
};

WorkflowManager.getInstanceFlowVersion = function (instance) {
  if (!instance) {
    instance = Template.instance().view.template.steedosData.instance;
  }

  var flow, flow_version;
  flow = db.flows.findOne(instance.flow);
  flow_version = {};

  if (flow.current._id === instance.flow_version) {
    flow_version = flow.current;
  } else {
    flow_version = _.where(flow.historys, {
      _id: instance.flow_version
    })[0];
  }

  return flow_version;
};

WorkflowManager.getInstanceStep = function (stepId) {
  flow = WorkflowManager.getInstanceFlowVersion();
  if (!flow) return null;
  var g_step;
  flow.steps.forEach(function (step) {
    if (step._id == stepId) {
      g_step = step;
      g_step.id = step._id;
      return;
    }
  });
  return g_step;
};

WorkflowManager.canAdmin = function (fl, curSpaceUser, organizations) {
  var perms = fl.perms;
  var hasAdminRight = false;

  if (perms) {
    if (perms.users_can_admin && perms.users_can_admin.includes(curSpaceUser.user)) {
      hasAdminRight = true;
    } else if (perms.orgs_can_admin && perms.orgs_can_admin.length > 0) {
      if (curSpaceUser && curSpaceUser.organizations && _.intersection(curSpaceUser.organizations, perms.orgs_can_admin).length > 0) {
        hasAdminRight = true;
      } else {
        if (organizations) {
          hasAdminRight = _.some(organizations, function (org) {
            return org.parents && _.intersection(org.parents, perms.orgs_can_admin).length > 0;
          });
        }
      }
    }
  }

  return hasAdminRight;
};

WorkflowManager.canMonitor = function (fl, curSpaceUser, organizations) {
  var perms = fl.perms;
  var hasMonitorRight = false;

  if (perms) {
    if (perms.users_can_monitor && perms.users_can_monitor.includes(curSpaceUser.user)) {
      hasMonitorRight = true;
    } else if (perms.orgs_can_monitor && perms.orgs_can_monitor.length > 0) {
      if (curSpaceUser && curSpaceUser.organizations && _.intersection(curSpaceUser.organizations, perms.orgs_can_monitor).length > 0) {
        hasMonitorRight = true;
      } else {
        if (organizations) {
          hasMonitorRight = _.some(organizations, function (org) {
            return org.parents && _.intersection(org.parents, perms.orgs_can_monitor).length > 0;
          });
        }
      }
    }
  }

  return hasMonitorRight;
}; //校验user是否对instance有查看权限：
// 1 工作区管理员则返回true
// 2 用户在submitter、applicant、outbox_users、inbox_users、cc_users、created_by、modified_by 中：return true;
// 3 用户是流程管理员，监控员：return true;
// 4 否则：return false;


WorkflowManager.hasInstancePermissions = function (user, instance) {
  if (user && instance) {
    var space = db.spaces.findOne({
      _id: instance.space
    }, {
      fields: {
        admins: 1
      }
    });

    if (space && space.admins && space.admins.includes(user._id)) {
      return true;
    }
  }

  var approvedUsers = _.union(instance.outbox_users, instance.inbox_users, instance.cc_users, [instance.submitter], [instance.applicant], [instance.created_by], [instance.modified_by]);

  if (approvedUsers.includes(user._id)) {
    return true;
  } //被那些instance关联


  var originalInstances = db.instances.find({
    related_instances: {
      $all: [instance._id]
    }
  }, {
    fields: {
      outbox_users: 1,
      inbox_users: 1,
      cc_users: 1,
      submitter: 1,
      applicant: 1
    }
  });
  console.log("originalInstances size is " + originalInstances.count());

  if (originalInstances.count() > 0) {
    var hasPermission = false;

    _.some(originalInstances.fetch(), function (ins) {
      console.log(ins);
      havePermissionUsers = _.union(ins.outbox_users, ins.inbox_users, ins.cc_users, [ins.submitter], [ins.applicant]);
      console.log(havePermissionUsers);

      if (havePermissionUsers.includes(user._id)) {
        hasPermission = true;
        return true;
      }
    });

    if (hasPermission) {
      return true;
    }
  }

  spaceUser = db.space_users.findOne({
    space: instance.space,
    user: user._id
  });

  if (spaceUser) {
    organizations = db.organizations.find({
      _id: {
        $in: spaceUser.organizations
      }
    }).fetch();
    flow = db.flows.findOne({
      _id: instance.flow
    });

    if (flow) {
      return WorkflowManager.canMonitor(flow, spaceUser, organizations) || WorkflowManager.canAdmin(flow, spaceUser, organizations);
    }

    return false;
  }

  return false;
};

WorkflowManager.getNameForUser = function (userId) {
  check(userId, String);
  return db.users.findOne({
    _id: userId
  }, {
    fields: {
      name: 1
    }
  });
}; // 工作区管理员和流程管理员拥有流程的管理权限


WorkflowManager.hasFlowAdminPermission = function (flow_id, space_id, user_id) {
  var space = db.spaces.findOne({
    _id: space_id
  }, {
    fields: {
      admins: 1
    }
  });
  if (!space) return false;
  if (space.admins && space.admins.includes(user_id)) return true;
  var hasPermission = false;
  var space_user = db.space_users.findOne({
    space: space_id,
    user: user_id
  }, {
    fields: {
      organizations: 1,
      user: 1
    }
  });

  if (space_user) {
    var organizations = db.organizations.find({
      _id: {
        $in: space_user.organizations
      }
    }, {
      fields: {
        parents: 1
      }
    }).fetch();
    var fl = db.flows.findOne({
      _id: flow_id
    }, {
      fields: {
        perms: 1
      }
    });

    if (fl && organizations) {
      hasPermission = WorkflowManager.canAdmin(fl, space_user, organizations);
    }
  }

  return hasPermission;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"uuflow_manager.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/server/lib/uuflow_manager.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Cookies;
Cookies = require("cookies");
uuflowManager = {};

uuflowManager.check_authorization = function (req, res) {
  var authToken, cookies, hashedToken, query, user, userId;
  query = req.query;
  userId = query["X-User-Id"];
  authToken = query["X-Auth-Token"];

  if (!userId || !authToken) {
    cookies = new Cookies(req, res);
    userId = cookies.get("X-User-Id");
    authToken = cookies.get("X-Auth-Token");
  }

  if (!userId || !authToken) {
    throw new Meteor.Error(401, 'Unauthorized');
  }

  hashedToken = Accounts._hashLoginToken(authToken);
  user = Meteor.users.findOne({
    _id: userId,
    "services.resume.loginTokens.hashedToken": hashedToken
  });

  if (!user) {
    throw new Meteor.Error(401, 'Unauthorized');
  }

  return user;
};

uuflowManager.getInstance = function (instance_id) {
  var ins;
  ins = db.instances.findOne(instance_id);

  if (!ins) {
    throw new Meteor.Error('error!', "申请单ID：" + instance_id + "有误或此申请单已经被删除");
  }

  return ins;
};

uuflowManager.getSpace = function (space_id) {
  var space;
  space = db.spaces.findOne(space_id);

  if (!space) {
    throw new Meteor.Error('error!', "space_id有误或此space已经被删除");
  }

  return space;
};

uuflowManager.getSpaceUser = function (space_id, user_id) {
  var space_user;
  space_user = db.space_users.findOne({
    space: space_id,
    user: user_id
  });

  if (!space_user) {
    throw new Meteor.Error('error!', "user_id对应的用户不属于当前space");
  }

  return space_user;
};

uuflowManager.getFlow = function (flow_id) {
  var flow;
  flow = db.flows.findOne(flow_id);

  if (!flow) {
    throw new Meteor.Error('error!', "id有误或此流程已经被删除");
  }

  return flow;
};

uuflowManager.getSpaceUserOrgInfo = function (space_user) {
  var info, org;
  info = new Object();
  info.organization = space_user.organization;
  org = db.organizations.findOne(space_user.organization, {
    fields: {
      name: 1,
      fullname: 1
    }
  });
  info.organization_name = org.name;
  info.organization_fullname = org.fullname;
  return info;
};

uuflowManager.getTrace = function (instance, trace_id) {
  var trace;
  trace = _.find(instance.traces, function (t) {
    return t._id === trace_id;
  });

  if (!trace) {
    throw new Meteor.Error('error!', "trace_id有误");
  }

  return trace;
};

uuflowManager.getApprove = function (trace, approve_id) {
  var approve;
  approve = _.find(trace.approves, function (t) {
    return t._id === approve_id;
  });

  if (!approve) {
    throw new Meteor.Error('error!', "trace_id有误");
  }

  return approve;
};

uuflowManager.isTraceNotFinished = function (trace) {
  if (trace.is_finished !== false) {
    throw new Meteor.Error('error!', "可能已有人对此文件做了处理。请点击已审核，查看文件的最新状态");
  }
};

uuflowManager.isApproveNotFinished = function (approve) {
  if (approve.is_finished !== false) {
    throw new Meteor.Error('error!', "当前步骤不为未完成状态,不能进行此操作");
  }
};

uuflowManager.isInstancePending = function (instance, lang) {
  if (lang == null) {
    lang = "zh-CN";
  }

  if (instance.state !== "pending") {
    throw new Meteor.Error('error!', TAPi18n.__('instance.remindMessage.update_failed', {}, lang));
  }
};

uuflowManager.isHandlerOrAgent = function (approve, user_id) {
  if (approve.user !== user_id && approve.agent !== user_id) {
    throw new Meteor.Error('error!', "不是当前步骤对应的处理人或其代理人，不能进行此操作");
  }
};

uuflowManager.isInstanceDraft = function (instance, lang) {
  if (lang == null) {
    lang = "zh-CN";
  }

  if (instance.state !== "draft") {
    throw new Meteor.Error('error!', TAPi18n.__('instance.remindMessage.update_failed', {}, lang));
  }
};

uuflowManager.isInstanceSubmitter = function (instance, current_user_id) {
  if (instance.submitter !== current_user_id) {
    throw new Meteor.Error('error!', '当前用户不是申请单对应的提交人,不能进行此操作');
  }
};

uuflowManager.isInstanceSubmitterOrApplicantOrSpaceAdmin = function (instance, current_user_id, space) {
  if (instance.submitter !== current_user_id && instance.applicant !== current_user_id && !space.admins.includes(current_user_id)) {
    throw new Meteor.Error('error!', "当前用户不是申请单对应的提交人或申请人或工作区管理员");
  }
};

uuflowManager.getStep = function (instance, flow, step_id) {
  var flow_rev, isExistStep;
  flow_rev = instance.flow_version;
  isExistStep = null;

  if (flow.current._id === flow_rev) {
    isExistStep = _.find(flow.current.steps, function (step) {
      return step._id === step_id;
    });
  } else {
    _.each(flow.historys, function (history) {
      if (history._id === flow_rev) {
        return isExistStep = _.find(history.steps, function (step) {
          return step._id === step_id;
        });
      }
    });
  }

  if (!isExistStep) {
    throw new Meteor.Error('error!', "不能获取step");
  }

  return isExistStep;
};

uuflowManager.isJudgeLegal = function (judge) {
  if (judge !== "approved" && judge !== "rejected" && judge !== "readed" && judge !== "submitted") {
    throw new Meteor.Error('error!', "judge有误");
  }
};

uuflowManager.isSpaceAdmin = function (space_id, user_id) {
  var space;
  space = db.spaces.findOne({
    _id: space_id
  }, {
    fields: {
      admins: 1
    }
  });

  if (!space.admins.includes(user_id)) {
    throw new Meteor.Error('error!', "当前用户不是工作区管理员,不能进行此操作");
  }
};

uuflowManager.getUser = function (user_id) {
  var user;
  user = db.users.findOne(user_id);

  if (!user) {
    throw new Meteor.Error('error!', "用户ID有误或此用户已经被删除");
  }

  return user;
};

uuflowManager.getUserOrganization = function (user_id, space_id) {
  var org;
  org = db.organizations.findOne({
    space: space_id,
    users: user_id
  });
  return org;
};

uuflowManager.getUserRoles = function (user_id, space_id) {
  var positions, role_names;
  role_names = new Array();
  positions = db.flow_positions.find({
    space: space_id,
    users: user_id
  }, {
    fields: {
      role: 1
    }
  }).fetch();

  _.each(positions, function (position) {
    var role;
    role = db.flow_roles.findOne({
      _id: position.role
    }, {
      fields: {
        name: 1
      }
    });

    if (role) {
      return role_names.push(role.name);
    }
  });

  return role_names;
};

uuflowManager.isFlowEnabled = function (flow) {
  if (flow.state !== "enabled") {
    throw new Meteor.Error('error!', "流程未启用,操作失败");
  }
};

uuflowManager.isFlowSpaceMatched = function (flow, space_id) {
  if (flow.space !== space_id) {
    throw new Meteor.Error('error!', "流程和工作区ID不匹配");
  }
};

uuflowManager.calculateCondition = function (values, condition_str) {
  var __values, average, count, e, max, min, sum;

  try {
    __values = values;

    sum = function (subform_field) {
      var sum_field_value;

      if (!subform_field) {
        throw new Meteor.Error('error!', "参数为空");
      }

      if (!subform_field instanceof Array) {
        throw new Meteor.Error('error!', "参数不是数组类型");
      }

      sum_field_value = 0;

      _.each(subform_field, function (field_value) {
        field_value = Number(String(field_value));
        return sum_field_value += field_value;
      });

      return sum_field_value;
    };

    average = function (subform_field) {
      if (!subform_field) {
        throw new Meteor.Error('error!', "参数为空");
      }

      if (!subform_field instanceof Array) {
        throw new Meteor.Error('error!', "参数不是数组类型");
      }

      return sum(subform_field) / count(subform_field);
    };

    count = function (subform_field) {
      if (!subform_field) {
        throw new Meteor.Error('error!', "参数为空");
      }

      return subform_field.length;
    };

    max = function (subform_field) {
      var sub_field;

      if (!subform_field) {
        throw new Meteor.Error('error!', "参数为空");
      }

      if (!subform_field instanceof Array) {
        throw new Meteor.Error('error!', "参数不是数组类型");
      }

      sub_field = new Array();

      _.each(subform_field, function (field_value) {
        return sub_field.push(Number(String(field_value)));
      });

      return _.max(sub_field);
    };

    min = function (subform_field) {
      var sub_field;

      if (!subform_field) {
        throw new Meteor.Error('error!', "参数为空");
      }

      if (!subform_field instanceof Array) {
        throw new Meteor.Error('error!', "参数不是数组类型");
      }

      sub_field = new Array();

      _.each(subform_field, function (field_value) {
        return sub_field.push(Number(String(field_value)));
      });

      return _.min(sub_field);
    };

    return eval(condition_str);
  } catch (error) {
    e = error;
    console.error(e.stack);
    return false;
  }
};

uuflowManager.setFormFieldVariable = function (fields, __values, space_id) {
  var e;

  try {
    return _.each(fields, function (field) {
      var _subform_values, group_fullname, group_id, group_name, organization, organization_selectuser, role_selectuser, subform_fields_all, user_id, user_name, user_roles;

      if (field.type === "table") {
        subform_fields_all = field.fields;
        _subform_values = new Object();
        return _.each(subform_fields_all, function (current_field) {
          var values_arr;
          values_arr = new Array();

          if (["number", "percentage", "currency"].includes(current_field["type"])) {
            _.each(__values[field.code], function (sub_field) {
              return values_arr.push(sub_field[current_field["code"]]);
            });
          } else if (current_field["type"] === "checkbox") {
            _.each(__values[field.code], function (sub_field) {
              if (sub_field[current_field["code"]] === "true") {
                return values_arr.push(true);
              } else if (sub_field[current_field["code"]] === "false") {
                return values_arr.push(false);
              }
            });
          } else {
            _.each(__values[field.code], function (sub_field) {
              if (sub_field[current_field["code"]]) {
                return values_arr.push(sub_field[current_field["code"]]);
              } else {
                return values_arr.push("");
              }
            });
          }

          return __values[current_field["code"]] = values_arr;
        });
      } else if (field.type === "group") {
        if (field.is_multiselect) {
          if (__values[field.code] && __values[field.code].length > 0) {
            group_id = new Array();
            group_name = new Array();
            group_fullname = new Array();

            _.each(__values[field.code], function (group) {
              group_id.push(group["id"]);
              group_name.push(group["name"]);
              return group_fullname.push(group["fullname"]);
            });

            __values[field.code] = new Object();
            __values[field.code]["id"] = group_id;
            __values[field.code]["name"] = group_name;
            return __values[field.code]["fullname"] = group_fullname;
          }
        }
      } else if (field.type === "user") {
        if (field.is_multiselect) {
          if (__values[field.code] && __values[field.code].length > 0) {
            user_id = new Array();
            user_name = new Array();
            organization = new Object();
            organization["user_organization_fullname"] = new Array();
            organization["user_organization_name"] = new Array();
            user_roles = new Array();

            _.each(__values[field.code], function (select_user) {
              var organization_selectuser, role_selectuser;
              user_id.push(select_user["id"]);
              user_name.push(select_user["name"]);
              organization_selectuser = uuflowManager.getUserOrganization(select_user["id"], space_id);
              role_selectuser = uuflowManager.getUserRoles(select_user["id"], space_id);

              if (organization_selectuser) {
                organization["user_organization_fullname"].push(organization_selectuser.fullname);
                organization["user_organization_name"].push(organization_selectuser.name);
              }

              if (role_selectuser) {
                return user_roles = user_roles || role_selectuser;
              }
            });

            __values[field.code] = new Object();
            __values[field.code]["id"] = user_id;
            __values[field.code]["name"] = user_name;
            __values[field.code]["organization"] = organization;
            return __values[field.code]["roles"] = roles;
          }
        } else {
          if (__values[field.code]) {
            organization_selectuser = uuflowManager.getUserOrganization(__values[field.code]["id"], space_id);
            role_selectuser = uuflowManager.getUserRoles(__values[field.code]["id"], space_id);

            if (organization_selectuser) {
              __values[field.code]["organization"] = new Object();
              __values[field.code]["organization"]["fullname"] = organization_selectuser.fullname;
              __values[field.code]["organization"]["name"] = organization_selectuser.name;
            }

            return __values[field.code]["roles"] = role_selectuser;
          }
        }
      } else if (["number", "percentage", "currency"].includes(field.type)) {
        if (__values[field.code]) {
          return __values[field.code] = Number(__values[field.code]);
        } else {
          return __values[field.code] = 0;
        }
      } else if (field.type === "checkbox") {
        if (__values[field.code] === "true") {
          return __values[field.code] = true;
        } else if (__values[field.code] === "false") {
          return __values[field.code] = false;
        }
      }
    });
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

uuflowManager.getNextSteps = function (instance, flow, step, judge) {
  var __values, applicant_name, applicant_organization_fullname, applicant_organization_name, applicant_roles, approver_name, approver_organization_fullname, approver_organization_name, approver_roles, current_approve, flowVersions, flow_steps, form, formVersion, lines, nextSteps, prefix, reg, rejectedSteps, start_approve, step_type, submitter_name, submitter_organization_fullname, submitter_organization_name, submitter_roles, trace_steps, traces, version_steps;

  step_type = step.step_type;
  nextSteps = new Array();

  if (step_type === "condition") {
    __values = uuflowManager.getUpdatedValues(instance);
    current_approve = null;
    traces = instance.traces;

    _.each(traces, function (trace) {
      if (trace.is_finished === false) {
        return current_approve = trace.approves[0];
      }
    });

    start_approve = null;

    _.each(traces, function (trace) {
      if (!trace.previous_trace_ids || trace.previous_trace_ids.length === 0) {
        return start_approve = trace.approves[0];
      }
    });

    applicant_organization_fullname = instance.applicant_organization_fullname;
    applicant_organization_name = instance.applicant_organization_name;
    applicant_roles = uuflowManager.getUserRoles(instance.applicant, instance.space);
    applicant_name = instance.applicant_name;
    submitter_organization_fullname = start_approve.handler_organization_fullname;
    submitter_organization_name = start_approve.handler_organization_name;
    submitter_roles = uuflowManager.getUserRoles(start_approve.handler, instance.space);
    submitter_name = start_approve.handler_name;
    approver_organization_fullname = current_approve.handler_organization_fullname;
    approver_organization_name = current_approve.handler_organization_name;
    approver_roles = uuflowManager.getUserRoles(current_approve.handler, instance.space);
    approver_name = current_approve.handler_name;
    __values["applicant"] = new Object();
    __values["applicant"]["roles"] = applicant_roles;
    __values["applicant"]["name"] = applicant_name;
    __values["applicant"]["organization"] = new Object();
    __values["applicant"]["organization"]["fullname"] = applicant_organization_fullname;
    __values["applicant"]["organization"]["name"] = applicant_organization_name;
    __values["submitter"] = new Object();
    __values["submitter"]["roles"] = submitter_roles;
    __values["submitter"]["name"] = submitter_name;
    __values["submitter"]["organization"] = new Object();
    __values["submitter"]["organization"]["fullname"] = submitter_organization_fullname;
    __values["submitter"]["organization"]["name"] = submitter_organization_name;
    __values["approver"] = new Object();
    __values["approver"]["roles"] = approver_roles;
    __values["approver"]["name"] = approver_name;
    __values["approver"]["organization"] = new Object();
    __values["approver"]["organization"]["fullname"] = approver_organization_fullname;
    __values["approver"]["organization"]["name"] = approver_organization_name;
    form = db.forms.findOne(instance.form);
    formVersion = null;

    if (instance.form_version === form.current._id) {
      formVersion = form.current;
    } else {
      formVersion = _.find(form.historys, function (history) {
        return instance.form_version === history._id;
      });
    }

    uuflowManager.setFormFieldVariable(formVersion.fields, __values, instance.space);
    reg = /(\{[^{}]*\})/;
    prefix = "__values";

    _.each(step.lines, function (step_line) {
      var step_line_condition;
      step_line_condition = step_line.condition.replace(reg, function (vowel) {
        return prefix + vowel.replace(/\{\s*/, "[\"").replace(/\s*\}/, "\"]").replace(/\s*\.\s*/g, "\"][\"");
      });

      if (step_line.state === "submitted" && uuflowManager.calculateCondition(__values, step_line_condition)) {
        if (step_line.state === "submitted") {
          return nextSteps.push(step_line.to_step);
        }
      }
    });
  } else if (step_type === "end") {
    return new Array();
  } else if (step_type === "submit" || step_type === "start" || step_type === "counterSign") {
    lines = _.filter(step.lines, function (line) {
      return line.state === "submitted";
    });

    if (lines.length === 0) {
      throw new Meteor.Error('error!', "流程的连线配置有误");
    } else {
      nextSteps = _.pluck(lines, 'to_step');
    }
  } else if (step_type === "sign") {
    if (judge === "approved") {
      lines = _.filter(step.lines, function (line) {
        return line.state === "approved";
      });

      if (lines.length === 0) {
        throw new Meteor.Error('error!', "流程的连线配置有误");
      } else {
        nextSteps = _.pluck(lines, 'to_step');
      }
    } else if (judge === "rejected") {
      lines = _.filter(step.lines, function (line) {
        return line.state === "rejected";
      });
      rejectedSteps = _.pluck(lines, 'to_step');
      trace_steps = new Array();

      _.each(instance.traces, function (trace) {
        var flowVersions;

        if (trace.is_finished === true) {
          flowVersions = new Array();
          flowVersions.push(flow.current);

          if (flow.historys) {
            flowVersions = flowVersions.concat(flow.historys);
          }

          return _.each(flowVersions, function (flowVer) {
            if (flowVer._id === instance.flow_version) {
              return _.each(flowVer.steps, function (flow_ver_step) {
                if (flow_ver_step._id === trace.step && flow_ver_step.step_type !== "condition") {
                  return trace_steps.push(trace.step);
                }
              });
            }
          });
        }
      });

      flow_steps = new Array();

      if (instance.flow_version === flow.current._id) {
        _.each(flow.current.steps, function (flow_step) {
          if (flow_step.step_type === "start" || flow_step.step_type === "end") {
            return flow_steps.push(flow_step._id);
          }
        });
      } else {
        _.each(flow.historys, function (history) {
          return _.each(history.steps, function (history_step) {
            if (history_step.step_type === "start" || history_step.step_type === "end") {
              return flow_steps.push(history_step._id);
            }
          });
        });
      }

      nextSteps = _.union(rejectedSteps, trace_steps, flow_steps);
    }
  }

  version_steps = new Object();
  flowVersions = new Array();
  flowVersions.push(flow.current);

  if (flow.historys) {
    flowVersions = flowVersions.concat(flow.historys);
  }

  _.each(flowVersions, function (flowVer) {
    if (flowVer._id === instance.flow_version) {
      return _.each(flowVer.steps, function (flow_ver_step) {
        return version_steps[flow_ver_step._id] = flow_ver_step;
      });
    }
  });

  nextSteps = _.uniq(nextSteps);

  _.each(nextSteps, function (next_step_id) {
    var _next_step;

    _next_step = version_steps[next_step_id];

    if (_next_step.step_type === "condition") {
      if (_next_step.lines) {
        return _.each(_next_step.lines, function (line) {
          if (line.to_step) {
            return nextSteps.push(line.to_step);
          }
        });
      }
    }
  });

  nextSteps = _.uniq(nextSteps);
  return nextSteps;
};

uuflowManager.getUpdatedValues = function (instance) {
  var newest_values, trace_approve;
  trace_approve = null;

  _.each(instance.traces, function (trace) {
    if (trace.is_finished === false) {
      return trace_approve = _.find(trace.approves, function (approve) {
        return approve.is_finished === false && approve.type !== 'cc' && approve.type !== 'distribute';
      });
    }
  });

  newest_values = null;

  if (!instance.values) {
    newest_values = trace_approve != null ? trace_approve.values : void 0;
  } else if (!(trace_approve != null ? trace_approve.values : void 0)) {
    newest_values = instance.values;
  } else {
    newest_values = _.extend(_.clone(instance.values), trace_approve.values);
  }

  return newest_values;
};

uuflowManager.getForm = function (form_id) {
  var form;
  form = db.forms.findOne(form_id);

  if (!form) {
    throw new Meteor.Error('error!', '表单ID有误或此表单已经被删除');
  }

  return form;
};

uuflowManager.getFormVersion = function (form, form_version) {
  var form_v;
  form_v = null;

  if (form_version === form.current._id) {
    form_v = form.current;
  } else {
    form_v = _.find(form.historys, function (form_h) {
      return form_version === form_h._id;
    });
  }

  if (!form_v) {
    throw new Meteor.Error('error!', '未找到表单对应的版本');
  }

  return form_v;
};

uuflowManager.getCategory = function (category_id) {
  return db.categories.findOne(category_id);
};

uuflowManager.getInstanceName = function (instance, vals) {
  var applicant, default_value, e, flow, form, form_id, form_v, form_version, iscript, name_forumla, rev, values;
  values = _.clone(vals || instance.values) || {};
  applicant = WorkflowManager.getFormulaUserObject(instance.space, instance.applicant);
  values["applicant"] = applicant;
  values["applicant_name"] = instance.applicant_name;
  values["applicant_organization"] = instance.applicant_organization;
  values["applicant_organization_fullname"] = instance.applicant_organization_fullname;
  values["applicant_organization_name"] = instance.applicant_organization_name;
  values["submit_date"] = moment(instance.submit_date).utcOffset(0, false).format("YYYY-MM-DD");
  form_id = instance.form;
  flow = uuflowManager.getFlow(instance.flow);
  default_value = flow.name + ' ' + instance.code;
  form_version = instance.form_version;
  form = uuflowManager.getForm(form_id);
  form_v = uuflowManager.getFormVersion(form, form_version);
  name_forumla = form_v.name_forumla;
  rev = default_value;

  if (name_forumla) {
    if (name_forumla.indexOf("{applicant.") > -1) {
      iscript = name_forumla.replace(/\{applicant./g, "(applicant.").replace(/\}/g, " || '')");
    }

    iscript = name_forumla.replace(/\{/g, "(values.").replace(/\}/g, " || '')");

    try {
      rev = eval(iscript) || default_value;
      rev = rev.replace(/\?|\*|\:|\"|\<|\>|\\|\/|\|/g, "");
    } catch (error) {
      e = error;
      console.log(e);
    }
  }

  return rev.trim();
};

uuflowManager.getApproveValues = function (approve_values, permissions, form_id, form_version) {
  var form_v, instance_form;

  if (permissions === null) {
    approve_values = new Object();
  } else {
    instance_form = db.forms.findOne(form_id);
    form_v = null;

    if (form_version === instance_form.current._id) {
      form_v = instance_form.current;
    } else {
      form_v = _.find(instance_form.historys, function (form_h) {
        return form_version === form_h._id;
      });
    }

    _.each(form_v.fields, function (field) {
      if (field.type === "table") {} else if (field.type === "section") {
        return _.each(field.fields, function (sectionField) {
          if (!sectionField.formula && (permissions[sectionField.code] === null || permissions[sectionField.code] !== "editable")) {
            return delete approve_values[sectionField.code];
          }
        });
      } else {
        if (!field.formula && (permissions[field.code] === null || permissions[field.code] !== "editable")) {
          return delete approve_values[field.code];
        }
      }
    });
  }

  return approve_values;
};

uuflowManager.workflow_engine = function (approve_from_client, current_user_info, current_user, auto_submitted) {
  var applicant_id, approve, approve_id, checkApplicant, description, flow, flow_id, form, geolocation, i, instance, instance_id, instance_trace, judge, key_str, last_step, last_step_type, last_trace, next_step, next_step_id, next_step_type, next_steps, setObj, space, space_id, space_user, space_user_org_info, step, step_type, to_users, trace, trace_approves, trace_id, updateObj, values;
  instance_id = approve_from_client["instance"];
  trace_id = approve_from_client["trace"];
  approve_id = approve_from_client["_id"];
  values = approve_from_client["values"];

  if (!values) {
    values = new Object();
  }

  next_steps = approve_from_client["next_steps"];
  judge = approve_from_client["judge"];
  description = approve_from_client["description"];
  geolocation = approve_from_client["geolocation"];
  setObj = new Object();
  instance = uuflowManager.getInstance(instance_id);
  space_id = instance.space;
  flow_id = instance.flow;
  space = uuflowManager.getSpace(space_id);
  applicant_id = instance.applicant;
  checkApplicant = uuflowManager.getSpaceUser(space_id, applicant_id);
  flow = uuflowManager.getFlow(flow_id);
  space_user = uuflowManager.getSpaceUser(space_id, current_user);
  space_user_org_info = uuflowManager.getSpaceUserOrgInfo(space_user);
  trace = uuflowManager.getTrace(instance, trace_id);
  approve = uuflowManager.getApprove(trace, approve_id);
  uuflowManager.isTraceNotFinished(trace);
  uuflowManager.isApproveNotFinished(approve);
  uuflowManager.isInstancePending(instance);
  uuflowManager.isHandlerOrAgent(approve, current_user);
  step = uuflowManager.getStep(instance, flow, trace.step);
  step_type = step.step_type;
  instance_trace = _.find(instance.traces, function (trace) {
    return trace._id === trace_id;
  });
  trace_approves = instance_trace.approves;
  i = 0;

  while (i < trace_approves.length) {
    if (trace_approves[i]._id === approve_id) {
      key_str = "traces.$.approves." + i + ".";
      setObj[key_str + "geolocation"] = geolocation;

      if (step_type === "condition") {} else if (step_type === "start" || step_type === "submit") {
        setObj[key_str + "judge"] = "submitted";
        setObj[key_str + "description"] = description;
      } else if (step_type === "sign" || step_type === "counterSign") {
        if (step_type === "counterSign" && !judge) {
          judge = 'submitted';
        }

        uuflowManager.isJudgeLegal(judge);
        setObj[key_str + "judge"] = judge;
        setObj[key_str + "description"] = description;
      }

      setObj[key_str + "next_steps"] = next_steps;
      setObj[key_str + "is_read"] = true;

      if (!trace_approves[i].read_date) {
        setObj[key_str + "read_date"] = new Date();
      }

      setObj[key_str + "values"] = uuflowManager.getApproveValues(values, step["permissions"], instance.form, instance.form_version);
      setObj.modified = new Date();
      setObj.modified_by = current_user;
      db.instances.update({
        _id: instance_id,
        "traces._id": trace_id
      }, {
        $set: setObj
      });
    }

    i++;
  }

  instance = uuflowManager.getInstance(instance_id);
  trace = uuflowManager.getTrace(instance, trace_id);
  approve = uuflowManager.getApprove(trace, approve_id);
  uuflowManager.isTraceNotFinished(trace);
  uuflowManager.isApproveNotFinished(approve);
  uuflowManager.isInstancePending(instance);
  uuflowManager.isHandlerOrAgent(approve, current_user);
  updateObj = new Object();

  if (next_steps === null || next_steps.length === 0) {
    throw new Meteor.Error('error!', '还未指定下一步和处理人，操作失败');
  } else {
    if (next_steps.length > 1) {
      throw new Meteor.Error('error!', '不能指定多个后续步骤');
    } else {
      _.each(next_steps[0]["users"], function (next_step_user) {
        var checkSpaceUser;
        return checkSpaceUser = uuflowManager.getSpaceUser(space_id, next_step_user);
      });
    }

    if (step_type === "start" || step_type === "submit" || step_type === "condition") {
      updateObj = uuflowManager.engine_step_type_is_start_or_submit_or_condition(instance_id, trace_id, approve_id, next_steps, space_user_org_info, judge, instance, flow, step, current_user, current_user_info, auto_submitted);
    } else if (step_type === "sign") {
      updateObj = uuflowManager.engine_step_type_is_sign(instance_id, trace_id, approve_id, next_steps, space_user_org_info, judge, instance, flow, step, current_user, current_user_info, description, auto_submitted);
    } else if (step_type === "counterSign") {
      updateObj = uuflowManager.engine_step_type_is_counterSign(instance_id, trace_id, approve_id, next_steps, space_user_org_info, judge, instance, flow, step, current_user, current_user_info, auto_submitted);
    } else if (step_type === "end") {
      throw new Meteor.Error('error!', 'end结点出现approve，服务器错误');
    }

    form = db.forms.findOne(instance.form);
    updateObj.keywords = uuflowManager.caculateKeywords(updateObj.values, form, instance.form_version);
    db.instances.update({
      _id: instance_id
    }, {
      $set: updateObj
    });
  }

  instance = uuflowManager.getInstance(instance_id);
  instance_trace = _.find(instance.traces, function (trace) {
    return trace._id === trace_id;
  });
  next_step_id = next_steps[0]["step"];
  next_step = uuflowManager.getStep(instance, flow, next_step_id);
  next_step_type = next_step.step_type;

  if ("completed" === instance.state) {
    if ("approved" === instance.final_decision) {
      pushManager.send_instance_notification("approved_completed_applicant", instance, description, current_user_info);
    } else if ("rejected" === instance.final_decision) {
      pushManager.send_instance_notification("rejected_completed_applicant", instance, description, current_user_info);
    } else {
      pushManager.send_instance_notification("submit_completed_applicant", instance, description, current_user_info);
    }
  } else if ("pending" === instance.state) {
    if ("rejected" === instance_trace.judge && instance_trace.is_finished === true) {
      if ('start' === next_step_type) {
        pushManager.send_instance_notification("submit_pending_rejected_applicant_inbox", instance, description, current_user_info);
      } else {
        pushManager.send_instance_notification("submit_pending_rejected_applicant", instance, description, current_user_info);
        pushManager.send_instance_notification("submit_pending_rejected_inbox", instance, description, current_user_info);
      }
    } else if (instance_trace.is_finished === false) {} else {
      pushManager.send_instance_notification("submit_pending_inbox", instance, description, current_user_info);
    }
  }

  pushManager.send_message_current_user(current_user_info);
  to_users = instance.inbox_users;
  last_trace = _.last(instance.traces);
  last_step = uuflowManager.getStep(instance, flow, last_trace.step);
  last_step_type = last_step.step_type;

  if (last_step_type === "counterSign" && _.where(last_trace.approves, {
    is_finished: true
  }).length > 0) {
    to_users = [];
  }

  pushManager.triggerWebhook(flow_id, instance, approve_from_client, 'engine_submit', current_user, to_users);
  uuflowManager.distributedInstancesRemind(instance);
  return instance;
};

uuflowManager.engine_step_type_is_start_or_submit_or_condition = function (instance_id, trace_id, approve_id, next_steps, space_user_org_info, judge, instance, flow, step, current_user, current_user_info, auto_submitted) {
  var h, i, instance_trace, instance_traces, newTrace, nextSteps, next_step, next_step_id, next_step_name, next_step_type, next_step_users, next_user_ids, outbox_users, setObj, space_id, trace_approve, updated_values;
  setObj = new Object();
  space_id = instance.space;
  nextSteps = uuflowManager.getNextSteps(instance, flow, step, "");

  _.each(next_steps, function (approve_next_step) {
    if (!nextSteps.includes(approve_next_step["step"])) {
      throw new Meteor.Error('error!', "approve中next_steps.step：" + approve_next_step.step + " 不合法");
    }
  });

  next_step_id = next_steps[0]["step"];
  next_step = uuflowManager.getStep(instance, flow, next_step_id);
  next_step_type = next_step.step_type;
  next_step_name = next_step.name;

  if (next_step_type === "end") {
    instance_traces = instance.traces;
    i = 0;

    while (i < instance_traces.length) {
      if (instance_traces[i]._id === trace_id) {
        instance_traces[i].is_finished = true;
        instance_traces[i].finish_date = new Date();
        instance_traces[i].judge = judge;
        h = 0;

        while (h < instance_traces[i].approves.length) {
          if (instance_traces[i].approves[h]._id === approve_id) {
            instance_traces[i].approves[h].is_finished = true;
            instance_traces[i].approves[h].handler = current_user;
            instance_traces[i].approves[h].handler_name = current_user_info.name;
            instance_traces[i].approves[h].finish_date = new Date();
            instance_traces[i].approves[h].handler_organization = space_user_org_info["organization"];
            instance_traces[i].approves[h].handler_organization_name = space_user_org_info["organization_name"];
            instance_traces[i].approves[h].handler_organization_fullname = space_user_org_info["organization_fullname"];
            instance_traces[i].approves[h].cost_time = instance_traces[i].approves[h].finish_date - instance_traces[i].approves[h].start_date;
            instance_traces[i].approves[h].auto_submitted = auto_submitted;
          }

          h++;
        }
      }

      i++;
    }

    newTrace = new Object();
    newTrace._id = new Mongo.ObjectID()._str;
    newTrace.instance = instance_id;
    newTrace.previous_trace_ids = [trace_id];
    newTrace.is_finished = true;
    newTrace.step = next_step_id;
    newTrace.name = next_step_name;
    newTrace.start_date = new Date();
    newTrace.finish_date = new Date();
    setObj.state = "completed";
    setObj.modified = new Date();
    setObj.modified_by = current_user;
    setObj.values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));
    instance.values = setObj.values;
    setObj.name = uuflowManager.getInstanceName(instance);
    instance_trace = _.find(instance_traces, function (trace) {
      return trace._id === trace_id;
    });
    trace_approve = _.find(instance_trace.approves, function (approve) {
      return approve._id === approve_id;
    });
    outbox_users = instance.outbox_users;
    outbox_users.unshift(trace_approve.handler);
    outbox_users.unshift(trace_approve.user);
    setObj.outbox_users = _.uniq(outbox_users);
    instance_traces.push(newTrace);
    setObj.traces = instance_traces;
    setObj.inbox_users = [];
    setObj.finish_date = new Date();
    setObj.current_step_name = next_step_name;
    setObj.final_decision = 'approved';
    setObj.current_step_auto_submit = false;
  } else {
    next_step_users = next_steps[0]["users"];

    if (next_step_users === null || next_step_users.length === 0) {
      throw new Meteor.Error('error!', "未指定下一步处理人");
    } else {
      if (next_step_users.length > 1 && next_step.step_type !== "counterSign") {
        throw new Meteor.Error('error!', "不能指定多个处理人");
      } else {
        next_user_ids = getHandlersManager.getHandlers(instance_id, next_step_id);

        if (_.difference(next_step_users, next_user_ids).length > 0) {
          throw new Meteor.Error('error!', "指定的下一步处理人有误");
        } else {
          instance_traces = instance.traces;
          i = 0;

          while (i < instance_traces.length) {
            if (instance_traces[i]._id === trace_id) {
              instance_traces[i].is_finished = true;
              instance_traces[i].finish_date = new Date();
              instance_traces[i].judge = judge;
              h = 0;

              while (h < instance_traces[i].approves.length) {
                if (instance_traces[i].approves[h]._id === approve_id) {
                  instance_traces[i].approves[h].is_finished = true;
                  instance_traces[i].approves[h].handler = current_user;
                  instance_traces[i].approves[h].handler_name = current_user_info.name;
                  instance_traces[i].approves[h].finish_date = new Date();
                  instance_traces[i].approves[h].handler_organization = space_user_org_info["organization"];
                  instance_traces[i].approves[h].handler_organization_name = space_user_org_info["organization_name"];
                  instance_traces[i].approves[h].handler_organization_fullname = space_user_org_info["organization_fullname"];
                  instance_traces[i].approves[h].cost_time = instance_traces[i].approves[h].finish_date - instance_traces[i].approves[h].start_date;
                  instance_traces[i].approves[h].auto_submitted = auto_submitted;
                }

                h++;
              }
            }

            i++;
          }

          newTrace = new Object();
          newTrace._id = new Mongo.ObjectID()._str;
          newTrace.instance = instance_id;
          newTrace.previous_trace_ids = [trace_id];
          newTrace.is_finished = false;
          newTrace.step = next_step_id;
          newTrace.name = next_step_name;
          newTrace.start_date = new Date();
          newTrace.due_date = uuflowManager.getDueDate(next_step.timeout_hours);
          newTrace.approves = new Array();
          updated_values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));

          _.each(next_step_users, function (next_step_user_id, idx) {
            var agent, handler_id, handler_info, newApprove, next_step_space_user, next_step_user_org_info, user_info;
            newApprove = new Object();
            newApprove._id = new Mongo.ObjectID()._str;
            newApprove.instance = instance_id;
            newApprove.trace = newTrace._id;
            newApprove.is_finished = false;
            newApprove.user = next_step_user_id;
            user_info = db.users.findOne({
              _id: next_step_user_id
            }, {
              fields: {
                name: 1
              }
            });
            newApprove.user_name = user_info.name;
            handler_id = next_step_user_id;
            handler_info = user_info;
            agent = uuflowManager.getAgent(space_id, next_step_user_id);

            if (agent) {
              next_step_users[idx] = agent;
              handler_id = agent;
              handler_info = db.users.findOne({
                _id: agent
              }, {
                fields: {
                  name: 1
                }
              });
              newApprove.agent = agent;
            }

            newApprove.handler = handler_id;
            newApprove.handler_name = handler_info.name;
            next_step_space_user = db.space_users.findOne({
              space: space_id,
              user: handler_id
            });
            next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
            newApprove.handler_organization = next_step_user_org_info["organization"];
            newApprove.handler_organization_name = next_step_user_org_info["organization_name"];
            newApprove.handler_organization_fullname = next_step_user_org_info["organization_fullname"];
            newApprove.start_date = new Date();
            newApprove.due_date = newTrace.due_date;
            newApprove.is_read = false;
            newApprove.is_error = false;
            newApprove.values = new Object();
            uuflowManager.setRemindInfo(updated_values, newApprove);
            return newTrace.approves.push(newApprove);
          });

          setObj.state = "pending";
          setObj.modified = new Date();
          setObj.modified_by = current_user;
          setObj.values = updated_values;
          instance.values = setObj.values;
          setObj.name = uuflowManager.getInstanceName(instance);
          instance_trace = _.find(instance_traces, function (trace) {
            return trace._id === trace_id;
          });
          trace_approve = _.find(instance_trace.approves, function (approve) {
            return approve._id === approve_id;
          });
          outbox_users = instance.outbox_users;
          outbox_users.unshift(trace_approve.user);
          outbox_users.unshift(trace_approve.handler);
          setObj.outbox_users = _.uniq(outbox_users);
          setObj.inbox_users = next_step_users;
          instance_traces.push(newTrace);
          setObj.traces = instance_traces;
          setObj.current_step_name = next_step_name;
          setObj.current_step_auto_submit = uuflowManager.getCurrentStepAutoSubmit(flow.timeout_auto_submit, next_step.lines);
        }
      }
    }
  }

  return setObj;
};

uuflowManager.engine_step_type_is_sign = function (instance_id, trace_id, approve_id, next_steps, space_user_org_info, judge, instance, flow, step, current_user, current_user_info, description, auto_submitted) {
  var h, i, instance_trace, instance_traces, newTrace, nextSteps, next_step, next_step_id, next_step_name, next_step_type, next_step_users, next_user_ids, outbox_users, setObj, space_id, trace_approve, updated_values;
  setObj = new Object();
  space_id = instance.space;

  if (!judge) {
    throw new Meteor.Error('error!', "单签结点还未选择处理意见，操作失败");
  } else {
    if (judge === "approved") {
      nextSteps = uuflowManager.getNextSteps(instance, flow, step, "approved");

      _.each(next_steps, function (approve_next_step) {
        if (!nextSteps.includes(approve_next_step["step"])) {
          throw new Meteor.Error('error!', "指定的下一步有误");
        }
      });

      next_step_id = next_steps[0]["step"];
      next_step = uuflowManager.getStep(instance, flow, next_step_id);
      next_step_type = next_step["step_type"];
      next_step_name = next_step["name"];

      if (next_step_type === "end") {
        instance_traces = instance.traces;
        i = 0;

        while (i < instance_traces.length) {
          if (instance_traces[i]._id === trace_id) {
            instance_traces[i].is_finished = true;
            instance_traces[i].finish_date = new Date();
            instance_traces[i].judge = judge;
            h = 0;

            while (h < instance_traces[i].approves.length) {
              if (instance_traces[i].approves[h]._id === approve_id) {
                instance_traces[i].approves[h].is_finished = true;
                instance_traces[i].approves[h].handler = current_user;
                instance_traces[i].approves[h].handler_name = current_user_info.name;
                instance_traces[i].approves[h].finish_date = new Date();
                instance_traces[i].approves[h].handler_organization = space_user_org_info["organization"];
                instance_traces[i].approves[h].handler_organization_name = space_user_org_info["organization_name"];
                instance_traces[i].approves[h].handler_organization_fullname = space_user_org_info["organization_fullname"];
                instance_traces[i].approves[h].cost_time = instance_traces[i].approves[h].finish_date - instance_traces[i].approves[h].start_date;
                instance_traces[i].approves[h].auto_submitted = auto_submitted;
              }

              h++;
            }
          }

          i++;
        }

        newTrace = new Object();
        newTrace._id = new Mongo.ObjectID()._str;
        newTrace.instance = instance_id;
        newTrace.previous_trace_ids = [trace_id];
        newTrace.is_finished = true;
        newTrace.step = next_step_id;
        newTrace.name = next_step_name;
        newTrace.start_date = new Date();
        newTrace.finish_date = new Date();
        setObj.state = "completed";
        setObj.final_decision = judge;
        setObj.modified = new Date();
        setObj.modified_by = current_user;
        setObj.values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));
        instance.values = setObj.values;
        setObj.name = uuflowManager.getInstanceName(instance);
        instance_trace = _.find(instance_traces, function (trace) {
          return trace._id === trace_id;
        });
        trace_approve = _.find(instance_trace.approves, function (approve) {
          return approve._id === approve_id;
        });
        outbox_users = instance.outbox_users;
        outbox_users.unshift(trace_approve.handler);
        outbox_users.unshift(trace_approve.user);
        setObj.outbox_users = _.uniq(outbox_users);
        instance_traces.push(newTrace);
        setObj.traces = instance_traces;
        setObj.inbox_users = [];
        setObj.finish_date = new Date();

        if (instance.cc_users) {
          setObj.cc_users = instance.cc_users;
        }

        setObj.current_step_name = next_step_name;
        setObj.current_step_auto_submit = false;
      } else {
        next_step_users = next_steps[0]["users"];

        if (next_step_users === null || next_step_users.length === 0) {
          throw new Meteor.Error('error!', "未指定下一步处理人");
        } else {
          if (next_step_users.length > 1 && next_step["step_type"] !== "counterSign") {
            throw new Meteor.Error('error!', "不能指定多个处理人");
          } else {
            next_user_ids = getHandlersManager.getHandlers(instance_id, next_step_id);

            if (_.difference(next_step_users, next_user_ids).length > 0) {
              throw new Meteor.Error('error!', "指定的下一步处理人有误");
            } else {
              instance_traces = instance.traces;
              i = 0;

              while (i < instance_traces.length) {
                if (instance_traces[i]._id === trace_id) {
                  instance_traces[i].is_finished = true;
                  instance_traces[i].finish_date = new Date();
                  instance_traces[i].judge = judge;
                  h = 0;

                  while (h < instance_traces[i].approves.length) {
                    if (instance_traces[i].approves[h]._id === approve_id) {
                      instance_traces[i].approves[h].is_finished = true;
                      instance_traces[i].approves[h].handler = current_user;
                      instance_traces[i].approves[h].handler_name = current_user_info.name;
                      instance_traces[i].approves[h].finish_date = new Date();
                      instance_traces[i].approves[h].handler_organization = space_user_org_info["organization"];
                      instance_traces[i].approves[h].handler_organization_name = space_user_org_info["organization_name"];
                      instance_traces[i].approves[h].handler_organization_fullname = space_user_org_info["organization_fullname"];
                      instance_traces[i].approves[h].cost_time = instance_traces[i].approves[h].finish_date - instance_traces[i].approves[h].start_date;
                      instance_traces[i].approves[h].auto_submitted = auto_submitted;
                    }

                    h++;
                  }
                }

                i++;
              }

              newTrace = new Object();
              newTrace._id = new Mongo.ObjectID()._str;
              newTrace.instance = instance_id;
              newTrace.previous_trace_ids = [trace_id];
              newTrace.is_finished = false;
              newTrace.step = next_step_id;
              newTrace.name = next_step_name;
              newTrace.start_date = new Date();
              newTrace.due_date = uuflowManager.getDueDate(next_step.timeout_hours);
              newTrace.approves = new Array();
              updated_values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));

              _.each(next_step_users, function (next_step_user_id, idx) {
                var agent, handler_id, handler_info, newApprove, next_step_space_user, next_step_user_org_info, user_info;
                newApprove = new Object();
                newApprove._id = new Mongo.ObjectID()._str;
                newApprove.instance = instance_id;
                newApprove.trace = newTrace._id;
                newApprove.is_finished = false;
                newApprove.user = next_step_user_id;
                user_info = db.users.findOne({
                  _id: next_step_user_id
                }, {
                  fields: {
                    name: 1
                  }
                });
                newApprove.user_name = user_info.name;
                handler_id = next_step_user_id;
                handler_info = user_info;
                agent = uuflowManager.getAgent(space_id, next_step_user_id);

                if (agent) {
                  next_step_users[idx] = agent;
                  handler_id = agent;
                  handler_info = db.users.findOne({
                    _id: agent
                  }, {
                    fields: {
                      name: 1
                    }
                  });
                  newApprove.agent = agent;
                }

                newApprove.handler = handler_id;
                newApprove.handler_name = handler_info.name;
                next_step_space_user = db.space_users.findOne({
                  space: space_id,
                  user: handler_id
                });
                next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
                newApprove.handler_organization = next_step_user_org_info["organization"];
                newApprove.handler_organization_name = next_step_user_org_info["organization_name"];
                newApprove.handler_organization_fullname = next_step_user_org_info["organization_fullname"];
                newApprove.start_date = new Date();
                newApprove.due_date = newTrace.due_date;
                newApprove.is_read = false;
                newApprove.is_error = false;
                newApprove.values = new Object();
                uuflowManager.setRemindInfo(updated_values, newApprove);
                return newTrace.approves.push(newApprove);
              });

              setObj.final_decision = judge;
              setObj.modified = new Date();
              setObj.modified_by = current_user;
              setObj.values = updated_values;
              instance.values = setObj.values;
              setObj.name = uuflowManager.getInstanceName(instance);
              instance_trace = _.find(instance_traces, function (trace) {
                return trace._id === trace_id;
              });
              trace_approve = _.find(instance_trace.approves, function (approve) {
                return approve._id === approve_id;
              });
              outbox_users = instance.outbox_users;
              outbox_users.unshift(trace_approve.user);
              outbox_users.unshift(trace_approve.handler);
              setObj.outbox_users = _.uniq(outbox_users);
              setObj.inbox_users = next_step_users;
              instance_traces.push(newTrace);
              setObj.traces = instance_traces;
              setObj.state = "pending";

              if (instance.cc_users) {
                setObj.cc_users = instance.cc_users;
              }

              setObj.current_step_name = next_step_name;
              setObj.current_step_auto_submit = uuflowManager.getCurrentStepAutoSubmit(flow.timeout_auto_submit, next_step.lines);
            }
          }
        }
      }
    } else if (judge === "rejected") {
      if (!description) {
        throw new Meteor.Error('error!', "请填写驳回理由");
      } else {
        nextSteps = uuflowManager.getNextSteps(instance, flow, step, "rejected");

        _.each(next_steps, function (approve_next_step) {
          if (!nextSteps.includes(approve_next_step["step"])) {
            throw new Meteor.Error('error!', "指定的下一步有误");
          }
        });

        next_step_id = next_steps[0]["step"];
        next_step = uuflowManager.getStep(instance, flow, next_step_id);
        next_step_type = next_step["step_type"];
        next_step_name = next_step["name"];

        if (next_step_type === "end") {
          instance_traces = instance.traces;
          i = 0;

          while (i < instance_traces.length) {
            if (instance_traces[i]._id === trace_id) {
              instance_traces[i].is_finished = true;
              instance_traces[i].finish_date = new Date();
              instance_traces[i].judge = judge;
              h = 0;

              while (h < instance_traces[i].approves.length) {
                if (instance_traces[i].approves[h]._id === approve_id) {
                  instance_traces[i].approves[h].is_finished = true;
                  instance_traces[i].approves[h].handler = current_user;
                  instance_traces[i].approves[h].handler_name = current_user_info.name;
                  instance_traces[i].approves[h].finish_date = new Date();
                  instance_traces[i].approves[h].handler_organization = space_user_org_info["organization"];
                  instance_traces[i].approves[h].handler_organization_name = space_user_org_info["organization_name"];
                  instance_traces[i].approves[h].handler_organization_fullname = space_user_org_info["organization_fullname"];
                  instance_traces[i].approves[h].cost_time = instance_traces[i].approves[h].finish_date - instance_traces[i].approves[h].start_date;
                  instance_traces[i].approves[h].auto_submitted = auto_submitted;
                }

                h++;
              }
            }

            i++;
          }

          newTrace = new Object();
          newTrace._id = new Mongo.ObjectID()._str;
          newTrace.instance = instance_id;
          newTrace.previous_trace_ids = [trace_id];
          newTrace.is_finished = true;
          newTrace.step = next_step_id;
          newTrace.name = next_step_name;
          newTrace.start_date = new Date();
          newTrace.finish_date = new Date();
          setObj.state = "completed";
          setObj.final_decision = judge;
          setObj.modified = new Date();
          setObj.modified_by = current_user;
          setObj.values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));
          instance.values = setObj.values;
          setObj.name = uuflowManager.getInstanceName(instance);
          instance_trace = _.find(instance_traces, function (trace) {
            return trace._id === trace_id;
          });
          trace_approve = _.find(instance_trace.approves, function (approve) {
            return approve._id === approve_id;
          });
          outbox_users = instance.outbox_users;
          outbox_users.unshift(trace_approve.handler);
          outbox_users.unshift(trace_approve.user);
          setObj.outbox_users = _.uniq(outbox_users);
          instance_traces.push(newTrace);
          setObj.traces = instance_traces;
          setObj.inbox_users = [];
          setObj.finish_date = new Date();

          if (instance.cc_users) {
            setObj.cc_users = instance.cc_users;
          }

          setObj.current_step_name = next_step_name;
          setObj.current_step_auto_submit = false;
        } else {
          next_step_users = next_steps[0]["users"];

          if (next_step_users === null || next_step_users.length === 0) {
            throw new Meteor.Error('error!', "未指定下一步处理人");
          } else {
            if (next_step_users.length > 1 && next_step["step_type"] !== "counterSign") {
              throw new Meteor.Error('error!', "不能指定多个处理人");
            } else {
              next_user_ids = getHandlersManager.getHandlers(instance_id, next_step_id);

              if (_.difference(next_step_users, next_user_ids).length > 0) {
                throw new Meteor.Error('error!', "指定的下一步处理人有误");
              } else {
                instance_traces = instance.traces;
                i = 0;

                while (i < instance_traces.length) {
                  if (instance_traces[i]._id === trace_id) {
                    instance_traces[i].is_finished = true;
                    instance_traces[i].finish_date = new Date();
                    instance_traces[i].judge = judge;
                    h = 0;

                    while (h < instance_traces[i].approves.length) {
                      if (instance_traces[i].approves[h]._id === approve_id) {
                        instance_traces[i].approves[h].is_finished = true;
                        instance_traces[i].approves[h].handler = current_user;
                        instance_traces[i].approves[h].handler_name = current_user_info.name;
                        instance_traces[i].approves[h].finish_date = new Date();
                        instance_traces[i].approves[h].handler_organization = space_user_org_info["organization"];
                        instance_traces[i].approves[h].handler_organization_name = space_user_org_info["organization_name"];
                        instance_traces[i].approves[h].handler_organization_fullname = space_user_org_info["organization_fullname"];
                        instance_traces[i].approves[h].cost_time = instance_traces[i].approves[h].finish_date - instance_traces[i].approves[h].start_date;
                        instance_traces[i].approves[h].auto_submitted = auto_submitted;
                      }

                      h++;
                    }
                  }

                  i++;
                }

                newTrace = new Object();
                newTrace._id = new Mongo.ObjectID()._str;
                newTrace.instance = instance_id;
                newTrace.previous_trace_ids = [trace_id];
                newTrace.is_finished = false;
                newTrace.step = next_step_id;
                newTrace.name = next_step_name;
                newTrace.start_date = new Date();
                newTrace.due_date = uuflowManager.getDueDate(next_step.timeout_hours);
                newTrace.approves = new Array();
                updated_values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));

                _.each(next_step_users, function (next_step_user_id, idx) {
                  var agent, handler_id, handler_info, newApprove, next_step_space_user, next_step_user_org_info, user_info;
                  newApprove = new Object();
                  newApprove._id = new Mongo.ObjectID()._str;
                  newApprove.instance = instance_id;
                  newApprove.trace = newTrace._id;
                  newApprove.is_finished = false;
                  newApprove.user = next_step_user_id;
                  user_info = db.users.findOne({
                    _id: next_step_user_id
                  }, {
                    fields: {
                      name: 1
                    }
                  });
                  newApprove.user_name = user_info.name;
                  handler_id = next_step_user_id;
                  handler_info = user_info;
                  agent = uuflowManager.getAgent(space_id, next_step_user_id);

                  if (agent) {
                    next_step_users[idx] = agent;
                    handler_id = agent;
                    handler_info = db.users.findOne({
                      _id: agent
                    }, {
                      fields: {
                        name: 1
                      }
                    });
                    newApprove.agent = agent;
                  }

                  newApprove.handler = handler_id;
                  newApprove.handler_name = handler_info.name;
                  next_step_space_user = db.space_users.findOne({
                    space: space_id,
                    user: handler_id
                  });
                  next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
                  newApprove.handler_organization = next_step_user_org_info["organization"];
                  newApprove.handler_organization_name = next_step_user_org_info["organization_name"];
                  newApprove.handler_organization_fullname = next_step_user_org_info["organization_fullname"];
                  newApprove.start_date = new Date();
                  newApprove.due_date = newTrace.due_date;
                  newApprove.is_read = false;
                  newApprove.is_error = false;
                  newApprove.values = new Object();
                  uuflowManager.setRemindInfo(updated_values, newApprove);
                  return newTrace.approves.push(newApprove);
                });

                setObj.final_decision = judge;
                setObj.modified = new Date();
                setObj.modified_by = current_user;
                setObj.values = updated_values;
                instance.values = setObj.values;
                setObj.name = uuflowManager.getInstanceName(instance);
                instance_trace = _.find(instance_traces, function (trace) {
                  return trace._id === trace_id;
                });
                trace_approve = _.find(instance_trace.approves, function (approve) {
                  return approve._id === approve_id;
                });
                outbox_users = instance.outbox_users;
                outbox_users.unshift(trace_approve.user);
                outbox_users.unshift(trace_approve.handler);
                setObj.outbox_users = _.uniq(outbox_users);
                setObj.inbox_users = next_step_users;
                instance_traces.push(newTrace);
                setObj.traces = instance_traces;
                setObj.state = "pending";

                if (instance.cc_users) {
                  setObj.cc_users = instance.cc_users;
                }

                setObj.current_step_name = next_step_name;
                setObj.current_step_auto_submit = uuflowManager.getCurrentStepAutoSubmit(flow.timeout_auto_submit, next_step.lines);
              }
            }
          }
        }
      }
    }
  }

  return setObj;
};

uuflowManager.engine_step_type_is_counterSign = function (instance_id, trace_id, approve_id, next_steps, space_user_org_info, judge, instance, flow, step, current_user, current_user_info, auto_submitted) {
  var h, i, instance_trace, instance_traces, isAllApproveFinished, newTrace, nextSteps, next_step, next_step_id, next_step_name, next_step_type, next_step_users, next_user_ids, outbox_users, ref, ref1, ref2, ref3, setObj, space_id, trace_approve;
  setObj = new Object();
  space_id = instance.space;

  if (!judge) {
    throw new Meteor.Error('error!', "请选择核准或驳回。");
  } else {
    if (step.oneClickApproval && ['approved', 'readed'].includes(judge) && ((ref = Meteor.settings) != null ? (ref1 = ref["public"]) != null ? ref1.is_group_company : void 0 : void 0)) {
      nextSteps = uuflowManager.getNextSteps(instance, flow, step, "approved");

      _.each(next_steps, function (approve_next_step) {
        if (!nextSteps.includes(approve_next_step["step"])) {
          throw new Meteor.Error('error!', "指定的下一步有误");
        }
      });
    }

    next_step_id = next_steps[0]["step"];
    next_step = uuflowManager.getStep(instance, flow, next_step_id);
    next_step_type = next_step["step_type"];
    next_step_name = next_step["name"];
    instance_traces = instance.traces;
    isAllApproveFinished = true;
    i = 0;

    while (i < instance_traces.length) {
      if (instance_traces[i]._id === trace_id) {
        h = 0;

        while (h < instance_traces[i].approves.length) {
          if (instance_traces[i].approves[h]._id === approve_id || ((ref2 = Meteor.settings) != null ? (ref3 = ref2["public"]) != null ? ref3.is_group_company : void 0 : void 0) && step.oneClickApproval && ['approved', 'readed'].includes(judge) || step.oneClickRejection && 'rejected' === judge) {
            instance_traces[i].approves[h].is_finished = true;
            instance_traces[i].approves[h].finish_date = new Date();
            instance_traces[i].approves[h].cost_time = instance_traces[i].approves[h].finish_date - instance_traces[i].approves[h].start_date;
            instance_traces[i].approves[h].auto_submitted = auto_submitted;
          }

          if (instance_traces[i].approves[h].is_finished === false && instance_traces[i].approves[h].type !== 'cc' && instance_traces[i].approves[h].type !== 'distribute') {
            isAllApproveFinished = false;
          }

          h++;
        }
      }

      i++;
    }

    if (isAllApproveFinished === true) {
      i = 0;

      while (i < instance_traces.length) {
        if (instance_traces[i]._id === trace_id) {
          instance_traces[i].is_finished = true;
          instance_traces[i].finish_date = new Date();
          instance_traces[i].judge = "submitted";
        }

        i++;
      }

      if (next_step_type === "end") {
        newTrace = new Object();
        newTrace._id = new Mongo.ObjectID()._str;
        newTrace.instance = instance_id;
        newTrace.previous_trace_ids = [trace_id];
        newTrace.is_finished = true;
        newTrace.step = next_step_id;
        newTrace.name = next_step_name;
        newTrace.start_date = new Date();
        newTrace.finish_date = new Date();
        setObj.state = "completed";
        setObj.modified = new Date();
        setObj.modified_by = current_user;
        instance_trace = _.find(instance_traces, function (trace) {
          return trace._id === trace_id;
        });
        outbox_users = instance.outbox_users;

        _.each(instance_trace.approves, function (appro) {
          outbox_users.push(appro.user);
          return outbox_users.push(appro.handler);
        });

        setObj.outbox_users = _.uniq(outbox_users);
        setObj.inbox_users = new Array();
        instance_traces.push(newTrace);
        setObj.traces = instance_traces;
        setObj.finish_date = new Date();
        setObj.values = instance.values;

        if (instance.cc_users) {
          setObj.cc_users = instance.cc_users;
        }

        setObj.current_step_name = next_step_name;
        setObj.final_decision = 'approved';
        setObj.current_step_auto_submit = false;
      } else {
        next_step_users = next_steps[0]["users"];

        if (next_step_users === null || next_step_users.length === 0) {
          throw new Meteor.Error('error!', "未指定下一步处理人");
        } else {
          if (next_step_users.length > 1 && next_step["step_type"] !== "counterSign") {
            throw new Meteor.Error('error!', "不能指定多个处理人");
          } else {
            next_user_ids = getHandlersManager.getHandlers(instance_id, next_step_id);

            if (_.difference(next_step_users, next_user_ids).length > 0) {
              throw new Meteor.Error('error!', "指定的下一步处理人有误");
            } else {
              newTrace = new Object();
              newTrace._id = new Mongo.ObjectID()._str;
              newTrace.instance = instance_id;
              newTrace.previous_trace_ids = [trace_id];
              newTrace.is_finished = false;
              newTrace.step = next_step_id;
              newTrace.name = next_step_name;
              newTrace.start_date = new Date();
              newTrace.due_date = uuflowManager.getDueDate(next_step.timeout_hours);
              newTrace.approves = new Array();

              _.each(next_step_users, function (next_step_user_id, idx) {
                var agent, handler_id, handler_info, newApprove, next_step_space_user, next_step_user_org_info, user_info;
                newApprove = new Object();
                newApprove._id = new Mongo.ObjectID()._str;
                newApprove.instance = instance_id;
                newApprove.trace = newTrace._id;
                newApprove.is_finished = false;
                newApprove.user = next_step_user_id;
                user_info = db.users.findOne({
                  _id: next_step_user_id
                }, {
                  fields: {
                    name: 1
                  }
                });
                newApprove.user_name = user_info.name;
                handler_id = next_step_user_id;
                handler_info = user_info;
                agent = uuflowManager.getAgent(space_id, next_step_user_id);

                if (agent) {
                  next_step_users[idx] = agent;
                  handler_id = agent;
                  handler_info = db.users.findOne({
                    _id: agent
                  }, {
                    fields: {
                      name: 1
                    }
                  });
                  newApprove.agent = agent;
                }

                newApprove.handler = handler_id;
                newApprove.handler_name = handler_info.name;
                next_step_space_user = db.space_users.findOne({
                  space: space_id,
                  user: handler_id
                });
                next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
                newApprove.handler_organization = next_step_user_org_info["organization"];
                newApprove.handler_organization_name = next_step_user_org_info["organization_name"];
                newApprove.handler_organization_fullname = next_step_user_org_info["organization_fullname"];
                newApprove.start_date = new Date();
                newApprove.due_date = newTrace.due_date;
                newApprove.is_read = false;
                newApprove.is_error = false;
                newApprove.values = new Object();
                uuflowManager.setRemindInfo(instance.values, newApprove);
                return newTrace.approves.push(newApprove);
              });

              setObj.modified = new Date();
              setObj.modified_by = current_user;
              instance_trace = _.find(instance_traces, function (trace) {
                return trace._id === trace_id;
              });
              outbox_users = instance.outbox_users;

              _.each(instance_trace.approves, function (appro) {
                outbox_users.push(appro.user);
                return outbox_users.push(appro.handler);
              });

              setObj.outbox_users = _.uniq(outbox_users);
              setObj.inbox_users = next_step_users;
              instance_traces.push(newTrace);
              setObj.traces = instance_traces;
              setObj.state = "pending";
              setObj.values = instance.values;

              if (instance.cc_users) {
                setObj.cc_users = instance.cc_users;
              }

              setObj.current_step_name = next_step_name;
              setObj.current_step_auto_submit = uuflowManager.getCurrentStepAutoSubmit(flow.timeout_auto_submit, next_step.lines);
            }
          }
        }
      }
    } else {
      instance_trace = _.find(instance_traces, function (trace) {
        return trace._id === trace_id;
      });
      trace_approve = _.find(instance_trace.approves, function (approve) {
        return approve._id === approve_id;
      });
      instance.outbox_users.unshift(trace_approve.handler);
      setObj.outbox_users = instance.outbox_users;
      instance.inbox_users.splice(instance.inbox_users.indexOf(trace_approve.handler), 1);
      setObj.inbox_users = instance.inbox_users;
      setObj.modified = new Date();
      setObj.modified_by = current_user;
      setObj.traces = instance_traces;
      setObj.state = "pending";
      setObj.values = instance.values;

      if (instance.cc_users) {
        setObj.cc_users = instance.cc_users;
      }
    }
  }

  return setObj;
};

uuflowManager.ins_html = function (current_user_info, ins) {
  var instanceHtml, options;
  options = {
    templateName: 'table',
    showTrace: true,
    showAttachments: false
  };
  options.width = "765px";
  options.styles = "body { background: #ffffff !important; }.steedos .pull-right { float: right !important; }.steedos .inline-left{ display: inline;float: left; }.steedos .inline-right{ display: inline;float: right; }.steedos .no-border{ border: 0px; }.steedos .no-border td{ border: 0px; }.steedos tr:nth-child(2) td{ border-top: 0px !important; }.steedos .ins_applicant{ display: inline; background: transparent !important; border: none; }.steedos .instance-name{ width: " + options.width + " !important; }.steedos table { border-spacing: 0; border-collapse: collapse; }.steedos .box { background: #ffffff; }.steedos .form-table { width: " + options.width + "; border: solid 2px #000000; border-collapse: collapse; table-layout: fixed; }.steedosTable-item-field{ padding: 5px; }.steedos td{ border: solid 1px #000000; border-collapse: collapse; }.steedos th { border: 0px; border-collapse: collapse; padding: 0px; }.steedos .td-title{ padding: 4px 12px; }.steedos .td-field { padding: 4px 12px; }.instance-view .instance-name { text-align: center; font-weight: bolder; }.td-childfield { border-top: solid 1px #000000; border-right: solid 1px #000000; border-bottom: solid 1px #000000; padding: 0px; }.panel-heading{ padding: 4px 12px; font-weight: bold; color: #333; background-color: #f5f5f5; }.table-bordered tr:last-child th { border-bottom: none; }.table-bordered tr:last-child td { border-bottom: none; }.steedos-table th:first-child{ border-left: 0px !important; }.steedos-table td:first-child { border-left: 0px !important; }.steedos-table table thead .title { min-width: 50px; }.steedos-table th:last-child{ border-right: 0px !important; }.steedos-table td:last-child { border-right: 0px !important; }.steedos-table table .number { text-align: right; }.callout-default{ border-color: #D2D6DE; color: #333; background-color: #F1F1F1; font-weight: bold; }.instance-table .callout { margin: 0px; padding: 4px 12px; border-radius: 0px; border-left: none; }.approved{ color: green; }.rejected{ color: red; }.terminated{ color: black; }.reassigned{ color: black; }.retrieved{ color: black; }.trace-approve-talbe td { text-align: left; border: none; }.traces td table { width: 100%; }.approve-item .name{ width: 40%; }.approve-item .finish-date{ width: 35%; }.td-stepname{ padding: 4px 12px; }.td-approve td{ padding: 4px 12px; }.applicant-wrapper { font-weight: bolder; }";
  instanceHtml = InstanceReadOnlyTemplate.getInstanceHtml(current_user_info, ins.space, ins, options);
  instanceHtml = instanceHtml.replace('style="width: 100%;display: inline-table;"', 'style="border:0px;text-align: center;width:765px;"');
  instanceHtml = instanceHtml.replace('class="instance-table-name-td"', 'class="instance-table-name-td" style="width:' + options.width + ';border:0px"');
  instanceHtml = instanceHtml.replace('class="instance-name"', 'class="instance-name" style="width:' + options.width + '"');
  instanceHtml = instanceHtml.replace('class="table-page-body form-table"', 'class="table-page-body form-table" style="width:' + options.width + '"');
  instanceHtml = instanceHtml.replace('class="table table-condensed traces"', 'class="table table-condensed traces" style="width:' + options.width + ';border:solid 2.0px #000000"');
  instanceHtml = instanceHtml.replace('class="table-page-footer form-table no-border"', 'class="table-page-footer form-table no-border" style="border:0px;width:765px;"');
  instanceHtml = instanceHtml.replace(/class="td-title "/g, 'class="td-title" style="width:14%"');
  instanceHtml = instanceHtml.replace(/class="td-stepname"/g, 'class="td-stepname" style="width:' + 765 * 20 / 100 + 'px"');
  instanceHtml = instanceHtml.replace(/class="td-childfield"/g, 'class="td-childfield" style="padding:0px"');
  instanceHtml = instanceHtml.replace(/class="status approved"/g, 'class="status approved" style="color: green;"');
  instanceHtml = instanceHtml.replace(/class="status rejected"/g, 'class="status rejected" style="color: red;"');
  instanceHtml = instanceHtml.replace(/<table>/g, '<table style="width:100%;border:none">');
  instanceHtml = instanceHtml.replace(/<td class="name">/g, '<td class="name" style="width: 40%;">');
  instanceHtml = instanceHtml.replace(/<td class="finish-date">/g, '<td class="finish-date" style="width: 35%;">');
  instanceHtml = instanceHtml.replace(/inline-left'/g, "inline-left' style='display: inline;float: left;'");
  instanceHtml = instanceHtml.replace(/inline-right'/g, "inline-right' style='display: inline;float: right;'");
  instanceHtml = instanceHtml.replace(/pull-right'/g, "pull-right' style='float: right;'");
  return instanceHtml;
};

uuflowManager.getFlowCompanyId = function (flowId) {
  var ref;
  return (ref = db.flows.findOne(flowId, {
    fields: {
      company_id: 1
    }
  })) != null ? ref.company_id : void 0;
};

uuflowManager.create_instance = function (instance_from_client, user_info) {
  var appr_obj, approve_from_client, category, companyId, flow, flow_id, form, ins_obj, instance_flow_version, new_ins_id, now, permissions, space, space_id, space_user, space_user_org_info, start_step, trace_from_client, trace_obj, user_id;
  space_id = instance_from_client["space"];
  flow_id = instance_from_client["flow"];
  instance_flow_version = instance_from_client["flow_version"];
  user_id = user_info._id;
  trace_from_client = null;
  approve_from_client = null;

  if (instance_from_client["traces"] && instance_from_client["traces"][0]) {
    trace_from_client = instance_from_client["traces"][0];

    if (trace_from_client["approves"] && trace_from_client["approves"][0]) {
      approve_from_client = instance_from_client["traces"][0]["approves"][0];
    }
  }

  space = uuflowManager.getSpace(space_id);
  flow = uuflowManager.getFlow(flow_id);
  space_user = uuflowManager.getSpaceUser(space_id, user_id);
  space_user_org_info = uuflowManager.getSpaceUserOrgInfo(space_user);
  uuflowManager.isFlowEnabled(flow);
  uuflowManager.isFlowSpaceMatched(flow, space_id);
  form = uuflowManager.getForm(flow.form);
  permissions = permissionManager.getFlowPermissions(flow_id, user_id);

  if (!permissions.includes("add")) {
    throw new Meteor.Error('error!', "当前用户没有此流程的新建权限");
  }

  now = new Date();
  ins_obj = {};
  ins_obj._id = db.instances._makeNewID();
  ins_obj.space = space_id;
  ins_obj.flow = flow_id;
  ins_obj.flow_version = flow.current._id;
  ins_obj.form = flow.form;
  ins_obj.form_version = flow.current.form_version;
  ins_obj.name = flow.name;
  ins_obj.submitter = user_id;
  ins_obj.submitter_name = user_info.name;
  ins_obj.applicant = instance_from_client["applicant"] ? instance_from_client["applicant"] : user_id;
  ins_obj.applicant_name = instance_from_client["applicant_name"] ? instance_from_client["applicant_name"] : user_info.name;
  ins_obj.applicant_organization = instance_from_client["applicant_organization"] ? instance_from_client["applicant_organization"] : space_user.organization;
  ins_obj.applicant_organization_name = instance_from_client["applicant_organization_name"] ? instance_from_client["applicant_organization_name"] : space_user_org_info.organization_name;
  ins_obj.applicant_organization_fullname = instance_from_client["applicant_organization_fullname"] ? instance_from_client["applicant_organization_fullname"] : space_user_org_info.organization_fullname;
  ins_obj.applicant_company = instance_from_client["applicant_company"] ? instance_from_client["applicant_company"] : space_user.company_id;
  ins_obj.state = 'draft';
  ins_obj.code = '';
  ins_obj.is_archived = false;
  ins_obj.is_deleted = false;
  ins_obj.created = now;
  ins_obj.created_by = user_id;
  ins_obj.modified = now;
  ins_obj.modified_by = user_id;
  ins_obj.values = new Object();
  companyId = uuflowManager.getFlowCompanyId(flow_id);

  if (companyId) {
    ins_obj.company_id = companyId;
  }

  trace_obj = {};
  trace_obj._id = new Mongo.ObjectID()._str;
  trace_obj.instance = ins_obj._id;
  trace_obj.is_finished = false;
  start_step = _.find(flow.current.steps, function (step) {
    return step.step_type === 'start';
  });
  trace_obj.step = start_step._id;
  trace_obj.name = start_step.name;
  trace_obj.start_date = now;
  appr_obj = {};
  appr_obj._id = new Mongo.ObjectID()._str;
  appr_obj.instance = ins_obj._id;
  appr_obj.trace = trace_obj._id;
  appr_obj.is_finished = false;
  appr_obj.user = instance_from_client["applicant"] ? instance_from_client["applicant"] : user_id;
  appr_obj.user_name = instance_from_client["applicant_name"] ? instance_from_client["applicant_name"] : user_info.name;
  appr_obj.handler = user_id;
  appr_obj.handler_name = user_info.name;
  appr_obj.handler_organization = space_user.organization;
  appr_obj.handler_organization_name = space_user_org_info.organization_name;
  appr_obj.handler_organization_fullname = space_user_org_info.organization_fullname;
  appr_obj.type = 'draft';
  appr_obj.start_date = now;
  appr_obj.read_date = now;
  appr_obj.is_read = true;
  appr_obj.is_error = false;
  appr_obj.description = '';
  appr_obj.values = approve_from_client && approve_from_client["values"] ? approve_from_client["values"] : new Object();
  trace_obj.approves = [appr_obj];
  ins_obj.traces = [trace_obj];
  ins_obj.inbox_users = instance_from_client.inbox_users || [];
  ins_obj.current_step_name = start_step.name;

  if (flow.auto_remind === true) {
    ins_obj.auto_remind = true;
  }

  ins_obj.flow_name = flow.name;

  if (form.category) {
    category = uuflowManager.getCategory(form.category);

    if (category) {
      ins_obj.category_name = category.name;
      ins_obj.category = category._id;
    }
  }

  new_ins_id = db.instances.insert(ins_obj);
  return new_ins_id;
};

uuflowManager.getCurrentStepAutoSubmit = function (timeout_auto_submit, lines) {
  var timeout_line;

  if (timeout_auto_submit && lines) {
    timeout_line = _.find(lines, function (l) {
      return l.timeout_line === true;
    });

    if (timeout_line) {
      return true;
    }
  }

  return false;
};

uuflowManager.getDueDate = function (hours) {
  var due_time;

  if (hours) {
    due_time = new Date().getTime() + 1000 * 60 * 60 * hours;
    return new Date(due_time);
  }

  return void 0;
};

uuflowManager.submit_instance = function (instance_from_client, user_info) {
  var applicant, applicant_id, applicant_org_info, approve, approve_id, attachments, checkApplicant, checkUsers, current_user, description, flow, flow_has_upgrade, flow_id, form, instance, instance_id, instance_name, instance_traces, lang, newTrace, nextSteps, nextTrace, next_step, next_step_users, next_steps, permissions, setObj, space, space_id, space_user, space_user_org_info, start_step, step, submitter_id, trace, trace_id, traces, upObj, updated_values, user, values;
  current_user = user_info._id;
  lang = "en";

  if (user_info.locale === 'zh-cn') {
    lang = 'zh-CN';
  }

  instance_id = instance_from_client["_id"];
  trace_id = instance_from_client["traces"][0]["_id"];
  approve_id = instance_from_client["traces"][0]["approves"][0]["_id"];
  values = instance_from_client["traces"][0]["approves"][0]["values"];

  if (!values) {
    values = new Object();
  }

  if (!instance_from_client["applicant"]) {
    throw new Meteor.Error('error!', "请选择提交人");
  }

  applicant_id = instance_from_client["applicant"];
  submitter_id = instance_from_client["submitter"];
  next_steps = instance_from_client["traces"][0]["approves"][0]["next_steps"];
  attachments = instance_from_client["traces"][0]["approves"][0]["attachments"];
  description = instance_from_client["traces"][0]["approves"][0]["description"];
  instance = uuflowManager.getInstance(instance_id);
  space_id = instance.space;
  flow_id = instance.flow;
  space = uuflowManager.getSpace(space_id);
  checkApplicant = uuflowManager.getSpaceUser(space_id, applicant_id);
  flow = uuflowManager.getFlow(flow_id);
  instance_name = instance_from_client["name"];
  uuflowManager.isInstanceDraft(instance, lang);
  space_user = uuflowManager.getSpaceUser(space_id, current_user);
  space_user_org_info = uuflowManager.getSpaceUserOrgInfo(space_user);
  uuflowManager.isInstanceSubmitter(instance, current_user);
  uuflowManager.isFlowEnabled(flow);
  permissions = permissionManager.getFlowPermissions(flow_id, current_user);

  if (!permissions.includes("add")) {
    throw new Meteor.Error('error!', "该提交人没有提交此申请单的权限。");
  }

  trace = instance_from_client["traces"][0];
  step = uuflowManager.getStep(instance, flow, trace["step"]);
  approve = trace["approves"][0];
  form = db.forms.findOne(instance.form);
  start_step = _.find(flow.current.steps, function (step) {
    return step.step_type === 'start';
  });
  instance_traces = instance.traces;
  instance_traces[0]["approves"][0].description = description;
  setObj = new Object();
  flow_has_upgrade = false;

  if (applicant_id === instance.applicant) {
    if (instance.flow_version === flow.current._id) {
      instance_traces[0]["approves"][0].judge = "submitted";

      if (next_steps) {
        instance_traces[0]["approves"][0].next_steps = next_steps;
      }

      setObj.modified = new Date();
      setObj.modified_by = current_user;
    } else {
      flow_has_upgrade = true;
      setObj.flow_version = flow.current._id;
      setObj.form_version = flow.current.form_version;
      setObj.modified = new Date();
      setObj.modified_by = current_user;
      instance_traces[0].step = start_step._id;
      instance_traces[0].name = start_step.name;
      instance_traces[0]["approves"][0].judge = "submitted";
    }
  } else {
    user = uuflowManager.getUser(applicant_id);
    applicant = uuflowManager.getSpaceUser(space_id, applicant_id);
    applicant_org_info = uuflowManager.getSpaceUserOrgInfo(applicant);
    setObj.applicant = applicant_id;
    setObj.applicant_name = user.name;
    setObj.applicant_organization = applicant_org_info["organization"];
    setObj.applicant_organization_name = applicant_org_info["organization_name"];
    setObj.applicant_organization_fullname = applicant_org_info["organization_fullname"];
    setObj.applicant_company = applicant["company_id"];
    instance_traces[0]["approves"][0].user = applicant_id;
    instance_traces[0]["approves"][0].user_name = user.name;
    instance_traces[0]["approves"][0].judge = "submitted";

    if (instance.flow_version === flow.current._id) {
      if (next_steps) {
        instance_traces[0]["approves"][0].next_steps = next_steps;
        setObj.modified = new Date();
        setObj.modified_by = current_user;
      }
    } else {
      flow_has_upgrade = true;
      setObj.flow_version = flow.current._id;
      setObj.form_version = flow.current.form_version;
      setObj.modified = new Date();
      setObj.modified_by = current_user;
      instance_traces[0].step = start_step._id;
      instance_traces[0].name = start_step.name;
    }
  }

  instance_traces[0]["approves"][0].values = uuflowManager.getApproveValues(values, step.permissions, instance.form, instance.form_version);
  setObj.traces = instance_traces;
  db.instances.update({
    _id: instance_id
  }, {
    $set: setObj
  });

  if (flow_has_upgrade) {
    return {
      alerts: TAPi18n.__('flow.point_upgraded', {}, lang)
    };
  }

  instance = db.instances.findOne(instance_id);
  uuflowManager.isInstanceDraft(instance, lang);
  traces = instance.traces;
  upObj = new Object();

  if (!approve["next_steps"] || approve["next_steps"].length === 0) {
    throw new Meteor.Error('error!', "还未指定下一步和处理人，提交失败");
  } else {
    if (approve["next_steps"].length > 1) {
      throw new Meteor.Error('error!', "不能指定多个后续步骤");
    } else {
      nextSteps = uuflowManager.getNextSteps(instance, flow, step, "");

      _.each(approve["next_steps"], function (approve_next_step) {
        if (!nextSteps.includes(approve_next_step["step"])) {
          throw new Meteor.Error('error!', "下一步步骤不合法");
        }
      });
    }
  }

  _.each(approve["next_steps"][0]["users"], function (next_step_user) {
    return uuflowManager.getSpaceUser(space_id, next_step_user);
  });

  next_step = uuflowManager.getStep(instance, flow, approve["next_steps"][0]["step"]);

  if (next_step.step_type === "end") {
    traces[0]["approves"][0].is_finished = true;
    traces[0]["approves"][0].finish_date = new Date();
    traces[0]["approves"][0].cost_time = traces[0]["approves"][0].finish_date - traces[0]["approves"][0].start_date;
    traces[0].is_finished = true;
    traces[0].judge = "submitted";
    traces[0].finish_date = new Date();
    newTrace = new Object();
    newTrace._id = new Mongo.ObjectID()._str;
    newTrace.instance = instance_id;
    newTrace.previous_trace_ids = [trace["_id"]];
    newTrace.is_finished = true;
    newTrace.step = next_step._id;
    newTrace.name = next_step.name;
    newTrace.start_date = new Date();
    newTrace.finish_date = new Date();
    upObj.submit_date = new Date();
    upObj.state = "completed";
    upObj.values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));
    upObj.code = flow.current_no + 1 + "";
    instance.code = upObj.code;
    instance.values = upObj.values;
    upObj.name = uuflowManager.getInstanceName(instance);
    upObj.modified = new Date();
    upObj.modified_by = current_user;
    upObj.inbox_users = [];
    upObj.outbox_users = _.uniq([current_user, traces[0]["approves"][0]["user"]]);
    traces.push(newTrace);
    upObj.traces = traces;
    upObj.finish_date = new Date();
    upObj.current_step_name = next_step.name;
    upObj.final_decision = "approved";
    upObj.current_step_auto_submit = false;
  } else {
    next_step_users = approve["next_steps"][0]["users"];

    if (!next_step_users || next_step_users.length === 0) {
      throw new Meteor.Error('error!', "未指定下一步处理人");
    } else {
      if (next_step_users.length > 1 && next_step.step_type !== "counterSign") {
        throw new Meteor.Error('error!', "不能指定多个处理人");
      } else {
        checkUsers = getHandlersManager.getHandlers(instance_id, approve["next_steps"][0]["step"]);

        if (_.difference(next_step_users, checkUsers).length > 0) {
          throw new Meteor.Error('error!', "指定的下一步处理人有误");
        } else {
          traces[0]["approves"][0].is_finished = true;
          traces[0]["approves"][0].finish_date = new Date();
          traces[0]["approves"][0].cost_time = traces[0]["approves"][0].finish_date - traces[0]["approves"][0].start_date;
          traces[0].is_finished = true;
          traces[0].finish_date = new Date();
          traces[0].judge = "submitted";
          nextTrace = new Object();
          nextTrace._id = new Mongo.ObjectID()._str;
          nextTrace.instance = instance_id;
          nextTrace.previous_trace_ids = [trace["_id"]];
          nextTrace.is_finished = false;
          nextTrace.step = next_step._id;
          nextTrace.name = next_step.name;
          nextTrace.start_date = new Date();
          nextTrace.due_date = uuflowManager.getDueDate(next_step.timeout_hours);
          nextTrace.approves = new Array();
          updated_values = uuflowManager.getUpdatedValues(uuflowManager.getInstance(instance_id));

          _.each(next_step_users, function (next_step_user_id, idx) {
            var agent, handler_id, handler_info, nextApprove, next_step_space_user, next_step_user_org_info;
            nextApprove = new Object();
            nextApprove._id = new Mongo.ObjectID()._str;
            user_info = uuflowManager.getUser(next_step_user_id);
            handler_id = next_step_user_id;
            handler_info = user_info;
            agent = uuflowManager.getAgent(space_id, next_step_user_id);

            if (agent) {
              next_step_users[idx] = agent;
              handler_id = agent;
              handler_info = uuflowManager.getUser(agent);
              nextApprove.agent = agent;
            }

            nextApprove.instance = instance_id;
            nextApprove.trace = nextTrace._id;
            nextApprove.is_finished = false;
            nextApprove.user = next_step_user_id;
            nextApprove.user_name = user_info.name;
            nextApprove.handler = handler_id;
            nextApprove.handler_name = handler_info.name;
            next_step_space_user = uuflowManager.getSpaceUser(space_id, handler_id);
            next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
            nextApprove.handler_organization = next_step_user_org_info["organization"];
            nextApprove.handler_organization_name = next_step_user_org_info["organization_name"];
            nextApprove.handler_organization_fullname = next_step_user_org_info["organization_fullname"];
            nextApprove.start_date = new Date();
            nextApprove.due_date = nextTrace.due_date;
            nextApprove.is_read = false;
            nextApprove.is_error = false;
            nextApprove.values = new Object();
            uuflowManager.setRemindInfo(updated_values, nextApprove);
            return nextTrace.approves.push(nextApprove);
          });

          upObj.name = instance_name;
          upObj.submit_date = new Date();
          upObj.state = "pending";
          upObj.values = updated_values;
          upObj.inbox_users = next_step_users;
          upObj.modified = new Date();
          upObj.modified_by = current_user;
          upObj.code = flow.current_no + 1 + "";
          instance.code = upObj.code;
          instance.values = upObj.values;
          upObj.name = uuflowManager.getInstanceName(instance);
          traces.push(nextTrace);
          upObj.traces = traces;
          upObj.outbox_users = [];
          upObj.current_step_name = next_step.name;
          upObj.current_step_auto_submit = uuflowManager.getCurrentStepAutoSubmit(flow.timeout_auto_submit, next_step.lines);
        }
      }
    }
  }

  upObj.keywords = uuflowManager.caculateKeywords(upObj.values, form, instance.form_version);
  db.instances.update({
    _id: instance_id
  }, {
    $set: upObj
  });
  db.flows.direct.update({
    _id: flow._id
  }, {
    $set: {
      current_no: flow.current_no + 1
    }
  });

  if (next_step.step_type !== "end") {
    instance = db.instances.findOne(instance_id);
    pushManager.send_instance_notification("first_submit_applicant", instance, "", user_info);
    pushManager.send_instance_notification("first_submit_inbox", instance, "", user_info);
  }

  return {};
};

uuflowManager.get_SpaceChangeSet = function (formids, is_admin, sync_token) {
  var changeSet, formids_ary;
  sync_token = new Date(Number(sync_token) * 1000);
  changeSet = new Object();
  changeSet.sync_token = new Date().getTime() / 1000;
  changeSet.inserts = {
    Spaces: [],
    Users: [],
    SpaceUsers: [],
    Organizations: [],
    Roles: [],
    Positions: [],
    Forms: [],
    Flows: [],
    Instances: []
  };
  changeSet.updates = {
    Spaces: [],
    Users: [],
    SpaceUsers: [],
    Organizations: [],
    Roles: [],
    Positions: [],
    Forms: [],
    Flows: [],
    Instances: []
  };
  changeSet.deletes = {
    Spaces: [],
    Users: [],
    SpaceUsers: [],
    Organizations: [],
    Roles: [],
    Positions: [],
    Forms: [],
    Flows: [],
    Instances: []
  };

  if (formids && formids.trim()) {
    formids_ary = formids.split(",");
    changeSet.inserts.Instances = db.instances.find({
      form: {
        $in: formids_ary
      },
      created: {
        $gt: sync_token
      }
    }).fetch();
    changeSet.updates.Instances = db.instances.find({
      form: {
        $in: formids_ary
      },
      created: {
        $lte: sync_token
      },
      modified: {
        $gt: sync_token
      }
    }).fetch();
    changeSet.deletes.Instances = db.deleted_instances.find({
      form: {
        $in: formids_ary
      },
      deleted: {
        $gt: sync_token
      }
    }, {
      fields: {
        _id: 1
      }
    }).fetch();
  } else if (is_admin && is_admin.trim()) {
    changeSet.inserts.Instances = db.instances.find({
      created: {
        $gt: sync_token
      }
    }).fetch();
    changeSet.updates.Instances = db.instances.find({
      created: {
        $lte: sync_token
      },
      modified: {
        $gt: sync_token
      }
    }).fetch();
    changeSet.deletes.Instances = db.deleted_instances.find({
      deleted: {
        $gt: sync_token
      }
    }, {
      fields: {
        _id: 1
      }
    }).fetch();
  }

  _.each(changeSet.inserts.Instances, function (ins) {
    var applicant, submitter;
    submitter = db.users.findOne({
      _id: ins.submitter
    }, {
      fields: {
        steedos_id: 1
      }
    });
    applicant = db.users.findOne({
      _id: ins.applicant
    }, {
      fields: {
        steedos_id: 1
      }
    });

    if (submitter) {
      ins.submitter_steedos_id = submitter.steedos_id;
    }

    if (applicant) {
      return ins.applicant_steedos_id = applicant.steedos_id;
    }
  });

  _.each(changeSet.updates.Instances, function (ins) {
    var applicant, submitter;
    submitter = db.users.findOne({
      _id: ins.submitter
    }, {
      fields: {
        steedos_id: 1
      }
    });
    applicant = db.users.findOne({
      _id: ins.applicant
    }, {
      fields: {
        steedos_id: 1
      }
    });

    if (submitter) {
      ins.submitter_steedos_id = submitter.steedos_id;
    }

    if (applicant) {
      return ins.applicant_steedos_id = applicant.steedos_id;
    }
  });

  return {
    ChangeSet: changeSet
  };
}; /* 文件催办
   根据instance.values.priority和instance.values.deadline给approve增加remind相关信息
   {
   	deadline: Date,
   	remind_date: Date,
   	reminded_count: Number
   }
    */

uuflowManager.setRemindInfo = function (values, approve) {
  var caculate_date, deadline, flow, ins, priority, remind_date, start_date;
  check(values, Object);
  check(approve, Object);
  check(approve.start_date, Date);
  remind_date = null;
  deadline = null;
  start_date = approve.start_date;

  if (values.priority && values.deadline) {
    check(values.priority, Match.OneOf("普通", "办文", "紧急", "特急"));
    deadline = new Date(values.deadline);

    if (deadline.toString() === "Invalid Date") {
      return;
    }

    priority = values.priority;

    if (priority === "普通") {
      remind_date = Steedos.caculateWorkingTime(start_date, 3);
    } else if (priority === "办文") {
      if (Steedos.caculatePlusHalfWorkingDay(start_date) > deadline) {
        remind_date = Steedos.caculatePlusHalfWorkingDay(start_date, true);
      } else if (Steedos.caculateWorkingTime(start_date, 1) > deadline) {
        caculate_date = function (base_date) {
          var plus_halfday_date;
          plus_halfday_date = Steedos.caculatePlusHalfWorkingDay(base_date);

          if (plus_halfday_date > deadline) {
            remind_date = base_date;
          } else {
            caculate_date(Steedos.caculatePlusHalfWorkingDay(base_date, true));
          }
        };

        caculate_date(start_date);
      } else {
        remind_date = Steedos.caculateWorkingTime(start_date, 1);
      }
    } else if (priority === "紧急" || priority === "特急") {
      if (Steedos.caculatePlusHalfWorkingDay(start_date) > deadline) {
        remind_date = Steedos.caculatePlusHalfWorkingDay(start_date, true);
      } else if (Steedos.caculateWorkingTime(start_date, 1) > deadline) {
        caculate_date = function (base_date) {
          var plus_halfday_date;
          plus_halfday_date = Steedos.caculatePlusHalfWorkingDay(base_date);

          if (plus_halfday_date > deadline) {
            remind_date = base_date;
          } else {
            caculate_date(Steedos.caculatePlusHalfWorkingDay(base_date, true));
          }
        };

        caculate_date(start_date);
      } else {
        remind_date = Steedos.caculatePlusHalfWorkingDay(start_date);
      }

      ins = db.instances.findOne(approve.instance);

      if (ins.state === 'draft') {
        flow = db.flows.findOne({
          _id: ins.flow
        }, {
          fields: {
            current_no: 1
          }
        });
        ins.code = flow.current_no + 1 + '';
      }

      ins.values = values;
      uuflowManager.sendRemindSMS(uuflowManager.getInstanceName(ins), deadline, [approve.user], ins.space, ins._id);
    }
  } else {
    remind_date = Steedos.caculateWorkingTime(start_date, 3);
  }

  approve.deadline = deadline;
  approve.remind_date = remind_date;
  approve.reminded_count = 0;
};

uuflowManager.sendRemindSMS = function (ins_name, deadline, users_id, space_id, ins_id) {
  var name, ref, send_users, skip_users;
  check(ins_name, String);
  check(deadline, Date);
  check(users_id, Array);
  check(space_id, String);
  check(ins_id, String);
  skip_users = ((ref = Meteor.settings.remind) != null ? ref.skip_users : void 0) || [];
  send_users = [];

  _.each(users_id, function (uid) {
    if (!skip_users.includes(uid)) {
      return send_users.push(uid);
    }
  });

  name = ins_name.length > 15 ? ins_name.substr(0, 12) + '...' : ins_name;
  return db.users.find({
    _id: {
      $in: _.uniq(send_users)
    },
    mobile: {
      $exists: true
    }
  }, {
    fields: {
      mobile: 1,
      utcOffset: 1,
      locale: 1,
      name: 1
    }
  }).forEach(function (user) {
    var lang, notification, params, payload, utcOffset;
    utcOffset = user.hasOwnProperty('utcOffset') ? user.utcOffset : 8;
    params = {
      instance_name: name,
      deadline: moment(deadline).utcOffset(utcOffset).format('MM-DD HH:mm')
    };
    lang = 'en';

    if (user.locale === 'zh-cn') {
      lang = 'zh-CN';
    }

    SMSQueue.send({
      Format: 'JSON',
      Action: 'SingleSendSms',
      ParamString: JSON.stringify(params),
      RecNum: user.mobile,
      SignName: 'OA系统',
      TemplateCode: 'SMS_67200967',
      msg: TAPi18n.__('sms.remind.template', {
        instance_name: ins_name,
        deadline: params.deadline,
        open_app_url: Meteor.absoluteUrl() + ("workflow.html?space_id=" + space_id + "&ins_id=" + ins_id)
      }, lang)
    });
    notification = new Object();
    notification["createdAt"] = new Date();
    notification["createdBy"] = '<SERVER>';
    notification["from"] = 'workflow';
    notification['title'] = user.name;
    notification['text'] = TAPi18n.__('instance.push.body.remind', {
      instance_name: ins_name,
      deadline: params.deadline
    }, lang);
    payload = new Object();
    payload["space"] = space_id;
    payload["instance"] = ins_id;
    payload["host"] = Meteor.absoluteUrl().substr(0, Meteor.absoluteUrl().length - 1);
    payload["requireInteraction"] = true;
    notification["payload"] = payload;
    notification['query'] = {
      userId: user._id,
      appName: 'workflow'
    };
    return Push.send(notification);
  });
};

uuflowManager.checkMainAttach = function (instance_id, name) {
  var file_name, ins, main, main_name_split, new_ins_name;
  main = cfs.instances.findOne({
    'metadata.instance': instance_id,
    'metadata.main': true,
    'metadata.current': true
  });

  if (main) {
    ins = db.instances.findOne({
      _id: instance_id
    }, {
      fields: {
        name: 1
      }
    });
    new_ins_name = name || ins.name;
    new_ins_name = new_ins_name.replace(/\r/g, "").replace(/\n/g, "");
    new_ins_name = new_ins_name.replace(/\?|\*|\:|\"|\<|\>|\\|\/|\|/g, "");
    main_name_split = main.name().split('.');
    main_name_split.pop();

    if (new_ins_name !== main_name_split.join("")) {
      file_name = new_ins_name + "." + main.extension();
      return main.update({
        $set: {
          'original.name': file_name,
          'copies.instances.name': file_name
        }
      });
    }
  }
};

uuflowManager.caculateKeywords = function (values, form, form_version) {
  var form_v, keywords;

  if (_.isEmpty(values)) {
    return "";
  }

  keywords = [];
  form_v = null;

  if (form_version === form.current._id) {
    form_v = form.current;
  } else {
    form_v = _.find(form.historys, function (form_h) {
      return form_version === form_h._id;
    });
  }

  _.each(form_v.fields, function (field) {
    var multiValue;

    if (field.is_searchable) {
      if (field.type === 'input' || field.type === 'email' || field.type === 'url' || field.type === 'number' || field.type === 'select' || field.type === 'radio') {
        if (values[field.code]) {
          return keywords.push(values[field.code]);
        }
      } else if (field.type === 'multiSelect') {
        if (values[field.code]) {
          return keywords.push(values[field.code]);
        }
      } else if (field.type === 'user' || field.type === 'group') {
        if (field.is_multiselect === true) {
          multiValue = values[field.code];

          if (_.isArray(multiValue)) {
            return _.each(multiValue, function (singleV) {
              if (singleV && singleV['name']) {
                return keywords.push(singleV['name']);
              }
            });
          }
        } else {
          if (values[field.code] && values[field.code]['name']) {
            return keywords.push(values[field.code]['name']);
          }
        }
      }
    } else if (field.type === 'table') {
      if (values[field.code]) {
        return _.each(values[field.code], function (s_value) {
          return _.each(field.fields, function (s_field) {
            if (s_field.is_searchable) {
              if (s_field.type === 'input' || s_field.type === 'email' || s_field.type === 'url' || s_field.type === 'number' || s_field.type === 'select' || s_field.type === 'radio') {
                if (s_value[s_field.code]) {
                  return keywords.push(s_value[s_field.code]);
                }
              } else if (s_field.type === 'multiSelect') {
                if (s_value[s_field.code]) {
                  return keywords.push(s_value[s_field.code]);
                }
              } else if (s_field.type === 'user' || s_field.type === 'group') {
                if (s_field.is_multiselect === true) {
                  multiValue = s_value[s_field.code];

                  if (_.isArray(multiValue)) {
                    return _.each(multiValue, function (singleV) {
                      if (singleV && singleV['name']) {
                        return keywords.push(singleV['name']);
                      }
                    });
                  }
                } else {
                  if (s_value[s_field.code] && s_value[s_field.code]['name']) {
                    return keywords.push(s_value[s_field.code]['name']);
                  }
                }
              }
            }
          });
        });
      }
    } else if (field.type === 'section') {
      return _.each(field.fields, function (s_field) {
        if (s_field.is_searchable) {
          if (s_field.type === 'input' || s_field.type === 'email' || s_field.type === 'url' || s_field.type === 'number' || s_field.type === 'select' || s_field.type === 'radio') {
            if (values[s_field.code]) {
              return keywords.push(values[s_field.code]);
            }
          } else if (s_field.type === 'multiSelect') {
            if (values[s_field.code]) {
              return keywords.push(values[s_field.code]);
            }
          } else if (s_field.type === 'user' || s_field.type === 'group') {
            if (s_field.is_multiselect === true) {
              multiValue = values[s_field.code];

              if (_.isArray(multiValue)) {
                return _.each(multiValue, function (singleV) {
                  if (singleV && singleV['name']) {
                    return keywords.push(singleV['name']);
                  }
                });
              }
            } else {
              if (values[s_field.code] && values[s_field.code]['name']) {
                return keywords.push(values[s_field.code]['name']);
              }
            }
          }
        }
      });
    }
  });

  return keywords.join(" ");
};

uuflowManager.checkValueFieldsRequire = function (values, form, form_version) {
  var form_v, require_but_empty_fields;
  values = values || {};
  require_but_empty_fields = [];
  form_v = null;

  if (form_version === form.current._id) {
    form_v = form.current;
  } else {
    form_v = _.find(form.historys, function (form_h) {
      return form_version === form_h._id;
    });
  }

  _.each(form_v.fields, function (field) {
    if (field.type !== 'table') {
      if (field.is_required && _.isEmpty(values[field.code])) {
        return require_but_empty_fields.push(field.name || field.code);
      }
    } else if (field.type === 'table') {
      if (_.isEmpty(values[field.code])) {
        return _.each(field.fields, function (s_field) {
          if (s_field.is_required) {
            return require_but_empty_fields.push(s_field.name || s_field.code);
          }
        });
      } else {
        return _.each(values[field.code], function (s_value) {
          return _.each(field.fields, function (s_field) {
            if (s_field.is_required && _.isEmpty(s_value[s_field.code])) {
              return require_but_empty_fields.push(s_field.name || s_field.code);
            }
          });
        });
      }
    }
  });

  return require_but_empty_fields;
};

uuflowManager.triggerRecordInstanceQueue = function (ins_id, record_ids, step_name) {
  var newObj, ref;

  if ((ref = Meteor.settings.cron) != null ? ref.instancerecordqueue_interval : void 0) {
    newObj = {
      info: {
        instance_id: ins_id,
        records: record_ids,
        step_name: step_name,
        instance_finish_date: new Date()
      },
      sent: false,
      sending: 0,
      createdAt: new Date(),
      createdBy: '<SERVER>'
    };
    db.instance_record_queue.insert(newObj);
  }
};

uuflowManager.distributedInstancesRemind = function (instance) {
  var current_trace, e, flow, lang, next_approves, next_step, next_step_id, notification, original_flow, original_instacne, original_instacne_id, original_user, payload, ref, ref1, ref2;

  if ((instance != null ? (ref = instance.distribute_from_instances) != null ? ref.length : void 0 : void 0) > 0) {
    flow = db.flows.findOne({
      _id: instance != null ? instance.flow : void 0
    });
    current_trace = instance["traces"].pop();

    if ((instance != null ? instance.state : void 0) === "draft") {
      next_approves = current_trace != null ? current_trace.approves : void 0;

      if ((next_approves != null ? next_approves.length : void 0) === 1) {
        next_step = (ref1 = next_approves[0]) != null ? ref1.next_steps[0] : void 0;
        next_step_id = next_step != null ? next_step.step : void 0;
      }
    } else {
      next_step_id = current_trace != null ? current_trace.step : void 0;
    }

    if (next_step_id) {
      next_step = uuflowManager.getStep(instance, flow, next_step_id);

      if ((next_step != null ? next_step.step_type : void 0) === "end") {
        original_instacne_id = instance != null ? (ref2 = instance.distribute_from_instances) != null ? ref2.pop() : void 0 : void 0;
        original_instacne = db.instances.findOne({
          _id: original_instacne_id
        }, {
          fields: {
            flow: 1,
            name: 1,
            space: 1,
            created_by: 1
          }
        });
        original_flow = db.flows.findOne({
          _id: original_instacne != null ? original_instacne.flow : void 0
        }, {
          fields: {
            distribute_end_notification: 1
          }
        });

        if ((original_flow != null ? original_flow.distribute_end_notification : void 0) === true) {
          try {
            original_user = db.users.findOne({
              _id: instance != null ? instance.created_by : void 0
            });
            lang = 'en';

            if ((original_user != null ? original_user.locale : void 0) === 'zh-cn') {
              lang = 'zh-CN';
            }

            notification = new Object();
            notification["createdAt"] = new Date();
            notification["createdBy"] = '<SERVER>';
            notification["from"] = 'workflow';
            notification['title'] = original_user.name;
            notification['text'] = TAPi18n.__('instance.push.body.distribute_remind', {
              instance_name: instance != null ? instance.name : void 0
            }, lang);
            payload = new Object();
            payload["space"] = original_instacne != null ? original_instacne.space : void 0;
            payload["instance"] = original_instacne != null ? original_instacne._id : void 0;
            payload["host"] = Meteor.absoluteUrl().substr(0, Meteor.absoluteUrl().length - 1);
            payload["requireInteraction"] = true;
            notification["payload"] = payload;
            notification['query'] = {
              userId: original_user._id,
              appName: 'workflow'
            };
            Push.send(notification);
          } catch (error) {
            e = error;
            console.error(e.stack);
          }
        }
      }
    }
  }
};

uuflowManager.getAgent = function (spaceId, fromId) {
  var now, r;
  now = new Date();
  r = db.process_delegation_rules.findOne({
    space: spaceId,
    from: fromId,
    enabled: true,
    start_time: {
      $lte: now
    },
    end_time: {
      $gte: now
    }
  });
  return r != null ? r.to : void 0;
};

uuflowManager.cancelProcessDelegation = function (spaceId, toId) {
  var ccQuery, query;
  query = {
    space: spaceId,
    inbox_users: toId
  };
  query.traces = {
    $elemMatch: {
      is_finished: false,
      approves: {
        $elemMatch: {
          is_finished: false,
          agent: toId
        }
      }
    }
  };
  db.instances.find(query, {
    fields: {
      inbox_users: 1,
      traces: 1,
      state: 1
    }
  }).forEach(function (ins) {
    var trace;
    trace = _.find(ins.traces, function (t) {
      return t.is_finished === false;
    });
    return _.each(trace.approves, function (a, idx) {
      var idxStr, next_step_space_user, next_step_user_org_info, setObj;

      if (a.is_finished === false) {
        if (a.agent === toId) {
          next_step_space_user = uuflowManager.getSpaceUser(spaceId, a.user);
          next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
          idxStr = "traces.$.approves." + idx + ".";
          setObj = {};
          setObj[idxStr + 'handler'] = a.user;
          setObj[idxStr + 'handler_name'] = a.user_name;
          setObj[idxStr + 'handler_organization'] = next_step_user_org_info["organization"];
          setObj[idxStr + 'handler_organization_name'] = next_step_user_org_info["organization_name"];
          setObj[idxStr + 'handler_organization_fullname'] = next_step_user_org_info["organization_fullname"];
          setObj[idxStr + 'agent'] = null;
          ins.inbox_users.splice(ins.inbox_users.indexOf(toId), 1, a.user);
          setObj.inbox_users = ins.inbox_users;

          if (ins.state === 'draft') {
            setObj.submitter = a.user;
            setObj.submitter_name = a.user_name;
          }

          db.instances.update({
            _id: ins._id,
            inbox_users: toId,
            'traces._id': a.trace
          }, {
            $set: setObj
          });
          pushManager.send_message_to_specifyUser('current_user', a.user);
          return pushManager.send_message_to_specifyUser('current_user', toId);
        } else if (a.user === toId) {
          return db.instances.update({
            _id: ins._id
          }, {
            $addToSet: {
              inbox_users: toId
            }
          });
        }
      }
    });
  });
  ccQuery = {
    space: spaceId,
    cc_users: toId
  };
  ccQuery['traces.approves'] = {
    $elemMatch: {
      is_finished: false,
      agent: toId,
      type: 'cc'
    }
  };
  return db.instances.find(ccQuery, {
    fields: {
      cc_users: 1,
      traces: 1
    }
  }).forEach(function (ins) {
    return _.each(ins.traces, function (t) {
      return _.each(t.approves, function (a, idx) {
        var idxStr, next_step_space_user, next_step_user_org_info, setObj;

        if (a.is_finished === false && a.type === 'cc') {
          if (a.agent === toId) {
            next_step_space_user = uuflowManager.getSpaceUser(spaceId, a.user);
            next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
            idxStr = "traces.$.approves." + idx + ".";
            setObj = {};
            setObj[idxStr + 'handler'] = a.user;
            setObj[idxStr + 'handler_name'] = a.user_name;
            setObj[idxStr + 'handler_organization'] = next_step_user_org_info["organization"];
            setObj[idxStr + 'handler_organization_name'] = next_step_user_org_info["organization_name"];
            setObj[idxStr + 'handler_organization_fullname'] = next_step_user_org_info["organization_fullname"];
            setObj[idxStr + 'agent'] = null;
            ins.cc_users.splice(ins.cc_users.indexOf(toId), 1, a.user);
            setObj.cc_users = ins.cc_users;
            db.instances.update({
              _id: ins._id,
              cc_users: toId,
              'traces._id': a.trace
            }, {
              $set: setObj
            });
            pushManager.send_message_to_specifyUser('current_user', a.user);
            return pushManager.send_message_to_specifyUser('current_user', toId);
          } else if (a.user === toId) {
            return db.instances.update({
              _id: ins._id
            }, {
              $addToSet: {
                cc_users: toId
              }
            });
          }
        }
      });
    });
  });
};

uuflowManager.timeoutAutoSubmit = function (ins_id) {
  var query;
  query = {};

  if (ins_id) {
    check(ins_id, String);
    query._id = ins_id;
  }

  query.state = 'pending';
  query.current_step_auto_submit = true;
  query.traces = {
    $elemMatch: {
      is_finished: false,
      due_date: {
        $lte: new Date()
      }
    }
  };
  db.instances.find(query).forEach(function (ins) {
    var approve_from_client, e, flow, flow_id, instance_id, judge, nextStep, nextStepId, nextSteps, nextUserIds, step, step_type, toLine, trace;

    try {
      flow_id = ins.flow;
      instance_id = ins._id;
      trace = _.last(ins.traces);
      flow = uuflowManager.getFlow(flow_id);
      step = uuflowManager.getStep(ins, flow, trace.step);
      step_type = step.step_type;
      toLine = _.find(step.lines, function (l) {
        return l.timeout_line === true;
      });
      nextStepId = toLine.to_step;
      nextStep = uuflowManager.getStep(ins, flow, nextStepId);

      if (nextStep.step_type === 'condition') {
        nextSteps = uuflowManager.getNextSteps(ins, flow, nextStep, "");
        console.error(nextSteps);
        nextStepId = nextSteps[0];
      }

      nextUserIds = getHandlersManager.getHandlers(instance_id, nextStepId);
      judge = "submitted";

      if (step_type === "sign") {
        judge = "approved";
      }

      approve_from_client = {
        'instance': instance_id,
        'trace': trace._id,
        'judge': judge,
        'next_steps': [{
          'step': nextStepId,
          'users': nextUserIds
        }]
      };
      return _.each(trace.approves, function (a) {
        var current_user_info, updatedInstance;
        approve_from_client._id = a._id;
        current_user_info = db.users.findOne(a.handler, {
          services: 0
        });
        updatedInstance = uuflowManager.workflow_engine(approve_from_client, current_user_info, current_user_info._id, true);
        return pushManager.send_instance_notification("auto_submit_pending_inbox", updatedInstance, "", current_user_info);
      });
    } catch (error) {
      e = error;
      console.error('AUTO TIMEOUT_AUTO_SUBMIT ERROR: ');
      return console.error(e.stack);
    }
  });
  return true;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"push_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/server/lib/push_manager.coffee                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ref, ref1, ref2, ref3;
pushManager = {
  bqq_app_id: "200626779",
  imo_app_cid: (ref = Meteor.settings.imo) != null ? ref.appcid : void 0,
  imo_app_uid: (ref1 = Meteor.settings.imo) != null ? ref1.appuid : void 0,
  imo_sync_app_key: (ref2 = Meteor.settings.imo) != null ? ref2.sync_app_key : void 0,
  imo_push_app_key: (ref3 = Meteor.settings.imo) != null ? ref3.push_app_key : void 0
};

pushManager.get_to_users = function (send_from, instance, cc_user_ids, current_user_info) {
  var applicant, approve_user_ids, remove_users, to_users;
  to_users = new Array();

  if (['first_submit_applicant'].includes(send_from)) {
    if (instance.applicant !== instance.submitter) {
      applicant = db.users.findOne(instance.applicant);
      to_users.push(applicant);
    }
  } else if (['submit_terminate_approve', 'submit_completed_approve', 'submit_pending_rejected_approve', 'approved_completed_approve', 'rejected_completed_approve'].includes(send_from)) {
    remove_users = new Array();
    remove_users.push(instance.applicant);
    remove_users.push(instance.submitter);
    approve_user_ids = _.difference(instance.outbox_users, remove_users);
    to_users = db.users.find({
      _id: {
        $in: approve_user_ids
      }
    }).fetch();
  } else if (['reassign_new_inbox_users', 'submit_pending_rejected_inbox', 'submit_pending_inbox', 'first_submit_inbox', 'return_pending_inbox'].includes(send_from)) {
    to_users = db.users.find({
      _id: {
        $in: instance.inbox_users
      }
    }).fetch();
  } else if (['submit_completed_applicant', 'approved_completed_applicant', 'rejected_completed_applicant', 'monitor_delete_applicant', 'submit_terminate_applicant', 'submit_pending_rejected_applicant', 'submit_pending_rejected_applicant_inbox'].includes(send_from)) {
    applicant = db.users.findOne(instance.applicant);
    to_users.push(applicant);
  } else if (['trace_approve_cc'].includes(send_from) && cc_user_ids) {
    to_users = db.users.find({
      _id: {
        $in: cc_user_ids
      }
    }).fetch();
  } else if (['trace_approve_cc_submit'].includes(send_from) && cc_user_ids) {
    to_users = db.users.find({
      _id: {
        $in: cc_user_ids
      }
    }).fetch();
  } else if (['auto_submit_pending_inbox'].includes(send_from)) {
    to_users = [current_user_info];
  }

  return to_users;
};

pushManager.get_body = function (parameters, lang) {
  var applicant_name, approves_description, body, currentStep_type, current_step_name, current_user_name, description, email_approve_type, email_description, email_final_decision, final_decision, from_username, href, instance_name, lastApprove_judge, lastApprove_usersname, last_approve_judge, nextApprove_usersname, nextStep_type, push_approve_type, push_final_decision, send_from, state, to_username, url_approve_type;

  if (lang == null) {
    lang = "zh-CN";
  }

  send_from = parameters["send_from"];
  applicant_name = parameters["applicant_name"];
  instance_name = parameters["instance_name"];
  to_username = parameters["to_username"];
  href = parameters["href"];
  final_decision = parameters["final_decision"];
  description = parameters["description"];
  state = parameters["state"];
  from_username = parameters["from_username"];
  current_step_name = parameters["current_step_name"];
  nextApprove_usersname = parameters["nextApprove_usersname"];
  nextStep_type = parameters["nextStep_type"];
  approves_description = parameters["approves_description"];
  lastApprove_judge = parameters["lastApprove_judge"];
  lastApprove_usersname = parameters["lastApprove_usersname"];
  current_user_name = parameters["current_user_name"];
  currentStep_type = parameters["currentStep_type"];
  push_final_decision = "";
  email_final_decision = "";
  email_description = "";

  if (!final_decision) {
    push_final_decision = TAPi18n.__('instance.push.final_decision_nil', {}, lang);
    email_final_decision = TAPi18n.__('instance.email.final_decision_nil', {}, lang);
  } else {
    if ("approved" === final_decision) {
      push_final_decision = TAPi18n.__('instance.push.final_decision_approved', {}, lang);
      email_final_decision = TAPi18n.__('instance.email.final_decision_approved', {}, lang);
    } else if ("rejected" === final_decision) {
      push_final_decision = TAPi18n.__('instance.push.final_decision_rejected', {}, lang);
      email_final_decision = TAPi18n.__('instance.email.final_decision_rejected', {}, lang);
      email_description = TAPi18n.__('instance.email.body.email_description', {
        description: description
      }, lang);
    } else {
      push_final_decision = TAPi18n.__('instance.push.final_decision_nil', {}, lang);
      email_final_decision = TAPi18n.__('instance.email.final_decision_nil', {}, lang);
    }
  }

  email_approve_type = null;
  url_approve_type = null;
  push_approve_type = null;

  if (['submit', 'start'].includes(nextStep_type)) {
    email_approve_type = TAPi18n.__('instance.email.body.input', {}, lang);
    url_approve_type = TAPi18n.__('instance.email.body.url_input', {}, lang);
    push_approve_type = TAPi18n.__('instance.push.body.input', {}, lang);
  } else if (['sign', 'counterSign'].includes(nextStep_type)) {
    email_approve_type = TAPi18n.__('instance.email.body.approval', {}, lang);
    url_approve_type = TAPi18n.__('instance.email.body.url_approval', {}, lang);
    push_approve_type = TAPi18n.__('instance.push.body.approval', {}, lang);
  }

  last_approve_judge = null;

  if ("submitted" === lastApprove_judge) {
    last_approve_judge = TAPi18n.__('instance.email.body.judge_submitted', {}, lang);
  } else if ("approved" === lastApprove_judge) {
    last_approve_judge = TAPi18n.__('instance.email.body.judge_approved', {}, lang);
  }

  body = new Object();

  if ("first_submit_applicant" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.first_submit_applicant', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);

    if (!approves_description) {
      body["email"] = TAPi18n.__('instance.email.body.first_submit_applicant', {
        instance_name: instance_name,
        to_username: to_username,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description
      }, lang);
    } else {
      body["email"] = TAPi18n.__('instance.email.body.first_submit_applicant_beApproveDescription', {
        instance_name: instance_name,
        to_username: to_username,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description,
        approves_description: approves_description
      }, lang);
    }
  } else if ("first_submit_inbox" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.first_submit_inbox', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      approve_type: push_approve_type
    }, lang);

    if (!approves_description) {
      body["email"] = TAPi18n.__('instance.email.body.first_submit_inbox', {
        instance_name: instance_name,
        to_username: to_username,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description,
        approve_type: email_approve_type,
        url_approve_type: url_approve_type
      }, lang);
    } else {
      body["email"] = TAPi18n.__('instance.email.body.first_submit_inbox_beApproveDescription', {
        instance_name: instance_name,
        to_username: to_username,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description,
        approve_type: email_approve_type,
        url_approve_type: url_approve_type,
        approves_description: approves_description
      }, lang);
    }
  } else if ("submit_completed_applicant" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_completed_applicant', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);

    if (!approves_description) {
      body["email"] = TAPi18n.__('instance.email.body.submit_completed_applicant', {
        instance_name: instance_name,
        to_username: to_username,
        current_username: current_user_name,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description,
        lastApprove_usersname: lastApprove_usersname
      }, lang);
    } else {
      if (currentStep_type === "counterSign") {
        body["email"] = TAPi18n.__('instance.email.body.submit_completed_applicant_beApproveDescription_counterSign', {
          instance_name: instance_name,
          to_username: to_username,
          current_username: current_user_name,
          applicant_name: applicant_name,
          final_decision: email_final_decision,
          description: email_description,
          lastApprove_usersname: lastApprove_usersname
        }, lang) + approves_description + TAPi18n.__('help.href', {
          href: href
        }, lang);
      } else {
        body["email"] = TAPi18n.__('instance.email.body.submit_completed_applicant_beApproveDescription', {
          instance_name: instance_name,
          to_username: to_username,
          current_username: current_user_name,
          href: href,
          applicant_name: applicant_name,
          final_decision: email_final_decision,
          description: email_description,
          lastApprove_usersname: lastApprove_usersname,
          approves_description: approves_description
        }, lang);
      }
    }
  } else if ("submit_completed_approve" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_completed_approve', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.submit_completed_approve', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description
    }, lang);
  } else if ("submit_pending_rejected_applicant_inbox" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_pending_rejected_applicant_inbox', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      description: description
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.submit_pending_rejected_applicant_inbox', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description,
      lastApprove_usersname: lastApprove_usersname
    }, lang);
  } else if ("submit_pending_rejected_applicant" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_pending_rejected_applicant', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      description: description,
      nextApprove_usersname: nextApprove_usersname
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.submit_pending_rejected_applicant', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description,
      lastApprove_usersname: lastApprove_usersname,
      nextApprove_usersname: nextApprove_usersname
    }, lang);
  } else if ("submit_pending_rejected_approve" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_pending_rejected_approve', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      description: description,
      current_user: current_user_name,
      nextApprove_usersname: nextApprove_usersname,
      current_step_name: current_step_name
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.submit_pending_rejected_approve', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description
    }, lang);
  } else if ("submit_pending_rejected_inbox" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_pending_rejected_inbox', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      approve_type: push_approve_type
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.submit_pending_rejected_inbox', {
      instance_name: instance_name,
      to_username: to_username,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description,
      approve_type: email_approve_type,
      url_approve_type: url_approve_type,
      lastApprove_usersname: lastApprove_usersname
    }, lang);
  } else if ("submit_pending_inbox" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_pending_inbox', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      approve_type: push_approve_type
    }, lang);

    if (!approves_description) {
      body["email"] = TAPi18n.__('instance.email.body.submit_pending_inbox', {
        instance_name: instance_name,
        to_username: to_username,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description,
        approve_type: email_approve_type,
        url_approve_type: url_approve_type,
        lastApprove_usersname: lastApprove_usersname,
        last_approve_judge: last_approve_judge
      }, lang);
    } else {
      if (currentStep_type === "counterSign") {
        body["email"] = TAPi18n.__('instance.email.body.submit_pending_inbox_beApproveDescription_counterSign', {
          instance_name: instance_name,
          to_username: to_username,
          applicant_name: applicant_name,
          final_decision: email_final_decision,
          description: email_description,
          approve_type: email_approve_type,
          url_approve_type: url_approve_type,
          lastApprove_usersname: lastApprove_usersname,
          last_approve_judge: last_approve_judge
        }, lang) + approves_description + TAPi18n.__('help.href', {
          href: href
        }, lang);
      } else {
        body["email"] = TAPi18n.__('instance.email.body.submit_pending_inbox_beApproveDescription', {
          instance_name: instance_name,
          to_username: to_username,
          href: href,
          applicant_name: applicant_name,
          final_decision: email_final_decision,
          description: email_description,
          approve_type: email_approve_type,
          url_approve_type: url_approve_type,
          lastApprove_usersname: lastApprove_usersname,
          last_approve_judge: last_approve_judge,
          approves_description: approves_description
        }, lang);
      }
    }
  } else if ("submit_terminate_applicant" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_terminate_applicant', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.submit_terminate_applicant', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: description
    }, lang);
  } else if ("submit_terminate_approve" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.submit_terminate_approve', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.submit_terminate_approve', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: description
    }, lang);
  } else if ("monitor_delete_applicant" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.monitor_delete_applicant', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.monitor_delete_applicant', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description
    }, lang);
  } else if ("approved_completed_applicant" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.approved_completed_applicant', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);

    if (!approves_description) {
      body["email"] = TAPi18n.__('instance.email.body.approved_completed_applicant', {
        instance_name: instance_name,
        to_username: to_username,
        current_username: current_user_name,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description,
        lastApprove_usersname: lastApprove_usersname
      }, lang);
    } else {
      body["email"] = TAPi18n.__('instance.email.body.approved_completed_applicant_beApproveDescription', {
        instance_name: instance_name,
        to_username: to_username,
        current_username: current_user_name,
        href: href,
        applicant_name: applicant_name,
        final_decision: email_final_decision,
        description: email_description,
        lastApprove_usersname: lastApprove_usersname,
        approves_description: approves_description
      }, lang);
    }
  } else if ("approved_completed_approve" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.approved_completed_approve', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.approved_completed_approve', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description
    }, lang);
  } else if ("rejected_completed_applicant" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.rejected_completed_applicant', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      description: description
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.rejected_completed_applicant', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description,
      lastApprove_usersname: lastApprove_usersname
    }, lang);
  } else if ("rejected_completed_approve" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.rejected_completed_approve', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      description: description
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.rejected_completed_approve', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description
    }, lang);
  } else if ("reassign_new_inbox_users" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.reassign_new_inbox_users', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      description: description,
      current_user_name: current_user_name,
      url_approve_type: url_approve_type,
      approve_type: push_approve_type
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.reassign_new_inbox_users', {
      instance_name: instance_name,
      to_username: to_username,
      current_username: current_user_name,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: description,
      current_user_name: current_user_name,
      url_approve_type: url_approve_type,
      approve_type: email_approve_type
    }, lang);
  } else if ("trace_approve_cc" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.trace_approve_cc', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      approve_type: push_approve_type
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.trace_approve_cc', {
      instance_name: instance_name,
      to_username: to_username,
      href: href,
      applicant_name: applicant_name,
      final_decision: email_final_decision,
      description: email_description,
      approve_type: email_approve_type,
      url_approve_type: url_approve_type
    }, lang);
  } else if ("trace_approve_cc_submit" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.trace_approve_cc_submit', {
      instance_name: instance_name,
      from_username: from_username,
      applicant_name: applicant_name,
      final_decision: push_final_decision,
      approve_type: push_approve_type,
      current_user_name: current_user_name
    }, lang);
  } else if ("auto_submit_pending_inbox" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.auto_submit_pending_inbox', {
      instance_name: instance_name,
      current_step_name: current_step_name
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.auto_submit_pending_inbox', {
      instance_name: instance_name,
      current_step_name: current_step_name,
      to_username: to_username
    }, lang);
  } else if ("return_pending_inbox" === send_from) {
    body["push"] = TAPi18n.__('instance.push.body.return_pending_inbox', {
      instance_name: instance_name,
      current_step_name: current_step_name
    }, lang);
    body["email"] = TAPi18n.__('instance.email.body.return_pending_inbox', {
      instance_name: instance_name,
      current_step_name: current_step_name,
      to_username: to_username
    }, lang);
  }

  return body;
};

pushManager.get_title = function (parameters, lang) {
  var applicant_name, approve_type, current_step_name, from_username, instance_name, nextApprove_usersname, nextStep_type, send_from, title;

  if (lang == null) {
    lang = "zh-CN";
  }

  send_from = parameters["send_from"];
  instance_name = parameters["instance_name"];
  from_username = parameters["from_username"];
  applicant_name = parameters["applicant_name"];
  current_step_name = parameters["current_step_name"];
  nextApprove_usersname = parameters["nextApprove_usersname"];
  nextStep_type = parameters["nextStep_type"];
  approve_type = null;

  if (['submit', 'start'].includes(nextStep_type)) {
    approve_type = TAPi18n.__('instance.email.title.input', {}, lang);
  } else if (['sign', 'counterSign'].includes(nextStep_type)) {
    approve_type = TAPi18n.__('instance.email.title.approval', {}, lang);
  }

  title = new Object();

  if ("first_submit_applicant" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.first_submit_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.first_submit_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("first_submit_inbox" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.first_submit_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.first_submit_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
  } else if ("submit_completed_applicant" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_completed_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_completed_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("submit_completed_approve" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_completed_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_completed_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("submit_pending_rejected_applicant_inbox" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_pending_rejected_applicant_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_pending_rejected_applicant_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("submit_pending_rejected_applicant" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_pending_rejected_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      nextApprove_usersname: nextApprove_usersname
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_pending_rejected_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      nextApprove_usersname: nextApprove_usersname
    }, lang);
  } else if ("submit_pending_rejected_approve" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_pending_rejected_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_pending_rejected_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      current_user: current_user_name,
      nextApprove_usersname: nextApprove_usersname,
      current_step_name: current_step_name
    }, lang);
  } else if ("submit_pending_rejected_inbox" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_pending_rejected_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_pending_rejected_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
  } else if ("submit_pending_inbox" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_pending_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_pending_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
  } else if ("submit_terminate_applicant" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_terminate_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_terminate_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("submit_terminate_approve" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.submit_terminate_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.submit_terminate_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("monitor_delete_applicant" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.monitor_delete_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.monitor_delete_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("approved_completed_applicant" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.approved_completed_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.approved_completed_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("approved_completed_approve" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.approved_completed_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.approved_completed_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("rejected_completed_applicant" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.rejected_completed_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.rejected_completed_applicant', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("rejected_completed_approve" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.rejected_completed_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.rejected_completed_approve', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("reassign_new_inbox_users" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.reassign_new_inbox_users', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.reassign_new_inbox_users', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
  } else if ("trace_approve_cc" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.trace_approve_cc', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.trace_approve_cc', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
  } else if ("trace_approve_cc_submit" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.trace_approve_cc_submit', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
  } else if ("auto_submit_pending_inbox" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.auto_submit_pending_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.auto_submit_pending_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
  } else if ("return_pending_inbox" === send_from) {
    title["push"] = TAPi18n.__('instance.push.title.return_pending_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name
    }, lang);
    title["email"] = TAPi18n.__('instance.email.title.return_pending_inbox', {
      from_username: from_username,
      instance_name: instance_name,
      applicant_name: applicant_name,
      approve_type: approve_type
    }, lang);
  }

  return title;
};

pushManager.get_badge = function (send_from, user_id) {
  var badge, sk_all, sk_all_new, user_spaces;

  if (!['first_submit_inbox', 'submit_pending_rejected_inbox', 'submit_pending_inbox', 'current_user', 'terminate_approval', 'reassign_new_inbox_users', 'trace_approve_cc', 'trace_approve_cc_submit', 'auto_submit_pending_inbox', 'return_pending_inbox'].includes(send_from)) {
    return null;
  }

  badge = 0;
  user_spaces = db.space_users.find({
    user: user_id,
    user_accepted: true
  }, {
    fields: {
      space: 1
    }
  });
  user_spaces.forEach(function (user_space) {
    var c, ref4, sk, sk_new;
    c = db.instances.find({
      space: user_space.space,
      state: {
        $in: ['pending', 'completed', 'draft']
      },
      $or: [{
        inbox_users: user_id
      }, {
        cc_users: user_id
      }]
    }, {
      fields: {
        _id: 1
      }
    }).count();
    badge += c;
    sk = db.steedos_keyvalues.findOne({
      user: user_id,
      space: user_space.space,
      key: 'badge'
    }, {
      fields: {
        _id: 1,
        value: 1
      }
    });

    if (sk) {
      if (((ref4 = sk.value) != null ? ref4.workflow : void 0) !== c) {
        return db.steedos_keyvalues.update({
          _id: sk._id
        }, {
          $set: {
            'value.workflow': c
          }
        });
      }
    } else {
      sk_new = {};
      sk_new.user = user_id;
      sk_new.space = user_space.space;
      sk_new.key = 'badge';
      sk_new.value = {
        'workflow': c
      };
      return db.steedos_keyvalues.insert(sk_new);
    }
  });
  sk_all = db.steedos_keyvalues.findOne({
    user: user_id,
    space: null,
    key: 'badge'
  }, {
    fields: {
      _id: 1
    }
  });

  if (sk_all) {
    db.steedos_keyvalues.update({
      _id: sk_all._id
    }, {
      $set: {
        'value.workflow': badge
      }
    });
  } else {
    sk_all_new = {};
    sk_all_new.user = user_id;
    sk_all_new.space = null;
    sk_all_new.key = 'badge';
    sk_all_new.value = {
      'workflow': badge
    };
    db.steedos_keyvalues.insert(sk_all_new);
  }

  return badge;
};

pushManager.send_to_imo = function (steedos_ids, body, current_user_info) {
  var appmsg, con, e, fromcid, fromuid, msg, res_b, res_badge, res_m, res_msg, space, space_u, users;

  try {
    if (!current_user_info.imo_uid) {
      return;
    }

    fromuid = current_user_info.imo_uid;
    space_u = db.space_users.findOne({
      user: current_user_info._id
    }, {
      fields: {
        space: 1
      }
    });
    space = db.spaces.findOne(space_u["space"]);
    fromcid = space["imo_cid"];

    if (!fromcid) {
      return;
    }

    users = new Array();
    db.users.find({
      steedos_id: {
        $in: steedos_ids
      }
    }, {
      fields: {
        imo_uid: 1
      }
    }).forEach(function (u) {
      var h;
      h = new Object();
      h["cid"] = fromcid;
      h["uid"] = u["imo_uid"];
      return users.push(h);
    });

    if (body["badge"]) {
      appmsg = new Object();
      appmsg["ver"] = "1.0";
      appmsg["tranid"] = Math.round(new Date().getTime() / 1000).toString();
      appmsg["protocol"] = "workbench_pc_web";
      con = new Object();
      con["appname"] = this.imo_sync_app_key;
      con["type"] = "app";
      con["ico"] = "";
      con["count"] = body["badge"].to_s;
      appmsg["contents"] = [con];
      res_b = HTTP.post('http://open.imoffice.com:8000/', {
        params: {
          app: "appnoticeopen",
          pushtype: "2",
          fromcid: fromcid,
          fromuid: fromuid,
          appcid: this.imo_app_cid,
          appuid: this.imo_app_uid,
          appkey: this.imo_sync_app_key,
          tappkey: this.imo_sync_app_key,
          users: JSON.stringify(users),
          appmsg: JSON.stringify(appmsg)
        }
      });
      res_badge = res_b.content;

      if (res_badge && res_badge["result"] === "false") {
        console.error("send_to_imo 发送消息失败:" + (res_badge["msg"] || res_badge["info"]));
      }
    }

    if (body["alertTitle"]) {
      msg = new Object();
      msg["ver"] = "1.0";
      msg["title"] = "新消息: " + body["alertTitle"];
      msg["img"] = "http:\/\/imoapp.imoffice.com:1863\/WorkBench/Manage\/Images\/24bc3fef811a017771038323d80a6cae_170519a.png";
      msg["desc"] = body["alert"];
      msg["lnk"] = Meteor.absoluteUrl() + ("se/imo/login?appkey=" + this.imo_sync_app_key);
      res_m = HTTP.post('http://open.imoffice.com:5186/index.php', {
        params: {
          app: "sendmsg",
          pushtype: "2",
          fromcid: fromcid,
          fromuid: fromuid,
          appcid: this.imo_app_cid,
          appuid: this.imo_app_uid,
          appkey: this.imo_push_app_key,
          users: JSON.stringify(users),
          msg: JSON.stringify(msg),
          poptype: "1",
          chart: ""
        }
      });
      res_msg = res_m.content;

      if (res_msg && res_msg["result"] === "false") {
        return console.error("send_to_imo 发送消息失败:" + (res_msg["msg"] || res_msg["info"]));
      }
    }
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

pushManager.send_to_qq = function (to_user, from_user, space_id, instance_id, instance_state, body, i18n_obj) {
  var app_id, box, bqq_uri, e, employee_access_token, oauth, open_id, recv_open_ids, response, space, tips_url;

  try {
    if (!to_user.services || !to_user.services['bqq'] || !to_user.services['bqq']['id']) {
      return;
    }

    space = db.spaces.findOne({
      _id: space_id,
      "services.bqq.company_id": {
        $ne: null
      }
    }, {
      fields: {
        services: 1
      }
    });

    if (!space) {
      return;
    }

    app_id = this.bqq_app_id;
    open_id = from_user.services['bqq']['id'];
    employee_access_token = from_user.services['bqq']['accessToken'];
    recv_open_ids = to_user.services['bqq']['id'];
    oauth = space['services']['bqq'];
    box = "inbox";

    if (instance_state === "completed") {
      box = "completed";
    }

    tips_url = '/workflow/space/' + space_id + '/' + box + '/' + instance_id;
    bqq_uri = encodeURI('https://openapi.b.qq.com/api/combomsg/send?company_id=' + oauth['company_id'] + '&company_token=' + oauth['company_token'] + '&app_id=' + app_id + '&client_ip=0.0.0.0' + '&oauth_version=2' + '&employee_access_token=' + employee_access_token + '&brief=' + body['alert'] + '&url=' + tips_url + '&type=picture' + '&title=' + body['alert'] + '&summary=' + body['alertTitle'] + '&recv_open_ids=' + recv_open_ids + '&open_id=' + open_id);
    response = HTTP.post(bqq_uri);

    if (response.data.ret > 0) {
      console.error(response.data.msg);
    }
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

pushManager.send_email_to_SMTP = function (subject, content, to_user, reply_user) {
  var e;

  if (!to_user.email || !to_user.email_notification) {
    return;
  }

  try {
    return MailQueue.send({
      to: to_user.email,
      from: pushManager.checkMailFromNameLength(reply_user.name) + ' on ' + Meteor.settings.email.from,
      subject: subject,
      html: content
    });
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

pushManager.checkMailFromNameLength = function (name) {
  if (name.length <= 18) {
    return name;
  } else {
    return name.substr(0, 18) + '...';
  }
};

pushManager.send_message_by_raix_push = function (data) {
  var e, notification, payload;

  if (!data["data"]) {
    return;
  }

  try {
    notification = new Object();
    notification["createdAt"] = new Date();
    notification["createdBy"] = '<SERVER>';
    notification["from"] = data["pushTopic"];
    notification['title'] = data["data"]["alertTitle"] ? data["data"]["alertTitle"] : "";
    notification['text'] = data["data"]["alert"] ? data["data"]["alert"] : "";

    if (data["data"]["space_id"] && data["data"]["instance_id"]) {
      payload = new Object();
      payload["space"] = data["data"]["space_id"];
      payload["instance"] = data["data"]["instance_id"];
      payload["host"] = Meteor.absoluteUrl().substr(0, Meteor.absoluteUrl().length - 1);
      notification["payload"] = payload;
    }

    if (data["data"]["badge"] > -1) {
      notification['badge'] = data["data"]["badge"];
    }

    return _.each(data["toUsers"], function (u) {
      var user;
      user = db.users.findOne({
        steedos_id: u
      }, {
        fields: {
          _id: 1
        }
      });

      if (user) {
        notification['query'] = {
          userId: user._id,
          appName: data["pushTopic"]
        };
        return Push.send(notification);
      }
    });
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

pushManager.send_message = function (steedos_ids, body, current_user_info) {
  var data;

  if (!steedos_ids || !(steedos_ids instanceof Array)) {
    return;
  }

  data = new Object();
  data["toUsers"] = steedos_ids;
  data["pushTopic"] = 'workflow';

  if (body) {
    data["data"] = body;
  }

  pushManager.send_message_by_raix_push(data);

  if (body) {
    return pushManager.send_to_imo(steedos_ids, body, current_user_info);
  }
};

pushManager.send_instance_notification = function (send_from, instance, description, current_user_info, cc_user_ids) {
  var _approves_des, _approves_username, approve, approves_description, body_style_end, body_style_start, current_step, current_step_name, e, flow, flow_version, from_user, href, instance_id, lastApprove_judge, lastApprove_usersname, nextApprove_usersname, nextStep_type, parameters, space_id, to_user_change, to_users, trace;

  try {
    space_id = instance.space;
    instance_id = instance._id;
    flow_version = instance.flow_version;
    flow = uuflowManager.getFlow(instance.flow);
    to_users = pushManager.get_to_users(send_from, instance, cc_user_ids, current_user_info);
    href = Meteor.absoluteUrl() + ("workflow/space/" + space_id + "/inbox/" + instance_id);
    body_style_start = "<div style='border:1px solid #bbb;padding:10px;'>";
    body_style_end = "</div>";
    current_step_name = instance.current_step_name;
    nextApprove_usersname = null;

    if (['submit_pending_rejected_approve', 'submit_pending_rejected_applicant'].includes(send_from)) {
      trace = _.find(instance.traces, function (t) {
        return t.is_finished === false;
      });
      approve = _.find(trace.approves, function (a) {
        return a.is_finished === false;
      });
      nextApprove_usersname = approve.user_name;
    }

    nextStep_type = uuflowManager.getStep(instance, flow, instance.traces[instance.traces.length - 1].step).step_type;
    lastApprove_judge = instance.traces[instance.traces.length - 2].approves[0].judge;
    _approves_username = new Array();

    _.each(instance.traces[instance.traces.length - 2].approves, function (appr) {
      return _approves_username.push(appr.handler_name);
    });

    lastApprove_usersname = _approves_username.join(",");
    current_step = uuflowManager.getStep(instance, flow, instance.traces[instance.traces.length - 2].step);
    approves_description = null;
    _approves_des = null;

    if (['reassign_new_inbox_users', 'submit_completed_applicant', 'approved_completed_applicant', 'first_submit_applicant', 'first_submit_inbox', 'submit_pending_inbox'].includes(send_from)) {
      approves_description = instance.traces[instance.traces.length - 2].approves[0].description;

      if (current_step.step_type === "counterSign" && ("submit_completed_applicant" === send_from || "submit_pending_inbox" === send_from)) {
        to_user_change = 'en';

        if (to_users[0].locale === 'zh-cn') {
          to_user_change = 'zh-CN';
        }

        _.each(instance.traces[instance.traces.length - 2].approves, function (appr) {
          var _appr_description, _appr_userName, br;

          _appr_description = appr.description;
          _appr_userName = appr.user_name;
          br = '<br/>';

          if (appr.judge === "approved") {
            return _approves_des = _appr_userName + " : " + TAPi18n.__('instance.judge.approved', {}, to_user_change) + "," + _appr_description + br;
          } else if (appr.judge === "rejected") {
            return _approves_des = _appr_userName + " : " + TAPi18n.__('instance.judge.rejected', {}, to_user_change) + "," + _appr_description + br;
          }
        });

        approves_description = _approves_des;
      }
    }

    from_user = current_user_info;

    if (['reassign_new_inbox_users', 'first_submit_inbox', 'submit_pending_rejected_inbox', 'submit_pending_inbox', 'submit_completed_approve', 'submit_pending_rejected_approve', 'submit_terminate_approve', 'approved_completed_approve', 'rejected_completed_approve'].includes(send_from)) {
      from_user = db.users.findOne(instance.applicant);
    }

    parameters = new Object();
    parameters["send_from"] = send_from;
    parameters["applicant_name"] = instance.applicant_name;
    parameters["instance_name"] = instance.name;
    parameters["href"] = href;
    parameters["final_decision"] = instance.final_decision;
    parameters["description"] = description;
    parameters["state"] = instance.state;
    parameters["from_username"] = from_user.name;
    parameters["current_step_name"] = current_step_name;
    parameters["nextApprove_usersname"] = nextApprove_usersname;
    parameters["nextStep_type"] = nextStep_type;
    parameters["approves_description"] = approves_description;
    parameters["lastApprove_judge"] = lastApprove_judge;
    parameters["lastApprove_usersname"] = lastApprove_usersname;
    parameters["current_user_name"] = current_user_info.name;
    parameters["currentStep_type"] = current_step.step_type;
    return _.each(to_users, function (to_user) {
      var badge, body, content, e, footnote, ins_html, inscribed, lang, push_body, title;
      lang = 'en';

      if (to_user.locale === 'zh-cn') {
        lang = 'zh-CN';
      }

      inscribed = TAPi18n.__('instance.email.inscribed', {}, lang);
      footnote = "<p style='text-align:left;color:#bbb;'>" + TAPi18n.__('instance.email.footnote', {}, lang) + "</p>";

      if (db.space_users.find({
        space: space_id,
        user: to_user._id
      }).count() === 0) {
        return;
      }

      if (db.users.find(to_user._id).count() === 0) {
        return;
      }

      parameters["to_username"] = to_user.name;
      ins_html = '';

      if (['first_submit_inbox', 'submit_pending_inbox', 'submit_pending_rejected_inbox', 'submit_pending_rejected_applicant_inbox', 'reassign_new_inbox_users', 'trace_approve_cc', 'auto_submit_pending_inbox'].includes(send_from)) {
        if (current_user_info.email && current_user_info.email_notification) {
          try {
            console.time("push-2-1-ins_html");
            ins_html = uuflowManager.ins_html(current_user_info, instance);
            console.timeEnd("push-2-1-ins_html");
          } catch (error) {
            e = error;
            console.error(e);
          }
        }
      }

      body = pushManager.get_body(parameters, lang);
      title = pushManager.get_title(parameters, lang);
      badge = pushManager.get_badge(send_from, to_user._id);
      push_body = new Object();
      push_body["alertTitle"] = title["push"];
      push_body["alert"] = body["push"];
      push_body["space_id"] = space_id;
      push_body["instance_id"] = instance_id;

      if (badge) {
        push_body["badge"] = badge;
      }

      push_body["sound"] = "default";
      content = body_style_start + body["email"] + inscribed + ins_html + body_style_end + footnote;
      pushManager.send_email_to_SMTP(title["email"], content, to_user, from_user);
      pushManager.send_message([to_user.steedos_id], push_body, current_user_info);
      return pushManager.send_to_qq(to_user, from_user, space_id, instance_id, instance.state, push_body, lang);
    });
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

pushManager.send_message_current_user = function (user_info) {
  var badge, e, push_body;

  try {
    badge = this.get_badge("current_user", user_info._id);
    push_body = new Object();
    push_body["badge"] = badge;
    return this.send_message([user_info.steedos_id], push_body, user_info);
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

pushManager.send_message_to_specifyUser = function (send_from, to_user) {
  var badge, e, push_body, user_info;

  try {
    badge = this.get_badge(send_from, to_user);
    push_body = new Object();
    push_body["badge"] = badge;
    user_info = db.users.findOne({
      _id: to_user
    });

    if (user_info) {
      return this.send_message([user_info.steedos_id], push_body, user_info);
    }
  } catch (error) {
    e = error;
    return console.error(e.stack);
  }
};

pushManager.triggerWebhook = function (flow_id, instance, current_approve, action, from_user_id, to_user_ids) {
  var from_space_user, from_user, to_users;
  instance.attachments = cfs.instances.find({
    'metadata.instance': instance._id
  }).fetch();
  from_user = db.users.findOne({
    "_id": from_user_id
  }, {
    fields: {
      _id: 1,
      username: 1
    }
  });
  from_space_user = db.space_users.findOne({
    "user": from_user_id
  }, {
    fields: {
      mobile: 1,
      email: 1
    }
  });

  if (from_user != null) {
    from_user.mobile = (from_space_user != null ? from_space_user.mobile : void 0) || "";
  }

  if (from_user != null) {
    from_user.email = (from_space_user != null ? from_space_user.email : void 0) || "";
  }

  if (to_user_ids.length > 0) {
    to_users = db.users.find({
      "_id": {
        $in: to_user_ids
      }
    }, {
      fields: {
        _id: 1,
        username: 1
      }
    }).fetch();
    to_users.forEach(function (to_user) {
      var to_space_user;
      to_space_user = db.space_users.findOne({
        "user": to_user._id
      }, {
        fields: {
          mobile: 1,
          email: 1
        }
      });

      if (to_user != null) {
        to_user.mobile = (to_space_user != null ? to_space_user.mobile : void 0) || "";
      }

      return to_user != null ? to_user.email = (to_space_user != null ? to_space_user.email : void 0) || "" : void 0;
    });
  }

  return db.webhooks.find({
    flow: {
      $in: [flow_id, null]
    },
    active: true
  }).forEach(function (w) {
    return WebhookQueue.send({
      instance: instance,
      current_approve: current_approve,
      payload_url: w.payload_url,
      content_type: w.content_type,
      action: action,
      from_user: from_user,
      to_users: to_users || []
    });
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"export.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/server/lib/export.coffee                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _getFlowByForm;

steedosExport = {};

_getFlowByForm = function (form, flowId, is_copy, company_id) {
  var fields, flows, query;
  query = {
    form: form
  };

  if (flowId) {
    query._id = flowId;
  }

  fields = {
    history: 0
  };
  flows = db.flows.find(query, fields).fetch();
  flows.forEach(function (flow) {
    var ref;
    flow.historys = [];

    if (!is_copy || !company_id && flow.company_id || company_id && !flow.company_id || company_id !== flow.company_id) {
      if ((ref = flow.current.steps) != null) {
        ref.forEach(function (step) {
          var roles_name;
          roles_name = [];

          if (!_.isEmpty(step.approver_roles)) {
            roles_name = db.flow_roles.find({
              _id: {
                $in: step.approver_roles
              }
            }, {
              fields: {
                name: 1
              }
            }).fetch().getProperty("name");
          }

          step.approver_roles_name = roles_name;
          step.approver_users = [];
          return step.approver_orgs = [];
        });
      }
    }

    if (!is_copy || !company_id && flow.company_id || company_id && !flow.company_id || company_id !== flow.company_id) {
      return delete flow.perms;
    }
  });
  return flows;
}; /*
       获取form对象
   
       category: form的分组名次
   
       form：不包含历史版本
   
       instance_number_rules: 表单字段所引用的编号规则
   
       flows: 引用此表单的所有流程，不包含历史版本
    */

steedosExport.form = function (formId, flowId, is_copy, company_id) {
  var _getFieldNumberRule, _getNumberRuleName, c_fields, category, fields, form, instance_number_rules;

  form = db.forms.findOne({
    _id: formId
  }, {
    fields: {
      historys: 0
    }
  });

  if (!form) {
    return {};
  }

  form.historys = [];

  if (form != null ? form.category : void 0) {
    category = db.categories.findOne({
      _id: form.category
    }, {
      fields: {
        name: 1
      }
    });

    if (category != null ? category.name : void 0) {
      form.category_name = category.name;
    }
  }

  _getNumberRuleName = function (str) {
    if (_.isString(str) && (str != null ? str.indexOf("auto_number(") : void 0) > -1) {
      str = str.replace("auto_number(", "").replace(")", "").replace("\"", "").replace("\"", "").replace("\'", "").replace("\'", "");
      return str;
    }
  };

  instance_number_rules = new Array();

  if (form.current) {
    fields = new Array();
    c_fields = form.current.fields;

    if (c_fields != null) {
      c_fields.forEach(function (f) {
        var ref;

        if (f.type === 'table') {
          return console.log('ignore table field');
        } else if (f.type === 'section') {
          return f != null ? (ref = f.fields) != null ? ref.forEach(function (f1) {
            return fields.push(f1);
          }) : void 0 : void 0;
        } else {
          return fields.push(f);
        }
      });
    }

    _getFieldNumberRule = function (spaceId, instance_number_rules, str) {
      var number_rule, number_rule_name;
      number_rule_name = _getNumberRuleName(str);

      if (number_rule_name) {
        number_rule = db.instance_number_rules.findOne({
          space: spaceId,
          name: number_rule_name
        }, {
          fields: {
            _id: 1,
            name: 1,
            year: 1,
            first_number: 1,
            rules: 1
          }
        });
        number_rule.number = 0;

        if (!instance_number_rules.findPropertyByPK("_id", number_rule._id)) {
          delete number_rule._id;
          instance_number_rules.push(number_rule);
        }
      }

      return instance_number_rules;
    };

    fields.forEach(function (f) {
      _getFieldNumberRule(form.space, instance_number_rules, f.default_value);

      return _getFieldNumberRule(form.space, instance_number_rules, f.formula);
    });
  }

  form.instance_number_rules = instance_number_rules;
  form.flows = _getFlowByForm(formId, flowId, is_copy, company_id);
  return form;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"import.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/server/lib/import.coffee                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
steedosImport = {};

steedosImport.workflow = function (uid, spaceId, form, enabled, company_id) {
  var category, category_id, e, flows, form_id, new_category, new_flow_ids, new_form_ids;

  if (_.isEmpty(form)) {
    throw new Meteor.Error('error', "无效的json data");
  }

  if (company_id) {
    if (db.organizations.find({
      _id: company_id,
      space: spaceId
    }).count() === 0) {
      throw new Meteor.Error('error', "无效的字段: company_id");
    }
  }

  new_form_ids = new Array();
  new_flow_ids = new Array();

  try {
    if (form != null ? form.category_name : void 0) {
      category = db.categories.findOne({
        space: spaceId,
        name: form.category_name
      }, {
        fields: {
          _id: 1
        }
      });

      if (_.isEmpty(category)) {
        category_id = new Mongo.ObjectID()._str;
        new_category = {
          _id: category_id,
          name: form.category_name,
          space: spaceId,
          created: new Date(),
          created_by: uid,
          modified: new Date(),
          modified_by: uid,
          owner: uid
        };

        if (company_id) {
          new_category.company_id = company_id;
        }

        db.categories.direct.insert(new_category);
        form.category = category_id;
      } else {
        form.category = category._id;
      }

      delete form.category_name;
    }

    if (form != null ? form.instance_number_rules : void 0) {
      form.instance_number_rules.forEach(function (nr) {
        var e, rules;

        try {
          rules = db.instance_number_rules.findOne({
            space: spaceId,
            "name": nr.name
          });

          if (!rules) {
            nr.space = spaceId;
            nr._id = new Mongo.ObjectID()._str;
            nr.created = new Date();
            nr.created_by = uid;
            nr.modified = new Date();
            nr.modified_by = uid;

            if (company_id) {
              nr.company_id = company_id;
            }

            return db.instance_number_rules.direct.insert(nr);
          }
        } catch (error) {
          e = error;
          return console.log("steedosImport.workflow", e);
        }
      });
      delete form.instance_number_rules;
    }

    form_id = new Mongo.ObjectID()._str;
    flows = form.flows;
    delete form.flows;
    form._id = form_id;
    form.space = spaceId;

    if (enabled) {
      form.state = 'enabled';
      form.is_valid = true;
    } else {
      form.state = 'disabled';
      form.is_valid = true;
    }

    form.created = new Date();
    form.created_by = uid;
    form.modified = form.created;
    form.modified_by = uid;
    form.historys = [];
    form.current._id = new Mongo.ObjectID()._str;
    form.current._rev = 1;
    form.current.form = form_id;
    form.current.created = new Date();
    form.current.created_by = uid;
    form.current.modified = new Date();
    form.current.modified_by = uid;
    delete form.company_id;

    if (company_id) {
      form.company_id = company_id;
    }

    form["import"] = true;
    form.owner = uid;
    db.forms.direct.insert(form);
    new_form_ids.push(form_id);
    flows.forEach(function (flow) {
      var flow_id, orgs_can_add, perms, ref;
      flow_id = new Mongo.ObjectID()._str;
      flow._id = flow_id;
      flow.form = form_id;

      if (enabled) {
        flow.state = 'enabled';
        flow.is_valid = true;
      } else {
        flow.state = 'disabled';
        flow.is_valid = true;
      }

      flow.current_no = 0;
      flow.created = new Date();
      flow.created_by = uid;
      flow.modified = flow.created;
      flow.modified_by = uid;
      delete flow.company_id;

      if (company_id) {
        flow.company_id = company_id;
      }

      if (!flow.perms || flow.space !== spaceId || company_id) {
        orgs_can_add = [];

        if (company_id) {
          orgs_can_add = [company_id];
        } else {
          orgs_can_add = db.organizations.find({
            space: spaceId,
            is_company: true,
            parent: null
          }, {
            fields: {
              _id: 1
            }
          }).fetch().getProperty("_id");
        }

        perms = {
          _id: new Mongo.ObjectID()._str,
          users_can_add: [],
          orgs_can_add: orgs_can_add,
          users_can_monitor: [],
          orgs_can_monitor: [],
          users_can_admin: [],
          orgs_can_admin: []
        };
        flow.perms = perms;
      }

      flow.space = spaceId;
      flow.current._id = new Mongo.ObjectID()._str;
      flow.current.flow = flow_id;
      flow.current._rev = 1;
      flow.current.form_version = form.current._id;
      flow.current.created = new Date();
      flow.current.created_by = uid;
      flow.current.modified = new Date();
      flow.current.modified_by = uid;

      if ((ref = flow.current) != null) {
        ref.steps.forEach(function (step) {
          var approve_roles;

          if (_.isEmpty(step.approver_roles_name)) {
            delete step.approver_roles_name;

            if (_.isEmpty(step.approver_roles)) {
              return step.approver_roles = [];
            }
          } else {
            approve_roles = new Array();
            step.approver_roles_name.forEach(function (role_name) {
              var flow_role_query, role, role_id;
              flow_role_query = {
                space: spaceId,
                name: role_name
              };

              if (company_id) {
                flow_role_query.company_id = company_id;
              }

              role = db.flow_roles.findOne(flow_role_query, {
                fields: {
                  _id: 1
                }
              });

              if (_.isEmpty(role)) {
                role_id = db.flow_roles._makeNewID();
                role = {
                  _id: role_id,
                  name: role_name,
                  space: spaceId,
                  created: new Date(),
                  created_by: uid,
                  owner: uid
                };

                if (company_id) {
                  role.company_id = company_id;
                }

                db.flow_roles.direct.insert(role);
                return approve_roles.push(role_id);
              } else {
                return approve_roles.push(role._id);
              }
            });
            step.approver_roles = approve_roles;
            return delete step.approver_roles_name;
          }
        });
      }

      flow["import"] = true;
      flow.owner = uid;
      db.flows.direct.insert(flow);
      return new_flow_ids.push(flow_id);
    });
    return new_flow_ids;
  } catch (error) {
    e = error;
    new_form_ids.forEach(function (id) {
      return db.forms.direct.remove(id);
    });
    new_flow_ids.forEach(function (id) {
      return db.flows.direct.remove(id);
    });
    throw e;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"workflow.app.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/workflow.app.coffee                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Creator.Apps.workflow = {
  name: "审批王",
  sort: 100,
  is_creator: false,
  admin_menus: [{
    _id: 'menu_workflow',
    name: '审批',
    permission_sets: ["user"],
    expanded: false
  }, {
    _id: 'flows',
    name: '流程',
    permission_sets: ["admin", "workflow_admin"],
    object_name: "flows",
    parent: 'menu_workflow'
  }, {
    _id: 'flow_roles',
    name: '审批岗位',
    permission_sets: ["admin", "workflow_admin"],
    object_name: "flow_roles",
    parent: 'menu_workflow'
  }, {
    _id: 'flow_positions',
    name: '岗位成员',
    permission_sets: ["admin", "workflow_admin"],
    object_name: "flow_positions",
    parent: 'menu_workflow'
  }, {
    _id: 'categories',
    name: '流程分类',
    permission_sets: ["admin", "workflow_admin"],
    object_name: "categories",
    parent: 'menu_workflow'
  }, {
    _id: 'instance_number_rules',
    name: '流程编号',
    permission_sets: ["admin", "workflow_admin"],
    object_name: "instance_number_rules",
    parent: 'menu_workflow'
  }, {
    _id: 'space_user_signs',
    name: '图片签名',
    permission_sets: ["admin", "workflow_admin"],
    object_name: "space_user_signs",
    parent: 'menu_workflow'
  }, {
    _id: 'instances_statistic',
    name: '效率统计',
    permission_sets: ["admin", "workflow_admin"],
    object_name: "instances_statistic",
    parent: 'menu_workflow'
  }, {
    _id: 'webhooks',
    name: 'Webhooks',
    permission_sets: ["admin"],
    object_name: "webhooks",
    parent: 'menu_workflow'
  }, {
    _id: 'process_delegation_rules',
    name: '流程委托',
    permission_sets: ["user"],
    object_name: "process_delegation_rules",
    parent: 'menu_workflow'
  }]
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"models":{"Instances.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/Instances.coffee                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"forms.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/forms.coffee                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flows.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/flows.coffee                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"statistic_instance.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/statistic_instance.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"categories.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/categories.coffee                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_roles.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/flow_roles.coffee                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_positions.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/flow_positions.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"space_user_signs.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/space_user_signs.coffee                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"webhooks.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/webhooks.coffee                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_number_rules.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/instance_number_rules.coffee                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"process_delegation_rules.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/models/process_delegation_rules.coffee                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"cfs":{"instances.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/cfs/instances.coffee                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
fs_store;
var fs_store, ref, ref1, store_name;
store_name = "instances";

if (((ref = Meteor.settings["public"].cfs) != null ? ref.store : void 0) === "OSS") {
  if (Meteor.isClient) {
    fs_store = new FS.Store.OSS(store_name);
  } else if (Meteor.isServer) {
    fs_store = new FS.Store.OSS(store_name, {
      region: Meteor.settings.cfs.aliyun.region,
      internal: Meteor.settings.cfs.aliyun.internal,
      bucket: Meteor.settings.cfs.aliyun.bucket,
      folder: Meteor.settings.cfs.aliyun.folder,
      accessKeyId: Meteor.settings.cfs.aliyun.accessKeyId,
      secretAccessKey: Meteor.settings.cfs.aliyun.secretAccessKey
    });
  }
} else if (((ref1 = Meteor.settings["public"].cfs) != null ? ref1.store : void 0) === "S3") {
  if (Meteor.isClient) {
    fs_store = new FS.Store.S3(store_name);
  } else if (Meteor.isServer) {
    fs_store = new FS.Store.S3(store_name, {
      region: Meteor.settings.cfs.aws.region,
      bucket: Meteor.settings.cfs.aws.bucket,
      folder: Meteor.settings.cfs.aws.folder,
      accessKeyId: Meteor.settings.cfs.aws.accessKeyId,
      secretAccessKey: Meteor.settings.cfs.aws.secretAccessKey
    });
  }
} else {
  if (Meteor.isClient) {
    fs_store = new FS.Store.FileSystem(store_name);
  } else if (Meteor.isServer) {
    fs_store = new FS.Store.FileSystem(store_name, {
      path: require('path').join(Creator.steedosStorageDir, "files/" + store_name),
      fileKeyMaker: function (fileObj) {
        var absolutePath, extention, filename, filenameInStore, final_filename, ins_id, mkdirp, month, name, name_split, now, path, pathname, store, year;
        store = fileObj && fileObj._getInfo(store_name);

        if (store && store.key) {
          return store.key;
        }

        filename = fileObj.name();
        filenameInStore = fileObj.name({
          store: store_name
        });
        name = filenameInStore || filename;
        name_split = name.split('.');
        extention = name_split.pop();
        final_filename = name_split.join('.').substring(0, 50) + '.' + extention;
        now = new Date();
        year = now.getFullYear();
        month = now.getMonth() + 1;
        ins_id = fileObj.metadata.instance;
        path = require('path');
        mkdirp = require('mkdirp');
        pathname = path.join(Creator.steedosStorageDir, "files/" + store_name + "/" + year + '/' + month + '/' + ins_id);
        absolutePath = path.resolve(pathname);
        mkdirp.sync(absolutePath);
        return year + '/' + month + '/' + ins_id + '/' + fileObj.collectionName + '-' + fileObj._id + '-' + final_filename;
      }
    });
  }
}

cfs[store_name] = new FS.Collection(store_name, {
  stores: [fs_store]
});
cfs[store_name].allow({
  download: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    cfs.instances.files._ensureIndex({
      "metadata.instance": 1
    });

    cfs.instances.files._ensureIndex({
      "failures.copies.instances.doneTrying": 1
    });

    cfs.instances.files._ensureIndex({
      "copies.instances": 1
    });

    return cfs.instances.files._ensureIndex({
      "uploadedAt": 1
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes":{"export.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/routes/export.coffee                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Cookies;
Cookies = require("cookies");
Meteor.startup(function () {
  return WebApp.connectHandlers.use("/api/workflow/export/form", function (req, res, next) {
    var authToken, cookies, data, fileName, form, formId, ref, space, userId;
    cookies = new Cookies(req, res);

    if (req.body) {
      userId = req.body["X-User-Id"];
      authToken = req.body["X-Auth-Token"];
    }

    if (!userId || !authToken) {
      userId = cookies.get("X-User-Id");
      authToken = cookies.get("X-Auth-Token");
    }

    if (!(userId && authToken)) {
      res.writeHead(401);
      res.end(JSON.stringify({
        "error": "Validate Request -- Missing X-Auth-Token",
        "success": false
      }));
      return;
    }

    formId = (ref = req.query) != null ? ref.form : void 0;
    form = db.forms.findOne({
      _id: formId
    }, {
      fields: {
        space: 1
      }
    });

    if (_.isEmpty(form)) {
      res.writeHead(401);
      res.end(JSON.stringify({
        "error": "Validate Request -- Invalid formId",
        "success": false
      }));
      return;
    } else {
      space = db.spaces.findOne(form.space, {
        fields: {
          is_paid: 1
        }
      });

      if (!(space != null ? space.is_paid : void 0)) {
        JsonRoutes.sendResult(res, {
          code: 404,
          data: {
            "error": "Validate Request -- Non-paid space.",
            "success": false
          }
        });
        return;
      }
    }

    data = steedosExport.form(formId);

    if (_.isEmpty(data)) {
      fileName = 'null';
    } else {
      fileName = data.name;
    }

    res.setHeader('Content-type', 'application/x-msdownload');
    res.setHeader('Content-Disposition', 'attachment;filename=' + encodeURI(fileName) + '.json');
    return res.end(JSON.stringify(data));
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"import.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_app-workflow/routes/import.coffee                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Cookies;
Cookies = require("cookies");
JsonRoutes.add("post", "/api/workflow/import/form", function (req, res, next) {
  var authToken, company_id, cookies, e, msg, ref, ref1, space, spaceId, uid;
  cookies = new Cookies(req, res);
  msg = "";

  if (req.body) {
    uid = req.body["X-User-Id"];
    authToken = req.body["X-Auth-Token"];
  }

  if (!uid || !authToken) {
    uid = cookies.get("X-User-Id");
    authToken = cookies.get("X-Auth-Token");
  }

  if (!(uid && authToken)) {
    res.writeHead(401);
    res.end(JSON.stringify({
      "error": "Validate Request -- Missing X-Auth-Token",
      "success": false
    }));
    return;
  }

  spaceId = (ref = req.query) != null ? ref.space : void 0;
  company_id = (ref1 = req.query) != null ? ref1.company_id : void 0;
  space = db.spaces.findOne(spaceId, {
    fields: {
      is_paid: 1
    }
  });

  if (!(space != null ? space.is_paid : void 0)) {
    JsonRoutes.sendResult(res, {
      code: 404,
      data: {
        "error": "Validate Request -- Non-paid space.",
        "success": false
      }
    });
    return;
  }

  if (!WorkflowCore.checkCreatePermissions(spaceId, uid, company_id)) {
    res.writeHead(401);
    res.end(JSON.stringify({
      "error": "Validate Request -- No permission",
      "success": false
    }));
    return;
  }

  try {
    return JsonRoutes.parseFiles(req, res, function () {
      var e, e1, form, jsonData, new_flowIds;

      try {
        if (req.files && req.files[0]) {
          jsonData = req.files[0].data.toString("utf-8");

          try {
            form = JSON.parse(jsonData);
            new_flowIds = steedosImport.workflow(uid, spaceId, form, false, company_id);
            msg = JSON.stringify({
              new_flows: new_flowIds
            });
            res.statusCode = 200;
          } catch (error) {
            e = error;
            console.error(e);
            msg = e.reason;
            res.statusCode = 500;
          }

          res.end(msg);
        } else {
          msg = "无效的附件";
          res.statusCode = 500;
          return res.end(msg);
        }
      } catch (error) {
        e1 = error;
        msg = "无效的JSON文件";
        res.statusCode = 500;
        return res.end(msg);
      }
    });
  } catch (error) {
    e = error;
    return console.log(e);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".i18n.json",
    ".coffee"
  ]
});

require("/node_modules/meteor/steedos:app-workflow/i18n/en.i18n.json.js");
require("/node_modules/meteor/steedos:app-workflow/i18n/zh-CN.i18n.json.js");
require("/node_modules/meteor/steedos:app-workflow/checkNpm.js");
require("/node_modules/meteor/steedos:app-workflow/core.coffee");
require("/node_modules/meteor/steedos:app-workflow/server/methods/flow_copy.coffee");
require("/node_modules/meteor/steedos:app-workflow/workflow.app.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/Instances.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/forms.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/flows.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/statistic_instance.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/categories.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/flow_roles.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/flow_positions.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/space_user_signs.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/webhooks.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/instance_number_rules.coffee");
require("/node_modules/meteor/steedos:app-workflow/models/process_delegation_rules.coffee");
require("/node_modules/meteor/steedos:app-workflow/cfs/instances.coffee");
require("/node_modules/meteor/steedos:app-workflow/server/methods/distribute.coffee");
require("/node_modules/meteor/steedos:app-workflow/server/lib/workflow_manager.js");
require("/node_modules/meteor/steedos:app-workflow/server/lib/uuflow_manager.coffee");
require("/node_modules/meteor/steedos:app-workflow/server/lib/push_manager.coffee");
require("/node_modules/meteor/steedos:app-workflow/server/lib/export.coffee");
require("/node_modules/meteor/steedos:app-workflow/routes/export.coffee");
require("/node_modules/meteor/steedos:app-workflow/server/lib/import.coffee");
require("/node_modules/meteor/steedos:app-workflow/routes/import.coffee");

/* Exports */
Package._define("steedos:app-workflow", {
  WorkflowManager: WorkflowManager,
  uuflowManager: uuflowManager,
  pushManager: pushManager,
  steedosExport: steedosExport,
  steedosImport: steedosImport
});

})();

//# sourceURL=meteor://💻app/packages/steedos_app-workflow.js