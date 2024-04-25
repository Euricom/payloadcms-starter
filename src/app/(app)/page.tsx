import TestComponent from '@/components/TestComponent'
import { Button } from '@/components/ui/button'

export default () => {
  return (
    <div className="bg-slate-300 space-y-3">
      <h1 className="text-xl font-bold">Test page</h1>
      <Button>Click Me</Button>
      <TestComponent />
    </div>
  )
}
