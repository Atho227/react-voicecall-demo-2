import { describe, it, expect } from 'vitest';
import { hexToRgb } from '../renderComponentUtils';

describe('hexToRgb util', () => {
    it('chuyển hex 6 ký tự sang rgba', () => {
        expect(hexToRgb('#3D55CC')).toBe('rgba(61, 85, 204,1)');
    });

    it('chuyển hex 3 ký tự sang rgba', () => {
        expect(hexToRgb('#abc')).toBe('rgba(170, 187, 204,1)');
    });

    it('hoạt động với alpha (opacity) tuỳ chỉnh', () => {
        expect(hexToRgb('#ff0000', 0.5)).toBe('rgba(255, 0, 0,0.5)');
    });

    it('hoạt động nếu bỏ dấu #', () => {
        expect(hexToRgb('00ff00')).toBe('rgba(0, 255, 0,1)');
    });
});
