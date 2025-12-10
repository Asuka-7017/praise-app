'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    // デフォルトの挙動をキャンセル
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/cheer', {
        method: 'POST',
        headers: { 'Content-Tyope': 'application/json' },
        body: JSON.stringify({ comment: input }),
      })
      const data = await res.json()
      if (data.message) {
        console.log(data.message)
        setResponse(data.message)
      }
    } catch (error) {
      console.error(error)
      setResponse(
        'ごめんなさい、今ちょっと考え事をしていました。もう一度教えてくれますか？'
      )
    } finally {
      setLoading(false)
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <h1>CheerUp!</h1>
        <div className={styles.siteDescription}>
          <p>
            コメントを入力すると、AIがあなたにエールを送ります！
            ちょっと落ち込んだときも、前に進みたいときも、ひとこと書くだけで、笑顔と元気をチャージ！
          </p>
        </div>
      </div>
      <div className={styles.userComment}>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={2}
            placeholder="気持ちを教えて！"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.userTextarea}
          />
          <button
            type="submit"
            disabled={loading}
            className={styles.buttonSubmit}
          >
            {loading ? 'AIが言葉を紡いでいます……' : '励ましてもらう！'}
          </button>
        </form>
      </div>
      <div className={styles.resComment}>
        <div className={styles.resText}>
          {response ? (
            <p>{response}</p>
          ) : !loading ? (
            <p>今日あったことや、今の気持ちを書いてみて！ 全力で励ますよ！</p>
          ) : (
            <p>AIが言葉を紡いでいます……</p>
          )}
        </div>
        <div className={styles.resImage}>😊👍</div>
      </div>
    </main>
  )
}
