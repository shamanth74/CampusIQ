"use client";

import { useUserSync } from "@/hooks/useUserSync";

export default function UserSyncProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useUserSync();
  return <>{children}</>;
}
