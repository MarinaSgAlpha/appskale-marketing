import { PageStub, makeStubMetadata } from "@/components/sections/PageStub";

export const metadata = makeStubMetadata(
  "Terms & Conditions",
  "AppSkale terms of service and privacy policy.",
);

export default function TermsPage() {
  return (
    <PageStub
      title="Terms & Conditions"
      body={
        <p>
          The full terms and privacy policy are being prepared. Until then,
          email{" "}
          <a
            href="mailto:support@appskale.ai"
            className="underline-offset-4 hover:underline text-purple-700"
          >
            support@appskale.ai
          </a>{" "}
          with any questions about how we handle your data.
        </p>
      }
    />
  );
}
