import '@testing-library/jest-dom'
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {}, // deprecated
        removeListener: () => {}, // deprecated
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
})
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

// @ts-ignore
global.ResizeObserver = ResizeObserver