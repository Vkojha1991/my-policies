import policies from "../data/policies.json";
import type { Policy } from "../types/policy";

export const getPolicies = async (): Promise<Policy[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        policies.map((p) => ({
          ...p,
          policyStart: new Date(p.policyStart),
          policyEnd: new Date(p.policyEnd),
        })) as Policy[]
      );
    }, 500);
  });
};