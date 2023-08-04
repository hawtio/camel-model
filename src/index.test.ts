import { apacheCamelModelVersion, components, dataformats, definitions, languages, rests } from './index'

describe('camel-model', () => {
  test('version', () => {
    expect(apacheCamelModelVersion).toMatch(/^4[.]\d+[.]\d+\-?\w*$/)
  })

  test('components', () => {
    const comps = components.components
    expect(comps).toBeDefined()
    expect(Object.keys(comps).length).toBeGreaterThan(100)
    expect(Object.keys(comps)).toContain('direct')
  })

  test('dataformats', () => {
    const dfs = dataformats.dataformats
    expect(dfs).toBeDefined()
    expect(Object.keys(dfs).length).toBeGreaterThan(10)
    expect(Object.keys(dfs)).toContain('json')
  })

  test('definitions', () => {
    const defs = definitions.definitions
    expect(defs).toBeDefined()
    expect(Object.keys(defs).length).toBeGreaterThan(30)
    expect(Object.keys(defs)).toContain('choice')
  })

  test('languages', () => {
    const langs = languages.languages
    expect(langs).toBeDefined()
    expect(Object.keys(langs).length).toBeGreaterThan(10)
    expect(Object.keys(langs)).toContain('simple')
  })

  test('rests', () => {
    const rs = rests.rests
    expect(rs).toBeDefined()
    expect(Object.keys(rs).length).toBeGreaterThan(10)
    expect(Object.keys(rs)).toContain('get')
  })
})
