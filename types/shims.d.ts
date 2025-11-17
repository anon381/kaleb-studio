
// Keep minimal shims only for test config if needed by editors
declare module 'vitest/config' {
  export function defineConfig(config: any): any
}
