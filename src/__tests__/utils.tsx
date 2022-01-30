import { render } from '@testing-library/react'
import React from 'react'

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
 return {children}
}

const customRender = (ui: JSX.Element, options?: any) =>
 render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }