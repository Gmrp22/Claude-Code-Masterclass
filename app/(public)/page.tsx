// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p>
          Welcome to Pocket Heist — the only task manager bold enough to call your to-do list a crime spree.
          Plan covert operations, recruit your crew, and pull off the perfect office caper before anyone notices
          the snacks are gone.
        </p>
        <p>
          Whether you&apos;re staging a surprise birthday ambush, liberating the last good chair from accounting,
          or orchestrating a full calendar chaos event — every great heist starts here.
        </p>
      </div>
    </div>
  )
}
