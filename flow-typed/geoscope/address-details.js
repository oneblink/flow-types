// @flow

export type StateElectorate = {
  stateElectoralName?: string,
  stateElectoralType?: string,
  [k: string]: unknown,
}[]
export type MessagesLegacy = {
  code?: string,
  description?: string,
  message?: string,
  severity?: string,
  [k: string]: unknown,
}[]

export interface Address {
  addressDetails?: AddressDetails;
  addressId: string;
  addressRecordType: 'Primary' | 'Secondary';
  asgsMain?: ASGSMain;
  asgsRemoteness?: ASGSRemoteness;
  buildingsRolloutStatus: 'RELEASED';
  commonwealthElectorate?: CommonwealthElectorate;
  geo?: Geo;
  links: AddressLinks;
  localGovernmentArea?: LocalGovernmentArea;
  relatedBuildingIds?: string[];
  stateElectorate?: StateElectorate;
  messages?: MessagesLegacy;
  [k: string]: unknown;
}
export interface AddressDetails {
  cadastralIdentifier?: string;
  formattedAddress?: string;
  localityName?: string;
  postcode?: string;
  stateTerritory?: string;
  streetName?: string;
  streetNumber1?: string;
  streetNumber2?: string;
  complexUnitIdentifier?: string;
  complexUnitType?: string;
  siteName?: string;
  streetType?: string;
  lotIdentifier?: string;
  streetSuffix?: string;
  streetPrefix?: string;
  complexLevelIdentifier?: string;
  complexLevelType?: string;
  [k: string]: unknown;
}
export interface ASGSMain {
  '2011'?: {
    mbId?: string,
    sa1Id?: string,
    sa2Id?: string,
    sa2Name?: string,
    sa3Id?: string,
    sa3Name?: string,
    sa4Id?: string,
    sa4Name?: string,
    [k: string]: unknown,
  };
  '2016'?: {
    mbId?: string,
    sa1Id?: string,
    sa2Id?: string,
    sa2Name?: string,
    sa3Id?: string,
    sa3Name?: string,
    sa4Id?: string,
    sa4Name?: string,
    [k: string]: unknown,
  };
  [k: string]: unknown;
}
export interface ASGSRemoteness {
  '2011'?: {
    categoryCode?: string,
    categoryName?: string,
    code?: string,
    [k: string]: unknown,
  };
  '2016'?: {
    categoryCode?: string,
    categoryName?: string,
    code?: string,
    [k: string]: unknown,
  };
  [k: string]: unknown;
}
export interface CommonwealthElectorate {
  commElectoralName?: string;
  commElectoralPid?: string;
  [k: string]: unknown;
}
export interface Geo {
  geoDatumCode?: string;
  geoFeature?: string;
  geometry?: {
    coordinates?: number[],
    type?: string,
    [k: string]: unknown,
  };
  [k: string]: unknown;
}
export interface AddressLinks {
  addressDetails?: string;
  asgsMain?: string;
  asgsRemoteness?: string;
  commonwealthElectorate?: string;
  geo?: string;
  localGovernmentArea?: string;
  stateElectorate?: string;
  [k: string]: unknown;
}
export interface LocalGovernmentArea {
  lgaName?: string;
  lgaPid?: string;
  lgaShortName?: string;
  [k: string]: unknown;
}
