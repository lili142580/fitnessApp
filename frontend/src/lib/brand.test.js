import { afterEach, describe, expect, it } from 'vitest'
import { APP_NAME } from './brand.js'
import { t, _setLangState } from './i18n-core.js'
import zh from '../locales/zh.js'

afterEach(() => _setLangState('en', {}, null, null))

describe('application branding', () => {
  it('brands translated titles and English fallbacks', () => {
    _setLangState('en', {}, null, null)
    expect(t('Self-host openGym')).toBe(`Self-host ${APP_NAME}`)
    _setLangState('zh', zh, null, null)
    expect(t('Reload openGym')).toContain(APP_NAME)
    expect(t('Reload openGym')).not.toContain('openGym')
  })

  it('preserves user-provided names and technical paths', () => {
    _setLangState('en', {}, null, null)
    expect(t('Hi {0}', 'openGym')).toBe('Hi openGym')
    expect(t('Documents/openGym https://github.com/DuarteSantos8/openGym')).toBe('Documents/openGym https://github.com/DuarteSantos8/openGym')
  })
})
