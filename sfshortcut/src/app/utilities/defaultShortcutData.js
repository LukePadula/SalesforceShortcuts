export const defaultFavourites = [
  "home",
  "setup_home",
  "object_manager",
  "users",
  "flows",
  "developer_console",
];

export const defaultObjectFavourites = [
  "account",
  "case",
  "contact",
  "lead",
  "opportunity",
  "order",
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
    favourite: false,
  },
  flow_trigger_explorer: {
    label: "Flow Trigger Explorer",
    path: "/interaction_explorer/flowExplorer.app",
    pageGroup: "Process Automation",
    favourite: false,
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
  salesforce_mobile_app: {
    label: "Salesforce Mobile App",
    path: "/lightning/setup/SalesforceMobileAppQuickStart/home",
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
    path: "/lightning/setup/Profiles/home",
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
  mobile_security: {
    label: "Mobile Security",
    path: "/lightning/setup/MobileSecurity/home",
    pageGroup: "Mobile Apps",
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
  b2c_commerce_connections: {
    label: "B2C Commerce Connections",
    path: "/lightning/setup/ManageC2CSelfProvisioningConnections/home",
    pageGroup: "Connect to B2C Commerce",
  },
  all_sites: {
    label: "All Sites",
    path: "/lightning/setup/SetupNetworks/home",
    pageGroup: "Digital Experiences",
  },
  pages: {
    label: "Pages",
    path: "/lightning/setup/CommunityFlexiPageList/home",
    pageGroup: "Digital Experiences",
  },
  templates: {
    label: "Templates",
    path: "/lightning/setup/CommunityTemplateDefinitionList/home",
    pageGroup: "Digital Experiences",
  },
  themes: {
    label: "Themes",
    path: "/lightning/setup/CommunityThemeDefinitionList/home",
    pageGroup: "Digital Experiences",
  },
  field_history_tracking: {
    label: "Field History Tracking",
    path: "/lightning/setup/FieldHistoryTracking/home",
    pageGroup: "Digital Experiences",
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
  model_settings: {
    label: "Model Settings",
    path: "/lightning/setup/CampaignInfluenceModel/home",
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
  setup: {
    label: "Setup",
    path: "/lightning/setup/OrderManagementSetup/home",
    pageGroup: "Order Management",
  },
  "quip_(salesforce_anywhere)": {
    label: "Quip (Salesforce Anywhere)",
    path: "/lightning/setup/SalesforceAnywhereSetupPage/home",
    pageGroup: "Order Management",
  },
  account_intelligence_view_setup: {
    label: "Account Intelligence View Setup",
    path: "/lightning/setup/AccountInspectionSettings/home",
    pageGroup: "Accounts",
  },
  account_owner_report: {
    label: "Account Owner Report",
    path: "/lightning/setup/SecurityAccountOwner/home",
    pageGroup: "Security",
  },
  account_settings: {
    label: "Account Settings",
    path: "/lightning/setup/AccountSettings/home",
    pageGroup: "Accounts",
  },
  account_teams: {
    label: "Account Teams",
    path: "/lightning/setup/AccountTeamSelling/home",
    pageGroup: "Accounts",
  },
  person_accounts: {
    label: "Person Accounts",
    path: "/lightning/setup/PersonAccountSettings/home",
    pageGroup: "Accounts",
  },
  activity_settings: {
    label: "Activity Settings",
    path: "/lightning/setup/HomeActivitiesSetupPage/home",
    pageGroup: "Accounts",
  },
  contact_intelligence_view_setup: {
    label: "Contact Intelligence View Setup",
    path: "/lightning/setup/ContactInspectionSettings/home",
    pageGroup: "Accounts",
  },
  contact_roles_on_contracts: {
    label: "Contact Roles on Contracts",
    path: "/lightning/setup/ContractContactRoles/home",
    pageGroup: "Accounts",
  },
  contact_roles_on_opportunities: {
    label: "Contact Roles on Opportunities",
    path: "/lightning/setup/OpportunityRoles/home",
    pageGroup: "Accounts",
  },
  buyer_relationship_map: {
    label: "Buyer Relationship Map",
    path: "/lightning/setup/BuyerRelationshipMap/home",
    pageGroup: "Contacts",
  },
  contract_settings: {
    label: "Contract Settings",
    path: "/lightning/setup/ContractSettings/home",
    pageGroup: "Contacts",
  },
  forecasts_hierarchy: {
    label: "Forecasts Hierarchy",
    path: "/lightning/setup/Forecasting3Role/home",
    pageGroup: "Forecasts",
  },
  forecasts_quotas: {
    label: "Forecasts Quotas",
    path: "/lightning/setup/Forecasting3Quota/home",
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
  pipeline_inspection_setup: {
    label: "Pipeline Inspection Setup",
    path: "/lightning/setup/PipelineInspectionSettings/home",
    pageGroup: "Opportunities",
  },
  order_settings: {
    label: "Order Settings",
    path: "/lightning/setup/OrderSettings/home",
    pageGroup: "Opportunities",
  },
  an_overview_of_prm: {
    label: "An Overview of PRM",
    path: "/lightning/setup/PrmUnifiedSetupSettings/home",
    pageGroup: "PRM",
  },
  channel_management: {
    label: "Channel Management",
    path: "/lightning/setup/ChannelManagement/home",
    pageGroup: "PRM",
  },
  partner_experience: {
    label: "Partner Experience",
    path: "/lightning/setup/PartnerExperience/home",
    pageGroup: "PRM",
  },
  partner_productivity: {
    label: "Partner Productivity",
    path: "/lightning/setup/ChannelProductivity/home",
    pageGroup: "PRM",
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
  quote_templates: {
    label: "Quote Templates",
    path: "/lightning/setup/QuoteTemplateEditor/home",
    pageGroup: "Quotes",
  },
  quotes_settings: {
    label: "Quotes Settings",
    path: "/lightning/setup/QuoteSettings/home",
    pageGroup: "Quotes",
  },
  setup_assistant: {
    label: "Setup Assistant",
    path: "/lightning/setup/GettingStartedEmbedded/home",
    pageGroup: "Event Monitoring",
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
  territory_models: {
    label: "Territory Models",
    path: "/lightning/setup/Territory2Models/home",
    pageGroup: "Territories",
  },
  territory_settings: {
    label: "Territory Settings",
    path: "/lightning/setup/Territory2Settings/home",
    pageGroup: "Territories",
  },
  territory_types: {
    label: "Territory Types",
    path: "/lightning/setup/Territory2Types/home",
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
  "channel-object_linking_(beta)": {
    label: "Channel-Object Linking (Beta)",
    path: "/lightning/setup/ChannelObjectLinkingSetup/home",
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
  data_category_setup: {
    label: "Data Category Setup",
    path: "/lightning/setup/DataCategorySetup/home",
    pageGroup: "Data Categories",
  },
  default_data_category_visibility: {
    label: "Default Data Category Visibility",
    path: "/lightning/setup/DataCategoryDefaultVisibilitySettings/home",
    pageGroup: "Data Categories",
  },
  "email-to-case": {
    label: "Email-to-Case",
    path: "/lightning/setup/EmailToCase/home",
    pageGroup: "Data Categories",
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
  inbound_social_post_errors: {
    label: "Inbound Social Post Errors",
    path: "/lightning/setup/InboundSocialPostErrors/home",
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
  limits: {
    label: "Limits",
    path: "/lightning/setup/OmniChannelLimits/home",
    pageGroup: "Omni-Channel",
  },
  "omni-channel_home": {
    label: "Omni-Channel Home",
    path: "/lightning/setup/OmniChannelHome/home",
    pageGroup: "Omni-Channel",
  },
  "omni-channel_settings": {
    label: "Omni-Channel Settings",
    path: "/lightning/setup/OmniChannelSettings/home",
    pageGroup: "Omni-Channel",
  },
  presence_configurations: {
    label: "Presence Configurations",
    path: "/lightning/setup/ServicePresenceUserConfigSettings/home",
    pageGroup: "Omni-Channel",
  },
  presence_decline_reasons: {
    label: "Presence Decline Reasons",
    path: "/lightning/setup/ServicePresenceDeclineReasonSettings/home",
    pageGroup: "Omni-Channel",
  },
  presence_statuses: {
    label: "Presence Statuses",
    path: "/lightning/setup/ServicePresenceStatusSettings/home",
    pageGroup: "Omni-Channel",
  },
  routing_configurations: {
    label: "Routing Configurations",
    path: "/lightning/setup/QueueRoutingConfigSettings/home",
    pageGroup: "Omni-Channel",
  },
  service_channels: {
    label: "Service Channels",
    path: "/lightning/setup/ServiceChannelSettings/home",
    pageGroup: "Omni-Channel",
  },
  skills: {
    label: "Skills",
    path: "/lightning/setup/SkillPage/home",
    pageGroup: "Skill Settings",
  },
  "skills-based_routing_rules": {
    label: "Skills-Based Routing Rules",
    path: "/lightning/setup/OmniChannelAttributeBasedRouting/home",
    pageGroup: "Omni-Channel",
  },
  supervisor_configurations: {
    label: "Supervisor Configurations",
    path: "/lightning/setup/OmniSupervisorConfigSettings/home",
    pageGroup: "Supervisor",
  },
  supervisor_settings: {
    label: "Supervisor Settings",
    path: "/lightning/setup/OmniSupervisorSettings/home",
    pageGroup: "Supervisor",
  },
  sensitive_data_rules_for_enhanced_channels: {
    label: "Sensitive Data Rules for Enhanced Channels",
    path: "/lightning/setup/MessagingSensitiveDataRulesEnhanced/home",
    pageGroup: "Supervisor",
  },
  einstein_classification: {
    label: "Einstein Classification",
    path: "/lightning/setup/EinsteinCaseClassification/home",
    pageGroup: "Service Cloud Einstein",
  },
  social_business_rules: {
    label: "Social Business Rules",
    path: "/lightning/setup/SocialCustomerServiceBusinessRules/home",
    pageGroup: "Service Cloud Einstein",
  },
  social_customer_service: {
    label: "Social Customer Service",
    path: "/lightning/setup/SocialCustomerManagementAccountSettings/home",
    pageGroup: "Service Cloud Einstein",
  },
  support_processes: {
    label: "Support Processes",
    path: "/lightning/setup/CaseProcess/home",
    pageGroup: "Service Cloud Einstein",
  },
  support_settings: {
    label: "Support Settings",
    path: "/lightning/setup/CaseSettings/home",
    pageGroup: "Service Cloud Einstein",
  },
  swarming: {
    label: "Swarming",
    path: "/lightning/setup/CaseSwarming/home",
    pageGroup: "Service Cloud Einstein",
  },
  "web-to-case": {
    label: "Web-to-Case",
    path: "/lightning/setup/CaseWebtocase/home",
    pageGroup: "Service Cloud Einstein",
  },
  "web-to-case_html_generator": {
    label: "Web-to-Case HTML Generator",
    path: "/lightning/setup/CaseWebToCaseHtmlGenerator/home",
    pageGroup: "Service Cloud Einstein",
  },
  skill_types: {
    label: "Skill Types",
    path: "/lightning/setup/SkillType/home",
    pageGroup: "Skill Settings",
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
  about_heroku: {
    label: "About Heroku",
    path: "/lightning/setup/AboutHeroku/home",
    pageGroup: "Heroku",
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
  einstein_prediction_builder: {
    label: "Einstein Prediction Builder",
    path: "/lightning/setup/EinsteinBuilder/home",
    pageGroup: "Einstein Platform",
  },
  einstein_recommendation_builder: {
    label: "Einstein Recommendation Builder",
    path: "/lightning/setup/EinsteinRecommendation/home",
    pageGroup: "Einstein Platform",
  },
  "einstein.ai": {
    label: "Einstein.ai",
    path: "/lightning/setup/EinsteinKeyManagement/home",
    pageGroup: "Einstein Platform",
  },
  "objects_to_always_search_(moved)": {
    label: "Objects to Always Search (Moved)",
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
  regulatory_compliance: {
    label: "Regulatory Compliance",
    path: "/lightning/setup/SmsCompliance/home",
    pageGroup: "SMS",
  },
  sms_codes: {
    label: "SMS Codes",
    path: "/lightning/setup/SmsCodes/home",
    pageGroup: "SMS",
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
  knowledge_action: {
    label: "Knowledge Action",
    path: "/lightning/setup/WorkflowKnowledgeSubmit/home",
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
  einstein_for_developers: {
    label: "Einstein for Developers",
    path: "/lightning/setup/EinsteinForDevelopers/home",
    pageGroup: "Development",
  },
  performance_assistant: {
    label: "Performance Assistant",
    path: "/lightning/setup/PerformanceAssistant/home",
    pageGroup: "Scale Test",
  },
  inbound_change_sets: {
    label: "Inbound Change Sets",
    path: "/lightning/setup/InboundChangeSet/home",
    pageGroup: "Change Sets",
  },
  outbound_change_sets: {
    label: "Outbound Change Sets",
    path: "/lightning/setup/OutboundChangeSet/home",
    pageGroup: "Change Sets",
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
  enablement_settings: {
    label: "Enablement Settings",
    path: "/lightning/setup/EnablementLitePrograms/home",
    pageGroup: "Enablement",
  },
  api: {
    label: "API",
    path: "/lightning/setup/WebServices/home",
    pageGroup: "Integrations",
  },
  basic_data_import: {
    label: "Basic Data Import",
    path: "/lightning/setup/BasicDataImport/home",
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
  manage_currencies: {
    label: "Manage Currencies",
    path: "/lightning/setup/CompanyCurrency/home",
    pageGroup: "Calendar Settings",
  },
  maps_and_location_settings: {
    label: "Maps and Location Settings",
    path: "/lightning/setup/MapsAndLocationServicesSettings/home",
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
  event_log_file_browser: {
    label: "Event Log File Browser",
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
  portal_health_check: {
    label: "Portal Health Check",
    path: "/lightning/setup/PortalSecurityReport/home",
    pageGroup: "Event Monitoring",
  },
  private_connect: {
    label: "Private Connect",
    path: "/lightning/setup/PrivateConnect/home",
    pageGroup: "Event Monitoring",
  },
  remote_site_settings: {
    label: "Remote Site Settings",
    path: "/lightning/setup/SecurityRemoteProxy/home",
    pageGroup: "Event Monitoring",
  },
  session_management: {
    label: "Session Management",
    path: "/lightning/setup/SessionManagementPage/home",
    pageGroup: "Event Monitoring",
  },
  session_settings: {
    label: "Session Settings",
    path: "/lightning/setup/SecuritySession/home",
    pageGroup: "Event Monitoring",
  },
  sharing_settings: {
    label: "Sharing Settings",
    path: "/lightning/setup/SecuritySharing/home",
    pageGroup: "Event Monitoring",
  },
  trusted_url_and_browser_policy_violations: {
    label: "Trusted URL and Browser Policy Violations",
    path: "/lightning/setup/BrowserPolicyViolations/home",
    pageGroup: "Event Monitoring",
  },
  trusted_urls: {
    label: "Trusted URLs",
    path: "/lightning/setup/SecurityCspTrustedSite/home",
    pageGroup: "Event Monitoring",
  },
  trusted_urls_for_redirects: {
    label: "Trusted URLs for Redirects",
    path: "/lightning/setup/SecurityRedirectWhitelistUrl/home",
    pageGroup: "Event Monitoring",
  },
  view_setup_audit_trail: {
    label: "View Setup Audit Trail",
    path: "/lightning/setup/SecurityEvents/home",
    pageGroup: "Event Monitoring",
  },

  account: {
    label: "Account",
    path: "/lightning/setup/ObjectManager/Account/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  activity: {
    label: "Activity",
    path: "/lightning/setup/ObjectManager/Activity/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  alternative_payment_method: {
    label: "Alternative Payment Method",
    path: "/lightning/setup/ObjectManager/AlternativePaymentMethod/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  api_anomaly_event_store: {
    label: "API Anomaly Event Store",
    path: "/lightning/setup/ObjectManager/ApiAnomalyEventStore/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  asset: {
    label: "Asset",
    path: "/lightning/setup/ObjectManager/Asset/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  asset_action: {
    label: "Asset Action",
    path: "/lightning/setup/ObjectManager/AssetAction/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  asset_action_source: {
    label: "Asset Action Source",
    path: "/lightning/setup/ObjectManager/AssetActionSource/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  asset_relationship: {
    label: "Asset Relationship",
    path: "/lightning/setup/ObjectManager/AssetRelationship/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  asset_state_period: {
    label: "Asset State Period",
    path: "/lightning/setup/ObjectManager/AssetStatePeriod/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  associated_location: {
    label: "Associated Location",
    path: "/lightning/setup/ObjectManager/AssociatedLocation/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  authorization_form: {
    label: "Authorization Form",
    path: "/lightning/setup/ObjectManager/AuthorizationForm/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  authorization_form_consent: {
    label: "Authorization Form Consent",
    path: "/lightning/setup/ObjectManager/AuthorizationFormConsent/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  authorization_form_data_use: {
    label: "Authorization Form Data Use",
    path: "/lightning/setup/ObjectManager/AuthorizationFormDataUse/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  authorization_form_text: {
    label: "Authorization Form Text",
    path: "/lightning/setup/ObjectManager/AuthorizationFormText/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  business_brand: {
    label: "Business Brand",
    path: "/lightning/setup/ObjectManager/BusinessBrand/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  campaign: {
    label: "Campaign",
    path: "/lightning/setup/ObjectManager/Campaign/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  campaign_member: {
    label: "Campaign Member",
    path: "/lightning/setup/ObjectManager/CampaignMember/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  card_payment_method: {
    label: "Card Payment Method",
    path: "/lightning/setup/ObjectManager/CardPaymentMethod/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  case: {
    label: "Case",
    path: "/lightning/setup/ObjectManager/Case/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  case_related_issue: {
    label: "Case Related Issue",
    path: "/lightning/setup/ObjectManager/CaseRelatedIssue/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  change_request: {
    label: "Change Request",
    path: "/lightning/setup/ObjectManager/ChangeRequest/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  change_request_related_issue: {
    label: "Change Request Related Issue",
    path: "/lightning/setup/ObjectManager/ChangeRequestRelatedIssue/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  change_request_related_item: {
    label: "Change Request Related Item",
    path: "/lightning/setup/ObjectManager/ChangeRequestRelatedItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  communication_subscription: {
    label: "Communication Subscription",
    path: "/lightning/setup/ObjectManager/CommSubscription/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  communication_subscription_channel_type: {
    label: "Communication Subscription Channel Type",
    path: "/lightning/setup/ObjectManager/CommSubscriptionChannelType/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  communication_subscription_consent: {
    label: "Communication Subscription Consent",
    path: "/lightning/setup/ObjectManager/CommSubscriptionConsent/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  communication_subscription_timing: {
    label: "Communication Subscription Timing",
    path: "/lightning/setup/ObjectManager/CommSubscriptionTiming/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  consumption_rate: {
    label: "Consumption Rate",
    path: "/lightning/setup/ObjectManager/ConsumptionRate/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  consumption_schedule: {
    label: "Consumption Schedule",
    path: "/lightning/setup/ObjectManager/ConsumptionSchedule/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contact: {
    label: "Contact",
    path: "/lightning/setup/ObjectManager/Contact/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contact_point_address: {
    label: "Contact Point Address",
    path: "/lightning/setup/ObjectManager/ContactPointAddress/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contact_point_consent: {
    label: "Contact Point Consent",
    path: "/lightning/setup/ObjectManager/ContactPointConsent/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contact_point_email: {
    label: "Contact Point Email",
    path: "/lightning/setup/ObjectManager/ContactPointEmail/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contact_point_phone: {
    label: "Contact Point Phone",
    path: "/lightning/setup/ObjectManager/ContactPointPhone/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contact_point_type_consent: {
    label: "Contact Point Type Consent",
    path: "/lightning/setup/ObjectManager/ContactPointTypeConsent/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contact_request: {
    label: "Contact Request",
    path: "/lightning/setup/ObjectManager/ContactRequest/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  content_version: {
    label: "Content Version",
    path: "/lightning/setup/ObjectManager/ContentVersion/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contract: {
    label: "Contract",
    path: "/lightning/setup/ObjectManager/Contract/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  contract_line_item: {
    label: "Contract Line Item",
    path: "/lightning/setup/ObjectManager/ContractLineItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  credential_stuffing_event_store: {
    label: "Credential Stuffing Event Store",
    path: "/lightning/setup/ObjectManager/CredentialStuffingEventStore/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  credit_memo: {
    label: "Credit Memo",
    path: "/lightning/setup/ObjectManager/CreditMemo/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  credit_memo_invoice_application: {
    label: "Credit Memo Invoice Application",
    path: "/lightning/setup/ObjectManager/CreditMemoInvApplication/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  credit_memo_line: {
    label: "Credit Memo Line",
    path: "/lightning/setup/ObjectManager/CreditMemoLine/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  customer: {
    label: "Customer",
    path: "/lightning/setup/ObjectManager/Customer/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  "d&b_company": {
    label: "D&B Company",
    path: "/lightning/setup/ObjectManager/DandBCompany/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  data_use_legal_basis: {
    label: "Data Use Legal Basis",
    path: "/lightning/setup/ObjectManager/DataUseLegalBasis/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  data_use_purpose: {
    label: "Data Use Purpose",
    path: "/lightning/setup/ObjectManager/DataUsePurpose/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  digital_wallet: {
    label: "Digital Wallet",
    path: "/lightning/setup/ObjectManager/DigitalWallet/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  duplicate_record_item: {
    label: "Duplicate Record Item",
    path: "/lightning/setup/ObjectManager/DuplicateRecordItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  duplicate_record_set: {
    label: "Duplicate Record Set",
    path: "/lightning/setup/ObjectManager/DuplicateRecordSet/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  email_message: {
    label: "Email Message",
    path: "/lightning/setup/ObjectManager/EmailMessage/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  engagement_channel_type: {
    label: "Engagement Channel Type",
    path: "/lightning/setup/ObjectManager/EngagementChannelType/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  entitlement: {
    label: "Entitlement",
    path: "/lightning/setup/ObjectManager/Entitlement/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  entitlement_contact: {
    label: "Entitlement Contact",
    path: "/lightning/setup/ObjectManager/EntitlementContact/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  event: {
    label: "Event",
    path: "/lightning/setup/ObjectManager/Event/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  finance_balance_snapshot: {
    label: "Finance Balance Snapshot",
    path: "/lightning/setup/ObjectManager/FinanceBalanceSnapshot/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  finance_transaction: {
    label: "Finance Transaction",
    path: "/lightning/setup/ObjectManager/FinanceTransaction/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  guest_user_anomaly_event_store: {
    label: "Guest User Anomaly Event Store",
    path: "/lightning/setup/ObjectManager/GuestUserAnomalyEventStore/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  image: {
    label: "Image",
    path: "/lightning/setup/ObjectManager/Image/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  incident: {
    label: "Incident",
    path: "/lightning/setup/ObjectManager/Incident/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  incident_related_item: {
    label: "Incident Related Item",
    path: "/lightning/setup/ObjectManager/IncidentRelatedItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  individual: {
    label: "Individual",
    path: "/lightning/setup/ObjectManager/Individual/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  invoice: {
    label: "Invoice",
    path: "/lightning/setup/ObjectManager/Invoice/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  invoice_line: {
    label: "Invoice Line",
    path: "/lightning/setup/ObjectManager/InvoiceLine/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  lead: {
    label: "Lead",
    path: "/lightning/setup/ObjectManager/Lead/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  legal_entity: {
    label: "Legal Entity",
    path: "/lightning/setup/ObjectManager/LegalEntity/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  list_email: {
    label: "List Email",
    path: "/lightning/setup/ObjectManager/ListEmail/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  location: {
    label: "Location",
    path: "/lightning/setup/ObjectManager/Location/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  location_group: {
    label: "Location Group",
    path: "/lightning/setup/ObjectManager/LocationGroup/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  location_group_assignment: {
    label: "Location Group Assignment",
    path: "/lightning/setup/ObjectManager/LocationGroupAssignment/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  macro: {
    label: "Macro",
    path: "/lightning/setup/ObjectManager/Macro/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  messaging_session: {
    label: "Messaging Session",
    path: "/lightning/setup/ObjectManager/MessagingSession/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  messaging_user: {
    label: "Messaging User",
    path: "/lightning/setup/ObjectManager/MessagingEndUser/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  object_milestone: {
    label: "Object Milestone",
    path: "/lightning/setup/ObjectManager/EntityMilestone/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  opportunity: {
    label: "Opportunity",
    path: "/lightning/setup/ObjectManager/Opportunity/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  opportunity_contact_role: {
    label: "Opportunity Contact Role",
    path: "/lightning/setup/ObjectManager/OpportunityContactRole/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  opportunity_product: {
    label: "Opportunity Product",
    path: "/lightning/setup/ObjectManager/OpportunityLineItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  orchestration_run: {
    label: "Orchestration Run",
    path: "/lightning/setup/ObjectManager/FlowOrchestrationInstance/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  orchestration_stage_run: {
    label: "Orchestration Stage Run",
    path: "/lightning/setup/ObjectManager/FlowOrchestrationStageInstance/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  orchestration_step_run: {
    label: "Orchestration Step Run",
    path: "/lightning/setup/ObjectManager/FlowOrchestrationStepInstance/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  orchestration_work_item: {
    label: "Orchestration Work Item",
    path: "/lightning/setup/ObjectManager/FlowOrchestrationWorkItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  order: {
    label: "Order",
    path: "/lightning/setup/ObjectManager/Order/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  order_product: {
    label: "Order Product",
    path: "/lightning/setup/ObjectManager/OrderItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  party_consent: {
    label: "Party Consent",
    path: "/lightning/setup/ObjectManager/PartyConsent/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  payment: {
    label: "Payment",
    path: "/lightning/setup/ObjectManager/Payment/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  payment_authorization: {
    label: "Payment Authorization",
    path: "/lightning/setup/ObjectManager/PaymentAuthorization/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  payment_authorization_adjustment: {
    label: "Payment Authorization Adjustment",
    path: "/lightning/setup/ObjectManager/PaymentAuthAdjustment/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  payment_gateway: {
    label: "Payment Gateway",
    path: "/lightning/setup/ObjectManager/PaymentGateway/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  payment_group: {
    label: "Payment Group",
    path: "/lightning/setup/ObjectManager/PaymentGroup/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  payment_line_invoice: {
    label: "Payment Line Invoice",
    path: "/lightning/setup/ObjectManager/PaymentLineInvoice/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  price_book: {
    label: "Price Book",
    path: "/lightning/setup/ObjectManager/Pricebook2/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  price_book_entry: {
    label: "Price Book Entry",
    path: "/lightning/setup/ObjectManager/PricebookEntry/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  privacy_job_session: {
    label: "Privacy Job Session",
    path: "/lightning/setup/ObjectManager/PrivacyJobSession/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  privacy_policy: {
    label: "Privacy Policy",
    path: "/lightning/setup/ObjectManager/PrivacyPolicy/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  privacy_rtbf_request: {
    label: "Privacy RTBF Request",
    path: "/lightning/setup/ObjectManager/PrivacyRTBFRequest/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  problem: {
    label: "Problem",
    path: "/lightning/setup/ObjectManager/Problem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  problem_related_item: {
    label: "Problem Related Item",
    path: "/lightning/setup/ObjectManager/ProblemRelatedItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  process_exception: {
    label: "Process Exception",
    path: "/lightning/setup/ObjectManager/ProcessException/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  product: {
    label: "Product",
    path: "/lightning/setup/ObjectManager/Product2/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  product_consumption_schedule: {
    label: "Product Consumption Schedule",
    path: "/lightning/setup/ObjectManager/ProductConsumptionSchedule/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  quick_text: {
    label: "Quick Text",
    path: "/lightning/setup/ObjectManager/QuickText/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  recommendation: {
    label: "Recommendation",
    path: "/lightning/setup/ObjectManager/Recommendation/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  refund: {
    label: "Refund",
    path: "/lightning/setup/ObjectManager/Refund/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  refund_line_payment: {
    label: "Refund Line Payment",
    path: "/lightning/setup/ObjectManager/RefundLinePayment/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  related_problem_and_incident: {
    label: "Related Problem and Incident",
    path: "/lightning/setup/ObjectManager/ProblemIncident/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  report_anomaly_event_store: {
    label: "Report Anomaly Event Store",
    path: "/lightning/setup/ObjectManager/ReportAnomalyEventStore/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  scorecard: {
    label: "Scorecard",
    path: "/lightning/setup/ObjectManager/Scorecard/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  scorecard_association: {
    label: "Scorecard Association",
    path: "/lightning/setup/ObjectManager/ScorecardAssociation/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  scorecard_metric: {
    label: "Scorecard Metric",
    path: "/lightning/setup/ObjectManager/ScorecardMetric/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  seller: {
    label: "Seller",
    path: "/lightning/setup/ObjectManager/Seller/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  service_contract: {
    label: "Service Contract",
    path: "/lightning/setup/ObjectManager/ServiceContract/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  session_hijacking_event_store: {
    label: "Session Hijacking Event Store",
    path: "/lightning/setup/ObjectManager/SessionHijackingEventStore/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  social_persona: {
    label: "Social Persona",
    path: "/lightning/setup/ObjectManager/SocialPersona/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  task: {
    label: "Task",
    path: "/lightning/setup/ObjectManager/Task/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  user: {
    label: "User",
    path: "/lightning/setup/ObjectManager/User/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  user_provisioning_request: {
    label: "User Provisioning Request",
    path: "/lightning/setup/ObjectManager/UserProvisioningRequest/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  work_order: {
    label: "Work Order",
    path: "/lightning/setup/ObjectManager/WorkOrder/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  work_order_line_item: {
    label: "Work Order Line Item",
    path: "/lightning/setup/ObjectManager/WorkOrderLineItem/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  work_plan: {
    label: "Work Plan",
    path: "/lightning/setup/ObjectManager/WorkPlan/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  work_plan_template: {
    label: "Work Plan Template",
    path: "/lightning/setup/ObjectManager/WorkPlanTemplate/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  work_plan_template_entry: {
    label: "Work Plan Template Entry",
    path: "/lightning/setup/ObjectManager/WorkPlanTemplateEntry/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  work_step: {
    label: "Work Step",
    path: "/lightning/setup/ObjectManager/WorkStep/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
  work_step_template: {
    label: "Work Step Template",
    path: "/lightning/setup/ObjectManager/WorkStepTemplate/FieldsAndRelationships/view",
    pageGroup: "Standard Object",
  },
};
