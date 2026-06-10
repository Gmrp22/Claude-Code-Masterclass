// preview page for newly created UI components

import SkeletonCard from "@/components/SkeletonCard"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <SkeletonCard />
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Avatar name="alice" />
        <Avatar name="Alice" />
        <Avatar name="JohnDoe" />
        <Avatar name="MasterThief" />
      </div>
    </div>
  )
}
