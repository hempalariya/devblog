// components/TiptapEditor.jsx
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Editor = ({ onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html); // Send content up to parent
    },
  });

  if (!editor) return null;
  return (
    <div>
      
      <div className="border p-4 rounded shadow">
        <div className="mb-2 space-x-2">
        <button type='button' onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'font-bold' : ''}>
          Bold
        </button>
        <button type='button'  onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'italic' : ''}>
          Italic
        </button>
        <button type='button'  onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'line-through' : ''}>
          Strike
        </button>
        <button type='button'  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'underline' : ''}>
          H1
        </button>
        <button type='button'  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'underline' : ''}>
          H2
        </button>
        <button type='button'  onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </button>
        <button type='button'  onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          Ordered List
        </button>
      </div>
        <EditorContent editor={editor} className="h-[400px] overflow-auto border p-4" />

      </div>
    </div>
  )
}

export default Editor
