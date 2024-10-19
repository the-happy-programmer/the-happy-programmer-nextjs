'use client'
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  EditorRoot,
  JSONContent,
} from 'novel'
import { defaultExtensions } from '@/components/add/extention'
import { useState } from 'react'
const extentions = [...defaultExtensions, slashCommand]
import { useDebounceCallback } from 'usehooks-ts'
import { slashCommand, suggestionItems } from './slashCommand'

export default function Editor({ content }: { content: JSONContent }) {
  const [openNode, setOpenNode] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openLink, setOpenLink] = useState(false)
  const [mycontent, setContent] = useState<JSONContent>(content)

  const debounce = useDebounceCallback(setContent, 500)

  return (
    <EditorRoot>
      <EditorContent
        extensions={extentions}
        initialContent={mycontent}
        onUpdate={({ editor }) => {
          const json = editor.getJSON()
          debounce(json)
        }}
      >
        <EditorCommand className="z-50 h-auto max-h-[330px]  w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
          <EditorCommandList>
            {suggestionItems?.map((item: any) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command(val)}
                className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                key={item.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>
      </EditorContent>
    </EditorRoot>
  )
}
