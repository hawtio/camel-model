import { apacheCamelModelVersion, components, dataformats, definitions, languages, rests } from './index'

describe('camel-model', () => {
  test('version', () => {
    expect(apacheCamelModelVersion).toMatch(/^3[.]\d+[.]\d+\-?\w*$/)
  })

  test('components', () => {
    expect(components).toBeDefined()
    expect(Object.keys(components).length).toBeGreaterThan(100)
    expect(Object.keys(components)).toContain('direct')
  })

  test('dataformats', () => {
    expect(dataformats).toBeDefined()
    expect(Object.keys(dataformats).length).toBeGreaterThan(10)
    expect(Object.keys(dataformats)).toContain('json')
  })

  test('definitions', () => {
    expect(definitions).toBeDefined()
    expect(Object.keys(definitions).length).toBeGreaterThan(30)
    expect(Object.keys(definitions)).toContain('choice')
  })

  test('languages', () => {
    expect(languages).toBeDefined()
    expect(Object.keys(languages).length).toBeGreaterThan(10)
    expect(Object.keys(languages)).toContain('simple')
  })

  test('rests', () => {
    expect(rests).toBeDefined()
    expect(Object.keys(rests).length).toBeGreaterThan(10)
    expect(Object.keys(rests)).toContain('get')
  })
})
