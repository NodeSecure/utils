import * as npm from "@npm/types";

export function formatBytes(bytes: number): string;
export function locationToString(location: string): string;
export function taggedString(str: string, ...keys: any[]): (...keys: any[]) => string;
export function manifestAuthorRegex(): RegExp;
export function parseManifestAuthor(manifestAuthorField: string): null | npm.Maintainer;
export function parseAuthor(author: any): null | npm.Maintainer;
