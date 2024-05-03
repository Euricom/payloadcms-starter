import configPromise from '@payload-config'
import { getPayload } from 'payload'

import TestComponent from '@/components/TestComponent'
import { Button } from '@/components/ui/button'
import HtmlProse from '@/components/HtmlProse'

export default async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
  })

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-bold">Test page</h1>
      <Button>Click Me</Button>
      <TestComponent />
      <HtmlProse content={data.docs[0]?.content_html} />
    </div>
  )
}
