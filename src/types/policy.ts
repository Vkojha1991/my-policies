// Represents a travel destination
export interface Destination {
  code: string;
  name: string; // e.g., "United States", "Delhi"
}

// Policy status options
export type PolicyStatus = "Active" | "Expired";

// Policy type options
export type PolicyType = "Single Trip" | "Annual";

// Represents an insurance policy
export interface Policy {
  policyNumber: string;          
  policyStart: Date;             
  policyEnd: Date;               
  status: PolicyStatus;          
  destinations: Destination[];   
  type: PolicyType;              
  excess: number;                
  maxTripDuration: number;       
  planName: string;
}
