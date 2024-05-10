export const HtmlProse = async ({ content }: { content: any }) => {
  if (!content) {
    return null;
  }
  return (
    <div className='prose m-2'>
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default HtmlProse;
