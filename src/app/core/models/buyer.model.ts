/**
 * M1.1 Buyer master.
 *
 * Mirrors BuyerDto.Response and BuyerDto.Request on the Java side. These two
 * files are the contract; when one changes the other has to change with it, so
 * the field names are kept identical on purpose.
 */
export interface Buyer {
  id: number;
  buyerCode: string;
  buyerName: string;
  buyerType: BuyerType;
  address: string | null;
  country: string | null;
  contactPerson: string | null;
  contactNo: string | null;
  email: string | null;
  agentName: string | null;
  commissionPct: number | null;
  /** Commercial terms a costing, PO or LC starts from. */
  defaultCurrency: string | null;
  defaultIncoTerm: string | null;
  defaultIncoTermPlace: string | null;
  defaultPaymentTerm: string | null;
  defaultTenureDays: number | null;
  defaultShipmentMode: string | null;
  defaultAqlLevel: string | null;
  status: BuyerStatus;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

export type BuyerStatus = 'ACTIVE' | 'INACTIVE' | 'BLACKLISTED';

/** DIRECT is the brand; the others order on a brand's behalf for a commission. */
export type BuyerType = 'DIRECT' | 'BUYING_HOUSE' | 'AGENT' | 'LICENSEE';

/** What the M1.1 form posts. Everything but the two required fields may be omitted. */
export interface BuyerRequest {
  buyerCode: string;
  buyerName: string;
  buyerType?: BuyerType | null;
  address?: string | null;
  country?: string | null;
  contactPerson?: string | null;
  contactNo?: string | null;
  email?: string | null;
  agentName?: string | null;
  commissionPct?: number | null;
  defaultCurrency?: string | null;
  defaultIncoTerm?: string | null;
  defaultIncoTermPlace?: string | null;
  defaultPaymentTerm?: string | null;
  defaultTenureDays?: number | null;
  defaultShipmentMode?: string | null;
  defaultAqlLevel?: string | null;
  status?: BuyerStatus | null;
}
