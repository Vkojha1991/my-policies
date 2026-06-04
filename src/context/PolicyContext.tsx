import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import type { ReactNode } from "react";

import { getPolicies } from "../api/policyApi";
import type { Policy } from "../types/policy";

interface PolicyContextType {
  policies: Policy[];
  loading: boolean;
}

const PolicyContext = createContext<PolicyContextType | null>(null);

export const PolicyProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [policies, setPolicies] =
    useState<Policy[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    const data = await getPolicies();
    const filtered = data
      .filter(
        (policy) =>
          policy.status === "Active"
      )
      .sort(
        (a, b) =>
          new Date(a.policyStart).getTime() -
          new Date(b.policyStart).getTime()
      );

    setPolicies(filtered);
    setLoading(false);
  };

  return (
    <PolicyContext.Provider
      value={{
        policies,
        loading
      }}
    >
      {children}
    </PolicyContext.Provider>
  );
};

export const usePolicies = () => {
  const context =
    useContext(PolicyContext);

  if (!context) {
    throw new Error(
      "usePolicies must be used within PolicyProvider"
    );
  }
  return context;
};