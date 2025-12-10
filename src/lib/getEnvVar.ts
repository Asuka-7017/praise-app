// サーバーサイド用ユーティリティ
function getEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export const GEMINI_API_KEY = getEnvVar('GEMINI_API_KEY')
