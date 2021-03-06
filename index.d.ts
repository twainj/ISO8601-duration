
declare module 'iso8601-duration' {
  export function parse(durationString: string): Duration;
  export function end(duration: Duration, startDate: Date): Date;
  export function toSeconds(duration: Duration, startDate: Date): number;
  export function toString(duration: Duration): string;
  export const pattern: RegExp;

  export class Duration {
    weeks: number;
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
}
