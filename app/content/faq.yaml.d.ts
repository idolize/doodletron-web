export interface FAQQuestion {
  question: string
  answer: string
}

export interface FAQSection {
  name: string
  title: string
  questions: FAQQuestion[]
}

export interface FAQ {
  sections: FAQSection[]
}

declare const content: FAQ
export default content
