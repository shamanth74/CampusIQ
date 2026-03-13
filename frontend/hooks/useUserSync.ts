"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";

export function useUserSync() {
  const { user, isLoaded } = useUser();
  const hasSynced = useRef(false);

  useEffect(() => {
    if (!isLoaded || !user || hasSynced.current) return;

    const syncUser = async () => {
      try {
        const res = await fetch("http://localhost:8000/users/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clerk_id: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            username: user.fullName,
          }),
        });

        if (!res.ok) {
          console.error("User sync failed:", res.statusText);
          return;
        }

        hasSynced.current = true;
        console.log("User synced with backend");
      } catch (err) {
        console.error("User sync error:", err);
      }
    };

    syncUser();
  }, [isLoaded, user]);
}
