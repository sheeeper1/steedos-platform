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
var Restivus = Package['nimble:restivus'].Restivus;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Tabular = Package['aldeed:tabular'].Tabular;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var WorkflowManager = Package['steedos:app-workflow'].WorkflowManager;
var uuflowManager = Package['steedos:app-workflow'].uuflowManager;
var pushManager = Package['steedos:app-workflow'].pushManager;
var steedosExport = Package['steedos:app-workflow'].steedosExport;
var steedosImport = Package['steedos:app-workflow'].steedosImport;
var Template = Package['meteorhacks:ssr'].Template;
var SSR = Package['meteorhacks:ssr'].SSR;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var moment = Package['momentjs:moment'].moment;
var CFDataManager = Package['steedos:autoform'].CFDataManager;
var ServerSession = Package['steedos:base'].ServerSession;
var Selector = Package['steedos:base'].Selector;
var Steedos = Package['steedos:base'].Steedos;
var AjaxCollection = Package['steedos:base'].AjaxCollection;
var SteedosDataManager = Package['steedos:base'].SteedosDataManager;
var SteedosOffice = Package['steedos:base'].SteedosOffice;
var billingManager = Package['steedos:base'].billingManager;
var MailQueue = Package['steedos:mailqueue'].MailQueue;
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
var __coffeescriptShare, Workflow, InstanceReadOnlyTemplate, TemplateManager, SteedosTable, year, month, date, hours, seconds, locale, utcOffset, str, addItemTr, values_history, current_user_info, flow_id, userId, orgFieldUsers, formula_values, new_ins_id, instanceHtml, Form_formula, getHandlersManager, permissionManager, approveManager, flowManager, formManager, stepManager, workflowTemplate, InstanceManager, WorkflowManager_format, CoreForm, InstanceNumberRules;

var require = meteorInstall({"node_modules":{"meteor":{"steedos:workflow":{"i18n":{"en.i18n.json.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/i18n/en.i18n.json.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Package['universe:i18n'].i18n.addTranslations('en','',{"Steedos Workflow":"Workflow","inbox":"Inbox","outbox":"Outbox","draft":"Draft","pending":"In Progress","completed":"Finished","monitor":"Monitor","FlowName":"Workflow Name","Search":"Search","My Approval":"My Approval","My Applications":"My Applications","Submit":"Submit","steedos_desktop":"Steedos Desktop","menu_navigation":"Navigation","Workflow":"Workflow","form_new":"New","instances":"Request","instances_name":"Title","instances_applicant_name":"Applicant","instances_modified":"Modified","instances_applicant_organization_name":"Organization","instances_submit_date":"Submit Date","instances_flow":"Workflow","instances_step_current_name":"Current step","instances_flow_name":"Workflow","instances_current_step_name":"Current step","instance_approve":"Approve","instance_reject":"Reject","instance_readed":"Read","instance_next_step":"Next Step","instance_next_step_users":"Next Step User(s)","instance_initiator":"Initiator","instance_approval_history":"Approval History","instance_in_progress":"In Progress","instance_submit":"Submit","instance_save":"Save","instance_delete":"Delete","instance_attachment":"Attachments","instance_cancel":"Cancel Request","instance_reassign":"Reassign","instance_relocate":"Relocate","instance_print":"Print","flow_roles":"Workflow Positions","flow_roles_name":"Position Name","flow_positions":"Positions Users","flow_positions_role":"Position","flow_positions_org":"Organization","flow_positions_users":"Users","flow_positions_role_name()":"Position","flow_positions_org_name()":"Organization","flow_positions_users_name()":"Users","workflow_table_confirm":"OK","workflow_table_delete":"Delete","Attachment deleted successfully":"Attachment deleted successfully!","Attachment was added successfully":"Attachment was added successfully!","Saved successfully":"Saved successfully!","Added successfully":"Added successfully!","Deleted successfully":"Deleted successfully!","Submitted successfully":"Submitted successfully!","Canceled successfully":"Canceled successfully!","Reassigned successfully":"Reassigned successfully!","Relocated successfully":"Relocated successfully!","Attachments":"Attachments","Versions":"Versions","Current Version":"（Current Version）","workflow_attachment_free_size_limit":"Sorry, Attachment larger than 1M is not accepted for free version.","workflow_attachment_paid_size_limit":"Failed to upload, because attachment size is over ","workflow_attachment_download":"Download","workflow_attachment_view":"View","workflow_attachment_isReadOnly":"ReadOnly-","workflow_attachment_versions":"Versions","workflow_attachment_uploading":"Uploading ","workflow_attachment_downloading":"Downloading %s...","workflow_attachment_creating":"Creating a new file: %s...","workflow_attachment_officeOnline":"Edit","workflow_attachment_save":"Save","workflow_attachment_close":"Close","workflow_attachment_delete":"Delete","workflow_attachment_convert_to_pdf":"Converting '%s' to pdf format...","workflow_attachment_wordToPdf":"Convert To Pdf","workflow_attachment_wordToPdf_failed":"Convert to PDF failed!","workflow_attachment_locked_tip":"Unlock the file, then submit","Instance State approved":"Approved","Instance State rejected":"Rejected","Instance State terminated":"Cancelled","Instance State finished":"Completed","Instance State pending":"In Progress","Instance State reassigned":"Reassigned","Instance State relocated":"Relocated","Instance Relocate Hint":"Enter your comments here.","Instance Relocate Title":"Relocate","Instance Relocate Reason":"Comments are required.","Instance Relocate NewInboxUsers":"Please select a user.","Instance Relocate Ok":"Relocated successfully.","Instance Relocate CurStep":"Current Step: ","instance_reassign_title":"Reassign","instance_reassign_curstep":"Current Step: ","instance_reassign_reason":"Enter your comments here.","instance_reassign_ok":"Reassigned successfully.","instance_reassign_user":"Select User(s)","instance_cancel_title":"Cancel Request","instance_cancel_reason":"Enter your comments here","instance_reassign_error_reason_required":"Comments are required.","instance_reassign_error_users_required":"Please select a user.","instance_cancel_error_reason_required":"Comments are required.","instance_select_next_step":"Please select next step","instance_multi_next_step_tips":"Multi next steps，please select next step，and send the request by click the bottom Send button","instance_next_step_user":"Please select next step user(s)","instance_reasons_reject":"Reasons necessary when reject the application","instance_field":"The field","instance_is_required":"is required","instance_email_format_error":"Format error of the email address","node_office_edit_online":"Edit Online","node_office_message":"You are editing document, please save and exit Office software when done.","node_office_warning":"The file has been modified, do you want to save it as a new version?","node_office_upload":"Upload ","node_office_confirm":"Confirm","node_office_cancel":"Cancel","node_office_uploaded":"The attachment has been uploaded","node_office_filePath":"File: ","node_office_exists_message":"File already exists, replace it?","node_office_workflow":"Workflow","node_pdf_error":"Pdf signature failed, please re-sign!","node_pdf_sign_online":"Sign Online","node_pdf_message":"You are signing pdf file.","node_pdf_filePath":"File: ","workflow_export_thismonth":"Export requests this month","workflow_export_lastmonth":"Export requests last month","workflow_export_thisyear":"Export requests this year","workflow_export_all":"Export all requests","workflow_export_filter":"Filter by process","workflow_export_search":"Search for requests according to the workflow","workflow_export_data":"Export to Excel","spaces_isarrearageSpace":"your space is arrearage","cc_help":"https://www.steedos.com/us/help/workflow/instance_carboncopy.html","relocate_help":"https://www.steedos.com/us/help/workflow/instance_relocate.html","reassign_help":"https://www.steedos.com/us/help/workflow/instance_reassign.html","forward_help":"https://www.steedos.com/us/help/workflow/instance_forward.html","export_filter_help":"https://www.steedos.com/us/help/workflow/instance_search.html","new_help":"https://www.steedos.com/us/help/workflow/instance_add.html","Inbox Suggestion NextSteps Label":"Next step: ","Inbox Suggestion NextSteps Handler Label":"Assignee: ","Workflow Designer":"Workflow Designer","User Management":"User Management","All flows":"All workflows","Select a flow":"Select a workflow","Fill in form":"New Request","Flow upgraded":"The workflow has been upgraded. Please make sure this request meet the requirements of the new version.","Are you sure?":"Are you sure?","Select placeholder":"Please select","workflow_no_category":"No category","space_users_error_space_required":"Space required","flow_roles_error_positions_exists":"Users exised in the role","workflow_left_parenthesis":"(","workflow_right_parenthesis":")","instance_cc_description":"Carbon Description","instance_cc_from":"Carbon Form","instance_cc_title":"Carbon Copy","instance_cc_done":"Carbon copied!","instance_curstep":"Current Step: ","instance_cc_user":"Carbon Copy To","instance_cc_error_users_required":"Please select user.","workflow_form_edit":"Workflow List","flows_template":"Request Template","flows_name":"Workflow Name","flows_print_template":"Print Template","flows_instance_template":"Form Template","flows_description":"Flow Description","workflow_attach_unlock":"Unlock","workflow_attach_locked_by":"%s is editing","workflow_attach_confirm_delete":"Are you sure?","workflow_attach_confirm_delete_messages":"You will not be able to recover this imaginary file!","workflow_attach_confirm":"Delete","workflow_attach_cancel":"Cancel","workflow_attach_to_pdf":"Convert to PDF","workflow_attach_to_pdf_message":"Convert '%s' to pdf format?","workflow_attach_upload":"Upload","workflow_attach_new":"New","workflow_attachment_signature":"Signature","workflow_select_an_app":"Steedos Apps","workflow_suggestion_placeholder":"Please fill in comments.","instance_opinion_title":"Opinions","instance_opinion_btn":"Opinions","instance_opinion_input":"Add a opinion","instance_opinion_add_success":"Add successfully!","instance_opinion_remove_success":"Remove successfully!","instance_opinion_error":"Error","instance_opinion_exists":"Opinion exists","instance_opinion_add_tip":"You have not set up common comments yet.","instance_forward_title":"Request Forward","form_field_checkbox_yes":"YES","form_field_checkbox_no":"NO","flows_events":"Events","flows_events_error":"Workflow Script Error: ","instance_search_advanced_search":"Advanced search","instance_search_flow":"Workflow","instance_search_name":"Request Title","instance_search_file":"Request Title","instance_search_applicant_name":"Applicant Name","instance_search_applicant_organization_name":"Applicant Organization","instance_search_submit_date":"Submit Date","instance_search_start":"Start","instance_search_end":"End","instance_search_result_tip":"Filtered Result","instance_search_state":"Request State","instance_search_state_options":{"pending":"Pending","completed":"Completed"},"instance":{"formatter":{"date":{"simple_date":"bb DD, YYYY","simple_datetime":"bb DD, YYYY HH:MM","export_date":"YYYY-MM-DD","export_datetime":"YYYY-MM-DD HH:MM"},"checkbox":{"checked":"YES","unchecked":"NO"}},"instance_view":"<br/><br/>Following are the contents of the request:<br/>Space : {$space_name};<br/>Initiator : {$applicant_name};<br/>Submit Date : {$submit_date};","push":{"final_decision_approved":"Approved","final_decision_rejected":"Rejected","final_decision_nil":"","title":{"first_submit_applicant":"{$from_username}","first_submit_inbox":"{$from_username}","submit_pending_rejected_applicant_inbox":"{$from_username}","submit_pending_rejected_applicant":"{$from_username}","submit_pending_rejected_approve":"{$from_username}","submit_pending_rejected_inbox":"{$from_username}","submit_pending_inbox":"{$from_username}","submit_terminate_applicant":"{$from_username}","submit_terminate_approve":"{$from_username}","monitor_delete_applicant":"{$applicant_name}","submit_completed_applicant":"{$applicant_name}","submit_completed_approve":"{$from_username}","approved_completed_applicant":"{$applicant_name}","approved_completed_approve":"{$from_username}","rejected_completed_applicant":"{$applicant_name}","rejected_completed_approve":"{$from_username}","reassign_new_inbox_users":"{$from_username}","trace_approve_cc":"{$from_username}","trace_approve_cc_submit":"{$from_username}","auto_submit_pending_inbox":"{$from_username}","return_pending_inbox":"{$from_username}"},"body":{"input":"input","approval":"approval","first_submit_applicant":"I have submitted a {$instance_name} request for you","first_submit_inbox":"My {$instance_name} request needs your {$approve_type}","submit_pending_rejected_applicant_inbox":"Request for {$instance_name} has been rejected","submit_pending_rejected_applicant":"Request for {$instance_name} has been rejected to {$nextApprove_usersname}","submit_pending_rejected_approve":"","submit_pending_rejected_inbox":"My {$instance_name} request needs your {$approve_type}","submit_pending_inbox":"My {$instance_name} request needs your {$approve_type}","submit_terminate_applicant":"Request for {$instance_name} has been cancelled","submit_terminate_approve":"","monitor_delete_applicant":"Request for {$instance_name} has been deleted","submit_completed_applicant":"Request for {$instance_name} has been approved","submit_completed_approve":"","approved_completed_applicant":"Request for {$instance_name} has been approved","approved_completed_approve":"","rejected_completed_applicant":"Request for {$instance_name} has been rejected","rejected_completed_approve":"","reassign_new_inbox_users":"My {$instance_name} request needs your {$approve_type}","trace_approve_cc":"My {$instance_name} request needs your {$approve_type}","remind":"Remind：{$instance_name}, Deadline：{$deadline}","trace_approve_cc_submit":"I have submitted a cc {$instance_name}","distribute_remind":"My {$instance_name} has been end","auto_submit_pending_inbox":"Your {$instance_name} auto submitted to {$current_step_name}","return_pending_inbox":"Request for {$instance_name} has been returned"}},"email":{"final_decision_approved":"Approved","final_decision_rejected":"Rejected","final_decision_nil":"","inscribed":"<br/><br/>Sincerely,<br/>","footnote":"This is an automatically generated email, please do not reply to it.","title":{"input":"input","approval":"approval","first_submit_applicant":"I have submitted a {$instance_name} request for you","first_submit_inbox":"My {$instance_name} request needs your {$approve_type}","submit_pending_rejected_applicant_inbox":"Request for {$instance_name} has been rejected","submit_pending_rejected_applicant":"Request for {$instance_name} has been rejected to {$nextApprove_usersname}","submit_pending_rejected_approve":"","submit_pending_rejected_inbox":"My {$instance_name} request needs your {$approve_type}","submit_pending_inbox":"My {$instance_name} request needs your {$approve_type}","submit_terminate_applicant":"Request for {$instance_name} has been cancelled","submit_terminate_approve":"","monitor_delete_applicant":"{$instance_name} has been deleted","submit_completed_applicant":"I have approved your request for {$instance_name}","submit_completed_approve":"","approved_completed_applicant":"I have approved your request for {$instance_name}","approved_completed_approve":"","rejected_completed_applicant":"I have rejected your request for {$instance_name}","rejected_completed_approve":"","reassign_new_inbox_users":"My {$instance_name} request needs your {$approve_type}","trace_approve_cc":"My {$instance_name} request needs your {$approve_type}","auto_submit_pending_inbox":"Your {$instance_name} has been submitted automatically","return_pending_inbox":"I have returned your request for {$instance_name}"},"body":{"url_input":"input","url_approval":"approval","input":"input","approval":"approval","judge_approved":"approved","judge_submitted":"provided his input for","email_description":"Comments : {$description}.","first_submit_applicant":"Hi {$to_username},<br/><br/>I have submitted a {$instance_name} request on behalf of you.<br/><a href = {$href}>Please click here to view this request.</a>","first_submit_applicant_beApproveDescription":"Hi {$to_username},<br/><br/>I have submitted a {$instance_name} request on behalf of you, and attached the following comments with the request.<br/>Comments : {$approves_description}<br/><a href = {$href}>Please click here to view this request.</a>","first_submit_inbox":"Hi {$to_username},<br/><br/>{$applicant_name} has submitted a {$instance_name} request, which needs your {$approve_type}.<br/><a href = {$href}>Please click here to view this request.</a>","first_submit_inbox_beApproveDescription":"Hi {$to_username},<br/><br/>{$applicant_name} has submitted a {$instance_name} request, which needs your {$approve_type}. He / she has attached the following comments with the request.<br/>Comments : {$approves_description}<br/><a href = {$href}>Please click here to view this request.</a>","submit_pending_rejected_applicant_inbox":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been rejected by {$lastApprove_usersname} with the following comments.<br/>{$description}<br/><a href = {$href}>Please click here to view this request.</a>","submit_pending_rejected_applicant":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been rejected by {$lastApprove_usersname}.He / She has attached the following comments with the request, and has sent it to {$nextApprove_usersname}<br/>{$description}<br/><a href = {$href}>Please click here to view this request.</a>","submit_pending_rejected_approve":"","submit_pending_rejected_inbox":"Hi {$to_username},<br/><br/>{$applicant_name}'s request for {$instance_name} needs your {$approve_type}, which has been rejected by {$lastApprove_usersname} with the following comments.<br/>{$description}<br/><a href = {$href}>Please click here to view this request.</a>","submit_pending_inbox":"Hi {$to_username},<br/><br/>{$applicant_name} has submitted a {$instance_name} request, which needs your {$approve_type}. {$lastApprove_usersname} has {$last_approve_judge} this request.<br/><a href = {$href}>Please click here to view this request.</a>","submit_pending_inbox_beApproveDescription":"Hi {$to_username},<br/><br/>{$applicant_name} has submitted a {$instance_name} request, which needs your {$approve_type}. {$lastApprove_usersname} has {$last_approve_judge} this request with the following comments.<br/>Comments : {$approves_description}<br/><a href = {$href}>Please click here to view this request.</a>","submit_pending_inbox_beApproveDescription_counterSign":"Hi {$to_username},<br/><br/>{$applicant_name} has submitted a {$instance_name} request, which needs your {$approve_type}. {$lastApprove_usersname} has provided their input for this request with the following comments.<br/>Comments : <br/>","submit_terminate_applicant":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been cancelled by {$current_username}.He / She has attached the following comments with the request.<br/>Comments : {$description}.","submit_terminate_approve":"","monitor_delete_applicant":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been deleted.","submit_completed_applicant":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been completed by {$lastApprove_usersname}.<br/><a href = {$href}>Please click here to view this request.</a>","submit_completed_applicant_beApproveDescription":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been completed by {$lastApprove_usersname}. He / she has attached the following comments with the request. <br/>Comments : {$approves_description}<br/><a href = {$href}>Please click here to view this request.</a>","submit_completed_applicant_beApproveDescription_counterSign":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been completed by {$lastApprove_usersname}. They has attached the following comments with the request. <br/>Comments :<br/>","submit_completed_approve":"","approved_completed_applicant":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been final approved by {$lastApprove_usersname}.<br/><a href = {$href}>Please click here to view this request.</a>","approved_completed_applicant_beApproveDescription":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been final approved by {$lastApprove_usersname}. He / she has attached the following comments with the request. <br/>Comments : {$approves_description}<br/><a href = {$href}>Please click here to view this request.</a>","approved_completed_approve":"","rejected_completed_applicant":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been final rejected by {$lastApprove_usersname}. He / She has attached the following comments with the request.<br/>{$description}<br/><a href = {$href}>Please click here to view this request.</a>","rejected_completed_approve":"","reassign_new_inbox_users":"Hi {$to_username},<br/><br/>{$current_user_name} has transferred {$applicant_name}'s {$instance_name} to you with the following comments. <br/>Comments : {$description}<br/><a href = {$href}>Please click here to view this request.</a>。","trace_approve_cc":"Hi {$to_username},<br/><br/>{$applicant_name} has cc a {$instance_name} request, which needs your {$approve_type}.<br/><a href = {$href}>Please click here to view this request.</a>","auto_submit_pending_inbox":"Hi {$to_username},<br/><br/>Your {$instance_name} has been submitted to {$current_step_name} automatically.","return_pending_inbox":"Hi {$to_username},<br/><br/>Your request for {$instance_name} has been returned by {$current_username}.He / She has attached the following comments with the request.<br/>Comments : {$description}."}},"remindMessage":{"update_failed":"Requested action not taken, because this request has been updated.","has_deleted":"This report has been deleted."},"judge":{"approved":"approved","rejected":"rejected"}},"flow":{"point_upgraded":"The workflow has been upgraded. Please make sure this request meet the requirements of the new version.","print_select_template_alert":"Please upgraded to Professional Version.","print_select_title":"Select Template","print_default_print_title":"Default","print_custom_print_title":"Custom","print_button_title":"Print","print_html_title":"SteedOS"},"help":{"href":"<a href = {$href}>Please click here to view this request.</a>","approves":"Approval History","initiator":"Initiator : ","attachment":"Attachment"},"export":{"code":"Code","name":"Name","initiator":"Initiator","initiator_org":"Initiator's Organization","submit_date":"Submit Time","status":"Status","current_step_name":"Current Step Name","current_step_start_date":"Current Step Start Time","state":{"pending":"In Progress","approved":"Approved","rejected":"Rejected","terminated":"Cancelled","finished":"Completed","reassigned":"Reassigned","inhand":"In Progress","relocated":"Relocated"}},"steedos":"Steedos","cc":"cc","saveInstanceToAttachment":"Save request form as an attachment.","forwardFlowText":"Forward description","instanceForwardNote":"Forward the currently selected request to a new workflow and proceed with the approval process.","button_preview":"Preview","remove_cc_approve":"Deleted success","forward_instance_success":"Forward success","isForwardAttachments":"Is forward attachments.","instance_retrieve":"Retrieve","instance_retrieve_reason":"Remarks","instance_retrieve_rules_title":"Retrieve failed","instance_retrieve_rules_content":"You can not retrive a request if user in next step has read the request, or you are in a concurrent signed step.","Retrieved successfully":"Retrieved successfully!","Instance State retrieved":"Retrieved","instance_chrome_print_warning":"Please use the Chrome browser to print.","instance_sign":"Sign","instance_default_opinion":"Already read","instance_submit_date":"Submit date","instance_opinion_edit":"Edit the opinion","instance_opinion_edit_success":"Edit successfully!","instance_opinion_field":"Sign field","instance_cc_error_opinion_field_required":"Please select the sign field","instance_suggestion_toggle":"Sign","instance_approve_read":"Read","instance_approve_from_user_name_label":"cc from","instance_approve_status_text_label":"status","instance_approve_description_label":"suggestion","instance_approve_start_date_label":"start date","instance_approve_finish_date_label":"finish date","instance_approve_read_yes":"yes","instance_approve_read_no":"no","instance_approve_cc_remove":"cancel cc","instance_approve_close_modal":"close","instance_approve_title_label":"Handler:","instance_forward_users":"Forward To","instance_forward_error_users_required":"Users required!","instance_approve_from_user_name_label_forward":"Forward from","instance_approve_forward_remove":"Cancel forward","instance_approve_forward_remove_success":"Request cancelled successfully!","instance_forward_instance_look":"Look the forwarded request","instance_forward_cannot_cancel":"Can not cancel!","instance_forward_instance_state_changed":"Request state has hanged, can not cancel.","webhooks":"Webhooks","webhooks_flow":"Workflow","webhooks_payload_url":"URL","webhooks_content_type":"Content type","webhooks_active":"Active","webhooks_flow_name()":"Workflow","webhooks_description":"Description","workflow_list":"Workflow List","workflow_import_flow":"Import Workflow","workflow_import_flow_success":"Import success","workflow_import_flow_error":"Import failed","workflow_import_flow_info":"Please select the workflow you want to import","flows":"Workflow","instance_readonly_view_url_copy":"Copy Link","instance_readonly_view_url_copy_success":"Tableau Web Data Connector copy successful","instance_related_instances":"Related requests","instance_related_instances_title":"Linked requests","instance_related_instances_placeholder":"Please enter the file name to search for the associated file","workflow_install_desktop":"Install Desktop","workflow_chart":"Workflow Chart","instance_return":"Return","instance_return_success":"Return successfully","instance_return_confirm":"Return the request to {$step_name}({$handlers_name})?","Instance State returned":"Returned","instance_main_attachment":"Main attach","flows_field_map":"Field Map","Instance State readed":"Read","instance_distribute_title":"Distribute","instance_distribute_users":"Users","instance_distribute_error_users_required":"Users required!","instance_distribute_approve_from_user_name_label":"Distribute from","instance_distribute_approve_remove":"Cancel distribute","instance_distribute_instance_look":"Look the distributed request","instance_distribute_note":"Distribute the currently selected request to a new workflow and proceed with the approval process.","instance_distribute_attachments":"Is distribute attachments.","instance_distribute_success":"Distribute success","instance_no_add_permission":"{$actiontype} failed, users no create permission: {$usernames}","instance_workflow_chart_ie_warning":"Do not support viewing the workflow chart in IE, please do this on client software or chrome.","instance_remind_title":"Remind","instance_remind_select_users":"Users","instance_remind_count":"Mode","instance_remind_deadline":"Deadline","instance_remind_success":"Remind successfully","instance_remind_need_remind_users":"Need users","instance_remind_need_remind_count":"Need mode","instance_remind_need_remind_deadline":"Need deadline","instance_remind_count_options":{"single":"single","multi":"multi"},"instance_opinion_title_select":"Select opinions","categories":"Workflow categories","categories_name":"Name","categories_sort_no":"Sort no","not_found_user":"Not Found User","next_step_users_not_found":{"aplicant_superior":"The applicant's superior is not configured, please contact the Administrator.","applicant_role":"The <{$role_name}> you are looking for have not configured,Please contact the administrator.","field_value_empty":"Please enter the value of the <{$field_name}>field","org_no_members":"The next step need <{$org_name}> processing,Please contact the administrator."},"instanc_admin_role_text":"<a href='%s' target='_blank'> configuration in position</a>","instanc_user_role_text":" configuration in position","instanc_set_applicant_role_text":"set positions users","instance_sign_read":"Read","instance_sign_done":"Done","instance_sign_agree":"Agree","instance_sign_period":"。","instance_cc_alert":"Please confirm whether it need to circulate","instance_cc_must_finished":"The cc users：{$not_finished_users_name} had not deal with this request, so you can not submitt this instance to next step","instance_number_rules":"Request number rules","instance_number_rules_name":"Name","instance_number_rules_year":"Year","instance_number_rules_first_number":"Start sequence","instance_number_rules_number":"Sequence","instance_number_rules_rules":"Rules","instance_number_rules_number_builder_error_title":"Builder number error","instance_number_rules_number_builder_error_not_exist":"The number rule does not exist: ","ConfirmDeletion?":"Are you sure?","instance_number_rules_name_only":"The name can not be repeated","flows_btn_export_title":"Export Flow","flows_btn_copylink_title":"Copy Link","instance_distribute_related_instances_title":"Automatically create associated requests","instance_next_step_users_placeholder":"Please select the approver","instance_distribute_to_self":"Also distributed to yourself","my_instances":"My Requests","workflow_import_export_flows":"Workflow import or export","workflow_history_approve_counts":"Show %s history descriptions","workflow_history_approve_description":"History description","instances_start_date":"Receiving time","instances_is_archived":"Archived","instances_archive":"Archive","instances_archived":"Archived","instances_not_archived":"Not archived","workflow_more_inbox":"More Inbox","instance_back":"Back","steedos_tableau_statistical_analysis":"Statistical analysis","steedos_tableau_copy_link":"Copy link","tableau_introduction_modal_close":"Close","ERROR":"Error","steedos_table_add_item":"Add item","approved_description":"Approved","rejected_description":"Rejected","copy":"Copy and Create","from":"From","admin_flow_roles_create":"Create","flow_roles_delete_success":"Delete successfully","add_positions":"Add","save_role":"Save","delete_role":"Delete","flow_roles_update_success":"Update successfully","flow_roles_necessary":"Please fill in role's name","flow_positions_add_suceess":"Add successfully","flow_positions_add_failed":"Be failed to add","flow_positions_update_suceess":"Update successfully","flow_positions_update_failed":"Be failed to update","flow_positions_delete_suceess":"Delete successfully","instance_role_set_is_complete":"Role set up?","instance_set_is_complete":"set up?","flow_roles_help":"Help","set_org_members":"Set department members","set_applicant_manager":"Set the applicant supervisor","instance_permissions_error":"You do not have permission to view this request","start_flows":"Start flows","chart_traces":"Chart Traces","cc_tag":"(Carbon Copying)","workflow_batch_approval":"Batch approval","workflow_batch_approval_btn":"Batch<br/>approval","workflow_batch_approval_processing":"Processing","workflow_batch_approval_message":"This processing file %s","workflow_error_multiple_next_step_users":"'{$insname}' the next person can not handle more than one","workflow_error_multiple_next_step":"'{$insname}' can not have more than one next step","workflow_batch_instances_empty":"There is no data for batch approval","workflow_sign_opinion_to_completed_instance":"This document is over and the signed opinion will not be displayed on the application","workflow_copy_flow":"Copy flow","workflow_copy_flow_text":"Please fill in the new flow name","workflow_copy_flow_success":"The copy flow is successful","workflow_copy_flow_error_reason_required":"Comments are required.","workflow_enabled":"Enabled","workflow_disabled":"Disabled","flows_state":"State","flows_current_modified":"Modified","flows_modified_by_name()":"Editor","flows_category_name()":"Categories","flow_list_title_set_template":"Set Template","flow_list_title_set_script":"Set Script","flow_list_title_set_fieldsMap":"Set Archive relationship","distribute_edit_flow_select_users":"users options","distribute_edit_flow_select_flows":"flows options","flow_list_title_set_distribute":"Set Distribute","distribute_to_self":"can distribute to self","distribute_end_notification":"notificate user after distributed end","instance_deleted":"Deleted","workflow_flow_state_disabled":"The state of flow({$name}) is disabled, Administrator can enable flow.","flow_roles_error_flows_used":"Role has been used by flows: {$names}","instance_approve_not_yet_handled":"Not yet handled","instance_approve_distribute_date_label":"Distribute date","flows_auto_remind":"Auto remind","flows_upload_after_being_distributed":"Allow upload after being distributed","instances_my_finish_date":"Modified","pager_input_hint":"Click and input page number, then press Enter to jump to the specified page","instance_hide_title":"Hide","instance_hide_success":"Hide Success","instance_reopen_title":"Unhide","instance_reopen_success":"Unhide Success","workflow_design_flow":"Design flow","process_delegation_rules":"Process Delegation","process_delegation_rules_from":"From","process_delegation_rules_to":"To","process_delegation_rules_enabled":"Enabled","process_delegation_rules_start_time":"Strat Time","process_delegation_rules_end_time":"End Time","process_delegation_rules_from_name":"From","process_delegation_rules_to_name":"To","process_delegation_rules_start_must_lt_end":"Strat time must less than end time","process_delegation_rules_description":"{$userName} delegated","instance_handler_name":"Handler","instance_handler_organization_fullname":"Organization","url_invalid":"Invalid link","instance_approve_timeout_auto_submitted":"Timeout auto submitted"});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"zh-CN.i18n.json.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/i18n/zh-CN.i18n.json.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Package['universe:i18n'].i18n.addTranslations('zh-CN','',{"Steedos Workflow":"审批中心","inbox":"待审核","outbox":"已审核","draft":"草稿","pending":"进行中","completed":"已完成","monitor":"监控箱","FlowName":"名称","Search":"搜索","My Approval":"审核","My Applications":"我的申请单","Submit":"提交","steedos_desktop":"华炎云","menu_navigation":"导航","Workflow":"审批","form_new":"新建表单","instances":"审批单","instances_name":"标题","instances_applicant_name":"提交人","instances_modified":"处理时间","instances_applicant_organization_name":"部门","instances_submit_date":"提交时间","instances_flow":"流程","instances_step_current_name":"当前步骤","instances_flow_name":"流程","instances_current_step_name":"当前步骤","instance_approve":"核准","instance_reject":"驳回","instance_readed":"已阅","instance_next_step":"下一步","instance_next_step_users":"处理人","instance_initiator":"提交人","instance_approval_history":"签核历程","instance_in_progress":"处理中","instance_submit":"提交","instance_save":"保存","instance_delete":"删除","instance_attachment":"附件","instance_cancel":"取消申请","instance_reassign":"转签核","instance_relocate":"重定位","instance_print":"打印","flow_roles":"审批岗位","flow_roles_name":"岗位名称","flow_positions":"岗位成员","flow_positions_role":"岗位","flow_positions_org":"审批范围","flow_positions_users":"岗位成员","flow_positions_role_name()":"岗位","flow_positions_org_name()":"审批范围","flow_positions_users_name()":"岗位成员","workflow_table_confirm":"确认","workflow_table_delete":"删除","Attachment deleted successfully":"文件删除成功!","Attachment was added successfully":"文件添加成功!","Saved successfully":"申请单已暂存.","Added successfully":"创建成功!","Deleted successfully":"删除成功!","Submitted successfully":"提交成功!","Canceled successfully":"取消申请成功!","Reasigned successfully":"转签核成功!","Relocated successfully":"重定位成功!","Attachments":"附件","Versions":"版本","Current Version":"（最新版本）","workflow_attachment_free_size_limit":"抱歉，免费版工作区只能上传1M以内的文件。","workflow_attachment_paid_size_limit":"您上传的文件大小不得超过","workflow_attachment_download":"下载","workflow_attachment_view":"查看","workflow_attachment_isReadOnly":"只读-","workflow_attachment_versions":"历史版本","workflow_attachment_uploading":"正在上传 ","workflow_attachment_downloading":"正在下载 %s...","workflow_attachment_creating":"正在新建word文档 %s...","workflow_attachment_officeOnline":"编辑","workflow_attachment_save":"保存","workflow_attachment_close":"关闭","workflow_attachment_delete":"删除","workflow_attachment_convert_to_pdf":"正在将 '%s' 转换为pdf格式文件...","workflow_attachment_wordToPdf":"转为pdf","workflow_attachment_wordToPdf_failed":"未转换成功，请重新尝试！","workflow_attachment_locked_tip":"您有文件正在编辑，请解锁后提交","Instance State approved":"已核准","Instance State rejected":"已驳回","Instance State terminated":"被取回","Instance State finished":"已完成","Instance State pending":"审核中","Instance State reassigned":"转签核","Instance State relocated":"重定位","Instance Relocate Hint":"请填写重定位的理由。","Instance Relocate Title":"重定位","Instance Relocate Reason":"请填写重定位的理由。","Instance Relocate NewInboxUsers":"请选择重定位审核人。","Instance Relocate Ok":"重定位提交成功。","Instance Relocate CurStep":"当前步骤: ","instance_reassign_title":"转签核","instance_reassign_curstep":"当前步骤: ","instance_reassign_reason":"请填写转签核的理由。","instance_reassign_ok":"转签核提交成功。","instance_reassign_user":"变更处理人","instance_cancel_title":"取消申请","instance_cancel_reason":"请填写取消申请的理由","instance_reassign_error_reason_required":"请填写转签核的理由。","instance_reassign_error_users_required":"请指定处理人。","instance_cancel_error_reason_required":"请填写取消申请的理由。","instance_select_next_step":"请选择下一步步骤","instance_multi_next_step_tips":"步骤选项有多个，请选择下一步步骤，并使用底部发送按钮提交文件","instance_next_step_user":"请选择下一步处理人","instance_reasons_reject":"驳回时必须填写意见","instance_field":"字段","instance_is_required":"为必填","instance_email_format_error":"邮件地址格式错误","node_office_edit_online":"在线编辑","node_office_message":"您正在使用在线编辑功能，编辑完成后请关闭Office软件。","node_office_warning":"文件已修改，请确认是否保存为新版本？","node_office_upload":"上传 ","node_office_confirm":"确定","node_office_cancel":"取消","node_office_uploaded":"文件已上传","node_office_filePath":"文件：","node_office_exists_message":"文件已存在，是否替换？","node_office_workflow":"审批王","node_pdf_error":"pdf签章失败，请重新进行签章！","node_pdf_sign_online":"在线签章","node_pdf_message":"您正在使用在线签章功能。","node_pdf_filePath":"文件：","workflow_export_thismonth":"导出当月申请单","workflow_export_lastmonth":"导出上月申请单","workflow_export_thisyear":"导出当年申请单","workflow_export_all":"导出所有申请单","workflow_export_filter":"按流程过滤","workflow_export_search":"按流程查看申请单","workflow_export_data":"导出申请单","spaces_isarrearageSpace":"您的工作区已欠费","cc_help":"https://www.steedos.com/cn/help/workflow/instance_carboncopy.html","relocate_help":"https://www.steedos.com/cn/help/workflow/instance_relocate.html","reassign_help":"https://www.steedos.com/cn/help/workflow/instance_reassign.html","forward_help":"https://www.steedos.com/cn/help/workflow/instance_forward.html","export_filter_help":"https://www.steedos.com/cn/help/workflow/instance_search.html","new_help":"https://www.steedos.com/cn/help/workflow/instance_add.html","Inbox Suggestion NextSteps Label":"下一步骤: ","Inbox Suggestion NextSteps Handler Label":"处理人: ","Workflow Designer":"流程设计器","User Management":"用户管理","All flows":"所有流程","Select a flow":"请点击流程分类选择相应流程","Fill in form":"填写表单","Flow upgraded":"流程已升级，请检查您填写的内容是否符合修改后的要求。","Are you sure?":"确认删除吗？","Select placeholder":"请选择","workflow_no_category":"未分类","space_users_error_space_required":"工作区必填","flow_roles_error_positions_exists":"已有用户担任该角色","workflow_left_parenthesis":"（","workflow_right_parenthesis":"）","instance_cc_description":"传阅说明","instance_cc_from":"传阅自","instance_cc_title":"传阅","instance_cc_done":"已传阅","instance_curstep":"当前步骤: ","instance_cc_user":"传阅对象","instance_cc_error_users_required":"请选择传阅对象。","workflow_form_edit":"流程列表","flows_template":"申请单模板","flows_name":"流程名称","flows_print_template":"打印模板","flows_instance_template":"表单模板","flows_description":"流程描述","workflow_attach_unlock":"解锁","workflow_attach_locked_by":"%s 正在编辑","workflow_attach_confirm_delete":"确认删除","workflow_attach_confirm_delete_messages":"你确定删除'%s'吗？","workflow_attach_confirm":"删除","workflow_attach_cancel":"取消","workflow_attach_to_pdf":"转为pdf","workflow_attach_to_pdf_message":"是否将'%s'转为pdf格式文件？","workflow_attach_upload":"上传","workflow_attach_new":"新建","workflow_attachment_signature":"签章","workflow_select_an_app":"应用","workflow_suggestion_placeholder":"请填写意见。","instance_opinion_title":"常用意见","instance_opinion_btn":"常用</br>意见","instance_opinion_input":"请输入常用意见","instance_opinion_add_success":"添加成功!","instance_opinion_remove_success":"移除成功!","instance_opinion_error":"出错了","instance_opinion_exists":"常用意见已存在","instance_opinion_add_tip":"您还没有设置常用意见。","instance_forward_title":"转发","form_field_checkbox_yes":"是","form_field_checkbox_no":"否","flows_events":"自定义脚本","flows_events_error":"自定义脚本错误: ","instance_search_advanced_search":"高级搜索","instance_search_flow":"流程","instance_search_name":"申请单标题","instance_search_file":"文件标题","instance_search_applicant_name":"提交人姓名","instance_search_applicant_organization_name":"提交人所属部门名称","instance_search_submit_date":"提交日期","instance_search_start":"起","instance_search_end":"至","instance_search_result_tip":"过滤的结果","instance_search_state":"申请单状态","instance_search_state_options":{"pending":"流转中","completed":"已结束"},"instance":{"formatter":{"date":{"simple_date":"YYYY年MM月DD日","simple_datetime":"YYYY年MM月DD日 HH:mm","export_date":"YYYY-MM-DD","export_datetime":"YYYY-MM-DD HH:mm"},"checkbox":{"checked":"是","unchecked":"否"}},"instance_view":"<br/><br/>申请单内容摘要如下:<br/>工作区 : {$space_name};<br/>提交 : {$applicant_name};<br/>提交日期 : {$submit_date};","push":{"final_decision_approved":"被核准，","final_decision_rejected":"被驳回，","final_decision_nil":"","title":{"first_submit_applicant":"{$from_username}","first_submit_inbox":"{$from_username}","submit_pending_rejected_applicant_inbox":"{$from_username}","submit_pending_rejected_applicant":"{$from_username}","submit_pending_rejected_approve":"{$from_username}","submit_pending_rejected_inbox":"{$from_username}","submit_pending_inbox":"{$from_username}","submit_terminate_applicant":"{$from_username}","submit_terminate_approve":"{$from_username}","monitor_delete_applicant":"{$applicant_name}","submit_completed_applicant":"{$applicant_name}","submit_completed_approve":"{$from_username}","approved_completed_applicant":"{$applicant_name}","approved_completed_approve":"{$from_username}","rejected_completed_applicant":"{$applicant_name}","rejected_completed_approve":"{$from_username}","reassign_new_inbox_users":"{$from_username}","trace_approve_cc":"{$from_username}","trace_approve_cc_submit":"{$from_username}","auto_submit_pending_inbox":"{$from_username}","return_pending_inbox":"{$from_username}"},"body":{"input":"确认","approval":"审批","first_submit_applicant":"请确认:我已代您提交了{$instance_name}","first_submit_inbox":"{$instance_name}","submit_pending_rejected_applicant_inbox":"请修改:{$instance_name}","submit_pending_rejected_applicant":"您的{$instance_name}已驳回给{$nextApprove_usersname}","submit_pending_rejected_approve":"","submit_pending_rejected_inbox":"{$instance_name}","submit_pending_inbox":"{$instance_name}","submit_terminate_applicant":"{$instance_name}被我取消申请了","submit_terminate_approve":"","monitor_delete_applicant":"您的{$instance_name}已被删除","submit_completed_applicant":"您的{$instance_name}已被确认","submit_completed_approve":"","approved_completed_applicant":"您的{$instance_name}已被核准","approved_completed_approve":"","rejected_completed_applicant":"您的{$instance_name}已被驳回","rejected_completed_approve":"","reassign_new_inbox_users":"{$instance_name}","trace_approve_cc":"{$instance_name}","remind":"催办通知：{$instance_name}，办结时限：{$deadline}。","trace_approve_cc_submit":"我已提交了传阅的申请单{$instance_name}","distribute_remind":"您分发的{$instance_name}申请单已结束。","auto_submit_pending_inbox":"您的申请单{$instance_name}处理已超时，现已自动发送至{$current_step_name}","return_pending_inbox":"您的{$instance_name}已被退回"}},"email":{"final_decision_approved":"被核准，","final_decision_rejected":"被驳回，","final_decision_nil":"","inscribed":"<br/><br/>","footnote":"这是由审批王自动发送的邮件, 请不要直接回复。","title":{"input":"确认","approval":"审批","first_submit_applicant":"{$from_username}代您提交了{$instance_name}","first_submit_inbox":"请{$approve_type}:{$instance_name}","submit_pending_rejected_applicant_inbox":"请修改:{$instance_name}","submit_pending_rejected_applicant":"您的{$instance_name}已驳回给{$nextApprove_usersname}","submit_pending_rejected_approve":"","submit_pending_rejected_inbox":"请重新{$approve_type}:{$instance_name}","submit_pending_inbox":"请{$approve_type}:{$instance_name}","submit_terminate_applicant":"{$instance_name}被我取消申请了","submit_terminate_approve":"","monitor_delete_applicant":"删除了您的{$instance_name}","submit_completed_applicant":"确认了您的{$instance_name}","submit_completed_approve":"","approved_completed_applicant":"核准了您的{$instance_name}","approved_completed_approve":"","rejected_completed_applicant":"驳回了您的{$instance_name}","rejected_completed_approve":"","reassign_new_inbox_users":"请{$approve_type}:{$instance_name}","trace_approve_cc":"请{$approve_type}:{$instance_name}","auto_submit_pending_inbox":"您的{$instance_name}已超时自动流转","return_pending_inbox":"退回了您的{$instance_name}"},"body":{"url_input":"查看并确认","url_approval":"进行审批","input":"确认","approval":"审批","judge_approved":"核准","judge_submitted":"确认","email_description":"驳回理由是:{$description} 。","first_submit_applicant":"{$to_username}:<br/><br/>您好！<br/><br/>我已代您提交了{$instance_name}。<br/><a href = {$href}>请点击查看</a>。","first_submit_applicant_beApproveDescription":"{$to_username}:<br/><br/>您好！<br/><br/>我已代您提交了{$instance_name}。<br/>备注是 : {$approves_description}<br/><a href = {$href}>请点击查看</a>。","first_submit_inbox":"{$to_username}:<br/><br/>您好！<br/><br/>{$applicant_name}提交了{$instance_name}。<br/><a href = {$href}>请点击{$url_approve_type}</a>。","first_submit_inbox_beApproveDescription":"{$to_username}:<br/><br/>您好！<br/><br/>{$applicant_name}提交了{$instance_name}。<br/>备注是 : {$approves_description}<br/><a href = {$href}>请点击{$url_approve_type}</a>。","submit_pending_rejected_applicant_inbox":"{$to_username}:<br/><br/>您好！<br/><br/>您的申请单被{$lastApprove_usersname}驳回，请确认是否要修改。<br/>{$description}<br/><a href = {$href}>请点击查看</a>。","submit_pending_rejected_applicant":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}被{$lastApprove_usersname}驳回, 目前{$nextApprove_usersname}正在处理中。<br/>{$description} <br/><a href = {$href}>请点击查看</a>。","submit_pending_rejected_approve":"","submit_pending_rejected_inbox":"{$to_username}:<br/><br/>您好！<br/><br/>请重新{$approve_type} : {$applicant_name}的{$instance_name}, 此申请单被{$lastApprove_usersname}驳回。<br/>{$description}<br/><a href = {$href}>请点击{$url_approve_type}</a>。","submit_pending_inbox":"{$to_username}:<br/><br/>您好！<br/><br/>请{$approve_type} : {$applicant_name}的{$instance_name}。{$lastApprove_usersname}已{$last_approve_judge}此申请单。<br/><a href = {$href}>请点击{$url_approve_type}</a>。","submit_pending_inbox_beApproveDescription":"{$to_username}:<br/><br/>您好！<br/><br/>请{$approve_type} : {$applicant_name}的{$instance_name}。{$lastApprove_usersname}已{$last_approve_judge}此申请单。<br/>他/她的意见是 : {$approves_description}<br/><a href = {$href}>请点击{$url_approve_type}</a>。","submit_pending_inbox_beApproveDescription_counterSign":"{$to_username}:<br/><br/>您好！<br/><br/>请{$approve_type} : {$applicant_name}的{$instance_name}。{$lastApprove_usersname}已确认此申请单。<br/>他/她们的意见是 : <br/>","submit_terminate_applicant":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}被取消申请。<br/>取消申请的理由是：{$description}。","submit_terminate_approve":"","monitor_delete_applicant":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}已被删除。","submit_completed_applicant":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}已被{$lastApprove_usersname}确认, 完成审核。<br/><a href = {$href}>请点击查看</a>。","submit_completed_applicant_beApproveDescription":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}已被{$lastApprove_usersname}确认, 完成审核。<br/>他/她的意见是 : {$approves_description}<br/><a href = {$href}>请点击查看</a>。","submit_completed_applicant_beApproveDescription_counterSign":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}已被{$lastApprove_usersname}确认, 完成审核。<br/>他/她们的意见是 :<br/> ","submit_completed_approve":"","approved_completed_applicant":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}已被{$lastApprove_usersname}核准, 完成审核。<br/><a href = {$href}>请点击查看</a>。","approved_completed_applicant_beApproveDescription":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}已被{$lastApprove_usersname}核准, 完成审核。<br/>他/她的意见是 : {$approves_description}<br/><a href = {$href}>请点击查看</a>。","approved_completed_approve":"","rejected_completed_applicant":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}已被{$lastApprove_usersname}驳回。<br/>{$description}<br/><a href = {$href}>请点击查看</a>。","rejected_completed_approve":"","reassign_new_inbox_users":"{$to_username}:<br/><br/>您好！<br/><br/>{$current_user_name}将{$applicant_name}的{$instance_name}转发给您{$approve_type}。<br/>转发的理由是：{$description}<br/><a href = {$href}>请点击{$url_approve_type}</a>。","trace_approve_cc":"{$to_username}:<br/><br/>您好！<br/><br/>{$applicant_name}传阅了{$instance_name}。<br/><a href = {$href}>请点击{$url_approve_type}</a>。","auto_submit_pending_inbox":"您的申请单{$instance_name}处理已超时，现已自动发送至{$current_step_name}","return_pending_inbox":"{$to_username}:<br/><br/>您好！<br/><br/>您的{$instance_name}被退回。<br/>退回的理由是：{$description}。"}},"remindMessage":{"update_failed":"申请单状态已更新，您的操作未能执行。","has_deleted":"申请单已删除。"},"judge":{"approved":"核准","rejected":"驳回"}},"flow":{"point_upgraded":"流程已升级，请检查您填写的内容是否符合修改后的要求。","print_select_template_alert":"只有专业版才有自定义模板功能，如有需要请升级到专业版或联系客服","print_select_title":"打印样式","print_default_print_title":"默认","print_custom_print_title":"自定义","print_button_title":"打印","print_html_title":"审批王"},"help":{"href":"<a href = {$href}>请点击查看</a>。","approves":"签核历程","initiator":"提交人 : ","attachment":"附件"},"export":{"code":"编号","name":"名称","initiator":"提交人","initiator_org":"提交人所属部门","submit_date":"提交日期","status":"状态","current_step_name":"当前步骤","current_step_start_date":"当前步骤开始日期","state":{"pending":"审核中","approved":"已核准","rejected":"已驳回","terminated":"被取回","finished":"已完成","reassigned":"转签核","inhand":"处理中","relocated":"重定位"}},"steedos":"华炎云","cc":"传阅","saveInstanceToAttachment":"将原表单存储为附件","forwardFlowText":"备注","instanceForwardNote":"将当前选中的文件转发到新的流程，继续执行审批操作","isForwardAttachments":"同时转发原表单附件","button_preview":"预览","remove_cc_approve":"传阅删除成功","forward_instance_success":"文件转发成功","instance_retrieve":"取回","instance_retrieve_reason":"备注","instance_retrieve_rules_title":"无法取回","instance_retrieve_rules_content":"下一步处理人已读无法取回；会签节点无法取回。","Retrieved successfully":"取回成功!","Instance State retrieved":"取回","instance_chrome_print_warning":"请使用Chrome浏览器进行打印","instance_sign":"签批","instance_default_opinion":"已阅","instance_submit_date":"提交日期","instance_opinion_edit":"请修改常用意见","instance_opinion_edit_success":"修改成功","instance_opinion_field":"签批字段","instance_cc_error_opinion_field_required":"请选择签批字段","instance_suggestion_toggle":"签批","instance_approve_read":"已读","instance_approve_from_user_name_label":"传阅自","instance_approve_status_text_label":"操作","instance_approve_description_label":"处理意见","instance_approve_start_date_label":"开始时间","instance_approve_finish_date_label":"结束时间","instance_approve_read_yes":"是","instance_approve_read_no":"否","instance_approve_cc_remove":"取消传阅","instance_approve_close_modal":"关闭","instance_approve_title_label":"处理人：","instance_forward_users":"转发对象","instance_forward_error_users_required":"请选择对象!","instance_approve_from_user_name_label_forward":"转发自","instance_approve_forward_remove":"取消转发","instance_approve_forward_remove_success":"取消成功","instance_forward_instance_look":"查看转发后申请单","instance_forward_cannot_cancel":"不符合取消条件！","instance_forward_instance_state_changed":"申请单状态已更新，不能取消！","instance_approve_modal_modification":"修改","instance_approve_modal_save":"保存","instance_approve_moda_back":"取消","instance_approve_modal_modificationsave":"您的修改保存成功","webhooks":"Webhooks","webhooks_flow":"流程","webhooks_payload_url":"URL","webhooks_active":"激活","webhooks_content_type":"传输数据类型","edit":"编辑","flow_list":"流程列表","import_flow":"导入流程","import_flow_success":"导入成功","import_flow_error":"导入失败","import_flow_info":"请选择需要导入的流程","webhooks_flow_name()":"流程","webhooks_description":"描述","workflow_list":"流程列表","workflow_import_flow":"导入流程","workflow_import_flow_success":"导入成功","workflow_import_flow_error":"导入失败","workflow_import_flow_info":"请选择需要导入的流程","flows":"流程","instance_readonly_view_url_copy":"复制链接","instance_readonly_view_url_copy_success":"Tableau Web 数据连接器已复制","instance_related_instances":"相关文件","instance_related_instances_title":"关联文件","instance_related_instances_placeholder":"请输入文件名称搜索关联文件","workflow_install_desktop":"安装客户端","workflow_chart":"流程图","instance_return":"退回","instance_return_success":"退回成功","instance_return_confirm":"确认退回至{$step_name}({$handlers_name})?","Instance State returned":"已退回","instance_main_attachment":"正文","flows_field_map":"归档关系","Instance State readed":"已阅","instance_distribute_title":"分发","instance_distribute_users":"分发对象","instance_distribute_error_users_required":"请选择分发对象!","instance_distribute_approve_from_user_name_label":"分发自","instance_distribute_approve_remove":"取消分发","instance_distribute_instance_look":"查看分发后申请单","instance_distribute_note":"将当前选中的文件分发到新的流程，继续执行审批操作","instance_distribute_attachments":"同时分发原表单附件","instance_distribute_success":"文件分发成功","instance_no_add_permission":"{$actiontype}未成功。以下用户没有新建此申请单的权限：{$usernames}","instance_workflow_chart_ie_warning":"暂不支持在IE中查看流程图，请在客户端软件或chrome上执行该操作。","instance_remind_title":"催办","instance_remind_select_users":"催办对象","instance_remind_count":"催办方式","instance_remind_deadline":"办结时限","instance_remind_success":"催办成功","instance_remind_need_remind_users":"缺少催办对象","instance_remind_need_remind_count":"缺少催办方式","instance_remind_need_remind_deadline":"缺少办结时限","instance_remind_count_options":{"single":"单次提醒","multi":"多次提醒"},"instance_opinion_title_select":"其他常用意见","categories":"流程分类","categories_name":"名称","categories_sort_no":"排序号","not_found_user":"未找到处理人","next_step_users_not_found":{"aplicant_superior":"申请人上级未配置，请联系管理员。","applicant_role":"您要找的「{$role_name}」还未配置，请联系管理员。","field_value_empty":"获取处理人，请先填写「{$field_name}」。","org_no_members":"下一步需「{$org_name}」处理，请联系管理员。"},"instanc_admin_role_text":"<a href='%s' target='_blank'>岗位中进行配置。</a>","instanc_user_role_text":"岗位中进行配置","instanc_set_applicant_role_text":"设置","instance_sign_read":"已阅","instance_sign_done":"已办","instance_sign_agree":"同意","instance_sign_period":"。","instance_cc_alert":"还需传阅给其他人员吗？","instance_cc_must_finished":"当前步骤被传阅人员：{$not_finished_users_name} 还未处理，故不能提交至下一步","instance_number_rules":"流程编号规则","instance_number_rules_name":"名称","instance_number_rules_year":"年份","instance_number_rules_first_number":"起始序号","instance_number_rules_number":"序号","instance_number_rules_rules":"编号规则","instance_number_rules_number_builder_error_title":"文件编号生成失败","instance_number_rules_number_builder_error_not_exist":"流程编号规则不存在: ","ConfirmDeletion?":"确认删除?","instance_number_rules_name_only":"名称已存在","flows_btn_export_title":"导出流程","flows_btn_copylink_title":"复制链接","instance_distribute_related_instances_title":"自动创建关联文件","instance_next_step_users_placeholder":"请选择下一步处理人","instance_distribute_to_self":"同时分发给自己","my_instances":"我的文件","workflow_import_export_flows":"流程导入导出","workflow_history_approve_counts":"已显示%s条历史意见","workflow_history_approve_description":"历史意见","instances_start_date":"接收时间","instances_is_archived":"已归档","instances_archive":"归档","instances_archived":"已归档","instances_not_archived":"未归档","workflow_more_inbox":"更多待审核","instance_back":"返回","steedos_tableau_statistical_analysis":"统计分析","steedos_tableau_copy_link":"复制链接","tableau_introduction_modal_close":"关闭","ERROR":"错误","steedos_table_add_item":"新增一行","approved_description":"同意","rejected_description":"不同意","copy":"复制并新建","from":"来自","admin_flow_roles_create":"新建","flow_roles_delete_success":"删除成功","add_positions":"新增","save_role":"保存","delete_role":"删除","flow_roles_update_success":"更新成功","flow_roles_necessary":"请填写岗位名称","flow_positions_add_suceess":"添加成功","flow_positions_add_failed":"添加失败","flow_positions_update_suceess":"更新成功","flow_positions_update_failed":"更新失败","flow_positions_delete_suceess":"删除成功","instance_role_set_is_complete":"岗位设置完成？","instance_set_is_complete":"设置完成？","flow_roles_help":"帮助","set_org_members":"设置部门成员","set_applicant_manager":"设置申请人上级主管","instance_permissions_error":"您没有权限查看此申请单","start_flows":"星标流程","chart_traces":"图形化历程","cc_tag":"（传阅中）","workflow_batch_approval":"批量审批","workflow_batch_approval_btn":"批量<br/>审批","workflow_batch_approval_processing":"处理中","workflow_batch_approval_message":"本次处理文件%s份","workflow_error_multiple_next_step_users":"「{$insname}」的下一步处理人有多个","workflow_error_multiple_next_step":"「{$insname}」的下一步步骤有多个","workflow_batch_instances_empty":"没有可批量审批的数据","workflow_sign_opinion_to_completed_instance":"此文件已结束，签署的意见不会显示在申请单上","workflow_copy_flow":"复制流程","workflow_copy_flow_text":"请填写新流程名称","workflow_copy_flow_success":"复制流程成功","workflow_copy_flow_error_reason_required":"请填写新流程名称","workflow_enabled":"启用","workflow_disabled":"停用","flows_state":"状态","flows_current_modified":"修改时间","flows_modified_by_name()":"修改者","flows_category_name()":"流程分类","flow_list_title_set_template":"设置模版","flow_list_title_set_script":"设置脚本","flow_list_title_set_fieldsMap":"设置归档关系","distribute_edit_flow_select_users":"流程被分发时分发对象选择范围","distribute_edit_flow_select_flows":"搜索此步骤可分发流程","flow_list_title_set_distribute":"设置分发","distribute_to_self":"分发时可分发给自己","distribute_end_notification":"分发结束后提醒发起人","instance_deleted":"已删除","workflow_flow_state_disabled":"此申请单对应流程\"{$name}\"已被禁用，如想正常修改及提交请联系管理员启用流程","flow_roles_error_flows_used":"已有以下流程使用此角色：{$names}","instance_approve_not_yet_handled":"未处理","instance_approve_distribute_date_label":"分发时间","flows_auto_remind":"自动催办","flows_upload_after_being_distributed":"被分发后是否允许上传附件","instances_my_finish_date":"处理时间","pager_input_hint":"点击输入页码，然后按回车可跳转到指定页","instance_hide_title":"隐藏","instance_hide_success":"隐藏成功","instance_reopen_title":"取消隐藏","instance_reopen_success":"取消隐藏成功","workflow_design_flow":"设计流程","process_delegation_rules":"流程委托","process_delegation_rules_from":"委托人","process_delegation_rules_to":"被委托人","process_delegation_rules_enabled":"启用","process_delegation_rules_start_time":"委托开始","process_delegation_rules_end_time":"委托结束","process_delegation_rules_from_name":"委托人","process_delegation_rules_to_name":"被委托人","process_delegation_rules_start_must_lt_end":"开始时间应小于结束时间","process_delegation_rules_description":"{$userName}委托","instance_handler_name":"处理人","instance_handler_organization_fullname":"部门","url_invalid":"无效的链接","instance_approve_timeout_auto_submitted":"超时通过"});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkNpm.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/checkNpm.js                                                                               //
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
  "node-schedule": "^1.3.1",
  cookies: "^0.6.2",
  "xml2js": "^0.4.19",
  mkdirp: "^0.3.5",
  "sprintf-js": "^1.0.3"
}, 'steedos:workflow');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"collection_helpers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/collection_helpers.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tapi18n.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/tapi18n.coffee                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"core.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/core.coffee                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Workflow = {};
this.ImageSign = {};
this.TracesTemplate = {};
this.InstanceformTemplate = {};
this.InstanceAttachmentTemplate = {};
this.InstanceSignText = {};
this.RelatedInstances = {};
this.InstanceMacro = {
  context: {}
};
this.TracesManager = {};

if (Meteor.isClient) {
  Meteor.startup(function () {
    var workflow_three_columns;
    workflow_three_columns = localStorage.getItem("workflow_three_columns");

    if (workflow_three_columns && workflow_three_columns === "off") {
      return $("body").removeClass("three-columns");
    } else {
      return $("body").addClass("three-columns");
    }
  });
}

InstanceSignText.isOpinionField_from_string = function (field_formula) {
  return (field_formula != null ? field_formula.indexOf("{traces.") : void 0) > -1 || (field_formula != null ? field_formula.indexOf("{signature.traces.") : void 0) > -1 || (field_formula != null ? field_formula.indexOf("{yijianlan:") : void 0) > -1 || (field_formula != null ? field_formula.indexOf("{\"yijianlan\":") : void 0) > -1 || (field_formula != null ? field_formula.indexOf("{'yijianlan':") : void 0) > -1;
};

InstanceSignText.includesOpinionField = function (form, form_version) {
  var _form_version, field_formulas, fields;

  field_formulas = new Array();
  _form_version = {};

  if (Meteor.isServer) {
    _form_version = uuflowManager.getFormVersion(db.forms.findOne({
      _id: form
    }), form_version);
  } else {
    _form_version = db.form_versions.findOne({
      _id: form_version,
      form: form
    });
  }

  fields = (_form_version != null ? _form_version.fields : void 0) || [];
  fields.forEach(function (f) {
    var ref;

    if (f.type === 'table') {
      return console.log('ignore opinion field in table');
    } else if (f.type === 'section') {
      return f != null ? (ref = f.fields) != null ? ref.forEach(function (f1) {
        return field_formulas.push(f1.formula);
      }) : void 0 : void 0;
    } else {
      return field_formulas.push(f.formula);
    }
  });
  return _.some(field_formulas, function (field_formula) {
    return InstanceformTemplate.helpers.isOpinionField_from_string(field_formula);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"models":{"forms.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/forms.coffee                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flows.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/flows.coffee                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_roles.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/flow_roles.coffee                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_positions.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/flow_positions.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instances.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/instances.coffee                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"categories.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/categories.coffee                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"spaces.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/spaces.coffee                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deleted_instances.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/deleted_instances.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"auth_tokens.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/auth_tokens.coffee                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
db.auth_tokens = new Meteor.Collection('auth_tokens');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"webhooks.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/webhooks.coffee                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"space_user_signs.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/space_user_signs.coffee                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"space_users.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/models/space_users.coffee                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"cfs":{"instances.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/cfs/instances.coffee                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"admin.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/lib/admin.coffee                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"lib":{"instance_readonly_template.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/lib/instance_readonly_template.coffee                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _getLocale, _getRequiredFields, _getStartStepEditableFields, _getStartStepRequiredFields, _getTemplateData, _getViewHtml;

InstanceReadOnlyTemplate = {};
InstanceReadOnlyTemplate.instance_attachment = "<tr>\n	<td class=\"ins-attach-view\">\n		<a href=\"{{ins_attach_download_url _id absolute}}\" class=\"ins_attach_href\" target=\"_parent\" data-name=\"{{this.name}}\" data-type=\"{{this.original.type}}\" data-id=\"{{_id}}\">{{this.name}}</a>\n	</td>\n</tr>";
InstanceReadOnlyTemplate.afSelectUserRead = "<div class='selectUser form-control ins_applicant'>{{value}}</div>";
InstanceReadOnlyTemplate.afFormGroupRead = "<div class='form-group'>\n	{{#with getField this.name}}\n		{{#if equals type 'section'}}\n				<div class='section callout callout-default'>\n					<label class=\"control-label\">{{f_label this}}</label>\n					<p>{{{description}}}</p>\n				</div>\n		{{else}}\n			{{#if equals type 'table'}}\n				<div class=\"panel panel-default steedos-table\">\n					<div class=\"panel-body\" style=\"padding:0px;\">\n						<div class=\"panel-heading\" >\n							<label class='control-label'>{{getLabel code}}</label>\n							<span class=\"description\">{{{description}}}</span>\n						</div>\n						<div class=\"readonly-table\" style=\"padding:0px;overflow-x:auto;\">\n								<table type='table' class=\"table table-bordered table-condensed autoform-table\" style='margin-bottom:0px;' {{this.atts}} id=\"{{this.code}}Table\" name=\"{{this.code}}\" data-schema-key=\"{{this.name}}\">\n									<thead id=\"{{this.name}}Thead\" name=\"{{this.name}}Thead\">\n										{{{getTableThead this}}}\n									</thead>\n									<tbody id=\"{{this.name}}Tbody\" name=\"{{this.name}}Tbody\">\n										{{{getTableBody this}}}\n									</tbody>\n								</table>\n						</div>\n					</div>\n				</div>\n			{{else}}\n				{{#if showLabel}}\n					<label>{{getLabel code}}</label>\n				{{/if}}\n				<div class='{{getCfClass this}} form-control' readonly disabled>{{{getValue code}}}</div>\n			{{/if}}\n		{{/if}}\n	{{/with}}\n</div>";
InstanceReadOnlyTemplate.afFormGroup = "\n{{#with getField this.name}}\n		{{#if equals type 'section'}}\n			<div class=\"form-group\">\n				<div class='section callout callout-default'>\n					<label class=\"control-label\">{{f_label this}}</label>\n					<p>{{{description}}}</p>\n				</div>\n  				</div>\n		{{else}}\n			{{#if equals type 'table'}}\n				<div class=\"panel panel-default steedos-table\">\n					<div class=\"panel-body\" style=\"padding:0px;\">\n						<div class=\"panel-heading\" >\n							<label class='control-label'>{{getLabel code}}</label>\n							<span class=\"description\">{{{description}}}</span>\n						</div>\n						<div class=\"readonly-table\" style=\"padding:0px;overflow-x:auto;\">\n								<table type='table' class=\"table table-bordered table-condensed autoform-table\" style='margin-bottom:0px;' {{this.atts}} id=\"{{this.code}}Table\" name=\"{{this.code}}\" data-schema-key=\"{{this.name}}\">\n									<thead id=\"{{this.name}}Thead\" name=\"{{this.name}}Thead\">\n										{{{getTableThead this}}}\n									</thead>\n									<tbody id=\"{{this.name}}Tbody\" name=\"{{this.name}}Tbody\">\n										{{{getTableBody this}}}\n									</tbody>\n								</table>\n						</div>\n					</div>\n				</div>\n			{{else}}\n				{{#if equals type 'input'}}\n					<div class=\"form-group\" data-required=\"{{#if is_required}}true{{/if}}\">\n						<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n						<input type=\"text\" title=\"{{getLabel code}}\" name=\"{{code}}\" {{getPermissions code}} data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n					</div>\n				{{else}}\n					{{#if equals type 'number'}}\n						<div class=\"form-group\">\n							<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n							<input type=\"number\" title=\"{{getLabel code}}\" name=\"{{code}}\" data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n						</div>\n					{{else}}\n						{{#if equals type 'date'}}\n							<div class=\"form-group\">\n								<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n								<input type=\"text\" title=\"{{getLabel code}}\" name=\"{{code}}\" data-type=\"date\" data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n							</div>\n						{{else}}\n							{{#if equals type 'dateTime'}}\n								<div class=\"form-group\">\n									<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n									<input type=\"text\" title=\"{{getLabel code}}\" name=\"{{code}}\" data-type='datetime' data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n								</div>\n							{{else}}\n								{{#if equals type 'password'}}\n									<div class=\"form-group\">\n										<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n										<input type=\"password\" title=\"{{getLabel code}}\" name=\"{{code}}\" data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n									</div>\n								{{else}}\n									{{#if equals type 'select'}}\n										<div class=\"form-group\">\n											<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n											<select name=\"{{code}}\" data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n												{{#each options this}}\n													<option value=\"{{value}}\">{{label}}</option>\n												{{/each}}\n											</select>\n										</div>\n									{{else}}\n										{{#if equals type 'radio'}}\n											<div class=\"form-group\">\n												<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n												<div class=\"af-radio-group\" data-schema-key=\"{{getLabel code}}\">\n													{{#each options this}}\n        												<label class=\"radio-inline fix-indent\"><input type=\"radio\" value=\"{{value}}\" name=\"{{../code}}\" class=\"radio-inline fix-indent\"> {{label}}</label>\n    													{{/each}}\n    												</div>\n											</div>\n										{{else}}\n											{{#if equals type 'multiSelect'}}\n												<div class=\"form-group\">\n													<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n													<div class=\"af-checkbox-group\" data-schema-key=\"{{getLabel code}}\">\n														{{#each options this}}\n														<label class=\"checkbox-inline fix-indent\"><input type=\"checkbox\" value=\"{{value}}\" name=\"{{../code}}\" class=\"checkbox-inline fix-indent\"> {{label}}</label>\n														{{/each}}\n													</div>\n												</div>\n											{{else}}\n												{{#if equals type 'url'}}\n													<div class=\"form-group\">\n														<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n														<input type=\"url\" title=\"{{getLabel code}}\" name=\"{{code}}\" data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n													</div>\n												{{else}}\n													{{#if equals type 'email'}}\n														<div class=\"form-group\">\n															<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n															<input type=\"email\" title=\"{{getLabel code}}\" name=\"{{code}}\" data-schema-key=\"{{getLabel code}}\" class=\"form-control\">\n														</div>\n													{{else}}\n														{{#if equals type 'checkbox'}}\n															<div class=\"form-group\">\n																<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n																<div class=\"checkbox\" data-schema-key=\"{{getLabel code}}\">\n																	<label style=\"width: 100%;\"><input type=\"checkbox\" value=\"true\" name=\"{{code}}\" class=\"checkbox-inline fix-indent\"></label>\n																</div>\n															</div>\n														{{else}}\n															<div class=\"form-group\">\n																<label for=\"7ZQnDsXBGohZMetA5\" class=\"control-label\">{{getLabel code}}</label>\n																<div class='{{getCfClass this}} form-control' readonly disabled>{{{getValue code}}}</div>\n															</div>\n														{{/if}}\n													{{/if}}\n												{{/if}}\n											{{/if}}\n										{{/if}}\n									{{/if}}\n								{{/if}}\n							{{/if}}\n						{{/if}}\n					{{/if}}\n				{{/if}}\n			{{/if}}\n		{{/if}}\n	{{/with}}";

InstanceReadOnlyTemplate.create = function (tempalteName, steedosData) {
  var template, templateCompiled, templateRenderFunction;
  template = InstanceReadOnlyTemplate[tempalteName];
  templateCompiled = SpacebarsCompiler.compile(template, {
    isBody: true
  });
  templateRenderFunction = eval(templateCompiled);
  Template[tempalteName] = new Blaze.Template(tempalteName, templateRenderFunction);
  Template[tempalteName].steedosData = steedosData;
  return Template[tempalteName].helpers(InstanceformTemplate.helpers);
};

InstanceReadOnlyTemplate.createInstanceSignText = function (steedosData) {
  var instanceSignTextCompiled, instanceSignTextHtml, instanceSignTextRenderFunction;
  instanceSignTextHtml = _getViewHtml('client/views/instance/instance_sign_text.html');
  instanceSignTextCompiled = SpacebarsCompiler.compile(instanceSignTextHtml, {
    isBody: true
  });
  instanceSignTextRenderFunction = eval(instanceSignTextCompiled);
  Template.instanceSignText = new Blaze.Template("instanceSignText", instanceSignTextRenderFunction);
  Template.instanceSignText.steedosData = steedosData;
  return Template.instanceSignText.helpers(InstanceSignText.helpers);
};

InstanceReadOnlyTemplate.createImageSign = function (steedosData) {
  var imageSignCompiled, imageSignHtml, imageSignRenderFunction;
  imageSignHtml = _getViewHtml('client/views/instance/image_sign.html');
  imageSignCompiled = SpacebarsCompiler.compile(imageSignHtml, {
    isBody: true
  });
  imageSignRenderFunction = eval(imageSignCompiled);
  Template.imageSign = new Blaze.Template("imageSign", imageSignRenderFunction);
  Template.imageSign.steedosData = steedosData;
  return Template.imageSign.helpers(ImageSign.helpers);
};

InstanceReadOnlyTemplate.init = function (steedosData) {
  InstanceReadOnlyTemplate.create("afSelectUserRead", steedosData);

  if (Meteor.isServer) {
    InstanceReadOnlyTemplate.create("afFormGroup", steedosData);
  }

  InstanceReadOnlyTemplate.create("afFormGroupRead", steedosData);

  if (Meteor.isServer) {
    InstanceReadOnlyTemplate.create("instance_attachment", {
      absolute: steedosData.absolute
    });
    InstanceReadOnlyTemplate.createImageSign(steedosData);
    return InstanceReadOnlyTemplate.createInstanceSignText(steedosData);
  }
};

InstanceReadOnlyTemplate.getValue = function (value, field, locale, utcOffset) {
  var date, e, hours, month, seconds, t, t0, t1, year;

  if (!value && value !== false) {
    return '';
  }

  switch (field.type) {
    case 'email':
      value = value ? '<a href=\'mailto:' + value + '\'>' + value + '</a>' : '';
      break;

    case 'url':
      if (value) {
        if (value.indexOf("http") === 0) {
          try {
            value = "<a href='" + encodeURI(value) + "' target='_blank'>" + value + "</a>";
          } catch (error) {
            e = error;
            value = "<a href='' target='_blank'>" + value + "</a>";
          }
        } else {
          value = "<a href='http://" + encodeURI(value) + "' target='_blank'>" + value + "</a>";
        }
      } else {
        value = '';
      }

      break;

    case 'group':
      if (field.is_multiselect) {
        value = value != null ? value.getProperty("fullname").toString() : void 0;
      } else {
        value = value != null ? value.fullname : void 0;
      }

      break;

    case 'user':
      if (field.is_multiselect) {
        value = value != null ? value.getProperty("name").toString() : void 0;
      } else {
        value = value != null ? value.name : void 0;
      }

      break;

    case 'password':
      value = '******';
      break;

    case 'checkbox':
      if (value && value !== 'false') {
        value = TAPi18n.__("form_field_checkbox_yes", {}, locale);
      } else {
        value = TAPi18n.__("form_field_checkbox_no", {}, locale);
      }

      break;

    case 'dateTime':
      if (value && value.length === 16) {
        t = value.split("T");
        t0 = t[0].split("-");
        t1 = t[1].split(":");
        year = t0[0];
        month = t0[1];
        date = t0[2];
        hours = t1[0];
        seconds = t1[1];
        value = new Date(year, month - 1, date, hours, seconds);
      } else {
        value = new Date(value);
      }

      value = InstanceReadOnlyTemplate.formatDate(value, utcOffset);
      break;

    case 'input':
      if (field.is_textarea) {
        value = Spacebars.SafeString(Markdown(value));
      }

      break;

    case 'number':
      if (value || value === 0) {
        if (typeof value === 'string') {
          value = parseFloat(value);
        }

        value = value.toFixed(field.digits);
        value = Steedos.numberToString(value, locale);
      }

      break;

    case 'odata':
      value = value['@label'];
  }

  return value;
};

InstanceReadOnlyTemplate.getLabel = function (fields, code) {
  var field;
  field = fields.findPropertyByPK("code", code);

  if (field) {
    if (field.name) {
      return field.name;
    } else {
      return field.code;
    }
  }
};

InstanceReadOnlyTemplate.getInstanceFormVersion = function (instance) {
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

InstanceReadOnlyTemplate.getFlowVersion = function (instance) {
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

_getViewHtml = function (path) {
  var viewHtml;
  viewHtml = Assets.getText(path);

  if (viewHtml) {
    viewHtml = viewHtml.replace(/<template[\w\s\"\=']+>/i, "").replace(/<\/template>/i, "");
  }

  return viewHtml;
};

_getLocale = function (user) {
  var locale, ref, ref1;

  if ((user != null ? (ref = user.locale) != null ? ref.toLocaleLowerCase() : void 0 : void 0) === 'zh-cn') {
    locale = "zh-CN";
  } else if ((user != null ? (ref1 = user.locale) != null ? ref1.toLocaleLowerCase() : void 0 : void 0) === 'en-us') {
    locale = "en";
  } else {
    locale = "zh-CN";
  }

  return locale;
};

_getRequiredFields = function (fields, rev) {
  if (!rev) {
    rev = [];
  }

  fields.forEach(function (field) {
    if (field.type === 'section') {
      return _getRequiredFields(field.fields, rev);
    } else if (field.type === 'table') {} else {
      if (field.is_required) {
        return rev.push(field.code);
      }
    }
  });
  return rev;
};

_getStartStepEditableFields = function (fields, steps) {
  var editableCode, startStep;
  startStep = steps.findPropertyByPK("step_type", "start");
  editableCode = [];

  _.keys(startStep.permissions).forEach(function (key) {
    if (startStep.permissions[key] === 'editable') {
      return editableCode.push(key);
    }
  });

  return editableCode;
};

_getStartStepRequiredFields = function (fields, steps) {
  var editableCode, requiredFields;
  requiredFields = _getRequiredFields(fields);
  editableCode = _getStartStepEditableFields(fields, steps);
  return _.intersection(requiredFields, editableCode);
};

_getTemplateData = function (user, space, instance, options) {
  var flow, form, form_version, locale, steedosData;

  if (Meteor.isServer) {
    form_version = InstanceReadOnlyTemplate.getInstanceFormVersion(instance);
  } else {
    form_version = WorkflowManager.getInstanceFormVersion(instance);
  }

  locale = _getLocale(user);
  steedosData = {};

  if (Meteor.isClient) {
    steedosData = _.clone(WorkflowManager_format.getAutoformSchemaValues());
    steedosData.insname = instance.name;
    steedosData.ins_state = instance.state;
    steedosData.ins_final_decision = instance.ins_final_decision;
    steedosData.ins_code = instance.code;
    steedosData.ins_is_archived = instance.is_archived;
    steedosData.ins_is_deleted = instance.ins_is_deleted;
    steedosData.applicant_name = instance.applicant_name;
    steedosData.applicantContext = instance.applicant_name;
  }

  steedosData.instance = instance;
  steedosData.form_version = form_version;
  steedosData.locale = locale;
  steedosData.utcOffset = user.utcOffset;
  steedosData.space = instance.space;
  steedosData.sessionUserId = user._id;

  if (Meteor.isServer) {
    if (options != null ? options.editable : void 0) {
      form = db.forms.findOne({
        _id: instance.form
      });
      flow = db.flows.findOne({
        _id: instance.flow
      });
      steedosData.startStepEditableFields = _getStartStepEditableFields(form.current.fields, flow.current.steps);
    }
  }

  return steedosData;
};

InstanceReadOnlyTemplate.formatDate = function (date, utcOffset) {
  var passing;

  if (Meteor.isServer) {
    passing = false;
  } else {
    passing = true;
  }

  if (!utcOffset && utcOffset !== 0) {
    utcOffset = 8;
  }

  return moment(date).utcOffset(utcOffset, passing).format("YYYY-MM-DD HH:mm");
};

InstanceReadOnlyTemplate.getInstanceView = function (user, space, instance, options) {
  var body, instanceCompiled, instanceRenderFunction, instanceTemplate, steedosData;
  steedosData = _getTemplateData(user, space, instance, options);
  steedosData.absolute = false;

  if (options != null ? options.absolute : void 0) {
    steedosData.absolute = true;
  }

  instanceTemplate = TemplateManager.getTemplate(instance, options != null ? options.templateName : void 0);
  instanceTemplate = instanceTemplate.replace(/afSelectUser/g, "afSelectUserRead");

  if (!(options != null ? options.editable : void 0)) {
    instanceTemplate = instanceTemplate.replace(/afFormGroup/g, "afFormGroupRead");
  }

  instanceCompiled = SpacebarsCompiler.compile(instanceTemplate, {
    isBody: true
  });
  instanceRenderFunction = eval(instanceCompiled);
  Template.instance_readonly_view = new Blaze.Template("instance_readonly_view", instanceRenderFunction);
  Template.instance_readonly_view.steedosData = steedosData;
  Template.instance_readonly_view.helpers(InstanceformTemplate.helpers);
  InstanceReadOnlyTemplate.init(steedosData);
  body = Blaze.toHTMLWithData(Template.instance_readonly_view, steedosData);
  return "<div id='instanceform' >\n	" + body + "\n</div>";
};

InstanceReadOnlyTemplate.getTracesView = function (user, space, instance, options) {
  var body, form, steedosData, traceCompiled, traceRenderFunction, tracesHtml;
  steedosData = _getTemplateData(user, space, instance);
  form = db.forms.findOne(instance.form);

  if (form.instance_style === "table" || (options != null ? options.templateName : void 0) === "table") {
    tracesHtml = _getViewHtml('client/views/instance/traces_table.html');
  } else {
    tracesHtml = _getViewHtml('client/views/instance/traces.html');
  }

  traceCompiled = SpacebarsCompiler.compile(tracesHtml, {
    isBody: true
  });
  traceRenderFunction = eval(traceCompiled);
  Template.trace_readonly_view = new Blaze.Template("trace_readonly_view", traceRenderFunction);
  Template.trace_readonly_view.steedosData = steedosData;
  Template.trace_readonly_view.helpers(TracesTemplate.helpers);
  body = Blaze.toHTMLWithData(Template.trace_readonly_view, instance.traces);
  return body;
};

InstanceReadOnlyTemplate.getAttachmentView = function (user, space, instance) {
  var attachmentCompiled, attachmentHtml, attachmentRenderFunction, body, steedosData;
  steedosData = _getTemplateData(user, space, instance);
  attachmentHtml = _getViewHtml('client/views/instance/instance_attachments.html');
  attachmentCompiled = SpacebarsCompiler.compile(attachmentHtml, {
    isBody: true
  });
  attachmentRenderFunction = eval(attachmentCompiled);
  Template.attachments_readonly_view = new Blaze.Template("attachments_readonly_view", attachmentRenderFunction);
  Template.attachments_readonly_view.steedosData = steedosData;
  Template.attachments_readonly_view.helpers(InstanceAttachmentTemplate.helpers);
  body = Blaze.toHTMLWithData(Template.attachments_readonly_view);
  return body;
};

InstanceReadOnlyTemplate.getRelatedInstancesView = function (user, space, instance, options) {
  var body, relatedInstancesCompiled, relatedInstancesHtml, relatedInstancesRenderFunction, steedosData;
  steedosData = _getTemplateData(user, space, instance);
  steedosData.absolute = false;

  if (options != null ? options.absolute : void 0) {
    steedosData.absolute = true;
  }

  relatedInstancesHtml = _getViewHtml('client/views/instance/related_instances.html');
  relatedInstancesCompiled = SpacebarsCompiler.compile(relatedInstancesHtml, {
    isBody: true
  });
  relatedInstancesRenderFunction = eval(relatedInstancesCompiled);
  Template.related_instances_view = new Blaze.Template("related_instances_view", relatedInstancesRenderFunction);
  Template.related_instances_view.steedosData = steedosData;
  Template.related_instances_view.helpers(RelatedInstances.helpers);
  body = Blaze.toHTMLWithData(Template.related_instances_view, steedosData);
  return body;
};

InstanceReadOnlyTemplate.getOnLoadScript = function (instance) {
  var form_script, form_version;
  form_version = WorkflowManager.getFormVersion(instance.form, instance.form_version);
  form_script = form_version.form_script;

  if (form_script && form_script.replace(/\n/g, "").replace(/\s/g, "").length > 0) {
    form_script = "CoreForm = {};CoreForm.instanceform = {};" + form_script;
    return form_script += ";if(CoreForm.form_OnLoad){window.onload = CoreForm.form_OnLoad();}";
  } else {
    return form_script = "";
  }
};

InstanceReadOnlyTemplate.getInstanceHtml = function (user, space, instance, options) {
  var absoluteUrl, allCssLink, attachment, body, cssHref, form, formDescription, formDescriptionHtml, html, instanceBoxStyle, instance_style, onLoadScript, openFileScript, related_instances, showTracesBtn, showTracesScript, submit_btn, trace, width;
  body = InstanceReadOnlyTemplate.getInstanceView(user, space, instance, options);
  onLoadScript = InstanceReadOnlyTemplate.getOnLoadScript(instance);
  openFileScript = "if(window.isNode && isNode()){\n	attachs = document.getElementsByClassName(\"ins_attach_href\");\n	for(var i = 0; i < attachs.length; i++){\n		attach = attachs[i];\n		attach.addEventListener(\"click\", function(e){\n			if(isImage(this.dataset.type) || isHtml(this.dataset.type)){\n				e.preventDefault();\n				openWindow(\"/api/files/instances/\" + this.dataset.id);\n			}else if(nw_core.canOpenFile(this.dataset.name)){\n				e.preventDefault();\n				nw_core.openFile(this.href, this.dataset.name)\n			}\n		});\n	}\n}\n\nvar flow = \"" + instance.flow + "\";\nvar space = \"" + instance.space + "\";\n";

  if (!Steedos.isMobile()) {
    form = db.forms.findOne(instance.form);

    if ((form != null ? form.instance_style : void 0) === 'table') {
      instance_style = "instance-table";
    }
  }

  if ((options != null ? options.templateName : void 0) === 'table') {
    instance_style = "instance-table";
  }

  if (options != null ? options.instance_style : void 0) {
    instance_style = options.instance_style;
  }

  if (!options || options.showTrace === true) {
    trace = InstanceReadOnlyTemplate.getTracesView(user, space, instance);
  } else {
    trace = "";
  }

  instanceBoxStyle = "";

  if (instance && instance.final_decision) {
    if (instance.final_decision === "approved") {
      instanceBoxStyle = "box-success";
    } else if (instance.final_decision === "rejected") {
      instanceBoxStyle = "box-danger";
    }
  }

  if (!options || options.showAttachments === true) {
    attachment = InstanceReadOnlyTemplate.getAttachmentView(user, space, instance);
  } else {
    attachment = "";
  }

  related_instances = InstanceReadOnlyTemplate.getRelatedInstancesView(user, space, instance, options);
  absoluteUrl = Meteor.absoluteUrl();
  width = "960px";

  if (options != null ? options.width : void 0) {
    width = "";
  }

  cssHref = Meteor.absoluteUrl("steedos-css");
  allCssLink = "<link rel=\"stylesheet\" type=\"text/css\" class=\"__meteor-css__\" href=\"" + cssHref + "\">";
  submit_btn = "";
  showTracesBtn = "<div class=\"print-tool\">\n	<label class=\"cbx-label\"><input type=\"checkbox\" checked class=\"cbx-print cbx-print-traces\" id=\"cbx-print-traces\"/><span>" + t('instance_approval_history') + "</span></label>\n</div>";
  showTracesScript = "$( document ).ready(function(){\n	var b = document.getElementById('cbx-print-traces');\n	var t = document.getElementsByClassName('instance-traces')[0];\n	if (b.checked){\n		t.style = 'display: block;'\n	} else {\n		t.style = 'display: none;'\n	}\n	b.addEventListener('change', function(e){\n		if (e.target.checked){\n			t.style = 'display: block;'\n		} else {\n			t.style = 'display: none;'\n		}\n	});\n});\n";

  if (options != null ? options.styles : void 0) {
    allCssLink = "";
  }

  form = db.forms.findOne({
    _id: instance.form
  });
  formDescriptionHtml = "";

  if (form) {
    formDescription = form.description;

    if (formDescription) {
      formDescription = formDescription.replace(/\n/g, "<br/>");
      formDescriptionHtml = "<div class=\"box-header  with-border instance-header\">\n	<div>\n		" + formDescription + "\n	</div>\n</div>";
    }
  }

  html = "<!DOCTYPE html>\n<html>\n	<head>\n		<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n		" + allCssLink + "\n		<script src=\"https://www.steedos.com/website/libs/jquery.min.js\" type=\"text/javascript\"></script>\n		<script src=\"/js/nw_core.js\" type=\"text/javascript\"></script>\n		" + (options.plugins || "") + "\n\n		<style>\n			.steedos{\n				width: " + width + ";\n				margin-left: auto;\n				margin-right: auto;\n			}\n\n			.instance-view .instance-name{\n				display: inline !important\n			}\n			.box-tools{\n				display: none;\n			}\n			.box.collapsed-box .box-body,.box.collapsed-box .box-footer {\n			  display: block;\n			}\n\n			body{\n				background: azure !important;\n			}\n\n			.instance-view .instance-traces{\n				padding-left: 15px;\n				padding-right: 15px;\n			}\n\n			" + ((options != null ? options.styles : void 0) || "") + "\n		</style>\n	</head>\n	<body>\n		<div class=\"steedos\">\n			" + submit_btn + "\n			" + showTracesBtn + "\n			<div class=\"instance-view\">\n				<div class=\"instance " + instance_style + "\">\n					<form name=\"instanceForm\">\n						<div class=\"instance-form box " + instanceBoxStyle + "\">\n							" + formDescriptionHtml + "\n							<div class=\"box-body\">\n								<div class=\"col-md-12\">\n									" + body + "\n									" + attachment + "\n									" + related_instances + "\n								</div>\n							</div>\n						</div>\n					</form>\n					" + trace + "\n				</div>\n			</div>\n		</div>\n	</body>\n	<script>" + openFileScript + ";" + onLoadScript + ";" + showTracesScript + "</script>\n</html>";
  return html;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/lib/template_manager.coffee                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var formId;
TemplateManager = {};
formId = 'instanceform';

TemplateManager.instance_title = function () {
  var pageTitle, pageTitleTrClass, val;
  pageTitle = "{{instance.name}}";
  pageTitleTrClass = "instance-name";

  if (typeof CoreForm !== "undefined" && CoreForm !== null ? CoreForm.pageTitleFieldName : void 0) {
    pageTitle = "{{> afFormGroup name=\"" + CoreForm.pageTitleFieldName + "\" label=false}}";
    pageTitleTrClass = "";
  }

  if (typeof CoreForm !== "undefined" && CoreForm !== null ? CoreForm.pageTitle : void 0) {
    pageTitle = "" + CoreForm.pageTitle;
    pageTitleTrClass = "";
  }

  val = {
    pageTitle: pageTitle,
    pageTitleTrClass: pageTitleTrClass
  };
  return val;
};

TemplateManager.handleTableTemplate = function (instance, _export) {
  var table_fields, template;
  template = "<div class='instance-template'>\n	<table class=\"table-page-title form-table no-border text-align-center\" style=\"width: 100%;display: inline-table;\">\n		<tr class=\"" + this.instance_title().pageTitleTrClass + "\">\n			<td class=\"instance-table-name-td page-title\">\n				" + this.instance_title().pageTitle + "\n			</td>\n		</tr>\n\n	</table>\n	<table class=\"table-page-body form-table\">\n			<tr style=\"height:0px\">\n				<th style='width: 16%'></th>\n				<th></th>\n				<th style='width: 16%'></th>\n				<th></th>\n			</tr>";
  table_fields = InstanceformTemplate.helpers.table_fields(instance);
  table_fields.forEach(function (table_field) {
    var field_permission, pureCode, required, title_permission;
    required = "";

    if (!(typeof CoreForm !== "undefined" && CoreForm !== null ? CoreForm.pageTitleFieldName : void 0) || (typeof CoreForm !== "undefined" && CoreForm !== null ? CoreForm.pageTitleFieldName : void 0) !== table_field.code) {
      if (table_field.is_required) {
        required = "is-required";
      }

      if (_export) {
        required = "";
      }

      pureCode = Steedos.removeSpecialCharacter(table_field.code);

      if (InstanceformTemplate.helpers.isOpinionField(table_field)) {
        template += table_field.tr_start;
        template += "<td class=\"td-title " + required + "\">\n	{{afFieldLabelText name=\"" + table_field.code + "\"}}\n</td>\n<td class=\"td-field opinion-field opinion-field-" + pureCode + " automatic\" colspan = \"" + table_field.td_colspan + "\">\n	{{> instanceSignText name=\"" + table_field.code + "\"}}\n</td>";
        return template += table_field.tr_end;
      } else {
        if (InstanceformTemplate.helpers.includes(table_field.type, 'section,table')) {
          template += table_field.tr_start;
          template += "<td class=\"td-childfield td-childfield-" + pureCode + "\" colspan = \"" + table_field.td_colspan + "\">\n   {{> afFormGroup name=\"" + table_field.code + "\" label=false}}\n</td>";
          return template += table_field.tr_end;
        } else {
          template += table_field.tr_start;

          if (_export) {
            title_permission = "";
            field_permission = "";
          } else {
            title_permission = "title-" + table_field.permission;
            field_permission = "field-" + table_field.permission;
          }

          template += "<td class=\"td-title td-title-" + pureCode + " " + title_permission + " " + required + "\">\n	{{afFieldLabelText name=\"" + table_field.code + "\"}}\n</td>\n<td class=\"td-field td-field-" + pureCode + " " + field_permission + "\" colspan = \"" + table_field.td_colspan + "\">\n	{{> afFormGroup name=\"" + table_field.code + "\" label=false}}\n</td>";
          return template += table_field.tr_end;
        }
      }
    }
  });
  template += "	</table>\n\n	<table class=\"table-page-footer form-table no-border\">\n		<tr class=\"applicant-wrapper\">\n			<td class=\"nowrap\">\n				<div class='inline-left'>\n					<label class=\"control-label\">{{_t \"instance_initiator\"}}：</label>\n				</div>\n				<div class='instance-table-wrapper-td inline-left'>\n					{{>Template.dynamic  template=\"afSelectUser\" data=applicantContext}}\n				</div>\n			</td>\n			<td class=\"nowrap\">\n				<div class='pull-left'>\n					<div class='inline-left'>\n						<label>{{_t \"instance_submit_date\"}}：</label>\n					</div>\n					<div class='inline-right'>\n						<div class=\"form-group\">\n							{{formatDate instance.submit_date '{\"format\":\"YYYY-MM-DD\"}'}}\n						</div>\n					</div>\n				</div>\n			</td>\n		</tr>\n	</table>\n</div>";
  return template;
};

TemplateManager._template = {
  "default": function (instance) {
    var template;
    template = "<div class=\"with-border col-md-12\">\n	<div class=\"instance-name\">\n		<h3 class=\"box-title\">" + TemplateManager.instance_title().pageTitle + "</h3>\n		<span class=\"help-block\"></span>\n	</div>\n	<span class=\"help-block\"></span>\n</div>\n{{#each steedos_form.fields}}\n	{{#if isOpinionField this}}\n		<div class=\"{{#if this.is_wide}}col-md-12{{else}}col-md-6{{/if}}\">\n			<div class=\"form-group automatic opinion-field-{{this.code}}\">\n				<label class=\"control-label\">{{afFieldLabelText name=this.code}}</label>\n\n				{{> instanceSignText name=this.code}}\n			</div>\n		</div>\n	{{else}}\n		{{#if includes this.type 'section,table'}}\n			<div class=\"col-md-12\">\n				{{> afFormGroup name=this.code label=false}}\n			</div>\n		{{else}}\n			<div class=\"{{#if this.is_wide}}col-md-12{{else}}col-md-6{{/if}}\">\n			{{> afFormGroup name=this.code}}\n			</div>\n		{{/if}}\n	{{/if}}\n{{/each}}\n<div class=\"col-md-12\">\n	<div class=\"applicant-wrapper form-group form-horizontal\">\n	<div class=\"input-group\">\n		<div class=\"input-group-addon\">\n		  {{_t \"instance_initiator\"}}&nbsp;:\n		</div>\n		{{>Template.dynamic  template=\"afSelectUser\" data=applicantContext}}\n	  </div>\n	</div>\n</div>";
    return template;
  },
  table: function (instance) {
    return TemplateManager.handleTableTemplate(instance);
  }
};
TemplateManager._templateHelps = {
  applicantContext: function () {
    var data, steedos_instance;
    steedos_instance = WorkflowManager.getInstance();
    data = {
      name: 'ins_applicant',
      atts: {
        name: 'ins_applicant',
        id: 'ins_applicant',
        "class": 'selectUser form-control',
        style: 'padding:6px 12px;width:140px;display:inline'
      }
    };
    data.atts.disabled = true;
    return data;
  }
};
({
  instanceId: function () {
    return 'instanceform';
  },
  form_types: function () {
    if (ApproveManager.isReadOnly()) {
      return 'disabled';
    } else {
      return 'method';
    }
  },
  steedos_form: function () {
    var form_version;
    form_version = WorkflowManager.getInstanceFormVersion();

    if (form_version) {
      return form_version;
    }
  },
  innersubformContext: function (obj) {
    var doc_values;
    doc_values = WorkflowManager_format.getAutoformSchemaValues();
    obj["tableValues"] = doc_values ? doc_values[obj.code] : [];
    obj["formId"] = formId;
    return obj;
  },
  instance: function () {
    var steedos_instance;
    Session.get("change_date");

    if (Session.get("instanceId")) {
      steedos_instance = WorkflowManager.getInstance();
      return steedos_instance;
    }
  },
  equals: function (a, b) {
    return a === b;
  },
  includes: function (a, b) {
    return b.split(',').includes(a);
  },
  fields: function () {
    var form_version;
    form_version = WorkflowManager.getInstanceFormVersion();

    if (form_version) {
      return new SimpleSchema(WorkflowManager_format.getAutoformSchema(form_version));
    }
  },
  doc_values: function () {
    return WorkflowManager_format.getAutoformSchemaValues();
  },
  instance_box_style: function () {
    var box, ins, judge;
    box = Session.get("box");

    if (box === "inbox" || box === "draft") {
      judge = Session.get("judge");

      if (judge) {
        if (judge === "approved") {
          return "box-success";
        } else if (judge === "rejected") {
          return "box-danger";
        }
      }
    }

    ins = WorkflowManager.getInstance();

    if (ins && ins.final_decision) {
      if (ins.final_decision === "approved") {
        return "box-success";
      } else if (ins.final_decision === "rejected") {
        return "box-danger";
      }
    }
  }
});

TemplateManager.getTemplate = function (instance, templateName) {
  var flow, form;
  flow = db.flows.findOne(instance.flow);
  form = db.forms.findOne(instance.form);

  if (templateName) {
    if (templateName === 'table') {
      return TemplateManager._template.table(instance);
    }

    return TemplateManager._template["default"](instance);
  }

  if (typeof Session !== "undefined" && Session !== null ? Session.get("instancePrint") : void 0) {
    if (flow != null ? flow.print_template : void 0) {
      return "<div class='instance-template'>" + flow.print_template + "</div>";
    } else {
      if (flow != null ? flow.instance_template : void 0) {
        return "<div class='instance-template'>" + flow.instance_template + "</div>";
      } else {
        return TemplateManager._template.table(instance);
      }
    }
  } else {
    if (Steedos.isMobile()) {
      return TemplateManager._template["default"](instance);
    }

    if (flow != null ? flow.instance_template : void 0) {
      return "<div class='instance-template'>" + flow.instance_template + "</div>";
    }

    if (form != null ? form.instance_style : void 0) {
      if (form.instance_style === 'table') {
        return TemplateManager._template.table(instance);
      }

      return TemplateManager._template["default"](instance);
    } else {
      return TemplateManager._template["default"](instance);
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"coreform":{"inputTypes":{"coreform-table":{"steedos-table.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/coreform/inputTypes/coreform-table/steedos-table.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
SteedosTable = {};
SteedosTable.formId = "instanceform";

SteedosTable.checkItem = function (field, item_index) {
  var fieldObj = SteedosTable.getField(field);
  var fieldVal = SteedosTable.getItemModalValue(field, item_index);
  var sf_name = '';
  var rev = true;
  fieldObj.sfields.forEach(function (sf) {
    if (sf.permission == 'editable') {
      sf_name = fieldObj.code + "." + sf.code;

      if (!InstanceManager.checkFormFieldValue($("[name='" + sf_name + "']")[0])) {
        rev = false;
      }
    }
  });
  return rev;
};

SteedosTable.setTableItemValue = function (field, item_index, item_value) {
  var tableValue = SteedosTable.getTableValue(field);
  tableValue[item_index] = item_value;
};

SteedosTable.getTableItemValue = function (field, item_index) {
  return SteedosTable.getTableValue(field)[item_index];
};

SteedosTable.removeTableItem = function (field, item_index) {
  var item_value = SteedosTable.getTableItemValue(field, item_index);
  item_value.removed = true;
};

SteedosTable.setTableValue = function (field, value) {
  $("table[name='" + field + "']").val({
    val: value
  });
};

SteedosTable.getTableValue = function (field) {
  return $("table[name='" + field + "']").val().val;
};

SteedosTable.getValidValue = function (field) {
  var value = SteedosTable.getTableValue(field);

  if (!value) {
    return;
  }

  var validValue = [];
  value.forEach(function (v) {
    if (!v.removed) {
      validValue.push(v);
    }
  });
  return validValue;
};

SteedosTable.handleData = function (field, values) {
  if (!values || !(values instanceof Array)) {
    return values;
  }

  var fieldObj = SteedosTable.getField(field);
  values.forEach(function (v) {
    fieldObj.sfields.forEach(function (f) {
      if (f.type == 'user' || f.type == 'group') {
        var value = v[f.code];

        if (f.is_multiselect) {
          if (value && value.length > 0 && typeof value[0] == 'object') {
            v[f.code] = v[f.code].getProperty("id");
          }
        } else {
          if (value && typeof value == 'object') {
            v[f.code] = v[f.code].id;
          }
        }
      } else if (f.type == 'dateTime') {
        var value = v[f.code];

        if (value) {
          if (value.length == 16) {
            var t = value.split("T");
            var t0 = t[0].split("-");
            var t1 = t[1].split(":");
            year = t0[0];
            month = t0[1];
            date = t0[2];
            hours = t1[0];
            seconds = t1[1];
            value = new Date(year, month - 1, date, hours, seconds);
            v[f.code] = value;
          }
        }
      }
    });
  });
  return values;
};

SteedosTable.getField = function (field) {
  var instanceFields = WorkflowManager.getInstanceFields();
  if (!instanceFields) return;
  var fieldObj = instanceFields.findPropertyByPK("code", field);
  return fieldObj;
};

SteedosTable.getModalData = function (field, index) {
  var data = {};
  var fieldObj = SteedosTable.getField(field);

  if (!fieldObj) {
    return;
  }

  data.field = fieldObj;
  data.field.formula = Form_formula.getFormulaFieldVariable("Form_formula.field_values", fieldObj.sfields);
  data.value = {};
  data.value[field] = SteedosTable.getTableItemValue(field, index);
  data.index = index;
  return data;
};

SteedosTable.getItemModalValue = function (field, item_index) {
  if (!AutoForm.getFormValues("steedos_table_modal_" + field + "_" + item_index)) {
    return {};
  }

  var item_value = AutoForm.getFormValues("steedos_table_modal_" + field + "_" + item_index).insertDoc[field];
  return item_value;
};

SteedosTable.addItem = function (field, index, _item_value) {
  var keys = SteedosTable.getKeys(field);

  var item_value = _item_value || SteedosTable.getItemModalValue(field, index);

  $("tbody[name='" + field + "Tbody']").append(SteedosTable.getTr(keys, item_value, index, field, true));
};

SteedosTable.updateItem = function (field, index, _item_value) {
  var item = $("tr[name='" + field + "_item_" + index + "']");

  var item_value = _item_value || SteedosTable.getItemModalValue(field, index);

  if (item && item.length > 0) {
    var keys = SteedosTable.getKeys(field);
    var tds = SteedosTable.getRemoveTd(field, index);
    var sfields = SteedosTable.getField(field).sfields;
    keys.forEach(function (key) {
      var sfield = sfields.findPropertyByPK("code", key);
      var value = item_value[key];
      tds = tds + SteedosTable.getTd(sfield, index, value);
    });
    item.empty();
    item.append(tds);
  } else {
    SteedosTable.addItem(field, index);
  }

  if (SteedosTable.getTableValue(field)) {
    SteedosTable.setTableItemValue(field, index, item_value); //SteedosTable.valueHash[field][index] = item_value;
  } else {
    //SteedosTable.valueHash[field] = [item_value];
    SteedosTable.setTableValue(field, [item_value]);
  } //执行主表公式计算


  InstanceManager.runFormula(field);
};

SteedosTable.removeItem = function (field, index) {
  $("tr[name='" + field + "_item_" + index + "']").hide();
  SteedosTable.removeTableItem(field, index);
  InstanceManager.runFormula(field);
};

SteedosTable.showModal = function (field, index, method) {
  var modalData = SteedosTable.getModalData(field, index);
  modalData.method = method;
  Modal.show("steedosTableModal", modalData);
};

SteedosTable.getKeys = function (field) {
  if (!AutoForm.getCurrentDataForForm(SteedosTable.formId)) {
    return [];
  }

  var ss = AutoForm.getFormSchema(SteedosTable.formId);
  var keys = [];

  if (ss.schema(field + ".$").type === Object) {
    keys = ss.objectKeys(SimpleSchema._makeGeneric(field) + '.$');
  }

  return keys;
};

SteedosTable.getThead = function (field, editable) {
  var fieldObj = field;
  if (!_.isObject(field)) fieldObj = SteedosTable.getField(field);

  if (!fieldObj) {
    return '';
  }

  var thead = '',
      trs = '',
      label = '',
      width = 100;

  if (editable) {
    // trs = "<th class='removed'></th>"
    trs = "";
  }

  var sfields = fieldObj.sfields;

  if (!sfields) {
    return thead;
  }

  var sf_length = sfields.length;

  if (sf_length > 0) {
    var wide_fields = sfields.filterProperty("is_wide", true);
    width = 100 / (sf_length + wide_fields.length);
  }

  sfields.forEach(function (sf, index) {
    label = sf.name != null && sf.name.length > 0 ? sf.name : sf.code;
    trs = trs + "<td "; // nowrap='nowrap'

    trs = trs + " class='title " + sf.type + "'";

    if (index != sf_length - 1) {
      if (sf.is_wide) {
        trs = trs + "style='width:" + width * 2 + "%'";
      } else {
        trs = trs + "style='width:" + width + "%'";
      }
    }

    trs = trs + ">" + label + "</td>";
  });
  thead = '<tr>' + trs + '</tr>';
  return thead;
};

SteedosTable.getTbody = function (keys, field, values, editable) {
  var tbody = "";

  if (values instanceof Array) {
    values.forEach(function (value, index) {
      tbody = tbody + SteedosTable.getTr(keys, value, index, field, editable);
    });
  }

  return tbody;
};

SteedosTable.getTr = function (keys, item_value, index, field, editable) {
  var fieldObj = field;
  if (!_.isObject(field)) fieldObj = SteedosTable.getField(field);
  var tr = "<tr id='" + fieldObj.code + "_item_" + index + "' name='" + fieldObj.code + "_item_" + index + "' data-index='" + index + "'";

  if (editable) {
    tr = tr + "' class='item edit'";
  } else {
    if (Steedos.isMobile()) {
      tr = tr + " class='item item-readonly'";
    } else {
      tr = tr + " class='item '";
    }
  }

  if (item_value.removed) {
    tr = tr + " style='display:none' ";
  }

  tr = tr + "'>";
  var tds = "";

  if (editable) {
    tds = SteedosTable.getRemoveTd(fieldObj.code, index);
  }

  var sfields = fieldObj.sfields;
  keys.forEach(function (key) {
    var sfield = sfields.findPropertyByPK("code", key);
    var value = item_value[key];
    tds = tds + SteedosTable.getTd(sfield, index, value);
  });
  tr = tr + tds + "</tr>";
  return tr;
};

SteedosTable.getRemoveTd = function (field, index) {
  // return "<td class='steedosTable-item-remove removed' data-index='" + index + "'><i class='fa fa-times' aria-hidden='true'></td>";
  return "";
};

SteedosTable.getTd = function (field, index, value) {
  var td = "<td ";
  td = td + " class='steedosTable-item-field " + field.type + "' ";
  var td_value = "";

  if (Meteor.isClient) {
    td_value = SteedosTable.getTDValue(field, value);
  } else {
    locale = Template.instance().view.template.steedosData.locale;
    utcOffset = Template.instance().view.template.steedosData.utcOffset;
    td_value = InstanceReadOnlyTemplate.getValue(value, field, locale, utcOffset);
  }

  td = td + " data-index='" + index + "'>" + td_value + "</td>";
  return td;
};

SteedosTable.getTDValue = function (field, value) {
  var td_value = "";

  if (!field) {
    return td_value;
  }

  try {
    switch (field.type) {
      case 'user':
        if (value) {
          if (field.is_multiselect) {
            if (value.length > 0) {
              if ("string" == typeof value[0]) {
                td_value = CFDataManager.getFormulaSpaceUsers(value).getProperty("name").toString();
              } else {
                td_value = value.getProperty("name").toString();
              }
            }
          } else {
            if ("string" == typeof value) {
              var u = CFDataManager.getFormulaSpaceUsers(value);
              td_value = u ? u.name : '';
            } else {
              td_value = value.name;
            }
          }
        }

        break;

      case 'group':
        if (value) {
          if (field.is_multiselect) {
            if (value.length > 0) {
              if ("string" == typeof value[0]) {
                td_value = CFDataManager.getFormulaOrganizations(value).getProperty("name").toString();
              } else {
                td_value = value.getProperty("name").toString();
              }
            }
          } else {
            if ("string" == typeof value) {
              var o = CFDataManager.getFormulaOrganization(value);
              td_value = o ? o.name : '';
            } else {
              td_value = value.name;
            }
          }
        }

        break;

      case 'checkbox':
        if (value === true || value == 'true') {
          td_value = TAPi18n.__("form_field_checkbox_yes");
        } else {
          td_value = TAPi18n.__("form_field_checkbox_no");
        }

        break;

      case 'email':
        td_value = value ? "<a href='mailto:" + value + "'>" + value + "</a>" : "";
        break;

      case 'url':
        if (value) {
          if (value.indexOf("http") == 0) {
            try {
              td_value = "<a href='" + encodeURI(value) + "' target='_blank'>" + value + "</a>";
            } catch (e) {
              td_value = "<a href='' target='_blank'>" + value + "</a>";
            }
          } else {
            td_value = "<a href='http://" + encodeURI(value) + "' target='_blank'>http://" + value + "</a>";
          }
        } else {
          td_value = "";
        }

        break;

      case 'password':
        td_value = '******';
        break;

      case 'date':
        if (value) {
          if (value.length == 10) {
            var t = value.split("-");
            year = t[0];
            month = t[1];
            date = t[2];
            value = new Date(year, month - 1, date);
          } else {
            value = new Date(value);
          }

          td_value = $.format.date(value, 'yyyy-MM-dd');
        }

        break;

      case 'dateTime':
        if (value) {
          if (value.length == 16) {
            var t = value.split("T");
            var t0 = t[0].split("-");
            var t1 = t[1].split(":");
            year = t0[0];
            month = t0[1];
            date = t0[2];
            hours = t1[0];
            seconds = t1[1];
            value = new Date(year, month - 1, date, hours, seconds);
          } else {
            value = new Date(value);
          }

          td_value = $.format.date(value, 'yyyy-MM-dd HH:mm');
        }

        break;

      case 'number':
        if (value || value == 0) {
          if (typeof value == 'string') {
            value = parseFloat(value);
          }

          td_value = value.toFixed(field.digits);
          td_value = Steedos.numberToString(td_value);
        }

        break;

      case 'odata':
        if (value) {
          td_value = value['@label'];
        }

        break;

      default:
        td_value = value ? value : '';
        break;
    }
  } catch (e) {
    e;
    return '';
  }

  return td_value;
};

if (Meteor.isClient) {
  AutoForm.addInputType("table", {
    template: "afTable",
    valueOut: function () {
      var name = this.data("schemaKey");
      return SteedosTable.getValidValue(name);
    },
    valueConverters: {
      "stringArray": AutoForm.valueConverters.stringToStringArray,
      "number": AutoForm.valueConverters.stringToNumber,
      "numerArray": AutoForm.valueConverters.stringToNumberArray,
      "boolean": AutoForm.valueConverters.stringToBoolean,
      "booleanArray": AutoForm.valueConverters.stringToBooleanArray,
      "date": AutoForm.valueConverters.stringToDate,
      "dateArray": AutoForm.valueConverters.stringToDateArray
    },
    contextAdjust: function (context) {
      if (typeof context.atts.maxlength === 'undefined' && typeof context.max === 'number') {
        context.atts.maxlength = context.max;
      }

      return context;
    }
  });
  Template.afTable.events({
    'tap .steedos-table .steedosTable-item-add,.add-item-tr': function (event, template) {
      var name = template.data.name;
      var tableValue = SteedosTable.getTableValue(name);
      var new_item_index = tableValue ? tableValue.length : 0;
      SteedosTable.showModal(name, new_item_index, "add");
    },
    'tap .steedos-table .steedosTable-item-field': function (event, template) {
      if (template.data.atts.editable) {
        var field = template.data.name;
        var index = event.currentTarget.dataset.index;
        SteedosTable.showModal(field, index, "edit");
      }
    },
    'tap .steedos-table .steedosTable-item-remove': function (event, template) {
      var field = template.data.name;
      var item_index = event.currentTarget.dataset.index;
      Session.set("instance_change", true);
      SteedosTable.removeItem(field, item_index);
    },
    'tap .steedos-table .item-readonly': function (event, template) {
      if (!template.data.atts.editable) {
        var field = template.data.name;
        var index = event.currentTarget.dataset.index;
        SteedosTable.showModal(field, index, "read");
      }
    }
  });

  Template.afTable.rendered = function () {
    var field = this.data.name;
    var keys = SteedosTable.getKeys(field);
    var validValue = SteedosTable.handleData(field, this.data.value);
    SteedosTable.setTableValue(field, validValue);
    $("thead[name='" + field + "Thead']").html(SteedosTable.getThead(field, this.data.atts.editable));
    $("tbody[name='" + field + "Tbody']").html(SteedosTable.getTbody(keys, field, SteedosTable.getTableValue(field), this.data.atts.editable));
    str = t("steedos_table_add_item");
    addItemTr = "<tr class='add-item-tr'><td colspan='" + keys.length + "'><i class='ion ion-plus-round'></i>" + str + "</td></tr>";

    if (this.data.atts.editable) {
      $("tfoot[name='" + field + "Tfoot']").append(addItemTr);
    }
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"views":{"instance":{"_image_sign.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/views/instance/_image_sign.coffee                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
ImageSign.helpers = {
  spaceUserSign: function (userId) {
    var space, spaceUserSign;
    space = "";

    if (Meteor.isServer) {
      space = Template.instance().view.template.steedosData.space;
    } else {
      space = Session.get("spaceId");
    }

    spaceUserSign = db.space_user_signs.findOne({
      space: space,
      user: userId
    });
    return spaceUserSign;
  },
  imageURL: function (userId) {
    var absolute, spaceUserSign;
    spaceUserSign = ImageSign.helpers.spaceUserSign(userId);
    absolute = false;

    if (Meteor.isServer) {
      absolute = Template.instance().view.template.steedosData.absolute;
    }

    if (spaceUserSign != null ? spaceUserSign.sign : void 0) {
      if (absolute) {
        return Meteor.absoluteUrl("api/files/avatars/" + spaceUserSign.sign);
      } else {
        return Steedos.absoluteUrl("api/files/avatars/" + spaceUserSign.sign);
      }
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_instance_form.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/views/instance/_instance_form.coffee                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
InstanceformTemplate.helpers = {
  applicantContext: function () {
    var data, steedos_instance;
    steedos_instance = WorkflowManager.getInstance();
    data = {
      name: 'ins_applicant',
      atts: {
        name: 'ins_applicant',
        id: 'ins_applicant',
        "class": 'selectUser form-control ins_applicant'
      },
      value: steedos_instance.applicant_name
    };

    if (!steedos_instance || steedos_instance.state !== "draft") {
      data.atts.disabled = true;
    }

    return data;
  },
  instanceId: function () {
    return 'instanceform';
  },
  form_types: function () {
    if (ApproveManager.isReadOnly()) {
      return 'disabled';
    } else {
      return 'method';
    }
  },
  steedos_form: function () {
    var form_version;
    form_version = WorkflowManager.getInstanceFormVersion();

    if (form_version) {
      return form_version;
    }
  },
  innersubformContext: function (obj) {
    var doc_values;
    doc_values = WorkflowManager_format.getAutoformSchemaValues();
    obj["tableValues"] = doc_values ? doc_values[obj.code] : [];
    obj["formId"] = "instanceform";
    return obj;
  },
  instance: function () {
    var steedos_instance;
    Session.get("change_date");

    if (Session.get("instanceId")) {
      steedos_instance = WorkflowManager.getInstance();
      return steedos_instance;
    }
  },
  empty: function (val) {
    if (val) {
      return false;
    } else {
      return true;
    }
  },
  unempty: function (val) {
    if (val) {
      return true;
    } else {
      return false;
    }
  },
  equals: function (a, b) {
    return a === b;
  },
  unequals: function (a, b) {
    return !(a === b);
  },
  includes: function (a, b) {
    return b.split(',').includes(a);
  },
  include: function (a, b) {
    return b.split(',').includes(a);
  },
  fields: function () {
    var form_version;
    form_version = WorkflowManager.getInstanceFormVersion();

    if (form_version) {
      return new SimpleSchema(WorkflowManager_format.getAutoformSchema(form_version));
    }
  },
  formatDate: function (date, options) {
    if (!date) {
      return "";
    }

    if (options && typeof options === 'string') {
      options = JSON.parse(options);
    }

    if (!options.format) {
      options = {
        format: "YYYY-MM-DD HH:mm"
      };
    }

    return moment(date).format(options.format);
  },
  traces: function () {
    var flow, instance, locale, ref, ref1, ref2, ref3, steedosData, steps, traces;

    if (Meteor.isServer) {
      steedosData = (ref = Template.instance()) != null ? (ref1 = ref.view) != null ? (ref2 = ref1.template) != null ? ref2.steedosData : void 0 : void 0 : void 0;
      instance = steedosData != null ? steedosData.instance : void 0;
      flow = InstanceReadOnlyTemplate.getFlowVersion(instance);
      locale = steedosData != null ? steedosData.locale : void 0;

      if (locale.toLocaleLowerCase() === 'zh-cn') {
        locale = "zh-CN";
      }
    } else {
      instance = WorkflowManager.getInstance();
      flow = WorkflowManager.getInstanceFlowVersion();
      locale = Session.get("TAPi18n::loaded_lang");
    }

    if (!instance || !flow) {
      return {};
    }

    steps = flow.steps;
    traces = {};

    if ((ref3 = instance.traces) != null) {
      ref3.forEach(function (trace) {
        var approves, ref4, step;
        step = steps.findPropertyByPK("_id", trace.step);
        approves = [];

        if ((ref4 = trace.approves) != null) {
          ref4.forEach(function (approve) {
            var judge_name;

            if (trace.is_finished === true) {
              if (approve.judge === 'approved') {
                judge_name = TAPi18n.__("Instance State approved", {}, locale);
              } else if (approve.judge === 'rejected') {
                judge_name = TAPi18n.__("Instance State rejected", {}, locale);
              } else if (approve.judge === 'terminated') {
                judge_name = TAPi18n.__("Instance State terminated", {}, locale);
              } else if (approve.judge === 'reassigned') {
                judge_name = TAPi18n.__("Instance State reassigned", {}, locale);
              } else if (approve.judge === 'relocated') {
                judge_name = TAPi18n.__("Instance State relocated", {}, locale);
              } else if (approve.judge === '') {
                judge_name = "";
              } else {
                judge_name = "";
              }
            } else {
              judge_name = TAPi18n.__("Instance State pending", {}, locale);
            }

            return approves.push({
              _id: approve._id,
              handler: approve.user,
              handler_name: approve.handler_name,
              handler_organization_name: approve.handler_organization_name,
              handler_organization_fullname: approve.handler_organization_fullname,
              finish_date: approve.finish_date,
              judge: approve.judge,
              judge_name: judge_name,
              description: approve.description,
              is_finished: approve.is_finished,
              type: approve.type,
              opinion_fields_code: approve.opinion_fields_code,
              sign_field_code: approve.sign_field_code,
              is_read: approve.is_read,
              sign_show: approve.sign_show
            });
          });
        }

        if (step) {
          if (step.name in traces) {
            return traces[step.name] = traces[step.name].concat(approves);
          } else {
            return traces[step.name] = approves;
          }
        }
      });
    }

    return traces;
  },
  doc_values: function () {
    return WorkflowManager_format.getAutoformSchemaValues();
  },
  instance_box_style: function () {
    var box, ins, judge;
    box = Session.get("box");

    if (box === "inbox" || box === "draft") {
      judge = Session.get("judge");

      if (judge) {
        if (judge === "approved") {
          return "box-success";
        } else if (judge === "rejected") {
          return "box-danger";
        }
      }
    }

    ins = WorkflowManager.getInstance();

    if (ins && ins.final_decision) {
      if (ins.final_decision === "approved") {
        return "box-success";
      } else if (ins.final_decision === "rejected") {
        return "box-danger";
      }
    }
  },
  table_fields: function (instance) {
    var fields, form_version;

    if (Meteor.isClient) {
      form_version = WorkflowManager.getInstanceFormVersion();
    } else {
      form_version = WorkflowManager.getFormVersion(instance.form, instance.form_version);
    }

    if (form_version) {
      fields = _.clone(form_version.fields);
      fields.forEach(function (field, index) {
        var after_field, before_field, pre_fields, pre_wide_fields, td_colspan, tr_end, tr_start;
        field.tr_start = "";
        field.tr_end = "";
        td_colspan = 1;

        if ((typeof CoreForm !== "undefined" && CoreForm !== null ? CoreForm.pageTitleFieldName : void 0) === field.code) {
          field.is_wide = true;
        }

        if (field.formula && field.type !== 'odata') {
          field.permission = "readonly";
        }

        if (Steedos.isMobile()) {
          if (field.type === 'section' || field.type === 'table') {
            field.td_colspan = 4;
          } else {
            field.td_colspan = 3;
          }

          if (index !== 0) {
            field.tr_start = "<tr>";
            return field.tr_end = "</tr>";
          }
        } else {
          pre_fields = fields.slice(0, index);
          pre_wide_fields = pre_fields.filterProperty("is_wide", true);
          tr_start = "";
          tr_end = "";
          before_field = null;
          after_field = null;

          if (index > 0) {
            before_field = fields[index - 1];
          }

          if (index < fields.length - 1) {
            after_field = fields[index + 1];
          }

          if (field.type === 'section' || field.type === 'table') {
            td_colspan = 4;
          } else if (field.is_wide) {
            td_colspan = 3;
          } else {
            if (before_field && after_field && before_field.is_wide && after_field.is_wide) {
              field.is_wide = true;
              td_colspan = 3;
            }

            if ((pre_fields.length + pre_wide_fields.length) % 2 === 0 && after_field && after_field.is_wide) {
              field.is_wide = true;
              td_colspan = 3;
            }

            if ((pre_fields.length + pre_wide_fields.length) % 2 === 0 && after_field === null) {
              field.is_wide = true;
              td_colspan = 3;
            }
          }

          field.td_colspan = td_colspan;

          if (index === 0) {
            tr_start = "<tr>";
          } else {
            if ((pre_fields.length + pre_wide_fields.length) % 2 === 0 || field.is_wide) {
              if (field.type === 'table') {
                tr_start = "<tr class = \"tr-child-table\">";
              } else {
                tr_start = "<tr>";
              }
            }
          }

          field.tr_start = tr_start;

          if (index + 1 === fields.length || field.type === 'section' || field.type === 'table' || field.is_wide) {
            tr_end = "</tr>";
          }

          if ((pre_fields.length + pre_wide_fields.length) % 2 !== 0) {
            tr_end = "</tr>";
          }

          return field.tr_end = tr_end;
        }
      });
      return fields;
    }
  },
  sort_approve: function (approves, order) {
    if (!approves) {
      return [];
    }

    if (!approves instanceof Array) {
      return [];
    } else {
      if (order === 'desc') {
        approves.sort(function (p1, p2) {
          var _p1, _p2;

          _p1 = 0;
          _p2 = 0;

          if (p1.finish_date) {
            _p1 = p1.finish_date.getTime();
          }

          if (p2.finish_date) {
            _p2 = p2.finish_date.getTime();
          }

          return _p2 - _p1;
        });
      } else {
        approves.sort(function (p1, p2) {
          var _p1, _p2;

          _p1 = 0;
          _p2 = 0;

          if (p1.finish_date) {
            _p1 = p1.finish_date.getTime();
          }

          if (p2.finish_date) {
            _p2 = p2.finish_date.getTime();
          }

          return _p1 - _p2;
        });
      }
    }

    return approves;
  },
  _t: function (key) {
    return TAPi18n.__(key);
  },
  getField: function (code) {
    var form_version;
    form_version = Template.instance().view.template.steedosData.form_version;

    if (form_version) {
      return form_version.fields.findPropertyByPK("code", code);
    }
  },
  getValue: function (code) {
    var form_version, instance, locale, utcOffset, values;
    instance = Template.instance().view.template.steedosData.instance;
    form_version = Template.instance().view.template.steedosData.form_version;
    locale = Template.instance().view.template.steedosData.locale;
    utcOffset = Template.instance().view.template.steedosData.utcOffset;
    values = instance.values || {};

    if (Meteor.isClient) {
      values = WorkflowManager_format.getAutoformSchemaValues();
    }

    return InstanceReadOnlyTemplate.getValue(values[code], form_version.fields.findPropertyByPK("code", code), locale, utcOffset);
  },
  getLabel: function (code) {
    var form_version;
    form_version = Template.instance().view.template.steedosData.form_version;
    return InstanceReadOnlyTemplate.getLabel(form_version.fields, code);
  },
  getCfClass: function (field) {
    if ((field != null ? field.type : void 0) === "input" && (field != null ? field.is_textarea : void 0)) {
      return "cfTextarea";
    }
  },
  getTableThead: function (field) {
    return SteedosTable.getThead(field, false);
  },
  getTableBody: function (field) {
    var instance, tableValue, values;

    if (Meteor.isServer) {
      instance = Template.instance().view.template.steedosData.instance;
      values = instance.values || {};
    } else {
      values = WorkflowManager_format.getAutoformSchemaValues();
    }

    tableValue = values[field.code];
    return SteedosTable.getTbody(field.sfields.getProperty("code"), field, tableValue, false);
  },
  showLabel: function (field) {
    var templateData;
    templateData = Template.instance().data;

    if (templateData.label === false) {
      return false;
    }

    return true;
  },
  isOpinionField: function (field) {
    return InstanceformTemplate.helpers.isOpinionField_from_string(field.formula);
  },
  isOpinionField_from_string: function (field_formula) {
    return InstanceSignText.isOpinionField_from_string(field_formula);
  },
  includesOpinionField: function (form, form_version) {
    var field_formulas, fields, ref;
    field_formulas = new Array();
    fields = ((ref = db.form_versions.findOne({
      _id: form_version,
      form: form
    })) != null ? ref.fields : void 0) || [];
    fields.forEach(function (f) {
      var ref1;

      if (f.type === 'table') {
        return console.log('ignore opinion field in table');
      } else if (f.type === 'section') {
        return f != null ? (ref1 = f.fields) != null ? ref1.forEach(function (f1) {
          return field_formulas.push(f1.formula);
        }) : void 0 : void 0;
      } else {
        return field_formulas.push(f.formula);
      }
    });
    return _.some(field_formulas, function (field_formula) {
      return InstanceformTemplate.helpers.isOpinionField_from_string(field_formula);
    });
  },
  getOpinionFieldStepsName: function (field_formula, top_keywords) {
    var foo1, opinionFields;
    opinionFields = new Array();

    if (InstanceformTemplate.helpers.isOpinionField_from_string(field_formula)) {
      if (field_formula) {
        foo1 = field_formula.split(";");
        foo1.forEach(function (foo) {
          var json_formula, ref, ref1, s1, sf;
          json_formula = {};

          try {
            json_formula = eval("(" + foo + ")");
          } catch (error1) {
            json_formula = {};
          }

          if (json_formula != null ? json_formula.yijianlan : void 0) {
            sf = {};
            sf.stepName = json_formula.yijianlan.step;
            sf.image_sign = json_formula.yijianlan.image_sign || false;
            sf.only_cc_opinion = json_formula.yijianlan.only_cc || false;
            sf.default_description = json_formula.yijianlan["default"];
            sf.only_handler = json_formula.yijianlan.only_handler;
            sf.top_keywords = json_formula.yijianlan.top_keywords || top_keywords;
            return opinionFields.push(sf);
          } else if ((field_formula != null ? field_formula.indexOf("{traces.") : void 0) > -1 || (field_formula != null ? field_formula.indexOf("{signature.traces.") : void 0) > -1) {
            sf = {
              only_cc_opinion: false,
              image_sign: false,
              top_keywords: top_keywords
            };

            if (foo.indexOf("{signature.") > -1) {
              sf.image_sign = true;
              foo = foo.replace("{signature.", "");
            }

            s1 = foo.replace("{", "").replace("}", "");

            if (s1.split(".").length > 1) {
              sf.stepName = s1.split(".")[1];

              if (opinionFields.filterProperty("stepName", sf.stepName).length > 0) {
                if ((ref = opinionFields.findPropertyByPK("stepName", sf.stepName)) != null) {
                  ref.only_cc_opinion = true;
                }
              } else {
                if (s1.split(".").length > 2) {
                  if (((ref1 = s1.split(".")[2]) != null ? ref1.toLocaleLowerCase() : void 0) === 'cc') {
                    sf.only_cc_opinion = true;
                  }
                }
              }
            }

            return opinionFields.push(sf);
          }
        });
      }
    }

    return opinionFields;
  },
  showCCOpinion: function (field) {
    var ref, ref1, ref2, s1;

    if (((ref = field.formula) != null ? ref.indexOf("{traces.") : void 0) > -1 || ((ref1 = field.formula) != null ? ref1.indexOf("{signature.traces.") : void 0) > -1) {
      s1 = field.formula.replace("{signature.", "").replace("{", "").replace("}", "");

      if (s1.split(".").length > 2) {
        if (((ref2 = s1.split(".")[2]) != null ? ref2.toLocaleLowerCase() : void 0) === 'cc') {
          return true;
        }
      }
    }

    return false;
  },
  markDownToHtml: function (markDownString) {
    var renderer;

    if (markDownString) {
      renderer = new Markdown.Renderer();

      renderer.link = function (href, title, text) {
        return "<a target='_blank' href='" + href + "' title='" + title + "'>" + text + "</a>";
      };

      return Spacebars.SafeString(Markdown(markDownString, {
        renderer: renderer
      }));
    }
  },
  f_label: function (that) {
    return that.name || that.code;
  }
};

if (Meteor.isServer) {
  InstanceformTemplate.helpers.steedos_form = function () {
    return this.form_version;
  };

  InstanceformTemplate.helpers.isSection = function (code) {
    var form_version;
    form_version = this.form_version;
    return form_version.fields.findPropertyByPK("code", code).type === 'section';
  };

  InstanceformTemplate.helpers.doc_values = function () {
    var instance;
    instance = this.instance;
    return instance.values;
  };

  InstanceformTemplate.helpers.applicantContext = function () {
    var data, instance;
    instance = this.instance;
    return data = {
      name: 'ins_applicant',
      atts: {
        name: 'ins_applicant',
        id: 'ins_applicant',
        "class": 'selectUser form-control ins_applicant'
      },
      value: instance.applicant_name
    };
  };

  InstanceformTemplate.helpers.instance = function () {
    return this.instance;
  };

  InstanceformTemplate.helpers.fields = function () {
    var form_version;
    form_version = this.form_version;

    if (form_version) {
      return new SimpleSchema(WorkflowManager_format.getAutoformSchema(form_version));
    }
  };

  InstanceformTemplate.helpers.form_types = function () {
    return "disabled";
  };

  Template.registerHelper("afFieldLabelText", function (op) {
    var form_version, ref;
    form_version = Template.instance().view.template.steedosData.form_version;
    return InstanceReadOnlyTemplate.getLabel(form_version.fields, op != null ? (ref = op.hash) != null ? ref.name : void 0 : void 0);
  });

  InstanceformTemplate.helpers._t = function (key) {
    var locale;
    locale = this.locale;
    return TAPi18n.__(key, {}, locale);
  };

  InstanceformTemplate.helpers.ins_attach_download_url = function (_id, absolute) {
    if (absolute) {
      return Meteor.absoluteUrl("/api/files/instances/" + _id + "?download=true");
    } else {
      return "/api/files/instances/" + _id + "?download=true";
    }
  };

  InstanceformTemplate.helpers.options = function (field) {
    var options, ref, rev;
    options = field != null ? (ref = field.options) != null ? ref.split("\n") : void 0 : void 0;
    rev = [];

    if (options != null) {
      options.forEach(function (item) {
        return rev.push({
          label: item,
          value: item
        });
      });
    }

    return rev;
  };

  InstanceformTemplate.helpers.getPermissions = function (code) {
    var ref;

    if (!((ref = Template.instance().view.template.steedosData.startStepEditableFields) != null ? ref.includes(code) : void 0)) {
      return "readonly disabled";
    }

    return "";
  };
}

InstanceformTemplate.events = {
  'change .form-control,.checkbox input,.af-radio-group input,.af-checkbox-group input': function (event) {
    return InstanceManager.instanceformChangeEvent(event);
  },
  'typeahead:change .form-control': function (event) {
    return InstanceManager.instanceformChangeEvent(event);
  },
  'click .cfTextarea a': function (event) {
    event.preventDefault();
    return Steedos.openWindow(event.target.href);
  }
};

InstanceformTemplate.onCreated = function () {
  var compiled, e, instance, instanceCustomTemplate, instanceView, renderFunction, template;
  instance = WorkflowManager.getInstance();

  if (!instance) {
    return;
  }

  template = TemplateManager.getTemplate(instance);

  try {
    compiled = SpacebarsCompiler.compile(template, {
      isBody: true
    });
  } catch (error1) {
    e = error1;
    console.log("Instance Template Error", e);
    compiled = SpacebarsCompiler.compile("", {
      isBody: true
    });
  }

  renderFunction = eval(compiled);
  instanceView = new Blaze.View("custom_instance_template", renderFunction);
  instanceCustomTemplate = new Blaze.Template(instanceView.name, renderFunction);
  Template.instance_custom_template = instanceCustomTemplate;
  return Template.instance_custom_template.helpers(InstanceformTemplate.helpers);
};

InstanceformTemplate.onRendered = function () {
  var currentApprove, currentStep, form_version, formula_fields, instance, instanceNumberFields, judge, ref;
  instance = WorkflowManager.getInstance();

  if (!instance) {
    return;
  }

  if ((ref = $("input[name='ins_applicant']")[0]) != null) {
    ref.dataset.values = instance.applicant;
  }

  $("input[name='ins_applicant']").val(instance.applicant_name);
  ApproveManager.error = {
    nextSteps: '',
    nextStepUsers: ''
  };

  if (Session.get("box") === 'inbox' || Session.get("box") === 'draft') {
    InstanceEvent.initEvents(instance.flow);
  }

  if (!ApproveManager.isReadOnly()) {
    currentApprove = InstanceManager.getCurrentApprove();
    instanceNumberFields = $("[data-formula]", $("#instanceform"));
    instanceNumberFields.each(function () {
      var element, schemaKey;
      schemaKey = this.dataset.schemaKey;
      element = $(this);

      if (!$(this).val() && schemaKey && Session.get("instanceId")) {
        return Meteor.call('getInstanceValues', Session.get("instanceId"), function (error, result) {
          var key, ref1;

          if (error) {
            toastr.error(error.reason);
          }

          if (!result[schemaKey]) {
            key = (ref1 = element.data("formula")) != null ? ref1.replace("auto_number(", "").replace(")", "") : void 0;
            key = key.replace(/\"/g, "").replace(/\'/g, "");

            if (key.indexOf("{") > -1) {
              key = key.replace("{", "").replace("}", "");
              key = key.trim();
              key = AutoForm.getFieldValue(key, 'instanceform');
            }

            return InstanceNumberRules.instanceNumberBuilder(element, key);
          } else {
            return element != null ? element.val(result[schemaKey]).trigger("change") : void 0;
          }
        });
      }
    });
    judge = currentApprove.judge;
    currentStep = InstanceManager.getCurrentStep();
    form_version = WorkflowManager.getInstanceFormVersion();
    formula_fields = Form_formula.getFormulaFieldVariable("Form_formula.field_values", form_version.fields);
    Form_formula.run("", "", formula_fields, AutoForm.getFormValues("instanceform").insertDoc, form_version.fields);
    return Session.set("instance_form_values", {
      instanceId: instance._id,
      values: AutoForm.getFormValues("instanceform").insertDoc
    });
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_instance_attachments.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/views/instance/_instance_attachments.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
InstanceAttachmentTemplate.helpers = {
  showMainTitle: function () {
    return Template.instance().workflowMainAttachTitle.get();
  },
  enabled_add_main_attachment: function () {
    var ins = WorkflowManager.getInstance();
    if (!ins) return false;
    if (Session && Session.get("instancePrint")) return false;

    if (Session.get("box") != "draft" && Session.get("box") != "inbox") {
      return false;
    } // 已经结束的单子不能改附件


    if (ins.state == "completed") {
      return false;
    }

    var current_step = InstanceManager.getCurrentStep();
    if (!current_step) return false; // 分发的正文或者附件不显示转为pdf按钮
    // 如果有正文权限则为正文，否则分发为附件
    // 分发的附件不允许修改 删除 新增版本

    var main_attach_count = cfs.instances.find({
      'metadata.instance': ins._id,
      'metadata.current': true,
      'metadata.main': true
    }).count();
    var distribute_main_attach_count = 0;

    if (ins.distribute_from_instance) {
      var start_step = InstanceManager.getStartStep();

      if (start_step.can_edit_main_attach) {
        var distribute_main_attach_count = cfs.instances.find({
          'metadata.instance': ins.distribute_from_instance,
          'metadata.current': true,
          'metadata.main': true
        }).count();
      }
    }

    if (current_step.can_edit_main_attach == true && main_attach_count < 1 && distribute_main_attach_count < 1) {
      return true;
    } // 正文最多只能有一个


    if (main_attach_count >= 1 || distribute_main_attach_count >= 1) {
      return false;
    } // 开始节点并且设置了可以上传正文才显示上传正文的按钮


    var current_step = InstanceManager.getCurrentStep();
    if (current_step && current_step.step_type == "start" && current_step.can_edit_main_attach == true) return true;
    return false;
  },
  enabled_edit_normal_attachment: function () {
    var ins = WorkflowManager.getInstance();
    if (!ins) return false;
    if (Session && Session.get("instancePrint")) return false;
    var flow = WorkflowManager.getFlow(ins.flow);
    if (!flow) return false; // 分发后的 附件，不可以编辑/删除，也不让上传新的附件, 流程列表：添加属性 ‘被分发后是否允许上传附件’ #1837

    if (ins.distribute_from_instance && !flow.upload_after_being_distributed) return false;

    if (Session.get("box") != "draft" && Session.get("box") != "inbox") {
      return false;
    } // 已经结束的单子不能改附件


    if (ins.state == "completed") {
      return false;
    }

    if (InstanceManager.isCC(ins)) {
      var step = InstanceManager.getCCStep();
      if (step && (step.can_edit_normal_attach == true || step.can_edit_normal_attach == undefined)) return true;
    } else {
      var current_step = InstanceManager.getCurrentStep();
      if (current_step && (current_step.can_edit_normal_attach == true || current_step.can_edit_normal_attach == undefined)) return true;
    }

    return false;
  },
  main_attachment: function () {
    var ins = WorkflowManager.getInstance();
    if (!ins) return false;
    var start_step = InstanceManager.getStartStep(); // 如果是被分发的申请单并且有修改正文的权限，则优先显示原申请单文件

    var main_attach = null;

    if (ins.distribute_from_instance && start_step.can_edit_main_attach == true) {
      main_attach = cfs.instances.findOne({
        'metadata.instance': ins.distribute_from_instance,
        'metadata.current': true,
        'metadata.main': true
      });
    }

    if (!main_attach) {
      main_attach = cfs.instances.findOne({
        'metadata.instance': ins._id,
        'metadata.current': true,
        'metadata.main': true
      });
    }

    return main_attach;
  },
  normal_attachments: function () {
    var ins = WorkflowManager.getInstance();
    if (!ins) return false;
    var selector = {
      'metadata.current': true,
      'metadata.main': {
        $ne: true
      }
    };
    var atts = new Array();

    if (ins.distribute_from_instance) {
      // 如果是被分发的申请单，则显示原申请单文件, 如果选择了将原表单存储为附件也要显示, 同时也要显示新上传的附件
      var dfis = _.clone(ins.distribute_from_instances) || [];
      dfis.push(ins._id);
      selector['metadata.instance'] = {
        $in: dfis
      };
      selector["$or"] = [{
        "metadata.instance": ins._id
      }, {
        "metadata.instance": {
          $in: ins.distribute_from_instances
        },
        "metadata.is_private": {
          $ne: true
        }
      }]; // 如果原申请单有正文但是分发后没有正文权限，则原申请单正文显示在附件栏

      var start_step = InstanceManager.getStartStep();

      if (start_step && start_step.can_edit_main_attach != true) {
        var distribute_main = cfs.instances.findOne({
          'metadata.instance': {
            $in: ins.distribute_from_instances
          },
          'metadata.current': true,
          'metadata.main': true
        });

        if (distribute_main) {
          var firstVersionMain = cfs.instances.findOne(distribute_main.metadata.parent);
          distribute_main.attachmentUploadedAt = firstVersionMain ? firstVersionMain.uploadedAt : distribute_main.uploadedAt;
          atts.push(distribute_main);
        }
      }
    } else {
      selector['metadata.instance'] = ins._id;
    }

    cfs.instances.find(selector).forEach(function (c) {
      var firstVersion = cfs.instances.findOne(c.metadata.parent);
      c.attachmentUploadedAt = firstVersion ? firstVersion.uploadedAt : c.uploadedAt;
      atts.push(c);
    });
    return _.sortBy(atts, 'attachmentUploadedAt');
  },
  showAttachments: function () {
    var ins = WorkflowManager.getInstance();
    if (!ins) return false; // 如果是被分发的申请单，则显示原申请单文件 和分发后申请单文件

    var instanceIds = _.clone(ins.distribute_from_instances) || [];
    instanceIds.push(ins._id);
    var attachments_count = cfs.instances.find({
      'metadata.instance': {
        $in: instanceIds
      },
      'metadata.current': true
    }).count();
    if (Session && Session.get("instancePrint") && attachments_count < 1) return false;
    if (Session.get("box") == "draft" || Session.get("box") == "inbox" || attachments_count > 0) return true;else return false;
  },
  _t: function (key) {
    return TAPi18n.__(key);
  }
};

if (Meteor.isServer) {
  InstanceAttachmentTemplate.helpers._t = function (key) {
    locale = Template.instance().view.template.steedosData.locale;
    return TAPi18n.__(key, {}, locale);
  };

  InstanceAttachmentTemplate.helpers.enabled_add_main_attachment = function () {
    return false;
  };

  InstanceAttachmentTemplate.helpers.enabled_edit_normal_attachment = function () {
    return false;
  };

  InstanceAttachmentTemplate.helpers.main_attachment = function () {
    var instance = Template.instance().view.template.steedosData.instance;

    var instanceIds = _.compact([instance.distribute_from_instance, instance._id]);

    var attachment = cfs.instances.findOne({
      'metadata.instance': {
        $in: instanceIds
      },
      'metadata.current': true,
      'metadata.main': true
    });
    return attachment;
  };

  InstanceAttachmentTemplate.helpers.normal_attachments = function () {
    var steedosData = Template.instance().view.template.steedosData;
    var instance = steedosData.instance;
    var instanceIds = _.clone(instance.distribute_from_instances) || [];
    instanceIds.push(instance._id);
    var attachments = cfs.instances.find({
      'metadata.instance': {
        $in: instanceIds
      },
      'metadata.current': true,
      'metadata.main': {
        $ne: true
      },
      $or: [{
        'metadata.is_private': {
          $ne: true
        }
      }, {
        'metadata.is_private': true,
        "metadata.owner": steedosData.userId
      }]
    }).fetch();
    return attachments;
  };

  InstanceAttachmentTemplate.helpers.showAttachments = function () {
    var instance = Template.instance().view.template.steedosData.instance;
    var instanceIds = _.clone(instance.distribute_from_instances) || [];
    instanceIds.push(instance._id);
    var attachments = cfs.instances.find({
      'metadata.instance': {
        $in: instanceIds
      },
      'metadata.current': true
    }).fetch();

    if (attachments && attachments.length > 0) {
      return true;
    }

    return false;
  };

  InstanceAttachmentTemplate.helpers.showMainTitle = function () {
    var instance = Template.instance().view.template.steedosData.instance;

    var instanceIds = _.compact([instance.distribute_from_instance, instance._id]);

    var main_attach_count = cfs.instances.find({
      'metadata.instance': {
        $in: instanceIds
      },
      'metadata.current': true,
      'metadata.main': true
    }).count();
    return main_attach_count > 0;
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_instance_sign_text.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/views/instance/_instance_sign_text.coffee                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
InstanceSignText.helpers = {
  show: function (stepName) {
    var instance, myApprove, myTrace, ref;

    if (Meteor.isClient) {
      if (Session.get('instancePrint')) {
        return false;
      }

      if (InstanceManager.isInbox()) {
        myApprove = InstanceManager.getCurrentApprove();

        if (myApprove) {
          instance = WorkflowManager.getInstance();
          myTrace = instance != null ? (ref = instance.traces) != null ? ref.findPropertyByPK("_id", myApprove.trace) : void 0 : void 0;
          return (myTrace != null ? myTrace.name : void 0) === stepName;
        }
      }
    }

    return false;
  },
  defaultDescription: function () {
    return Template.instance().data.default_description;
  },
  traces: function () {
    return InstanceformTemplate.helpers.traces();
  },
  trace: function (stepName, only_cc_opinion, image_sign, top_keywords) {
    var approve_sort, approves, approvesGroup, approves_sorted, completed_date, hasNext, haveDescriptionApprove, instance, is_completed, ref, ref1, ref2, traces;
    instance = InstanceformTemplate.helpers.instance();
    is_completed = (instance != null ? instance.state : void 0) === "completed";
    completed_date = is_completed ? (ref = _.last(instance.traces)) != null ? (ref1 = ref.finish_date) != null ? ref1.getTime() : void 0 : void 0 : 0;

    if (is_completed && instance.finish_date) {
      completed_date = (ref2 = instance.finish_date) != null ? ref2.getTime() : void 0;
    }

    traces = InstanceformTemplate.helpers.traces();
    approves = _.clone(traces[stepName]);

    approve_sort = function (approves, top_keywords) {
      var approves_sorted, top_approves;
      approves_sorted = _.sortBy(approves, function (approve) {
        return -(approve.finish_date || new Date()).getTime();
      });

      if (top_keywords) {
        top_approves = new Array();
        top_keywords.split(",").forEach(function (key) {
          return top_approves = _.union(top_approves, _.filter(approves_sorted, function (approve) {
            var ref3;
            return (approve != null ? (ref3 = approve.handler_name) != null ? ref3.indexOf(key) : void 0 : void 0) > -1;
          }));
        });
        top_approves = _.sortBy(top_approves, function (top_approve) {
          return -(top_approve.finish_date || new Date()).getTime();
        });
        approves_sorted = _.union(top_approves, approves_sorted);
      }

      return approves_sorted || [];
    };

    approves = _.filter(approves, function (a) {
      return a.type !== "forward" && a.type !== "distribute" && a.type !== "terminated";
    });

    if (only_cc_opinion) {
      approves = approves != null ? approves.filterProperty("type", "cc") : void 0;
    }

    approves_sorted = approve_sort(approves, top_keywords);
    approvesGroup = _.groupBy(approves, "handler");

    hasNext = function (approve, approvesGroup) {
      var handlerApproves;
      handlerApproves = approvesGroup[approve.handler];
      return _.indexOf(handlerApproves, approve) + 1 < handlerApproves.length;
    };

    haveDescriptionApprove = function (approve, approvesGroup) {
      var descriptionApproves, handlerApproves;
      handlerApproves = approvesGroup[approve.handler];
      descriptionApproves = _.filter(handlerApproves, function (a) {
        if (a.description) {
          return true;
        }

        return false;
      });

      if (descriptionApproves.length === 0) {
        return false;
      }

      return true;
    };

    approves_sorted.forEach(function (approve) {
      if (approve.sign_show !== false && (approve.description || !approve.description && !hasNext(approve, approvesGroup))) {
        if (approve.judge !== 'terminated') {
          return approve._display = true;
        }
      }
    });
    approves_sorted = _.filter(approves_sorted, function (a) {
      var ref3;

      if (is_completed) {
        return a._display === true && a.is_finished && ((ref3 = a.finish_date) != null ? ref3.getTime() : void 0) <= completed_date;
      } else {
        return a._display === true;
      }
    });
    return approves_sorted;
  },
  include: function (a, b) {
    return InstanceformTemplate.helpers.include(a, b);
  },
  unempty: function (val) {
    return InstanceformTemplate.helpers.unempty(val);
  },
  formatDate: function (date, options) {
    if (!options) {
      options = {
        "format": "YYYY-MM-DD"
      };
    }

    return InstanceformTemplate.helpers.formatDate(date, options);
  },
  isMyApprove: function (approve, only_cc_opinion) {
    var currentApprove, ins;

    if (Meteor.isClient) {
      ins = WorkflowManager.getInstance();
      currentApprove = InstanceManager.getCurrentApprove();

      if (!(approve != null ? approve._id : void 0)) {
        approve = currentApprove;
      }

      if (approve._id === (currentApprove != null ? currentApprove._id : void 0) && (currentApprove != null ? currentApprove.type : void 0) === 'cc' && Template.instance().data.name) {
        if (_.indexOf(currentApprove != null ? currentApprove.opinion_fields_code : void 0, Template.instance().data.name) > -1) {
          return true;
        } else {
          return false;
        }
      }

      if (!((currentApprove != null ? currentApprove.type : void 0) === 'cc') && only_cc_opinion) {
        return false;
      }

      if (currentApprove && approve._id === currentApprove._id) {
        return true;
      }
    }

    return false;
  },
  myApproveDescription: function (approveId) {
    if (Meteor.isClient) {
      return TracesTemplate.helpers.myApproveDescription(approveId);
    }
  },
  now: function () {
    return new Date();
  },
  isReadOnly: function () {
    if (Meteor.isClient) {
      return ApproveManager.isReadOnly();
    }

    return false;
  },
  isOpinionOfField: function (approve) {
    if (approve.type === "cc" && Template.instance().data.name) {
      if (Template.instance().data.name === approve.sign_field_code) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  },
  markDownToHtml: function (markDownString) {
    var renderer;

    if (markDownString) {
      renderer = new Markdown.Renderer();

      renderer.link = function (href, title, text) {
        return "<a target='_blank' href='" + href + "' title='" + title + "'>" + text + "</a>";
      };

      return Spacebars.SafeString(Markdown(markDownString, {
        renderer: renderer
      }));
    }
  },
  steps: function (field_formula, step, only_cc_opinion, image_sign) {
    var ref, ref1, ref2, steps;
    steps = [];

    if (!step) {
      if (!field_formula) {
        field_formula = (ref = WorkflowManager.getInstanceFormVersion()) != null ? (ref1 = ref.fields) != null ? ref1.findPropertyByPK("code", this.name).formula : void 0 : void 0;
      }

      steps = InstanceformTemplate.helpers.getOpinionFieldStepsName(field_formula, (ref2 = Template.instance()) != null ? ref2.data.top_keywords : void 0);
    } else {
      steps = [{
        stepName: step,
        only_cc_opinion: only_cc_opinion,
        image_sign: image_sign
      }];
    }

    return steps;
  },
  imageSignData: function (handler) {
    return {
      user: handler
    };
  },
  showSignImage: function (handler, image_sign) {
    var spaceUserSign;
    spaceUserSign = ImageSign.helpers.spaceUserSign(handler);

    if ((spaceUserSign != null ? spaceUserSign.sign : void 0) && image_sign) {
      return true;
    } else {
      return false;
    }
  },
  getLastSignApprove: function () {
    var ins;
    ins = WorkflowManager.getInstance();
    return _.last(TracesManager.getHandlerSignShowApproves(ins, Meteor.userId()));
  },
  lastMyApproveDescription: function () {
    var approves, currentStep, ref, traces;
    traces = InstanceformTemplate.helpers.traces();
    currentStep = InstanceManager.getCurrentStep();
    approves = _.clone(traces[currentStep.name]);
    approves = approves.filterProperty("handler", Meteor.userId());

    if (approves.length > 1) {
      return (ref = approves[approves.length - 2]) != null ? ref.description : void 0;
    }

    return "";
  },
  showApprove: function (approve) {
    if (approve != null ? approve.is_read : void 0) {
      if (approve.is_finished) {
        return ["approved", "rejected", "submitted", "readed"].includes(approve.judge);
      } else {
        return true;
      }
    }

    return false;
  },
  judge_description: function (judge) {
    return t(judge + "_description");
  },
  is_approved: function (judge) {
    return "approved" === judge;
  },
  is_rejected: function (judge) {
    return "rejected" === judge;
  },
  is_readed: function (judge) {
    return ["approved", "rejected", "submitted", "readed"].includes(judge);
  },
  addClass: function () {
    var name, ref, ref1;
    name = (ref = Template.instance()) != null ? (ref1 = ref.data) != null ? ref1.name : void 0 : void 0;
    setTimeout(function () {
      var e, element;

      try {
        element = $(".automatic.opinion-field-" + name);

        if (element.length > 0) {
          if (element != null ? element.is("td") : void 0) {
            return element.addClass('field-editable');
          } else {
            return $(".instance-sign", element).addClass('field-editable');
          }
        }
      } catch (error) {
        e = error;
        return console.log(e);
      }
    }, 1);
    return '';
  }
};

if (Meteor.isServer) {
  InstanceSignText.helpers.defaultDescription = function () {
    var locale;
    locale = Template.instance().view.template.steedosData.locale;
    return Template.instance().data.default_description || TAPi18n.__("instance_default_opinion", {}, locale);
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_traces_help.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/views/instance/_traces_help.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
TracesTemplate.helpers = {
  equals: function (a, b) {
    return a === b;
  },
  empty: function (a) {
    if (a) {
      return a.toString().trim().length < 1;
    } else {
      return true;
    }
  },
  unempty: function (a) {
    if (a) {
      return a.toString().trim().length > 0;
    } else {
      return false;
    }
  },
  append: function (a, b) {
    return a + b;
  },
  dateFormat: function (date) {
    if (Steedos.isMobile() && (date != null ? date.getFullYear() : void 0) === new Date().getFullYear()) {
      return $.format.date(new Date(date), "MM-dd HH:mm");
    } else {
      return $.format.date(new Date(date), "yyyy-MM-dd HH:mm");
    }
  },
  getStepName: function (stepId) {
    var step;
    step = WorkflowManager.getInstanceStep(stepId);

    if (step) {
      return step.name;
    }

    return null;
  },
  showDeleteButton: function (approved) {
    if (approved && approved.type === 'cc' && approved.from_user === Meteor.userId() && approved.is_finished !== true && !Session.get("instancePrint")) {
      return true;
    }

    return false;
  },
  isShowModificationButton: function (approved) {
    var approve_admins, isShow, ref, ref1, ref2;
    approve_admins = (ref = Meteor.settings) != null ? (ref1 = ref["public"]) != null ? (ref2 = ref1.workflow) != null ? ref2.approve_admins : void 0 : void 0 : void 0;

    if (approve_admins != null ? approve_admins.length : void 0) {
      isShow = approve_admins != null ? approve_admins.contains(Meteor.userId()) : void 0;
    }

    if (!isShow) {
      return false;
    }

    return approved.handler === Meteor.userId();
  },
  isEditing: function () {
    var ref;
    return (ref = Template.instance().is_editing) != null ? ref.get() : void 0;
  },
  isShowDescription: function (approved) {
    var ref;

    if (TracesTemplate.helpers.isShowModificationButton(approved)) {
      return true;
    }

    return ((ref = approved.description) != null ? ref.toString().trim().length : void 0) > 0;
  },
  isCC: function (approved) {
    if (approved && approved.type === 'cc') {
      return true;
    }

    return false;
  },
  getApproveStatusIcon: function (approveJudge) {
    var approveStatusIcon;
    approveStatusIcon = void 0;

    switch (approveJudge) {
      case 'approved':
        approveStatusIcon = 'ion ion-checkmark-round';
        break;

      case 'rejected':
        approveStatusIcon = 'ion ion-close-round';
        break;

      case 'terminated':
        approveStatusIcon = 'fa fa-ban';
        break;

      case 'reassigned':
        approveStatusIcon = 'ion ion-android-contact';
        break;

      case 'relocated':
        approveStatusIcon = 'ion ion-arrow-shrink';
        break;

      case 'retrieved':
        approveStatusIcon = 'fa fa-undo';
        break;

      default:
        approveStatusIcon = '';
        break;
    }

    return approveStatusIcon;
  },
  getApproveStatusText: function (approveJudge) {
    var approveStatusText, locale;

    if (Meteor.isServer) {
      locale = Template.instance().view.template.steedosData.locale;

      if (locale.toLocaleLowerCase() === 'zh-cn') {
        locale = "zh-CN";
      }
    } else {
      locale = Session.get("TAPi18n::loaded_lang");
    }

    approveStatusText = void 0;

    switch (approveJudge) {
      case 'approved':
        approveStatusText = TAPi18n.__('Instance State approved', {}, locale);
        break;

      case 'rejected':
        approveStatusText = TAPi18n.__('Instance State rejected', {}, locale);
        break;

      case 'terminated':
        approveStatusText = TAPi18n.__('Instance State terminated', {}, locale);
        break;

      case 'reassigned':
        approveStatusText = TAPi18n.__('Instance State reassigned', {}, locale);
        break;

      case 'relocated':
        approveStatusText = TAPi18n.__('Instance State relocated', {}, locale);
        break;

      case 'retrieved':
        approveStatusText = TAPi18n.__('Instance State retrieved', {}, locale);
        break;

      case 'returned':
        approveStatusText = TAPi18n.__('Instance State returned', {}, locale);
        break;

      case 'readed':
        approveStatusText = TAPi18n.__('Instance State readed', {}, locale);
        break;

      default:
        approveStatusText = '';
        break;
    }

    return approveStatusText;
  },
  _t: function (key) {
    return TAPi18n.__(key);
  },
  myApproveDescription: function (approveId) {
    var myApprove, ref, ref1;

    if (Meteor.isClient) {
      if (Session.get("box") === 'inbox') {
        myApprove = (ref = Template.instance()) != null ? (ref1 = ref.myApprove) != null ? ref1.get() : void 0 : void 0;

        if (myApprove && myApprove.id === approveId) {
          if (!Session.get("instance_my_approve_description")) {
            return (myApprove != null ? myApprove.description : void 0) || "";
          }

          return Session.get("instance_my_approve_description");
        }
      }
    }
  },
  isForward: function (approved) {
    if (approved && approved.type === 'forward') {
      return true;
    }

    return false;
  },
  showForwardDeleteButton: function (approve) {
    if (db.instances.find(approve.forward_instance).count() === 0) {
      return false;
    }

    if (approve && approve.type === 'forward' && approve.from_user === Meteor.userId() && !Session.get("instancePrint") && approve.judge !== 'terminated') {
      return true;
    }

    return false;
  },
  markDownToHtml: function (markDownString) {
    var renderer;

    if (markDownString) {
      renderer = new Markdown.Renderer();

      renderer.link = function (href, title, text) {
        return "<a target='_blank' href='" + href + "' title='" + title + "'>" + text + "</a>";
      };

      return Spacebars.SafeString(Markdown(markDownString, {
        renderer: renderer
      }));
    }
  },
  isDistribute: function (approve) {
    if (approve && approve.type === 'distribute') {
      return true;
    }

    return false;
  },
  showDistributeDeleteButton: function (approve) {
    var ins;

    if (db.instances.find(approve.forward_instance).count() === 0) {
      return false;
    }

    if (approve && approve.type === 'distribute' && !Session.get("instancePrint") && approve.judge !== 'terminated' && Steedos.isLegalVersion('', "workflow.enterprise")) {
      ins = db.instances.findOne({
        _id: approve.instance
      }, {
        fields: {
          flow: 1,
          space: 1
        }
      });

      if (ins && ins.flow && ins.space) {
        if (WorkflowManager.hasFlowAdminPermission(ins.flow, ins.space, Meteor.userId())) {
          return true;
        }
      }

      if (approve.from_user === Meteor.userId()) {
        return true;
      }
    }

    return false;
  },
  finishDateSchema: function () {
    if (Steedos.isAndroidOrIOS()) {
      return new SimpleSchema({
        finish_date: {
          autoform: {
            type: "datetime-local"
          },
          optional: false,
          type: Date
        }
      });
    } else {
      return new SimpleSchema({
        finish_date: {
          autoform: {
            type: "bootstrap-datetimepicker",
            readonly: true,
            dateTimePickerOptions: {
              format: "YYYY-MM-DD HH:mm",
              ignoreReadonly: true,
              locale: Session.get("TAPi18n::loaded_lang"),
              widgetPositioning: {
                horizontal: 'right'
              }
            }
          },
          optional: false,
          type: Date
        }
      });
    }
  },
  finishDateValues: function () {
    return {
      finish_date: this.finish_date
    };
  },
  /*
     	此函数用于控制是否显示traces view
     	true: 显示traces view,签核历程按钮点击后是直接定位到traces view
     	false: 不显示traces view，签核历程按钮点击后,以Modal 方式显示traces view
   */showTracesView: function (form, form_version) {
    var ref, show_modal_traces_list;
    show_modal_traces_list = ((ref = db.space_settings.findOne({
      space: Session.get("spaceId"),
      key: "show_modal_traces_list"
    })) != null ? ref.values : void 0) || false;
    return !show_modal_traces_list;
  },
  getInstanceStateText: function (instance_id) {
    var ins, locale, text;

    if (Meteor.isServer) {
      locale = Template.instance().view.template.steedosData.locale;

      if (locale.toLocaleLowerCase() === 'zh-cn') {
        locale = "zh-CN";
      }
    } else {
      locale = Session.get("TAPi18n::loaded_lang");
    }

    ins = db.instances.findOne({
      _id: instance_id
    }, {
      fields: {
        state: 1,
        is_read: 1
      }
    });

    if (!ins) {
      return TAPi18n.__('instance_deleted', {}, locale);
    }

    text = '';

    if (ins.state === 'completed') {
      text = TAPi18n.__('completed', {}, locale);
    } else if (ins.state === 'pending') {
      text = TAPi18n.__('pending', {}, locale);
    } else if (ins.state === 'draft') {
      if (ins.is_read) {
        text = TAPi18n.__('instance_approve_read', {}, locale);
      } else {
        text = TAPi18n.__('instance_approve_not_yet_handled', {}, locale);
      }
    }

    return text;
  },
  getInstanceStateColor: function (instance_id) {
    var cla, ins;
    ins = db.instances.findOne({
      _id: instance_id
    }, {
      fields: {
        state: 1,
        is_read: 1
      }
    });

    if (!ins) {
      return "";
    }

    cla = '';

    if (ins.state === 'draft') {
      if (ins.is_read) {
        cla = 'blue';
      } else {
        cla = 'red';
      }
    }

    return cla;
  },
  firstTrace: function (index) {
    return index === 0;
  },
  last_distribute_from: function (instance_id) {
    var dis_info, ins, user;
    ins = db.instances.findOne({
      _id: instance_id,
      distribute_from_instance: {
        $exists: true
      }
    }, {
      fields: {
        created: 1,
        created_by: 1
      }
    });

    if (ins) {
      dis_info = {};
      user = {};

      if (Meteor.isClient) {
        user = UUflow_api.getNameForUser(ins.created_by);
      } else if (Meteor.isServer) {
        user = db.users.findOne({
          _id: ins.created_by
        }, {
          fields: {
            name: 1
          }
        });
      }

      if (user.name) {
        dis_info.from_user_name = user.name;
        dis_info.created = ins.created;
      }

      if (!_.isEmpty(dis_info)) {
        return dis_info;
      }
    }
  },
  isCCOrDistributeOrForwardTerminated: function (approve) {
    if ((approve.type === 'cc' || approve.type === 'distribute' || approve.type === 'forward') && approve.judge === 'terminated') {
      return true;
    }

    return false;
  },
  judgeTerminated: function (judge) {
    return judge === 'terminated';
  },
  instanceExists: function (instance_id) {
    return !!db.instances.find(instance_id).count();
  },
  agentDescription: function (userName) {
    var locale;

    if (Meteor.isServer) {
      locale = Template.instance().view.template.steedosData.locale;

      if (locale.toLocaleLowerCase() === 'zh-cn') {
        locale = "zh-CN";
      }
    } else {
      locale = Session.get("TAPi18n::loaded_lang");
    }

    return TAPi18n.__('process_delegation_rules_description', {
      userName: userName
    }, locale);
  },
  traceName: function (instance_id, traceId) {
    var ref, ref1;
    return (ref = _.find((ref1 = db.instances.findOne(instance_id, {
      fields: {
        traces: 1
      }
    })) != null ? ref1.traces : void 0, function (trace) {
      return trace._id === traceId;
    })) != null ? ref.name : void 0;
  }
};

if (Meteor.isServer) {
  TracesTemplate.helpers.dateFormat = function (date) {
    var utcOffset;

    if (date) {
      utcOffset = Template.instance().view.template.steedosData.utcOffset;
      return InstanceReadOnlyTemplate.formatDate(date, utcOffset);
    }
  };

  TracesTemplate.helpers._t = function (key) {
    var locale;
    locale = Template.instance().view.template.steedosData.locale;
    return TAPi18n.__(key, {}, locale);
  };

  TracesTemplate.helpers.showDeleteButton = function (approved) {
    return false;
  };
}

TracesTemplate.events = {
  'click .cc-approve-remove': function (event, template) {
    var approveId, instanceId;
    event.stopPropagation();

    if (event.currentTarget.dataset.calling * 1 !== 1) {
      event.currentTarget.dataset.calling = 1;
      $("i", event.currentTarget).addClass("fa-spin");
      instanceId = Session.get('instanceId');
      approveId = event.target.dataset.approve;
      $("body").addClass("loading");
      Meteor.call('cc_remove', instanceId, approveId, function (err, result) {
        $("body").removeClass("loading");

        if (err) {
          toastr.error(err);
          event.currentTarget.dataset.calling = 0;
          $("i", event.currentTarget).removeClass("fa-spin");
        }

        if (result === true) {
          toastr.success(TAPi18n.__("remove_cc_approve"));

          if ($(".instance-trace-detail-modal").length) {
            Modal.hide("instance_trace_detail_modal");
          }
        }
      });
    }
  },
  'click .instance-trace-detail-modal .btn-cc-approve-remove': function (event, template) {
    var approveId, instanceId;
    instanceId = Session.get('instanceId');
    approveId = event.target.dataset.approve;
    $("body").addClass("loading");
    Meteor.call('cc_remove', instanceId, approveId, function (err, result) {
      $("body").removeClass("loading");

      if (err) {
        toastr.error(err);
      }

      if (result === true) {
        toastr.success(TAPi18n.__("remove_cc_approve"));
        Modal.hide("instance_trace_detail_modal");
      }
    });
  },
  'click .approve-item,.approve-description': function (event, template) {
    return Modal.show("instance_trace_detail_modal", this);
  },
  'taphold .approve-item,.approve-description': function (event, template) {
    return Modal.show("instance_trace_detail_modal", this);
  },
  'tapend .approve-item,.approve-description': function (event, template) {
    event.stopPropagation();
    event.preventDefault();
    return false;
  },
  'click .instance-trace-detail-modal .btn-forward-approve-remove': function (event, template) {
    var approveId, instanceId, traceId;
    instanceId = Session.get('instanceId');
    approveId = event.target.dataset.approve;
    traceId = event.target.dataset.trace;
    $("body").addClass("loading");
    Meteor.call('forward_remove', instanceId, traceId, approveId, function (err, result) {
      $("body").removeClass("loading");

      if (err) {
        toastr.error(TAPi18n.__(err.reason));
      }

      if (result === true) {
        toastr.success(TAPi18n.__("instance_approve_forward_remove_success"));
        Modal.hide("instance_trace_detail_modal");
      }
    });
  },
  'click .instance-trace-detail-modal .btn-forward-instance-look': function (event, template) {
    var forward_instance, forward_space;
    forward_space = event.target.dataset.forwardspace;
    forward_instance = event.target.dataset.forwardinstance;
    return Steedos.openWindow(Steedos.absoluteUrl("workflow/space/" + forward_space + "/view/readonly/" + forward_instance));
  },
  'click .btn-modification': function (event, template) {
    template.is_editing.set(!template.is_editing.get());

    if (!Steedos.isAndroidOrIOS()) {
      return Tracker.afterFlush(function () {
        return $("#instance_trace_detail_modal #finish_input").on("dp.show", function () {
          return $(".modal-body").scrollTop(100);
        });
      });
    }
  },
  'click .btn-cancelBut': function (event, template) {
    return template.is_editing.set(!template.is_editing.get());
  },
  'click .btn-saveBut': function (event, template) {
    var approveId, finish_input, instanceId, opinion_input, traceId;
    instanceId = Session.get('instanceId');
    approveId = event.target.dataset.approve;
    traceId = event.target.dataset.trace;
    opinion_input = $('#opinion_input').val();
    finish_input = AutoForm.getFieldValue("finish_date", "finishDateAutoForm");
    $("body").addClass("loading");
    return Meteor.call('change_approve_info', instanceId, traceId, approveId, opinion_input, finish_input, function (err, result) {
      $("body").removeClass("loading");

      if (err) {
        toastr.error(TAPi18n.__(err.reason));
      }

      if (result === true) {
        toastr.success(t("instance_approve_modal_modificationsave"));
        Modal.hide("instance_trace_detail_modal");
      }
    });
  },
  'click .instance-trace-detail-modal .btn-distribute-approve-remove': function (event, template) {
    Modal.allowMultiple = true;
    return Modal.show('cancel_distribute_modal');
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_related_instances.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/client/views/instance/_related_instances.coffee                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
RelatedInstances.helpers = {
  showRelatedInstaces: function () {
    var ins;

    if (Meteor.isClient) {
      ins = WorkflowManager.getInstance();
    } else {
      ins = this.instance;
    }

    if ((ins != null ? ins.related_instances : void 0) && _.isArray(ins != null ? ins.related_instances : void 0)) {
      if (db.instances.find({
        _id: {
          $in: ins.related_instances
        }
      }, {
        fields: {
          space: 1,
          name: 1
        }
      }).count() > 0) {
        return true;
      }

      return false;
    } else {
      return false;
    }
  },
  related_instaces: function () {
    var ins;

    if (Meteor.isClient) {
      ins = WorkflowManager.getInstance();
    } else {
      ins = this.instance;
    }

    if ((ins != null ? ins.related_instances : void 0) && _.isArray(ins != null ? ins.related_instances : void 0)) {
      return db.instances.find({
        _id: {
          $in: ins.related_instances
        }
      }, {
        fields: {
          space: 1,
          name: 1
        }
      }).fetch();
    }
  },
  related_instace_url: function (ins) {
    var absolute;

    if (Meteor.isClient && (Steedos.isMobile() || Steedos.isCordova())) {
      return '';
    }

    absolute = false;

    if (Meteor.isServer) {
      absolute = this.absolute;
    }

    if (absolute) {
      return Meteor.absoluteUrl("workflow/space/" + ins.space + "/view/readonly/" + ins._id + '?hide_traces=0');
    } else {
      return Steedos.absoluteUrl("workflow/space/" + ins.space + "/view/readonly/" + ins._id + '?hide_traces=0');
    }
  },
  _t: function (key) {
    var locale;

    if (Meteor.isClient) {
      return TAPi18n.__(key);
    } else {
      locale = Template.instance().view.template.steedosData.locale;
      return TAPi18n.__(key, {}, locale);
    }
  },
  show_delete: function () {
    var ins;

    if (!Meteor.isClient) {
      return false;
    } else {
      ins = WorkflowManager.getInstance();
      return ins.state === 'draft';
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"server":{"methods":{"set_instance_step_approve.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/set_instance_step_approve.coffee                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  set_instance_step_approve: function (ins_id, step_approve) {
    var ins;

    if (!this.userId) {
      return;
    }

    ins = db.instances.findOne({
      _id: ins_id
    }, {
      fields: {
        state: 1
      }
    });

    if (ins.state !== 'draft') {
      return;
    }

    return db.instances.update({
      _id: ins_id
    }, {
      $set: {
        step_approve: step_approve
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_instance_data.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/get_instance_data.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({
  get_instance_data: function (instance_id, formCached, flowCached) {
    check(instance_id, String);
    check(formCached, Boolean);
    check(flowCached, Boolean);
    var instance = db.instances.findOne(instance_id);
    if (!instance) return {
      instance: null
    };
    if (formCached && flowCached) return {
      instance: instance
    };

    if (!formCached) {
      var form = db.forms.findOne(instance.form);
      var form_version = {};

      if (form.current._id == instance.form_version) {
        form_version = form.current;
      } else {
        form_version = _.where(form.historys, {
          _id: instance.form_version
        })[0];
      }
    }

    if (!flowCached) {
      var flow = db.flows.findOne(instance.flow);
      var flow_version = {};

      if (flow.current._id == instance.flow_version) {
        flow_version = flow.current;
      } else {
        flow_version = _.where(flow.historys, {
          _id: instance.flow_version
        })[0];
      }
    }

    return {
      instance: instance,
      form_version: form_version,
      flow_version: flow_version
    };
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"save_instance.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/save_instance.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({
  draft_save_instance: function (ins) {
    if (!this.userId) return;
    var result = true;
    var setObj = {};
    var index = 0;
    var ins_id = ins._id;
    var trace_id = ins.traces[0]._id;
    var approve_id = ins.traces[0].approves[0]._id;
    var description = ins.traces[0].approves[0].description;
    var next_steps = ins.traces[0].approves[0].next_steps;
    var values = ins.traces[0].approves[0].values || {};
    var applicant_id = ins.applicant;
    var instance = db.instances.findOne(ins_id, {
      fields: {
        applicant: 1,
        state: 1,
        submitter: 1,
        traces: 1,
        form: 1,
        flow_version: 1,
        space: 1,
        flow: 1
      }
    });
    var space_id = instance.space;
    var flow_id = instance.flow;
    var form_id = instance.form;
    var traces = instance.traces;

    var current_trace = _.find(traces, function (t) {
      return t._id == trace_id;
    });

    current_trace.approves.forEach(function (a, idx) {
      if (a._id == approve_id) {
        index = idx;
      }
    });
    var key_str = 'traces.$.approves.' + index + '.'; // 判断一个instance是否为拟稿状态

    var current_user = db.users.findOne({
      _id: this.userId
    }, {
      fields: {
        locale: 1
      }
    });
    var lang = current_user.locale == 'zh-cn' ? 'zh-CN' : 'en';
    uuflowManager.isInstanceDraft(instance, lang); // 判断一个用户是否是一个instance的提交者

    uuflowManager.isInstanceSubmitter(instance, this.userId);
    var flow = db.flows.findOne(flow_id, {
      fields: {
        "current._id": 1,
        "current.form_version": 1,
        "name": 1,
        "current.steps": 1
      }
    });
    setObj.modified = new Date();
    setObj.modified_by = this.userId;

    if (flow.current._id != instance.flow_version) {
      result = "upgraded";

      var start_step = _.find(flow.current.steps, function (s) {
        return s.step_type == "start";
      }); // 流程已升级


      setObj.flow_version = flow.current._id;
      setObj.form_version = flow.current.form_version; // 存入当前最新版flow中开始节点的step_id

      setObj["traces.$.step"] = start_step._id;
      setObj["traces.$.name"] = start_step.name;
    }

    if (instance.applicant != applicant_id) {
      // 申请人已变换
      var user = db.users.findOne(applicant_id, {
        fields: {
          name: 1
        }
      });
      var applicant = db.space_users.find({
        space: space_id,
        user: applicant_id
      }, {
        fields: {
          organization: 1
        }
      });
      var org_id = applicant.fetch()[0].organization;
      var organization = db.organizations.findOne(org_id, {
        fields: {
          name: 1,
          fullname: 1
        }
      });
      setObj.applicant = applicant_id;
      setObj.applicant_name = user.name;
      setObj.applicant_organization = org_id;
      setObj.applicant_organization_name = organization.name;
      setObj.applicant_organization_fullname = organization.fullname;
      setObj[key_str + 'user'] = applicant_id;
      setObj[key_str + 'user_name'] = user.name;
    }

    setObj[key_str + 'values'] = values;
    setObj[key_str + 'description'] = description;
    setObj[key_str + 'judge'] = 'submitted';
    setObj[key_str + 'read_date'] = new Date();

    if (result != "upgraded" && next_steps) {
      setObj[key_str + 'next_steps'] = next_steps;
    } // 计算申请单标题


    var form = db.forms.findOne({
      _id: form_id
    }, {
      fields: {
        "current.name_forumla": 1
      }
    });
    var name_forumla = form.current.name_forumla;

    if (name_forumla) {
      // var iscript = name_forumla.replace(/\{/g, "(values['").replace(/\}/g, "'] || '')");
      // var rev = eval(iscript);
      setObj.name = uuflowManager.getInstanceName(ins, values);
    }

    db.instances.update({
      _id: ins_id,
      "traces._id": trace_id
    }, {
      $set: setObj
    });
    return result;
  },
  inbox_save_instance: function (approve) {
    if (!this.userId) return;
    var setObj = {};
    var index = 0;
    var ins_id = approve.instance;
    var trace_id = approve.trace;
    var approve_id = approve.id;
    var values = approve.values;
    var next_steps = approve.next_steps;
    var description = approve.description;
    var judge = approve.judge;
    var instance = db.instances.findOne(ins_id, {
      fields: {
        traces: 1,
        flow_version: 1,
        flow: 1,
        state: 1,
        form: 1,
        form_version: 1,
        values: 1
      }
    });
    var traces = instance.traces;

    var current_trace = _.find(traces, function (t) {
      return t._id == trace_id;
    });

    var current_approve = _.find(current_trace.approves, function (a) {
      return a._id == approve_id;
    }); // 判断一个instance是否为审核中状态


    var current_user = db.users.findOne({
      _id: this.userId
    }, {
      fields: {
        locale: 1
      }
    });
    var lang = current_user.locale == 'zh-cn' ? 'zh-CN' : 'en';

    try {
      uuflowManager.isInstancePending(instance, lang); // 判断一个trace是否为未完成状态

      uuflowManager.isTraceNotFinished(current_trace); // 判断一个approve是否为未完成状态

      uuflowManager.isApproveNotFinished(current_approve); // 判断当前用户是否approve 对应的处理人或代理人

      uuflowManager.isHandlerOrAgent(current_approve, this.userId);
    } catch (e) {
      console.log(e.stack);
      return true;
    }

    var flow_version = instance.flow_version;
    var flow_id = instance.flow;
    var step_id = "";
    step_id = current_trace.step;
    var flow = db.flows.findOne(flow_id, {
      fields: {
        current: 1,
        historys: 1
      }
    });
    var step = null;

    if (flow.current._id == flow_version) {
      flow.current.steps.forEach(function (s) {
        if (s._id == step_id) step = s;
      });
    } else {
      flow.historys.forEach(function (h) {
        h.steps.forEach(function (s) {
          if (s._id == step_id) step = s;
        });
      });
    }

    if (!step) return false;
    var step_type = step.step_type;
    current_trace.approves.forEach(function (a, idx) {
      if (a._id == approve_id) {
        index = idx;
      }
    });
    var key_str = 'traces.$.approves.' + index + '.';
    var permissions_values = uuflowManager.getApproveValues(approve.values, step.permissions, instance.form, instance.form_version);
    var change_values = approveManager.getChangeValues(instance.values, permissions_values);
    setObj.values = _.extend(instance.values || {}, permissions_values);

    if (!_.isEmpty(change_values)) {
      values_history = current_approve.values_history || [];
      values_history.push({
        values: change_values,
        create: new Date()
      });
      setObj[key_str + 'values_history'] = values_history;
    }

    setObj[key_str + 'is_read'] = true;
    setObj[key_str + 'read_date'] = new Date();
    setObj[key_str + 'values'] = setObj.values;
    setObj[key_str + 'description'] = description;
    setObj[key_str + 'next_steps'] = next_steps;

    if (step_type == "submit" || step_type == "start") {
      setObj[key_str + 'judge'] = "submitted";
    } else {
      setObj[key_str + 'judge'] = judge;
    }

    setObj.modified = new Date();
    setObj.modified_by = this.userId; // 计算申请单标题

    var form = db.forms.findOne(instance.form);
    var form_v = uuflowManager.getFormVersion(form, instance.form_version);
    var name_forumla = form_v.name_forumla;

    if (name_forumla) {
      setObj.name = uuflowManager.getInstanceName(instance, setObj.values);
    }

    db.instances.update({
      _id: ins_id,
      "traces._id": trace_id
    }, {
      $set: setObj
    });
    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trace_approve_cc.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/trace_approve_cc.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({
  // ??? 能否传阅给当前步骤处理人 如果当前步骤是会签。
  cc_do: function (approve, cc_user_ids, description) {
    var setObj = {};
    var ins_id = approve.instance;
    var trace_id = approve.trace;
    var approve_id = approve._id;
    var instance = db.instances.findOne(ins_id, {
      fields: {
        space: 1,
        traces: 1,
        cc_users: 1,
        values: 1
      }
    });
    var current_user_id = this.userId;
    var space_id = instance.space;
    var new_approves = [];
    var from_user_name = db.users.findOne(current_user_id, {
      fields: {
        name: 1
      }
    }).name;
    cc_user_ids.forEach(function (userId, idx) {
      var user = db.users.findOne(userId, {
        fields: {
          name: 1
        }
      });
      var space_user = db.space_users.findOne({
        space: space_id,
        user: userId
      }, {
        fields: {
          organization: 1
        }
      });
      var org_id = space_user.organization;
      var organization = db.organizations.findOne(org_id, {
        fields: {
          name: 1,
          fullname: 1
        }
      });
      var agent = uuflowManager.getAgent(space_id, userId);
      var handler_id = userId;
      var handler_info = user;
      var handler_space_user = space_user;
      var handler_org_info = organization;

      if (agent) {
        handler_id = agent;
        handler_info = db.users.findOne(agent, {
          fileds: {
            name: 1
          }
        });
        handler_space_user = uuflowManager.getSpaceUser(space_id, agent);
        handler_org_info = uuflowManager.getSpaceUserOrgInfo(handler_space_user);
        cc_user_ids[idx] = agent;
      }

      var appr = {
        '_id': new Mongo.ObjectID()._str,
        'instance': ins_id,
        'trace': trace_id,
        'is_finished': false,
        'user': userId,
        'user_name': user.name,
        'handler': handler_id,
        'handler_name': handler_info.name,
        'handler_organization': handler_space_user.organization,
        'handler_organization_name': handler_org_info.name,
        'handler_organization_fullname': handler_org_info.fullname,
        'type': 'cc',
        'start_date': new Date(),
        'is_read': false,
        'from_user': current_user_id,
        'from_user_name': from_user_name,
        'opinion_fields_code': approve.opinion_fields_code,
        'sign_field_code': approve.opinion_fields_code && approve.opinion_fields_code.length == 1 ? approve.opinion_fields_code[0] : "",
        'from_approve_id': approve_id,
        'cc_description': description
      };

      if (agent) {
        appr.agent = agent;
      }

      uuflowManager.setRemindInfo(instance.values, appr);
      new_approves.push(appr);
    });
    setObj.modified = new Date();
    setObj.modified_by = this.userId;
    db.instances.update({
      _id: ins_id,
      'traces._id': trace_id
    }, {
      $set: setObj,
      $addToSet: {
        'traces.$.approves': {
          $each: new_approves
        }
      },
      $push: {
        cc_users: {
          $each: cc_user_ids
        }
      }
    });
    instance = db.instances.findOne(ins_id);
    current_user_info = db.users.findOne(current_user_id);
    pushManager.send_instance_notification("trace_approve_cc", instance, "", current_user_info, cc_user_ids);
    flow_id = instance.flow;
    approve.cc_user_ids = cc_user_ids; // 记录下本次传阅的人员ID作为hook接口中的参数
    // 如果已经配置webhook并已激活则触发

    pushManager.triggerWebhook(flow_id, instance, approve, 'cc_do', current_user_id, cc_user_ids);
    return true;
  },
  cc_read: function (approve) {
    var setObj = {};
    var ins_id = approve.instance;
    var trace_id = approve.trace;
    var instance = db.instances.findOne(ins_id, {
      fields: {
        traces: 1
      }
    });
    var current_user_id = this.userId;

    var current_trace = _.find(instance.traces, function (t) {
      return t._id == trace_id;
    });

    var index = 0;
    current_trace.approves.forEach(function (a, idx) {
      if (a.type == 'cc' && a.handler == current_user_id && !a.is_read) {
        index = idx;
      }
    });
    setObj['traces.$.approves.' + index + '.is_read'] = true;
    setObj['traces.$.approves.' + index + '.read_date'] = new Date();
    setObj.traces = traces;
    db.instances.update({
      _id: ins_id,
      'traces._id': trace_id
    }, {
      $set: setObj
    });
    return true;
  },
  cc_submit: function (ins_id, description) {
    var setObj = {};
    var instance = db.instances.findOne(ins_id, {
      fields: {
        traces: 1,
        cc_users: 1,
        outbox_users: 1
      }
    });
    var traces = instance.traces;
    var current_user_id = this.userId;
    var current_approve;
    traces.forEach(function (t) {
      if (t.approves) {
        t.approves.forEach(function (a, idx) {
          if (a.type == 'cc' && a.handler == current_user_id && a.is_finished == false) {
            current_approve = a;
            var upobj = {};
            upobj['traces.$.approves.' + idx + '.is_finished'] = true;
            upobj['traces.$.approves.' + idx + '.is_read'] = true;
            upobj['traces.$.approves.' + idx + '.finish_date'] = new Date();
            upobj['traces.$.approves.' + idx + '.judge'] = "submitted";
            upobj['traces.$.approves.' + idx + '.cost_time'] = new Date() - a.start_date;
            db.instances.update({
              _id: ins_id,
              'traces._id': t._id
            }, {
              $set: upobj
            });
          }
        });
      }
    });

    if (current_approve) {
      var index = 0; //设置意见，意见只添加到最后一条approve中

      traces.forEach(function (t) {
        if (current_approve && t._id === current_approve.trace) {
          if (t.approves) {
            t.approves.forEach(function (a, idx) {
              if (a._id === current_approve._id) {
                a.description = description;
                index = idx;
              }
            });
          }
        }
      });
      setObj.modified = new Date();
      setObj.modified_by = this.userId;
      setObj['traces.$.approves.' + index + '.description'] = description;
      db.instances.update({
        _id: ins_id,
        'traces._id': current_approve.trace
      }, {
        $set: setObj,
        $pull: {
          cc_users: current_user_id
        },
        $addToSet: {
          outbox_users: {
            $each: [current_user_id, current_approve.user]
          }
        }
      });
      instance = db.instances.findOne(ins_id);
      current_user_info = db.users.findOne(current_user_id); //传阅提交不通知传阅者

      if (false && description && current_approve && current_approve.from_user) {
        pushManager.send_instance_notification("trace_approve_cc_submit", instance, "", current_user_info, [current_approve.from_user]);
      }

      pushManager.send_message_to_specifyUser("current_user", current_user_id);
      flow_id = instance.flow; // 如果已经配置webhook并已激活则触发

      pushManager.triggerWebhook(flow_id, instance, current_approve, 'cc_submit', current_user_id, []);
    }

    return true;
  },
  cc_remove: function (instanceId, approveId) {
    var setObj = {};
    var instance = db.instances.findOne(instanceId, {
      fields: {
        traces: 1,
        cc_users: 1
      }
    });
    var traces = instance.traces;
    var trace_id,
        remove_user_id,
        multi = false;
    traces.forEach(function (t) {
      if (t.approves) {
        t.approves.forEach(function (a, idx) {
          if (a._id == approveId) {
            trace_id = a.trace;
            remove_user_id = a.handler;
            setObj['traces.$.approves.' + idx + '.judge'] = 'terminated';
            setObj['traces.$.approves.' + idx + '.is_finished'] = true;
            setObj['traces.$.approves.' + idx + '.finish_date'] = new Date();
            setObj['traces.$.approves.' + idx + '.is_read'] = true;
            setObj['traces.$.approves.' + idx + '.read_date'] = new Date();
          }
        });
      }
    });
    if (!trace_id || !remove_user_id) return;
    var multi = 0;
    traces.forEach(function (t) {
      if (t.approves) {
        t.approves.forEach(function (a) {
          if (a.handler == remove_user_id && a.type == 'cc' && a.is_finished == false) {
            multi++;
          }
        });
      }
    });
    setObj.modified = new Date();
    setObj.modified_by = this.userId;

    if (multi > 1) {
      db.instances.update({
        _id: instanceId,
        'traces._id': trace_id
      }, {
        $set: setObj
      });
    } else {
      db.instances.update({
        _id: instanceId,
        'traces._id': trace_id
      }, {
        $set: setObj,
        $pull: {
          cc_users: remove_user_id
        }
      });
    }

    pushManager.send_message_to_specifyUser("current_user", remove_user_id);
    return true;
  },
  cc_save: function (ins_id, description) {
    var setObj = {};
    var instance = db.instances.findOne(ins_id, {
      fields: {
        traces: 1
      }
    });
    var traces = instance.traces;
    var current_user_id = this.userId;
    var current_approve;
    traces.forEach(function (t) {
      if (t.approves) {
        t.approves.forEach(function (a, idx) {
          if (a.handler == current_user_id && a.type == 'cc' && a.is_finished == false) {
            current_approve = a;
            var upobj = {};
            upobj['traces.$.approves.' + idx + '.judge'] = "submitted";
            upobj['traces.$.approves.' + idx + '.read_date'] = new Date();
            db.instances.update({
              _id: ins_id,
              'traces._id': t._id
            }, {
              $set: upobj
            });
          }
        });
      }
    });
    var index = 0; //设置意见，意见只添加到最后一条approve中

    traces.forEach(function (t) {
      if (current_approve && t._id === current_approve.trace) {
        if (t.approves) {
          t.approves.forEach(function (a, idx) {
            if (a._id === current_approve._id) {
              index = idx;
            }
          });
        }
      }
    });
    setObj['traces.$.approves.' + index + '.description'] = description;
    db.instances.update({
      _id: ins_id,
      'traces._id': current_approve.trace
    }, {
      $set: setObj
    });
    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"forward_instance.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/forward_instance.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({
  // 改为通过api调用
  forward_instance: function (instance_id, space_id, flow_id, hasSaveInstanceToAttachment, description, isForwardAttachments, selectedUsers, action_type, related, from_approve_id) {
    if (!this.userId) throw new Meteor.Error('not-authorized');
    return;
  },
  forward_remove: function (instance_id, trace_id, approve_id) {
    check(instance_id, String);
    check(trace_id, String);
    check(approve_id, String);
    var ins = db.instances.findOne(instance_id);

    if (!ins) {
      throw new Meteor.Error('params error!', 'record not exists!');
    }

    var trace = _.find(ins.traces, function (t) {
      return t._id == trace_id;
    });

    var approve = _.find(trace.approves, function (appr) {
      return appr._id == approve_id;
    });

    var hasAdminPermission = WorkflowManager.hasFlowAdminPermission(ins.flow, ins.space, this.userId);

    if (!approve || !['forward', 'distribute'].includes(approve.type) || !approve.forward_instance) {
      if (!hasAdminPermission) {
        if (approve.from_user != this.userId) throw new Meteor.Error('error!', 'instance_forward_cannot_cancel');
      }
    }

    var forward_instance_id = approve.forward_instance;
    var forward_instance = db.instances.findOne(forward_instance_id);

    if (forward_instance) {
      if (forward_instance.state != "draft") {
        if (!hasAdminPermission) throw new Meteor.Error('error!', 'instance_forward_instance_state_changed');
      }

      var inbox_users = forward_instance.inbox_users || [];
      forward_instance.deleted = new Date();
      forward_instance.deleted_by = this.userId;
      var deleted_forward_instance_id = db.deleted_instances.insert(forward_instance);

      if (deleted_forward_instance_id) {
        db.instances.remove({
          _id: forward_instance_id
        }); // 删除申请单后重新计算inbox_users的badge

        _.each(inbox_users, function (u_id) {
          pushManager.send_message_to_specifyUser("current_user", u_id);
        });
      }
    }

    var set_obj = new Object();
    set_obj.modified = new Date();
    set_obj.modified_by = this.userId;

    _.each(trace.approves, function (appr, idx) {
      if (appr._id == approve_id) {
        set_obj['traces.$.approves.' + idx + '.judge'] = 'terminated';
        set_obj['traces.$.approves.' + idx + '.is_finished'] = true;
        set_obj['traces.$.approves.' + idx + '.finish_date'] = new Date();
        set_obj['traces.$.approves.' + idx + '.is_read'] = true;
        set_obj['traces.$.approves.' + idx + '.read_date'] = new Date();
      }
    });

    db.instances.update({
      _id: instance_id,
      "traces._id": trace_id
    }, {
      $set: set_obj
    });
    return true;
  },
  cancelDistribute: function (instance_id, approve_ids) {
    check(instance_id, String);
    check(approve_ids, Array);
    var ins = db.instances.findOne(instance_id);

    if (!ins) {
      throw new Meteor.Error('params error!', 'record not exists!');
    }

    userId = this.userId;
    var hasAdminPermission = WorkflowManager.hasFlowAdminPermission(ins.flow, ins.space, userId);

    _.each(ins.traces, function (t) {
      if (t.approves) {
        var exists = false;
        var set_obj = new Object();

        _.each(t.approves, function (a, idx) {
          if (approve_ids.includes(a._id) && (a.from_user == userId || hasAdminPermission) && 'distribute' == a.type && a.forward_instance) {
            var forward_instance_id = a.forward_instance;
            var forward_instance = db.instances.findOne(forward_instance_id);

            if (forward_instance) {
              if (forward_instance.state != "draft") {
                return;
              }

              var inbox_users = forward_instance.inbox_users || [];
              forward_instance.deleted = new Date();
              forward_instance.deleted_by = userId;
              var deleted_forward_instance_id = db.deleted_instances.insert(forward_instance);

              if (deleted_forward_instance_id) {
                db.instances.remove({
                  _id: forward_instance_id
                }); // 删除申请单后重新计算inbox_users的badge

                _.each(inbox_users, function (u_id) {
                  pushManager.send_message_to_specifyUser("current_user", u_id);
                });
              }

              set_obj['traces.$.approves.' + idx + '.judge'] = 'terminated';
              set_obj['traces.$.approves.' + idx + '.is_finished'] = true;
              set_obj['traces.$.approves.' + idx + '.finish_date'] = new Date();
              set_obj['traces.$.approves.' + idx + '.is_read'] = true;
              set_obj['traces.$.approves.' + idx + '.read_date'] = new Date();
            }

            exists = true;
          }
        });

        if (!exists) return;
        set_obj.modified = new Date();
        set_obj.modified_by = userId;
        db.instances.update({
          _id: instance_id,
          "traces._id": t._id
        }, {
          $set: set_obj
        });
      }
    });

    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cfs_instances.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/cfs_instances.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({
  cfs_instances_remove: function (file_id) {
    check(file_id, String);
    cfs.instances.remove(file_id);
    return true;
  },
  cfs_instances_set_current: function (file_id) {
    check(file_id, String);
    cfs.instances.update({
      _id: file_id
    }, {
      $set: {
        'metadata.current': true
      }
    });
    return true;
  },
  cfs_instances_lock: function (file_id, user_id, user_name) {
    cfs.instances.update({
      _id: file_id
    }, {
      $set: {
        'metadata.locked_by': user_id,
        'metadata.locked_by_name': user_name,
        'metadata.locked_time': new Date()
      }
    });
    return true;
  },
  cfs_instances_unlock: function (file_id) {
    cfs.instances.update({
      _id: file_id
    }, {
      $unset: {
        'metadata.locked_by': '',
        'metadata.locked_by_name': '',
        'metadata.locked_time': ''
      }
    });
    return true;
  },
  download_space_instance_attachments_to_disk: function (spaceId, cfsRecordIds) {
    if (!this.userId) return "不符合执行条件";
    if (Meteor.users.find({
      _id: this.userId,
      is_cloudadmin: true
    }).count() < 1) return "不符合执行条件";
    check(spaceId, String);
    var store = "instances";

    var fs = require('fs');

    var path = require('path');

    var mkdirp = require('mkdirp');

    var pathname = path.join(__meteor_bootstrap__.serverDir, '../../../cfs/spaceInstanceAttachments'); // Set absolute path

    var absolutePath = path.resolve(pathname); // Ensure the path exists

    mkdirp.sync(absolutePath);
    console.log('absolutePath: ', absolutePath);
    console.time('download_space_instance_attachments_to_disk');
    var query = {
      'metadata.space': spaceId
    };

    if (cfsRecordIds) {
      query._id = {
        $in: cfsRecordIds
      };
    }

    var downloadFailedRecordIds = [];
    cfs.instances.find(query).forEach(function (c) {
      try {
        var fileName = store + '-' + c._id + '-' + c.name();
        var filePath = path.join(absolutePath, fileName);
        Meteor.wrapAsync(function (callback) {
          try {
            var writer = fs.createWriteStream(filePath);
            writer.on('finish', function () {
              if (callback && _.isFunction(callback)) callback();
              return;
            });
            var reader = c.createReadStream(store);
            reader.on('error', function (error) {
              downloadFailedRecordIds.push(c._id);
              console.error('download_space_instance_attachments_to_disk: ', c._id);
              console.error(error.stack);
              if (callback && _.isFunction(callback)) callback();
              return;
            });
            reader.pipe(writer);
          } catch (error) {
            console.error('download_space_instance_attachments_to_disk: ', c._id);
            console.error(error.stack);
            if (callback && _.isFunction(callback)) callback();
            return;
          }
        })();
      } catch (error) {
        console.error('download_space_instance_attachments_to_disk: ', c._id);
        console.error(error.stack);
      }
    });

    if (downloadFailedRecordIds.length > 0) {
      console.error('downloadFailedRecordIds: ');
      console.error(downloadFailedRecordIds);
    }

    console.timeEnd('download_space_instance_attachments_to_disk');
    return downloadFailedRecordIds;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_approve.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/instance_approve.coffee                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  set_approve_have_read: function (instanceId, traceId, approveId) {
    var instance, ref, self, setObj, trace;

    if (!this.userId) {
      return;
    }

    self = this;
    instance = db.instances.findOne({
      _id: instanceId,
      "traces._id": traceId
    }, {
      fields: {
        "traces.$": 1
      }
    });

    if ((instance != null ? (ref = instance.traces) != null ? ref.length : void 0 : void 0) > 0) {
      trace = instance.traces[0];
      setObj = {
        modified: new Date(),
        modified_by: self.userId
      };
      trace.approves.forEach(function (approve, idx) {
        if (approve._id === approveId && !approve.is_read) {
          setObj["traces.$.approves." + idx + ".is_read"] = true;
          return setObj["traces.$.approves." + idx + ".read_date"] = new Date();
        }
      });

      if (!_.isEmpty(setObj)) {
        db.instances.update({
          _id: instanceId,
          "traces._id": traceId
        }, {
          $set: setObj
        });
      }

      return true;
    }
  },
  change_approve_info: function (instanceId, traceId, approveId, description, finish_date) {
    var instance, ref, setObj, trace;

    if (!this.userId) {
      return;
    }

    check(instanceId, String);
    check(traceId, String);
    check(approveId, String);
    check(description, String);
    check(finish_date, Date);
    instance = db.instances.findOne({
      _id: instanceId,
      "traces._id": traceId
    }, {
      fields: {
        "traces.$": 1
      }
    });

    if ((instance != null ? (ref = instance.traces) != null ? ref.length : void 0 : void 0) > 0) {
      trace = instance.traces[0];
      setObj = {};
      trace.approves.forEach(function (approve, idx) {
        if (approve._id === approveId) {
          setObj["traces.$.approves." + idx + ".description"] = description;
          setObj["traces.$.approves." + idx + ".finish_date"] = finish_date;
          setObj["traces.$.approves." + idx + ".cost_time"] = new Date() - approve.start_date;
          return setObj["traces.$.approves." + idx + ".read_date"] = new Date();
        }
      });

      if (!_.isEmpty(setObj)) {
        db.instances.update({
          _id: instanceId,
          "traces._id": traceId
        }, {
          $set: setObj
        });
      }

      return true;
    }
  },
  update_approve_sign: function (instanceId, traceId, approveId, sign_field_code, description, sign_type, lastSignApprove) {
    var instance, lastTrace, ref, session_userId, setObj, trace, upObj;
    check(instanceId, String);
    check(traceId, String);
    check(approveId, String);
    check(sign_field_code, String);
    check(description, String);

    if (!this.userId) {
      return;
    }

    session_userId = this.userId;

    if (lastSignApprove) {
      if (lastSignApprove.custom_sign_show) {
        return;
      }

      instance = db.instances.findOne({
        _id: instanceId,
        "traces._id": lastSignApprove.trace
      }, {
        fields: {
          "traces.$": 1
        }
      });
      lastTrace = _.find(instance != null ? instance.traces : void 0, function (t) {
        return t._id = lastSignApprove.trace;
      });

      if (lastTrace) {
        setObj = {};

        if (lastTrace != null) {
          lastTrace.approves.forEach(function (a, idx) {
            if (a._id === lastSignApprove._id) {
              if (sign_type === "update") {
                setObj["traces.$.approves." + idx + ".sign_show"] = false;
                setObj["traces.$.approves." + idx + ".modified"] = new Date();
                return setObj["traces.$.approves." + idx + ".modified_by"] = session_userId;
              }
            }
          });
        }

        if (!_.isEmpty(setObj)) {
          db.instances.update({
            _id: instanceId,
            "traces._id": lastTrace._id
          }, {
            $set: setObj
          });
        }
      }
    }

    instance = db.instances.findOne({
      _id: instanceId,
      "traces._id": traceId
    }, {
      fields: {
        "traces.$": 1
      }
    });

    if ((instance != null ? (ref = instance.traces) != null ? ref.length : void 0 : void 0) > 0) {
      trace = instance.traces[0];
      upObj = {};
      trace.approves.forEach(function (approve, idx) {
        if (approve._id === approveId) {
          if (sign_field_code) {
            upObj["traces.$.approves." + idx + ".sign_field_code"] = sign_field_code;
          }

          upObj["traces.$.approves." + idx + ".description"] = description;
          upObj["traces.$.approves." + idx + ".sign_show"] = true;
          upObj["traces.$.approves." + idx + ".modified"] = new Date();
          upObj["traces.$.approves." + idx + ".modified_by"] = session_userId;
          return upObj["traces.$.approves." + idx + ".read_date"] = new Date();
        }
      });

      if (!_.isEmpty(upObj)) {
        db.instances.update({
          _id: instanceId,
          "traces._id": traceId
        }, {
          $set: upObj
        });
      }

      return true;
    }
  },
  update_sign_show: function (objs, myApprove_id) {
    objs.forEach(function (obj, index) {
      var instance, ref, setObj, trace;
      instance = db.instances.findOne({
        _id: obj.instance,
        "traces._id": obj.trace
      }, {
        fields: {
          "traces.$": 1
        }
      });

      if ((instance != null ? (ref = instance.traces) != null ? ref.length : void 0 : void 0) > 0) {
        trace = instance.traces[0];
        setObj = {};
        trace.approves.forEach(function (approve, idx) {
          if (approve._id === obj._id) {
            setObj["traces.$.approves." + idx + ".sign_show"] = obj.sign_show;
            setObj["traces.$.approves." + idx + ".custom_sign_show"] = obj.sign_show;
            setObj["traces.$.approves." + idx + ".read_date"] = new Date();
          }

          if (approve._id === myApprove_id) {
            return setObj["traces.$.approves." + idx + ".read_date"] = new Date();
          }
        });

        if (!_.isEmpty(setObj)) {
          return db.instances.update({
            _id: obj.instance,
            "traces._id": obj.trace
          }, {
            $set: setObj
          });
        }
      }
    });
    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_return.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/instance_return.coffee                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  instance_return: function (approve, reason) {
    var approve_values, b, current_step, current_user, current_user_info, flow, ins, instance, instance_id, last_trace, newTrace, new_inbox_users, now, pre_step, pre_trace, r, rest_counter_users, setObj, space_id, traces;
    check(approve, Object);
    current_user = this.userId;
    instance_id = approve.instance;
    ins = uuflowManager.getInstance(instance_id);
    space_id = ins.space;

    if (ins.state !== "pending" || !ins.inbox_users.includes(current_user)) {
      throw new Meteor.Error('error!', "不符合退回条件");
    }

    if (approve.type === "cc" && ins.cc_users.includes(current_user)) {
      throw new Meteor.Error('error!', "不符合退回条件");
    }

    if (ins.traces.length < 2) {
      throw new Meteor.Error('error!', "不符合退回条件");
    }

    flow = uuflowManager.getFlow(ins.flow);
    pre_trace = ins.traces[ins.traces.length - 2];
    pre_step = uuflowManager.getStep(ins, flow, pre_trace.step);

    if (pre_step.step_type === "counterSign") {
      throw new Meteor.Error('error!', "不符合退回条件");
    }

    last_trace = _.last(ins.traces);
    current_step = uuflowManager.getStep(ins, flow, last_trace.step);

    if (current_step.step_type !== "submit" && current_step.step_type !== "sign" && current_step.step_type !== "counterSign") {
      throw new Meteor.Error('error!', "不符合退回条件");
    }

    if (approve.trace !== last_trace._id) {
      throw new Meteor.Error('error!', "不符合退回条件");
    }

    new_inbox_users = new Array();

    _.each(pre_trace.approves, function (a) {
      if ((!a.type || a.type === "draft" || a.type === "reassign") && (!a.judge || a.judge === "submitted" || a.judge === "approved" || a.judge === "rejected")) {
        return new_inbox_users.push(a.user);
      }
    });

    if (_.isEmpty(new_inbox_users)) {
      throw new Meteor.Error('error!', "未找到下一步处理人，退回失败");
    }

    traces = ins.traces;
    approve_values = uuflowManager.getApproveValues(approve.values || {}, current_step.permissions, ins.form, ins.form_version);
    setObj = new Object();
    now = new Date();
    rest_counter_users = new Array();

    _.each(traces, function (t) {
      if (t._id === last_trace._id) {
        if (!t.approves) {
          t.approves = new Array();
        }

        _.each(t.approves, function (a, idx) {
          if ((!a.type || a.type === "reassign") && (!a.judge || a.judge === "submitted" || a.judge === "approved" || a.judge === "rejected" || a.judge === "readed") && a.is_finished !== true) {
            setObj['traces.$.approves.' + idx + '.finish_date'] = now;
            setObj['traces.$.approves.' + idx + '.read_date'] = now;
            setObj['traces.$.approves.' + idx + '.is_error'] = false;
            setObj['traces.$.approves.' + idx + '.is_read'] = true;
            setObj['traces.$.approves.' + idx + '.is_finished'] = true;
            setObj['traces.$.approves.' + idx + '.cost_time'] = now - a.start_date;
            setObj['traces.$.approves.' + idx + '.values'] = approve_values;

            if (a.handler === current_user) {
              setObj['traces.$.approves.' + idx + '.judge'] = "returned";
              return setObj['traces.$.approves.' + idx + '.description'] = reason;
            } else {
              return rest_counter_users.push(a.handler);
            }
          }
        });

        setObj['traces.$.is_finished'] = true;
        setObj['traces.$.finish_date'] = true;
        return setObj['traces.$.judge'] = "returned";
      }
    });

    ins.values = _.extend(ins.values || {}, approve_values);
    newTrace = new Object();
    newTrace._id = new Mongo.ObjectID()._str;
    newTrace.instance = instance_id;
    newTrace.previous_trace_ids = [last_trace._id];
    newTrace.is_finished = false;
    newTrace.step = pre_trace.step;
    newTrace.name = pre_trace.name;
    newTrace.start_date = now;
    newTrace.due_date = uuflowManager.getDueDate(pre_step.timeout_hours);
    newTrace.approves = [];

    _.each(new_inbox_users, function (next_step_user_id, idx) {
      var agent, handler_id, handler_info, newApprove, next_step_space_user, next_step_user_org_info, user_info;
      newApprove = new Object();
      newApprove._id = new Mongo.ObjectID()._str;
      newApprove.instance = instance_id;
      newApprove.trace = newTrace._id;
      newApprove.is_finished = false;
      newApprove.user = next_step_user_id;
      user_info = db.users.findOne(next_step_user_id, {
        fields: {
          name: 1
        }
      });
      newApprove.user_name = user_info.name;
      handler_id = next_step_user_id;
      handler_info = user_info;
      agent = uuflowManager.getAgent(space_id, next_step_user_id);

      if (agent) {
        new_inbox_users[idx] = agent;
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
      next_step_space_user = uuflowManager.getSpaceUser(space_id, handler_id);
      next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
      newApprove.handler_organization = next_step_user_org_info["organization"];
      newApprove.handler_organization_name = next_step_user_org_info["organization_name"];
      newApprove.handler_organization_fullname = next_step_user_org_info["organization_fullname"];
      newApprove.start_date = now;
      newApprove.is_read = false;
      newApprove.is_error = false;
      newApprove.values = new Object();
      uuflowManager.setRemindInfo(ins.values, newApprove);
      return newTrace.approves.push(newApprove);
    });

    setObj.inbox_users = new_inbox_users;
    setObj.state = "pending";
    ins.outbox_users.push(current_user);
    setObj.outbox_users = _.uniq(ins.outbox_users);
    setObj.modified = now;
    setObj.modified_by = current_user;
    setObj.values = ins.values;
    setObj.current_step_name = pre_trace.name;
    r = db.instances.update({
      _id: instance_id,
      'traces._id': last_trace._id
    }, {
      $set: setObj
    });
    b = db.instances.update({
      _id: instance_id
    }, {
      $push: {
        traces: newTrace
      }
    });

    if (r && b) {
      pushManager.send_message_to_specifyUser("current_user", current_user);
      instance = uuflowManager.getInstance(instance_id);
      current_user_info = db.users.findOne(current_user);
      pushManager.send_instance_notification("return_pending_inbox", instance, reason, current_user_info);

      _.each(rest_counter_users, function (user_id) {
        return pushManager.send_message_to_specifyUser("current_user", user_id);
      });
    }

    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_remind.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/instance_remind.coffee                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  instance_remind: function (remind_users, remind_count, remind_deadline, instance_id, action_types, trace_id) {
    var current_user_id, ins, last_remind_users, now, priority, trace;
    check(remind_users, Array);
    check(remind_count, Match.OneOf('single', 'multi'));
    check(remind_deadline, Date);
    check(instance_id, String);
    check(action_types, Array);
    check(trace_id, String);
    current_user_id = this.userId;
    last_remind_users = new Array();
    ins = db.instances.findOne({
      _id: instance_id
    }, {
      fields: {
        name: 1,
        traces: 1,
        values: 1,
        space: 1
      }
    });

    if (action_types.includes('admin')) {
      if (remind_count === 'single') {
        _.each(ins.traces, function (t) {
          return _.each(t.approves, function (ap) {
            if (remind_users.includes(ap.user) && ap.is_finished !== true) {
              return last_remind_users.push(ap.user);
            }
          });
        });
      } else if (remind_count === 'multi') {
        now = new Date();
        priority = ins.values.priority;

        _.each(ins.traces, function (t) {
          return _.each(t.approves, function (ap) {
            var caculate_date;

            if (remind_users.includes(ap.user) && ap.is_finished !== true) {
              last_remind_users.push(ap.user);
              ap.manual_deadline = remind_deadline;

              if (priority === "普通" || !priority) {} else if (priority === "办文") {
                if (Steedos.caculatePlusHalfWorkingDay(now) > remind_deadline) {
                  return ap.remind_date = Steedos.caculatePlusHalfWorkingDay(now, true);
                } else if (Steedos.caculateWorkingTime(now, 1) > remind_deadline) {
                  caculate_date = function (base_date) {
                    var plus_halfday_date;
                    plus_halfday_date = Steedos.caculatePlusHalfWorkingDay(base_date);

                    if (plus_halfday_date > remind_deadline) {
                      ap.remind_date = base_date;
                    } else {
                      caculate_date(Steedos.caculatePlusHalfWorkingDay(base_date, true));
                    }
                  };

                  return caculate_date(now);
                }
              } else if (priority === "紧急") {
                if (Steedos.caculatePlusHalfWorkingDay(now) > remind_deadline) {
                  return ap.remind_date = Steedos.caculatePlusHalfWorkingDay(now, true);
                } else if (Steedos.caculateWorkingTime(now, 1) > remind_deadline) {
                  caculate_date = function (base_date) {
                    var plus_halfday_date;
                    plus_halfday_date = Steedos.caculatePlusHalfWorkingDay(base_date);

                    if (plus_halfday_date > remind_deadline) {
                      ap.remind_date = base_date;
                    } else {
                      caculate_date(Steedos.caculatePlusHalfWorkingDay(base_date, true));
                    }
                  };

                  return caculate_date(now);
                }
              } else if (priority === "特急") {
                if (Steedos.caculatePlusHalfWorkingDay(now) > remind_deadline) {
                  return ap.remind_date = Steedos.caculatePlusHalfWorkingDay(now, true);
                } else if (Steedos.caculateWorkingTime(now, 1) > remind_deadline) {
                  caculate_date = function (base_date) {
                    var plus_halfday_date;
                    plus_halfday_date = Steedos.caculatePlusHalfWorkingDay(base_date);

                    if (plus_halfday_date > remind_deadline) {
                      ap.remind_date = base_date;
                    } else {
                      caculate_date(Steedos.caculatePlusHalfWorkingDay(base_date, true));
                    }
                  };

                  return caculate_date(now);
                }
              }
            }
          });
        });

        if (!_.isEmpty(last_remind_users)) {
          db.instances.update({
            _id: instance_id
          }, {
            $set: {
              'traces': ins.traces
            }
          });
        }
      }
    } else if (action_types.includes('applicant')) {
      trace = _.find(ins.traces, function (t) {
        return t._id === trace_id;
      });

      _.each(trace.approves, function (ap) {
        if (remind_users.includes(ap.user) && ap.is_finished !== true) {
          return last_remind_users.push(ap.user);
        }
      });
    } else if (action_types.includes('cc')) {
      _.each(ins.traces, function (t) {
        return _.each(t.approves, function (ap) {
          if (remind_users.includes(ap.user) && ap.is_finished !== true && ap.type === 'cc' && ap.from_user === current_user_id) {
            return last_remind_users.push(ap.user);
          }
        });
      });
    }

    uuflowManager.sendRemindSMS(ins.name, remind_deadline, last_remind_users, ins.space, ins._id);
    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"next_step_users_not_found.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/next_step_users_not_found.coffee                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  next_step_users_not_found: function (deal_type, step_name, params) {
    var approver_roles, lang, roles, roles_name, str, user;
    check(deal_type, String);
    check(step_name, String);
    check(params, Object);
    str = "";
    user = db.users.findOne({
      _id: this.userId
    }, {
      fields: {
        locale: 1
      }
    });
    lang = 'en';

    if (user.locale === 'zh-cn') {
      lang = 'zh-CN';
    }

    if (deal_type === 'applicantRole') {
      approver_roles = params.approver_roles;
      roles = db.flow_roles.find({
        _id: {
          $in: approver_roles
        }
      }, {
        fields: {
          name: 1
        }
      }).fetch();
      roles_name = _.pluck(roles, 'name').toString();
      str = TAPi18n.__('next_step_users_not_found.applicant_role', {
        step_name: step_name,
        role_name: roles_name
      }, lang);
    }

    return str;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_number_rules.coffee":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/instance_number_rules.coffee                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _eval;

_eval = require('eval');
Meteor.methods({
  instanceNumberBuilder: function (spaceId, name) {
    var _NUMBER, _YYYY, context, date, e, numberRules, res, rules, script;

    numberRules = db.instance_number_rules.findOne({
      space: spaceId,
      name: name
    });

    if (!numberRules) {
      throw new Meteor.Error('error!', "" + name);
    }

    date = new Date();
    context = {};
    context._ = _;
    _YYYY = date.getFullYear();
    _NUMBER = (numberRules.number || 0) + 1;
    context.YYYY = _.clone(_YYYY);
    context.MM = date.getMonth() + 1;
    context.mm = date.getMonth() + 1;

    if (context.MM < 10) {
      context.MM = "0" + context.MM;
    }

    context.DD = date.getDate();
    context.dd = date.getDate();

    if (context.DD < 10) {
      context.DD = "0" + context.DD;
    }

    if (context.YYYY !== numberRules.year) {
      _NUMBER = numberRules.first_number || 1;
    }

    context.NUMBER = _.clone(_NUMBER);
    rules = numberRules.rules.replace("{YYYY}", "' + YYYY + '").replace("{MM}", "' + MM + '").replace("{NUMBER}", "' + NUMBER + '");
    script = "var newNo = '" + rules + "'; exports.newNo = newNo";

    try {
      res = _eval(script, "newNo", context, false).newNo;
      db.instance_number_rules.update({
        _id: numberRules._id
      }, {
        $set: {
          year: _YYYY,
          number: _NUMBER
        }
      });
      console.log(this.userId, res);
    } catch (error) {
      e = error;
      res = {
        _error: e
      };
    }

    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"check_main_attach.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/check_main_attach.coffee                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  check_main_attach: function (ins_id, name) {
    check(ins_id, String);
    uuflowManager.checkMainAttach(ins_id, name);
    return 'success';
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"related_instances.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/related_instances.coffee                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  remove_related: function (ins_id, re_ins_id) {
    var index, ins, res, set_obj;
    check(ins_id, String);
    check(re_ins_id, String);

    if (!this.userId) {
      return;
    }

    ins = db.instances.findOne({
      _id: ins_id
    }, {
      fields: {
        related_instances: 1
      }
    });

    if (ins) {
      res = ins.related_instances || [];
      index = res.indexOf(re_ins_id);

      if (index > -1) {
        res.remove(index);
      }

      set_obj = new Object();
      set_obj.modified = new Date();
      set_obj.modified_by = this.userId;
      set_obj.related_instances = res;
      return db.instances.update({
        _id: ins_id
      }, {
        $set: set_obj
      });
    }
  },
  update_instance_related: function (ins_id, related_instances) {
    var ins, set_obj;
    check(ins_id, String);
    check(related_instances, Array);

    if (!this.userId) {
      return;
    }

    ins = db.instances.findOne({
      _id: ins_id,
      $or: [{
        submitter: this.userId
      }, {
        applicant: this.userId
      }]
    }, {
      fields: {
        state: 1
      }
    });

    if (ins) {
      set_obj = new Object();
      set_obj.modified = new Date();
      set_obj.modified_by = this.userId;
      set_obj.related_instances = related_instances;
      db.instances.update({
        _id: ins_id
      }, {
        $set: set_obj
      });
    }

    return db.instances.find({
      _id: {
        $in: related_instances
      }
    }, {
      fields: {
        _id: 1,
        values: 1
      }
    }).fetch();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"edit_flow_positions.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/edit_flow_positions.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  updateFlowPosition: function (data) {
    return db.flow_positions.update({
      _id: data._id
    }, {
      $set: {
        role: data.role,
        users: data.users,
        org: data.org
      }
    });
  },
  updateFlowRole: function (data) {
    console.log(data._id);
    console.log(data.name);
    return db.flow_roles.update({
      _id: data._id
    }, {
      $set: {
        name: data.name
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"start_flow.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/start_flow.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  start_flow: function (space, flowId, start) {
    var keyValue, start_flows;
    keyValue = db.steedos_keyvalues.findOne({
      space: space,
      user: this.userId,
      key: 'start_flows'
    }, {
      fields: {
        value: 1
      }
    });
    start_flows = (keyValue != null ? keyValue.value : void 0) || [];

    if (start) {
      start_flows.push(flowId);
      start_flows = _.uniq(start_flows);
    } else {
      start_flows.remove(start_flows.indexOf(flowId));
    }

    if (keyValue) {
      return db.steedos_keyvalues.update({
        _id: keyValue._id
      }, {
        space: space,
        user: this.userId,
        key: 'start_flows',
        value: start_flows
      });
    } else {
      return db.steedos_keyvalues.insert({
        space: space,
        user: this.userId,
        key: 'start_flows',
        value: start_flows
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_traces.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/instance_traces.coffee                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  get_instance_traces: function (ins_id) {
    var ins, miniApproveFields;

    if (!this.userId) {
      return;
    }

    miniApproveFields = ['_id', 'is_finished', 'user', 'handler', 'handler_name', 'type', 'start_date', 'description', 'is_read', 'judge', 'finish_date', 'from_user_name', 'from_user', 'cc_description'];
    ins = db.instances.findOne({
      _id: ins_id
    }, {
      fields: {
        "traces._id": 1,
        "traces.is_finished": 1,
        "traces.step": 1,
        "traces.start_date": 1,
        "traces.name": 1,
        "traces.finish_date": 1,
        "traces.judge": 1,
        "traces.approves._id": 1,
        "traces.approves.is_finished": 1,
        "traces.approves.user": 1,
        "traces.approves.handler": 1,
        "traces.approves.handler_name": 1,
        "traces.approves.handler_organization_fullname": 1,
        "traces.approves.type": 1,
        "traces.approves.start_date": 1,
        "traces.approves.description": 1,
        "traces.approves.is_read": 1,
        "traces.approves.judge": 1,
        "traces.approves.finish_date": 1,
        "traces.approves.from_user_name": 1,
        "traces.approves.from_user": 1,
        "traces.approves.cc_description": 1,
        "traces.approves.trace": 1,
        "traces.approves.forward_space": 1,
        "traces.approves.forward_instance": 1
      }
    });

    if (!ins) {
      return;
    }

    return ins != null ? ins.traces : void 0;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_batch.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/instance_batch.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  'get_batch_instances': function (space, categoryId, flowIds) {
    var _batch_instances;

    if (!this.userId) {
      return;
    }

    if (!space) {
      return;
    }

    _batch_instances = InstanceManager.getBatchInstances(space, categoryId, flowIds, this.userId);
    return _batch_instances;
  },
  'get_batch_instances_count': function (space, categoryId, flowIds) {
    var _batch_instances;

    if (!this.userId) {
      return;
    }

    if (!space) {
      return;
    }

    _batch_instances = InstanceManager.getBatchInstances(space, categoryId, flowIds, this.userId);
    return (_batch_instances != null ? _batch_instances.length : void 0) || 0;
  },
  'get_my_approves': function (instanceIds) {
    var myApproves, that;
    that = this;

    if (!that.userId) {
      return;
    }

    myApproves = new Array();
    instanceIds.forEach(function (insId) {
      var my_approve;
      my_approve = InstanceManager.getMyApprove(insId, that.userId);

      if (my_approve) {
        return myApproves.push(my_approve);
      }
    });
    return myApproves;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/flow.coffee                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  change_flow_state: function (flows) {
    var _userId;

    check(flows, Array);
    _userId = this.userId;

    if (!_userId) {
      return;
    }

    return flows.forEach(function (flow) {
      var _flows, _flows_state, flowId, form, formId, form_current_fields_code, now, spaceId, state;

      spaceId = flow.space;
      formId = flow.form;
      flowId = flow.id;
      state = flow.state;

      if (!Steedos.isSpaceAdmin(spaceId, _userId)) {
        throw Meteor.Error(401, "No permission");
      }

      form = db.forms.findOne({
        _id: formId
      }, {
        fields: {
          historys: 0
        }
      });
      flow = db.flows.findOne({
        _id: flowId
      }, {
        fields: {
          historys: 0
        }
      });

      if (state !== 'enabled' && state !== 'disabled') {
        throw new Meteor.Error(500, "state无效");
      }

      if (!form) {
        throw new Meteor.Error(500, "form无效");
      }

      if (!flow) {
        throw new Meteor.Error(500, "flow无效");
      }

      if (!form.is_valid) {
        throw new Meteor.Error(500, "流程引用的表单[" + form.name + "]验证未通过，请打开流程设计器检查表单设置");
      }

      if (!flow.is_valid) {
        throw new Meteor.Error(500, "流程验证未通过，请打开流程设计器检查流程设置");
      }

      if (!['new', 'modify', 'delete'].includes(flow.flowtype)) {
        throw new Meteor.Error(500, "流程验证未通过，flowtype值必须是new、modify、delete其中之一");
      }

      if (!_.isArray(flow.current.steps)) {
        throw new Meteor.Error(500, "流程验证未通过，流程的步骤不能为空");
      }

      if (_.uniq(flow.current.steps, 'name').length !== flow.current.steps.length) {
        throw new Meteor.Error(500, "流程验证未通过，同一个流程下的步骤的名称不能重复");
      }

      now = new Date();

      if (state === 'enabled') {
        flow.current.steps.forEach(function (step) {
          var specifyStep;

          if (['specifyStepUser', 'specifyStepRole'].includes(step.deal_type)) {
            if (!step.approver_step) {
              throw new Meteor.Error(500, "步骤[" + step.name + "]中的指定历史步骤不存在。");
            } else {
              specifyStep = _.find(flow.current.steps, function (_step) {
                return step.approver_step === _step._id;
              });

              if (!specifyStep) {
                throw new Meteor.Error(500, "步骤[" + step.name + "]中的指定历史步骤不存在。");
              }
            }
          }
        });
        form_current_fields_code = form.current.fields.getProperty("code");
        flow.current.steps.forEach(function (step) {
          return step.fields_modifiable = _.intersection(step.fields_modifiable, form_current_fields_code);
        });

        if (form.state === 'disabled') {
          db.forms.update({
            _id: form._id
          }, {
            $set: {
              "state": "enabled",
              "current.start_date": now,
              "current.modified": now,
              "current.modified_by": _userId
            }
          });
        }

        flow.current.modified = now;
        flow.current.start_date = now;
        flow.current.modified_by = _userId;
        return db.flows.update({
          _id: flow._id
        }, {
          $set: {
            "state": "enabled",
            "current": flow.current
          }
        });
      } else {
        db.flows.update({
          _id: flow._id
        }, {
          $set: {
            "state": "disabled",
            "current.modified": now,
            "current.start_date": now,
            "current.modified_by": _userId
          }
        });
        _flows = db.flows.find({
          form: form._id
        }, {
          fields: {
            _id: 1,
            state: 1
          }
        }).fetch();
        _flows_state = _flows.getProperty("state");

        if (!_flows_state.includes('enabled')) {
          return db.forms.update({
            _id: form._id
          }, {
            $set: {
              "state": "disabled",
              "current.modified": now,
              "current.start_date": now,
              "current.modified_by": _userId
            }
          });
        }
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"distribute.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/distribute.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hide_instance.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/hide_instance.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  hide_instance: function (insId, is_hidden) {
    var instance, permissions, space, userId;

    if (!this.userId) {
      return;
    }

    check(insId, String);
    check(is_hidden, Boolean);
    userId = this.userId;
    instance = db.instances.findOne(insId, {
      fields: {
        state: 1,
        flow: 1,
        space: 1
      }
    });

    if (!instance) {
      throw new Meteor.Error('error!', "未找到申请单");
    }

    if (instance.state !== 'completed') {
      throw new Meteor.Error('error!', "申请单状态不是已结束");
    }

    permissions = permissionManager.getFlowPermissions(instance.flow, userId);
    space = db.spaces.findOne(instance.space, {
      fields: {
        admins: 1
      }
    });

    if (!permissions.includes("admin") && !space.admins.includes(userId)) {
      throw new Meteor.Error('error!', "用户没有对当前流程的管理权限");
    }

    db.instances.update(insId, {
      $set: {
        is_hidden: is_hidden
      }
    });
    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_value.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/methods/instance_value.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  getInstanceValues: function (insId) {
    var ref;

    if (!this.userId) {
      return;
    }

    return (ref = db.instances.findOne({
      _id: insId
    }, {
      fields: {
        values: 1
      }
    })) != null ? ref.values : void 0;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes":{"instance.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/routes/instance.coffee                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Cookies, getInstanceReadOnly;
Cookies = require("cookies");

getInstanceReadOnly = function (req, res, next, options) {
  var _hasPermission, _locale, _parent_instances, dataBuf, error, hide_traces, html, instance, instanceId, ref, ref1, space, spaceId, spaceUserCount, user, userId;

  user = Steedos.getAPILoginUser(req, res);

  if (req != null ? (ref = req.query) != null ? ref.access_token : void 0 : void 0) {
    userId = Steedos.getUserIdFromAccessToken(req.query.access_token);

    if (userId) {
      user = Meteor.users.findOne({
        _id: userId
      });
    }
  }

  spaceId = req.params.space;
  instanceId = req.params.instance_id;
  instance = db.instances.findOne({
    _id: instanceId
  });
  space = db.spaces.findOne({
    _id: spaceId
  });
  hide_traces = (ref1 = req.query) != null ? ref1.hide_traces : void 0;

  if (!options) {
    options = {
      showTrace: true
    };
  } else {
    options.showTrace = true;
  }

  if (hide_traces === "1") {
    if (options) {
      options.showTrace = false;
    } else {
      options = {
        showTrace: false
      };
    }
  }

  if (!options.showAttachments) {
    options.showAttachments = true;
  }

  if (!space) {
    JsonRoutes.sendResult(res, {
      code: 401,
      data: {
        "error": "Validate Request -- Missing space",
        "success": false
      }
    });
    return;
  }

  if (!instance) {
    JsonRoutes.sendResult(res, {
      code: 401,
      data: {
        "error": "Validate Request -- Missing instance",
        "success": false
      }
    });
    return;
  }

  if (!user) {
    JsonRoutes.sendResult(res, {
      code: 401,
      data: {
        "error": "Validate Request -- Missing X-Auth-Token,X-User-Id",
        "success": false
      }
    });
    return;
  }

  if (instance.space !== spaceId) {
    JsonRoutes.sendResult(res, {
      code: 401,
      data: {
        "error": "Validate Request -- Missing space or instance",
        "success": false
      }
    });
    return;
  }

  spaceUserCount = db.space_users.find({
    user: user._id,
    space: spaceId
  }).count();

  if (spaceUserCount === 0) {
    if (!space) {
      JsonRoutes.sendResult(res, {
        code: 401,
        data: {
          "error": "Validate Request -- Missing sapceUser",
          "success": false
        }
      });
      return;
    }
  }

  _hasPermission = WorkflowManager.hasInstancePermissions(user, instance);

  if (!_hasPermission && instance.distribute_from_instance) {
    _parent_instances = _.union([instance.distribute_from_instance], instance.distribute_from_instances || []);
    _hasPermission = _.find(_parent_instances, function (_parent_id) {
      var _parent_ins;

      _parent_ins = db.instances.findOne({
        _id: _parent_id
      }, {
        fields: {
          traces: 0
        }
      });
      return WorkflowManager.hasInstancePermissions(user, _parent_ins);
    });
  }

  if (!_hasPermission) {
    _locale = Steedos.locale(user._id, true);
    error = TAPi18n.__("instance_permissions_error", {}, _locale);
    res.charset = "utf-8";
    JsonRoutes.sendResult(res, {
      code: 401,
      data: {
        "error": error,
        "success": false
      }
    });
    return;
  }

  html = InstanceReadOnlyTemplate.getInstanceHtml(user, space, instance, options);
  dataBuf = new Buffer(html);
  res.setHeader('content-length', dataBuf.length);
  res.setHeader('content-range', "bytes 0-" + (dataBuf.length - 1) + "/" + dataBuf.length);
  res.statusCode = 200;
  return res.end(html);
};

JsonRoutes.add("get", "/workflow/space/:space/view/readonly/:instance_id", getInstanceReadOnly);
JsonRoutes.add("get", "/workflow/space/:space/view/readonly/:instance_id/:instance_name", function (req, res, next) {
  var options;
  res.setHeader('Content-type', 'application/x-msdownload');
  res.setHeader('Content-Disposition', 'attachment;filename=' + encodeURI(req.params.instance_name));
  res.setHeader('Transfer-Encoding', '');
  options = {
    absolute: true
  };
  return getInstanceReadOnly(req, res, next, options);
}); /*
    	获取申请单列表：
        final_decision：审批结果
        state: 申请单状态
     */
JsonRoutes.add("get", "/api/workflow/instances", function (req, res, next) {
  var f, flowId, flowIds, flows, i, instances, query, ref, ref1, ref2, ref3, ret_sync_token, spaceId, spaceUser, spaceUserOrganizations, sync_token, user_id;

  if (!Steedos.APIAuthenticationCheck(req, res)) {
    return;
  }

  user_id = req.userId;
  spaceId = req.headers["x-space-id"];

  if (!spaceId) {
    JsonRoutes.sendResult(res, {
      code: 401,
      data: {
        "error": "Validate Request -- Missing X-Space-Id",
        "success": false
      }
    });
    return;
  }

  flowId = (ref = req.query) != null ? ref.flowId : void 0;

  if (!flowId) {
    JsonRoutes.sendResult(res, {
      code: 400,
      data: {
        "error": "Validate Request -- Missing flowId",
        "success": false
      }
    });
    return;
  }

  query = {};
  ret_sync_token = new Date().getTime();
  flowIds = flowId.split(",");
  flows = db.flows.find({
    _id: {
      $in: flowIds
    }
  }).fetch();
  i = 0;

  while (i < flows.length) {
    f = flows[i];
    spaceUser = db.space_users.findOne({
      space: f.space,
      user: user_id
    });

    if (!spaceUser) {
      JsonRoutes.sendResult(res, {
        code: 401,
        data: {
          "error": "Validate Request -- No permission, flow is " + f._id,
          "success": false
        }
      });
      return;
    } else {}

    if (!Steedos.isSpaceAdmin(spaceId, user_id)) {
      spaceUserOrganizations = db.organizations.find({
        _id: {
          $in: spaceUser.organizations
        }
      }).fetch();

      if (!WorkflowManager.canMonitor(f, spaceUser, spaceUserOrganizations) && !WorkflowManager.canAdmin(f, spaceUser, spaceUserOrganizations)) {
        JsonRoutes.sendResult(res, {
          code: 401,
          data: {
            "error": "Validate Request -- No permission, flow is " + f._id,
            "success": false
          }
        });
        return;
      }
    }

    i++;
  }

  query.flow = {
    $in: flowIds
  };
  query.space = spaceId;

  if ((ref1 = req.query) != null ? ref1.sync_token : void 0) {
    sync_token = new Date(Number(req.query.sync_token));
    query.modified = {
      $gt: sync_token
    };
  }

  if ((ref2 = req.query) != null ? ref2.final_decision : void 0) {
    query.final_decision = {
      $in: req.query.final_decision.split(",")
    };
  } else {
    query.final_decision = {
      $nin: ["terminated", "rejected"]
    };
  }

  if ((ref3 = req.query) != null ? ref3.state : void 0) {
    query.state = {
      $in: req.query.state.split(",")
    };
  } else {
    query.state = "completed";
  }

  instances = db.instances.find(query, {
    fields: {
      inbox_uers: 0,
      cc_users: 0,
      outbox_users: 0,
      traces: 0,
      attachments: 0
    },
    skip: 0,
    limit: 500
  }).fetch();
  instances.forEach(function (instance) {
    var attachments;
    attachments = cfs.instances.find({
      'metadata.instance': instance._id,
      'metadata.current': true,
      "metadata.is_private": {
        $ne: true
      }
    }, {
      fields: {
        copies: 0
      }
    }).fetch();
    return instance.attachments = attachments;
  });
  JsonRoutes.sendResult(res, {
    code: 200,
    data: {
      "status": "success",
      "sync_token": ret_sync_token,
      "data": instances
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"steedos_css.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/routes/steedos_css.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("get", "/steedos-css", function (req, res, next) {
  var allCss, allCssLink;
  allCss = WebAppInternals.refreshableAssets.allCss;
  allCssLink = "";
  allCss.forEach(function (css) {
    var cssHref;
    cssHref = Meteor.absoluteUrl(css.url);
    return allCssLink += "@import url(" + cssHref + ");";
  });
  res.statusCode = 200;
  return res.end(allCssLink);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_draft_view.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/routes/instance_draft_view.coffee                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("get", "/api/workflow/space/:space/view/draft/:flow", function (req, res, next) {
  var dataBuf, flow, flowId, form, html, instance, options, space, spaceId, user, user_id;

  if (!Steedos.APIAuthenticationCheck(req, res)) {
    return;
  }

  user_id = req.userId;
  user = db.users.findOne({
    _id: user_id
  });
  spaceId = req.params.space;
  flowId = req.params.flow;
  space = db.spaces.findOne({
    _id: spaceId
  });
  flow = db.flows.findOne({
    _id: flowId
  }, {
    fields: {
      name: 1,
      'current._id': 1,
      form: 1
    }
  });
  form = db.forms.findOne({
    _id: flow.form
  }, {
    fields: {
      'current._id': 1
    }
  });
  options = {
    showTrace: false,
    showAttachments: false,
    templateName: "default",
    editable: true,
    width: "100%",
    instance_style: "instance-default",
    plugins: "\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\n<meta name=\"format-detection\" content=\"telephone=no\">\n<meta http-equiv=\"x-rim-auto-match\" content=\"none\">\n<title>" + flow.name + "</title>\n<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n<meta name=\"viewport\" content=\"width=device-width\" />\n\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css\">\n\n<script src=\"/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js\" type=\"text/javascript\"></script>\n\n<script src=\"/plugins/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js\" type=\"text/javascript\" charset=\"UTF-8\"></script>\n\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/plugins/toastr/toastr.min.css\">\n<script src=\"/plugins/toastr/toastr.min.js\" type=\"text/javascript\"></script>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/js/workflow_client.css\">\n<script src=\"/js/workflow_client.js\" type=\"text/javascript\"></script>"
  };
  instance = {
    flow: flow._id,
    flow_version: flow.current._id,
    form: form._id,
    form_version: form.current._id,
    values: {},
    name: flow.name,
    space: spaceId
  };
  html = InstanceReadOnlyTemplate.getInstanceHtml(user, space, instance, options);
  dataBuf = new Buffer(html);
  res.setHeader('content-length', dataBuf.length);
  res.setHeader('content-range', "bytes 0-" + (dataBuf.length - 1) + "/" + dataBuf.length);
  res.statusCode = 200;
  return res.end(html);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"1_form_formula.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/1_form_formula.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Array.prototype.filterProperty = function (h, l) {
  var g = [];
  this.forEach(function (t) {
    var m = t ? t[h] : null;
    var d = false;

    if (m instanceof Array) {
      d = m.includes(l);
    } else {
      d = l === undefined ? false : m == l;
    }

    if (d) {
      g.push(t);
    }
  });
  return g;
};

Array.prototype.getProperty = function (k) {
  var v = new Array();
  this.forEach(function (t) {
    var m = t ? t[k] : null;
    v.push(m);
  });
  return v;
};

Array.prototype.getEach = function (code) {
  var rev = [];

  for (var i = 0; i < this.length; i++) {
    rev.push(this[i][code]);
  }

  return rev;
};

Array.prototype.uniq = function () {
  var a = [];
  this.forEach(function (b) {
    if (a.indexOf(b) < 0) {
      a[a.length] = b;
    }
  });
  return a;
};

Form_formula = {};

Form_formula.mixin = function (dest, src) {
  for (var key in src) {
    dest[key] = src[key];
  }

  return dest;
};

Form_formula.handerUserObject = function (u) {
  if (u instanceof Array) {
    var user = {};
    user.name = u.getProperty("name");
    user.organization = {};
    user.organization.name = u.getProperty("organization").getProperty("name");
    user.organization.fullname = u.getProperty("organization").getProperty("fullname");
    user.hr = u.getProperty("hr");
    user.sort_no = u.getProperty("sort_no");
    user.mobile = u.getProperty("mobile");
    user.work_phone = u.getProperty("work_phone");
    user.position = u.getProperty("position");
    var userRoles = u.getProperty("roles");
    var roles = new Array();
    userRoles.forEach(function (i) {
      roles = roles.concat(i);
    });
    roles.uniq();
    user.roles = roles;
    return user;
  } else {
    return u;
  }
};

Form_formula.handerOrgObject = function (o) {
  if (o instanceof Array) {
    var org = {};
    org.id = o.getProperty("_id");
    org.name = o.getProperty("name");
    org.fullname = o.getProperty("fullname");
    return org;
  } else {
    return o;
  }
};
/**
    * 获得公式需要用到的初始值
    * 输入：fields, values, applicant
    * 输出：__values
**/


Form_formula.init_formula_values = function (fields, autoFormDoc, approver, applicant, spaceId) {
  var __values = {}; //申请单中填的值处理

  if (fields && fields.length && autoFormDoc) {
    //debugger;
    fields.forEach(function (field) {
      var type = field.type;

      if (type) {
        if (type === 'table') {
          /*
          * 将表格字段的值进行转换后传入__values中
          * values中表格的值格式为
          * [{"a":1,"b":4},{"a":2,"b":5},{"a":3,"b":6}]
          * __values需要转化为下面格式且和主表的值一样放到第一层
          * {"a":[1,2,3],"b":[4,5,6]}
          **/
          var tableFields = field.sfields,
              tableValues = autoFormDoc[field.code],
              formulaTableValues = [],
              __tableValues = {}; //按公式的格式转换值为__tableValues

          if (tableFields && tableFields.length && tableValues && tableValues instanceof Array) {
            tableValues.forEach(function (tableValue) {
              formulaTableValues.push(Form_formula.init_formula_values(tableFields, tableValue));
            }, this); //按主表的格式转换__tableValues加到

            tableFields.forEach(function (tablefield) {
              __tableValues[tablefield.code] = formulaTableValues.getEach(tablefield.code);
            });
            __values = Form_formula.mixin(__values, __tableValues);
          }
        } else if (type == 'user') {
          __values[field.code] = Form_formula.handerUserObject(WorkflowManager.getFormulaUserObjects(spaceId, autoFormDoc[field.code]));
        } else if (type == 'group') {
          __values[field.code] = Form_formula.handerOrgObject(WorkflowManager.getFormulaOrgObjects(autoFormDoc[field.code]));
        } else if (type == 'odata') {
          __values[field.code] = autoFormDoc[field.code] || {};
        } else {
          //此处传spaceId给选人控件的旧数据计算roles和organization
          __values[field.code] = autoFormDoc[field.code];
        }
      }
    }, this);
  } //当前处理人


  __values["approver"] = WorkflowManager.getFormulaUserObject(spaceId, approver); //申请人

  __values["applicant"] = WorkflowManager.getFormulaUserObject(spaceId, applicant);
  return __values;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_handlers_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/get_handlers_manager.coffee                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
getHandlersManager = {};

getHandlersManager.getHandlersByUsersAndRoles = function (user_ids, role_ids, space_id) {
  var approve_users;
  approve_users = new Array();

  _.each(user_ids, function (user_id) {
    var users;

    if (db.users.find({
      _id: user_id
    }).count() > 0) {
      users = getHandlersManager.getHandlersByUserAndRoles(user_id, role_ids, space_id);

      if (users.length > 0) {
        return approve_users = approve_users.concat(users);
      }
    } else {
      throw new Meteor.Error('error!', "user_id不合法不合法");
    }
  });

  approve_users = _.uniq(approve_users);
  return approve_users;
};

getHandlersManager.getHandlersByUserAndRoles = function (user_id, role_ids, space_id) {
  var user_ids;
  user_ids = new Array();

  _.each(role_ids, function (role_id) {
    var users;

    if (db.flow_roles.find({
      _id: role_id
    }).count() > 0) {
      users = getHandlersManager.getHandlersByUserAndRole(user_id, role_id, space_id);

      if (users.length > 0) {
        return user_ids = user_ids.concat(users);
      }
    } else {
      throw new Meteor.Error('error!', "role_id已经被删除");
    }
  });

  if (user_ids.length > 0) {
    user_ids = _.uniq(user_ids);
    return user_ids;
  } else {
    throw new Meteor.Error('error!', "根据user_id和role_ids没查到对应的处理人");
  }
};

getHandlersManager.getHandlersByUserAndRole = function (user_id, role_id, space_id) {
  var orgs, user_ids;
  orgs = db.organizations.find({
    space: space_id,
    users: user_id
  }, {
    fields: {
      _id: 1
    }
  }).fetch();
  user_ids = new Array();

  _.each(orgs, function (org) {
    var users;
    users = getHandlersManager.getHandlersByOrgAndRole(org._id, role_id, space_id);

    if (users.length > 0) {
      return user_ids = user_ids.concat(users);
    }
  });

  user_ids = _.uniq(user_ids);
  return user_ids;
};

getHandlersManager.getHandlersByOrgsAndRoles = function (org_ids, role_ids, space_id) {
  var user_ids;
  user_ids = new Array();

  _.each(org_ids, function (org_id) {
    var users;
    users = getHandlersManager.getHandlersByOrgAndRoles(org_id, role_ids, space_id);

    if (users.length > 0) {
      return user_ids = user_ids.concat(users);
    }
  });

  user_ids = _.uniq(user_ids);
  return user_ids;
};

getHandlersManager.getHandlersByOrgAndRoles = function (org_id, role_ids, space_id) {
  var user_ids;
  user_ids = new Array();

  _.each(role_ids, function (role_id) {
    var users;
    users = getHandlersManager.getHandlersByOrgAndRole(org_id, role_id, space_id);

    if (users.length > 0) {
      return user_ids = user_ids.concat(users);
    }
  });

  if (user_ids.length > 0) {
    user_ids = _.uniq(user_ids);
    return user_ids;
  } else {
    throw new Meteor.Error('error!', "根据org_id和role_ids没查到对应的处理人");
  }
};

getHandlersManager.getHandlersByOrgAndRole = function (org_id, role_id, space_id) {
  var org, parents, positions, user_ids;
  org = db.organizations.findOne({
    _id: org_id
  }, {
    fields: {
      parents: 1
    }
  });
  user_ids = new Array();
  positions = db.flow_positions.find({
    space: space_id,
    org: org_id,
    role: role_id
  }, {
    fields: {
      users: 1
    }
  }).fetch();

  _.each(positions, function (position) {
    return user_ids = user_ids.concat(position.users);
  });

  if (user_ids.length === 0) {
    parents = org.parents;

    _.each(parents, function (parent_id) {
      positions = db.flow_positions.find({
        space: space_id,
        org: parent_id,
        role: role_id
      }, {
        fields: {
          users: 1
        }
      }).fetch();

      if (positions.length > 0) {
        return _.each(positions, function (position) {
          return user_ids = user_ids.concat(position.users);
        });
      }
    });
  }

  user_ids = _.uniq(user_ids);
  return user_ids;
};

getHandlersManager.getHandlers = function (instance_id, step_id) {
  var _approve, _space_user, _trace, applicant, applicantSuperiors, approve_users, approver_org_field, approver_org_ids, approver_step, approver_user_field, approver_user_ids, current, current_flow, current_flow_version, current_form, current_step, current_steps, deal_type, field_code, finished_traces, flow_id, flow_rev, form, form_fields, form_id, form_rev, handlers, instance, max_startDate_trace, new_approver_user_ids, new_org_user_ids, newest_values, next_step_users, org_ids, org_ids_names, org_user_ids, space_id, space_user_count, submitter, submitter_user_count, unfinished_trace, user_ids, user_ids_names, users, valid_approver_org_ids;

  instance = db.instances.findOne(instance_id);

  if (instance.step_approve && instance.step_approve[step_id]) {
    return instance.step_approve[step_id];
  }

  approve_users = new Array();
  space_id = instance.space;
  flow_id = instance.flow;
  flow_rev = instance.flow_version;
  current_flow = db.flows.findOne(flow_id);
  current_step = null;
  current_steps = new Array();

  if (current_flow.current._id === flow_rev) {
    current_steps = current_flow.current.steps;
  } else {
    current = _.find(current_flow.historys, function (history) {
      return history._id === flow_rev;
    });
    current_steps = current.steps;
  }

  current_step = _.find(current_steps, function (step) {
    return step._id === step_id;
  });

  if (current_step.step_type === "condition") {
    unfinished_trace = _.find(instance.traces, function (trace) {
      return trace.is_finished === false;
    });
    return new Array(unfinished_trace.approves[0].user);
  }

  if (current_step.step_type === "start") {
    handlers = new Array();
    handlers.push(instance.applicant);
    handlers.push(instance.submitter);
    handlers = _.uniq(handlers);
    return handlers;
  }

  deal_type = current_step.deal_type;
  users = new Array();

  if (deal_type === "applicantRole") {
    applicant = instance.applicant;

    if (applicant) {
      space_user_count = db.space_users.find({
        space: space_id,
        user: applicant
      }).count();

      if (space_user_count === 0) {
        throw new Meteor.Error('error!', "提交人已经被删除或不属于当前space");
      }

      if (current_step.approver_roles && current_step.approver_roles.length > 0) {
        _.each(current_step.approver_roles, function (approver_role) {
          var role_count;
          role_count = db.flow_roles.find({
            _id: approver_role
          }).count();

          if (role_count === 0) {
            throw new Meteor.Error('error!', "角色已经被删除");
          }
        });

        return getHandlersManager.getHandlersByUserAndRoles(applicant, current_step.approver_roles, space_id);
      } else {
        throw new Meteor.Error('error!', "审批岗位未指定");
      }
    } else {
      throw new Meteor.Error('error!', "Instance的提交人为空");
    }
  } else if (deal_type === "applicant") {
    applicant = instance.applicant;
    space_user_count = db.space_users.find({
      space: space_id,
      user: applicant
    }).count();

    if (space_user_count === 0) {
      throw new Meteor.Error('error!', "提交人已经被删除或不属于当前space");
    } else {
      return new Array(applicant);
    }
  } else if (deal_type === "orgFieldRole") {
    form_id = current_flow.form;
    form_rev = null;

    if (flow_rev === current_flow.current._id) {
      form_rev = current_flow.current.form_version;
    } else {
      current_flow_version = _.find(current_flow.historys, function (current_flow_history) {
        return current_flow_history._id === flow_rev;
      });

      if (current_flow_version) {
        form_rev = current_flow_version.form_version;
      }
    }

    form = db.forms.findOne(form_id);
    current_form = null;

    if (form_rev === form.current._id) {
      current_form = form.current;
    } else {
      current_form = _.find(form.historys, function (form_history) {
        return form_history._id === form_rev;
      });
    }

    approver_org_field = current_step.approver_org_field;
    form_fields = current_form.fields;
    field_code = null;

    _.each(form_fields, function (form_field) {
      if (form_field._id === approver_org_field) {
        return field_code = form_field.code;
      }
    });

    newest_values = uuflowManager.getUpdatedValues(instance);
    org_ids = new Array();
    org_ids_names = new Array();

    if (newest_values[field_code]) {
      if (newest_values[field_code] instanceof Array) {
        org_ids_names = newest_values[field_code];
      } else {
        org_ids_names.push(newest_values[field_code]);
      }
    }

    _.each(org_ids_names, function (org) {
      var check_org_count;
      check_org_count = db.organizations.find({
        _id: org["id"]
      }).count();

      if (check_org_count === 0) {
        throw new Meteor.Error('error!', "组织ID不合法");
      }

      return org_ids.push(org["id"]);
    });

    if (current_step.approver_roles && current_step.approver_roles.length > 0) {
      _.each(current_step.approver_roles, function (approver_role) {
        var role_count;
        role_count = db.flow_roles.find({
          _id: approver_role
        }).count();

        if (role_count === 0) {
          throw new Meteor.Error('error!', approver_role + "已经被删除");
        }
      });

      return getHandlersManager.getHandlersByOrgsAndRoles(org_ids, current_step.approver_roles, instance.space);
    } else {
      throw new Meteor.Error('error!', "流程步骤" + current_step.name + "审批岗位未指定");
    }
  } else if (deal_type === "orgField") {
    form_id = current_flow.form;
    form_rev = null;

    if (flow_rev === current_flow.current._id) {
      form_rev = current_flow.current.form_version;
    } else {
      current_flow_version = _.find(current_flow.historys, function (current_flow_history) {
        return current_flow_history._id === flow_rev;
      });

      if (current_flow_version) {
        form_rev = current_flow_version.form_version;
      }
    }

    form = db.forms.findOne(form_id);
    current_form = null;

    if (form_rev === form.current._id) {
      current_form = form.current;
    } else {
      current_form = _.find(form.historys, function (form_history) {
        return form_history._id === form_rev;
      });
    }

    approver_org_field = current_step.approver_org_field;
    form_fields = current_form.fields;
    field_code = null;

    _.each(form_fields, function (form_field) {
      if (form_field._id === approver_org_field) {
        return field_code = form_field.code;
      }
    });

    newest_values = uuflowManager.getUpdatedValues(instance);
    org_ids = new Array();
    org_ids_names = new Array();

    if (newest_values[field_code]) {
      if (newest_values[field_code] instanceof Array) {
        org_ids_names = newest_values[field_code];
      } else {
        org_ids_names.push(newest_values[field_code]);
      }
    }

    _.each(org_ids_names, function (org) {
      var check_org_count;
      check_org_count = db.organizations.find({
        _id: org["id"]
      }).count();

      if (check_org_count === 0) {
        throw new Meteor.Error('error!', "组织ID不合法");
      }

      return org_ids.push(org["id"]);
    });

    user_ids = new Array();

    _.each(org_ids, function (org_id) {
      var check_orgs, org, org_children, org_users;
      org = db.organizations.findOne({
        _id: org_id
      }, {
        fields: {
          users: 1
        }
      });
      org_children = db.organizations.find({
        space: space_id,
        parents: org_id
      }, {
        fields: {
          users: 1
        }
      }).fetch();
      org_children.unshift(org);
      check_orgs = org_children;
      org_users = new Array();

      _.each(check_orgs, function (check_org_user) {
        if (check_org_user.users) {
          _.each(check_org_user.users, function (org_user) {
            if (db.space_users.find({
              space: space_id,
              user: org_user
            }).count() === 0) {
              throw new Meteor.Error('error!', "space下不存在此user");
            }
          });
        }

        user_ids = user_ids.concat(check_org_user.users);
        return org_users = org_users.concat(check_org_user.users);
      });

      if (org_users.length === 0) {
        throw new Meteor.Error('error!', "组织" + org_id + "不存在处理人");
      }
    });

    user_ids = _.uniq(user_ids);
    return user_ids;
  } else if (deal_type === "userFieldRole") {
    form_id = current_flow.form;
    form_rev = null;

    if (flow_rev === current_flow.current._id) {
      form_rev = current_flow.current.form_version;
    } else {
      current_flow_version = _.find(current_flow.historys, function (current_flow_history) {
        return current_flow_history._id === flow_rev;
      });

      if (current_flow_version) {
        form_rev = current_flow_version.form_version;
      }
    }

    form = db.forms.findOne(form_id);
    current_form = null;

    if (form_rev === form.current._id) {
      current_form = form.current;
    } else {
      current_form = _.find(form.historys, function (form_history) {
        return form_history._id === form_rev;
      });
    }

    approver_user_field = current_step.approver_user_field;
    form_fields = current_form.fields;
    field_code = null;

    _.each(form_fields, function (form_field) {
      if (form_field._id === approver_user_field) {
        return field_code = form_field.code;
      }
    });

    newest_values = uuflowManager.getUpdatedValues(instance);
    user_ids_names = new Array();

    if (newest_values[field_code]) {
      if (newest_values[field_code] instanceof Array) {
        user_ids_names = newest_values[field_code];
      } else {
        user_ids_names.push(newest_values[field_code]);
      }
    }

    user_ids = new Array();

    _.each(user_ids_names, function (user) {
      var check_user_count;
      check_user_count = db.space_users.find({
        space: space_id,
        user: user["id"]
      }).count();

      if (check_user_count === 0) {
        throw new Meteor.Error('error!', "人员ID不合法");
      }

      return user_ids.push(user["id"]);
    });

    user_ids = _.uniq(user_ids);

    if (current_step.approver_roles && current_step.approver_roles.length > 0) {
      _.each(current_step.approver_roles, function (approver_role) {
        var role_count;
        role_count = db.flow_roles.find({
          _id: approver_role
        }).count();

        if (role_count === 0) {
          throw new Meteor.Error('error!', approver_role + "已经被删除");
        }
      });

      return getHandlersManager.getHandlersByUsersAndRoles(user_ids, current_step.approver_roles, instance.space);
    } else {
      throw new Meteor.Error('error!', "流程步骤" + current_step.name + "审批岗位未指定");
    }
  } else if (deal_type === "userField") {
    form_id = current_flow.form;
    form_rev = null;

    if (flow_rev === current_flow.current._id) {
      form_rev = current_flow.current.form_version;
    } else {
      current_flow_version = _.find(current_flow.historys, function (current_flow_history) {
        return current_flow_history._id === flow_rev;
      });

      if (current_flow_version) {
        form_rev = current_flow_version.form_version;
      }
    }

    form = db.forms.findOne(form_id);
    current_form = null;

    if (form_rev === form.current._id) {
      current_form = form.current;
    } else {
      current_form = _.find(form.historys, function (form_history) {
        return form_history._id === form_rev;
      });
    }

    approver_user_field = current_step.approver_user_field;
    form_fields = current_form.fields;
    field_code = null;

    _.each(form_fields, function (form_field) {
      if (form_field._id === approver_user_field) {
        return field_code = form_field.code;
      }
    });

    newest_values = uuflowManager.getUpdatedValues(instance);
    user_ids_names = new Array();

    if (newest_values[field_code]) {
      if (newest_values[field_code] instanceof Array) {
        user_ids_names = newest_values[field_code];
      } else {
        user_ids_names.push(newest_values[field_code]);
      }
    }

    user_ids = new Array();

    _.each(user_ids_names, function (user) {
      var check_user_count;
      check_user_count = db.space_users.find({
        space: space_id,
        user: user["id"]
      }).count();

      if (check_user_count === 0) {
        throw new Meteor.Error('error!', "人员ID不合法");
      }

      return user_ids.push(user["id"]);
    });

    user_ids = _.uniq(user_ids);
    return user_ids;
  } else if (deal_type === "specifyStepRole") {
    approver_step = current_step.approver_step;
    finished_traces = new Array();

    _.each(instance.traces, function (trace) {
      if (trace.step === approver_step) {
        return finished_traces.push(trace);
      }
    });

    max_startDate_trace = _.max(finished_traces, function (t) {
      return t.start_date;
    });
    approve_users = _.pluck(max_startDate_trace.approves, "user");

    if (current_step.approver_roles) {
      _.each(current_step.approver_roles, function (approver_role) {
        var role_count;
        role_count = db.flow_roles.find({
          _id: approver_role
        }).count();

        if (role_count === 0) {
          throw new Meteor.Error('error!', "角色已经被删除");
        }
      });
    }

    _.each(approve_users, function (approve_user) {
      if (db.space_users.find({
        space: space_id,
        user: approve_user
      }).count() === 0) {
        throw new Meteor.Error('error!', "指定步骤的处理人已经变更");
      }
    });

    return getHandlersManager.getHandlersByUsersAndRoles(approve_users, current_step.approver_roles, space_id);
  } else if (deal_type === "specifyStepUser") {
    approver_step = current_step.approver_step;
    finished_traces = new Array();

    _.each(instance.traces, function (trace) {
      if (trace.step === approver_step) {
        return finished_traces.push(trace);
      }
    });

    max_startDate_trace = _.max(finished_traces, function (t) {
      return t.start_date;
    });
    approve_users = _.pluck(max_startDate_trace.approves, "user");

    _.each(approve_users, function (approve_user) {
      var check_approve_user_count;
      check_approve_user_count = db.space_users.find({
        space: space_id,
        user: approve_user
      }).count();

      if (check_approve_user_count === 0) {
        throw new Meteor.Error('error!', "指定步骤的处理人已经变更");
      }
    });

    approve_users = _.uniq(approve_users);
    return approve_users;
  } else if (deal_type === "submitterRole") {
    submitter = instance.submitter;

    if (!submitter) {
      submitter_user_count = db.space_users.find({
        space: space_id,
        user: submitter
      }).count();

      if (submitter_user_count === 0) {
        throw new Meteor.Error('error!', "提交人已经被删除或不属于当前工作区");
      } else {
        if (current_step.approver_roles && current_step.approver_roles.length > 0) {
          _.each(current_step.approver_roles, function (approver_role) {
            var role_count;
            role_count = db.flow_roles.find({
              _id: approver_role
            }).count();

            if (role_count === 0) {
              throw new Meteor.Error('error!', approver_role + "已经被删除");
            }
          });

          return getHandlersManager.getHandlersByUserAndRoles(submitter, current_step.approver_roles, space_id);
        } else {
          throw new Meteor.Error('error!', "流程步骤" + current_step.name + "审批岗位未指定");
        }
      }
    } else {
      throw new Meteor.Error('error!', "申请单的提交人为空");
    }
  } else if (deal_type === "submitter") {
    submitter = instance.submitter;
    submitter_user_count = db.space_users.find({
      space: space_id,
      user: submitter
    }).count();

    if (submitter_user_count === 0) {
      throw new Meteor.Error('error!', "提交人已经被删除或不属于当前工作区");
    } else {
      return new Array(submitter);
    }
  } else if (deal_type === "specifyOrg") {
    approver_org_ids = current_step.approver_orgs;

    if (!approver_org_ids || approver_org_ids.length === 0) {
      throw new Meteor.Error('error!', "未定义用于查找下一步处理人的部门，请联系管理员调查流程图的配置是否正确");
    }

    valid_approver_org_ids = new Array();

    _.each(approver_org_ids, function (approver_org_id) {
      if (db.organizations.find({
        _id: approver_org_id
      }).count() > 0) {
        return valid_approver_org_ids.unshift(approver_org_id);
      }
    });

    org_user_ids = new Array();

    _.each(valid_approver_org_ids, function (valid_approver_org_id) {
      var child_orgs, valid_approver_org;
      valid_approver_org = db.organizations.findOne({
        _id: valid_approver_org_id
      }, {
        fields: {
          users: 1
        }
      });

      if (valid_approver_org.users) {
        org_user_ids = org_user_ids.concat(valid_approver_org.users);
      }

      child_orgs = db.organizations.find({
        space: space_id,
        parents: valid_approver_org_id
      }, {
        fields: {
          users: 1
        }
      }).fetch();
      return _.each(child_orgs, function (child_org) {
        if (child_org.users) {
          return org_user_ids = org_user_ids.concat(child_org.users);
        }
      });
    });

    org_user_ids = _.uniq(org_user_ids);
    new_org_user_ids = new Array();

    _.each(org_user_ids, function (org_user_id) {
      var space_user_info_count;
      space_user_info_count = db.space_users.find({
        space: space_id,
        user: org_user_id
      }).count();

      if (space_user_info_count > 0) {
        return new_org_user_ids.push(org_user_id);
      }
    });

    return new_org_user_ids;
  } else if (deal_type === "specifyUser") {
    approver_user_ids = current_step.approver_users;
    approver_user_ids = _.uniq(approver_user_ids);
    new_approver_user_ids = new Array();

    _.each(approver_user_ids, function (approver_user_id) {
      var space_user_info_count;
      space_user_info_count = db.space_users.find({
        space: space_id,
        user: approver_user_id
      }).count();

      if (space_user_info_count > 0) {
        return new_approver_user_ids.push(approver_user_id);
      }
    });

    return new_approver_user_ids;
  } else if (deal_type === "pickupAtRuntime") {
    next_step_users = new Array();
    _trace = _.find(instance.traces, function (_tr) {
      return _tr.is_finished === false;
    });
    _approve = _.find(_trace.approves, function (_app) {
      return _app.is_finished === false && _app.type !== 'cc';
    });

    if (_approve.next_steps) {
      if (_approve.next_steps[0]["users"]) {
        next_step_users = _approve.next_steps[0]["users"];
      }
    }

    return next_step_users;
  } else if (deal_type === "applicantSuperior") {
    applicantSuperiors = new Array();
    _space_user = db.space_users.findOne({
      space: space_id,
      user: instance.applicant
    }, {
      fields: {
        manager: 1
      }
    });

    if (_space_user.manager) {
      applicantSuperiors.push(_space_user.manager);
    }

    return applicantSuperiors;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"permission_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/permission_manager.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
permissionManager = {};

permissionManager.getFlowPermissions = function (flow_id, user_id) {
  var flow, my_permissions, org_ids, organizations, orgs_can_add, orgs_can_admin, orgs_can_monitor, space_id, users_can_add, users_can_admin, users_can_monitor;
  flow = uuflowManager.getFlow(flow_id);
  space_id = flow.space;
  org_ids = new Array();
  organizations = db.organizations.find({
    space: space_id,
    users: user_id
  }, {
    fields: {
      parents: 1
    }
  }).fetch();

  _.each(organizations, function (org) {
    org_ids.push(org._id);

    if (org.parents) {
      return _.each(org.parents, function (parent_id) {
        return org_ids.push(parent_id);
      });
    }
  });

  org_ids = _.uniq(org_ids);
  my_permissions = new Array();

  if (flow.perms) {
    if (flow.perms.users_can_add) {
      users_can_add = flow.perms.users_can_add;

      if (users_can_add.includes(user_id)) {
        my_permissions.push("add");
      }
    }

    if (flow.perms.orgs_can_add) {
      orgs_can_add = flow.perms.orgs_can_add;

      _.each(org_ids, function (org_id) {
        if (orgs_can_add.includes(org_id)) {
          return my_permissions.push("add");
        }
      });
    }

    if (flow.perms.users_can_monitor) {
      users_can_monitor = flow.perms.users_can_monitor;

      if (users_can_monitor.includes(user_id)) {
        my_permissions.push("monitor");
      }
    }

    if (flow.perms.orgs_can_monitor) {
      orgs_can_monitor = flow.perms.orgs_can_monitor;

      _.each(org_ids, function (org_id) {
        if (orgs_can_monitor.includes(org_id)) {
          return my_permissions.push("monitor");
        }
      });
    }

    if (flow.perms.users_can_admin) {
      users_can_admin = flow.perms.users_can_admin;

      if (users_can_admin.includes(user_id)) {
        my_permissions.push("admin");
      }
    }

    if (flow.perms.orgs_can_admin) {
      orgs_can_admin = flow.perms.orgs_can_admin;

      _.each(org_ids, function (org_id) {
        if (orgs_can_admin.includes(org_id)) {
          return my_permissions.push("admin");
        }
      });
    }
  }

  my_permissions = _.uniq(my_permissions);
  return my_permissions;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"approve_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/approve_manager.coffee                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
approveManager = {}; /*
                         对比approve_values与last_values 对象， 返回approve_values比last_values多出的或者改变的部分
                      */

approveManager.getChangeValues = function (last_values, approve_values) {
  var approve_values_keys, changeValues, last_values_keys;
  changeValues = {};
  last_values_keys = _.keys(last_values);
  approve_values_keys = _.keys(approve_values);
  approve_values_keys.forEach(function (key) {
    if (_.contains(last_values_keys, key)) {
      if (!_.isEqual(last_values[key], approve_values[key])) {
        return changeValues[key] = approve_values[key];
      }
    } else {
      if (approve_values[key] !== '') {
        return changeValues[key] = approve_values[key];
      }
    }
  });
  return changeValues;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/flow_manager.coffee                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
flowManager = {};

flowManager.getCategoriesFlows = function (spaceId, categorieId, fields) {
  var categoriesForms;
  categoriesForms = formManager.getCategoriesForms(spaceId, categorieId, {
    _id: 1
  }).fetch();
  return db.flows.find({
    form: {
      $in: categoriesForms.getProperty("_id")
    }
  });
};

flowManager.getUnCategoriesFlows = function (spaceId, fields) {
  var unCategoriesForms;
  unCategoriesForms = formManager.getUnCategoriesForms(spaceId, {
    _id: 1
  }).fetch();
  return db.flows.find({
    form: {
      $in: unCategoriesForms.getProperty("_id")
    }
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/form_manager.coffee                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
formManager = {};

formManager.getCategoriesForms = function (spaceId, categorieId, fields) {
  var _fields;

  if (fields) {
    _fields = {
      fields: fields
    };
  }

  return db.forms.find({
    space: spaceId,
    category: categorieId,
    state: "enabled"
  }, _fields);
};

formManager.getUnCategoriesForms = function (spaceId, fields) {
  var _fields;

  if (fields) {
    _fields = {
      fields: fields
    };
  }

  return db.forms.find({
    space: spaceId,
    category: {
      $in: [null, ""]
    },
    state: "enabled"
  }, _fields);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"step_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/step_manager.coffee                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
stepManager = {};

stepManager.allowBatch = function (step) {
  return step.step_type === 'counterSign' && step.allowBatch;
};

stepManager.getStep = function (instance, flow, step_id) {
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_manager.coffee":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/lib/instance_manager.coffee                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _eval, logger;

_eval = require('eval');
InstanceManager = {};
logger = new Logger('Workflow -> InstanceManager');

InstanceManager.handlerInstanceByFieldMap = function (ins, field_map) {
  var context, e, flow, res, script;
  res = ins;

  if (ins) {
    if (!field_map) {
      flow = db.flows.findOne({
        _id: ins.flow
      }, {
        fields: {
          field_map: 1
        }
      });

      if (flow != null ? flow.field_map : void 0) {
        field_map = flow.field_map;
      }
    }

    if (field_map) {
      context = _.clone(ins);
      context._ = _;
      script = "var instances = " + field_map + "; exports.instances = instances";

      try {
        res = _eval(script, "handlerInstanceByFieldMap", context, false).instances;
      } catch (error) {
        e = error;
        res = {
          _error: e
        };
        logger.error(e);
      }
    }
  }

  return res;
};

InstanceManager.getCurrentApprove = function (instance, handler) {
  var currentApprove, currentApproves, currentTraces;

  if (!instance || !instance.traces || instance.traces.length < 1) {
    return;
  }

  currentTraces = instance.traces.filterProperty('is_finished', false);

  if (currentTraces.length) {
    currentApproves = currentTraces[0].approves.filterProperty('is_finished', false).filterProperty('handler', handler);
    currentApprove = currentApproves.length > 0 ? currentApproves[0] : null;
  }

  if (!currentApprove || currentApprove.type === 'cc') {
    _.each(instance.traces, function (t) {
      _.each(t.approves, function (a) {
        if (a.type === 'cc' && a.user === handler && a.is_finished === false) {
          currentApprove = a;
        }
      });
    });
  }

  if (!currentApprove) {
    return;
  }

  return currentApprove;
};

InstanceManager.getCurrentTrace = function (instance, traceId) {
  return instance.traces.findPropertyByPK("_id", traceId);
};

InstanceManager.getMyApprove = function (instanceId, userId) {
  var flow, instance, my_approve, nextSteps, next_user_ids, step, trace;
  instance = db.instances.findOne({
    _id: instanceId
  });
  flow = uuflowManager.getFlow(instance.flow);
  my_approve = InstanceManager.getCurrentApprove(instance, userId);

  if (my_approve) {
    trace = InstanceManager.getCurrentTrace(instance, my_approve.trace);
    step = uuflowManager.getStep(instance, flow, trace.step);
    nextSteps = uuflowManager.getNextSteps(instance, flow, step, "");

    if (nextSteps.length === 1) {
      next_user_ids = getHandlersManager.getHandlers(instance._id, nextSteps[0]);

      if (next_user_ids.length === 1) {
        my_approve.next_steps = [{
          step: nextSteps[0],
          users: next_user_ids
        }];
        return my_approve;
      }
    }
  }
};

InstanceManager.getBatchInstances = function (space, categoryId, flowIds, inbox_user) {
  var FIELDS, _batch_instances, categoryFlows, inbox_instances, query, unCategoryFlows;

  _batch_instances = new Array();
  query = {
    space: space,
    inbox_users: inbox_user
  };
  FIELDS = {
    name: 1,
    applicant_name: 1,
    submit_date: 1,
    flow_version: 1,
    "traces.step": 1,
    flow: 1
  };

  if (categoryId) {
    if (categoryId === '-1') {
      unCategoryFlows = flowManager.getUnCategoriesFlows(space, {
        _id: 1
      }).fetch().getProperty("_id");
      query.flow = {
        $in: unCategoryFlows
      };
    } else {
      categoryFlows = flowManager.getCategoriesFlows(space, categoryId, {
        _id: 1
      }).fetch().getProperty("_id");
      query.flow = {
        $in: categoryFlows
      };
    }
  }

  if (flowIds) {
    query.flow = {
      $in: flowIds
    };
  }

  inbox_instances = db.instances.find(query, {
    fields: FIELDS,
    skip: 0,
    limit: 100
  });
  inbox_instances.forEach(function (ins) {
    var currentStep, currentStepId, flow;
    currentStepId = _.last(ins.traces).step;
    flow = db.flows.findOne({
      _id: ins.flow
    });
    currentStep = stepManager.getStep(ins, flow, currentStepId);

    if (stepManager.allowBatch(currentStep) && InstanceManager.getMyApprove(ins._id, inbox_user)) {
      delete ins.flow_version;
      delete ins.traces;
      delete ins.flow;
      return _batch_instances.push(ins);
    }
  });
  return _batch_instances;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"publications":{"categories.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/categories.coffee                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('categories', function (spaceId) {
  check(spaceId, String);

  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  return db.categories.find({
    space: spaceId
  }, {
    fields: {
      name: 1,
      space: 1,
      sort_no: 1,
      app: 1
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cfs_instances.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/cfs_instances.coffee                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('cfs_instances', function (instanceIds) {
  check(instanceIds, Array);

  if (!this.userId) {
    return this.ready();
  }

  if (!instanceIds) {
    return this.ready();
  }

  return cfs.instances.find({
    'metadata.instance': {
      $in: instanceIds
    },
    $or: [{
      'metadata.is_private': {
        $ne: true
      }
    }, {
      'metadata.is_private': true,
      "metadata.owner": this.userId
    }]
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_positions.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/flow_positions.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('flow_positions', function (spaceId) {
  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  return db.flow_positions.find({
    space: spaceId
  }, {
    fields: {
      role: 1,
      users: 1,
      org: 1
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_positions_tabular.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/flow_positions_tabular.coffee                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publishComposite('flow_positions_tabular', function (tableName, ids, fields) {
  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));

  if (!this.userId) {
    return this.ready();
  }

  this.unblock();
  return {
    find: function () {
      this.unblock();
      return db.flow_positions.find({
        _id: {
          $in: ids
        }
      }, {
        fields: fields
      });
    },
    children: [{
      find: function (position) {
        this.unblock();
        return db.flow_roles.find({
          _id: position.role
        }, {
          fields: {
            name: 1
          }
        });
      }
    }, {
      find: function (position) {
        this.unblock();
        return db.organizations.find({
          _id: position.org
        }, {
          fields: {
            fullname: 1
          }
        });
      }
    }, {
      find: function (position) {
        this.unblock();
        return db.space_users.find({
          space: position.space,
          user: {
            $in: position.users
          }
        }, {
          fields: {
            space: 1,
            user: 1,
            name: 1
          }
        });
      }
    }]
  };
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_roles.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/flow_roles.coffee                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('flow_roles', function (spaceId) {
  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  return db.flow_roles.find({
    space: spaceId
  }, {
    fields: {
      name: 1
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flows.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/flows.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('flows', function (spaceId) {
  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  if (db.flows.find({
    space: spaceId
  }).count() === 0) {
    db.spaces.createTemplateFormAndFlow(spaceId);
  }

  return db.flows.find({
    space: spaceId
  }, {
    fields: {
      name: 1,
      form: 1,
      state: 1,
      perms: 1,
      space: 1,
      company_id: 1,
      sort_no: 1
    }
  });
});
Meteor.publish('flow_version', function (spaceId, flowId, versionId) {
  var getFlowVersion, handle, self;

  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  if (!flowId) {
    return this.ready();
  }

  if (!versionId) {
    return this.ready();
  }

  self = this;

  getFlowVersion = function (id, versionId) {
    var flow, flow_version;
    flow = db.flows.findOne({
      _id: id
    });

    if (flow) {
      flow_version = flow.current;
      flow_version.latest = true;

      if (flow_version._id !== versionId) {
        flow_version = flow.historys.findPropertyByPK("_id", versionId);
        flow_version.latest = false;
      }

      return flow_version;
    }
  };

  handle = db.flows.find({
    _id: flowId
  }, {
    fields: {
      _id: 1,
      "current.modified": 1
    }
  }).observeChanges({
    changed: function (id) {
      return self.changed("flow_versions", versionId, getFlowVersion(id, versionId));
    }
  });
  self.added("flow_versions", versionId, getFlowVersion(flowId, versionId));
  self.ready();
  return self.onStop(function () {
    return handle.stop();
  });
});
Meteor.publish('distribute_optional_flows', function (flow_ids) {
  if (!this.userId) {
    return this.ready();
  }

  if (!flow_ids) {
    return this.ready();
  }

  return db.flows.find({
    _id: {
      $in: flow_ids
    }
  }, {
    fields: {
      name: 1,
      form: 1,
      state: 1,
      perms: 1,
      space: 1,
      distribute_optional_users: 1,
      distribute_to_self: 1,
      distribute_end_notification: 1,
      company_id: 1
    }
  });
});
Meteor.publish('flow', function (spaceId, flowId) {
  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  if (!flowId) {
    return this.ready();
  }

  return db.flows.find({
    _id: flowId,
    space: spaceId
  }, {
    fields: {
      print_template: 1,
      instance_template: 1,
      events: 1,
      distribute_optional_users: 1,
      distribute_to_self: 1,
      upload_after_being_distributed: 1,
      distribute_end_notification: 1,
      company_id: 1
    }
  });
});
Meteor.publishComposite('flows_tabular', function (tableName, ids, fields) {
  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));

  if (!this.userId) {
    return this.ready();
  }

  this.unblock();
  return {
    find: function () {
      this.unblock();
      return db.flows.find({
        _id: {
          $in: ids
        }
      }, {
        fields: fields
      });
    },
    children: [{
      find: function (flow) {
        this.unblock();
        return db.space_users.find({
          space: flow.space,
          user: flow.current.modified_by
        }, {
          fields: {
            space: 1,
            user: 1,
            name: 1
          }
        });
      }
    }, {
      find: function (flow) {
        this.unblock();
        return db.forms.find({
          space: flow.space,
          _id: flow.form
        }, {
          fields: {
            space: 1,
            _id: 1,
            name: 1,
            category: 1
          }
        });
      }
    }, {
      find: function (flow) {
        this.unblock();
        return db.categories.find({
          space: flow.space
        }, {
          fields: {
            space: 1,
            _id: 1,
            name: 1
          }
        });
      }
    }]
  };
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"forms.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/forms.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('forms', function (spaceId) {
  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  return db.forms.find({
    space: spaceId
  }, {
    fields: {
      name: 1,
      category: 1,
      state: 1,
      description: 1,
      instance_style: 1
    }
  });
});
Meteor.publish('form_version', function (spaceId, formId, versionId) {
  var getFormVersion, handle, self;

  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  if (!formId) {
    return this.ready();
  }

  if (!versionId) {
    return this.ready();
  }

  self = this;

  getFormVersion = function (id, versionId) {
    var form, form_version;
    form = db.forms.findOne({
      _id: id
    });

    if (!form) {
      return {};
    }

    form_version = form.current;
    form_version.latest = true;

    if (form_version._id !== versionId) {
      form_version = form.historys.findPropertyByPK("_id", versionId);
      form_version.latest = false;
    }

    return form_version;
  };

  handle = db.forms.find({
    _id: formId
  }, {
    fields: {
      _id: 1,
      "current.modified": 1
    }
  }).observeChanges({
    changed: function (id) {
      return self.changed("form_versions", versionId, getFormVersion(id, versionId));
    }
  });
  self.added("form_versions", versionId, getFormVersion(formId, versionId));
  self.ready();
  return self.onStop(function () {
    return handle.stop();
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_data.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/instance_data.coffee                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('instance_data', function (instanceId, box) {
  var getMiniInstance, getMyapproveModified, handle, instance, instance_fields_0, miniApproveFields, needChange, self, triggerChangeFields, triggerChangeFieldsValues;

  if (!this.userId) {
    return this.ready();
  }

  if (!instanceId) {
    return this.ready();
  }

  self = this;
  miniApproveFields = ['_id', 'is_finished', 'user', 'handler', 'handler_name', 'type', 'start_date', 'description', 'is_read', 'judge', 'finish_date', 'from_user_name', 'from_user', 'cc_description', 'auto_submitted'];
  triggerChangeFields = ['form_version', 'flow_version', 'related_instances', '_my_approve_read_dates'];
  triggerChangeFieldsValues = {};
  instance_fields_0 = {
    "record_synced": 0,
    "traces.approves.handler_organization_name": 0,
    "traces.approves.handler_organization": 0,
    "traces.approves.cost_time": 0,
    "traces.approves.is_error": 0,
    "traces.approves.deadline": 0,
    "traces.approves.remind_date": 0,
    "traces.approves.reminded_count": 0,
    "traces.approves.modified_by": 0,
    "traces.approves.modified": 0,
    "traces.approves.geolocation": 0,
    "traces.approves.cc_users": 0,
    "traces.approves.from_approve_id": 0,
    "traces.approves.values_history": 0
  };

  getMyapproveModified = function (traces) {
    var myApproveModifieds;
    myApproveModifieds = new Array();

    if (traces != null) {
      traces.forEach(function (trace) {
        var ref;
        return trace != null ? (ref = trace.approves) != null ? ref.forEach(function (approve) {
          if (approve.user === self.userId || approve.handler === self.userId) {
            return myApproveModifieds.push(approve.read_date);
          }
        }) : void 0 : void 0;
      });
    }

    return myApproveModifieds;
  };

  getMiniInstance = function (_instanceId) {
    var instance, ref, ref1, show_modal_traces_list, traces;
    instance = db.instances.findOne({
      _id: _instanceId
    }, {
      fields: instance_fields_0
    });

    if (instance) {
      triggerChangeFields.forEach(function (key) {
        if (key === '_my_approve_read_dates') {
          return triggerChangeFieldsValues[key] = getMyapproveModified(instance.traces);
        } else {
          return triggerChangeFieldsValues[key] = instance[key];
        }
      });
      show_modal_traces_list = ((ref = db.space_settings.findOne({
        space: instance.space,
        key: "show_modal_traces_list"
      }, {
        fields: {
          values: 1
        }
      })) != null ? ref.values : void 0) || false;

      if (show_modal_traces_list) {
        traces = new Array();

        if (instance != null) {
          if ((ref1 = instance.traces) != null) {
            ref1.forEach(function (trace) {
              var _trace, approves, ref2;

              _trace = _.clone(trace);
              approves = new Array();

              if (trace != null) {
                if ((ref2 = trace.approves) != null) {
                  ref2.forEach(function (approve) {
                    if (approve.type !== 'cc' || approve.user === self.userId || approve.handler === self.userId || !_.isEmpty(approve.sign_field_code)) {
                      return approves.push(approve);
                    }
                  });
                }
              }

              _trace.approves = approves;
              return traces.push(_trace);
            });
          }
        }

        instance.traces = traces;
      }
    }

    return instance;
  };

  needChange = function (changeFields) {
    var _change, _rev;

    if (changeFields) {
      _change = false;
      _rev = _.find(triggerChangeFields, function (key) {
        var _key, _my_approve_modifieds;

        _key = key;

        if (key === '_my_approve_read_dates') {
          _key = 'traces';
        }

        if (_.has(changeFields, _key)) {
          if (key === '_my_approve_read_dates') {
            _my_approve_modifieds = getMyapproveModified(changeFields.traces);
            return !_.isEqual(triggerChangeFieldsValues[key], _my_approve_modifieds);
          } else {
            return !_.isEqual(triggerChangeFieldsValues[key], changeFields[key]);
          }
        }
      });

      if (_rev) {
        _change = true;
      }

      return _change;
    }

    return true;
  };

  handle = db.instances.find({
    _id: instanceId
  }).observeChanges({
    changed: function (id, fields) {
      if (box !== 'inbox' || needChange(fields)) {
        return self.changed("instances", id, getMiniInstance(id));
      }
    },
    removed: function (id) {
      return self.removed("instances", id);
    }
  });
  instance = getMiniInstance(instanceId);
  self.added("instances", instance != null ? instance._id : void 0, instance);
  self.ready();
  return self.onStop(function () {
    return handle.stop();
  });
});
Meteor.publish('instance_traces', function (instanceId) {
  var getInstanceTraces, handle, self;

  if (!this.userId) {
    return this.ready();
  }

  if (!instanceId) {
    return this.ready();
  }

  self = this;

  getInstanceTraces = function (_insId) {
    return db.instances.findOne({
      _id: _insId
    }, {
      fields: {
        _id: 1,
        traces: 1
      }
    });
  };

  handle = db.instances.find({
    _id: instanceId
  }).observeChanges({
    changed: function (id) {
      return self.changed("instance_traces", instanceId, getInstanceTraces(instanceId));
    }
  });
  self.added("instance_traces", instanceId, getInstanceTraces(instanceId));
  self.ready();
  return self.onStop(function () {
    return handle.stop();
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_list.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/instance_list.coffee                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('instances_list', function (spaceId, box, flowId) {
  var query;

  if (!this.userId) {
    return this.ready();
  }

  if (!spaceId) {
    return this.ready();
  }

  query = {
    space: spaceId
  };

  if (box === "inbox") {
    query.inbox_users = this.userId;
  } else if (box === "outbox") {
    query.outbox_users = this.userId;
  } else if (box === "draft") {
    query.submitter = this.userId;
    query.state = "draft";
  } else if (box === "pending") {
    query.submitter = this.userId;
    query.state = "pending";
  } else if (box === "completed") {
    query.submitter = this.userId;
    query.state = "completed";
  } else if (box === "monitor") {
    query.flow = flowId;
    query.state = {
      $in: ["pending", "completed"]
    };
  } else {
    query.state = "none";
  }

  return db.instances.find(query, {
    fields: {
      name: 1,
      created: 1,
      form: 1,
      flow: 1,
      space: 1,
      modified: 1,
      applicant: 1,
      is_archived: 1,
      form_version: 1,
      flow_version: 1
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_tabular.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/instance_tabular.coffee                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var asyncLastFinishedApprove, lastFinishedApproveAggregate;

lastFinishedApproveAggregate = function (instanceid, userId, dataMap, callback) {
  var operation;
  operation = [{
    "$match": {
      "_id": instanceid
    }
  }, {
    "$project": {
      "name": 1,
      "_approve": "$traces.approves"
    }
  }, {
    "$unwind": "$_approve"
  }, {
    "$unwind": "$_approve"
  }, {
    "$match": {
      "_approve.is_finished": true,
      $or: [{
        "_approve.handler": userId
      }, {
        "_approve.user": userId
      }]
    }
  }, {
    "$group": {
      "_id": "$_id",
      "finish_date": {
        "$last": "$_approve.finish_date"
      }
    }
  }];
  return db.instances.rawCollection().aggregate(operation, function (err, data) {
    if (err) {
      throw new Error(err);
    }

    data.forEach(function (doc) {
      return dataMap.push(doc);
    });

    if (callback && _.isFunction(callback)) {
      callback();
    }
  });
};

asyncLastFinishedApprove = Meteor.wrapAsync(lastFinishedApproveAggregate);
Meteor.publish("instance_tabular", function (tableName, ids, fields) {
  var getMyApprove, getMyLastFinishedApprove, getStepCurrentName, handle, self;

  if (!this.userId) {
    return this.ready();
  }

  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));
  fields.cc_users = 1;
  self = this;

  getMyLastFinishedApprove = function (userId, instanceId) {
    var data;
    data = [];
    asyncLastFinishedApprove(instanceId, userId, data);

    if (data.length > 0) {
      return data[0];
    }
  };

  getMyApprove = function (userId, instanceId) {
    var approve, approves, instance, is_read, myApprove, notFinishedTraces;
    instance = db.instances.findOne({
      _id: instanceId
    }, {
      fields: {
        traces: 1
      }
    });
    myApprove = null;

    if (!instance) {
      return;
    }

    if (!instance.traces || instance.traces.length < 1) {
      return;
    }

    notFinishedTraces = instance.traces.filterProperty("is_finished", false);

    if (notFinishedTraces.length > 0) {
      approves = notFinishedTraces[0].approves.filterProperty("is_finished", false).filterProperty("handler", userId);

      if (approves.length > 0) {
        approve = approves[0];
        myApprove = {
          id: approve._id,
          instance: approve.instance,
          trace: approve.trace,
          is_read: approve.is_read,
          start_date: approve.start_date,
          agent: approve.agent,
          user_name: approve.user_name
        };
      }
    }

    if (!myApprove) {
      is_read = false;
      instance.traces.forEach(function (trace) {
        var ref;
        return trace != null ? (ref = trace.approves) != null ? ref.forEach(function (approve) {
          if (approve.type === 'cc' && approve.user === userId && approve.is_finished === false) {
            if (approve.is_read) {
              is_read = true;
            }

            return myApprove = {
              id: approve._id,
              is_read: is_read,
              start_date: approve.start_date,
              agent: approve.agent,
              user_name: approve.user_name
            };
          }
        }) : void 0 : void 0;
      });
    }

    return myApprove;
  };

  getStepCurrentName = function (instanceId) {
    var instance, ref, ref1, stepCurrentName;
    instance = db.instances.findOne({
      _id: instanceId
    }, {
      fields: {
        "traces.name": 1,
        "traces": {
          $slice: -1
        }
      }
    });

    if (instance) {
      stepCurrentName = (ref = instance.traces) != null ? (ref1 = ref[0]) != null ? ref1.name : void 0 : void 0;
    }

    return stepCurrentName;
  };

  handle = db.instances.find({
    _id: {
      $in: ids
    }
  }, {
    fields: {
      traces: 0
    }
  }).observeChanges({
    changed: function (id) {
      var instance, myApprove, myLastFinishedApprove, ref, ref1;
      instance = db.instances.findOne({
        _id: id
      }, {
        fields: fields
      });

      if (!instance) {
        return;
      }

      myApprove = getMyApprove(self.userId, id);
      myLastFinishedApprove = getMyLastFinishedApprove(self.userId, id);

      if (myApprove) {
        instance.is_read = myApprove.is_read;
        instance.start_date = myApprove.start_date;

        if (myApprove.agent) {
          instance.agent_user_name = myApprove.user_name;
        }
      } else {
        instance.is_read = true;
      }

      if (myLastFinishedApprove) {
        instance.my_finish_date = myLastFinishedApprove.finish_date;
      }

      instance.is_cc = ((ref = instance.cc_users) != null ? ref.includes(self.userId) : void 0) || false;
      instance.cc_count = ((ref1 = instance.cc_users) != null ? ref1.length : void 0) || 0;
      delete instance.cc_users;
      return self.changed("instances", id, instance);
    },
    removed: function (id) {
      return self.removed("instances", id);
    }
  });
  ids.forEach(function (id) {
    var instance, myApprove, myLastFinishedApprove, ref, ref1;
    instance = db.instances.findOne({
      _id: id
    }, {
      fields: fields
    });

    if (!instance) {
      return;
    }

    myApprove = getMyApprove(self.userId, id);
    myLastFinishedApprove = getMyLastFinishedApprove(self.userId, id);

    if (myApprove) {
      instance.is_read = myApprove.is_read;
      instance.start_date = myApprove.start_date;

      if (myApprove.agent) {
        instance.agent_user_name = myApprove.user_name;
      }
    } else {
      instance.is_read = true;
    }

    if (myLastFinishedApprove) {
      instance.my_finish_date = myLastFinishedApprove.finish_date;
    }

    instance.is_cc = ((ref = instance.cc_users) != null ? ref.includes(self.userId) : void 0) || false;
    instance.cc_count = ((ref1 = instance.cc_users) != null ? ref1.length : void 0) || 0;
    delete instance.cc_users;
    return self.added("instances", id, instance);
  });
  self.ready();
  return self.onStop(function () {
    return handle.stop();
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instance_draft.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/instance_draft.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('instances_draft', function (spaceId) {
  var userId;
  check(spaceId, String);

  if (!this.userId) {
    return this.ready();
  }

  userId = this.userId;
  return db.instances.find({
    state: "draft",
    space: spaceId,
    submitter: userId,
    $or: [{
      inbox_users: {
        $exists: false
      }
    }, {
      inbox_users: []
    }]
  }, {
    fields: {
      _id: 1,
      state: 1,
      space: 1,
      submitter: 1,
      inbox_users: 1,
      modified: 1,
      name: 1
    },
    sort: {
      modified: -1
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"distributed_instances_state_by_ids.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/distributed_instances_state_by_ids.coffee                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('distributed_instances_state_by_ids', function (instance_ids) {
  var handle, self;
  check(instance_ids, Array);

  if (!this.userId) {
    return this.ready();
  }

  if (!instance_ids) {
    return this.ready();
  }

  if (_.isEmpty(instance_ids)) {
    return this.ready();
  }

  self = this;
  handle = db.instances.find({
    _id: {
      $in: instance_ids
    }
  }, {
    fields: {
      state: 1,
      traces: {
        $slice: 1
      }
    }
  }).observeChanges({
    added: function (id, fields) {
      return self.added('instances', id, {
        state: fields.state,
        is_read: fields.traces[0].approves[0].is_read
      });
    },
    changed: function (id, fields) {
      if (fields.state) {
        self.changed('instances', id, {
          state: fields.state
        });
      }

      if (fields.traces) {
        return self.changed('instances', id, {
          is_read: fields.traces[0].approves[0].is_read
        });
      }
    }
  });
  this.ready();
  return this.onStop(function () {
    return handle.stop();
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"related_instaces.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/related_instaces.coffee                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('related_instaces', function (instanceId, related_instances) {
  var ref, related_instance_ids;

  if (!this.userId) {
    return this.ready();
  }

  if (!instanceId) {
    return this.ready();
  }

  related_instance_ids = (ref = db.instances.findOne(instanceId, {
    fields: {
      related_instances: 1
    }
  })) != null ? ref.related_instances : void 0;

  if (related_instance_ids && _.isArray(related_instance_ids)) {
    return db.instances.find({
      _id: {
        $in: related_instance_ids
      }
    }, {
      fields: {
        _id: 1,
        name: 1,
        space: 1
      }
    });
  } else {
    return this.ready();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"space_user_signs.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/space_user_signs.coffee                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isServer) {
  Meteor.publish('space_user_signs', function (spaceId) {
    check(spaceId, String);

    if (!this.userId) {
      return this.ready();
    }

    return db.space_user_signs.find({
      space: spaceId
    }, {
      fields: {
        created_by: 0,
        created: 0,
        modified_by: 0
      }
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user_inbox_instance.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/user_inbox_instance.coffee                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
Meteor.publishComposite "user_inbox_instance", ()->
	unless this.userId
		return this.ready()

	userSpaceIds = db.space_users.find({
		user: this.userId,
		user_accepted: true
	}, {fields: {space: 1}}).fetch().getEach("space");
	query = {space: {$in: userSpaceIds}}

	query.$or = [{inbox_users: this.userId}, {cc_users: this.userId}]

	find: ->
		db.instances.find(query, {
			fields: {
				space: 1,
				applicant_name: 1,
				flow: 1,
				inbox_users: 1,
				cc_users: 1,
				state: 1,
				name: 1,
				modified: 1,
				form: 1
			}, sort: {modified: -1}, skip: 0, limit: 200
		});
	children: [
		{
			find: (instance, post)->
				db.flows.find({_id: instance.flow}, {fields: {name: 1, space: 1}});
		}
	]
 */ /*
    Meteor.publish 'my_inbox_instances', (spaceId)->
    	unless this.userId
    		return this.ready()
    
    	self = this;
    
    	 *	userSpaceIds = db.space_users.find({
    	 *		user: this.userId,
    	 *		user_accepted: true
    	 *	}, {fields: {space: 1}}).fetch().getEach("space");
    
    	query = {space: spaceId}
    
    	query.$or = [{inbox_users: this.userId}, {cc_users: this.userId}]
    
    	fields = {
    		space: 1,
     *		applicant_name: 1,
    		flow: 1,
    		inbox_users: 1,
    		cc_users: 1,
    		state: 1,
     *		name: 1,
     *		modified: 1,
    		form: 1
    	}
    
    	handle = db.instances.find(query, {sort: {modified: -1}, skip: 0, limit: 500}).observeChanges {
    		added: (id)->
    			instance = db.instances.findOne({_id: id}, {fields: fields})
    			return if not instance
    			instance.is_cc = instance.cc_users?.includes(self.userId) || false
    			delete instance.cc_users
    			self.added("instances", id, instance)
    		changed: (id)->
    			instance = db.instances.findOne({_id: id}, {fields: fields})
    			return if not instance
    			instance.is_cc = instance.cc_users?.includes(self.userId) || false
    			delete instance.cc_users
    			self.changed("instances", id, instance);
    		removed: (id)->
    			self.removed("instances", id);
    	}
    
    	self.ready();
    	self.onStop ()->
    		handle.stop()
     */var _async_get_flow_instances_aggregate, _get_flow_instances_aggregate;

_get_flow_instances_aggregate = function (spaceId, userId, _items, callback) {
  return db.instances.rawCollection().aggregate([{
    $match: {
      space: spaceId,
      $or: [{
        inbox_users: userId
      }, {
        cc_users: userId
      }]
    }
  }, {
    $group: {
      _id: {
        flow: "$flow",
        category: "$category"
      },
      count: {
        $sum: 1
      }
    }
  }], function (err, data) {
    if (err) {
      throw new Error(err);
    }

    data.forEach(function (doc) {
      return _items.push(doc);
    });

    if (callback && _.isFunction(callback)) {
      callback();
    }
  });
};

_async_get_flow_instances_aggregate = Meteor.wrapAsync(_get_flow_instances_aggregate);
Meteor.publish('my_inbox_flow_instances_count', function (spaceId) {
  var _changeData, _flowsData, _init, data, handle, query, self;

  if (!this.userId) {
    return this.ready();
  }

  self = this;
  query = {
    space: spaceId
  };
  query.$or = [{
    inbox_users: this.userId
  }, {
    cc_users: this.userId
  }];
  data = [];

  _async_get_flow_instances_aggregate(spaceId, self.userId, data);

  _flowsData = [];

  _.each(data, function (dataItem) {
    return _flowsData.push({
      _id: dataItem._id.flow,
      category: dataItem._id.category,
      count: dataItem.count
    });
  });

  self.added("flow_instances", spaceId, {
    flows: _flowsData
  });

  _changeData = function (doc, action) {
    var flow_instance;
    flow_instance = _.find(_flowsData, function (f) {
      return f._id === doc.flow;
    });

    if (flow_instance) {
      if (action === "added") {
        flow_instance.count++;
      } else if (action === "removed") {
        flow_instance.count--;
      }
    } else if (action === "added") {
      _flowsData.push({
        _id: doc.flow,
        category: doc.category,
        count: 1
      });
    }

    return self.changed("flow_instances", spaceId, {
      flows: _flowsData
    });
  };

  _init = true;
  handle = db.instances.find(query, {
    fields: {
      _id: 1,
      inbox_users: 1,
      cc_users: 1,
      flow: 1,
      category: 1
    }
  }).observe({
    added: function (doc) {
      if (!_init) {
        return _changeData(doc, "added");
      }
    },
    removed: function (doc) {
      if (!_init) {
        return _changeData(doc, "removed");
      }
    }
  });
  _init = false;
  self.ready();
  return self.onStop(function () {
    return handle.stop();
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_main_attach_template.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/publications/flow_main_attach_template.coffee                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('flow_main_attach_template', function (spaceId, flowId) {
  check(spaceId, String);
  check(flowId, String);

  if (!this.userId) {
    return this.ready();
  }

  if (!(spaceId && flowId)) {
    return this.ready();
  }

  return Creator.getCollection('cms_files').find({
    space: spaceId,
    'parent.o': 'flows',
    'parent.ids': flowId,
    name: '正文.docx'
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"flow-template":{"workflow_template.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/flow-template/workflow_template.coffee                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
workflowTemplate = {};
workflowTemplate["en"] = [];
workflowTemplate["zh-CN"] = [];
Meteor.startup(function () {
  var absolute_path_cn, absolute_path_us, filesList_cn, filesList_us, fs, mime, path, path_cn, path_us, readFileList, ref, ref1;
  fs = require('fs');
  path = require('path');
  mime = require('mime');

  readFileList = function (pathDir, filesList) {
    var files;
    files = fs.readdirSync(pathDir);
    return files.forEach(function (name, index) {
      var obj, stat;
      stat = fs.statSync(path.join(pathDir, name));

      if (stat.isDirectory()) {
        return readFileList(path.join(pathDir, name), filesList);
      } else {
        obj = {};
        obj.path = pathDir;
        obj.name = name;
        return filesList.push(obj);
      }
    });
  };

  filesList_cn = [];
  path_cn = (ref = Meteor.settings.workflowTemplates) != null ? ref.path_cn : void 0;

  if (path_cn) {
    absolute_path_cn = path.resolve(path_cn);
    console.log("absolute_path_cn", absolute_path_cn);

    if (fs.existsSync(absolute_path_cn)) {
      readFileList(absolute_path_cn, filesList_cn);
      filesList_cn.forEach(function (file) {
        var data, e;

        try {
          if (mime.getType(file.name) === "application/json") {
            data = fs.readFileSync(path.join(file.path, file.name), 'utf8');
            return workflowTemplate["zh-CN"].push(JSON.parse(data));
          }
        } catch (error) {
          e = error;
          console.error("获取zh-cn文件夹下的所有文件", path.join(file.path, file.name));
          return console.error(e.stack);
        }
      });
    }
  }

  filesList_us = [];
  path_us = (ref1 = Meteor.settings.workflowTemplates) != null ? ref1.path_us : void 0;

  if (path_us) {
    absolute_path_us = path.resolve(path_us);
    console.log("absolute_path_us", absolute_path_us);

    if (fs.existsSync(absolute_path_us)) {
      readFileList(absolute_path_us, filesList_us);
      return filesList_us.forEach(function (file) {
        var data, e;

        try {
          if (mime.getType(file.name) === "application/json") {
            data = fs.readFileSync(path.join(file.path, file.name), 'utf8');
            return workflowTemplate["en"].push(JSON.parse(data));
          }
        } catch (error) {
          e = error;
          console.error("获取en-us文件夹下的所有文件", path.join(file.path, file.name));
          return console.error(e.stack);
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/startup.coffee                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schedule":{"auto_finish_process_delegation.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/schedule/auto_finish_process_delegation.coffee                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
 */Meteor.startup(function () {
  var go_next, ref, rule, schedule;

  if ((ref = Meteor.settings.cron) != null ? ref.auto_finish_process_delegation : void 0) {
    schedule = require('node-schedule');
    rule = Meteor.settings.cron.auto_finish_process_delegation;
    go_next = true;
    return schedule.scheduleJob(rule, Meteor.bindEnvironment(function () {
      var e, now;

      try {
        if (!go_next) {
          return;
        }

        go_next = false;
        console.time('auto_finish_process_delegation');
        now = new Date();
        db.process_delegation_rules.update({
          enabled: true,
          end_time: {
            $lte: now
          }
        }, {
          $set: {
            enabled: false
          }
        }, {
          multi: true
        });
        console.timeEnd('auto_finish_process_delegation');
        return go_next = true;
      } catch (error) {
        e = error;
        console.error("AUTO AUTO_FINISH_PROCESS_DELEGATION ERROR: ");
        console.error(e.stack);
        return go_next = true;
      }
    }, function () {
      return console.log('Failed to bind environment');
    }));
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"timeout_auto_submit.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/server/schedule/timeout_auto_submit.coffee                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
 */Meteor.startup(function () {
  var go_next, ref, rule, schedule;

  if ((ref = Meteor.settings.cron) != null ? ref.timeout_auto_submit : void 0) {
    schedule = require('node-schedule');
    rule = Meteor.settings.cron.timeout_auto_submit;
    go_next = true;
    return schedule.scheduleJob(rule, Meteor.bindEnvironment(function () {
      var e;

      try {
        if (!go_next) {
          return;
        }

        go_next = false;
        console.time('timeout_auto_submit');
        uuflowManager.timeoutAutoSubmit();
        console.timeEnd('timeout_auto_submit');
        return go_next = true;
      } catch (error) {
        e = error;
        console.error("AUTO TIMEOUT_AUTO_SUBMIT ERROR: ");
        console.error(e.stack);
        return go_next = true;
      }
    }, function () {
      return console.log('Failed to bind environment');
    }));
  }
});
Meteor.methods({
  timeout_auto_submit: function (ins_id) {
    uuflowManager.timeoutAutoSubmit(ins_id);
    return true;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"routes":{"nextStepUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/nextStepUsers.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
JsonRoutes.add("post", "/api/workflow/nextStepUsers", function (req, res, next) {
  var deal_type = req.query.deal_type,
      spaceId = req.query.spaceId,
      error = "";

  if (!deal_type || !spaceId) {
    JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '缺少参数'
      }
    });
  }

  var body = req.body,
      nextStepUsers = [];

  switch (deal_type) {
    case 'specifyUser':
      var specifyUserIds = body.specifyUserIds;
      nextStepUsers = WorkflowManager.getUsers(spaceId, specifyUserIds);
      break;

    case 'applicantRole':
      var applicantId = body.applicantId,
          approveRoleIds = body.approveRoleIds;
      var applicant = WorkflowManager.getUser(spaceId, applicantId);
      if (applicant) nextStepUsers = WorkflowManager.getRoleUsersByOrgsAndRoles(spaceId, applicant.organizations, approveRoleIds);
      break;

    case 'applicantSuperior':
      var applicantId = body.applicantId;
      var applicant = WorkflowManager.getUser(spaceId, applicantId);

      if (applicant.manager) {
        nextStepUsers = WorkflowManager.getUsers(spaceId, applicant.manager);
      }

      break;

    case 'applicant':
      var applicantId = body.applicantId;
      nextStepUsers = WorkflowManager.getUsers(spaceId, applicantId);
      break;

    case 'userField':
      var userField = body.userField,
          userFieldValue = body.userFieldValue;

      if (userField.is_multiselect) {
        //如果多选，以userFieldValue值为Array
        nextStepUsers = WorkflowManager.getUsers(spaceId, userFieldValue);
      } else {
        nextStepUsers.push(WorkflowManager.getUser(spaceId, userFieldValue));
      }

      break;

    case 'orgField':
      var orgs,
          orgChildrens,
          orgField = body.orgField,
          orgFieldValue = body.orgFieldValue;

      if (orgFieldValue) {
        if (orgField.is_multiselect) {
          //如果多选，以orgFieldValue值为Array
          orgs = WorkflowManager.getOrganizations(orgFieldValue);
          orgChildrens = WorkflowManager.getOrganizationsChildrens(spaceId, orgFieldValue);
        } else {
          orgs = [WorkflowManager.getOrganization(orgFieldValue)];
          orgChildrens = WorkflowManager.getOrganizationChildrens(spaceId, orgFieldValue);
        }

        nextStepUsers = WorkflowManager.getOrganizationsUsers(spaceId, orgChildrens);
        orgFieldUsers = WorkflowManager.getOrganizationsUsers(spaceId, orgs);
        nextStepUsers = nextStepUsers.concat(orgFieldUsers);

        if (!nextStepUsers || nextStepUsers.length < 1) {
          error = "ORG_NO_MEMBERS";
        }
      } else {
        error = "FIELD_VALUE_EMPTY";
      }

      break;

    case 'specifyOrg':
      var specifyOrgIds = body.specifyOrgIds;
      var specifyOrgs = WorkflowManager.getOrganizations(specifyOrgIds);
      var specifyOrgChildrens = WorkflowManager.getOrganizationsChildrens(spaceId, specifyOrgIds);
      nextStepUsers = WorkflowManager.getOrganizationsUsers(spaceId, specifyOrgs);
      nextStepUsers = nextStepUsers.concat(WorkflowManager.getOrganizationsUsers(spaceId, specifyOrgChildrens));
      break;

    case 'userFieldRole':
      var userField = body.userField,
          userFieldValue = body.userFieldValue,
          approverRoleIds = body.approverRoleIds;

      if (userFieldValue) {
        if (userField.is_multiselect) {
          //如果多选，以userFieldValue值为Array
          nextStepUsers = WorkflowManager.getRoleUsersByUsersAndRoles(spaceId, userFieldValue, approverRoleIds);
        } else {
          nextStepUsers = WorkflowManager.getRoleUsersByUsersAndRoles(spaceId, [userFieldValue], approverRoleIds);
        }

        if (!nextStepUsers || nextStepUsers.length < 1) {
          error = "ROLE_NO_MEMBERS";
        }
      } else {
        error = "FIELD_VALUE_EMPTY";
      }

      break;

    case 'orgFieldRole':
      var orgField = body.orgField,
          orgFieldValue = body.orgFieldValue,
          approverRoleIds = body.approverRoleIds;

      if (orgFieldValue) {
        if (orgField.is_multiselect) {
          //如果多选，以orgFieldValue值为Array
          nextStepUsers = WorkflowManager.getRoleUsersByOrgsAndRoles(spaceId, orgFieldValue, approverRoleIds);
        } else {
          nextStepUsers = WorkflowManager.getRoleUsersByOrgsAndRoles(spaceId, [orgFieldValue], approverRoleIds);
        }

        if (!nextStepUsers || nextStepUsers.length < 1) {
          error = "ROLE_NO_MEMBERS";
        }
      } else {
        error = "FIELD_VALUE_EMPTY";
      }

      break;

    default:
      break;
  }

  var result = [];
  nextStepUsers.forEach(function (su) {
    var o = {
      id: su.id,
      name: su.name
    };
    result.push(o);
  });
  JsonRoutes.sendResult(res, {
    code: 200,
    data: {
      'nextStepUsers': WorkflowManager.uniqUsers(result),
      'error': error
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getSpaceUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/getSpaceUsers.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
JsonRoutes.add("post", "/api/workflow/getSpaceUsers", function (req, res, next) {
  var userIds = req.body.userIds,
      spaceId = req.query.spaceId,
      spaceUsers = [];

  if (!userIds || !spaceId) {
    JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '缺少参数'
      }
    });
  }

  spaceUsers = WorkflowManager.getUsers(spaceId, userIds);
  JsonRoutes.sendResult(res, {
    code: 200,
    data: {
      'spaceUsers': spaceUsers
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getFormulaUserObjects.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/getFormulaUserObjects.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
JsonRoutes.add("post", "/api/workflow/getFormulaUserObjects", function (req, res, next) {
  var userIds = req.body.userIds,
      spaceId = req.query.spaceId,
      spaceUsers = [];

  if (!userIds || !spaceId) {
    JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '缺少参数'
      }
    });
  }

  var users = WorkflowManager.getFormulaUserObject(spaceId, userIds);
  JsonRoutes.sendResult(res, {
    code: 200,
    data: {
      'spaceUsers': users
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_formula_values.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/init_formula_values.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
JsonRoutes.add("post", "/api/workflow/init_formula_values", function (req, res, next) {
  var fields = req.body.fields,
      autoFormDoc = req.body.autoFormDoc,
      approver = req.body.approver,
      applicant = req.body.applicant,
      spaceId = req.query.spaceId,
      spaceUsers = [];

  if (!fields || !spaceId || !autoFormDoc || !approver || !applicant) {
    JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '缺少参数'
      }
    });
    return;
  }

  formula_values = Form_formula.init_formula_values(fields, autoFormDoc, approver, applicant, spaceId);
  JsonRoutes.sendResult(res, {
    code: 200,
    data: {
      'formula_values': formula_values
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getNameForUser.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/getNameForUser.coffee                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("post", "/api/workflow/getNameForUser", function (req, res, next) {
  var e, user, userId;

  try {
    userId = req.body.userId;

    if (!userId) {
      JsonRoutes.sendResult(res, {
        code: 200,
        data: {
          'errors': '缺少参数'
        }
      });
    }

    user = WorkflowManager.getNameForUser(userId);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        user: user
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_designer_startup.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_designer_startup.coffee                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('get', '/api/designer/startup', function (req, res, next) {
  var categories, companyId, current_user, current_user_info, e, flows, forms, org, organizations, positions, query, ref, result, roles, spaceIds, spaceUsers, spaces, spacesQuery, userIds, users;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    companyId = ((ref = req.query) != null ? ref.companyId : void 0) || '';
    spacesQuery = {
      admins: current_user
    };

    if (companyId) {
      org = db.organizations.findOne(companyId, {
        fields: {
          space: 1
        }
      });

      if (!org) {
        throw new Meteor.Error('error', 'companyId is invalid');
      }

      spacesQuery = {
        _id: org.space
      };
    }

    spaces = db.spaces.find(spacesQuery).fetch();
    spaceIds = _.pluck(spaces, '_id');
    query = {
      space: {
        $in: spaceIds
      }
    };

    if (companyId) {
      query.company_id = companyId;
    }

    spaceUsers = db.space_users.find(query).fetch();
    forms = db.forms.find(query, {
      fields: {
        name: 1,
        state: 1,
        is_deleted: 1,
        is_valid: 1,
        space: 1,
        description: 1,
        help_text: 1,
        created: 1,
        created_by: 1,
        current: 1,
        category: 1,
        instance_style: 1,
        company_id: 1
      }
    }).fetch();
    flows = db.flows.find(query, {
      fields: {
        name: 1,
        name_formula: 1,
        code_formula: 1,
        space: 1,
        description: 1,
        is_valid: 1,
        form: 1,
        flowtype: 1,
        state: 1,
        is_deleted: 1,
        created: 1,
        created_by: 1,
        help_text: 1,
        current_no: 1,
        current: 1,
        perms: 1,
        error_message: 1,
        distribute_optional_users: 1,
        company_id: 1
      }
    }).fetch();
    roles = db.flow_roles.find(query).fetch();
    organizations = db.organizations.find(query).fetch();
    positions = db.flow_positions.find(query).fetch();
    categories = db.categories.find({
      space: {
        $in: spaceIds
      }
    }).fetch();
    userIds = _.pluck(spaceUsers, 'user');
    users = db.users.find({
      _id: {
        $in: userIds
      }
    }, {
      fields: {
        name: 1
      }
    }).fetch();
    result = {};
    result.SpaceUsers = spaceUsers;
    result.Users = users;
    result.Forms = forms;
    result.Flows = flows;
    result.Organizations = organizations;
    result.Positions = positions;
    result.Roles = roles;
    result.Categories = categories;
    result.Spaces = spaces;
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: result
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_engine.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_engine.coffee                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/engine', function (req, res, next) {
  var current_user, current_user_info, e, hashData;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;

    _.each(hashData['Approvals'], function (approve_from_client) {
      return uuflowManager.workflow_engine(approve_from_client, current_user_info, current_user);
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {}
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_drafts.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_drafts.coffee                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/drafts', function (req, res, next) {
  var current_user, current_user_info, e, hashData, inserted_instances;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;
    inserted_instances = new Array();

    _.each(hashData['Instances'], function (instance_from_client) {
      var new_ins, new_ins_id;
      new_ins_id = uuflowManager.create_instance(instance_from_client, current_user_info);
      new_ins = db.instances.findOne({
        _id: new_ins_id
      }, {
        fields: {
          space: 1,
          flow: 1,
          flow_version: 1,
          form: 1,
          form_version: 1
        }
      });
      return inserted_instances.push(new_ins);
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        inserts: inserted_instances
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_remove.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_remove.coffee                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/remove', function (req, res, next) {
  var current_user, current_user_info, e, hashData, inserted_instances;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;
    inserted_instances = new Array();

    _.each(hashData['Instances'], function (instance_from_client) {
      var cc_users, delete_obj, flow, inbox_users, instance, space, spaceUserOrganizations, space_id, space_user, user_ids;
      instance = uuflowManager.getInstance(instance_from_client["_id"]);
      space_id = instance.space;
      space = uuflowManager.getSpace(space_id);
      space_user = uuflowManager.getSpaceUser(space_id, current_user);
      flow = db.flows.findOne({
        _id: instance.flow
      });
      spaceUserOrganizations = db.organizations.find({
        _id: {
          $in: space_user.organizations
        }
      }).fetch();

      if (instance.submitter !== current_user && !space.admins.includes(current_user) && !WorkflowManager.canAdmin(flow, space_user, spaceUserOrganizations)) {
        throw new Meteor.Error('error!', "您不能删除此申请单。");
      }

      delete_obj = db.instances.findOne(instance_from_client["_id"]);
      delete_obj.deleted = new Date();
      delete_obj.deleted_by = current_user;
      db.deleted_instances.insert(delete_obj);
      db.instances.remove(instance_from_client["_id"]);

      if (delete_obj.state !== "draft") {
        inbox_users = delete_obj.inbox_users ? delete_obj.inbox_users : [];
        cc_users = delete_obj.cc_users ? delete_obj.cc_users : [];
        user_ids = _.uniq(inbox_users.concat(cc_users));

        _.each(user_ids, function (u_id) {
          return pushManager.send_message_to_specifyUser("terminate_approval", u_id);
        });

        return pushManager.send_instance_notification("monitor_delete_applicant", delete_obj, "", current_user_info);
      }
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        inserts: inserted_instances
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_submit.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_submit.coffee                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/submit', function (req, res, next) {
  var current_user, current_user_info, e, hashData, result;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;
    result = [];

    _.each(hashData['Instances'], function (instance_from_client) {
      var current_approve, flow_id, instance, r;
      r = uuflowManager.submit_instance(instance_from_client, current_user_info);

      if (r.alerts) {
        result.push(r);
      }

      if (!_.isEmpty(instance_from_client['inbox_users'])) {
        pushManager.send_message_to_specifyUser("current_user", current_user);
      }

      if (_.isEmpty(r.alerts)) {
        instance = db.instances.findOne(instance_from_client._id);
        flow_id = instance.flow;
        current_approve = instance_from_client.traces[0].approves[0];
        pushManager.triggerWebhook(flow_id, instance, current_approve, 'draft_submit', current_user, instance.inbox_users);
      }

      return uuflowManager.distributedInstancesRemind(instance_from_client);
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        result: result
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_terminate.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_terminate.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/terminate', function (req, res, next) {
  var current_user, current_user_info, e, hashData;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;

    _.each(hashData['Instances'], function (instance_from_client) {
      var flow, flow_id, flow_ver_end_step, flow_vers, h, i, ins, instance, instance_flow_ver, instance_id, instance_trace, newApprove, newTrace, now, old_cc_users, old_inbox_users, old_outbox_users, permissions, r, setObj, space, space_id, space_user, space_user_org_info, tempUsers, terminate_reason, traces;
      terminate_reason = instance_from_client["terminate_reason"];
      instance_id = instance_from_client["_id"];
      instance = uuflowManager.getInstance(instance_id);
      space_id = instance.space;
      flow_id = instance.flow;
      space = uuflowManager.getSpace(space_id);
      flow = uuflowManager.getFlow(flow_id);
      uuflowManager.isInstancePending(instance);
      space_user = uuflowManager.getSpaceUser(space_id, current_user);
      space_user_org_info = uuflowManager.getSpaceUserOrgInfo(space_user);
      instance_flow_ver = null;
      flow_ver_end_step = null;
      flow_vers = new Array();
      flow_vers.push(flow.current);
      flow_vers = flow_vers.concat(flow.historys);
      instance_flow_ver = _.find(flow_vers, function (f_ver) {
        return f_ver._id === instance.flow_version;
      });

      if (!instance_flow_ver) {
        throw new Meteor.Error('error!', "未找到申请单对应流程版本");
      }

      flow_ver_end_step = _.find(instance_flow_ver.steps, function (f_step) {
        return f_step.step_type === "end";
      });
      permissions = permissionManager.getFlowPermissions(flow_id, current_user);
      now = new Date();
      setObj = new Object();

      if (permissions.includes("admin") || space.admins.includes(current_user) || instance.submitter === current_user || instance.applicant === current_user) {
        if (!terminate_reason) {
          throw new Meteor.Error('error!', "还未填写强制结束申请单的理由，操作失败");
        }

        instance_trace = _.find(instance.traces, function (trace) {
          return trace.is_finished === false;
        });
        traces = instance.traces;
        i = 0;

        while (i < traces.length) {
          if (traces[i].is_finished === false) {
            traces[i].is_finished = true;
            traces[i].finish_date = now;
            h = 0;

            while (h < traces[i].approves.length) {
              if (traces[i].approves[h].is_finished === false) {
                traces[i].approves[h].is_finished = true;
                traces[i].approves[h].finish_date = now;
                traces[i].approves[h].judge = null;
                traces[i].approves[h].description = null;
              }

              h++;
            }

            newApprove = new Object();
            newApprove._id = new Mongo.ObjectID()._str;
            newApprove.instance = instance_id;
            newApprove.trace = instance_trace._id;
            newApprove.is_finished = true;
            newApprove.user = current_user;
            newApprove.user_name = current_user_info.name;
            newApprove.handler = current_user;
            newApprove.handler_name = current_user_info.name;
            newApprove.handler_organization = space_user_org_info["organization"];
            newApprove.handler_organization_name = space_user_org_info["organization_name"];
            newApprove.handler_organization_fullname = space_user_org_info["organization_fullname"];
            newApprove.start_date = now;
            newApprove.finish_date = now;
            newApprove.due_date = instance_trace.due_date;
            newApprove.read_date = now;
            newApprove.judge = "terminated";
            newApprove.is_read = true;
            newApprove.description = terminate_reason;
            newApprove.is_error = false;
            newApprove.values = new Object();
            newApprove.cost_time = newApprove.finish_date - newApprove.start_date;
            traces[i].approves.push(newApprove);
          }

          i++;
        }

        newTrace = new Object();
        newTrace._id = new Mongo.ObjectID()._str;
        newTrace.instance = instance_id;
        newTrace.previous_trace_ids = [instance_trace._id];
        newTrace.is_finished = true;
        newTrace.step = flow_ver_end_step._id;
        newTrace.name = flow_ver_end_step.name;
        newTrace.start_date = now;
        newTrace.finish_date = now;
        newTrace.judge = "terminated";
        setObj.state = "completed";
        setObj.final_decision = "terminated";
        old_inbox_users = instance.inbox_users;
        old_cc_users = instance.cc_users;
        old_outbox_users = instance.outbox_users;
        tempUsers = new Array();

        _.each(instance_trace.approves, function (nft_approve) {
          tempUsers.push(nft_approve.user);
          return tempUsers.push(nft_approve.handler);
        });

        setObj.outbox_users = _.uniq(instance.outbox_users.concat(tempUsers));
        setObj.inbox_users = new Array();
        setObj.cc_users = new Array();
        setObj.modified = now;
        setObj.modified_by = current_user;
        traces.push(newTrace);
        setObj.traces = traces;
        setObj.current_step_name = flow_ver_end_step.name;
        setObj.current_step_auto_submit = false;
        r = db.instances.update({
          _id: instance_id
        }, {
          $set: setObj
        });

        if (r) {
          ins = uuflowManager.getInstance(instance_id);
          pushManager.send_instance_notification("submit_terminate_applicant", ins, terminate_reason, current_user_info);

          if (old_inbox_users) {
            _.each(_.uniq(old_inbox_users.concat(old_cc_users)), function (user_id) {
              return pushManager.send_message_to_specifyUser("terminate_approval", user_id);
            });
          }

          return pushManager.triggerWebhook(ins.flow, ins, {}, 'terminate', current_user, []);
        }
      }
    });

    pushManager.send_message_current_user(current_user_info);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {}
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_reassign.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_reassign.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/reassign', function (req, res, next) {
  var current_user, current_user_info, e, hashData;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;

    _.each(hashData['Instances'], function (instance_from_client) {
      var _users, approve_users_handlers, assignee_appr, current_space_user, current_user_organization, i, inbox_users, inbox_users_from_client, ins, instance, instance_id, last_trace, last_trace_from_client, new_inbox_users, not_in_inbox_users, now, permissions, r, reassign_reason, setObj, space, space_id;

      instance_id = instance_from_client['_id'];
      instance = uuflowManager.getInstance(instance_id);
      space_id = instance.space;
      uuflowManager.isInstancePending(instance);
      last_trace_from_client = _.last(instance_from_client["traces"]);
      last_trace = _.find(instance.traces, function (t) {
        return t._id === last_trace_from_client["_id"];
      });

      if (last_trace.is_finished === true) {
        return;
      }

      permissions = permissionManager.getFlowPermissions(instance.flow, current_user);
      space = db.spaces.findOne({
        _id: space_id
      }, {
        fields: {
          admins: 1
        }
      });

      if (!permissions.includes("admin") && !space.admins.includes(current_user)) {
        throw new Meteor.Error('error!', "用户没有对当前流程的管理权限");
      }

      inbox_users = instance.inbox_users;
      inbox_users_from_client = instance_from_client["inbox_users"];
      reassign_reason = instance_from_client["reassign_reason"];
      not_in_inbox_users = _.difference(inbox_users, inbox_users_from_client);
      new_inbox_users = _.difference(inbox_users_from_client, inbox_users);

      if (not_in_inbox_users.length === 0 && new_inbox_users.length === 0) {
        return;
      }

      setObj = new Object();
      now = new Date();
      i = 0;
      approve_users_handlers = [];

      while (i < last_trace.approves.length) {
        if (not_in_inbox_users.includes(last_trace.approves[i].handler)) {
          if (last_trace.approves[i].is_finished === false && last_trace.approves[i].type !== "cc" && last_trace.approves[i].type !== "distribute") {
            last_trace.approves[i].is_finished = true;
            last_trace.approves[i].finish_date = now;
            last_trace.approves[i].judge = "terminated";
            last_trace.approves[i].description = "";
            last_trace.approves[i].cost_time = last_trace.approves[i].finish_date - last_trace.approves[i].start_date;
            approve_users_handlers.push(last_trace.approves[i].user);
            approve_users_handlers.push(last_trace.approves[i].handler);
          }
        }

        i++;
      }

      current_space_user = uuflowManager.getSpaceUser(space_id, current_user);
      current_user_organization = db.organizations.findOne({
        _id: current_space_user.organization
      }, {
        fields: {
          name: 1,
          fullname: 1
        }
      });
      assignee_appr = new Object();
      assignee_appr._id = new Mongo.ObjectID()._str;
      assignee_appr.instance = last_trace.instance;
      assignee_appr.trace = last_trace._id;
      assignee_appr.is_finished = true;
      assignee_appr.user = current_user;
      assignee_appr.user_name = current_user_info.name;
      assignee_appr.handler = current_user;
      assignee_appr.handler_name = current_user_info.name;
      assignee_appr.handler_organization = current_space_user.organization;
      assignee_appr.handler_organization_name = current_user_organization.name;
      assignee_appr.handler_organization_fullname = current_user_organization.fullname;
      assignee_appr.start_date = now;
      assignee_appr.finish_date = now;
      assignee_appr.due_date = last_trace.due_date;
      assignee_appr.read_date = now;
      assignee_appr.judge = "reassigned";
      assignee_appr.is_read = true;
      assignee_appr.description = reassign_reason;
      assignee_appr.is_error = false;
      assignee_appr.values = new Object();
      assignee_appr.cost_time = assignee_appr.finish_date - assignee_appr.start_date;
      last_trace.approves.push(assignee_appr);

      _.each(new_inbox_users, function (user_id) {
        var agent, handler_id, handler_info, new_appr, new_user, space_user, user_organization;
        new_user = db.users.findOne(user_id, {
          fields: {
            name: 1
          }
        });
        space_user = uuflowManager.getSpaceUser(space_id, user_id);
        user_organization = db.organizations.findOne(space_user.organization, {
          fields: {
            name: 1,
            fullname: 1
          }
        });
        new_appr = new Object();
        new_appr._id = new Mongo.ObjectID()._str;
        new_appr.instance = last_trace.instance;
        new_appr.trace = last_trace._id;
        new_appr.is_finished = false;
        new_appr.user = user_id;
        new_appr.user_name = new_user.name;
        handler_id = user_id;
        handler_info = new_user;
        agent = uuflowManager.getAgent(space_id, user_id);

        if (agent) {
          inbox_users_from_client[inbox_users_from_client.indexOf(user_id)] = agent;
          handler_id = agent;
          handler_info = db.users.findOne({
            _id: agent
          }, {
            fields: {
              name: 1
            }
          });
          new_appr.agent = agent;
        }

        new_appr.handler = handler_id;
        new_appr.handler_name = handler_info.name;
        new_appr.handler_organization = space_user.organization;
        new_appr.handler_organization_name = user_organization.name;
        new_appr.handler_organization_fullname = user_organization.fullname;
        new_appr.from_user = current_user;
        new_appr.from_user_name = current_user_info.name;
        new_appr.type = "reassign";
        new_appr.start_date = now;
        new_appr.due_date = last_trace.due_date;
        new_appr.is_read = false;
        new_appr.is_error = false;
        new_appr.values = new Object();
        uuflowManager.setRemindInfo(instance.values, new_appr);
        return last_trace.approves.push(new_appr);
      });

      instance.outbox_users.push(current_user);
      instance.outbox_users = instance.outbox_users.concat(approve_users_handlers);
      setObj.outbox_users = _.uniq(instance.outbox_users);
      setObj.inbox_users = inbox_users_from_client;
      setObj.modified = now;
      setObj.modified_by = current_user;
      setObj["traces.$.approves"] = last_trace.approves;
      r = db.instances.update({
        _id: instance_id,
        "traces._id": last_trace._id
      }, {
        $set: setObj
      });

      if (r) {
        ins = uuflowManager.getInstance(instance_id);
        pushManager.send_message_current_user(current_user_info);

        _.each(not_in_inbox_users, function (user_id) {
          if (user_id !== current_user) {
            return pushManager.send_message_to_specifyUser("current_user", user_id);
          }
        });

        _users = new Array();

        _users.push(ins.applicant);

        _users.push(ins.submitter);

        _users = _.uniq(_users.concat(ins.outbox_users));

        _.each(_users, function (user_id) {
          return pushManager.send_message_to_specifyUser("current_user", user_id);
        });

        pushManager.send_instance_notification("reassign_new_inbox_users", ins, reassign_reason, current_user_info);
        return pushManager.triggerWebhook(ins.flow, ins, {}, 'reassign', current_user, ins.inbox_users);
      }
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {}
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_relocate.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_relocate.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/relocate', function (req, res, next) {
  var current_user, current_user_info, e, hashData;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;

    _.each(hashData['Instances'], function (instance_from_client) {
      var _users, ah, approve_users, current_setp, current_setp_type, current_space_user, current_user_organization, flow, h, i, inbox_users, ins, instance, instance_id, l, last_trace, newTrace, new_inbox_users, next_step, next_step_name, next_step_type, not_in_inbox_users, now, permissions, r, relocate_appr, relocate_comment, relocate_inbox_users, relocate_next_step, sameTraces, setObj, signShowApproveId, space, space_id, ta, ti, traces;

      instance = uuflowManager.getInstance(instance_from_client["_id"]);
      last_trace = _.last(instance.traces);
      permissions = permissionManager.getFlowPermissions(instance.flow, current_user);
      space = db.spaces.findOne(instance.space, {
        fields: {
          admins: 1
        }
      });

      if (!permissions.includes("admin") && !space.admins.includes(current_user)) {
        throw new Meteor.Error('error!', "用户没有对当前流程的管理权限");
      }

      space_id = instance.space;
      instance_id = last_trace.instance;
      inbox_users = instance.inbox_users;
      relocate_inbox_users = instance_from_client["relocate_inbox_users"];
      relocate_comment = instance_from_client["relocate_comment"];
      relocate_next_step = instance_from_client["relocate_next_step"];
      not_in_inbox_users = _.difference(inbox_users, relocate_inbox_users);
      new_inbox_users = _.difference(relocate_inbox_users, inbox_users);
      approve_users = [];
      flow = uuflowManager.getFlow(instance.flow);
      next_step = uuflowManager.getStep(instance, flow, relocate_next_step);
      next_step_type = next_step.step_type;
      next_step_name = next_step.name;
      current_setp = uuflowManager.getStep(instance, flow, last_trace.step);
      current_setp_type = current_setp.step_type;
      traces = instance.traces;
      setObj = new Object();
      setObj.values = uuflowManager.getUpdatedValues(instance);
      now = new Date();
      i = 0;

      while (i < traces.length) {
        if (traces[i]._id === last_trace._id) {
          if (!traces[i].approves) {
            traces[i].approves = new Array();
          }

          h = 0;

          while (h < traces[i].approves.length) {
            if (traces[i].approves[h].is_finished === false && traces[i].approves[h].type !== "cc" && traces[i].approves[h].type !== "distribute") {
              traces[i].approves[h].start_date = now;
              traces[i].approves[h].finish_date = now;
              traces[i].approves[h].read_date = now;
              traces[i].approves[h].is_error = false;
              traces[i].approves[h].is_read = true;
              traces[i].approves[h].is_finished = true;
              traces[i].approves[h].judge = "terminated";
              traces[i].approves[h].cost_time = traces[i].approves[h].finish_date - traces[i].approves[h].start_date;
              approve_users.push(traces[i].approves[h].user);

              if (traces[i].approves[h].sign_show === true) {
                ta = traces[i].approves[h];
                sameTraces = _.filter(traces, function (t) {
                  return t.step === traces[i].step;
                });
                l = sameTraces.length - 1;
                signShowApproveId = null;

                while (l > -1) {
                  _.each(sameTraces[l].approves, function (a) {
                    if (a.user === ta.user && a.judge !== "terminated" && a.description && !signShowApproveId) {
                      return signShowApproveId = a._id;
                    }
                  });

                  l--;
                }

                if (signShowApproveId) {
                  ti = 0;

                  while (ti < traces.length) {
                    ah = 0;

                    while (ah < traces[ti].approves.length) {
                      if (traces[ti].approves[ah]._id === signShowApproveId) {
                        traces[ti].approves[ah].sign_show = true;
                        traces[i].approves[h].sign_show = false;
                      }

                      ah++;
                    }

                    ti++;
                  }
                }
              }
            }

            h++;
          }

          current_space_user = uuflowManager.getSpaceUser(space_id, current_user);
          current_user_organization = db.organizations.findOne(current_space_user.organization, {
            fields: {
              name: 1,
              fullname: 1
            }
          });
          relocate_appr = new Object();
          relocate_appr._id = new Mongo.ObjectID()._str;
          relocate_appr.instance = instance_id;
          relocate_appr.trace = traces[i]._id;
          relocate_appr.is_finished = true;
          relocate_appr.user = current_user;
          relocate_appr.user_name = current_user_info.name;
          relocate_appr.handler = current_user;
          relocate_appr.handler_name = current_user_info.name;
          relocate_appr.handler_organization = current_space_user.organization;
          relocate_appr.handler_organization_name = current_user_organization.name;
          relocate_appr.handler_organization_fullname = current_user_organization.fullname;
          relocate_appr.start_date = now;
          relocate_appr.finish_date = now;
          relocate_appr.due_date = traces[i].due_date;
          relocate_appr.read_date = now;
          relocate_appr.judge = "relocated";
          relocate_appr.is_read = true;
          relocate_appr.description = relocate_comment;
          relocate_appr.is_error = false;
          relocate_appr.values = new Object();
          relocate_appr.cost_time = relocate_appr.finish_date - relocate_appr.start_date;
          traces[i].approves.push(relocate_appr);
          traces[i].is_finished = true;
          traces[i].finish_date = now;
          traces[i].judge = "relocated";
        }

        i++;
      }

      if (next_step_type === "end") {
        newTrace = new Object();
        newTrace._id = new Mongo.ObjectID()._str;
        newTrace.instance = instance_id;
        newTrace.previous_trace_ids = [last_trace._id];
        newTrace.is_finished = true;
        newTrace.step = relocate_next_step;
        newTrace.name = next_step_name;
        newTrace.start_date = now;
        newTrace.finish_date = now;
        newTrace.approves = [];
        setObj.state = "completed";
        setObj.inbox_users = [];
        setObj.final_decision = "terminated";
        setObj.finish_date = new Date();
        setObj.current_step_name = next_step_name;
        setObj.current_step_auto_submit = false;
      } else {
        newTrace = new Object();
        newTrace._id = new Mongo.ObjectID()._str;
        newTrace.instance = instance_id;
        newTrace.previous_trace_ids = [last_trace._id];
        newTrace.is_finished = false;
        newTrace.step = relocate_next_step;
        newTrace.name = next_step_name;
        newTrace.start_date = now;
        newTrace.due_date = uuflowManager.getDueDate(next_step.timeout_hours);
        newTrace.approves = [];

        _.each(relocate_inbox_users, function (next_step_user_id, idx) {
          var agent, handler_id, handler_info, newApprove, next_step_space_user, next_step_user_org_info, user_info;
          newApprove = new Object();
          newApprove._id = new Mongo.ObjectID()._str;
          newApprove.instance = instance_id;
          newApprove.trace = newTrace._id;
          newApprove.is_finished = false;
          newApprove.user = next_step_user_id;
          user_info = db.users.findOne(next_step_user_id, {
            fields: {
              name: 1
            }
          });
          newApprove.user_name = user_info.name;
          handler_id = next_step_user_id;
          handler_info = user_info;
          agent = uuflowManager.getAgent(space_id, next_step_user_id);

          if (agent) {
            relocate_inbox_users[idx] = agent;
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
          next_step_space_user = uuflowManager.getSpaceUser(space_id, handler_id);
          next_step_user_org_info = uuflowManager.getSpaceUserOrgInfo(next_step_space_user);
          newApprove.handler_organization = next_step_user_org_info["organization"];
          newApprove.handler_organization_name = next_step_user_org_info["organization_name"];
          newApprove.handler_organization_fullname = next_step_user_org_info["organization_fullname"];
          newApprove.start_date = now;
          newApprove.due_date = newTrace.due_date;
          newApprove.is_read = false;
          newApprove.is_error = false;
          newApprove.values = new Object();
          uuflowManager.setRemindInfo(instance.values, newApprove);
          return newTrace.approves.push(newApprove);
        });

        setObj.inbox_users = relocate_inbox_users;
        setObj.state = "pending";
        setObj.current_step_name = next_step_name;
        setObj.current_step_auto_submit = uuflowManager.getCurrentStepAutoSubmit(flow.timeout_auto_submit, next_step.lines);
      }

      instance.outbox_users.push(current_user);
      instance.outbox_users = instance.outbox_users.concat(inbox_users).concat(approve_users);
      setObj.outbox_users = _.uniq(instance.outbox_users);
      setObj.modified = now;
      setObj.modified_by = current_user;
      setObj.is_archived = false;
      traces.push(newTrace);
      setObj.traces = traces;

      if (setObj.state === 'completed') {
        r = db.instances.update({
          _id: instance_id
        }, {
          $set: setObj
        });
      } else {
        r = db.instances.update({
          _id: instance_id
        }, {
          $set: setObj,
          $unset: {
            finish_date: 1
          }
        });
      }

      if (r) {
        ins = uuflowManager.getInstance(instance_id);
        pushManager.send_message_current_user(current_user_info);

        _.each(not_in_inbox_users, function (user_id) {
          if (user_id !== current_user) {
            return pushManager.send_message_to_specifyUser("current_user", user_id);
          }
        });

        _users = new Array();

        _users.push(ins.applicant);

        _users.push(ins.submitter);

        _users = _.uniq(_users.concat(ins.outbox_users));

        _.each(_users, function (user_id) {
          return pushManager.send_message_to_specifyUser("current_user", user_id);
        });

        pushManager.send_instance_notification("reassign_new_inbox_users", ins, relocate_comment, current_user_info);
        return pushManager.triggerWebhook(ins.flow, ins, {}, 'relocate', current_user, ins.inbox_users);
      }
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {}
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_archive.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_archive.coffee                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/archive', function (req, res, next) {
  var current_user, current_user_info, e, hashData;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;

    _.each(hashData['Instances'], function (instance_from_client) {
      var instance, instance_id, setObj, space, space_id, space_user;
      instance_id = instance_from_client["_id"];
      instance = uuflowManager.getInstance(instance_id);
      space_id = instance.space;
      space = uuflowManager.getSpace(space_id);
      uuflowManager.isInstanceFinishedAndNotArchieved(instance);
      space_user = uuflowManager.getSpaceUser(space_id, current_user);
      uuflowManager.isInstanceSubmitterOrApplicantOrSpaceAdmin(instance, current_user, space);
      setObj = new Object();
      setObj.is_archived = true;
      setObj.modified = new Date();
      setObj.modified_by = current_user;
      return db.instances.update({
        _id: instance_id
      }, {
        $set: setObj
      });
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {}
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_export.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_export.coffee                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.startup(function () {
  return WebApp.connectHandlers.use("/api/workflow/export/instances", function (req, res, next) {
    var current_user_info, e, ejs, ejsLint, end_date, error_obj, fields, fileName, flow, flow_id, form, form_name, ins_to_xls, lang, last_month_date, now, query, ret, space_id, start_date, str, table_fields, template, timezoneoffset, type;

    try {
      current_user_info = uuflowManager.check_authorization(req);
      query = req.query;
      space_id = query.space_id;
      flow_id = query.flow_id;
      type = parseInt(query.type);
      timezoneoffset = parseInt(query.timezoneoffset);
      flow = db.flows.findOne({
        _id: flow_id
      }, {
        fields: {
          form: 1
        }
      });
      form = db.forms.findOne({
        _id: flow.form
      }, {
        fields: {
          name: 1,
          'current.fields': 1
        }
      });
      form_name = form.name;
      fields = form.current.fields;
      table_fields = new Array();

      _.each(form.current.fields, function (field) {
        if (field.type === "table") {
          return table_fields.push(field);
        }
      });

      ins_to_xls = new Array();
      start_date = null;
      end_date = null;
      now = new Date();

      if (type === 0) {
        start_date = new Date(now.getFullYear(), now.getMonth(), 1);
        ins_to_xls = db.instances.find({
          space: space_id,
          flow: flow_id,
          state: {
            $ne: "draft"
          },
          submit_date: {
            $gte: start_date
          }
        }, {
          sort: {
            submit_date: 1
          }
        }).fetch();
      } else if (type === 1) {
        last_month_date = new Date(new Date(now.getFullYear(), now.getMonth(), 1) - 1000 * 60 * 60 * 24);
        start_date = new Date(last_month_date.getFullYear(), last_month_date.getMonth(), 1);
        end_date = new Date(now.getFullYear(), now.getMonth(), 1);
        ins_to_xls = db.instances.find({
          space: space_id,
          flow: flow_id,
          state: {
            $ne: "draft"
          },
          $and: [{
            submit_date: {
              $gte: start_date
            }
          }, {
            submit_date: {
              $lte: end_date
            }
          }]
        }, {
          sort: {
            submit_date: 1
          }
        }).fetch();
      } else if (type === 2) {
        start_date = new Date(now.getFullYear(), 0, 1);
        ins_to_xls = db.instances.find({
          space: space_id,
          flow: flow_id,
          state: {
            $ne: "draft"
          },
          submit_date: {
            $gte: start_date
          }
        }, {
          sort: {
            submit_date: 1
          }
        }).fetch();
      } else if (type === 3) {
        ins_to_xls = db.instances.find({
          space: space_id,
          flow: flow_id,
          state: {
            $ne: "draft"
          }
        }, {
          sort: {
            submit_date: 1
          }
        }).fetch();
      }

      ejs = require('ejs');
      str = Assets.getText('server/ejs/export_instances.ejs');
      ejsLint = require('ejs-lint');
      error_obj = ejsLint.lint(str, {});

      if (error_obj) {
        console.error("===/api/workflow/export:");
        console.error(error_obj);
      }

      template = ejs.compile(str);
      lang = 'en';

      if (current_user_info.locale === 'zh-cn') {
        lang = 'zh-CN';
      }

      ret = template({
        lang: lang,
        timezoneoffset: timezoneoffset,
        form_name: form_name,
        fields: fields,
        table_fields: table_fields,
        ins_to_xls: ins_to_xls
      });
      fileName = "SteedOSWorkflow_" + moment().format('YYYYMMDDHHmm') + ".xls";
      res.setHeader("Content-type", "application/octet-stream");
      res.setHeader("Content-Disposition", "attachment;filename=" + encodeURI(fileName));
      return res.end(ret);
    } catch (error) {
      e = error;
      console.error(e.stack);
      return res.end(e.message);
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_space_changeset.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_space_changeset.coffee                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('get', '/uf/space/changeset', function (req, res, next) {
  var auth_token, data, e, formids, is_admin, query, sync_token;

  try {
    query = req.query;
    auth_token = db.auth_tokens.findOne({
      auth_token: query.auth_token
    });

    if (!auth_token || !auth_token.enabled) {
      throw new Meteor.Error(401, 'Unauthorized');
    }

    sync_token = query["sync_token"];
    formids = query["formids"];
    is_admin = query["is_admin"];
    data = uuflowManager.get_SpaceChangeSet(formids, is_admin, sync_token);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: data
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_retrieve.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_retrieve.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/retrieve', function (req, res, next) {
  var current_user, current_user_info, e, hashData;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user = current_user_info._id;
    hashData = req.body;

    _.each(hashData['Instances'], function (instance_from_client) {
      var cc_users, flow, handler_info, i, ins, instance, instance_id, last_trace, last_trace_id, newApprove, newTrace, now, old_inbox_users, org_info, previous_step, previous_trace, previous_trace_approves, previous_trace_id, previous_trace_name, previous_trace_step_id, r, retrieve_approve, retrieve_comment, retrieve_type, setObj, space_id, space_user, the_trace, traces;
      instance = uuflowManager.getInstance(instance_from_client["_id"]);
      retrieve_comment = instance_from_client['retrieve_comment'];

      if (!instance.outbox_users.includes(current_user) && instance.submitter !== current_user && instance.applicant !== current_user) {
        throw new Meteor.Error('error', '当前用户不符合取回条件');
      }

      retrieve_type = "";
      traces = instance.traces;
      last_trace = _.last(traces);
      last_trace_id = last_trace._id;
      previous_trace_id = last_trace.previous_trace_ids[0];
      previous_trace = _.find(traces, function (t) {
        return t._id === previous_trace_id;
      });
      previous_trace_step_id = previous_trace.step;
      previous_trace_name = previous_trace.name;
      flow = uuflowManager.getFlow(instance.flow);
      previous_step = uuflowManager.getStep(instance, flow, previous_trace_step_id);

      if (previous_step.step_type === "counterSign") {
        throw new Meteor.Error('error', '会签不能取回');
      }

      previous_trace_approves = _.filter(previous_trace.approves, function (a) {
        return a.type !== 'cc' && a.type !== 'distribute' && a.type !== 'forward' && ['approved', 'submitted', 'rejected'].includes(a.judge);
      });

      if (previous_trace_approves.length === 1 && (previous_trace_approves[0].user === current_user || previous_trace_approves[0].handler === current_user)) {
        retrieve_type = 'normal';
      }

      i = traces.length;
      retrieve_approve = {};

      while (i > 0) {
        _.each(traces[i - 1].approves, function (a) {
          if (a.type === 'cc' && a.is_finished === true && a.user === current_user) {
            retrieve_type = 'cc';
            return retrieve_approve = a;
          }
        });

        if (retrieve_type === 'cc') {
          break;
        }

        i--;
      }

      if (retrieve_type === 'normal') {
        flow = uuflowManager.getFlow(instance.flow);
        previous_step = uuflowManager.getStep(instance, flow, previous_trace_step_id);
        space_id = instance.space;
        instance_id = instance._id;
        old_inbox_users = instance.inbox_users;
        setObj = new Object();
        now = new Date();

        _.each(traces, function (t) {
          var current_space_user, current_user_organization, retrieve_appr;

          if (t._id === last_trace_id) {
            if (!t.approves) {
              t.approves = new Array();
            }

            _.each(t.approves, function (appr) {
              if (appr.is_finished === false && appr.type !== "cc") {
                appr.start_date = now;
                appr.finish_date = now;
                appr.read_date = now;
                appr.is_error = false;
                appr.is_read = true;
                appr.is_finished = true;
                appr.judge = "terminated";
                return appr.cost_time = appr.finish_date - appr.start_date;
              }
            });

            current_space_user = uuflowManager.getSpaceUser(space_id, current_user);
            current_user_organization = db.organizations.findOne(current_space_user.organization, {
              fields: {
                name: 1,
                fullname: 1
              }
            });
            retrieve_appr = new Object();
            retrieve_appr._id = new Mongo.ObjectID()._str;
            retrieve_appr.instance = instance_id;
            retrieve_appr.trace = t._id;
            retrieve_appr.is_finished = true;
            retrieve_appr.user = current_user;
            retrieve_appr.user_name = current_user_info.name;
            retrieve_appr.handler = current_user;
            retrieve_appr.handler_name = current_user_info.name;
            retrieve_appr.handler_organization = current_space_user.organization;
            retrieve_appr.handler_organization_name = current_user_organization.name;
            retrieve_appr.handler_organization_fullname = current_user_organization.fullname;
            retrieve_appr.start_date = now;
            retrieve_appr.finish_date = now;
            retrieve_appr.due_date = t.due_date;
            retrieve_appr.read_date = now;
            retrieve_appr.judge = "retrieved";
            retrieve_appr.is_read = true;
            retrieve_appr.description = retrieve_comment;
            retrieve_appr.is_error = false;
            retrieve_appr.values = new Object();
            retrieve_appr.cost_time = retrieve_appr.finish_date - retrieve_appr.start_date;
            t.approves.push(retrieve_appr);
            t.is_finished = true;
            t.finish_date = now;
            return t.judge = "retrieved";
          }
        });

        newTrace = new Object();
        newTrace._id = new Mongo.ObjectID()._str;
        newTrace.instance = instance_id;
        newTrace.previous_trace_ids = [last_trace_id];
        newTrace.is_finished = false;
        newTrace.step = previous_trace_step_id;
        newTrace.name = previous_trace_name;
        newTrace.start_date = now;
        newTrace.due_date = uuflowManager.getDueDate(previous_step.timeout_hours);
        newTrace.approves = [];
        newApprove = new Object();
        newApprove._id = new Mongo.ObjectID()._str;
        newApprove.instance = instance_id;
        newApprove.trace = newTrace._id;
        newApprove.is_finished = false;
        newApprove.user = current_user;
        handler_info = db.users.findOne(current_user, {
          fields: {
            name: 1
          }
        });
        newApprove.user_name = handler_info.name;
        newApprove.handler = current_user;
        newApprove.handler_name = handler_info.name;
        space_user = uuflowManager.getSpaceUser(space_id, current_user);
        org_info = uuflowManager.getSpaceUserOrgInfo(space_user);
        newApprove.handler_organization = org_info["organization"];
        newApprove.handler_organization_name = org_info["organization_name"];
        newApprove.handler_organization_fullname = org_info["organization_fullname"];
        newApprove.start_date = now;
        newApprove.due_date = newTrace.due_date;
        newApprove.is_read = false;
        newApprove.is_error = false;
        newApprove.values = new Object();
        uuflowManager.setRemindInfo(instance.values, newApprove);
        newTrace.approves.push(newApprove);
        setObj.inbox_users = [current_user];
        setObj.modified = now;
        setObj.modified_by = current_user;
        traces.push(newTrace);
        setObj.traces = traces;
        setObj.state = "pending";
        setObj.is_archived = false;
        setObj.current_step_name = previous_trace_name;
        setObj.current_step_auto_submit = uuflowManager.getCurrentStepAutoSubmit(flow.timeout_auto_submit, previous_step.lines);
        r = db.instances.update({
          _id: instance_id
        }, {
          $set: setObj
        });

        if (r) {
          pushManager.send_message_current_user(current_user_info);

          _.each(old_inbox_users, function (user_id) {
            if (user_id !== current_user) {
              return pushManager.send_message_to_specifyUser("current_user", user_id);
            }
          });

          ins = uuflowManager.getInstance(instance_id);
          return pushManager.triggerWebhook(ins.flow, ins, {}, 'retrieve', current_user, ins.inbox_users);
        }
      } else if (retrieve_type === 'cc') {
        setObj = new Object();
        now = new Date();
        instance_id = instance._id;
        the_trace = _.find(traces, function (t) {
          return t._id === retrieve_approve.trace;
        });

        _.each(the_trace.approves, function (a) {
          if (a._id === retrieve_approve._id) {
            a.is_finished = false;
            a.finish_date = void 0;
            a.judge = void 0;
            return a.cost_time = void 0;
          }
        });

        cc_users = instance.cc_users;
        cc_users.push(current_user);
        setObj.modified = now;
        setObj.modified_by = current_user;
        setObj.state = "pending";
        setObj.is_archived = false;
        setObj.cc_users = cc_users;
        setObj['traces.$.approves'] = the_trace.approves;
        r = db.instances.update({
          _id: instance_id,
          'traces._id': retrieve_approve.trace
        }, {
          $set: setObj
        });

        if (r) {
          pushManager.send_message_current_user(current_user_info);
        }

        ins = uuflowManager.getInstance(instance_id);
        return pushManager.triggerWebhook(ins.flow, ins, {}, 'retrieve', current_user, [current_user]);
      }
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {}
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_forward.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_forward.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
JsonRoutes.add('post', '/api/workflow/forward', function (req, res, next) {
  try {
    var current_user_info = uuflowManager.check_authorization(req);
    var current_user_id = current_user_info._id;
    var hashData = req.body;
    var instance_id = hashData.instance_id;
    var space_id = hashData.space_id;
    var flow_id = hashData.flow_id;
    var hasSaveInstanceToAttachment = hashData.hasSaveInstanceToAttachment;
    var description = hashData.description;
    var isForwardAttachments = hashData.isForwardAttachments;
    var selectedUsers = hashData.selectedUsers;
    var action_type = hashData.action_type;
    var related = hashData.related;
    var from_approve_id = hashData.from_approve_id;
    check(instance_id, String);
    check(space_id, String);
    check(flow_id, String);
    check(hasSaveInstanceToAttachment, Boolean);
    check(description, String);
    check(isForwardAttachments, Boolean);
    check(selectedUsers, Array);
    check(action_type, Match.OneOf('forward', 'distribute'));
    if (action_type == "distribute") check(from_approve_id, String);
    var ins = db.instances.findOne(instance_id);
    var old_space_id = ins.space;
    var flow = db.flows.findOne(flow_id);
    var space = db.spaces.findOne(space_id);

    if (!ins || !flow || !space) {
      throw new Meteor.Error('params error!', 'record not exists!');
    }

    var forward_users = new Array();

    if (_.isEmpty(selectedUsers)) {
      forward_users = [current_user_id];
    } else {
      forward_users = selectedUsers;
    } // 校验分发对象是否有分发流程的提交权限


    var no_permission_user_ids = new Array();

    _.each(forward_users, function (uid) {
      var permissions = permissionManager.getFlowPermissions(flow_id, uid);

      if (!permissions.includes("add")) {
        // throw new Meteor.Error('error!', "该申请人没有提交此申请单的权限。")
        no_permission_user_ids.push(uid);
      }
    });

    if (!_.isEmpty(no_permission_user_ids)) {
      var no_permission_users_name = new Array();
      db.users.find({
        _id: {
          $in: no_permission_user_ids
        }
      }, {
        fields: {
          name: 1
        }
      }).forEach(function (u) {
        no_permission_users_name.push(u.name);
      });
      throw new Meteor.Error('no_permission', "该提交人没有提交此申请单的权限。", no_permission_users_name.join(','));
    }

    var new_ins_ids = new Array();
    var current_trace = null;

    if (action_type == "distribute") {
      _.each(ins.traces, function (t) {
        if (!current_trace) {
          _.each(t.approves, function (a) {
            if (!current_trace) {
              if (a._id == from_approve_id) current_trace = t;
            }
          });
        }
      });
    } else {
      current_trace = _.last(ins.traces);
    }

    var current_trace_id = current_trace._id;
    var forward_approves = [];
    var from_user_name = db.users.findOne(current_user_id, {
      fields: {
        name: 1
      }
    }).name;
    var set_obj = new Object(); // 计算values

    var old_values = ins.values,
        new_values = {};
    var form = db.forms.findOne(flow.form);
    var fields = form.current.fields || [];
    var old_form = db.forms.findOne(ins.form);
    var old_form_version = ins.form_version,
        old_fields = [],
        common_fields = [];
    var select_to_input_fields = [];

    if (old_form.current._id == old_form_version) {
      old_fields = old_form.current.fields;
    } else {
      if (old_form.historys) {
        old_form.historys.forEach(function (h) {
          if (h._id == old_form_version) old_fields = h.fields;
        });
      }
    }

    fields.forEach(function (field) {
      var exists_field = _.find(old_fields, function (f) {
        return f.type == field.type && f.code == field.code;
      });

      if (exists_field) common_fields.push(field);

      var select_input_field = _.find(old_fields, function (f) {
        return f.type == 'select' && field.type == 'input' && f.code == field.code;
      });

      if (select_input_field) select_to_input_fields.push(select_input_field);
    });
    select_to_input_fields.forEach(function (field) {
      if (old_values[field.code]) {
        new_values[field.code] = old_values[field.code];
      }
    });
    common_fields.forEach(function (field) {
      if (field.type == 'section') {
        if (field.fields) {
          field.fields.forEach(function (f) {
            // 跨工作区转发不复制选人选组
            if (['group', 'user'].includes(f.type) && old_space_id != space_id) {
              return;
            }

            var key = f.code;
            var old_v = old_values[key];

            if (old_v) {
              // 校验 单选，多选，下拉框 字段值是否在新表单对应字段的可选值范围内
              if (f.type == 'select' || f.type == 'radio') {
                var options = f.options.split('\n');
                if (!options.includes(old_v)) return;
              }

              if (f.type == 'multiSelect') {
                var options = f.options.split('\n');
                var old_multiSelected = old_v.split(',');

                var new_multiSelected = _.intersection(options, old_multiSelected);

                old_v = new_multiSelected.join(',');
              }

              new_values[key] = old_v;
            }
          });
        }
      } else if (field.type == 'table') {
        if (!_.isEmpty(old_values[field.code])) {
          new_values[field.code] = new Array();
          old_values[field.code].forEach(function (old_table_row_values) {
            var new_table_row_values = {};

            if (!_.isEmpty(field.fields)) {
              field.fields.forEach(function (f) {
                // 跨工作区转发不复制选人选组
                if (['group', 'user'].includes(f.type) && old_space_id != space_id) {
                  return;
                }

                var key = f.code;
                var old_v = old_table_row_values[key];

                if (old_v) {
                  // 校验 单选，多选，下拉框 字段值是否在新表单对应字段的可选值范围内
                  if (f.type == 'select' || f.type == 'radio') {
                    var options = f.options.split('\n');
                    if (!options.includes(old_v)) return;
                  }

                  if (f.type == 'multiSelect') {
                    var options = f.options.split('\n');
                    var old_multiSelected = old_v.split(',');

                    var new_multiSelected = _.intersection(options, old_multiSelected);

                    old_v = new_multiSelected.join(',');
                  }

                  new_table_row_values[key] = old_v;
                }
              });
            }

            if (!_.isEmpty(new_table_row_values)) {
              new_values[field.code].push(new_table_row_values);
            }
          });
        }
      } else {
        // 跨工作区转发不复制选人选组
        if (['group', 'user'].includes(field.type) && old_space_id != space_id) {
          return;
        }

        var key = field.code;
        var old_v = old_values[key];

        if (old_v) {
          // 校验 单选，多选，下拉框 字段值是否在新表单对应字段的可选值范围内
          if (field.type == 'select' || field.type == 'radio') {
            var options = field.options.split('\n');
            if (!options.includes(old_v)) return;
          }

          if (field.type == 'multiSelect') {
            var options = field.options.split('\n');
            var old_multiSelected = old_v.split(',');

            var new_multiSelected = _.intersection(options, old_multiSelected);

            old_v = new_multiSelected.join(',');
          }

          new_values[key] = old_v;
        }
      }
    }); //如果是分发，则value中的record_need、FONDSID不需要分发到新申请单中

    if (action_type === 'distribute') {
      delete new_values.record_need;
      delete new_values.FONDSID;
    } // 计算申请单标题


    var instance_name = "";
    var name_forumla = form.current.name_forumla;

    if (name_forumla) {
      var iscript = name_forumla.replace(/\{/g, "(new_values['").replace(/\}/g, "'] || '')");
      var rev = eval(iscript);
      instance_name = rev || flow.name;
    } else {
      instance_name = flow.name;
    } // instance中记录当前步骤名称 #1314


    var start_step = _.find(flow.current.steps, function (step) {
      return step.step_type == 'start';
    }); // 新建申请单时，instances记录流程名称、流程分类名称 #1313


    var category_name = "";

    if (form.category) {
      var category = uuflowManager.getCategory(form.category);
      if (category) category_name = category.name;
    }

    _.each(forward_users, function (user_id) {
      var user_info = db.users.findOne(user_id);
      var space_user = db.space_users.findOne({
        space: space_id,
        user: user_id
      }, {
        fields: {
          organization: 1
        }
      });
      var space_user_org_info = db.organizations.findOne({
        _id: space_user.organization
      }, {
        fields: {
          name: 1,
          fullname: 1
        }
      });
      var now = new Date();
      var ins_obj = {};
      var agent = uuflowManager.getAgent(space_id, user_id);
      var handler_id = user_id;
      var handler_info = user_info;
      var handler_space_user = space_user;
      var handler_org_info = space_user_org_info;

      if (agent) {
        handler_id = agent;
        handler_info = db.users.findOne(agent);
        handler_space_user = uuflowManager.getSpaceUser(space_id, agent);
        handler_org_info = uuflowManager.getSpaceUserOrgInfo(handler_space_user);
      }

      ins_obj._id = db.instances._makeNewID();
      ins_obj.space = space_id;
      ins_obj.flow = flow_id;
      ins_obj.flow_version = flow.current._id;
      ins_obj.form = flow.form;
      ins_obj.form_version = flow.current.form_version;
      ins_obj.name = instance_name;
      ins_obj.submitter = handler_id;
      ins_obj.submitter_name = handler_info.name;
      ins_obj.applicant = user_id;
      ins_obj.applicant_name = user_info.name;
      ins_obj.applicant_organization = space_user.organization;
      ins_obj.applicant_organization_name = space_user_org_info.name;
      ins_obj.applicant_organization_fullname = space_user_org_info.fullname;
      ins_obj.state = "draft";
      ins_obj.code = "";
      ins_obj.is_archived = false;
      ins_obj.is_deleted = false;
      ins_obj.created = now;
      ins_obj.created_by = current_user_id;
      ins_obj.modified = now;
      ins_obj.modified_by = current_user_id;
      ins_obj.inbox_users = [handler_id];
      ins_obj.values = new_values;

      if (action_type == 'distribute') {
        // 解决多次分发看不到正文、附件问题
        if (ins.distribute_from_instance) {
          ins_obj.distribute_from_instance = ins.distribute_from_instance;
        } else {
          ins_obj.distribute_from_instance = instance_id;
        }

        ins_obj.distribute_from_instances = _.clone(ins.distribute_from_instances) || [];
        ins_obj.distribute_from_instances.push(instance_id);

        if (related) {
          ins_obj.related_instances = [instance_id];
        }
      } else if (action_type == 'forward') {
        ins_obj.forward_from_instance = instance_id;
      } // 新建Trace


      var trace_obj = {};
      trace_obj._id = new Mongo.ObjectID()._str;
      trace_obj.instance = ins_obj._id;
      trace_obj.is_finished = false; // 当前最新版flow中开始节点的step_id

      var step_id, step_name, can_edit_main_attach, can_edit_normal_attach;
      flow.current.steps.forEach(function (step) {
        if (step.step_type == "start") {
          step_id = step._id;
          step_name = step.name;
          can_edit_main_attach = step.can_edit_main_attach;
          can_edit_normal_attach = step.can_edit_normal_attach;
        }
      });
      trace_obj.step = step_id;
      trace_obj.start_date = now;
      trace_obj.name = step_name; // 新建Approve

      var appr_obj = {};
      appr_obj._id = new Mongo.ObjectID()._str;
      appr_obj.instance = ins_obj._id;
      appr_obj.trace = trace_obj._id;
      appr_obj.is_finished = false;
      appr_obj.user = user_id;
      appr_obj.user_name = user_info.name;
      appr_obj.handler = handler_id;
      appr_obj.handler_name = handler_info.name;
      appr_obj.handler_organization = handler_space_user.organization;
      appr_obj.handler_organization_name = handler_org_info.name;
      appr_obj.handler_organization_fullname = handler_org_info.fullname;
      appr_obj.type = "draft";
      appr_obj.start_date = now;
      appr_obj.read_date = now;
      appr_obj.is_read = false;
      appr_obj.is_error = false;
      appr_obj.values = new_values;

      if (agent) {
        appr_obj.agent = agent;
      }

      trace_obj.approves = [appr_obj];
      ins_obj.traces = [trace_obj];
      if (flow.auto_remind == true) ins_obj.auto_remind = true;
      ins_obj.current_step_name = start_step.name;
      ins_obj.flow_name = flow.name;
      if (category_name) ins_obj.category_name = category.name;
      ins_obj.category = category._id;
      new_ins_id = db.instances.insert(ins_obj); // 复制附件

      var collection = cfs.instances; //将原表单内容存储为第一个附件

      if (hasSaveInstanceToAttachment) {
        // try {
        instanceHtml = InstanceReadOnlyTemplate.getInstanceHtml(user_info, space_id, ins, {
          absolute: true
        });
        var instanceFile = new FS.File();
        instanceFile.attachData(Buffer.from(instanceHtml, "utf-8"), {
          type: "text/html"
        }, function (error) {
          if (error) {
            throw new Meteor.Error(error.error, error.reason);
          }

          instanceFile.name(ins.name + ".html");
          instanceFile.size(instanceHtml.length);
          var metadata = {
            owner: user_id,
            owner_name: user_info.name,
            space: space_id,
            instance: new_ins_id,
            approve: appr_obj._id,
            current: true
          };
          instanceFile.metadata = metadata;
          var fileObj = collection.insert(instanceFile);
          fileObj.update({
            $set: {
              'metadata.parent': fileObj._id
            }
          });
        }); // } catch (e) {
        //     console.error(e);
        // }
      }

      if (isForwardAttachments && action_type == 'forward') {
        var files = collection.find({
          'metadata.instance': instance_id,
          'metadata.current': true
        });
        files.forEach(function (f) {
          // 判断新的流程开始节点是否有编辑正文和编辑附件权限
          if (f.metadata.main == true) {
            if (can_edit_main_attach != true && can_edit_normal_attach != true) return;
          } else {
            if (can_edit_normal_attach != true) return;
          }

          var newFile = new FS.File();
          newFile.attachData(f.createReadStream('instances'), {
            type: f.original.type
          }, function (err) {
            if (err) {
              throw new Meteor.Error(err.error, err.reason);
            }

            newFile.name(f.name());
            newFile.size(f.size());
            var metadata = {
              owner: user_id,
              owner_name: user_info.name,
              space: space_id,
              instance: new_ins_id,
              approve: appr_obj._id,
              current: true
            };

            if (f.metadata.main == true && can_edit_main_attach == true) {
              metadata.main = true;
            }

            newFile.metadata = metadata;
            var fileObj = collection.insert(newFile);
            fileObj.update({
              $set: {
                'metadata.parent': fileObj._id
              }
            });
          });
        });
      } // 给当前的申请单增加转发记录


      var appr = {
        '_id': new Mongo.ObjectID()._str,
        'instance': instance_id,
        'trace': current_trace_id,
        'is_finished': true,
        'user': user_id,
        'user_name': user_info.name,
        'handler': user_id,
        'handler_name': user_info.name,
        'handler_organization': space_user.organization,
        'handler_organization_name': space_user_org_info.name,
        'handler_organization_fullname': space_user_org_info.fullname,
        'type': action_type,
        'start_date': new Date(),
        'finish_date': new Date(),
        'is_read': false,
        'judge': 'submitted',
        'from_user': current_user_id,
        'from_user_name': from_user_name,
        'forward_space': space_id,
        'forward_instance': new_ins_id,
        'description': description,
        'from_approve_id': from_approve_id
      };
      forward_approves.push(appr);
      new_ins_ids.push(new_ins_id);
      pushManager.send_message_to_specifyUser("current_user", user_id);
    });

    set_obj.modified = new Date();
    set_obj.modified_by = current_user_id;
    var r = db.instances.update({
      _id: instance_id,
      "traces._id": current_trace_id
    }, {
      $set: set_obj,
      $addToSet: {
        'traces.$.approves': {
          $each: forward_approves
        }
      }
    });

    if (r) {
      _.each(current_trace.approves, function (a, idx) {
        if (a._id == from_approve_id) {
          var update_read = {};
          update_read["traces.$.approves." + idx + ".read_date"] = new Date();
          db.instances.update({
            _id: instance_id,
            "traces._id": current_trace_id
          }, {
            $set: update_read
          });
        }
      });
    }

    JsonRoutes.sendResult(res, {
      code: 200,
      data: {}
    });
  } catch (e) {
    console.error(e.stack);
    JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [e]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_instance.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_instance.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('get', '/api/workflow/instance/:instanceId', function (req, res, next) {
  var box, current_user_id, current_user_info, e, flowId, ins, insId, permissions, redirectTo, ref, ref1, ref2, space, spaceId;

  try {
    current_user_info = uuflowManager.check_authorization(req, res);
    current_user_id = current_user_info._id;
    insId = req.params.instanceId;
    ins = db.instances.findOne(insId, {
      fields: {
        space: 1,
        flow: 1,
        state: 1,
        inbox_users: 1,
        cc_users: 1,
        outbox_users: 1,
        submitter: 1,
        applicant: 1
      }
    });

    if (!ins) {
      throw new Meteor.Error('error', 'instanceId is wrong or instance not exists.');
    }

    spaceId = ins.space;
    flowId = ins.flow;

    if (db.space_users.find({
      space: spaceId,
      user: current_user_id
    }).count() === 0) {
      throw new Meteor.Error('error', 'user is not belong to this space.');
    }

    box = '';

    if (((ref = ins.inbox_users) != null ? ref.includes(current_user_id) : void 0) || ((ref1 = ins.cc_users) != null ? ref1.includes(current_user_id) : void 0)) {
      box = 'inbox';
    } else if ((ref2 = ins.outbox_users) != null ? ref2.includes(current_user_id) : void 0) {
      box = 'outbox';
    } else if (ins.state === 'draft' && ins.submitter === current_user_id) {
      box = 'draft';
    } else if (ins.state === 'pending' && (ins.submitter === current_user_id || ins.applicant === current_user_id)) {
      box = 'pending';
    } else if (ins.state === 'completed' && ins.submitter === current_user_id) {
      box = 'completed';
    } else {
      permissions = permissionManager.getFlowPermissions(flowId, current_user_id);
      space = db.spaces.findOne(spaceId, {
        fields: {
          admins: 1
        }
      });

      if (!permissions.includes("admin") && !space.admins.includes(current_user_id)) {
        throw new Meteor.Error('error', "no permission.");
      }

      box = 'monitor';
    }

    redirectTo = Meteor.absoluteUrl("workflow/space/" + spaceId + "/" + box + "/" + insId);
    res.setHeader("Location", redirectTo);
    res.writeHead(302);
    res.end();
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_open_pending.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_open_pending.coffee                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
@api {get} /api/workflow/open/pending 获取待办文件

@apiDescription 获取当前用户的待办事项列表

@apiName getInbox

@apiGroup Workflow

@apiParam {String} access_token User API Token

@apiHeader {String} X-Space-Id	工作区Id

@apiHeaderExample {json} Header-Example:
	{
		"X-Space-Id": "wsw1re12TdeP223sC"
	}

@apiSuccessExample {json} Success-Response:
	{
		"status": "success",
		"data": [
			{
				"id": "g7wokXNkR9yxHvA4D",
				"start_date": "2017-11-23T02:28:53.164Z",
				"flow_name": "正文流程",
				"space_name": "审批王",
				"name": "正文流程 1",
				"applicant_name": null,
				"applicant_organization_name": "审批王",
				"submit_date": "2017-07-25T06:36:48.492Z",
				"step_name": "开始",
				"space_id": "kfDsMv7gBewmGXGEL",
				"modified": "2017-11-23T02:28:53.164Z",
				"is_read": false,
				"values": {}
			},
			{
				"id": "WqKSrWQoywgJaMp9k",
				"start_date": "2017-08-17T07:38:35.420Z",
				"flow_name": "正文\n",
				"space_name": "审批王",
				"name": "正文\n 1",
				"applicant_name": "殷亮辉",
				"applicant_organization_name": "审批王",
				"submit_date": "2017-06-27T10:26:19.468Z",
				"step_name": "开始",
				"space_id": "kfDsMv7gBewmGXGEL",
				"modified": "2017-08-17T07:38:35.421Z",
				"is_read": true,
				"values": {}
			}
		]
	}
 */JsonRoutes.add('get', '/api/workflow/open/pending', function (req, res, next) {
  var attach, e, is_read, limit, no_limit_count, query, ref, ref1, ref2, ref3, ref4, ref5, result_instances, space, space_id, space_names, special_user_id, start_date, u, uid, user_id, userid, username, workflow_categories;

  try {
    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    space_id = req.headers['x-space-id'] || ((ref = req.query) != null ? ref.spaceId : void 0);

    if (!space_id) {
      throw new Meteor.Error('error', 'need space_id');
    }

    user_id = req.userId;

    if (!user_id) {
      throw new Meteor.Error('error', 'Not logged in');
    }

    if (db.users.find({
      _id: user_id
    }).count() === 0) {
      throw new Meteor.Error('error', 'can not find user');
    }

    limit = ((ref1 = req.query) != null ? ref1.limit : void 0) || 500;
    limit = parseInt(limit);
    username = (ref2 = req.query) != null ? ref2.username : void 0;
    userid = (ref3 = req.query) != null ? ref3.userid : void 0;
    attach = (ref4 = req.query) != null ? ref4.attach : void 0;
    workflow_categories = (ref5 = req.query) != null ? ref5.workflow_categories : void 0;
    space = uuflowManager.getSpace(space_id);
    special_user_id;

    if (space.admins.includes(user_id)) {
      if (userid) {
        if (db.users.find({
          _id: userid
        }).count() < 1) {
          throw new Meteor.Error('error', "can not find user by userid: " + userid);
        }

        special_user_id = userid;
      } else if (username) {
        u = db.users.findOne({
          username: username
        }, {
          fields: {
            _id: 1
          }
        });

        if (_.isEmpty(u)) {
          throw new Meteor.Error('error', "can not find user by username: " + username);
        }

        special_user_id = u._id;
      }
    }

    result_instances = new Array();
    is_read = false;
    start_date = '';
    uid = user_id;
    query = {
      $or: [{
        inbox_users: user_id
      }, {
        cc_users: user_id
      }]
    };

    if (special_user_id) {
      uid = special_user_id;
      query = {
        space: space_id,
        $or: [{
          inbox_users: special_user_id
        }, {
          cc_users: special_user_id
        }]
      };
    }

    if (workflow_categories) {
      query.category = {
        $in: workflow_categories.split(',')
      };
    }

    space_names = {};
    space_names[space._id] = space.name;

    if (limit > 0) {
      db.instances.find(query, {
        sort: {
          modified: -1
        },
        limit: limit
      }).forEach(function (i) {
        var h, ref6, ref7;

        if ((ref6 = i.inbox_users) != null ? ref6.includes(uid) : void 0) {
          _.each(i.traces, function (t) {
            if (t.is_finished === false) {
              return _.each(t.approves, function (a) {
                if (a.user === uid && a.type !== 'cc' && !a.is_finished) {
                  is_read = a.is_read;
                  return start_date = a.start_date;
                }
              });
            }
          });
        } else {
          _.each(i.traces, function (t) {
            if (!start_date && t.approves) {
              return _.each(t.approves, function (a) {
                if (!start_date && a.user === uid && a.type === 'cc' && !a.is_finished) {
                  is_read = a.is_read;
                  return start_date = a.start_date;
                }
              });
            }
          });
        }

        if (!space_names[i.space]) {
          space_names[i.space] = (ref7 = db.spaces.findOne(i.space, {
            fields: {
              name: 1
            }
          })) != null ? ref7.name : void 0;
        }

        h = new Object();
        h["id"] = i["_id"];
        h["start_date"] = start_date;
        h["flow_name"] = i.flow_name;
        h["space_name"] = space_names[i.space];
        h["name"] = i["name"];
        h["applicant_name"] = i["applicant_name"];
        h["applicant_organization_name"] = i["applicant_organization_name"];
        h["submit_date"] = i["submit_date"];
        h["step_name"] = i.current_step_name;
        h["space_id"] = i.space;
        h["modified"] = i["modified"];
        h["is_read"] = is_read;
        h["values"] = i["values"];

        if (attach === 'true') {
          h.attachments = cfs.instances.find({
            'metadata.instance': i._id,
            'metadata.current': true,
            "metadata.is_private": {
              $ne: true
            }
          }, {
            fields: {
              copies: 0
            }
          }).fetch();
        }

        return result_instances.push(h);
      });
    }

    no_limit_count = db.instances.find(query).count();
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        status: "success",
        data: result_instances,
        count: no_limit_count
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.reason
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"export_table_template.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/export_table_template.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Cookies;
Cookies = require("cookies");
Meteor.startup(function () {
  return WebApp.connectHandlers.use("/api/workflow/export/talbe_template", function (req, res, next) {
    var authToken, cookies, data, fileName, flow, flowId, form, ref, ref1, space, userId;
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

    flowId = (ref = req.query) != null ? ref.flow : void 0;
    flow = db.flows.findOne({
      _id: flowId
    }, {
      fields: {
        space: 1,
        form: 1,
        name: 1
      }
    });
    form = db.forms.findOne({
      _id: flow.form
    }, {
      fields: {
        space: 1,
        "current._id": 1
      }
    });

    if (_.isEmpty(flow)) {
      res.writeHead(401);
      res.end(JSON.stringify({
        "error": "Validate Request -- Invalid formId",
        "success": false
      }));
      return;
    } else {
      if (!Steedos.isSpaceAdmin(flow.space, userId)) {
        res.writeHead(401);
        res.end(JSON.stringify({
          "error": "Validate Request -- No permission",
          "success": false
        }));
        return;
      }

      space = db.spaces.findOne(flow.space, {
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

    data = TemplateManager.handleTableTemplate({
      form: flow.form,
      form_version: form != null ? (ref1 = form.current) != null ? ref1._id : void 0 : void 0
    }, true);
    fileName = flow.name;
    res.setHeader('Content-type', 'application/x-msdownload');
    res.setHeader('Content-Disposition', 'attachment;filename=' + encodeURI(fileName) + '.html');
    return res.end(data);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_open_drafts.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_open_drafts.coffee                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
@api {post} /api/workflow/open/drafts 新建申请单

@apiName createInstance

@apiGroup Workflow

@apiPermission 工作区管理员

@apiParam {String} access_token User API Token

@apiHeader {String} X-Space-Id	工作区Id

@apiHeaderExample {json} Header-Example:
{
	"X-Space-Id": "wsw1re12TdeP223sC"
}

@apiParamExample {json} Request Payload:
{
    "flow": 流程Id,
    "applicant": 申请人Id,
    "values": {
        "fields1" : 字段值,
        "fields2" : 字段值,
        ...
    }
}

@apiSuccessExample {json} Success-Response:
{
    "status": "success",
    "data": {instance}
}

@apiErrorExample {json} error-Response:
{
    "status": "error",
    "data": {...}
}
 */JsonRoutes.add('post', '/api/workflow/open/drafts', function (req, res, next) {
  var applicant, applicantInfo, applicant_id, applicant_username, approve, approves, current_user_info, e, flow, flow_id, hashData, instance_from_client, new_ins, new_ins_id, space_id, space_user, space_user_org_info, trace, traces, user_id;

  try {
    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    user_id = req.userId;
    current_user_info = db.users.findOne({
      _id: user_id
    });
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header x_space_id');
    }

    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user_info._id);
    hashData = req.body;

    if (!hashData["flow"]) {
      throw new Meteor.Error('error', 'flow is null');
    }

    flow_id = hashData["flow"];
    applicant_id = hashData["applicant"];
    applicant_username = hashData["applicant_username"];
    instance_from_client = new Object();
    flow = db.flows.findOne({
      _id: flow_id
    }, {
      fields: {
        space: 1,
        'current._id': 1
      }
    });

    if (!flow) {
      throw new Meteor.Error('error', 'flow is not exists');
    }

    if (space_id !== flow.space) {
      throw new Meteor.Error('error', 'flow is not belong to this space');
    }

    if (db.space_users.find({
      space: space_id,
      user: current_user_info._id
    }).count() === 0) {
      throw new Meteor.Error('error', 'auth_token is not a member of this space');
    }

    instance_from_client["space"] = space_id;
    instance_from_client["flow"] = flow_id;
    instance_from_client["flow_version"] = flow.current._id;
    applicant = null;

    if (applicant_id || applicant_username) {
      if (applicant_id) {
        applicant = db.users.findOne({
          _id: applicant_id
        }, {
          fields: {
            name: 1
          }
        });

        if (!applicant) {
          throw new Meteor.Error('error', 'applicant is wrong');
        }
      } else if (applicant_username) {
        applicant = db.users.findOne({
          username: applicant_username
        }, {
          fields: {
            name: 1
          }
        });

        if (!applicant) {
          throw new Meteor.Error('error', 'applicant_username is wrong');
        }
      }

      space_user = db.space_users.findOne({
        space: space_id,
        user: applicant._id
      });

      if (!space_user) {
        throw new Meteor.Error('error', 'applicant is not a member of this space');
      }

      if (space_user.user_accepted !== true) {
        throw new Meteor.Error('error', 'applicant is disabled in this space');
      }

      space_user_org_info = uuflowManager.getSpaceUserOrgInfo(space_user);
      instance_from_client["applicant"] = applicant._id;
      instance_from_client["applicant_name"] = applicant.name;
      instance_from_client["applicant_organization"] = space_user_org_info["organization"];
      instance_from_client["applicant_organization_fullname"] = space_user_org_info["organization_fullname"];
      instance_from_client["applicant_organization_name"] = space_user_org_info["organization_name"];
    }

    applicantInfo = applicant || current_user_info;
    traces = [];
    trace = new Object();
    approves = [];
    approve = new Object();
    approve["values"] = hashData["values"];
    approves.push(approve);
    trace["approves"] = approves;
    traces.push(trace);
    instance_from_client["traces"] = traces;
    instance_from_client["inbox_users"] = [applicantInfo._id];
    new_ins_id = uuflowManager.create_instance(instance_from_client, applicantInfo);
    new_ins = db.instances.findOne(new_ins_id);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        status: "success",
        data: new_ins
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_open_get.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_open_get.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
@api {get} /api/workflow/open/get/:ins_id 查看申请单详情

@apiName getInstance

@apiGroup Workflow

@apiPermission 工作区的管理员

@apiParam {String} ins_id 申请单Id
@apiParam {String} access_token User API Token

@apiHeader {String} X-Space-Id	工作区Id

@apiHeaderExample {json} Header-Example:
{
	"X-Space-Id": "wsw1re12TdeP223sC"
}

@apiSuccessExample {json} Success-Response:
{
    "status": "success",
    "data": {instance}
}
 */JsonRoutes.add('get', '/api/workflow/open/get/:ins_id', function (req, res, next) {
  var current_user, e, ins_id, instance, perm_users, permissions, space, space_id;

  try {
    ins_id = req.params.ins_id;

    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    current_user = req.userId;
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header X_Space_Id');
    }

    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user);
    instance = db.instances.findOne(ins_id);

    if (!instance) {
      throw new Meteor.Error('error', 'can not find instance');
    }

    if (db.space_users.find({
      space: instance.space,
      user: current_user
    }).count() === 0) {
      throw new Meteor.Error('error', 'auth_token is wrong');
    }

    perm_users = new Array();
    perm_users.push(instance.submitter);
    perm_users.push(instance.applicant);

    if (instance.outbox_users) {
      perm_users = perm_users.concat(instance.outbox_users);
    }

    if (instance.inbox_users) {
      perm_users = perm_users.concat(instance.inbox_users);
    }

    space = db.spaces.findOne({
      _id: instance.space
    }, {
      fields: {
        admins: 1
      }
    });
    perm_users = perm_users.concat(space.admins);
    permissions = permissionManager.getFlowPermissions(instance.flow, current_user);

    if (!perm_users.includes(current_user) && !permissions.includes("monitor") && !permissions.includes("admin")) {
      throw new Meteor.Error('error', 'no permission');
    }

    instance.attachments = cfs.instances.find({
      'metadata.instance': instance._id,
      'metadata.current': true,
      "metadata.is_private": {
        $ne: true
      }
    }, {
      fields: {
        copies: 0
      }
    }).fetch();
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        status: "success",
        data: instance
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_open_submit.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_open_submit.coffee                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
@api {put} /api/workflow/open/submit/:ins_id 提交申请单

@apiDescription 暂不支持开始节点下一节点为条件的情况

@apiName submitInstance

@apiGroup Workflow

@apiPermission 工作区管理员

@apiParam {String} access_token User API Token

@apiHeader {String} X-Space-Id	工作区Id

@apiHeaderExample {json} Header-Example:
    {
		"X-Space-Id": "wsw1re12TdeP223sC"
	}

@apiSuccessExample {json} Success-Response:
    {
		"status": "success",
		"data": {instance}
	}
 */JsonRoutes.add('put', '/api/workflow/open/submit/:ins_id', function (req, res, next) {
  var current_user, current_user_info, e, flow, form, ins_id, instance, nextSteps, next_step_id, next_user_ids, r, require_but_empty_fields, result, space_id, step, submitter, values;

  try {
    ins_id = req.params.ins_id;

    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    current_user = req.userId;
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header X_Space_Id');
    }

    current_user_info = db.users.findOne(current_user);

    if (!current_user_info) {
      throw new Meteor.Error('error', 'can not find user');
    }

    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user);
    instance = uuflowManager.getInstance(ins_id);
    uuflowManager.isInstanceDraft(instance);

    if (space_id !== instance["space"]) {
      throw new Meteor.Error('error', 'instance is not belong to this space');
    }

    values = instance["traces"][0]["approves"][0].values;
    form = uuflowManager.getForm(instance.form);
    require_but_empty_fields = uuflowManager.checkValueFieldsRequire(values, form, instance.form_version);

    if (require_but_empty_fields.length > 0) {
      if (require_but_empty_fields.length > 1) {
        throw new Meteor.Error('error', 'fields <' + require_but_empty_fields.join(",") + '> are required');
      } else if (require_but_empty_fields.length = 1) {
        throw new Meteor.Error('error', 'field <' + require_but_empty_fields.join(",") + '> is required');
      }
    }

    flow = uuflowManager.getFlow(instance.flow);
    step = uuflowManager.getStep(instance, flow, instance["traces"][0].step);
    nextSteps = uuflowManager.getNextSteps(instance, flow, step, "submitted");

    if (nextSteps.length < 1) {
      throw new Meteor.Error('error', 'can not find next steps');
    }

    if (nextSteps.length > 1) {
      throw new Meteor.Error('error', 'next step not uniq');
    }

    next_step_id = nextSteps[0];
    next_user_ids = getHandlersManager.getHandlers(ins_id, next_step_id) || [];

    if (next_user_ids.length > 1) {
      throw new Meteor.Error('error', 'next step handler not uniq');
    }

    instance["traces"][0]["approves"][0]["next_steps"] = [{
      'step': next_step_id,
      'users': next_user_ids
    }];
    result = new Object();
    submitter = db.users.findOne(instance.submitter);

    if (!submitter) {
      throw new Meteor.Error('error', 'can not find submitter');
    }

    r = uuflowManager.submit_instance(instance, submitter);

    if (r.alerts) {
      result = r;
    } else {
      result = db.instances.findOne(ins_id);

      if (result) {
        result.attachments = cfs.instances.find({
          'metadata.instance': ins_id,
          'metadata.current': true,
          "metadata.is_private": {
            $ne: true
          }
        }, {
          fields: {
            copies: 0
          }
        }).fetch();
      }
    }

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        status: "success",
        data: result
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_open_save.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_open_save.coffee                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
@api {put} /api/workflow/open/save/:ins_id 暂存申请单

@apiName saveInstances

@apiGroup Workflow

@apiPermission 工作区管理员

@apiParam {String} access_token User API Token

@apiHeader {String} X-Space-Id	工作区Id

@apiHeaderExample {json} Header-Example:
    {
		"X-Space-Id": "wsw1re12TdeP223sC"
	}

@apiSuccessExample {json} Success-Response:
    {
		"status": "success",
		"data": {instance}
	}
 */JsonRoutes.add('put', '/api/workflow/open/save/:ins_id', function (req, res, next) {
  var current_step, current_trace, current_user, current_user_info, e, flow, ins_id, instance, result, setObj, space_id, values;

  try {
    ins_id = req.params.ins_id;

    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    current_user = req.userId;
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header X_Space_Id');
    }

    current_user_info = db.users.findOne(current_user);

    if (!current_user_info) {
      throw new Meteor.Error('error', 'can not find user');
    }

    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user);
    values = req.body;

    if (!values) {
      throw new Meteor.Error('error', 'need values');
    }

    current_trace = null;
    setObj = new Object();
    instance = uuflowManager.getInstance(ins_id);
    flow = uuflowManager.getFlow(instance.flow);

    _.each(instance.traces, function (t) {
      if (t.is_finished !== true) {
        return current_trace = t;
      }
    });

    current_step = uuflowManager.getStep(instance, flow, current_trace.step);

    if (current_step.step_type === "counterSign") {
      throw new Meteor.Error('error', '会签步骤不能修改表单值');
    }

    _.each(current_trace.approves, function (a) {
      if (a.is_finished !== true && a.type !== "cc") {
        return a.values = values;
      }
    });

    setObj.modified = new Date();
    setObj["traces.$.approves"] = current_trace.approves;
    db.instances.update({
      _id: ins_id,
      'traces._id': current_trace._id
    }, {
      $set: setObj
    });
    result = new Object();
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        status: "success",
        data: result
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_open_get_by_stepname.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_open_get_by_stepname.coffee                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
@api {post} /api/workflow/open/getbystepname 根据步骤名称获取申请单

@apiName getInstanceByStepName

@apiGroup Workflow

@apiPermission 工作区管理员

@apiParam {String} access_token User API Token

@apiHeader {String} X-Space-Id	工作区Id

@apiHeaderExample {json} Header-Example:
{
	"X-Space-Id": "wsw1re12TdeP223sC"
}

@apiParamExample {json} Request Payload:
{
    "flow": 流程Id,
    "stepname": 步骤名称
}

@apiSuccessExample {json} Success-Response:
{
	"status": "success",
	"data": [
		{
			instance
		},
		{
			instance
		}
	]
}
 */JsonRoutes.add('post', '/api/workflow/open/getbystepname', function (req, res, next) {
  var current_user, current_user_info, e, flow, hashData, instances, space_id, stepname;

  try {
    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    current_user = req.userId;
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header X_Space_Id');
    }

    current_user_info = db.users.findOne(current_user);

    if (!current_user_info) {
      throw new Meteor.Error('error', 'can not find user');
    }

    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user);
    hashData = req.body;
    stepname = hashData["stepname"];
    flow = hashData["flow"];

    if (!stepname) {
      throw new Meteor.Error('error', 'need stepname');
    }

    if (!flow) {
      throw new Meteor.Error('error', 'need flow');
    }

    instances = db.instances.find({
      space: space_id,
      flow: flow,
      state: 'pending',
      traces: {
        $elemMatch: {
          is_finished: false,
          name: stepname
        }
      }
    }, {
      fields: {
        inbox_uers: 0,
        cc_users: 0,
        outbox_users: 0,
        attachments: 0,
        traces: 0
      }
    }).fetch();
    instances.forEach(function (instance) {
      return instance.attachments = cfs.instances.find({
        'metadata.instance': instance._id,
        'metadata.current': true,
        "metadata.is_private": {
          $ne: true
        }
      }, {
        fields: {
          copies: 0
        }
      }).fetch();
    });
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        status: "success",
        data: instances
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_open_cfs.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_open_cfs.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
Content-Type：application/json
form-data 格式:
fd = new FormData;
fd.append("file", file);

fd.append("is_private", false);

if (isAddVersion) {
	fd.append("isAddVersion", isAddVersion);
	fd.append("parent", attach_parent_id);
}

if (isMainAttach) {
	fd.append("main", true);
}
 */var Busboy, Fiber;
Busboy = require('busboy');
Fiber = require('fibers');

JsonRoutes.parseFiles = function (req, res, next) {
  var busboy, files, image;
  files = [];
  image = {};

  if (req.method === "POST") {
    busboy = new Busboy({
      headers: req.headers
    });
    busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
      var buffers;
      image.mimeType = mimetype;
      image.encoding = encoding;
      image.filename = filename;
      buffers = [];
      file.on('data', function (data) {
        return buffers.push(data);
      });
      return file.on('end', function () {
        image.data = Buffer.concat(buffers);
        return files.push(image);
      });
    });
    busboy.on("field", function (fieldname, value) {
      return req.body[fieldname] = value;
    });
    busboy.on("finish", function () {
      req.files = files;
      return Fiber(function () {
        return next();
      }).run();
    });
    return req.pipe(busboy);
  } else {
    return next();
  }
};

JsonRoutes.add('post', '/api/workflow/open/cfs/:ins_id', function (req, res, next) {
  var approve_id, current_user, current_user_info, e, ins_id, instance, space_id;

  try {
    ins_id = req.params.ins_id;

    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    current_user = req.userId;
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header X_Space_Id');
    }

    current_user_info = db.users.findOne(current_user);

    if (!current_user_info) {
      throw new Meteor.Error('error', 'can not find user');
    }

    instance = uuflowManager.getInstance(ins_id);

    if (instance.state !== "draft") {
      throw new Meteor.Error('error', '申请单草稿状态时才能上传');
    }

    approve_id = instance.traces[0].approves[0]._id;
    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user);
    return JsonRoutes.parseFiles(req, res, function () {
      var collection, newFile;
      collection = cfs.instances;

      if (req.files && req.files[0]) {
        if (req.files[0].data.length > 100 * 1024 * 1024) {
          JsonRoutes.sendResult(res, {
            code: 200,
            data: {
              errors: [{
                errorMessage: "超过上传附件大小限制(100M)"
              }]
            }
          });
          return;
        }

        newFile = new FS.File();
        return newFile.attachData(req.files[0].data, {
          type: req.files[0].mimeType
        }, function (err) {
          var body, e, fileObj, filename, metadata, parent, r, result, size;
          filename = req.files[0].filename;

          if (["image.jpg", "image.gif", "image.jpeg", "image.png"].includes(filename.toLowerCase())) {
            filename = "image-" + moment(new Date()).format('YYYYMMDDHHmmss') + "." + filename.split('.').pop();
          }

          body = req.body;
          body['owner'] = instance.submitter;
          body['owner_name'] = instance.submitter_name;
          body['space'] = space_id;
          body['instance'] = ins_id;
          body['approve'] = approve_id;

          try {
            if (body && (body['upload_from'] === "IE" || body['upload_from'] === "node")) {
              filename = decodeURIComponent(filename);
            }
          } catch (error) {
            e = error;
            console.error(filename);
            console.error(e);
            filename = filename.replace(/%/g, "-");
          }

          newFile.name(filename);

          if (body && body['owner'] && body['owner_name'] && body['space'] && body['instance'] && body['approve']) {
            parent = '';
            metadata = {
              owner: body['owner'],
              owner_name: body['owner_name'],
              space: body['space'],
              instance: body['instance'],
              approve: body['approve'],
              current: true
            };

            if (body["is_private"] && body["is_private"].toLocaleLowerCase() === "true") {
              metadata.is_private = true;
            } else {
              metadata.is_private = false;
            }

            if (body['main'] === "true") {
              metadata.main = true;
            }

            if (body['isAddVersion'] && body['parent']) {
              parent = body['parent'];
            }

            if (parent) {
              r = collection.update({
                'metadata.parent': parent,
                'metadata.current': true
              }, {
                $unset: {
                  'metadata.current': ''
                }
              });

              if (r) {
                metadata.parent = parent;

                if (body['locked_by'] && body['locked_by_name']) {
                  metadata.locked_by = body['locked_by'];
                  metadata.locked_by_name = body['locked_by_name'];
                }

                newFile.metadata = metadata;
                fileObj = collection.insert(newFile);

                if (body["overwrite"] && body["overwrite"].toLocaleLowerCase() === "true") {
                  collection.remove({
                    'metadata.instance': body['instance'],
                    'metadata.parent': parent,
                    'metadata.owner': body['owner'],
                    'metadata.approve': body['approve'],
                    'metadata.current': {
                      $ne: true
                    }
                  });
                }
              }
            } else {
              newFile.metadata = metadata;
              fileObj = collection.insert(newFile);
              fileObj.update({
                $set: {
                  'metadata.parent': fileObj._id
                }
              });
            }
          } else {
            fileObj = collection.insert(newFile);
          }

          size = fileObj.original.size;

          if (!size) {
            size = 1024;
          }

          result = new Object();
          result = {
            attach_id: fileObj._id,
            size: size
          };
          res.setHeader("x-amz-version-id", fileObj._id);
          return JsonRoutes.sendResult(res, {
            code: 200,
            data: {
              status: "success",
              data: result
            }
          });
        });
      } else {
        JsonRoutes.sendResult(res, {
          code: 200,
          data: {
            errors: [{
              errorMessage: "need file"
            }]
          }
        });
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
JsonRoutes.add("delete", "/api/workflow/open/cfs/:ins_id", function (req, res, next) {
  var attach_id, collection, current_user, current_user_info, e, file, hashData, ins_id, instance, result, space_id;

  try {
    ins_id = req.params.ins_id;

    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    current_user = req.userId;
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header X_Space_Id');
    }

    current_user_info = db.users.findOne(current_user);

    if (!current_user_info) {
      throw new Meteor.Error('error', 'can not find user');
    }

    instance = uuflowManager.getInstance(ins_id);

    if (instance.state !== "draft") {
      throw new Meteor.Error('error', '申请单草稿状态时才能删除附件');
    }

    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user);
    hashData = req.body || {};
    attach_id = hashData["attach_id"];

    if (!attach_id) {
      throw new Meteor.Error('error', 'can not find attach_id');
    }

    collection = cfs.instances;
    file = collection.findOne({
      _id: attach_id,
      'metadata.instance': ins_id
    });

    if (file) {
      file.remove();
    } else {
      throw new Meteor.Error('error', '此附件不属于此申请单，或已被删除');
    }

    result = new Object();
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        status: "success",
        data: result
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
JsonRoutes.add("get", "/api/workflow/open/cfs/:attach_id", function (req, res, next) {
  var attach_id, current_user, current_user_info, e, space_id;

  try {
    attach_id = req.params.attach_id;

    if (!Steedos.APIAuthenticationCheck(req, res)) {
      return;
    }

    current_user = req.userId;
    space_id = req.headers['x-space-id'];

    if (!space_id) {
      throw new Meteor.Error('error', 'need header X_Space_Id');
    }

    current_user_info = db.users.findOne(current_user);

    if (!current_user_info) {
      throw new Meteor.Error('error', 'can not find user');
    }

    uuflowManager.getSpace(space_id);
    uuflowManager.isSpaceAdmin(space_id, current_user);
    res.statusCode = 302;
    res.setHeader("Location", Steedos.absoluteUrl("api/files/instances/") + attach_id + "?download=true");
    return res.end();
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_forward_refill.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_forward_refill.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("post", "/api/workflow/forward_refill", function (req, res, next) {
  var approve, columns, forward_ins, forward_ins_values, original_ins, original_ins_fields, original_ins_form, original_ins_id, original_subtable_fields, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, row_data, subTable, table_data, trace, traces;
  console.log("=========回填子表==========");
  console.log("req?.query?.subTable", req != null ? (ref = req.query) != null ? ref.subTable : void 0 : void 0);
  console.log("=========分发回填的列==========");
  console.log("req?.query?.column", req != null ? (ref1 = req.query) != null ? ref1.column : void 0 : void 0);
  columns = req != null ? (ref2 = req.query) != null ? ref2.column.split(';') : void 0 : void 0;
  console.log("columns", columns);
  forward_ins = req != null ? (ref3 = req.body) != null ? ref3.instance : void 0 : void 0;
  subTable = req != null ? (ref4 = req.query) != null ? ref4.subTable : void 0 : void 0;

  if ((forward_ins != null ? forward_ins.state : void 0) === "completed" && (forward_ins != null ? (ref5 = forward_ins.distribute_from_instances) != null ? ref5.length : void 0 : void 0) > 0 && subTable && columns) {
    forward_ins_values = forward_ins != null ? forward_ins.values : void 0;
    original_ins_id = _.last(forward_ins != null ? forward_ins.distribute_from_instances : void 0);
    original_ins = db.instances.findOne(original_ins_id);
    original_ins_form = db.forms.findOne(original_ins != null ? original_ins.form : void 0);
    original_ins_fields = [];
    original_subtable_fields = [];
    console.log("original_ins_form?.current?._id", original_ins_form != null ? (ref6 = original_ins_form.current) != null ? ref6._id : void 0 : void 0);
    console.log("original_ins?.form_version", original_ins != null ? original_ins.form_version : void 0);

    if ((original_ins != null ? original_ins.form_version : void 0) === (original_ins_form != null ? (ref7 = original_ins_form.current) != null ? ref7._id : void 0 : void 0)) {
      original_ins_fields = (ref8 = original_ins_form.current) != null ? ref8.fields : void 0;
      original_ins_fields.forEach(function (original_ins_field) {
        console.log("original_ins_field", original_ins_field != null ? original_ins_field.code : void 0);

        if ((original_ins_field != null ? original_ins_field.code : void 0) === subTable && (original_ins_field != null ? original_ins_field.type : void 0) === 'table') {
          return original_subtable_fields = original_ins_field != null ? original_ins_field.fields : void 0;
        }
      });
    } else {
      if ((original_ins_form != null ? (ref9 = original_ins_form.historys) != null ? ref9.length : void 0 : void 0) > 0) {
        original_ins_form.historys.forEach(function (oh) {
          if ((original_ins != null ? original_ins.form_version : void 0) === oh._id) {
            original_ins_fields = oh != null ? oh.fields : void 0;
            return original_ins_fields.forEach(function (original_ins_field) {
              if ((original_ins_field != null ? original_ins_field.code : void 0) === subTable && (original_ins_field != null ? original_ins_field.type : void 0) === 'table') {
                return original_subtable_fields = original_ins_field != null ? original_ins_field.fields : void 0;
              }
            });
          }
        });
      }
    }

    console.log("original_subtable_fields", original_subtable_fields != null ? original_subtable_fields.length : void 0);

    if (original_subtable_fields) {
      traces = original_ins != null ? original_ins.traces : void 0;
      trace = traces[traces.length - 1];
      approve = trace != null ? trace.approves[0] : void 0;
      table_data = (approve != null ? approve.values[subTable] : void 0) || [];
      row_data = {};
      columns.forEach(function (column) {
        return row_data[column] = forward_ins_values[column] || "";
      });

      if (row_data && row_data !== {}) {
        table_data.push(row_data);
        traces[traces.length - 1].approves[0].values[subTable] = table_data;
        console.log(traces[traces.length - 1].approves[0].values[subTable]);
        db.instances.update(original_ins_id, {
          $set: {
            'traces': traces
          }
        });
        return JsonRoutes.sendResult(res, {
          code: 200,
          data: {
            'success': '回填成功'
          }
        });
      } else {
        return JsonRoutes.sendResult(res, {
          code: 200,
          data: {
            'info': '回填数据为空'
          }
        });
      }
    } else {
      return JsonRoutes.sendResult(res, {
        code: 200,
        data: {
          'error': '原申请单无相关子表'
        }
      });
    }
  } else {
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'success': '申请单未结束'
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_forward_table_refill.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_workflow_forward_table_refill.coffee                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("post", "/api/workflow/forward_table_refill", function (req, res, next) {
  var a_table, a_table_values, approve, column_list, columns, d_ins, d_ins_fields, d_ins_form, d_ins_values, d_match_col, d_match_col_field, d_match_col_fields, d_subtable_fields, d_table, d_table_values, e, o_ins, o_ins_fields, o_ins_form, o_ins_id, o_match_col, o_match_col_field, o_match_col_fields, o_subtable_fields, o_table, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref3, ref4, ref5, ref6, ref7, ref8, ref9, table_data, trace, traces;

  try {
    console.log("=========原表子表==========");
    console.log("req?.query?.oTable", req != null ? (ref = req.query) != null ? ref.oTable : void 0 : void 0);
    console.log("=========现表子表==========");
    console.log("req?.query?.dTable", req != null ? (ref1 = req.query) != null ? ref1.dTable : void 0 : void 0);
    console.log("=========原表单的子表匹配列==========");
    console.log("req?.query?.oMatchCol", req != null ? (ref2 = req.query) != null ? ref2.oMatchCol : void 0 : void 0);
    console.log("=========现表单的子表匹配列==========");
    console.log("req?.query?.dMatchCol", req != null ? (ref3 = req.query) != null ? ref3.dMatchCol : void 0 : void 0);
    console.log("=========需要回填的列==========");
    console.log("req?.query?.refillCol", req != null ? (ref4 = req.query) != null ? ref4.refillCol : void 0 : void 0);
    d_ins = req != null ? (ref5 = req.body) != null ? ref5.instance : void 0 : void 0;

    if ((d_ins != null ? d_ins.state : void 0) === "completed") {
      if (req != null ? (ref6 = req.query) != null ? ref6.oTable : void 0 : void 0) {
        o_table = req != null ? (ref7 = req.query) != null ? ref7.oTable : void 0 : void 0;

        if (req != null ? (ref8 = req.query) != null ? ref8.dTable : void 0 : void 0) {
          d_table = req != null ? (ref9 = req.query) != null ? ref9.dTable : void 0 : void 0;
        } else {
          d_table = o_table;
        }

        if (req != null ? (ref10 = req.query) != null ? ref10.aTable : void 0 : void 0) {
          a_table = req != null ? (ref11 = req.query) != null ? ref11.aTable : void 0 : void 0;
        }

        if (req != null ? (ref12 = req.query) != null ? ref12.oMatchCol : void 0 : void 0) {
          o_match_col = req != null ? (ref13 = req.query) != null ? ref13.oMatchCol : void 0 : void 0;

          if (req != null ? (ref14 = req.query) != null ? ref14.dMatchCol : void 0 : void 0) {
            d_match_col = req != null ? (ref15 = req.query) != null ? ref15.dMatchCol : void 0 : void 0;
          } else {
            d_match_col = o_match_col;
          }

          columns = (req != null ? (ref16 = req.query) != null ? ref16.refillCol.split(';') : void 0 : void 0) || [];
          console.log("columns", columns);

          if (columns || columns.length < 1) {
            console.log("======================");
            console.log(d_table, o_match_col, columns);
            d_ins_values = d_ins != null ? d_ins.values : void 0;
            o_ins_id = _.last(d_ins != null ? d_ins.distribute_from_instances : void 0);
            o_ins = db.instances.findOne(o_ins_id);
            o_ins_form = db.forms.findOne(o_ins != null ? o_ins.form : void 0);
            d_ins_form = db.forms.findOne(d_ins != null ? d_ins.form : void 0);
            o_ins_fields = [];
            o_subtable_fields = [];
            d_ins_fields = [];
            d_subtable_fields = [];
            column_list = [];
            d_table_values = [];

            if ((o_ins != null ? o_ins.form_version : void 0) === (o_ins_form != null ? (ref17 = o_ins_form.current) != null ? ref17._id : void 0 : void 0)) {
              o_ins_fields = o_ins_form != null ? (ref18 = o_ins_form.current) != null ? ref18.fields : void 0 : void 0;
              o_ins_fields.forEach(function (o_ins_field) {
                if ((o_ins_field != null ? o_ins_field.type : void 0) === 'table' && (o_ins_field != null ? o_ins_field.code : void 0) === o_table) {
                  return o_subtable_fields = o_ins_field != null ? o_ins_field.fields : void 0;
                }
              });
            } else {
              if ((o_ins_form != null ? (ref19 = o_ins_form.historys) != null ? ref19.length : void 0 : void 0) > 0) {
                o_ins_form.historys.forEach(function (oh) {
                  if ((o_ins != null ? o_ins.form_version : void 0) === oh._id) {
                    o_ins_fields = oh != null ? oh.fields : void 0;
                    return o_ins_fields.forEach(function (o_ins_field) {
                      if ((o_ins_field != null ? o_ins_field.type : void 0) === 'table' && (o_ins_field != null ? o_ins_field.code : void 0) === o_table) {
                        return o_subtable_fields = o_ins_field != null ? o_ins_field.fields : void 0;
                      }
                    });
                  }
                });
              }
            }

            if ((d_ins != null ? d_ins.form_version : void 0) === (d_ins_form != null ? (ref20 = d_ins_form.current) != null ? ref20._id : void 0 : void 0)) {
              d_ins_fields = d_ins_form != null ? (ref21 = d_ins_form.current) != null ? ref21.fields : void 0 : void 0;
              d_ins_fields.forEach(function (d_ins_field) {
                if ((d_ins_field != null ? d_ins_field.type : void 0) === 'table' && (d_ins_field != null ? d_ins_field.code : void 0) === d_table || a_table && (d_ins_field != null ? d_ins_field.type : void 0) === 'table' && (d_ins_field != null ? d_ins_field.code : void 0) === a_table) {
                  return d_subtable_fields = d_subtable_fields.concat(d_ins_field != null ? d_ins_field.fields : void 0);
                }
              });
            } else {
              if ((d_ins_form != null ? (ref22 = d_ins_form.historys) != null ? ref22.length : void 0 : void 0) > 0) {
                d_ins_form.historys.forEach(function (dh) {
                  if ((d_ins != null ? d_ins.form_version : void 0) === dh._id) {
                    d_ins_fields = dh != null ? dh.fields : void 0;
                    return d_ins_fields.forEach(function (d_ins_field) {
                      if ((d_ins_field != null ? d_ins_field.type : void 0) === 'table' && (d_ins_field != null ? d_ins_field.code : void 0) === d_table || a_table && (d_ins_field != null ? d_ins_field.type : void 0) === 'table' && (d_ins_field != null ? d_ins_field.code : void 0) === a_table) {
                        return d_subtable_fields = d_subtable_fields.concat(d_ins_field != null ? d_ins_field.fields : void 0);
                      }
                    });
                  }
                });
              }
            }

            if (o_subtable_fields.length === 0) {
              console.log("o_subtable_fields", o_subtable_fields);
              throw new Meteor.Error('forward table refill error!', '原申请单无对应子表');
            }

            if (d_subtable_fields.length === 0) {
              throw new Meteor.Error('forward table refill error!', '分发的申请单无对应子表');
            }

            d_table_values = (d_ins != null ? d_ins.values[d_table] : void 0) || [];

            if (a_table) {
              a_table_values = (d_ins != null ? d_ins.values[a_table] : void 0) || [];

              if (a_table_values && (a_table_values != null ? a_table_values.length : void 0) === (d_table_values != null ? d_table_values.length : void 0)) {
                a_table_values.forEach(function (a_row, index) {
                  var key, results, value;
                  results = [];

                  for (key in meteorBabelHelpers.sanitizeForInObject(a_row)) {
                    value = a_row[key];
                    results.push(d_table_values[index][key] = value);
                  }

                  return results;
                });
              }
            }

            if (d_table_values.length === 0) {
              throw new Meteor.Error('forward table refill error!', '分发的申请单子表数据为空');
            }

            o_match_col_fields = o_subtable_fields.filter(function (m) {
              return m.code === o_match_col;
            });
            d_match_col_fields = d_subtable_fields.filter(function (m) {
              return m.code === d_match_col;
            });

            if (o_match_col_fields.length === 0) {
              throw new Meteor.Error('forward table refill error!', '原申请单子表无对应匹配列');
            }

            if (d_match_col_fields.length === 0) {
              throw new Meteor.Error('forward table refill error!', '分发的申请单子表无对应匹配列');
            }

            o_match_col_field = o_match_col_fields[0];
            d_match_col_field = d_match_col_fields[0];

            if ((o_match_col_field != null ? o_match_col_field.type : void 0) !== (d_match_col_field != null ? d_match_col_field.type : void 0)) {
              throw new Meteor.Error('forward table refill error!', '分发的申请单和原申请单子表的匹配列字段不一致');
            }

            columns.forEach(function (column) {
              var col, cols, d_col, d_col_fields, o_col, o_col_fields;
              cols = column.split('-') || [];

              if (cols.length === 2) {
                o_col = cols[0];
                d_col = cols[1];
                o_col_fields = o_subtable_fields.filter(function (m) {
                  return m.code === o_col;
                });
                d_col_fields = d_subtable_fields.filter(function (m) {
                  return m.code === d_col;
                });

                if (o_col_fields.length === 0) {
                  throw new Meteor.Error('forward table refill error!', '原申请单子表无对应回填列');
                }

                if (d_col_fields.length === 0) {
                  throw new Meteor.Error('forward table refill error!', '分发的申请单子表无对应回填列');
                }

                if ((o_col_fields != null ? o_col_fields.type : void 0) !== (d_col_fields != null ? d_col_fields.type : void 0)) {
                  throw new Meteor.Error('forward table refill error!', '回填列字段类型不一致');
                }

                col = {
                  o_col: o_col,
                  d_col: d_col
                };
                return column_list.push(col);
              } else {
                throw new Meteor.Error('forward table refill error!', '回填列不匹配');
              }
            });
            traces = o_ins != null ? o_ins.traces : void 0;
            trace = traces[traces.length - 1];
            approve = trace != null ? trace.approves[0] : void 0;
            table_data = (approve != null ? approve.values[o_table] : void 0) || [];
            d_table_values.forEach(function (d_row) {
              var count, has_obj, row_data;
              has_obj = false;
              count = -1;
              table_data.forEach(function (o_row, index) {
                if (o_row[o_match_col] === d_row[d_match_col]) {
                  has_obj = true;
                  return count = index;
                }
              });

              if (has_obj === true) {
                return column_list.forEach(function (col) {
                  return table_data[count][col != null ? col.o_col : void 0] = d_row[col != null ? col.d_col : void 0];
                });
              } else {
                row_data = {};
                row_data[o_match_col] = d_row[d_match_col];
                column_list.forEach(function (col) {
                  return row_data[col != null ? col.o_col : void 0] = d_row[col != null ? col.d_col : void 0];
                });
                return table_data.push(row_data);
              }
            });
            traces[traces.length - 1].approves[0].values = o_ins != null ? o_ins.values : void 0;
            traces[traces.length - 1].approves[0].values[o_table] = table_data;
            db.instances.update(o_ins_id, {
              $set: {
                'traces': traces
              }
            });
            JsonRoutes.sendResult(res, {
              code: 200,
              data: {
                'success': '回填成功'
              }
            });
          } else {
            throw new Meteor.Error('forward table refill error!', 'webhook未配置子表回填列字段 columns 值');
          }
        } else {
          throw new Meteor.Error('forward table refill error!', 'webhook未配置匹配列字段 oMatchCol 值');
        }
      } else {
        throw new Meteor.Error('forward table refill error!', 'webhook未配置原表单子表 oTable 值');
      }
    } else {
      throw new Meteor.Error('forward table refill error!', '申请单未结束');
    }
  } catch (error) {
    e = error;
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [e]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_sub_table_sort.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_sub_table_sort.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("post", "/api/workflow/sub_table_sort", function (req, res, next) {
  var e, ins, new_table_values, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, sort_col, sub_table, sub_table_values, sum_col;

  try {
    console.log("=========子表==========");
    console.log("req?.query?.subTable", req != null ? (ref = req.query) != null ? ref.subTable : void 0 : void 0);
    console.log("=========子表总分列==========");
    console.log("req?.query?.sumCol", req != null ? (ref1 = req.query) != null ? ref1.sumCol : void 0 : void 0);
    console.log("=========子表排序列==========");
    console.log("req?.query?.sortCol", req != null ? (ref2 = req.query) != null ? ref2.sortCol : void 0 : void 0);
    console.log("=========子表单列需要计算的和==========");
    console.log("req?.query?.singleCols", req != null ? (ref3 = req.query) != null ? ref3.singleCols : void 0 : void 0);
    sub_table = req != null ? (ref4 = req.query) != null ? ref4.subTable : void 0 : void 0;

    if (!sub_table) {
      console.log("=====sub_table======");
      throw new Meteor.Error('table sort error!', 'webhook 未配置 subTable 字段');
    }

    sum_col = req != null ? (ref5 = req.query) != null ? ref5.sumCol : void 0 : void 0;

    if (!sum_col) {
      console.log("=====sum_col======");
      throw new Meteor.Error('table sort error!', 'webhook 未配置 sumCol 字段');
    }

    sort_col = req != null ? (ref6 = req.query) != null ? ref6.sortCol : void 0 : void 0;

    if (!sort_col) {
      console.log("=====sort_col======");
      throw new Meteor.Error('table sort error!', 'webhook 未配置 sortCol 字段');
    }

    ins = req != null ? (ref7 = req.body) != null ? ref7.instance : void 0 : void 0;
    sub_table_values = ins.values[sub_table];

    if ((sub_table_values != null ? sub_table_values.length : void 0) > 0) {
      var JsonSort = function (jsonArr, key, asc) {
        for (var j = 1, jl = jsonArr.length; j < jl; j++) {
          var temp = jsonArr[j],
              val = Number(temp[key]),
              i = j - 1;

          if (asc == true) {
            while (i >= 0 && Number(jsonArr[i][key]) > val) {
              jsonArr[i + 1] = jsonArr[i];
              i = i - 1;
            }
          } else {
            while (i >= 0 && Number(jsonArr[i][key]) < val) {
              jsonArr[i + 1] = jsonArr[i];
              i = i - 1;
            }
          }

          jsonArr[i + 1] = temp;
        }

        return jsonArr;
      };

      ;
      new_table_values = JsonSort(sub_table_values, sum_col, false);
      console.log("new_table_values", new_table_values);
      new_table_values.forEach(function (obj, index) {
        if (sort_col && obj[sum_col]) {
          return obj[sort_col] = (index + 1).toString();
        }
      });
      console.log("new_table_values", new_table_values);
      ins.values[sub_table] = new_table_values;
      db.instances.update(ins._id, {
        $set: {
          'values': ins.values
        }
      });
      console.log("success");
      return JsonRoutes.sendResult(res, {
        code: 200,
        data: {
          'success': '计算排序成功'
        }
      });
    } else {
      throw new Meteor.Error('table sort error!', '子表数据为空');
    }
  } catch (error) {
    e = error;
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [e]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"test_webhook.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/test_webhook.coffee                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isDevelopment) {
  JsonRoutes.add('post', '/test/webhook', function (req, res, next) {
    var e, hashData;

    try {
      hashData = req.body;
      console.log('action: ', hashData.action);
      console.log('from_user: ', hashData.from_user);
      console.log('to_users: ', hashData.to_users);
      return JsonRoutes.sendResult(res, {
        code: 200,
        data: {}
      });
    } catch (error) {
      e = error;
      console.error(e.stack);
      return JsonRoutes.sendResult(res, {
        code: 200,
        data: {
          errors: [{
            errorMessage: e.message
          }]
        }
      });
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_formula_users.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_formula_users.coffee                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("post", "/api/formula/users", function (req, res, next) {
  var current_user, current_user_info, spaceId, spaceUsers, space_user, userIds;
  current_user_info = uuflowManager.check_authorization(req);
  current_user = current_user_info._id;
  userIds = req.body.userIds;
  spaceId = req.body.spaceId;
  spaceUsers = [];
  space_user = db.space_users.findOne({
    user: current_user,
    space: spaceId
  }, {
    fields: {
      _id: 1
    }
  });

  if (!space_user) {
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '无权限'
      }
    });
  }

  if (!userIds || !spaceId) {
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '缺少参数'
      }
    });
  }

  spaceUsers = WorkflowManager.getFormulaUserObjects(spaceId, userIds);
  return JsonRoutes.sendResult(res, {
    code: 200,
    data: {
      'spaceUsers': spaceUsers
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_formula_organizations.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/routes/api_formula_organizations.coffee                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add("post", "/api/formula/orgs", function (req, res, next) {
  var current_user, current_user_info, orgIds, orgs, spaceId, space_user;
  current_user_info = uuflowManager.check_authorization(req);
  current_user = current_user_info._id;
  orgIds = req.body.orgIds;
  spaceId = req.body.spaceId;
  space_user = db.space_users.findOne({
    user: current_user,
    space: spaceId
  }, {
    fields: {
      _id: 1
    }
  });

  if (!space_user) {
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '无权限'
      }
    });
  }

  if (!orgIds || !spaceId) {
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        'errors': '缺少参数'
      }
    });
  }

  orgs = WorkflowManager.getFormulaOrgObjects(orgIds);
  return JsonRoutes.sendResult(res, {
    code: 200,
    data: {
      'orgs': orgs
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"related_instances_tabular.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/related_instances_tabular.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.startup(function () {
  return TabularTables.related_instances_tabular = new Tabular.Table({
    name: "related_instances_tabular",
    collection: db.instances,
    columns: [{
      data: "_id",
      title: '<input type="checkbox" name="reverse" id="reverse">',
      orderable: false,
      width: '1px',
      render: function (val, type, doc) {
        var input, ref;
        input = '<input type="checkbox" class="related-instances-list-checkbox" name="related_instances_ids" id="related_instances_ids" value="' + doc._id + '"';

        if ((ref = TabularTables.related_instances_tabular.related_instances) != null ? ref.includes(doc._id) : void 0) {
          input += " checked ";
        }

        input += ">";
        return input;
      }
    }, {
      data: "name",
      orderable: false,
      width: '45%',
      render: function (val, type, doc) {
        return "<div data-id='" + doc._id + "'>" + doc.name + "</div>";
      }
    }, {
      data: "applicant_name",
      title: t("instances_applicant_name"),
      orderable: false
    }, {
      data: "flow_name",
      title: t("instances_flow"),
      orderable: false
    }, {
      data: "current_step_name",
      title: t("instances_flow"),
      render: function (val, type, doc) {
        var judge, step_current_name;

        if (doc.state === "completed") {
          judge = doc.final_decision || "approved";
        }

        step_current_name = doc.current_step_name || '';
        return "<div class=\"step-current-state " + judge + "\">" + step_current_name + "</div>";
      }
    }],
    dom: "tp",
    lengthChange: false,
    extraFields: ["state", "final_decision", "space", "keywords"],
    pageLength: 10,
    info: false,
    searching: true,
    responsive: {
      details: false
    },
    autoWidth: false,
    changeSelector: function (selector, userId) {
      var space;

      if (!userId) {
        return {
          _id: -1
        };
      }

      space = selector.space;
      delete selector.space;
      selector.$or = [{
        space: space
      }, {
        submitter: userId
      }, {
        applicant: userId
      }, {
        inbox_users: userId
      }, {
        outbox_users: userId
      }, {
        cc_users: userId
      }];
      return selector;
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabular.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_workflow/tabular.coffee                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var GetBoxInstancesTabularOptions, _get_inbox_instances_tabular_options, _get_outbox_instances_tabular_options, _handleListFields, instancesListTableTabular, newInstancesListTabular, updateTabularTitle;

Steedos.subs["InstanceTabular"] = new SubsManager();

_handleListFields = function (fields) {
  var ins_fields;
  ins_fields = new Array();

  if (fields != null) {
    fields.forEach(function (f) {
      var ref;

      if (f.type === 'table') {
        return console.log('ignore opinion field in table');
      } else if (f.type === 'section') {
        return f != null ? (ref = f.fields) != null ? ref.forEach(function (f1) {
          return ins_fields.push(f1);
        }) : void 0 : void 0;
      } else {
        return ins_fields.push(f);
      }
    });
  }

  return ins_fields;
};

updateTabularTitle = function () {};

instancesListTableTabular = function (flowId, fields) {
  var ins_fields, key, options;
  options = {
    name: "instances",
    collection: db.instances,
    pub: "instance_tabular",
    onUnload: function () {
      return Meteor.setTimeout(Template.instance_list._tableColumns, 150);
    },
    drawCallback: function (settings) {
      var ellipsisLink, emptyTd, title;
      emptyTd = $(".dataTables_empty");

      if (emptyTd.length) {
        emptyTd[0].colSpan = "6";
      }

      if (!Steedos.isMobile() && !Steedos.isPad()) {
        Meteor.setTimeout(Template.instance_list._tableColumns, 150);
        $(".instance-list").scrollTop(0).ready(function () {
          return $(".instance-list").perfectScrollbar("update");
        });
      } else {
        $(".instance-list").scrollTop(0);
      }

      title = t("pager_input_hint");
      ellipsisLink = settings.oInstance.parent().find('.paging_numbers .pagination .disabled a');
      return ellipsisLink.attr("title", title).css("cursor", "pointer").click(function () {
        var goPage, input;

        if (!$(this).find('input').length) {
          input = $('<input class="paginate_input form-control input-sm" type="text" style="border: none; padding:0 2px;"/>');

          if (Steedos.isMobile()) {
            input.css({
              width: "52px",
              height: "20px"
            });
          } else {
            input.css({
              width: "52px",
              height: "16px"
            });
          }

          input.attr("title", title).attr("placeholder", title);
          $(this).empty().append(input);

          goPage = function (index) {
            var pages;

            if (index > 0) {
              pages = Math.ceil(settings.fnRecordsDisplay() / settings._iDisplayLength);

              if (index > pages) {
                index = pages;
              }

              index--;
              return settings.oInstance.DataTable().page(index).draw('page');
            }
          };

          input.blur(function (e) {
            var currentPage;
            currentPage = $(this).val();
            goPage(currentPage);
            return $(this).parent().html('...');
          });
          return input.keydown(function (e) {
            var currentPage;

            if (e.keyCode.toString() === "13") {
              currentPage = $(this).val();
              return goPage(currentPage);
            }
          });
        }
      });
    },
    createdRow: function (row, data, dataIndex) {
      if (Meteor.isClient) {
        if (data._id === FlowRouter.current().params.instanceId) {
          return row.setAttribute("class", "selected");
        }
      }
    },
    columns: [{
      data: "_id",
      orderable: false,
      render: function (val, type, doc) {
        var agent_view, cc_view, flow_name, instanceNamePriorityClass, modified, modifiedFromNow, modifiedString, priorityIcon, priorityIconClass, priorityValue, ref, ref1, step_current_name_view, unread;
        modifiedString = moment(doc.modified).format('YYYY-MM-DD');
        modified = doc.modified;

        if (Session.get("box") === 'inbox' && doc.state !== 'draft') {
          modified = doc.start_date || doc.modified;
        }

        if (Session.get("box") === 'outbox' || Session.get("box") === 'monitor') {
          modified = doc.submit_date || doc.submit_date;
        }

        modifiedFromNow = Steedos.momentReactiveFromNow(modified);
        flow_name = doc.flow_name;
        cc_view = "";
        step_current_name_view = "";

        if (doc.is_cc && !((ref = doc.inbox_users) != null ? ref.includes(Meteor.userId()) : void 0) && Session.get("box") === 'inbox') {
          cc_view = "<label class='cc-label'>(" + TAPi18n.__("instance_cc_title") + ")</label> ";
          step_current_name_view = "<div class='flow-name'>" + flow_name + "<span>(" + doc.current_step_name + ")</span></div>";
        } else {
          if (Session.get("box") !== 'draft' && doc.current_step_name) {
            step_current_name_view = "<div class='flow-name'>" + flow_name + "<span>(" + doc.current_step_name + ")</span></div>";
          } else {
            step_current_name_view = "<div class='flow-name'>" + flow_name + "</div>";
          }
        }

        agent_view = "";

        if (doc.agent_user_name && Session.get("box") === 'inbox') {
          agent_view = "<label class='cc-label'>(" + TAPi18n.__('process_delegation_rules_description', {
            userName: doc.agent_user_name
          }) + ")</label>";
        }

        unread = '';

        if (Session.get("box") === 'inbox' && doc.is_read === false) {
          unread = '<i class="ion ion-record unread"></i>';
        } else if (Session.get("box") === 'monitor' && doc.is_hidden === true) {
          unread = '<i class="fa fa-lock"></i>';
        }

        priorityIcon = "";
        priorityIconClass = "";
        priorityValue = (ref1 = doc.values) != null ? ref1.priority : void 0;

        switch (priorityValue) {
          case "特急":
            priorityIconClass = "danger";
            break;

          case "紧急":
            priorityIconClass = "warning";
            break;

          case "办文":
            priorityIconClass = "muted";
        }

        if (priorityIconClass) {
          instanceNamePriorityClass = "color-priority color-priority-" + priorityIconClass;
        }

        return "<div class='instance-read-bar'>" + unread + "</div>\n<div class='instance-name " + instanceNamePriorityClass + "'>" + doc.name + cc_view + agent_view + "\n	<span>" + doc.applicant_name + "</span>\n</div>\n<div class='instance-detail'>" + step_current_name_view + "\n	<span class='instance-modified' title='" + modifiedString + "'>" + modifiedFromNow + "</span>\n</div>";
      }
    }, {
      data: "applicant_organization_name",
      title: t("instances_applicant_organization_name"),
      visible: false
    }, {
      data: "name",
      title: t("instances_name"),
      render: function (val, type, doc) {
        var agent_view, cc_view, instanceNamePriorityClass, priorityIconClass, priorityValue, ref, ref1, step_current_name_view, unread;
        cc_view = "";
        step_current_name_view = "";

        if (doc.is_cc && !((ref = doc.inbox_users) != null ? ref.includes(Meteor.userId()) : void 0) && Session.get("box") === 'inbox') {
          cc_view = "<label class='cc-label'>(" + TAPi18n.__("instance_cc_title") + ")</label> ";
        }

        agent_view = "";

        if (doc.agent_user_name) {
          agent_view = "<label class='cc-label'>(" + TAPi18n.__('process_delegation_rules_description', {
            userName: doc.agent_user_name
          }) + ")</label>";
        }

        unread = '';

        if (Session.get("box") === 'inbox' && doc.is_read === false) {
          unread = '<i class="ion ion-record unread"></i>';
        } else if (Session.get("box") === 'monitor' && doc.is_hidden === true) {
          unread = '<i class="fa fa-lock"></i>';
        }

        priorityIconClass = "";
        priorityValue = (ref1 = doc.values) != null ? ref1.priority : void 0;

        switch (priorityValue) {
          case "特急":
            priorityIconClass = "danger";
            break;

          case "紧急":
            priorityIconClass = "warning";
            break;

          case "办文":
            priorityIconClass = "muted";
        }

        if (priorityIconClass) {
          instanceNamePriorityClass = "color-priority color-priority-" + priorityIconClass;
        }

        return "<div class='instance-read-bar'>" + unread + "</div>\n<div class='instance-name " + instanceNamePriorityClass + "'>" + doc.name + cc_view + agent_view + "</div>";
      },
      visible: false,
      orderable: false
    }, {
      data: "applicant_name",
      title: t("instances_applicant_name"),
      visible: false,
      orderable: false
    }, {
      data: "submit_date",
      title: t("instances_submit_date"),
      render: function (val, type, doc) {
        if (doc.submit_date) {
          return moment(doc.submit_date).format('YYYY-MM-DD HH:mm');
        }
      },
      visible: false,
      orderable: true
    }, {
      data: "flow_name",
      title: t("instances_flow"),
      visible: false,
      orderable: false
    }, {
      data: "current_step_name",
      title: t("instances_step_current_name"),
      render: function (val, type, doc) {
        var cc_tag, judge, step_current_name;

        if (doc.state === "completed") {
          judge = doc.final_decision || "approved";
        }

        step_current_name = doc.current_step_name || '';
        cc_tag = '';

        if (doc.cc_count > 0) {
          cc_tag = TAPi18n.__('cc_tag');
        }

        return "<div class=\"step-current-state " + judge + "\">" + step_current_name + cc_tag + "</div>";
      },
      visible: false,
      orderable: false
    }, {
      data: "modified",
      title: t("instances_modified"),
      render: function (val, type, doc) {
        return moment(doc.modified).format('YYYY-MM-DD HH:mm');
      },
      visible: false,
      orderable: true
    }, {
      data: "start_date",
      title: t("instances_start_date"),
      render: function (val, type, doc) {
        if (doc.start_date) {
          return moment(doc.start_date).format('YYYY-MM-DD HH:mm');
        }
      },
      visible: false,
      orderable: true
    }, {
      data: "my_finish_date",
      render: function (val, type, doc) {
        if (doc.my_finish_date) {
          return moment(doc.my_finish_date).format('YYYY-MM-DD HH:mm');
        }
      },
      visible: false,
      orderable: true
    }, {
      data: "modified",
      visible: false
    }, {
      data: "keywords",
      visible: false
    }, {
      data: "is_archived",
      render: function (val, type, doc) {
        var ref;

        if ((doc != null ? (ref = doc.values) != null ? ref.record_need : void 0 : void 0) && doc.values.record_need === "true") {
          if (doc != null ? doc.is_archived : void 0) {
            return t("YES");
          }

          return t("NO");
        }
      },
      visible: false,
      orderable: false
    }],
    dom: function () {
      if (Steedos.isMobile()) {
        return 'tp';
      } else {
        return 'tpl';
      }
    }(),
    order: [[4, "desc"]],
    extraFields: ["form", "flow", "inbox_users", "state", "space", "applicant", "form_version", "flow_version", "is_cc", "cc_count", "is_read", "current_step_name", "values", "keywords", "final_decision", "flow_name", "is_hidden", "agent_user_name"],
    lengthChange: true,
    lengthMenu: [10, 15, 20, 25, 50, 100],
    pageLength: 10,
    info: false,
    searching: true,
    responsive: {
      details: false
    },
    autoWidth: false,
    changeSelector: function (selector, userId) {
      var ref, space, space_user;

      if (!userId) {
        return {
          _id: -1
        };
      }

      space = selector.space;

      if (!space) {
        if ((selector != null ? (ref = selector.$and) != null ? ref.length : void 0 : void 0) > 0) {
          space = selector.$and.getProperty('space')[0];
        }
      }

      if (!space) {
        return {
          _id: -1
        };
      }

      space_user = db.space_users.findOne({
        user: userId,
        space: space
      }, {
        fields: {
          _id: 1
        }
      });

      if (!space_user) {
        return {
          _id: -1
        };
      }

      return selector;
    },
    pagingType: "numbers"
  };

  if (flowId) {
    key = "instanceFlow" + flowId;
    options.name = key;
    TabularTables.instances.fields = fields;
    ins_fields = _handleListFields(TabularTables.instances.fields);
    ins_fields.forEach(function (f) {
      if (f.type !== 'table' && f.is_list_display) {
        return options.columns.push({
          data: f.name || f.code,
          title: t(f.name || f.code),
          visible: false,
          orderable: false,
          render: function (val, type, doc) {
            var value, values;
            values = doc.values || {};
            value = values[f.code];

            switch (f.type) {
              case 'user':
                value = value != null ? value.name : void 0;
                break;

              case 'group':
                value = value != null ? value.fullname : void 0;
                break;

              case 'date':
                if (value) {
                  value = moment(value).format('YYYY-MM-DD');
                }

                break;

              case 'dateTime':
                if (value) {
                  value = moment(value).format('YYYY-MM-DD HH:mm');
                }

                break;

              case 'checkbox':
                if (value === true || value === 'true') {
                  value = TAPi18n.__("form_field_checkbox_yes");
                } else {
                  value = TAPi18n.__("form_field_checkbox_no");
                }

                break;

              case 'odata':
                if (value) {
                  value = value['@label'];
                }

            }

            return value;
          }
        });
      }
    });
  }

  return options;
};

Meteor.startup(function () {
  return TabularTables.instances = new Tabular.Table(instancesListTableTabular());
});

GetBoxInstancesTabularOptions = function (box, flowId, fields) {
  var key, options;
  key = "instanceFlow" + box + flowId;

  if (box === "inbox") {
    options = _get_inbox_instances_tabular_options(flowId, fields);
  } else if (box === "outbox") {
    options = _get_outbox_instances_tabular_options(flowId, fields);
  } else {
    options = instancesListTableTabular(flowId, fields);

    if (!flowId) {
      options.name = "inbox_instances";
    }
  }

  if (flowId) {
    options.name = key;
  }

  return options;
};

_get_inbox_instances_tabular_options = function (flowId, fields) {
  var options;
  options = instancesListTableTabular(flowId, fields);

  if (!flowId) {
    options.name = "inbox_instances";
  }

  options.order = [[8, "desc"]];

  options.filteredRecordIds = function (table, selector, sort, skip, limit, old_filteredRecordIds, userId, findOptions) {
    var ag_sort, aggregate, aggregate_operation, async_aggregate, filteredRecordIds, s1, s1_0, s1_1;
    aggregate_operation = [{
      $match: selector
    }, {
      $project: {
        name: 1,
        "_approve": '$traces.approves'
      }
    }, {
      $unwind: "$_approve"
    }, {
      $unwind: "$_approve"
    }, {
      $match: {
        '_approve.is_finished': false,
        '_approve.handler': userId
      }
    }];

    if (sort && sort.length > 0) {
      s1 = sort[0];
      s1_0 = s1[0];
      s1_1 = s1[1];

      if (s1_0 === 'start_date') {
        findOptions.sort = [['modified', s1_1]];
        aggregate_operation.push({
          $group: {
            _id: "$_id",
            "approve_start_date": {
              $first: "$_approve.start_date"
            }
          }
        });
        ag_sort = {
          'approve_start_date': s1_1 === 'asc' ? 1 : -1
        };
        aggregate_operation.push({
          $sort: ag_sort
        });
        aggregate_operation.push({
          $skip: skip
        });
        aggregate_operation.push({
          $limit: limit
        });
        filteredRecordIds = new Array();

        aggregate = function (table, aggregate_operation, filteredRecordIds, cb) {
          table.collection.rawCollection().aggregate(aggregate_operation, function (err, data) {
            if (err) {
              throw new Error(err);
            }

            data.forEach(function (doc) {
              filteredRecordIds.push(doc._id);
            });

            if (cb) {
              cb();
            }
          });
        };

        async_aggregate = Meteor.wrapAsync(aggregate);
        async_aggregate(table, aggregate_operation, filteredRecordIds);
        return filteredRecordIds.uniq();
      } else {
        return old_filteredRecordIds;
      }
    }
  };

  return options;
};

Meteor.startup(function () {
  return TabularTables.inbox_instances = new Tabular.Table(GetBoxInstancesTabularOptions("inbox"));
});

_get_outbox_instances_tabular_options = function (flowId, fields) {
  var options;
  options = instancesListTableTabular(flowId, fields);

  if (!flowId) {
    options.name = "outbox_instances";
  }

  options.order = [[9, "desc"]];

  options.filteredRecordIds = function (table, selector, sort, skip, limit, old_filteredRecordIds, userId, findOptions) {
    var ag_sort, aggregate, aggregate_operation, async_aggregate, filteredRecordIds, s1, s1_0, s1_1;
    aggregate_operation = [{
      $match: selector
    }, {
      $project: {
        name: 1,
        "_approve": '$traces.approves'
      }
    }, {
      $unwind: "$_approve"
    }, {
      $unwind: "$_approve"
    }, {
      $match: {
        '_approve.is_finished': true,
        $or: [{
          '_approve.handler': userId
        }, {
          '_approve.user': userId
        }]
      }
    }];

    if (sort && sort.length > 0) {
      s1 = sort[0];
      s1_0 = s1[0];
      s1_1 = s1[1];

      if (s1_0 === 'my_finish_date') {
        findOptions.sort = [['modified', s1_1]];
        aggregate_operation.push({
          $group: {
            _id: "$_id",
            "approve_finish_date": {
              $last: "$_approve.finish_date"
            }
          }
        });
        ag_sort = {
          'approve_finish_date': s1_1 === 'asc' ? 1 : -1
        };
        aggregate_operation.push({
          $sort: ag_sort
        });
        aggregate_operation.push({
          $skip: skip
        });
        aggregate_operation.push({
          $limit: limit
        });
        filteredRecordIds = new Array();

        aggregate = function (table, aggregate_operation, filteredRecordIds, cb) {
          table.collection.rawCollection().aggregate(aggregate_operation, function (err, data) {
            if (err) {
              throw new Error(err);
            }

            data.forEach(function (doc) {
              filteredRecordIds.push(doc._id);
            });

            if (cb) {
              cb();
            }
          });
        };

        async_aggregate = Meteor.wrapAsync(aggregate);
        async_aggregate(table, aggregate_operation, filteredRecordIds);
        return filteredRecordIds.uniq();
      } else {
        return old_filteredRecordIds;
      }
    }
  };

  return options;
};

Meteor.startup(function () {
  return TabularTables.outbox_instances = new Tabular.Table(GetBoxInstancesTabularOptions("outbox"));
});

if (Meteor.isClient) {
  TabularTables.flowInstances = new ReactiveVar();
}

Meteor.startup(function () {
  return Tracker.autorun(function (c) {
    if (Meteor.isClient && !Steedos.isMobile()) {
      if (Session.get("flowId") && Session.get("box") !== 'draft') {
        return Meteor.call("newInstancesListTabular", Session.get("box"), Session.get("flowId"), function (error, result) {
          newInstancesListTabular(Session.get("box"), Session.get("flowId"), result);
          return Template.instance_list._changeOrder();
        });
      }
    }
  });
});

newInstancesListTabular = function (box, flowId, fields) {
  var flow, key, ref, ref1, ref2;

  if (!fields) {
    flow = db.flows.findOne({
      _id: flowId
    }, {
      fields: {
        form: 1
      }
    });
    fields = (ref = db.forms.findOne({
      _id: flow != null ? flow.form : void 0
    }, {
      fields: {
        'current.fields': 1
      }
    })) != null ? (ref1 = ref.current) != null ? ref1.fields : void 0 : void 0;
  }

  fields = _handleListFields(fields);

  if ((fields != null ? (ref2 = fields.filterProperty("is_list_display", true)) != null ? ref2.length : void 0 : void 0) > 0) {
    key = "instanceFlow" + box + flowId;

    if (Meteor.isClient) {
      TabularTables.flowInstances.set(new Tabular.Table(GetBoxInstancesTabularOptions(box, flowId, fields)));
    } else {
      new Tabular.Table(GetBoxInstancesTabularOptions(box, flowId, fields));
    }

    return console.log("new TabularTables ", key);
  }
};

if (Meteor.isServer) {
  Meteor.methods({
    newInstancesListTabular: function (box, flowId) {
      var fields, flow, ref, ref1;
      newInstancesListTabular(box, flowId);
      flow = db.flows.findOne({
        _id: flowId
      }, {
        fields: {
          form: 1
        }
      });
      fields = (ref = db.forms.findOne({
        _id: flow != null ? flow.form : void 0
      }, {
        fields: {
          'current.fields': 1
        }
      })) != null ? (ref1 = ref.current) != null ? ref1.fields : void 0 : void 0;
      return fields;
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".i18n.json",
    ".coffee"
  ]
});

require("/node_modules/meteor/steedos:workflow/i18n/en.i18n.json.js");
require("/node_modules/meteor/steedos:workflow/i18n/zh-CN.i18n.json.js");
require("/node_modules/meteor/steedos:workflow/checkNpm.js");
require("/node_modules/meteor/steedos:workflow/lib/collection_helpers.js");
require("/node_modules/meteor/steedos:workflow/lib/tapi18n.coffee");
require("/node_modules/meteor/steedos:workflow/lib/core.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/forms.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/flows.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/flow_roles.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/flow_positions.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/instances.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/categories.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/spaces.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/deleted_instances.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/auth_tokens.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/webhooks.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/space_user_signs.coffee");
require("/node_modules/meteor/steedos:workflow/lib/models/space_users.coffee");
require("/node_modules/meteor/steedos:workflow/lib/cfs/instances.coffee");
require("/node_modules/meteor/steedos:workflow/client/lib/instance_readonly_template.coffee");
require("/node_modules/meteor/steedos:workflow/client/lib/template_manager.coffee");
require("/node_modules/meteor/steedos:workflow/client/coreform/inputTypes/coreform-table/steedos-table.js");
require("/node_modules/meteor/steedos:workflow/client/views/instance/_image_sign.coffee");
require("/node_modules/meteor/steedos:workflow/client/views/instance/_instance_form.coffee");
require("/node_modules/meteor/steedos:workflow/client/views/instance/_instance_attachments.js");
require("/node_modules/meteor/steedos:workflow/client/views/instance/_instance_sign_text.coffee");
require("/node_modules/meteor/steedos:workflow/client/views/instance/_traces_help.coffee");
require("/node_modules/meteor/steedos:workflow/client/views/instance/_related_instances.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/set_instance_step_approve.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/get_instance_data.js");
require("/node_modules/meteor/steedos:workflow/server/methods/save_instance.js");
require("/node_modules/meteor/steedos:workflow/server/methods/trace_approve_cc.js");
require("/node_modules/meteor/steedos:workflow/server/methods/forward_instance.js");
require("/node_modules/meteor/steedos:workflow/server/methods/cfs_instances.js");
require("/node_modules/meteor/steedos:workflow/server/methods/instance_approve.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/instance_return.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/instance_remind.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/next_step_users_not_found.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/instance_number_rules.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/check_main_attach.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/related_instances.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/edit_flow_positions.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/start_flow.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/instance_traces.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/instance_batch.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/flow.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/distribute.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/hide_instance.coffee");
require("/node_modules/meteor/steedos:workflow/server/methods/instance_value.coffee");
require("/node_modules/meteor/steedos:workflow/server/routes/instance.coffee");
require("/node_modules/meteor/steedos:workflow/server/routes/steedos_css.coffee");
require("/node_modules/meteor/steedos:workflow/server/routes/instance_draft_view.coffee");
require("/node_modules/meteor/steedos:workflow/routes/nextStepUsers.js");
require("/node_modules/meteor/steedos:workflow/routes/getSpaceUsers.js");
require("/node_modules/meteor/steedos:workflow/routes/getFormulaUserObjects.js");
require("/node_modules/meteor/steedos:workflow/routes/init_formula_values.js");
require("/node_modules/meteor/steedos:workflow/routes/getNameForUser.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_designer_startup.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_engine.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_drafts.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_remove.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_submit.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_terminate.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_reassign.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_relocate.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_archive.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_export.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_space_changeset.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_retrieve.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_forward.js");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_instance.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_open_pending.coffee");
require("/node_modules/meteor/steedos:workflow/routes/export_table_template.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_open_drafts.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_open_get.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_open_submit.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_open_save.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_open_get_by_stepname.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_open_cfs.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_forward_refill.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_workflow_forward_table_refill.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_sub_table_sort.coffee");
require("/node_modules/meteor/steedos:workflow/routes/test_webhook.coffee");
require("/node_modules/meteor/steedos:workflow/server/lib/1_form_formula.js");
require("/node_modules/meteor/steedos:workflow/server/lib/get_handlers_manager.coffee");
require("/node_modules/meteor/steedos:workflow/server/lib/permission_manager.coffee");
require("/node_modules/meteor/steedos:workflow/server/lib/approve_manager.coffee");
require("/node_modules/meteor/steedos:workflow/server/lib/flow_manager.coffee");
require("/node_modules/meteor/steedos:workflow/server/lib/form_manager.coffee");
require("/node_modules/meteor/steedos:workflow/server/lib/step_manager.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/categories.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/cfs_instances.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/flow_positions.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/flow_positions_tabular.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/flow_roles.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/flows.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/forms.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/instance_data.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/instance_list.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/instance_tabular.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/instance_draft.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/distributed_instances_state_by_ids.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/related_instaces.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/space_user_signs.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/user_inbox_instance.coffee");
require("/node_modules/meteor/steedos:workflow/server/publications/flow_main_attach_template.coffee");
require("/node_modules/meteor/steedos:workflow/lib/admin.coffee");
require("/node_modules/meteor/steedos:workflow/related_instances_tabular.coffee");
require("/node_modules/meteor/steedos:workflow/tabular.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_formula_users.coffee");
require("/node_modules/meteor/steedos:workflow/routes/api_formula_organizations.coffee");
require("/node_modules/meteor/steedos:workflow/server/flow-template/workflow_template.coffee");
require("/node_modules/meteor/steedos:workflow/server/startup.coffee");
require("/node_modules/meteor/steedos:workflow/server/lib/instance_manager.coffee");
require("/node_modules/meteor/steedos:workflow/server/schedule/auto_finish_process_delegation.coffee");
require("/node_modules/meteor/steedos:workflow/server/schedule/timeout_auto_submit.coffee");

/* Exports */
Package._define("steedos:workflow", {
  InstanceManager: InstanceManager,
  WorkflowManager_format: WorkflowManager_format,
  Workflow: Workflow,
  SteedosTable: SteedosTable,
  InstanceReadOnlyTemplate: InstanceReadOnlyTemplate,
  TemplateManager: TemplateManager,
  CoreForm: CoreForm,
  InstanceNumberRules: InstanceNumberRules,
  getHandlersManager: getHandlersManager,
  permissionManager: permissionManager,
  workflowTemplate: workflowTemplate,
  approveManager: approveManager,
  stepManager: stepManager,
  flowManager: flowManager,
  formManager: formManager
});

})();

//# sourceURL=meteor://💻app/packages/steedos_workflow.js