export const HtmlProse = async ({ content }: { content: any }) => {
  if (!content) {
    return null
  }
  return (
    <div className="m-2 prose">
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default HtmlProse
