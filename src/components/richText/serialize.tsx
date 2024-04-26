import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
// import Link from 'next/link'

type Node = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Node[]
  url?: string
  [key: string]: unknown
  newTab?: boolean
}

export type CustomRenderers = {
  [key: string]: (args: { node: Node; Serialize: SerializeFunction; index: number }) => JSX.Element // eslint-disable-line
}

type SerializeFunction = React.FC<{
  content?: Node[]
  customRenderers?: CustomRenderers
}>

const isText = (value: any): boolean =>
  typeof value === 'object' && value !== null && typeof value.text === 'string'

const Heading = ({ node }: { node: Node }) => {
  if (node.tag === 'h1') {
    return (
      <h1>
        <Serialize content={node.children} />
      </h1>
    )
  }
  if (node.tag === 'h2') {
    return (
      <h2>
        <Serialize content={node.children} />
      </h2>
    )
  }
  if (node.tag === 'h3') {
    return (
      <h3>
        <Serialize content={node.children} />
      </h3>
    )
  }
  if (node.tag === 'h3') {
    return (
      <h4>
        <Serialize content={node.children} />
      </h4>
    )
  }
  if (node.tag === 'h3') {
    return (
      <h5>
        <Serialize content={node.children} />
      </h5>
    )
  }
}

const List = ({ node }: { node: Node }) => {
  if (node.listType === 'bullet') {
    return (
      <ul>
        <Serialize content={node.children} />
      </ul>
    )
  }
  return (
    <ol>
      <Serialize content={node.children} />
    </ol>
  )
}

export const Serialize: SerializeFunction = ({ content, customRenderers }) => {
  return (
    <Fragment>
      {content?.map((node: any, i) => {
        if (isText(node)) {
          // // @ts-expect-error
          let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />

          // if (node.bold) {
          //   text = <strong key={i}>{text}</strong>
          // }

          // if (node.code) {
          //   text = <code key={i}>{text}</code>
          // }

          // if (node.italic) {
          //   text = <em key={i}>{text}</em>
          // }

          // if (node.underline) {
          //   text = (
          //     <span style={{ textDecoration: 'underline' }} key={i}>
          //       {text}
          //     </span>
          //   )
          // }

          // if (node.strikethrough) {
          //   text = (
          //     <span style={{ textDecoration: 'line-through' }} key={i}>
          //       {text}
          //     </span>
          //   )
          // }

          return <Fragment key={i}>{text}</Fragment>
        }

        if (!node) {
          return null
        }

        if (
          customRenderers &&
          customRenderers[node.type] &&
          typeof customRenderers[node.type] === 'function'
        ) {
          return customRenderers[node.type]({ node, Serialize, index: i })
        }

        switch (node.type) {
          case 'heading':
            return <Heading key={i} node={node} />

          case 'list':
            return <List key={i} node={node} />

          case 'paragraph':
            return (
              <p key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </p>
            )

          case 'listitem':
            return (
              <li key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </li>
            )

          // case 'br':
          //   return <br key={i} />
          // case 'quote':
          //   return (
          //     <blockquote key={i}>
          //       <Serialize content={node.children} customRenderers={customRenderers} />
          //     </blockquote>
          //   )

          // case 'link':
          //   return (
          //     <Link
          //       href={escapeHTML(node.url)}
          //       key={i}
          //       {...(node.newTab
          //         ? {
          //             target: '_blank',
          //             rel: 'noopener noreferrer',
          //           }
          //         : {})}
          //     >
          //       <Serialize content={node.children} customRenderers={customRenderers} />
          //     </Link>
          //   )

          default:
            return <Serialize key={i} content={node.children} customRenderers={customRenderers} />
        }
      })}
    </Fragment>
  )
}
