import type { Policy } from "../types/policy";
import { format } from "date-fns";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Props {
  policy: Policy;
}

export default function PolicyCard({
  policy
}: Props) {
  const destination =
    policy.destinations[0]?.name;

  const isAnnual =
    policy.type === "Annual";

  const onClaimClick = () => {
    console.log(
      `Claim ${policy.policyNumber}`
    );
  };

  const onManageClick = () => {
    console.log(
      `Manage ${policy.policyNumber}`
    );
  };

  return (
    <article
      className="
      bg-white
      rounded-3xl
      pl-6
      pr-6
      pb-10
      pt-10
      shadow-sm
      flex
      flex-col
      lg:flex-row
      justify-between
      gap-6"
    >
      <div className="flex-1 text-left">
        <h2
          className="
          md:text-2xl
          text-xl
          font-bold
          text-blue-600
          mb-6"
        >
          Policy number:
          <span className="text-gray-800 sm:ml-2 block sm:inline-block ">
            {policy.policyNumber}
          </span>
        </h2>

        <div className="grid md:grid-cols-2 md:gap-12 gap-2">

          <div className="md:border-r-2 border-r-0 md:pr-4 pr-0 md:border-gray-100">
            <p className="mb-2">
              <strong>Destination:</strong>{" "}
              {destination}
            </p>

            {isAnnual ? (
              <>
                <p className="mb-2">
                  <strong>
                    Policy start date:
                  </strong>{" "}
                  {format(
                    new Date(
                      policy.policyStart
                    ),
                    "dd MMM yyyy"
                  )}
                </p>

                <p>
                  <strong>
                    Maximum trip duration:
                  </strong>{" "}
                  Up to {
                    policy.maxTripDuration
                  } days
                </p>
              </>
            ) : (
              <p className="mb-2">
                <strong>
                  Travel date:
                </strong>{" "}
                {format(
                  new Date(
                    policy.policyStart
                  ),
                  "dd MMM yyyy"
                )}
                {" - "}
                {format(
                  new Date(
                    policy.policyEnd
                  ),
                  "dd MMM yyyy"
                )}
              </p>
            )}
          </div>

          <div>
            <p className="mb-2">
              <strong>Plan:</strong>{" "}
              {isAnnual
                ? "Annual Multi-trip"
                : `International ${policy.planName}`}
            </p>

            <p>
              <strong>Excess:</strong> $
              {policy.excess}
            </p>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href={`#pds-${policy.policyNumber}`}
            className="
              underline
              focus:outline-2
              flex 
              items-center 
              gap-1
            "
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            <span>View PDS</span>
          </a>

          <a
            href={`#certificate-${policy.policyNumber}`}
            className="
              underline
              focus:outline-2
              flex 
              items-center 
              gap-1
            "
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            <span>Certificate of Insurance</span>
          </a>
        </div>
      </div>

      <div
        className="
        flex
        flex-col
        gap-4
        min-w-55"
      >
        <button
          onClick={onClaimClick}
          className="
          rounded-full
          bg-yellow-200
          px-6
          py-3
          border-2
          text-blue-600
          border-blue-600
          font-semibold
          focus:outline-2"
        >
          Make a claim
        </button>

        <button
          onClick={onManageClick}
          className="
          rounded-full
          border-2
          border-blue-600
          px-6
          py-3
          text-blue-600
          font-semibold
          focus:outline-2"
        >
          Manage my policy
        </button>
      </div>
    </article>
  );
}