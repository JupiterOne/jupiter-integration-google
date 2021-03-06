import { RelationshipClass } from '@jupiterone/integration-sdk-core';

export const Steps = {
  DOMAINS: 'step-fetch-domains',
  ACCOUNT: 'step-create-account',
  USERS: 'step-fetch-users',
  TOKENS: 'step-fetch-tokens',
  GROUPS: 'step-fetch-groups',
  GROUP_SETTINGS: 'step-fetch-group-settings',
};

export const entities = {
  DOMAIN: {
    resourceName: 'Domain',
    _type: 'google_domain',
    _class: 'Domain',
  },
  USER: {
    resourceName: 'User',
    _type: 'google_user',
    _class: 'User',
  },
  GROUP: {
    resourceName: 'Group',
    _type: 'google_group',
    _class: 'UserGroup',
  },
  GROUP_SETTINGS: {
    resourceName: 'Group Settings',
    _type: 'google_group_settings',
    _class: 'Configuration',
  },
  ACCOUNT: {
    resourceName: 'Account',
    _type: 'google_account',
    _class: 'Account',
  },
  SITE: {
    resourceName: 'Site',
    _type: 'google_site',
    _class: 'Site',
  },
  TOKEN: {
    resourceName: 'Token',
    _type: 'google_token',
    _class: 'AccessKey',
  },
};

export const relationships = {
  ACCOUNT_HAS_USER: {
    _type: 'google_account_has_user',
    _class: RelationshipClass.HAS,
    sourceType: entities.ACCOUNT._type,
    targetType: entities.USER._type,
  },
  SITE_HOSTS_USER: {
    _type: 'google_site_has_user',
    // TODO: Change to HOSTS
    _class: RelationshipClass.HAS,
    sourceType: entities.SITE._type,
    targetType: entities.USER._type,
  },
  GROUP_HAS_SETTINGS: {
    _type: 'google_group_has_settings',
    _class: RelationshipClass.HAS,
    sourceType: entities.GROUP._type,
    targetType: entities.GROUP_SETTINGS._type,
  },
  GROUP_HAS_USER: {
    _type: 'google_group_has_user',
    _class: RelationshipClass.HAS,
    sourceType: entities.GROUP._type,
    targetType: entities.USER._type,
  },
  GROUP_HAS_GROUP: {
    _type: 'google_group_has_group',
    _class: RelationshipClass.HAS,
    sourceType: entities.GROUP._type,
    targetType: entities.GROUP._type,
  },
  ACCOUNT_HAS_GROUP: {
    _type: 'google_account_has_group',
    _class: RelationshipClass.HAS,
    sourceType: entities.ACCOUNT._type,
    targetType: entities.GROUP._type,
  },
  USER_ASSIGNED_TOKEN: {
    _type: 'google_user_assigned_token',
    _class: RelationshipClass.ASSIGNED,
    sourceType: entities.USER._type,
    targetType: entities.TOKEN._type,
  },
  TOKEN_ALLOWS_VENDOR: {
    _type: 'google_token_allows_mapped_vendor',
    _class: RelationshipClass.ALLOWS,
    sourceType: entities.TOKEN._type,
    targetType: 'mapped_entity (class Vendor)',
  },
};
