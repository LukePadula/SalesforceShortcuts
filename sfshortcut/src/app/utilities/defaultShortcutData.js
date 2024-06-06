export const defaultFavourites = [
  "home",
  "setup_home",
  "object_manager",
  "users",
  "flows",
  "developer_console",
];

export const defaultShortcuts = {
  home: {
    label: "Home",
    path: "/lightning/page/home",
    pageGroup: "Salesforce",
  },
  object_manager: {
    label: "Object Manager",
    path: "/lightning/setup/ObjectManager/home",
    pageGroup: "Objects and Fields",
  },
  developer_console: {
    label: "Developer Console",
    path: "/_ui/common/apex/debug/ApexCSIPage",
    pageGroup: "Developer Tools",
  },
  setup_home: {
    label: "Setup Home",
    path: "/lightning/setup/SetupOneHome/home",
    pageGroup: "Setup",
  },
  service_setup_assistant: {
    label: "Service Setup Assistant",
    path: "/lightning/setup/ServiceHome/home",
    pageGroup: "Setup",
  },
  commerce_setup_assistant: {
    label: "Commerce Setup Assistant",
    path: "/lightning/setup/CommerceSetupAssistant/home",
    pageGroup: "Setup",
  },
  "multi-factor_authentication_assistant": {
    label: "Multi-Factor Authentication Assistant",
    path: "/lightning/setup/MfaAssistant/home",
    pageGroup: "Setup",
  },
  hyperforce_assistant: {
    label: "Hyperforce Assistant",
    path: "/lightning/setup/HyperforceAssistant/home",
    pageGroup: "Setup",
  },
  release_updates: {
    label: "Release Updates",
    path: "/lightning/setup/ReleaseUpdates/home",
    pageGroup: "Setup",
  },
  lightning_experience_transition_assistant: {
    label: "Lightning Experience Transition Assistant",
    path: "/lightning/setup/EnableLightningExperience/home",
    pageGroup: "Setup",
  },
  salesforce_mobile_app: {
    label: "Salesforce Mobile App",
    path: "/lightning/setup/SalesforceMobileAppQuickStart/home",
    pageGroup: "Setup",
  },
  lightning_usage: {
    label: "Lightning Usage",
    path: "/lightning/setup/LightningUsageSetup/home",
    pageGroup: "Setup",
  },
  optimizer: {
    label: "Optimizer",
    path: "/lightning/setup/SalesforceOptimizer/home",
    pageGroup: "Setup",
  },
  sales_cloud_everywhere: {
    label: "Sales Cloud Everywhere",
    path: "/lightning/setup/SalesCloudEverywhereSettings/home",
    pageGroup: "Setup",
  },
  permission_set_groups: {
    label: "Permission Set Groups",
    path: "/lightning/setup/PermSetGroups/home",
    pageGroup: "Users",
  },
  permission_sets: {
    label: "Permission Sets",
    path: "/lightning/setup/PermSets/home",
    pageGroup: "Users",
  },
  profiles: {
    label: "Profiles",
    path: "/lightning/setup/EnhancedProfiles/home",
    pageGroup: "Users",
  },
  public_groups: {
    label: "Public Groups",
    path: "/lightning/setup/PublicGroups/home",
    pageGroup: "Users",
  },
  queues: {
    label: "Queues",
    path: "/lightning/setup/Queues/home",
    pageGroup: "Users",
  },
  roles: {
    label: "Roles",
    path: "/lightning/setup/Roles/home",
    pageGroup: "Users",
  },
  user_management_settings: {
    label: "User Management Settings",
    path: "/lightning/setup/UserManagementSettings/home",
    pageGroup: "Users",
  },
  users: {
    label: "Users",
    path: "/lightning/setup/ManageUsers/home",
    pageGroup: "Users",
  },
  big_objects: {
    label: "Big Objects",
    path: "/lightning/setup/BigObjects/home",
    pageGroup: "Data",
  },
  conversation_transcript_export: {
    label: "Conversation Transcript Export",
    path: "/lightning/setup/CssDataExport/home",
    pageGroup: "Data",
  },
  data_export: {
    label: "Data Export",
    path: "/lightning/setup/DataManagementExport/home",
    pageGroup: "Data",
  },
  data_integration_metrics: {
    label: "Data Integration Metrics",
    path: "/lightning/setup/XCleanVitalsUi/home",
    pageGroup: "Data",
  },
  data_integration_rules: {
    label: "Data Integration Rules",
    path: "/lightning/setup/CleanRules/home",
    pageGroup: "Data",
  },
  duplicate_error_logs: {
    label: "Duplicate Error Logs",
    path: "/lightning/setup/DuplicateErrorLog/home",
    pageGroup: "Duplicate Management",
  },
  duplicate_rules: {
    label: "Duplicate Rules",
    path: "/lightning/setup/DuplicateRules/home",
    pageGroup: "Duplicate Management",
  },
  matching_rules: {
    label: "Matching Rules",
    path: "/lightning/setup/MatchingRules/home",
    pageGroup: "Duplicate Management",
  },
  mass_delete_records: {
    label: "Mass Delete Records",
    path: "/lightning/setup/DataManagementDelete/home",
    pageGroup: "Duplicate Management",
  },
  mass_transfer_approval_requests: {
    label: "Mass Transfer Approval Requests",
    path: "/lightning/setup/DataManagementManageApprovals/home",
    pageGroup: "Duplicate Management",
  },
  mass_transfer_records: {
    label: "Mass Transfer Records",
    path: "/lightning/setup/DataManagementTransfer/home",
    pageGroup: "Duplicate Management",
  },
  mass_update_addresses: {
    label: "Mass Update Addresses",
    path: "/lightning/setup/DataManagementMassUpdateAddresses/home",
    pageGroup: "Duplicate Management",
  },
  picklist_settings: {
    label: "Picklist Settings",
    path: "/lightning/setup/PicklistSettings/home",
    pageGroup: "Duplicate Management",
  },
  schema_settings: {
    label: "Schema Settings",
    path: "/lightning/setup/SchemaSettings/home",
    pageGroup: "Duplicate Management",
  },
  "state_and_country/territory_picklists": {
    label: "State and Country/Territory Picklists",
    path: "/lightning/setup/AddressCleanerOverview/home",
    pageGroup: "Duplicate Management",
  },
  storage_usage: {
    label: "Storage Usage",
    path: "/lightning/setup/CompanyResourceDisk/home",
    pageGroup: "Duplicate Management",
  },
  apex_exception_email: {
    label: "Apex Exception Email",
    path: "/lightning/setup/ApexExceptionEmail/home",
    pageGroup: "Email",
  },
  classic_email_templates: {
    label: "Classic Email Templates",
    path: "/lightning/setup/CommunicationTemplatesEmail/home",
    pageGroup: "Email",
  },
  classic_letterheads: {
    label: "Classic Letterheads",
    path: "/lightning/setup/CommunicationTemplatesLetterheads/home",
    pageGroup: "Email",
  },
  compliance_bcc_email: {
    label: "Compliance BCC Email",
    path: "/lightning/setup/SecurityComplianceBcc/home",
    pageGroup: "Email",
  },
  dkim_keys: {
    label: "DKIM Keys",
    path: "/lightning/setup/EmailDKIMList/home",
    pageGroup: "Email",
  },
  delete_attachments_sent_as_links: {
    label: "Delete Attachments Sent as Links",
    path: "/lightning/setup/EmailAttachmentManagement/home",
    pageGroup: "Email",
  },
  deliverability: {
    label: "Deliverability",
    path: "/lightning/setup/OrgEmailSettings/home",
    pageGroup: "Email",
  },
  email_address_internationalization: {
    label: "Email Address Internationalization",
    path: "/lightning/setup/InternationalEmailAddresses/home",
    pageGroup: "Email",
  },
  email_attachments: {
    label: "Email Attachments",
    path: "/lightning/setup/EmailAttachmentSettings/home",
    pageGroup: "Email",
  },
  email_domain_filters: {
    label: "Email Domain Filters",
    path: "/lightning/setup/EmailDomainFilter/home",
    pageGroup: "Email Delivery Settings",
  },
  email_relays: {
    label: "Email Relays",
    path: "/lightning/setup/EmailRelay/home",
    pageGroup: "Email Delivery Settings",
  },
  email_footers: {
    label: "Email Footers",
    path: "/lightning/setup/EmailDisclaimers/home",
    pageGroup: "Email Delivery Settings",
  },
  email_to_salesforce: {
    label: "Email to Salesforce",
    path: "/lightning/setup/EmailToSalesforce/home",
    pageGroup: "Email Delivery Settings",
  },
  enhanced_email: {
    label: "Enhanced Email",
    path: "/lightning/setup/EnhancedEmail/home",
    pageGroup: "Email Delivery Settings",
  },
  filter_email_tracking: {
    label: "Filter Email Tracking",
    path: "/lightning/setup/FilterEmailTracking/home",
    pageGroup: "Email Delivery Settings",
  },
  gmail_integration_and_sync: {
    label: "Gmail Integration and Sync",
    path: "/lightning/setup/LightningForGmailAndSyncSettings/home",
    pageGroup: "Email Delivery Settings",
  },
  lightning_email_templates: {
    label: "Lightning Email Templates",
    path: "/lightning/setup/LightningEmailTemplateSetup/home",
    pageGroup: "Email Delivery Settings",
  },
  mail_merge_templates: {
    label: "Mail Merge Templates",
    path: "/lightning/setup/CommunicationTemplatesWord/home",
    pageGroup: "Email Delivery Settings",
  },
  "organization-wide_addresses": {
    label: "Organization-Wide Addresses",
    path: "/lightning/setup/OrgWideEmailAddresses/home",
    pageGroup: "Email Delivery Settings",
  },
  outlook_integration_and_sync: {
    label: "Outlook Integration and Sync",
    path: "/lightning/setup/LightningForOutlookAndSyncSettings/home",
    pageGroup: "Email Delivery Settings",
  },
  send_through_external_email_services: {
    label: "Send through External Email Services",
    path: "/lightning/setup/EmailTransportServiceSetupPage/home",
    pageGroup: "Email Delivery Settings",
  },
  test_deliverability: {
    label: "Test Deliverability",
    path: "/lightning/setup/TestEmailDeliverability/home",
    pageGroup: "Email Delivery Settings",
  },
  app_manager: {
    label: "App Manager",
    path: "/lightning/setup/NavigationMenus/home",
    pageGroup: "Apps",
  },
  appexchange_marketplace: {
    label: "AppExchange Marketplace",
    path: "/lightning/setup/AppExchangeMarketplace/home",
    pageGroup: "Apps",
  },
  connected_apps_oauth_usage: {
    label: "Connected Apps OAuth Usage",
    path: "/lightning/setup/ConnectedAppsUsage/home",
    pageGroup: "Connected Apps",
  },
  manage_connected_apps: {
    label: "Manage Connected Apps",
    path: "/lightning/setup/ConnectedApplication/home",
    pageGroup: "Connected Apps",
  },
  settings: {
    label: "Settings",
    path: "/lightning/setup/EinsteinSearchSettings/home",
    pageGroup: "Einstein Search",
  },
  flow_category: {
    label: "Flow Category",
    path: "/lightning/setup/FlowCategory/home",
    pageGroup: "Lightning Bolt",
  },
  lightning_bolt_solutions: {
    label: "Lightning Bolt Solutions",
    path: "/lightning/setup/LightningBolt/home",
    pageGroup: "Lightning Bolt",
  },
  salesforce_branding: {
    label: "Salesforce Branding",
    path: "/lightning/setup/Salesforce1Branding/home",
    pageGroup: "Salesforce",
  },
  salesforce_navigation: {
    label: "Salesforce Navigation",
    path: "/lightning/setup/ProjectOneAppMenu/home",
    pageGroup: "Salesforce",
  },
  salesforce_notifications: {
    label: "Salesforce Notifications",
    path: "/lightning/setup/NotificationsSettings/home",
    pageGroup: "Salesforce",
  },
  salesforce_offline: {
    label: "Salesforce Offline",
    path: "/lightning/setup/MobileOfflineStorageAdmin/home",
    pageGroup: "Salesforce",
  },
  salesforce_settings: {
    label: "Salesforce Settings",
    path: "/lightning/setup/Salesforce1Settings/home",
    pageGroup: "Salesforce",
  },
  installed_packages: {
    label: "Installed Packages",
    path: "/lightning/setup/ImportedPackage/home",
    pageGroup: "Packaging",
  },
  package_manager: {
    label: "Package Manager",
    path: "/lightning/setup/Package/home",
    pageGroup: "Packaging",
  },
  package_usage: {
    label: "Package Usage",
    path: "/lightning/setup/PackageUsageSummary/home",
    pageGroup: "Packaging",
  },
  app_install_history: {
    label: "App Install History",
    path: "/lightning/setup/InsightsSetupAppHistoryControlPanel/home",
    pageGroup: "Apps",
  },
  "auto-installed_apps": {
    label: "Auto-Installed Apps",
    path: "/lightning/setup/InsightsSetupAutoInstalledApps/home",
    pageGroup: "Apps",
  },
  access_policies: {
    label: "Access Policies",
    path: "/lightning/setup/SessionLevelPolicyUI/home",
    pageGroup: "Reports & Dashboards",
  },
  historical_trending: {
    label: "Historical Trending",
    path: "/lightning/setup/HistoricalTrendingUI/home",
    pageGroup: "Reports & Dashboards",
  },
  report_types: {
    label: "Report Types",
    path: "/lightning/setup/CustomReportTypes/home",
    pageGroup: "Reports & Dashboards",
  },
  reporting_snapshots: {
    label: "Reporting Snapshots",
    path: "/lightning/setup/AnalyticSnapshots/home",
    pageGroup: "Reports & Dashboards",
  },
  reports_and_dashboards_settings: {
    label: "Reports and Dashboards Settings",
    path: "/lightning/setup/ReportUI/home",
    pageGroup: "Reports & Dashboards",
  },
  tableau_embedding: {
    label: "Tableau Embedding",
    path: "/lightning/setup/TableauEmbeddingSettings/home",
    pageGroup: "Tableau",
  },
  chatter_settings: {
    label: "Chatter Settings",
    path: "/lightning/setup/CollaborationSettings/home",
    pageGroup: "Chatter",
  },
  email_settings: {
    label: "Email Settings",
    path: "/lightning/setup/ChatterEmailSettings/home",
    pageGroup: "Chatter",
  },
  feed_item_actions: {
    label: "Feed Item Actions",
    path: "/lightning/setup/FeedItemActions/home",
    pageGroup: "Feed Item",
  },
  feed_item_layouts: {
    label: "Feed Item Layouts",
    path: "/lightning/setup/FeedItemLayouts/home",
    pageGroup: "Feed Item",
  },
  feed_tracking: {
    label: "Feed Tracking",
    path: "/lightning/setup/FeedTracking/home",
    pageGroup: "Feed Item",
  },
  group_layouts: {
    label: "Group Layouts",
    path: "/lightning/setup/CollaborationGroupLayouts/home",
    pageGroup: "Groups",
  },
  group_member_triggers: {
    label: "Group Member Triggers",
    path: "/lightning/setup/CollaborationGroupMemberTriggers/home",
    pageGroup: "Groups",
  },
  group_record_triggers: {
    label: "Group Record Triggers",
    path: "/lightning/setup/CollaborationGroupRecordTriggers/home",
    pageGroup: "Groups",
  },
  group_triggers: {
    label: "Group Triggers",
    path: "/lightning/setup/CollaborationGroupTriggers/home",
    pageGroup: "Groups",
  },
  record_types: {
    label: "Record Types",
    path: "/lightning/setup/CollaborationGroupRecordTypes/home",
    pageGroup: "Groups",
  },
  influence: {
    label: "Influence",
    path: "/lightning/setup/InfluenceSettings/home",
    pageGroup: "Groups",
  },
  feedcomment_triggers: {
    label: "FeedComment Triggers",
    path: "/lightning/setup/FeedCommentTriggers/home",
    pageGroup: "Triggers",
  },
  feeditem_triggers: {
    label: "FeedItem Triggers",
    path: "/lightning/setup/FeedItemTriggers/home",
    pageGroup: "Triggers",
  },
  "licenses_&_limits": {
    label: "Licenses & Limits",
    path: "/lightning/setup/ViewLicensesAndLimits/home",
    pageGroup: "Data.com",
  },
  prospector_preferences: {
    label: "Prospector Preferences",
    path: "/lightning/setup/DataDotComPreferences/home",
    pageGroup: "Data.com",
  },
  prospector_users: {
    label: "Prospector Users",
    path: "/lightning/setup/ProspectingUsers/home",
    pageGroup: "Data.com",
  },
  functions: {
    label: "Functions",
    path: "/lightning/setup/Functions/home",
    pageGroup: "Digital Experiences",
  },
  accounts_as_campaign_members: {
    label: "Accounts As Campaign Members",
    path: "/lightning/setup/AccountAsCM/home",
    pageGroup: "Marketing",
  },
  "auto-association_settings": {
    label: "Auto-Association Settings",
    path: "/lightning/setup/AutoAssociationSettings/home",
    pageGroup: "Campaign Influence",
  },
  campaign_influence_settings: {
    label: "Campaign Influence Settings",
    path: "/lightning/setup/CampaignInfluenceSettings/home",
    pageGroup: "Campaign Influence",
  },
  lead_assignment_rules: {
    label: "Lead Assignment Rules",
    path: "/lightning/setup/LeadRules/home",
    pageGroup: "Campaign Influence",
  },
  "lead_auto-response_rules": {
    label: "Lead Auto-Response Rules",
    path: "/lightning/setup/LeadResponses/home",
    pageGroup: "Campaign Influence",
  },
  lead_processes: {
    label: "Lead Processes",
    path: "/lightning/setup/LeadProcess/home",
    pageGroup: "Campaign Influence",
  },
  lead_settings: {
    label: "Lead Settings",
    path: "/lightning/setup/LeadSettings/home",
    pageGroup: "Campaign Influence",
  },
  lead_gen_fields: {
    label: "Lead Gen Fields",
    path: "/lightning/setup/LinkedInLeadGenFields/home",
    pageGroup: "LinkedIn Lead Gen",
  },
  linkedin_accounts: {
    label: "LinkedIn Accounts",
    path: "/lightning/setup/LinkedInLeadGenAccounts/home",
    pageGroup: "LinkedIn Lead Gen",
  },
  "web-to-lead": {
    label: "Web-to-Lead",
    path: "/lightning/setup/LeadWebtoleads/home",
    pageGroup: "LinkedIn Lead Gen",
  },
  omnichannel_inventory: {
    label: "Omnichannel Inventory",
    path: "/lightning/setup/OmniChannelInventory/home",
    pageGroup: "LinkedIn Lead Gen",
  },
  "quip_(salesforce_anywhere)": {
    label: "Quip (Salesforce Anywhere)",
    path: "/lightning/setup/SalesforceAnywhereSetupPage/home",
    pageGroup: "LinkedIn Lead Gen",
  },
  revenue_settings: {
    label: "Revenue Settings",
    path: "/lightning/setup/RevenueSettings/home",
    pageGroup: "Revenue Lifecycle Management",
  },
  activity_settings: {
    label: "Activity Settings",
    path: "/lightning/setup/HomeActivitiesSetupPage/home",
    pageGroup: "ExpandAccounts",
  },
  contact_intelligence_view_setup: {
    label: "Contact Intelligence View Setup",
    path: "/lightning/setup/ContactInspectionSettings/home",
    pageGroup: "ExpandAccounts",
  },
  contact_roles_on_contracts: {
    label: "Contact Roles on Contracts",
    path: "/lightning/setup/ContractContactRoles/home",
    pageGroup: "ExpandAccounts",
  },
  contact_roles_on_opportunities: {
    label: "Contact Roles on Opportunities",
    path: "/lightning/setup/OpportunityRoles/home",
    pageGroup: "ExpandAccounts",
  },
  contract_settings: {
    label: "Contract Settings",
    path: "/lightning/setup/ContractSettings/home",
    pageGroup: "ExpandAccounts",
  },
  forecasts_hierarchy: {
    label: "Forecasts Hierarchy",
    path: "/lightning/setup/Forecasting3Role/home",
    pageGroup: "Forecasts",
  },
  forecasts_settings: {
    label: "Forecasts Settings",
    path: "/lightning/setup/Forecasting3Settings/home",
    pageGroup: "Forecasts",
  },
  individual_settings: {
    label: "Individual Settings",
    path: "/lightning/setup/IndividualSettings/home",
    pageGroup: "Forecasts",
  },
  lead_intelligence_view_setup: {
    label: "Lead Intelligence View Setup",
    path: "/lightning/setup/LeadInspectionSettings/home",
    pageGroup: "Forecasts",
  },
  linkedin_sales_navigator: {
    label: "LinkedIn Sales Navigator",
    path: "/lightning/setup/LinkedInSalesNavigatorPage/home",
    pageGroup: "Forecasts",
  },
  notes_settings: {
    label: "Notes Settings",
    path: "/lightning/setup/NotesSetupPage/home",
    pageGroup: "Meetings",
  },
  big_deal_alert: {
    label: "Big Deal Alert",
    path: "/lightning/setup/OpportunityAlerts/home",
    pageGroup: "Opportunities",
  },
  opportunity_settings: {
    label: "Opportunity Settings",
    path: "/lightning/setup/OpportunitySettings/home",
    pageGroup: "Opportunities",
  },
  opportunity_team_settings: {
    label: "Opportunity Team Settings",
    path: "/lightning/setup/OpportunityTeamMemberSettings/home",
    pageGroup: "Opportunities",
  },
  order_settings: {
    label: "Order Settings",
    path: "/lightning/setup/OrderSettings/home",
    pageGroup: "Opportunities",
  },
  asset_settings: {
    label: "Asset Settings",
    path: "/lightning/setup/AssetSettings/home",
    pageGroup: "Products",
  },
  product_schedules_settings: {
    label: "Product Schedules Settings",
    path: "/lightning/setup/Product2ScheduleSetup/home",
    pageGroup: "Products",
  },
  product_settings: {
    label: "Product Settings",
    path: "/lightning/setup/Product2Settings/home",
    pageGroup: "Products",
  },
  quotes_settings: {
    label: "Quotes Settings",
    path: "/lightning/setup/QuoteSettings/home",
    pageGroup: "Quotes",
  },
  setup_assistant: {
    label: "Setup Assistant",
    path: "/lightning/setup/EmailIqSetupPage/home",
    pageGroup: "Inbox",
  },
  log_a_call: {
    label: "Log a Call",
    path: "/lightning/setup/DialerLogACallSetup/home",
    pageGroup: "Inbox",
  },
  sales_engagement_settings: {
    label: "Sales Engagement Settings",
    path: "/lightning/setup/SalesEngagement/home",
    pageGroup: "Inbox",
  },
  sales_processes: {
    label: "Sales Processes",
    path: "/lightning/setup/OpportunityProcess/home",
    pageGroup: "Inbox",
  },
  territory_settings: {
    label: "Territory Settings",
    path: "/lightning/setup/Territory2Settings/home",
    pageGroup: "Territories",
  },
  update_reminders: {
    label: "Update Reminders",
    path: "/lightning/setup/OpportunityUpdateReminders/home",
    pageGroup: "Territories",
  },
  asset_files: {
    label: "Asset Files",
    path: "/lightning/setup/ContentAssets/home",
    pageGroup: "Salesforce Files",
  },
  content_deliveries_and_public_links: {
    label: "Content Deliveries and Public Links",
    path: "/lightning/setup/ContentDistribution/home",
    pageGroup: "Salesforce Files",
  },
  files_connect: {
    label: "Files Connect",
    path: "/lightning/setup/ContentHub/home",
    pageGroup: "Salesforce Files",
  },
  general_settings: {
    label: "General Settings",
    path: "/lightning/setup/FilesGeneralSettings/home",
    pageGroup: "Salesforce Files",
  },
  regenerate_previews: {
    label: "Regenerate Previews",
    path: "/lightning/setup/RegeneratePreviews/home",
    pageGroup: "Salesforce Files",
  },
  salesforce_crm_content: {
    label: "Salesforce CRM Content",
    path: "/lightning/setup/SalesforceCRMContent/home",
    pageGroup: "Salesforce Files",
  },
  get_started: {
    label: "Get Started",
    path: "/lightning/setup/IoTGettingStarted/home",
    pageGroup: "Salesforce IoT",
  },
  scheduled_reminder_settings: {
    label: "Scheduled Reminder Settings",
    path: "/lightning/setup/ReminderSettings/home",
    pageGroup: "Scheduled Reminders",
  },
  call_centers: {
    label: "Call Centers",
    path: "/lightning/setup/CallCenters/home",
    pageGroup: "Call Center",
  },
  directory_numbers: {
    label: "Directory Numbers",
    path: "/lightning/setup/AdditionalDirectoryNumbers/home",
    pageGroup: "Call Center",
  },
  softphone_layouts: {
    label: "Softphone Layouts",
    path: "/lightning/setup/SoftphoneLayouts/home",
    pageGroup: "Call Center",
  },
  case_assignment_rules: {
    label: "Case Assignment Rules",
    path: "/lightning/setup/CaseRules/home",
    pageGroup: "Call Center",
  },
  "case_auto-response_rules": {
    label: "Case Auto-Response Rules",
    path: "/lightning/setup/CaseResponses/home",
    pageGroup: "Call Center",
  },
  case_comment_triggers: {
    label: "Case Comment Triggers",
    path: "/lightning/setup/CaseCommentTriggers/home",
    pageGroup: "Call Center",
  },
  case_merge: {
    label: "Case Merge",
    path: "/lightning/setup/CaseMerge/home",
    pageGroup: "Call Center",
  },
  case_team_roles: {
    label: "Case Team Roles",
    path: "/lightning/setup/CaseTeamRoles/home",
    pageGroup: "Case Teams",
  },
  predefined_case_teams: {
    label: "Predefined Case Teams",
    path: "/lightning/setup/CaseTeamTemplates/home",
    pageGroup: "Case Teams",
  },
  chat_settings: {
    label: "Chat Settings",
    path: "/lightning/setup/LiveAgentSettings/home",
    pageGroup: "Chat",
  },
  contact_roles_on_cases: {
    label: "Contact Roles on Cases",
    path: "/lightning/setup/CaseContactRoles/home",
    pageGroup: "Chat",
  },
  conversation_intelligence_rules: {
    label: "Conversation Intelligence Rules",
    path: "/lightning/setup/CiSignals/home",
    pageGroup: "Chat",
  },
  customer_contact_requests: {
    label: "Customer Contact Requests",
    path: "/lightning/setup/ContactRequestFlows/home",
    pageGroup: "Chat",
  },
  customer_service_incident_management: {
    label: "Customer Service Incident Management",
    path: "/lightning/setup/IncidentManagement/home",
    pageGroup: "Chat",
  },
  "email-to-case": {
    label: "Email-to-Case",
    path: "/lightning/setup/EmailToCase/home",
    pageGroup: "Chat",
  },
  channel_menu: {
    label: "Channel Menu",
    path: "/lightning/setup/ChannelMenuDeployments/home",
    pageGroup: "Embedded Service",
  },
  embedded_service_deployments: {
    label: "Embedded Service Deployments",
    path: "/lightning/setup/EmbeddedServiceDeployments/home",
    pageGroup: "Embedded Service",
  },
  "messaging_for_in-app_and_web_user_verification": {
    label: "Messaging for In-App and Web User Verification",
    path: "/lightning/setup/Authorization/home",
    pageGroup: "Embedded Service",
  },
  entitlement_processes: {
    label: "Entitlement Processes",
    path: "/lightning/setup/DataManagementManageSlaProcess/home",
    pageGroup: "Monitoring",
  },
  entitlement_settings: {
    label: "Entitlement Settings",
    path: "/lightning/setup/EntitlementSettings/home",
    pageGroup: "Entitlement Management",
  },
  entitlement_templates: {
    label: "Entitlement Templates",
    path: "/lightning/setup/EntitlementTemplates/home",
    pageGroup: "Entitlement Management",
  },
  milestones: {
    label: "Milestones",
    path: "/lightning/setup/MilestoneTypes/home",
    pageGroup: "Entitlement Management",
  },
  escalation_rules: {
    label: "Escalation Rules",
    path: "/lightning/setup/CaseEscRules/home",
    pageGroup: "Entitlement Management",
  },
  feed_filters: {
    label: "Feed Filters",
    path: "/lightning/setup/FeedFilterDefinitions/home",
    pageGroup: "Entitlement Management",
  },
  field_service_mobile_app_builder: {
    label: "Field Service Mobile App Builder",
    path: "/lightning/setup/FieldServiceAppBuilder/home",
    pageGroup: "Field Service Mobile",
  },
  field_service_settings: {
    label: "Field Service Settings",
    path: "/lightning/setup/FieldServiceSettings/home",
    pageGroup: "Field Service Mobile",
  },
  macro_settings: {
    label: "Macro Settings",
    path: "/lightning/setup/MacroSettings/home",
    pageGroup: "Field Service Mobile",
  },
  messaging_components: {
    label: "Messaging Components",
    path: "/lightning/setup/ConversationMessageDefinitions/home",
    pageGroup: "Messaging",
  },
  messaging_settings: {
    label: "Messaging Settings",
    path: "/lightning/setup/LiveMessageSetup/home",
    pageGroup: "Messaging",
  },
  sensitive_data_rules_for_enhanced_channels: {
    label: "Sensitive Data Rules for Enhanced Channels",
    path: "/lightning/setup/MessagingSensitiveDataRulesEnhanced/home",
    pageGroup: "Sensitive Data Rules",
  },
  "omni-channel_settings": {
    label: "Omni-Channel Settings",
    path: "/lightning/setup/OmniChannelSettings/home",
    pageGroup: "Omni-Channel",
  },
  support_processes: {
    label: "Support Processes",
    path: "/lightning/setup/CaseProcess/home",
    pageGroup: "Omni-Channel",
  },
  support_settings: {
    label: "Support Settings",
    path: "/lightning/setup/CaseSettings/home",
    pageGroup: "Omni-Channel",
  },
  swarming: {
    label: "Swarming",
    path: "/lightning/setup/CaseSwarming/home",
    pageGroup: "Omni-Channel",
  },
  "web-to-case": {
    label: "Web-to-Case",
    path: "/lightning/setup/CaseWebtocase/home",
    pageGroup: "Omni-Channel",
  },
  "web-to-case_html_generator": {
    label: "Web-to-Case HTML Generator",
    path: "/lightning/setup/CaseWebToCaseHtmlGenerator/home",
    pageGroup: "Omni-Channel",
  },
  survey_settings: {
    label: "Survey Settings",
    path: "/lightning/setup/SurveySettings/home",
    pageGroup: "Survey",
  },
  topic_assignment_triggers: {
    label: "Topic Assignment Triggers",
    path: "/lightning/setup/TopicAssigmentTriggers/home",
    pageGroup: "Topics",
  },
  topic_triggers: {
    label: "Topic Triggers",
    path: "/lightning/setup/TopicTriggers/home",
    pageGroup: "Topics",
  },
  topics_for_objects: {
    label: "Topics for Objects",
    path: "/lightning/setup/TopicRecords/home",
    pageGroup: "Topics",
  },
  slack_apps_setup: {
    label: "Slack Apps Setup",
    path: "/lightning/setup/SlackSetupAssistant/home",
    pageGroup: "Slack",
  },
  batch_management: {
    label: "Batch Management",
    path: "/lightning/setup/BatchProcessJobDefinition/home",
    pageGroup: "Workflow Services",
  },
  monitor_workflow_services: {
    label: "Monitor Workflow Services",
    path: "/lightning/setup/MonitorWorkflowServices/home",
    pageGroup: "Workflow Services",
  },
  services: {
    label: "Services",
    path: "/lightning/setup/MulesoftServices/home",
    pageGroup: "MuleSoft",
  },
  einstein_bots_assessor: {
    label: "Einstein Bots Assessor",
    path: "/lightning/setup/EinsteinBotsReadinessCheck/home",
    pageGroup: "Einstein Assessors",
  },
  einstein_conversation_insights_assessor: {
    label: "Einstein Conversation Insights Assessor",
    path: "/lightning/setup/EinsteinCIReadinessCheck/home",
    pageGroup: "Einstein Assessors",
  },
  sales_cloud_einstein_assessor: {
    label: "Sales Cloud Einstein Assessor",
    path: "/lightning/setup/SalesCloudEinsteinReadinessCheck/home",
    pageGroup: "Einstein Assessors",
  },
  service_cloud_einstein_assessor: {
    label: "Service Cloud Einstein Assessor",
    path: "/lightning/setup/ServiceCloudEinsteinReadinessCheck/home",
    pageGroup: "Einstein Assessors",
  },
  einstein_bots: {
    label: "Einstein Bots",
    path: "/lightning/setup/EinsteinBots/home",
    pageGroup: "Einstein Platform",
  },
  "einstein.ai": {
    label: "Einstein.ai",
    path: "/lightning/setup/EinsteinKeyManagement/home",
    pageGroup: "Einstein Platform",
  },
  "objects_to_always_search_(beta)": {
    label: "Objects to Always Search (Beta)",
    path: "/lightning/setup/SearchScope/home",
    pageGroup: "Einstein Search",
  },
  promoted_search_terms: {
    label: "Promoted Search Terms",
    path: "/lightning/setup/SearchPromotionRulesManagementPage/home",
    pageGroup: "Einstein Search",
  },
  search_layouts: {
    label: "Search Layouts",
    path: "/lightning/setup/EinsteinSearchLayouts/home",
    pageGroup: "Einstein Search",
  },
  search_manager: {
    label: "Search Manager",
    path: "/lightning/setup/SearchConfiguration/home",
    pageGroup: "Einstein Search",
  },
  synonyms: {
    label: "Synonyms",
    path: "/lightning/setup/ManageSynonyms/home",
    pageGroup: "Einstein Search",
  },
  url_shortening_domain: {
    label: "URL Shortening Domain",
    path: "/lightning/setup/E360URLShorteningDomain/home",
    pageGroup: "Branded Domain",
  },
  picklist_value_sets: {
    label: "Picklist Value Sets",
    path: "/lightning/setup/Picklists/home",
    pageGroup: "Objects and Fields",
  },
  schema_builder: {
    label: "Schema Builder",
    path: "/lightning/setup/SchemaBuilder/home",
    pageGroup: "Objects and Fields",
  },
  event_manager: {
    label: "Event Manager",
    path: "/lightning/setup/EventManager/home",
    pageGroup: "Events",
  },
  event_relays: {
    label: "Event Relays",
    path: "/lightning/setup/EventRelay/home",
    pageGroup: "Events",
  },
  approval_processes: {
    label: "Approval Processes",
    path: "/lightning/setup/ApprovalProcesses/home",
    pageGroup: "Process Automation",
  },
  "automation_home_(beta)": {
    label: "Automation Home (Beta)",
    path: "/lightning/setup/ProcessHome/home",
    pageGroup: "Process Automation",
  },
  flows: {
    label: "Flows",
    path: "/lightning/setup/Flows/home",
    pageGroup: "Process Automation",
  },
  migrate_to_flow: {
    label: "Migrate to Flow",
    path: "/lightning/setup/MigrateToFlowTool/home",
    pageGroup: "Process Automation",
  },
  next_best_action: {
    label: "Next Best Action",
    path: "/lightning/setup/NextBestAction/home",
    pageGroup: "Process Automation",
  },
  paused_and_failed_flow_interviews: {
    label: "Paused And Failed Flow Interviews",
    path: "/lightning/setup/Pausedflows/home",
    pageGroup: "Process Automation",
  },
  post_templates: {
    label: "Post Templates",
    path: "/lightning/setup/FeedTemplates/home",
    pageGroup: "Process Automation",
  },
  process_automation_settings: {
    label: "Process Automation Settings",
    path: "/lightning/setup/WorkflowSettings/home",
    pageGroup: "Process Automation",
  },
  process_builder: {
    label: "Process Builder",
    path: "/lightning/setup/ProcessAutomation/home",
    pageGroup: "Process Automation",
  },
  email_alerts: {
    label: "Email Alerts",
    path: "/lightning/setup/WorkflowEmails/home",
    pageGroup: "Workflow Actions",
  },
  field_updates: {
    label: "Field Updates",
    path: "/lightning/setup/WorkflowFieldUpdates/home",
    pageGroup: "Workflow Actions",
  },
  outbound_messages: {
    label: "Outbound Messages",
    path: "/lightning/setup/WorkflowOmStatus/home",
    pageGroup: "Monitoring",
  },
  send_actions: {
    label: "Send Actions",
    path: "/lightning/setup/SendAction/home",
    pageGroup: "Workflow Actions",
  },
  tasks: {
    label: "Tasks",
    path: "/lightning/setup/WorkflowTasks/home",
    pageGroup: "Workflow Actions",
  },
  workflow_rules: {
    label: "Workflow Rules",
    path: "/lightning/setup/WorkflowRules/home",
    pageGroup: "Workflow Actions",
  },
  action_link_templates: {
    label: "Action Link Templates",
    path: "/lightning/setup/ActionLinkGroupTemplates/home",
    pageGroup: "User Interface",
  },
  "actions_&_recommendations": {
    label: "Actions & Recommendations",
    path: "/lightning/setup/GuidedActions/home",
    pageGroup: "User Interface",
  },
  app_menu: {
    label: "App Menu",
    path: "/lightning/setup/AppMenu/home",
    pageGroup: "User Interface",
  },
  custom_labels: {
    label: "Custom Labels",
    path: "/lightning/setup/ExternalStrings/home",
    pageGroup: "User Interface",
  },
  density_settings: {
    label: "Density Settings",
    path: "/lightning/setup/DensitySetup/home",
    pageGroup: "User Interface",
  },
  global_actions: {
    label: "Global Actions",
    path: "/lightning/setup/GlobalActions/home",
    pageGroup: "Global Actions",
  },
  publisher_layouts: {
    label: "Publisher Layouts",
    path: "/lightning/setup/GlobalPublisherLayouts/home",
    pageGroup: "Global Actions",
  },
  lightning_app_builder: {
    label: "Lightning App Builder",
    path: "/lightning/setup/FlexiPageList/home",
    pageGroup: "Global Actions",
  },
  lightning_extension: {
    label: "Lightning Extension",
    path: "/lightning/setup/LightningExtension/home",
    pageGroup: "Global Actions",
  },
  loaded_console_tab_limit: {
    label: "Loaded Console Tab Limit",
    path: "/lightning/setup/ConsoleMaxTabCacheSetup/home",
    pageGroup: "Global Actions",
  },
  path_settings: {
    label: "Path Settings",
    path: "/lightning/setup/PathAssistantSetupHome/home",
    pageGroup: "Global Actions",
  },
  quick_text_settings: {
    label: "Quick Text Settings",
    path: "/lightning/setup/LightningQuickTextSettings/home",
    pageGroup: "Global Actions",
  },
  record_page_settings: {
    label: "Record Page Settings",
    path: "/lightning/setup/SimpleRecordHome/home",
    pageGroup: "Global Actions",
  },
  rename_tabs_and_labels: {
    label: "Rename Tabs and Labels",
    path: "/lightning/setup/RenameTab/home",
    pageGroup: "Global Actions",
  },
  custom_urls: {
    label: "Custom URLs",
    path: "/lightning/setup/DomainSites/home",
    pageGroup: "Sites and Domains",
  },
  domains: {
    label: "Domains",
    path: "/lightning/setup/DomainNames/home",
    pageGroup: "Sites and Domains",
  },
  sites: {
    label: "Sites",
    path: "/lightning/setup/CustomDomain/home",
    pageGroup: "Sites and Domains",
  },
  tabs: {
    label: "Tabs",
    path: "/lightning/setup/CustomTabs/home",
    pageGroup: "Sites and Domains",
  },
  themes_and_branding: {
    label: "Themes and Branding",
    path: "/lightning/setup/ThemingAndBranding/home",
    pageGroup: "Sites and Domains",
  },
  export: {
    label: "Export",
    path: "/lightning/setup/LabelWorkbenchExport/home",
    pageGroup: "Translation Workbench",
  },
  import: {
    label: "Import",
    path: "/lightning/setup/LabelWorkbenchImport/home",
    pageGroup: "Translation Workbench",
  },
  override: {
    label: "Override",
    path: "/lightning/setup/LabelWorkbenchOverride/home",
    pageGroup: "Translation Workbench",
  },
  translate: {
    label: "Translate",
    path: "/lightning/setup/LabelWorkbenchTranslate/home",
    pageGroup: "Translation Workbench",
  },
  translation_language_settings: {
    label: "Translation Language Settings",
    path: "/lightning/setup/LabelWorkbenchSetup/home",
    pageGroup: "Translation Workbench",
  },
  user_interface: {
    label: "User Interface",
    path: "/lightning/setup/UserInterfaceUI/home",
    pageGroup: "Translation Workbench",
  },
  apex_classes: {
    label: "Apex Classes",
    path: "/lightning/setup/ApexClasses/home",
    pageGroup: "Custom Code",
  },
  apex_settings: {
    label: "Apex Settings",
    path: "/lightning/setup/ApexSettings/home",
    pageGroup: "Custom Code",
  },
  apex_test_execution: {
    label: "Apex Test Execution",
    path: "/lightning/setup/ApexTestQueue/home",
    pageGroup: "Custom Code",
  },
  apex_test_history: {
    label: "Apex Test History",
    path: "/lightning/setup/ApexTestHistory/home",
    pageGroup: "Custom Code",
  },
  apex_triggers: {
    label: "Apex Triggers",
    path: "/lightning/setup/ApexTriggers/home",
    pageGroup: "Custom Code",
  },
  canvas_app_previewer: {
    label: "Canvas App Previewer",
    path: "/lightning/setup/CanvasPreviewerUi/home",
    pageGroup: "Custom Code",
  },
  custom_metadata_types: {
    label: "Custom Metadata Types",
    path: "/lightning/setup/CustomMetadata/home",
    pageGroup: "Custom Code",
  },
  custom_permissions: {
    label: "Custom Permissions",
    path: "/lightning/setup/CustomPermissions/home",
    pageGroup: "Custom Code",
  },
  custom_settings: {
    label: "Custom Settings",
    path: "/lightning/setup/CustomSettings/home",
    pageGroup: "Custom Code",
  },
  dataweave_resources: {
    label: "DataWeave Resources",
    path: "/lightning/setup/DataWeaveResources/home",
    pageGroup: "Custom Code",
  },
  email_services: {
    label: "Email Services",
    path: "/lightning/setup/EmailToApexFunction/home",
    pageGroup: "Custom Code",
  },
  debug_mode: {
    label: "Debug Mode",
    path: "/lightning/setup/UserDebugModeSetup/home",
    pageGroup: "Lightning Components",
  },
  lightning_components: {
    label: "Lightning Components",
    path: "/lightning/setup/LightningComponentBundles/home",
    pageGroup: "Lightning Components",
  },
  platform_cache: {
    label: "Platform Cache",
    path: "/lightning/setup/PlatformCache/home",
    pageGroup: "Lightning Components",
  },
  remote_access: {
    label: "Remote Access",
    path: "/lightning/setup/RemoteAccess/home",
    pageGroup: "Lightning Components",
  },
  static_resources: {
    label: "Static Resources",
    path: "/lightning/setup/StaticResources/home",
    pageGroup: "Lightning Components",
  },
  tools: {
    label: "Tools",
    path: "/lightning/setup/ClientDevTools/home",
    pageGroup: "Lightning Components",
  },
  visualforce_components: {
    label: "Visualforce Components",
    path: "/lightning/setup/ApexComponents/home",
    pageGroup: "Lightning Components",
  },
  visualforce_pages: {
    label: "Visualforce Pages",
    path: "/lightning/setup/ApexPages/home",
    pageGroup: "Lightning Components",
  },
  dev_hub: {
    label: "Dev Hub",
    path: "/lightning/setup/DevHub/home",
    pageGroup: "Development",
  },
  devops_center: {
    label: "DevOps Center",
    path: "/lightning/setup/DevOpsCenterSetup/home",
    pageGroup: "Development",
  },
  einstein_for_developers: {
    label: "Einstein for Developers",
    path: "/lightning/setup/EinsteinForDevelopers/home",
    pageGroup: "Development",
  },
  scratch_orgs: {
    label: "Scratch Orgs",
    path: "/lightning/setup/ShapeGrantAccess/home",
    pageGroup: "Development",
  },
  performance_assistant: {
    label: "Performance Assistant",
    path: "/lightning/setup/PerformanceAssistant/home",
    pageGroup: "Scale Test",
  },
  deployment_settings: {
    label: "Deployment Settings",
    path: "/lightning/setup/DeploymentSettings/home",
    pageGroup: "Deploy",
  },
  deployment_status: {
    label: "Deployment Status",
    path: "/lightning/setup/DeployStatus/home",
    pageGroup: "Deploy",
  },
  apex_flex_queue: {
    label: "Apex Flex Queue",
    path: "/lightning/setup/ApexFlexQueue/home",
    pageGroup: "Jobs",
  },
  apex_jobs: {
    label: "Apex Jobs",
    path: "/lightning/setup/AsyncApexJobs/home",
    pageGroup: "Jobs",
  },
  background_jobs: {
    label: "Background Jobs",
    path: "/lightning/setup/ParallelJobsStatus/home",
    pageGroup: "Jobs",
  },
  bulk_data_load_jobs: {
    label: "Bulk Data Load Jobs",
    path: "/lightning/setup/AsyncApiJobStatus/home",
    pageGroup: "Jobs",
  },
  scheduled_jobs: {
    label: "Scheduled Jobs",
    path: "/lightning/setup/ScheduledJobs/home",
    pageGroup: "Jobs",
  },
  debug_logs: {
    label: "Debug Logs",
    path: "/lightning/setup/ApexDebugLogs/home",
    pageGroup: "Logs",
  },
  email_log_files: {
    label: "Email Log Files",
    path: "/lightning/setup/EmailLogFiles/home",
    pageGroup: "Logs",
  },
  api_usage_notifications: {
    label: "API Usage Notifications",
    path: "/lightning/setup/MonitoringRateLimitingNotification/home",
    pageGroup: "Monitoring",
  },
  case_escalations: {
    label: "Case Escalations",
    path: "/lightning/setup/DataManagementManageCaseEscalation/home",
    pageGroup: "Monitoring",
  },
  email_snapshots: {
    label: "Email Snapshots",
    path: "/lightning/setup/EmailCapture/home",
    pageGroup: "Monitoring",
  },
  "time-based_workflow": {
    label: "Time-Based Workflow",
    path: "/lightning/setup/DataManagementManageWorkflowQueue/home",
    pageGroup: "Monitoring",
  },
  system_overview: {
    label: "System Overview",
    path: "/lightning/setup/SystemOverview/home",
    pageGroup: "Monitoring",
  },
  adoption_assistance: {
    label: "Adoption Assistance",
    path: "/lightning/setup/AdoptionAssistance/home",
    pageGroup: "User Engagement",
  },
  guidance_center: {
    label: "Guidance Center",
    path: "/lightning/setup/LearningSetup/home",
    pageGroup: "User Engagement",
  },
  help_menu: {
    label: "Help Menu",
    path: "/lightning/setup/HelpMenu/home",
    pageGroup: "User Engagement",
  },
  "in-app_guidance": {
    label: "In-App Guidance",
    path: "/lightning/setup/Prompts/home",
    pageGroup: "User Engagement",
  },
  api: {
    label: "API",
    path: "/lightning/setup/WebServices/home",
    pageGroup: "Integrations",
  },
  change_data_capture: {
    label: "Change Data Capture",
    path: "/lightning/setup/CdcObjectEnablement/home",
    pageGroup: "Integrations",
  },
  data_import_wizard: {
    label: "Data Import Wizard",
    path: "/lightning/setup/DataManagementDataImporter/home",
    pageGroup: "Integrations",
  },
  data_loader: {
    label: "Data Loader",
    path: "/lightning/setup/DataLoader/home",
    pageGroup: "Integrations",
  },
  "dataloader.io": {
    label: "Dataloader.io",
    path: "/lightning/setup/DataLoaderIo/home",
    pageGroup: "Integrations",
  },
  external_data_sources: {
    label: "External Data Sources",
    path: "/lightning/setup/ExternalDataSource/home",
    pageGroup: "Integrations",
  },
  external_objects: {
    label: "External Objects",
    path: "/lightning/setup/ExternalObjects/home",
    pageGroup: "Integrations",
  },
  external_services: {
    label: "External Services",
    path: "/lightning/setup/ExternalServices/home",
    pageGroup: "Integrations",
  },
  platform_events: {
    label: "Platform Events",
    path: "/lightning/setup/EventObjects/home",
    pageGroup: "Integrations",
  },
  teams_integration: {
    label: "Teams Integration",
    path: "/lightning/setup/MicrosoftTeamsIntegration/home",
    pageGroup: "Integrations",
  },
  custom_notifications: {
    label: "Custom Notifications",
    path: "/lightning/setup/CustomNotifications/home",
    pageGroup: "Notification Builder",
  },
  notification_delivery_settings: {
    label: "Notification Delivery Settings",
    path: "/lightning/setup/NotificationTypesManager/home",
    pageGroup: "Notification Builder",
  },
  briefcase_builder: {
    label: "Briefcase Builder",
    path: "/lightning/setup/Briefcase/home",
    pageGroup: "Offline",
  },
  business_hours: {
    label: "Business Hours",
    path: "/lightning/setup/BusinessHours/home",
    pageGroup: "Company Settings",
  },
  public_calendars_and_resources: {
    label: "Public Calendars and Resources",
    path: "/lightning/setup/Calendars/home",
    pageGroup: "Calendar Settings",
  },
  company_information: {
    label: "Company Information",
    path: "/lightning/setup/CompanyProfileInfo/home",
    pageGroup: "Calendar Settings",
  },
  data_protection_and_privacy: {
    label: "Data Protection and Privacy",
    path: "/lightning/setup/ConsentManagement/home",
    pageGroup: "Calendar Settings",
  },
  fiscal_year: {
    label: "Fiscal Year",
    path: "/lightning/setup/ForecastFiscalYear/home",
    pageGroup: "Calendar Settings",
  },
  holidays: {
    label: "Holidays",
    path: "/lightning/setup/Holiday/home",
    pageGroup: "Calendar Settings",
  },
  language_settings: {
    label: "Language Settings",
    path: "/lightning/setup/LanguageSettings/home",
    pageGroup: "Calendar Settings",
  },
  my_domain: {
    label: "My Domain",
    path: "/lightning/setup/OrgDomain/home",
    pageGroup: "Calendar Settings",
  },
  data_classification_download: {
    label: "Data Classification Download",
    path: "/lightning/setup/DataClassificationDownload/home",
    pageGroup: "Data Classification",
  },
  data_classification_settings: {
    label: "Data Classification Settings",
    path: "/lightning/setup/DataClassificationSettings/home",
    pageGroup: "Data Classification",
  },
  data_classification_upload: {
    label: "Data Classification Upload",
    path: "/lightning/setup/DataClassificationUpload/home",
    pageGroup: "Data Classification",
  },
  consent_event_stream: {
    label: "Consent Event Stream",
    path: "/lightning/setup/ConsentEventStream/home",
    pageGroup: "Privacy Center",
  },
  "auth._providers": {
    label: "Auth. Providers",
    path: "/lightning/setup/AuthProviders/home",
    pageGroup: "Identity",
  },
  identity_connect: {
    label: "Identity Connect",
    path: "/lightning/setup/IdentityConnect/home",
    pageGroup: "Identity",
  },
  identity_provider: {
    label: "Identity Provider",
    path: "/lightning/setup/IdpPage/home",
    pageGroup: "Identity",
  },
  identity_provider_event_log: {
    label: "Identity Provider Event Log",
    path: "/lightning/setup/IdpErrorLog/home",
    pageGroup: "Identity",
  },
  identity_verification: {
    label: "Identity Verification",
    path: "/lightning/setup/IdentityVerification/home",
    pageGroup: "Identity",
  },
  identity_verification_history: {
    label: "Identity Verification History",
    path: "/lightning/setup/VerificationHistory/home",
    pageGroup: "Identity",
  },
  login_flows: {
    label: "Login Flows",
    path: "/lightning/setup/LoginFlow/home",
    pageGroup: "Identity",
  },
  login_history: {
    label: "Login History",
    path: "/lightning/setup/OrgLoginHistory/home",
    pageGroup: "Identity",
  },
  oauth_custom_scopes: {
    label: "OAuth Custom Scopes",
    path: "/lightning/setup/OauthCustomScope/home",
    pageGroup: "Identity",
  },
  oauth_and_openid_connect_settings: {
    label: "OAuth and OpenID Connect Settings",
    path: "/lightning/setup/OauthOidcSettings/home",
    pageGroup: "Identity",
  },
  "single_sign-on_settings": {
    label: "Single Sign-On Settings",
    path: "/lightning/setup/SingleSignOn/home",
    pageGroup: "Identity",
  },
  token_exchange_handlers: {
    label: "Token Exchange Handlers",
    path: "/lightning/setup/OauthTokenExchangeHandlers/home",
    pageGroup: "Identity",
  },
  activations: {
    label: "Activations",
    path: "/lightning/setup/ActivatedIpAddressAndClientBrowsersPage/home",
    pageGroup: "Security",
  },
  cors: {
    label: "CORS",
    path: "/lightning/setup/CorsWhitelistEntries/home",
    pageGroup: "Security",
  },
  csp_violations: {
    label: "CSP Violations",
    path: "/lightning/setup/ContentSecurityPolicyViolations/home",
    pageGroup: "Security",
  },
  certificate_and_key_management: {
    label: "Certificate and Key Management",
    path: "/lightning/setup/CertificatesAndKeysManagement/home",
    pageGroup: "Security",
  },
  delegated_administration: {
    label: "Delegated Administration",
    path: "/lightning/setup/DelegateGroups/home",
    pageGroup: "Security",
  },
  "event_log_file_browser_(beta)": {
    label: "Event Log File Browser (Beta)",
    path: "/lightning/setup/ElfBrowser/home",
    pageGroup: "Event Monitoring",
  },
  event_monitoring_settings: {
    label: "Event Monitoring Settings",
    path: "/lightning/setup/EventMonitoringSetup/home",
    pageGroup: "Event Monitoring",
  },
  transaction_security_policies: {
    label: "Transaction Security Policies",
    path: "/lightning/setup/TransactionSecurityNew/home",
    pageGroup: "Event Monitoring",
  },
  expire_all_passwords: {
    label: "Expire All Passwords",
    path: "/lightning/setup/SecurityExpirePasswords/home",
    pageGroup: "Event Monitoring",
  },
  field_accessibility: {
    label: "Field Accessibility",
    path: "/lightning/setup/FieldAccessibility/home",
    pageGroup: "Event Monitoring",
  },
  file_upload_and_download_security: {
    label: "File Upload and Download Security",
    path: "/lightning/setup/FileTypeSetting/home",
    pageGroup: "Event Monitoring",
  },
  guest_user_sharing_rule_access_report: {
    label: "Guest User Sharing Rule Access Report",
    path: "/lightning/setup/GuestUserAccessVerification/home",
    pageGroup: "Event Monitoring",
  },
  health_check: {
    label: "Health Check",
    path: "/lightning/setup/HealthCheck/home",
    pageGroup: "Event Monitoring",
  },
  login_access_policies: {
    label: "Login Access Policies",
    path: "/lightning/setup/LoginAccessPolicies/home",
    pageGroup: "Event Monitoring",
  },
  named_credentials: {
    label: "Named Credentials",
    path: "/lightning/setup/NamedCredential/home",
    pageGroup: "Event Monitoring",
  },
  network_access: {
    label: "Network Access",
    path: "/lightning/setup/NetworkAccess/home",
    pageGroup: "Event Monitoring",
  },
  password_policies: {
    label: "Password Policies",
    path: "/lightning/setup/SecurityPolicies/home",
    pageGroup: "Event Monitoring",
  },
  encryption_settings: {
    label: "Encryption Settings",
    path: "/lightning/setup/EncryptionAdvancedSettings/home",
    pageGroup: "Platform Encryption",
  },
  key_management: {
    label: "Key Management",
    path: "/lightning/setup/PlatformEncryptionKeyManagement/home",
    pageGroup: "Platform Encryption",
  },
  private_connect: {
    label: "Private Connect",
    path: "/lightning/setup/PrivateConnect/home",
    pageGroup: "Platform Encryption",
  },
  remote_site_settings: {
    label: "Remote Site Settings",
    path: "/lightning/setup/SecurityRemoteProxy/home",
    pageGroup: "Platform Encryption",
  },
  session_management: {
    label: "Session Management",
    path: "/lightning/setup/SessionManagementPage/home",
    pageGroup: "Platform Encryption",
  },
  session_settings: {
    label: "Session Settings",
    path: "/lightning/setup/SecuritySession/home",
    pageGroup: "Platform Encryption",
  },
  sharing_settings: {
    label: "Sharing Settings",
    path: "/lightning/setup/SecuritySharing/home",
    pageGroup: "Platform Encryption",
  },
  trusted_urls: {
    label: "Trusted URLs",
    path: "/lightning/setup/SecurityCspTrustedSite/home",
    pageGroup: "Platform Encryption",
  },
  trusted_urls_for_redirects: {
    label: "Trusted URLs for Redirects",
    path: "/lightning/setup/SecurityRedirectWhitelistUrl/home",
    pageGroup: "Platform Encryption",
  },
  view_setup_audit_trail: {
    label: "View Setup Audit Trail",
    path: "/lightning/setup/SecurityEvents/home",
    pageGroup: "Platform Encryption",
  },
};
