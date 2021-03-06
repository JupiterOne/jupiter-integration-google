import { createDomainEntity } from './converters';
import { admin_directory_v1 } from 'googleapis';

function getMockDomain(
  partial?: admin_directory_v1.Schema$Domains,
): admin_directory_v1.Schema$Domains {
  return {
    kind: 'admin#directory#domain',
    etag: 'abc123',
    domainName: 'jupiterone.io',
    domainAliases: [
      {
        kind: 'admin#directory#domainAlias',
        etag: 'abc12345',
        domainAliasName: 'jupiterone.io.test-google-a.com',
        parentDomainName: 'jupiterone.io',
        verified: true,
        creationTime: '1549555037874',
      },
    ],
    isPrimary: false,
    verified: true,
    creationTime: '1549555037874',
    ...partial,
  };
}

describe('#createDomainEntity', () => {
  test('should convert to entity', () => {
    expect(createDomainEntity(getMockDomain())).toMatchSnapshot();
  });

  test('should convert to entity with isPrimary true', () => {
    expect(
      createDomainEntity(
        getMockDomain({
          isPrimary: true,
        }),
      ),
    ).toMatchSnapshot();
  });

  test('should convert to entity with verified false', () => {
    expect(
      createDomainEntity(
        getMockDomain({
          verified: false,
        }),
      ),
    ).toMatchSnapshot();
  });
});
