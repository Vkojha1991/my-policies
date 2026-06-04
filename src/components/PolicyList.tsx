import { useState } from "react";
import { usePolicies } from "../context/PolicyContext";
import PolicyCard from "./PolicyCard";
import Pagination from "./Pagination";

const PAGE_SIZE = 3;

export default function PolicyList() {
  const { policies, loading } =
    usePolicies();

  const [page, setPage] =
    useState<number>(1);

  if (loading) {
    return <div>Loading...</div>;
  }

  const start =
    (page - 1) * PAGE_SIZE;

  const visiblePolicies =
    policies.slice(
      start,
      start + PAGE_SIZE
    );

  const totalPages = Math.ceil(
    policies.length / PAGE_SIZE
  );

  return (
    <>
      <div className="space-y-8">
        {visiblePolicies.map(
          (policy) => (
            <PolicyCard
              key={
                policy.policyNumber
              }
              policy={policy}
            />
          )
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}