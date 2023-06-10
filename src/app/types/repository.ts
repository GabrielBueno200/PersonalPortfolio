export type Repository = {
  id: number
  name: string
  fullName: string
  description: string
  url: string
  readmeMarkdown: string
  defaultBranch: string
  language: string
  createdAt: Date
  deployedUrl?: string
}

