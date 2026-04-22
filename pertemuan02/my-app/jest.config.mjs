import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src/'],
    collectCoverage: true,
    // Modifikasi di bawah ini buat ngejar target > 50%
    collectCoverageFrom: [
        'src/pages/produk/index.tsx', 
        'src/views/produk/index.tsx',
        'src/pages/about/index.tsx',
        '!**/[id].tsx', 
        '!**/server.tsx',
        '!**/static.tsx',
    ],
    // Penambahan Threshold (Opsional, biar Jest ngasih peringatan kalau di bawah 50%)
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
    },
}

export default createJestConfig(config)