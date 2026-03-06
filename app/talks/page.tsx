"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { talks, type Talk, type TalkType } from "@/content/talks";

const TYPES: { value: TalkType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "meetup", label: "Meetups & Summits" },
  { value: "conference", label: "Conferences" },
  { value: "other", label: "Other" },
];

function getYears(talksList: Talk[]) {
  const years = new Set(talksList.map((t) => t.year));
  return Array.from(years).sort((a, b) => b.localeCompare(a));
}

function getStats(talksList: Talk[]) {
  const meetups = talksList.filter((t) => t.type === "meetup").length;
  const conferences = talksList.filter((t) => t.type === "conference").length;
  const cities = new Set(talksList.map((t) => t.location)).size;
  return { talks: talksList.length, meetups, conferences, cities };
}

export default function TalksPage() {
  const [typeFilter, setTypeFilter] = useState<TalkType | "all">("all");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const years = useMemo(() => getYears(talks), []);

  const filtered = useMemo(() => {
    return talks.filter((t) => {
      if (typeFilter !== "all" && t.type !== typeFilter) return false;
      if (yearFilter !== "all" && t.year !== yearFilter) return false;
      return true;
    });
  }, [typeFilter, yearFilter]);

  const stats = useMemo(() => getStats(filtered), [filtered]);

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
        Public Talks
      </h1>
      <p className="text-[var(--ink-muted)] mb-8 text-lg">
        AI meetups, tech talks & conferences.
      </p>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 text-center">
          <div className="font-display text-2xl font-semibold text-[var(--ink)]">{stats.talks}</div>
          <div className="text-sm text-[var(--ink-muted)]">Talks</div>
        </div>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 text-center">
          <div className="font-display text-2xl font-semibold text-[var(--ink)]">{stats.meetups}</div>
          <div className="text-sm text-[var(--ink-muted)]">Meetups</div>
        </div>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 text-center">
          <div className="font-display text-2xl font-semibold text-[var(--ink)]">{stats.conferences}</div>
          <div className="text-sm text-[var(--ink-muted)]">Conferences</div>
        </div>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 text-center">
          <div className="font-display text-2xl font-semibold text-[var(--ink)]">{stats.cities}</div>
          <div className="text-sm text-[var(--ink-muted)]">Cities</div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <span className="text-sm font-medium text-[var(--ink-muted)]">Type:</span>
        <div className="flex flex-wrap gap-2">
          {TYPES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setTypeFilter(value)}
              className={`rounded-button px-3 py-1.5 text-sm font-medium transition-colors ${
                typeFilter === value
                  ? "bg-neutral-100 text-[var(--ink)]"
                  : "bg-[var(--paper-elevated)] border border-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-sm font-medium text-[var(--ink-muted)] ml-4 sm:ml-0">Year:</span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setYearFilter("all")}
            className={`rounded-button px-3 py-1.5 text-sm font-medium transition-colors ${
              yearFilter === "all"
                ? "bg-neutral-100 text-[var(--ink)]"
                : "bg-[var(--paper-elevated)] border border-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
            }`}
          >
            All
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(y)}
              className={`rounded-button px-3 py-1.5 text-sm font-medium transition-colors ${
                yearFilter === y
                  ? "bg-neutral-100 text-[var(--ink)]"
                  : "bg-[var(--paper-elevated)] border border-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
            }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Talk cards */}
      <ul className="space-y-3">
        {filtered.map((talk, i) => (
          <li
            key={`${talk.title}-${talk.event}-${talk.year}`}
            className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 transition-colors hover:border-[var(--border-strong)]"
          >
            <h2 className="font-display font-semibold text-lg text-[var(--ink)]">
              {talk.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              {talk.event} · {talk.year} {talk.flag} {talk.location}
            </p>
            {talk.links && Object.keys(talk.links).length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {talk.links.summary && (
                  <a
                    href={talk.links.summary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-button border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1 text-sm font-medium text-[var(--ink)] hover:bg-neutral-100"
                  >
                    Summary
                  </a>
                )}
                {talk.links.slides && (
                  <a
                    href={talk.links.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-button border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1 text-sm font-medium text-[var(--ink)] hover:bg-neutral-100"
                  >
                    Slides
                  </a>
                )}
                {talk.links.abstract && (
                  <a
                    href={talk.links.abstract}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-button border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1 text-sm font-medium text-[var(--ink)] hover:bg-neutral-100"
                  >
                    Abstract
                  </a>
                )}
                {talk.links.paper && (
                  <a
                    href={talk.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-button border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1 text-sm font-medium text-[var(--ink)] hover:bg-neutral-100"
                  >
                    Paper
                  </a>
                )}
                {talk.links.poster && (
                  <a
                    href={talk.links.poster}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-button border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1 text-sm font-medium text-[var(--ink)] hover:bg-neutral-100"
                  >
                    Poster
                  </a>
                )}
                {talk.links.photo && (
                  <a
                    href={talk.links.photo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-button border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1 text-sm font-medium text-[var(--ink)] hover:bg-neutral-100"
                  >
                    Photo
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-8 text-center text-[var(--ink-muted)]">
          No talks match the selected filters.
        </div>
      )}

      <p className="mt-10 text-sm text-[var(--ink-muted)]">
        <Link href="/" className="font-medium text-[var(--ink)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
