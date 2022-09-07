import { ComponentProps } from 'react'
import Link from 'next/link'

type Props = ComponentProps<typeof Link> & { active?: boolean }

export const OptionalLink = ({ children, active, ...props }: Props) => {
  if (!active) {
    return <>{children}</>
  }
  return <Link {...props}>{children}</Link>
}
