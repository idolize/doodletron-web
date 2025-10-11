import TosContent, { meta } from '@/app/content/tos.mdx'
import ProseDocument from '@/app/components/ProseDocument'

export default function Tos() {
  return (
    <ProseDocument title="Terms of Service" meta={meta}>
      <TosContent />
    </ProseDocument>
  )
}
