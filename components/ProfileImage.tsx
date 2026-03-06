"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { name: string };

/**
 * Profile photo: put your image at public/profilepic.png (or public/profile.jpg).
 * If the file is missing or fails to load, initials are shown instead.
 */
export function ProfileImage({ name }: Props) {
  const [error, setError] = useState(false);
  const initials = name.split(" ").map((n) => n[0]).join("");

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center text-4xl font-display font-semibold text-[var(--accent)]/80 sm:text-5xl">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src="/profilepic.png"
      alt={name}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 128px, 160px"
      onError={() => setError(true)}
    />
  );
}
