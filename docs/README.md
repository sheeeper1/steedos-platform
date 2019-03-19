---
title: 快速开始
---

## 面向“对象”的业务系统开发平台

开发一套业务系统，只需一天！

对于台账类应用系统，比如客户管理、销售管理、合同管理、人事管理、资产管理、行政管理、会议管理等，功能需求共性较强，都需要实现数据的增删改查，都需要实现权限控制，只是业务表单不同。

但是此类系统开发需要考虑的细节很多，包括：
- 如何让数据查询的界面更友好？
- 如何更严格的限制数据访问和修改权限？
- 如何与第三方业务系统接口？
- 如何实现业务审批？
- 如何通过手机访问？
- 对于集团公司和大型企业，如何进行数据集中管控？
- 当业务部门的需求变更时，我如何能快速响应？
- 子系统越来越多，我要怎么集中维护？

Creator把这些共性需求标准化，通过配置的业务表单、配置业务字段、配置权限实现快速开发业务系统。熟练的配置人员只需一天，甚至一小时，即可开发出一套手机、平板、电脑三合一的台账类业务系统。

### 零代码开发业务系统
- [1.配置业务对象](object.md): 配置业务对象的名称、描述、图标等信息。
- [2.配置字段](object_field.md): 配置业务对象的字段。
- [3.配置应用](app.md): 将对象添加到应用中。
- 完工！

### 自动生成全功能电脑客户端
您的对象配置完成之后，Creator就自动为您生成一整套的数据浏览、管理、统计分析功能。
- [列表](record_list.md): 快速浏览、查询业务数据。
- [查看](record_view.md): 查看业务数据的详细信息，以及相关的子表数据。
- [编辑](record_edit.md): 编辑业务数据，管理员可设定用户可修改的字段。
- [搜索](record_search.md): 可执行多关键词组合检索，可一次性在所有业务对象中搜索数据。
- [统计](reports.md): 用户可创建列表、分组报表、二维表进行统计分析，并可自动生成图形化报表。
- [附件](record_attachment.md): 可以管理具体的业务对象的附件，附件支持版本控制。
- [讨论](record_chatter.md)，可以针对具体的业务数据进行讨论和回复。
- [任务](record_tasks.md): 可以针对具体的业务数据创建待办任务。
- [数据导入](record_import.md): 如果您的Excel表格中已经有初始业务数据，可以快速导入系统中
- [修改历史](record_history.md): 自动记录用户对业务数据的修改历史。
- [假删除](record_trash.md): 通过设置，删除某些对象时，并非在数据库里真删除、而是打上已删除的标记，这样误删除的记录有恢复的可能。

![电脑、手机界面展示](assets/mac_ipad_iphone_home.png)

### 自动生成各种客户端
除了用电脑操作Creator中的业务数据，您还可以随时通过手机、平板、甚至Excel访问Creator中的业务数据。
- [手机客户端](app_mobile.md): 使用手机查询、修改业务数据。
- [平板客户端](app_ipad.md): 使用平板电脑查询、修改业务数据。
- [Excel客户端](app_excel.md): 与Excel建立数据连接，利用Excel进行数据统计分析。
- 企业微信客户端: 在企业微信中直接访问您的应用，组织机构自动与企业微信后端同步。
- 阿里钉钉客户端: 在阿里钉钉中直接访问您的应用，组织机构自动与阿里钉钉后端同步。
- Tabular客户端: 与Tabular建立数据连接，利用Tabular进行数据统计分析。
- 自定义客户端：借助Creator完善的API接口，您也可以自己开发客户端，远程查询、修改Creator中的业务数据。
- 微信小程序: 即将上线。

### 数据权限控制
- 身份验证：只有授权用户才能访问Creator中的业务数据
- [权限组](permission_set.md): 将人员进行分组，便于分别设定权限
- [对象权限](object_permission.md): 设定不同权限组对业务对象的访问权限
- [记录级权限](permission_share.md)：通过配置共享规则，可以实现记录级权限。
- [组织结构](organization.md): 设定分子公司、部门信息
- [人员管理](space_user.md): 设定人员信息

### 与审批中心集成
[审批王](https://www.steedos.com/cn/workflow/)是全新的企业级在线审批系统，可以快速的将公司的各类审批业务转换为可严格执行的电子流程。
- [发起审批](workflow_submit.md): 对于需要领导审批的业务数据，可以一键发送到审批系统进行审批，例如合同新建后可以提交审批。
- [审批归档](workflow_archive.md)：对于审批结束的申请单，可以自动将数据同步到Creator相关对象中，例如合同审批结束可以自动进入合同台账和档案台账。

### ODATA API接口
对于用户定义的对象，系统自动生成基于国际标准[ODATA](http://www.odata.org/)协议的API接口。基于ODATA接口，第三方系统可以轻松的查询Creator中的业务数据并执行增删改操作。
- [身份验证](odata_auth.md): 访问ODATA接口必须提供用户身份信息，用户只能在权限范围内进行数据查询和修改
- [获取数据字典](odata_metadata.md)：通过接口获取业务数据的数据结构
- [业务数据查询](odata_query.md): 通过接口查询业务数据，可执行多字段组合查询
- [业务数据新增](odata_add.md)：通过接口新增一条业务数据记录
- [业务数据编辑](odata_edit.md)：通过接口编辑更新指定一条业务数据记录
- [业务数据删除](odata_delete.md)：通过接口删除指定的一条业务数据记录
- [调用自定义方法](odata_functions.md)：通过调用自定义方法处理业务逻辑

### 进阶开发
如果您的业务部门还提出了更多细节的功能要求，我们还提供进一步的脚本配置功能。
- [配置列表视图](object_listview.md): 可以为对象设定多个列表视图
- [字段公式](object_field_formula.md): 定义数据过滤条件
- [过滤条件](object_filter.md): 定义数据过滤条件
- [触发器](object_trigger.md): 定义当数据增、删、改时自动触发执行对应的脚本
- [操作按钮](object_action.md): 定义用户界面上显示的操作按钮以及触发的脚本
- [审计日志](object_audit.md): 可以为对象开启审计日志，记录字段修改历史
- [界面规范](https://www.lightningdesignsystem.com/guidelines/overview/)

### 记录显示
![电脑、手机记录显示界面展示](assets/mac_mobile_view.jpg)

### 编辑记录
![电脑、手机编辑记录界面展示](assets/ipad_iphone_edit.jpg)

### 搜索
![电脑、手机搜索界面展示](assets/mac_mobile_search.jpg)

### 报表
![电脑、手机报表界面展示](assets/mac_mobile_report.jpg)